// One-off admin script: uploads a local image as a Contentful asset, publishes
// it, and links it as the coverImage on the AI-agent-security blog entry.
import { readFileSync } from "node:fs";

const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
const ENVIRONMENT = "master";
const ENTRY_ID = "5eUVjoftzhWLWREs35LFVz";
const IMAGE_PATH = "/tmp/kryttr-cover-ai-agent-security.png";

const headers = {
  Authorization: `Bearer ${TOKEN}`,
  "Content-Type": "application/vnd.contentful.management.v1+json",
};

async function main() {
  const fileBuffer = readFileSync(IMAGE_PATH);

  const uploadRes = await fetch(`https://upload.contentful.com/spaces/${SPACE_ID}/uploads`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/octet-stream",
    },
    body: fileBuffer,
  });
  const upload = await uploadRes.json();
  if (!uploadRes.ok) throw new Error("UPLOAD FAILED: " + JSON.stringify(upload));
  console.log("Uploaded binary:", upload.sys.id);

  const assetRes = await fetch(
    `https://api.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/assets`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({
        fields: {
          title: { "en-US": "AI agent security \u2014 trust boundary breach illustration" },
          file: {
            "en-US": {
              contentType: "image/png",
              fileName: "ai-agent-security-trust-boundary.png",
              uploadFrom: { sys: { type: "Link", linkType: "Upload", id: upload.sys.id } },
            },
          },
        },
      }),
    }
  );
  const asset = await assetRes.json();
  if (!assetRes.ok) throw new Error("ASSET CREATE FAILED: " + JSON.stringify(asset));
  console.log("Created asset:", asset.sys.id);

  await fetch(
    `https://api.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/assets/${asset.sys.id}/files/en-US/process`,
    { method: "PUT", headers: { Authorization: `Bearer ${TOKEN}`, "X-Contentful-Version": String(asset.sys.version) } }
  );

  // Poll until Contentful finishes processing the file.
  let processed;
  let version = asset.sys.version;
  for (let i = 0; i < 15; i++) {
    await new Promise((r) => setTimeout(r, 1500));
    const check = await fetch(
      `https://api.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/assets/${asset.sys.id}`,
      { headers: { Authorization: `Bearer ${TOKEN}` } }
    );
    processed = await check.json();
    version = processed.sys.version;
    if (processed.fields?.file?.["en-US"]?.url) break;
  }
  if (!processed?.fields?.file?.["en-US"]?.url) throw new Error("Asset never finished processing");
  console.log("Processed, file url:", processed.fields.file["en-US"].url);

  const publishAssetRes = await fetch(
    `https://api.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/assets/${asset.sys.id}/published`,
    { method: "PUT", headers: { Authorization: `Bearer ${TOKEN}`, "X-Contentful-Version": String(version) } }
  );
  const publishedAsset = await publishAssetRes.json();
  if (!publishAssetRes.ok) throw new Error("ASSET PUBLISH FAILED: " + JSON.stringify(publishedAsset));
  console.log("Published asset:", publishedAsset.sys.id);

  const entryRes = await fetch(
    `https://api.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/entries/${ENTRY_ID}`,
    { headers: { Authorization: `Bearer ${TOKEN}` } }
  );
  const entry = await entryRes.json();

  entry.fields.coverImage = {
    "en-US": { sys: { type: "Link", linkType: "Asset", id: asset.sys.id } },
  };

  const updateRes = await fetch(
    `https://api.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/entries/${ENTRY_ID}`,
    {
      method: "PUT",
      headers: { ...headers, "X-Contentful-Version": String(entry.sys.version) },
      body: JSON.stringify({ fields: entry.fields }),
    }
  );
  const updated = await updateRes.json();
  if (!updateRes.ok) throw new Error("ENTRY UPDATE FAILED: " + JSON.stringify(updated));
  console.log("Updated entry version:", updated.sys.version);

  const publishEntryRes = await fetch(
    `https://api.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/entries/${ENTRY_ID}/published`,
    { method: "PUT", headers: { Authorization: `Bearer ${TOKEN}`, "X-Contentful-Version": String(updated.sys.version) } }
  );
  const publishedEntry = await publishEntryRes.json();
  if (!publishEntryRes.ok) throw new Error("ENTRY PUBLISH FAILED: " + JSON.stringify(publishedEntry));
  console.log("Entry republished with cover image.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
