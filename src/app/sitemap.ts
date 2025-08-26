import { MetadataRoute } from 'next'
import { 
  getAllBlogPosts, 
  getAllPortfolioItems,
  getAllProjects,
} from '@/lib/contentful'



export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://reignofvision.com'
  
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
      url: `${baseUrl}/projects`,
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
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  try {
    // Fetch dynamic content
    const [blogPosts, portfolioItems, projectItems] = await Promise.all([
      getAllBlogPosts(),
      getAllPortfolioItems(),
      getAllProjects(),
    ])

    // Note: Service slug pages are dynamic and not pre-generated
    // Only the main services page is included in sitemap

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

    // Project pages (external links, but still indexed)
    const projectPages = projectItems.map((item) => ({
      url: `${baseUrl}/projects`,
      lastModified: new Date(item.sys.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

    return [
      ...staticPages,
      ...blogPages,
      ...portfolioPages,
      ...projectPages,
    ]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    
    // Return static pages only if there's an error
    return staticPages
  }
} 