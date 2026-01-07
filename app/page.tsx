import Hero from "@/components/sections/Hero";
import ServiceCard from "@/components/ui/ServiceCard";
import PortfolioCard from "@/components/ui/PortfolioCard";
import BlogCard from "@/components/ui/BlogCard";
import Link from "next/link";
import { getPortfolioItems, getBlogPosts } from "@/lib/mdx";

export default async function HomePage() {
  const portfolioItems = await getPortfolioItems();
  const blogPosts = await getBlogPosts();

  const services = [
    {
      iconName: "FiSearch",
      title: "Technical SEO",
      description:
        "Comprehensive technical audits and optimization for maximum crawlability and indexation.",
      features: [
        "Site architecture optimization",
        "Core Web Vitals improvement",
        "Schema markup implementation",
        "Mobile-first optimization",
      ],
    },
    {
      iconName: "FiFileText",
      title: "Content Strategy",
      description:
        "Data-driven content strategies that align with search intent and drive conversions.",
      features: [
        "Keyword research & mapping",
        "Content gap analysis",
        "Editorial calendar planning",
        "Content optimization",
      ],
    },
    {
      iconName: "FiLink",
      title: "Link Building",
      description:
        "White-hat link acquisition strategies that build authority and drive referral traffic.",
      features: [
        "Digital PR campaigns",
        "Strategic partnerships",
        "Content-driven outreach",
        "Competitor backlink analysis",
      ],
    },
    {
      iconName: "FiBarChart2",
      title: "Local SEO",
      description:
        "Dominate local search results with optimized Google Business profiles and citations.",
      features: [
        "Google Business optimization",
        "Local citation building",
        "Review management",
        "Local content strategies",
      ],
    },
    {
      iconName: "FiShoppingCart",
      title: "E-commerce SEO",
      description:
        "Product page optimization and category strategies that drive online sales.",
      features: [
        "Product page optimization",
        "Category hierarchy",
        "Faceted navigation SEO",
        "Shopping feed optimization",
      ],
    },
    {
      iconName: "FiTrendingUp",
      title: "Enterprise SEO",
      description:
        "Scalable SEO programs for large websites with thousands of pages.",
      features: [
        "Large-scale optimization",
        "International SEO",
        "SEO governance & training",
        "Custom reporting dashboards",
      ],
    },
  ];

  const featuredPortfolio = portfolioItems.slice(0, 3);
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive SEO Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From technical foundations to content strategy, we deliver
              end-to-end SEO solutions that drive measurable business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proven Results for Leading Brands
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've driven millions in revenue for Fortune 500 companies and
              high-growth startups through strategic SEO programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPortfolio.map((item) => (
              <PortfolioCard
                key={item.slug}
                slug={item.slug}
                title={item.frontmatter.title}
                client={item.frontmatter.client}
                industry={item.frontmatter.industry}
                description={item.frontmatter.description}
                image={item.frontmatter.image}
                metrics={item.frontmatter.metrics}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest SEO Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert guides, strategies, and industry insights to help you stay
              ahead in the ever-evolving world of SEO.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.frontmatter.title}
                description={post.frontmatter.description}
                date={post.frontmatter.date}
                author={post.frontmatter.author}
                category={post.frontmatter.category}
                readTime={post.frontmatter.readTime}
                image={post.frontmatter.image}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Dominate Organic Search?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free SEO audit and discover your website's untapped potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Free Audit
            </Link>
            <Link
              href="/services"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
