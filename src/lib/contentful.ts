import { createClient } from 'contentful';
import { Document } from '@contentful/rich-text-types';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

export interface ContentfulAsset {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    file: {
      url: string;
      details: {
        size: number;
        image?: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}

export interface BlogPost {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    slug: string;
    excerpt: string;
    body: Document;
    coverImage: ContentfulAsset;
    author: string;
    publishedDate: string;
    tags: string[];
  };
}

export interface PortfolioItem {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    slug: string;
    excerpt: string;
    body: Document;
    coverImage: ContentfulAsset;
    tags: string[];
  };
}

export interface Testimonial {
  sys: {
    id: string;
  };
  fields: {
    name: string;
    position: string;
    quote: string;
    avatar: ContentfulAsset;
  };
}

// Helper function to check available content types
export async function getContentTypes() {
  try {
    const response = await client.getContentTypes();
    return response.items.map(item => ({
      id: item.sys.id,
      name: item.name,
      displayField: item.displayField
    }));
  } catch (error) {
    console.error('Error fetching content types:', error);
    return [];
  }
}

// Data fetching functions
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // Try multiple possible content type names
  const possibleContentTypes = ['blogs', 'blogPost', 'blog', 'post', 'article'];
  
  for (const contentType of possibleContentTypes) {
    try {
      console.log(`🔍 Trying content type: ${contentType}`);
      
      // Try different ordering options
      const orderOptions: string[][] = [
        ['-fields.publishedDate'],
        ['-sys.updatedAt'], 
        ['-sys.createdAt']
      ];
      
      for (const order of orderOptions) {
        try {
          const response = await client.getEntries({
            content_type: contentType,
            order: order as any,
          });
          
          if (response.items.length > 0) {
            console.log(`✅ Found ${response.items.length} blog posts using content type: ${contentType} with order: ${order.join(', ')}`);
            return response.items as unknown as BlogPost[];
          } else {
            console.log(`⚠️ Content type '${contentType}' exists but has no entries`);
          }
        } catch (orderError: any) {
          console.log(`❌ Order ${order.join(', ')} failed for content type '${contentType}':`, orderError.message);
          continue;
        }
      }
    } catch (error: any) {
      console.error(`❌ Content type '${contentType}' error:`, {
        message: error.message,
        status: error.status,
        statusText: error.statusText,
      });
      continue;
    }
  }
  
  console.error('No blog posts found with any of the attempted content types and orders');
  return [];
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const possibleContentTypes = ['blogPost', 'blog', 'blogs', 'post', 'article'];
  
  for (const contentType of possibleContentTypes) {
    try {
      const response = await client.getEntries({
        content_type: contentType,
        'fields.slug': slug,
        limit: 1,
      });
      
      if (response.items.length > 0) {
        return (response.items[0] as unknown as BlogPost) || null;
      }
    } catch (error) {
      continue;
    }
  }
  
  console.error(`Blog post with slug '${slug}' not found`);
  return null;
}

export async function getAllPortfolioItems(): Promise<PortfolioItem[]> {
  try {
    const response = await client.getEntries({
      content_type: 'portfolios',
      order: ['-sys.createdAt'],
    });
    return response.items as unknown as PortfolioItem[];
  } catch (error) {
    console.error('Error fetching portfolio items:', error);
    return [];
  }
}

export async function getPortfolioItemBySlug(slug: string): Promise<PortfolioItem | null> {
  try {
    const response = await client.getEntries({
      content_type: 'portfolios',
      'fields.slug': slug,
      limit: 1,
    });
    return (response.items[0] as unknown as PortfolioItem) || null;
  } catch (error) {
    console.error('Error fetching portfolio item:', error);
    return null;
  }
}

export async function getAllTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await client.getEntries({
      content_type: 'testimonial',
      order: ['sys.createdAt'],
    });
    return response.items as unknown as Testimonial[];
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
}

export { client as contentfulClient }; 