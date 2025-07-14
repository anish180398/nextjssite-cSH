# Reign of Vision Agency Website

A production-ready Next.js 15 agency website built with TypeScript, Tailwind CSS, and Contentful CMS integration. Features modern design, SEO optimization, and exceptional performance.

## 🚀 Features

- **Next.js 15** with App Router and TypeScript
- **Contentful CMS** integration for dynamic content management
- **Tailwind CSS** for responsive design and styling
- **Framer Motion** for smooth animations and transitions
- **SEO Optimized** with dynamic sitemap and metadata generation
- **Core Web Vitals** optimized for performance
- **Accessibility** compliant (WCAG 2.1 AA)
- **Google Analytics** integration
- **Contact Form** with Formspree integration
- **Social Sharing** capabilities
- **Loading Skeletons** for better UX
- **Error Boundaries** for graceful error handling

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog listing and individual posts
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio listing and individual items
│   ├── services/          # Services listing and individual services
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── sitemap.ts         # Dynamic sitemap generator
│   └── robots.ts          # Robots.txt generator
├── components/
│   ├── layout/            # Header and Footer components
│   ├── sections/          # Page sections (Hero, Services, etc.)
│   ├── ui/                # Reusable UI components
│   └── seo/               # SEO-related components
└── lib/
    ├── contentful.ts      # Contentful client and type definitions
    └── utils.ts           # Utility functions
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
yarn install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Contentful Configuration
CONTENTFUL_SPACE_ID=your_contentful_space_id
CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://Reign of Vision.com
```

### 3. Contentful Setup

Create the following content models in your Contentful space:

#### Blog Content Model
```
- Title: Short text
- Slug: Short text (unique)
- Excerpt: Long text
- Body: Rich text
- Cover Image: Media
- Author: Short text
- Published Date: Date & time
- Tags: Short text (list)
```

#### Portfolio Content Model
```
- Title: Short text
- Slug: Short text (unique)
- Excerpt: Long text
- Body: Rich text
- Cover Image: Media
- Tags: Short text (list)
```

#### Service Content Model
```
- Title: Short text
- Slug: Short text (unique)
- Icon: Short text (icon name)
- Description: Long text
- Body: Rich text
```

#### Hero Content Model
```
- Title: Short text
- Subtitle: Long text
- CTA Text: Short text
- CTA Link: Short text
```

#### Testimonial Content Model
```
- Name: Short text
- Position: Short text
- Quote: Long text
- Avatar: Media
```

#### Team Content Model
```
- Name: Short text
- Role: Short text
- Bio: Long text
- Avatar: Media
```

### 4. Development

```bash
# Start development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Run linting
yarn lint
```

## 🎨 Customization

### Styling
- Update `src/app/globals.css` for global styles
- Modify color scheme in CSS variables
- Customize animations and transitions

### Content
- Add your Contentful space ID and access token
- Create content in Contentful using the provided models
- Update contact information in Footer component

### SEO
- Update metadata in `src/app/layout.tsx`
- Customize Open Graph images
- Add Google Analytics tracking ID

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Laptop (768px - 1199px)
- Tablet (481px - 767px)
- Mobile (320px - 480px)

## ⚡ Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: ISR (Incremental Static Regeneration)
- **Bundle Optimization**: Tree shaking and minification
- **Loading States**: Skeleton components for better perceived performance

## 🔍 SEO Features

- **Dynamic Metadata**: Generated from Contentful content
- **Structured Data**: JSON-LD markup for rich snippets
- **Sitemap**: Automatically generated from Contentful content
- **Robots.txt**: Optimized for search engine crawling
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Optimized Twitter sharing

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on each push

### Other Platforms

The project is compatible with:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔧 Environment Variables Reference

```env
# Required
CONTENTFUL_SPACE_ID=your_contentful_space_id
CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token

# Optional
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FORMSPREE_FORM_ID=your_formspree_form_id
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📞 Contact Form Setup

1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form
3. Copy the form ID
4. Update the form ID in `src/components/ui/contact-form.tsx`

## 🛡️ Security

- Environment variables for API keys
- Input validation on forms
- Honeypot spam protection
- XSS protection with React
- CSRF protection

## 📊 Analytics

Google Analytics 4 is integrated using `@next/third-parties/google` for optimal performance and privacy.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email hello@Reign of Vision.com or create an issue in this repository.

---

Built with ❤️ by Reign of Vision
