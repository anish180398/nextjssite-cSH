"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PortfolioItem } from "@/lib/contentful";
import { TagFilter, useTagFilter, extractTags } from "@/components/ui/tag-filter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function PortfolioCard({ item }: { item: PortfolioItem }) {

  
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
    
    console.log('Final image URL:', url);
    return url;
  };

  const imageUrl = getImageUrl();

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-white dark:bg-brand-dark border-brand-white/20 dark:border-brand-white/10 hover:border-brand-yellow/50">
      <div className="relative aspect-video overflow-hidden bg-brand-white/10 dark:bg-brand-white/5">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={item.fields.title || 'Portfolio item'}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={(e) => {
              // Hide the image on error
              e.currentTarget.style.display = 'none';
            }}
            onLoad={() => {
              console.log('Image loaded successfully:', imageUrl);
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-brand-yellow/20 to-brand-yellow/10 flex items-center justify-center">
            <div className="text-4xl">🚀</div>
          </div>
        )}
        
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 bg-white dark:bg-brand-dark rounded-full flex items-center justify-center shadow-md border border-brand-white/20">
            <ExternalLink className="w-4 h-4 text-brand-yellow" />
          </div>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl group-hover:text-brand-yellow transition-colors text-brand-dark dark:group-hover:text-brand-yellow">
          {item.fields.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <p className="text-brand-dark/70 dark:text-brand-white/70 mb-4 leading-relaxed">
          {item.fields.excerpt}
        </p>
        
        {item.fields.tags && item.fields.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {item.fields.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium bg-brand-yellow/10 text-brand-yellow rounded-full border border-brand-yellow/20"
              >
                {tag}
              </span>
            ))}
            {item.fields.tags.length > 3 && (
              <span className="px-2 py-1 text-xs font-medium bg-brand-white/10 text-brand-dark rounded-full border border-brand-yellow/20">
                +{item.fields.tags.length - 3} more
              </span>
            )}
          </div>
        )}
        
        <Button asChild variant="outline" size="sm" className="w-full group border-brand-yellow/30 text-brand-yellow hover:bg-brand-yellow hover:text-brand-dark transition-all duration-200">
          <Link href={`/portfolio/${item.fields.slug}`} className="flex items-center justify-center space-x-2">
            <span>View Project</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  const [selectedTag, setSelectedTag] = useState("All");

  
  // Extract unique tags from all portfolio items
  const allTags = extractTags(items.map(item => ({ tags: item.fields.tags })));
  
  // Filter items based on selected tag
  const filteredItems = useTagFilter(
    items.map(item => ({ ...item, tags: item.fields.tags })),
    selectedTag
  );

  return (
    <div>
      {/* Tag Filter */}
      <div className="mb-8">
        <TagFilter
          tags={["All", ...allTags]}
          selectedTag={selectedTag}
          onTagChange={setSelectedTag}
        />
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredItems.map((item) => (
          <PortfolioCard key={item.sys.id} item={item} />
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-white mb-2">
            No projects found
          </h3>
          <p className="text-brand-dark/70 dark:text-brand-white/70">
            Try selecting a different category or check back later for new projects.
          </p>
        </div>
      )}
    </div>
  );
} 