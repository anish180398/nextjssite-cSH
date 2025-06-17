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

// Data fetching functions
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'blog',
      order: ['-fields.publishedDate'],
    });
    return response.items as unknown as BlogPost[];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await client.getEntries({
      content_type: 'blog',
      'fields.slug': slug,
      limit: 1,
    });
    return (response.items[0] as unknown as BlogPost) || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
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