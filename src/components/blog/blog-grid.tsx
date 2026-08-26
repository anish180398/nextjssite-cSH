"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ArrowRight, Search } from "lucide-react";
import { BlogPost } from "@/lib/contentful";
import { TagFilter, useTagFilter, extractTags } from "@/components/ui/tag-filter";
import { formatDate, getReadingTime } from "@/lib/utils";

function FeaturedBlogCard({ post }: { post: BlogPost }) {
  const readingTime = post.fields.body
    ? `${getReadingTime(JSON.stringify(post.fields.body))} min read`
    : "5 min read";

  return (
    <Link
      href={`/blog/${post.fields.slug}`}
      className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/40 md:grid-cols-2"
    >
      <div className="relative aspect-video bg-muted md:aspect-auto">
        {post.fields.coverImage?.fields?.file?.url ? (
          <Image
            src={`https:${post.fields.coverImage.fields.file.url}`}
            alt={post.fields.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        ) : (
          <div className="flex h-full items-center justify-center text-4xl">✍️</div>
        )}
      </div>
      <div className="flex flex-col justify-center p-8 lg:p-10">
        <span className="mb-4 inline-flex w-fit items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
          Featured · {readingTime}
        </span>
        <h3 className="font-display mb-4 text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
          {post.fields.title}
        </h3>
        <p className="mb-6 leading-relaxed text-muted-foreground">
          {post.fields.excerpt || "Click to read more about this article..."}
        </p>
        <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <User className="h-3.5 w-3.5" />
            {post.fields.author || "Kryttr"}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(post.fields.publishedDate || post.sys.createdAt)}
          </span>
        </div>
        <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-primary">
          Read Article
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  const readingTime = post.fields.body
    ? `${getReadingTime(JSON.stringify(post.fields.body))} min read`
    : "5 min read";

  const excerpt =
    post.fields.excerpt && post.fields.excerpt.length > 120
      ? `${post.fields.excerpt.substring(0, 120)}...`
      : post.fields.excerpt || "Click to read more about this article...";

  return (
    <Link href={`/blog/${post.fields.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/40">
      <div className="relative aspect-video bg-muted">
        {post.fields.coverImage?.fields?.file?.url ? (
          <Image
            src={`https:${post.fields.coverImage.fields.file.url}`}
            alt={post.fields.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-4xl">✍️</div>
        )}
        <span className="absolute right-4 top-4 rounded-full bg-background/80 px-3 py-1 font-mono text-xs text-foreground backdrop-blur-sm">
          {readingTime}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-8">
        <h3 className="mb-3 line-clamp-2 text-xl font-semibold leading-tight text-foreground">
          {post.fields.title}
        </h3>
        <p className="mb-6 flex-1 leading-relaxed text-muted-foreground">{excerpt}</p>

        <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <User className="h-3.5 w-3.5" />
            {post.fields.author || "Kryttr"}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(post.fields.publishedDate || post.sys.createdAt)}
          </span>
        </div>

        {post.fields.tags && post.fields.tags.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {post.fields.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-primary">
          Read Article
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
  const [selectedTag, setSelectedTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const allTags = extractTags(posts.map((post) => ({ tags: post.fields.tags })));

  let filteredPosts = useTagFilter(
    posts.map((post) => ({ ...post, tags: post.fields.tags })),
    selectedTag
  );

  if (searchQuery.trim()) {
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.fields.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.fields.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.fields.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }

  return (
    <div>
      <div className="mb-12 space-y-6">
        <div className="relative max-w-xl">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search articles, topics, and more..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-input bg-card py-3 pl-11 pr-4 text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-ring"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <TagFilter tags={allTags} selectedTag={selectedTag} onTagChange={setSelectedTag} />
        </div>
      </div>

      {filteredPosts.length > 0 && (
        <div className="mb-8">
          <FeaturedBlogCard post={filteredPosts[0]} />
        </div>
      )}

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.slice(1).map((post, index) => (
          <div
            key={post.sys.id}
            className="animate-in fade-in slide-in-from-bottom-8 duration-700"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <BlogCard post={post} />
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="py-20 text-center">
          <h3 className="mb-3 text-xl font-semibold text-foreground">
            {searchQuery ? `No articles found for "${searchQuery}"` : `No articles in "${selectedTag}"`}
          </h3>
          <p className="mb-6 text-muted-foreground">
            {searchQuery
              ? "Try adjusting your search terms or browse our featured articles below."
              : "Try selecting a different category or explore our latest content."}
          </p>
          <div className="flex justify-center gap-3">
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                Clear Search
              </button>
            )}
            <button
              onClick={() => {
                setSelectedTag("All");
                setSearchQuery("");
              }}
              className="rounded-lg border border-border px-6 py-2.5 text-sm font-semibold text-foreground"
            >
              Show All Articles
            </button>
          </div>
        </div>
      )}

      {filteredPosts.length > 0 && (
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          {filteredPosts.length} {filteredPosts.length === 1 ? "Article" : "Articles"}
          {selectedTag !== "All" && !searchQuery && <span className="text-primary"> in {selectedTag}</span>}
          {searchQuery && <span className="text-primary"> for &ldquo;{searchQuery}&rdquo;</span>}
        </div>
      )}
    </div>
  );
}
