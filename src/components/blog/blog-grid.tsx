"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ArrowRight, Search, Sparkles } from "lucide-react";
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
      <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-brand-dark/90 via-slate-800/50 to-brand-dark/90 border border-brand-white/10 hover:border-brand-violet/40 hover:-translate-y-3 rounded-3xl backdrop-blur-sm shadow-xl shadow-brand-dark/30 hover:shadow-brand-violet/20 transform-gpu h-full cursor-pointer">
        {/* Enhanced background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/5 via-transparent to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-violet/10 via-transparent to-brand-orange/10 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500" />
        
        {/* 3D depth shadow */}
        <div className="absolute inset-0 bg-brand-dark/40 rounded-3xl transform translate-x-4 translate-y-4 blur-lg -z-10 opacity-60"></div>

        {/* Enhanced image container */}
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-brand-violet/10 to-brand-orange/5 rounded-t-3xl">
          {post.fields.coverImage?.fields?.file?.url ? (
            <Image
              src={`https:${post.fields.coverImage.fields.file.url}`}
              alt={post.fields.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-brand-violet/20 to-brand-orange/10 flex items-center justify-center">
              <div className="relative">
                <div className="text-6xl transform group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl">✍️</div>
                <div className="absolute inset-0 bg-brand-violet/20 rounded-full blur-xl opacity-50"></div>
              </div>
            </div>
          )}
          
          {/* Enhanced overlay effects */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/10 via-transparent to-brand-orange/10 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          
          {/* Reading time badge */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <div className="px-3 py-1 bg-gradient-to-r from-brand-violet/90 to-brand-orange/70 rounded-full text-xs font-semibold text-brand-white shadow-lg shadow-brand-violet/30 border border-brand-white/20 backdrop-blur-sm">
              {readingTime}
            </div>
          </div>
        </div>
        
        <CardHeader className="relative z-10 pb-4 p-8">
          <CardTitle className="text-2xl font-bold text-brand-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-brand-violet group-hover:to-brand-orange group-hover:bg-clip-text transition-all duration-300 drop-shadow-lg line-clamp-2 leading-tight">
            {post.fields.title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="relative z-10 flex flex-col h-full px-8 pb-8 pt-0">
          <p className="text-brand-white/80 mb-6 leading-relaxed flex-grow group-hover:text-brand-white/95 transition-colors duration-300 drop-shadow-sm">
            {truncatedExcerpt}
          </p>
          
          {/* Enhanced Meta Information */}
          <div className="flex items-center justify-between text-sm text-brand-white/60 mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-brand-white/5 to-brand-white/10 rounded-lg border border-brand-white/10">
                <User className="h-4 w-4 text-brand-violet" />
                <span className="drop-shadow-sm">{post.fields.author || "Reign of Vision"}</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-brand-white/5 to-brand-white/10 rounded-lg border border-brand-white/10">
                <Calendar className="h-4 w-4 text-brand-orange" />
                <span className="drop-shadow-sm">{formatDate(post.fields.publishedDate || post.sys.createdAt)}</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced Tags */}
          {post.fields.tags && post.fields.tags.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-6">
              {post.fields.tags.slice(0, 2).map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-gradient-to-r from-brand-violet/20 to-brand-orange/10 text-brand-violet text-sm font-medium rounded-full border border-brand-violet/30 backdrop-blur-sm shadow-lg shadow-brand-violet/20 hover:shadow-brand-violet/40 transition-all duration-300 hover:scale-105 transform-gpu"
                >
                  {tag}
                </span>
              ))}
              {post.fields.tags.length > 2 && (
                <span className="px-3 py-1.5 bg-gradient-to-r from-brand-white/10 to-brand-white/5 text-brand-white/70 text-sm rounded-full border border-brand-white/20 backdrop-blur-sm shadow-lg">
                  +{post.fields.tags.length - 2}
                </span>
              )}
            </div>
          )}
          
          {/* Enhanced Read More Button */}
          <div className="mt-auto">
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-brand-violet/10 to-brand-orange/5 rounded-xl border border-brand-violet/20 group-hover:from-brand-violet/20 group-hover:to-brand-orange/10 group-hover:border-brand-violet/40 transition-all duration-300 backdrop-blur-sm">
              <span className="text-brand-violet font-semibold drop-shadow-lg group-hover:text-brand-white transition-colors duration-300">Read Article</span>
              <ArrowRight className="h-5 w-5 text-brand-violet group-hover:text-brand-white group-hover:translate-x-1 transition-all duration-300 drop-shadow-lg" />
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
    <div className="relative">
      {/* Enhanced Search and Filter */}
      <div className="mb-16 space-y-8">
        {/* Enhanced Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/20 to-brand-orange/10 rounded-2xl blur-lg opacity-60"></div>
            <div className="relative bg-gradient-to-r from-brand-dark/80 via-slate-800/60 to-brand-dark/80 border border-brand-white/10 backdrop-blur-xl rounded-2xl shadow-xl shadow-brand-violet/10 overflow-hidden">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-brand-violet drop-shadow-lg" />
              <input
                type="text"
                placeholder="Search articles, topics, and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-transparent text-brand-white placeholder-brand-white/50 focus:outline-none focus:ring-2 focus:ring-brand-violet/50 transition-all duration-300 drop-shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Enhanced Tag Filter */}
        <div className="relative">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-brand-white mb-4 drop-shadow-lg flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-brand-violet" />
              <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent">Filter by Topic</span>
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-violet to-brand-orange rounded-full mx-auto"></div>
          </div>
          
          <div className="flex justify-center">
            <div className="inline-flex p-2 bg-gradient-to-r from-brand-dark/80 via-slate-800/60 to-brand-dark/80 border border-brand-white/10 backdrop-blur-xl rounded-2xl shadow-xl shadow-brand-violet/10">
              <TagFilter
                tags={allTags}
                selectedTag={selectedTag}
                onTagChange={setSelectedTag}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredPosts.map((post, index) => (
          <div
            key={post.sys.id}
            className="animate-in fade-in slide-in-from-bottom-8 duration-700"
            style={{
              animationDelay: `${index * 150}ms`
            }}
          >
            <BlogCard post={post} />
          </div>
        ))}
      </div>

      {/* Enhanced Empty State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-20">
          <div className="relative inline-block">
            <div className="relative p-12 bg-gradient-to-br from-brand-dark/80 via-slate-800/60 to-brand-dark/80 border border-brand-white/10 backdrop-blur-xl rounded-3xl shadow-2xl shadow-brand-violet/10">
              {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/10 via-transparent to-brand-orange/10 rounded-3xl blur-2xl"></div>
              <div className="absolute inset-0 bg-gradient-conic from-brand-violet/5 via-transparent via-brand-orange/5 to-brand-violet/5 rounded-3xl animate-spin-slow opacity-40"></div>
              
              {/* 3D depth shadow */}
              <div className="absolute inset-0 bg-brand-dark/40 rounded-3xl transform translate-x-4 translate-y-4 blur-xl -z-10"></div>
              
              <div className="relative z-10 max-w-md mx-auto">
                <div className="text-8xl mb-8 transform hover:scale-110 transition-transform duration-300 drop-shadow-2xl">🔍</div>
                <h3 className="text-2xl font-bold text-brand-white mb-6 drop-shadow-lg">
                  {searchQuery ? (
                    <>No articles found for <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent">"{searchQuery}"</span></>
                  ) : (
                    <>No articles in <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent">"{selectedTag}"</span></>
                  )}
                </h3>
                <p className="text-brand-white/80 mb-8 leading-relaxed drop-shadow-sm">
                  {searchQuery 
                    ? "Try adjusting your search terms or browse our featured articles below."
                    : "Try selecting a different category or explore our latest content."
                  }
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {searchQuery && (
                    <Button
                      onClick={() => setSearchQuery("")}
                      className="group bg-gradient-to-r from-brand-violet via-brand-violet to-brand-violet/90 hover:from-brand-violet/90 hover:to-brand-orange text-brand-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-brand-violet/40 shadow-lg shadow-brand-violet/30 transform-gpu"
                    >
                      <span className="drop-shadow-lg">Clear Search</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  )}
                  
                  <Button
                    onClick={() => {
                      setSelectedTag("All");
                      setSearchQuery("");
                    }}
                    variant="outline"
                    className="border-2 border-brand-orange/50 bg-gradient-to-r from-transparent to-brand-orange/10 text-brand-white hover:bg-gradient-to-r hover:from-brand-orange/20 hover:to-brand-orange/30 hover:border-brand-orange font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-orange/30 backdrop-blur-sm shadow-lg shadow-brand-orange/20 transform-gpu"
                  >
                    <span className="drop-shadow-lg">Show All Articles</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced results counter */}
      {filteredPosts.length > 0 && (
        <div className="text-center mt-16 pt-8 border-t border-brand-white/10">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-violet/20 to-brand-orange/10 border border-brand-violet/30 backdrop-blur-xl rounded-full shadow-lg shadow-brand-violet/20">
            <span className="text-brand-white font-semibold drop-shadow-lg">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'Article' : 'Articles'} 
              {selectedTag !== "All" && !searchQuery && (
                <span className="text-brand-violet ml-1">in {selectedTag}</span>
              )}
              {searchQuery && (
                <span className="text-brand-orange ml-1">for "{searchQuery}"</span>
              )}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
