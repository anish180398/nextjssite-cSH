import { MetadataRoute } from 'next'
import { 
  getAllBlogPosts, 
  getAllPortfolioItems,
} from '@/lib/contentful'

// Static services data
const services = [
  { slug: 'web-development' },
  { slug: 'mobile-app-development' },
  { slug: 'ui-ux-design' },
  { slug: 'seo-digital-marketing' },
  { slug: 'digital-strategy-consulting' },
  { slug: 'ecommerce-solutions' },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://codestreethive.com'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  try {
    // Fetch dynamic content
    const [blogPosts, portfolioItems] = await Promise.all([
      getAllBlogPosts(),
      getAllPortfolioItems(),
    ])

    // Service pages
    const servicePages = services.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

    // Blog pages
    const blogPages = blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.fields.slug}`,
      lastModified: new Date(post.sys.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

    // Portfolio pages
    const portfolioPages = portfolioItems.map((item) => ({
      url: `${baseUrl}/portfolio/${item.fields.slug}`,
      lastModified: new Date(item.sys.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

    return [
      ...staticPages,
      ...servicePages,
      ...blogPages,
      ...portfolioPages,
    ]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    
    // Return static pages only if there's an error
    return staticPages
  }
} 