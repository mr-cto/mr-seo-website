import { getPortfolioItems, getBlogPosts } from "./mdx";

const siteUrl = process.env.SITE_URL || "https://seo.mrcto.ai";

export async function generateSitemap() {
  const portfolioItems = await getPortfolioItems();
  const blogPosts = await getBlogPosts();

  const portfolioUrls = portfolioItems.map((item) => ({
    url: `${siteUrl}/portfolio/${item.slug}`,
    lastModified: new Date(item.frontmatter.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogUrls = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const staticPages = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  return [...staticPages, ...portfolioUrls, ...blogUrls];
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SEO Business",
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  description:
    "Enterprise SEO agency driving organic growth for Fortune 500 brands. Proven results in technical SEO, content strategy, and link building.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Remote",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-555-123-4567",
    contactType: "Sales",
    email: "t@mrcto.ai",
  },
  sameAs: [
    "https://www.linkedin.com/company/seobusiness",
    "https://twitter.com/seobusiness",
    "https://github.com/seobusiness",
  ],
};

export function generateArticleSchema(article: {
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Mr SEO",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.svg`,
      },
    },
    image: article.image || `${siteUrl}/og-image.svg`,
    url: article.url,
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
