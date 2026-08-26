// Reusable batch publisher: takes a batch content module (array of post
// objects) and, for each post, creates + publishes the Contentful entry,
// generates original cover art, uploads it, and attaches it. Usage:
//   node scripts/publish-batch.mjs ./content/batch-1.mjs
import sharp from "sharp";
import { generateCoverSvg } from "./lib/cover-svg.mjs";

const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
const ENVIRONMENT = "master";

const headers = {
  Authorization: `Bearer ${TOKEN}`,
  "Content-Type": "application/vnd.contentful.management.v1+json",
};

async function createAndPublishEntry(post) {
  const createRes = await fetch(
    `https://api.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/entries`,
    {
      method: "POST",
      headers: { ...headers, "X-Contentful-Content-Type": "blogs" },
      body: JSON.stringify({
        fields: {
          title: { "en-US": post.title },
          slug: { "en-US": post.slug },
          excerpt: { "en-US": post.excerpt },
          body: { "en-US": post.body },
          author: { "en-US": "Kryttr" },
          publishedDate: { "en-US": new Date().toISOString() },
          tags: { "en-US": post.tags },
        },
      }),
    }
  );
  const entry = await createRes.json();
  if (!createRes.ok) throw new Error("ENTRY CREATE FAILED: " + JSON.stringify(entry));

  const publishRes = await fetch(
    `https://api.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/entries/${entry.sys.id}/published`,
    { method: "PUT", headers: { Authorization: `Bearer ${TOKEN}`, "X-Contentful-Version": String(entry.sys.version) } }
  );
  const published = await publishRes.json();
  if (!publishRes.ok) throw new Error("ENTRY PUBLISH FAILED: " + JSON.stringify(published));

  return { id: entry.sys.id, version: published.sys.version };
}

async function attachCoverImage(post, entryId) {
  const svg = generateCoverSvg({ slug: post.slug, kicker: post.kicker, motif: post.motif });
  const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();

  const uploadRes = await fetch(`https://upload.contentful.com/spaces/${SPACE_ID}/uploads`, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/octet-stream" },
    body: pngBuffer,
  });
  const upload = await uploadRes.json();
  if (!uploadRes.ok) throw new Error("UPLOAD FAILED: " + JSON.stringify(upload));

  const assetRes = await fetch(
    `https://api.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/assets`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({
        fields: {
          title: { "en-US": `${post.title} \u2014 cover art` },
          file: {
            "en-US": {
              contentType: "image/png",
              fileName: `${post.slug}.png`,
              uploadFrom: { sys: { type: "Link", linkType: "Upload", id: upload.sys.id } },
            },
          },
        },
      }),
    }
  );
  const asset = await assetRes.json();
  if (!assetRes.ok) throw new Error("ASSET CREATE FAILED: " + JSON.stringify(asset));

  await fetch(
    `https://api.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/assets/${asset.sys.id}/files/en-US/process`,
    { method: "PUT", headers: { Authorization: `Bearer ${TOKEN}`, "X-Contentful-Version": String(asset.sys.version) } }
  );

  let processed;
  let version = asset.sys.version;
  for (let i = 0; i < 15; i++) {
    await new Promise((r) => setTimeout(r, 1200));
    const check = await fetch(
      `https://api.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/assets/${asset.sys.id}`,
      { headers: { Authorization: `Bearer ${TOKEN}` } }
    );
    processed = await check.json();
    version = processed.sys.version;
    if (processed.fields?.file?.["en-US"]?.url) break;
  }
  if (!processed?.fields?.file?.["en-US"]?.url) throw new Error("Asset never finished processing");

  const publishAssetRes = await fetch(
    `https://api.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/assets/${asset.sys.id}/published`,
    { method: "PUT", headers: { Authorization: `Bearer ${TOKEN}`, "X-Contentful-Version": String(version) } }
  );
  const publishedAsset = await publishAssetRes.json();
  if (!publishAssetRes.ok) throw new Error("ASSET PUBLISH FAILED: " + JSON.stringify(publishedAsset));

  const entryRes = await fetch(
    `https://api.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/entries/${entryId}`,
    { headers: { Authorization: `Bearer ${TOKEN}` } }
  );
  const entry = await entryRes.json();
  entry.fields.coverImage = { "en-US": { sys: { type: "Link", linkType: "Asset", id: asset.sys.id } } };

  const updateRes = await fetch(
    `https://api.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/entries/${entryId}`,
    {
      method: "PUT",
      headers: { ...headers, "X-Contentful-Version": String(entry.sys.version) },
      body: JSON.stringify({ fields: entry.fields }),
    }
  );
  const updated = await updateRes.json();
  if (!updateRes.ok) throw new Error("ENTRY UPDATE FAILED: " + JSON.stringify(updated));

  const publishEntryRes = await fetch(
    `https://api.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/entries/${entryId}/published`,
    { method: "PUT", headers: { Authorization: `Bearer ${TOKEN}`, "X-Contentful-Version": String(updated.sys.version) } }
  );
  const publishedEntry = await publishEntryRes.json();
  if (!publishEntryRes.ok) throw new Error("ENTRY PUBLISH FAILED: " + JSON.stringify(publishedEntry));
}

async function main() {
  const batchPath = process.argv[2];
  const onlySlugs = process.argv[3] ? process.argv[3].split(",") : null;
  if (!batchPath) throw new Error("Usage: node publish-batch.mjs <path-to-batch-module> [slug1,slug2,...]");
  if (!SPACE_ID || !TOKEN) throw new Error("Missing NEXT_PUBLIC_CONTENTFUL_SPACE_ID or CONTENTFUL_MANAGEMENT_TOKEN");

  const { posts: allPosts } = await import(batchPath);
  const posts = onlySlugs ? allPosts.filter((p) => onlySlugs.includes(p.slug)) : allPosts;
  const results = [];

  for (const post of posts) {
    try {
      const { id } = await createAndPublishEntry(post);
      await attachCoverImage(post, id);
      console.log(`OK   ${post.slug} -> ${id}`);
      results.push({ slug: post.slug, id, ok: true });
    } catch (err) {
      console.error(`FAIL ${post.slug}:`, err.message);
      results.push({ slug: post.slug, ok: false, error: err.message });
    }
  }

  const failed = results.filter((r) => !r.ok);
  console.log(`\nDone. ${results.length - failed.length}/${results.length} succeeded.`);
  if (failed.length) {
    console.log("Failed:", failed.map((f) => f.slug).join(", "));
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
