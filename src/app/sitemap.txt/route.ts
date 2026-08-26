import sitemap from "@/app/sitemap";

// Plain-text mirror of the XML sitemap, generated from the same source so
// the two never drift.
export async function GET() {
  const entries = await sitemap();
  const body = entries.map((entry) => entry.url).join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
 