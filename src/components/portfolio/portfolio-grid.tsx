"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { PortfolioItem } from "@/lib/contentful";
import { TagFilter, useTagFilter, extractTags } from "@/components/ui/tag-filter";
import { Button } from "@/components/ui/button";

function getImageUrl(item: PortfolioItem) {
  const url = item.fields.coverImage?.fields?.file?.url;
  if (!url) return null;
  if (url.startsWith("//")) return `https:${url}`;
  if (!url.startsWith("http")) return `https://${url}`;
  return url;
}

function PortfolioCard({ item }: { item: PortfolioItem }) {
  const imageUrl = getImageUrl(item);

  return (
    <Link
      href={`/portfolio/${item.fields.slug}`}
      className="group flex flex-col gap-6 py-8 transition-colors hover:bg-muted/40 sm:flex-row sm:items-center sm:px-4"
    >
      <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-xl bg-muted sm:w-56">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={item.fields.title || "Portfolio item"}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 224px"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-4xl">🚀</div>
        )}
      </div>

      <div className="flex-1">
        <h3 className="mb-2 text-xl font-semibold text-foreground">{item.fields.title}</h3>
        {item.fields.excerpt && (
          <p className="mb-4 leading-relaxed text-muted-foreground">{item.fields.excerpt}</p>
        )}
        {item.fields.tags && item.fields.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.fields.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary">
        View Project
        <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export default function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  const [selectedTag, setSelectedTag] = useState("All");

  const allTags = extractTags(items.map((item) => ({ tags: item.fields.tags })));
  const filteredItems = useTagFilter(
    items.map((item) => ({ ...item, tags: item.fields.tags })),
    selectedTag
  );

  return (
    <div>
      <div className="mb-12 flex flex-wrap gap-2">
        <TagFilter tags={["All", ...allTags]} selectedTag={selectedTag} onTagChange={setSelectedTag} />
      </div>

      <div className="divide-y divide-border border-t border-border">
        {filteredItems.map((item, index) => (
          <div
            key={item.sys.id}
            className="animate-in fade-in slide-in-from-bottom-8 duration-700"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <PortfolioCard item={item} />
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="py-20 text-center">
          <h3 className="mb-3 text-xl font-semibold text-foreground">
            No projects found for &ldquo;{selectedTag}&rdquo;
          </h3>
          <p className="mb-6 text-muted-foreground">Try selecting a different category.</p>
          <Button onClick={() => setSelectedTag("All")}>Show All Projects</Button>
        </div>
      )}

      {filteredItems.length > 0 && (
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          {filteredItems.length} {filteredItems.length === 1 ? "Project" : "Projects"}
          {selectedTag !== "All" && <span className="text-primary"> in {selectedTag}</span>}
        </div>
      )}
    </div>
  );
}
