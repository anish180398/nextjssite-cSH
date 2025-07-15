"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ArrowRight, Search } from "lucide-react";
import { BlogPost } from "@/lib/contentful";
import { TagFilter, useTagFilter, extractTags } from "@/components/ui/tag-filter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatDate, getReadingTime } from "@/lib/utils";

function BlogCard({ post }: { post: BlogPost }) {
  const readingTime = post.fields.body 
    ? `${getReadingTime(JSON.stringify(post.fields.body))} min read`
    : "5 min read";

  // Truncate excerpt to a reasonable length
  const truncatedExcerpt = post.fields.excerpt && post.fields.excerpt.length > 120 
    ? `${post.fields.excerpt.substring(0, 120)}...`
    : post.fields.excerpt || "Click to read more about this article...";

  return (
    <Link href={`/blog/${post.fields.slug}`} className="block group">
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full bg-brand-dark border-brand-white/10 hover:border-brand-violet/50 cursor-pointer">
        <div className="relative aspect-video overflow-hidden">
          {post.fields.coverImage?.fields?.file?.url ? (
            <Image
              src={`https:${post.fields.coverImage.fields.file.url}`}
              alt={post.fields.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-brand-violet/20 to-brand-violet/10 flex items-center justify-center">
              <div className="text-4xl">✍️</div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <CardHeader className="pb-2">
          <CardTitle className="text-xl text-brand-white group-hover:text-brand-violet transition-colors line-clamp-2 leading-tight">
            {post.fields.title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex flex-col h-full pt-0">
          <p className="text-brand-white/70 mb-4 leading-relaxed text-sm flex-grow">
            {truncatedExcerpt}
          </p>
          
          {/* Meta Information */}
          <div className="flex items-center justify-between text-xs text-brand-white/60 mb-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <User className="h-3 w-3" />
                <span>{post.fields.author || "Reign of Vision"}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-3 w-3" />
                <span>{formatDate(post.fields.publishedDate || post.sys.createdAt)}</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{readingTime}</span>
            </div>
          </div>
          
          {/* Tags */}
          {post.fields.tags && post.fields.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.fields.tags.slice(0, 2).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-brand-violet/20 text-brand-violet text-xs rounded-full border border-brand-violet/30"
                >
                  {tag}
                </span>
              ))}
              {post.fields.tags.length > 2 && (
                <span className="px-2 py-1 bg-brand-white/10 text-brand-white/60 text-xs rounded-full">
                  +{post.fields.tags.length - 2}
                </span>
              )}
            </div>
          )}
          
          {/* Read More Button */}
          <div className="mt-auto">
            <div className="flex items-center justify-between text-brand-violet group-hover:text-brand-white transition-colors">
              <span className="text-sm font-medium">Read More</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
  const [selectedTag, setSelectedTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Extract unique tags from all blog posts
  const allTags = extractTags(posts.map(post => ({ tags: post.fields.tags })));
  
  // Filter posts based on selected tag
  let filteredPosts = useTagFilter(
    posts.map(post => ({ ...post, tags: post.fields.tags })),
    selectedTag
  );

  // Filter by search query
  if (searchQuery.trim()) {
    filteredPosts = filteredPosts.filter(post =>
      post.fields.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.fields.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.fields.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }

  return (
    <div>
      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-brand-white/50" />
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-brand-white/20 rounded-lg bg-brand-dark/50 text-brand-white placeholder-brand-white/50 focus:ring-2 focus:ring-brand-violet focus:border-brand-violet"
          />
        </div>

        {/* Tag Filter */}
        <TagFilter
          tags={allTags}
          selectedTag={selectedTag}
          onTagChange={setSelectedTag}
        />
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <BlogCard key={post.sys.id} post={post} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-brand-white/70 text-lg">
            {searchQuery ? 
              `No blog posts found for "${searchQuery}". Try a different search term.` :
              `No blog posts found for "${selectedTag}". Try selecting a different tag.`
            }
          </p>
        </div>
      )}
    </div>
  );
} 