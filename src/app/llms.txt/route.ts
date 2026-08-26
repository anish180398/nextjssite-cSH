import { services } from "@/lib/data/services";
import { technologies } from "@/lib/data/technologies";
import { industries } from "@/lib/data/industries";
import { countries } from "@/lib/data/countries";

// Emerging convention (see llmstxt.org) for giving AI/answer-engine crawlers
// a concise, structured summary of the site — generated from the same data
// arrays that back /services, /technologies, and /industries so it can't
// drift out of sync with the real pages.
export async function GET() {
  const baseUrl = "https://kryttr.com";

  const lines = [
    "# Kryttr",
    "",
    "> Kryttr is a digital agency building web development, mobile app, UI/UX design, SEO, and e-commerce solutions for businesses worldwide. Founded 2021, based in Chennai, India.",
    "",
    "## Services",
    ...services.map((s) => `- [${s.title}](${baseUrl}/services/${s.slug}): ${s.description}`),
    "",
    "## Technologies",
    ...technologies.map((t) => `- [${t.name}](${baseUrl}/technologies/${t.slug}): ${t.description}`),
    "",
    "## Industries served",
    ...industries.map((i) => `- [${i.name}](${baseUrl}/industries/${i.slug}): ${i.description}`),
    "",
    "## Countries we work with",
    ...countries.map((c) => `- [${c.name}](${baseUrl}/countries/${c.slug}): ${c.heroTagline}`),
    "",
    "## Other pages",
    `- [About](${baseUrl}/about)`,
    `- [Portfolio](${baseUrl}/portfolio)`,
    `- [Products](${baseUrl}/projects)`,
    `- [Blog](${baseUrl}/blog)`,
    `- [Contact](${baseUrl}/contact)`,
    "",
    "## Contact",
    "- Email: anish@kryttr.com",
    "- Phone: +91-9514015234",
    "- Location: Chennai, Tamil Nadu, India",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
