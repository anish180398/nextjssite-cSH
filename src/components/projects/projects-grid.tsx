"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { Project } from "@/lib/contentful";
import { TagFilter, useTagFilter, extractTags } from "@/components/ui/tag-filter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function ProjectCard({ item }: { item: Project }) {
  // Get image URL with proper handling
  const getImageUrl = () => {
    if (!item.fields.coverImage?.fields?.file?.url) {
      return null;
    }
    
    let url = item.fields.coverImage.fields.file.url;
    
    // Add https protocol if missing
    if (url.startsWith('//')) {
      url = `https:${url}`;
    } else if (!url.startsWith('http')) {
      url = `https://${url}`;
    }
    return url;
  };

  const imageUrl = getImageUrl();

  return (
    <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-brand-dark/90 via-slate-800/50 to-brand-dark/90 border border-brand-white/10 hover:border-brand-violet/40 hover:-translate-y-3 rounded-3xl backdrop-blur-sm shadow-xl shadow-brand-dark/30 hover:shadow-brand-violet/20 transform-gpu">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/5 via-transparent to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-violet/10 via-transparent to-brand-orange/10 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500" />
      
      {/* 3D depth shadow */}
      <div className="absolute inset-0 bg-brand-dark/40 rounded-3xl transform translate-x-4 translate-y-4 blur-lg -z-10 opacity-60"></div>

      {/* Enhanced image container */}
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-brand-violet/10 to-brand-orange/5 rounded-t-3xl">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={item.fields.title || 'Project'}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
            onLoad={() => {
              console.log('Image loaded successfully:', imageUrl);
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-brand-violet/20 to-brand-orange/10 flex items-center justify-center">
            <div className="relative">
              <div className="text-6xl transform group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl">🚀</div>
              <div className="absolute inset-0 bg-brand-violet/20 rounded-full blur-xl opacity-50"></div>
            </div>
          </div>
        )}
        
        {/* Enhanced overlay effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/10 via-transparent to-brand-orange/10 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
        
        {/* Enhanced hover icon */}
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-brand-violet/90 to-brand-orange/70 rounded-full flex items-center justify-center shadow-xl shadow-brand-violet/30 border border-brand-white/20 backdrop-blur-sm">
              <ExternalLink className="w-5 h-5 text-brand-white drop-shadow-lg" />
            </div>
            <div className="absolute inset-0 w-12 h-12 bg-brand-violet/30 rounded-full blur-lg opacity-60"></div>
          </div>
        </div>
      </div>
      
      <CardHeader className="relative z-10 p-8">
        <CardTitle className="text-2xl font-bold text-brand-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-brand-violet group-hover:to-brand-orange group-hover:bg-clip-text transition-all duration-300 drop-shadow-lg">
          {item.fields.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-10 px-8 pb-8">
        {item.fields.excerpt && (
          <p className="text-brand-white/80 mb-6 leading-relaxed group-hover:text-brand-white/95 transition-colors duration-300 drop-shadow-sm">
            {item.fields.excerpt}
          </p>
        )}
        
        {item.fields.tags && item.fields.tags.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-8">
            {item.fields.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1.5 text-sm font-medium bg-gradient-to-r from-brand-violet/20 to-brand-orange/10 text-brand-violet border border-brand-violet/30 rounded-full backdrop-blur-sm shadow-lg shadow-brand-violet/20 hover:shadow-brand-violet/40 transition-all duration-300 hover:scale-105 transform-gpu"
              >
                {tag}
              </span>
            ))}
            {item.fields.tags.length > 3 && (
              <span className="px-3 py-1.5 text-sm font-medium bg-gradient-to-r from-brand-white/10 to-brand-white/5 text-brand-white/70 border border-brand-white/20 rounded-full backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-105 transform-gpu">
                +{item.fields.tags.length - 3} more
              </span>
            )}
          </div>
        )}
        
        <Button asChild variant="outline" size="sm" className="group/btn w-full border-2 border-brand-violet/40 bg-gradient-to-r from-transparent to-brand-violet/10 text-brand-white hover:bg-gradient-to-r hover:from-brand-violet/20 hover:to-brand-violet/30 hover:border-brand-violet font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-violet/30 backdrop-blur-sm shadow-lg shadow-brand-violet/20 transform-gpu">
          <a href={item.fields.slug} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2">
            <span className="drop-shadow-lg">View Project</span>
            <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300 drop-shadow-lg" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function ProjectsGrid({ items }: { items: Project[] }) {
  const [selectedTag, setSelectedTag] = useState("All");
  
  // Extract unique tags from all project items
  const allTags = extractTags(items.map(item => ({ tags: item.fields.tags })));
  
  // Filter items based on selected tag
  const filteredItems = useTagFilter(
    items.map(item => ({ ...item, tags: item.fields.tags })),
    selectedTag
  );

  return (
    <div className="relative">
      {/* Enhanced Tag Filter */}
      <div className="mb-12">
        <div className="relative">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-brand-white mb-4 drop-shadow-lg flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-brand-violet" />
              <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent">Filter by Category</span>
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-violet to-brand-orange rounded-full mx-auto"></div>
          </div>
          
          <div className="flex justify-center">
            <div className="inline-flex p-2 backdrop-blur-xl rounded-2xl">
              <TagFilter
                tags={["All", ...allTags]}
                selectedTag={selectedTag}
                onTagChange={setSelectedTag}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {filteredItems.map((item, index) => (
          <div
            key={item.sys.id}
            className="animate-in fade-in slide-in-from-bottom-8 duration-700"
            style={{
              animationDelay: `${index * 150}ms`
            }}
          >
            <ProjectCard item={item} />
          </div>
        ))}
      </div>

      {/* Enhanced Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-20">
          <div className="relative inline-block mb-8">
            <div className="relative p-8 bg-gradient-to-br from-brand-dark/80 via-slate-800/60 to-brand-dark/80 border border-brand-white/10 backdrop-blur-xl rounded-3xl shadow-2xl shadow-brand-violet/10">
              {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/10 via-transparent to-brand-orange/10 rounded-3xl blur-2xl"></div>
              <div className="absolute inset-0 bg-gradient-conic from-brand-violet/5 via-transparent via-brand-orange/5 to-brand-violet/5 rounded-3xl animate-spin-slow opacity-40"></div>
              
              {/* 3D depth shadow */}
              <div className="absolute inset-0 bg-brand-dark/40 rounded-3xl transform translate-x-4 translate-y-4 blur-xl -z-10"></div>
              
              <div className="relative z-10">
                <div className="text-8xl mb-6 transform hover:scale-110 transition-transform duration-300 drop-shadow-2xl">🔍</div>
                <h3 className="text-2xl font-bold text-brand-white mb-4 drop-shadow-lg">
                  No projects found for <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent">"{selectedTag}"</span>
                </h3>
                <p className="text-brand-white/80 mb-8 max-w-md mx-auto leading-relaxed drop-shadow-sm">
                  Try selecting a different category or check back later for new projects.
                </p>
                
                <Button
                  onClick={() => setSelectedTag("All")}
                  className="group bg-gradient-to-r from-brand-violet via-brand-violet to-brand-violet/90 hover:from-brand-violet/90 hover:to-brand-orange text-brand-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-brand-violet/50 transform-gpu shadow-xl shadow-brand-violet/30 border border-brand-violet/20"
                >
                  <span className="drop-shadow-lg">Show All Projects</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced project counter */}
      {filteredItems.length > 0 && (
        <div className="text-center mt-16 pt-8 border-t border-brand-white/10">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-violet/20 to-brand-orange/10 border border-brand-violet/30 backdrop-blur-xl rounded-full shadow-lg shadow-brand-violet/20">
            <span className="text-brand-white font-semibold drop-shadow-lg">
              {filteredItems.length} {filteredItems.length === 1 ? 'Project' : 'Projects'} 
              {selectedTag !== "All" && (
                <span className="text-brand-violet ml-1">in {selectedTag}</span>
              )}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
