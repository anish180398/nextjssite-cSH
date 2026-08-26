import { MetadataRoute } from 'next'
import { 
  getAllBlogPosts, 
  getAllPortfolioItems,
  getAllProjects,
} from '@/lib/contentful'
import { services } from '@/lib/data/services'
import { technologies } from '@/lib/data/technologies'
import { industries } from '@/lib/data/industries'
import { countries } from '@/lib/data/countries'



export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://kryttr.com'
  
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
      url: `${baseUrl}/technologies`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/countries`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
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

    // Service, technology, and industry detail pages are statically generated
    // (generateStaticParams) from these same arrays, so they're real, indexable
    // URLs and belong in the sitemap.
    const servicePages = services.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

    const technologyPages = technologies.map((tech) => ({
      url: `${baseUrl}/technologies/${tech.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

    const industryPages = industries.map((industry) => ({
      url: `${baseUrl}/industries/${industry.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

    const countryPages = countries.map((country) => ({
      url: `${baseUrl}/countries/${country.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
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

    // Products/projects link out to external URLs (no internal /projects/[slug]
    // route), so only the /projects listing page itself (already in
    // staticPages) is indexable — nothing per-item to add here.
    void projectItems

    return [
      ...staticPages,
      ...servicePages,
      ...technologyPages,
      ...industryPages,
      ...countryPages,
      ...blogPages,
      ...portfolioPages,
    ]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    
    // Return static pages only if there's an error
    return staticPages
  }
} 