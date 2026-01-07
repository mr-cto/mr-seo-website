import ServiceCard from "@/components/ui/ServiceCard";
import Link from "next/link";

export const metadata = {
  title: "SEO Services | Enterprise Technical SEO & Strategy",
  description:
    "Comprehensive SEO services including technical optimization, content strategy, link building, local SEO, e-commerce, and enterprise solutions.",
};

export default function ServicesPage() {
  const services = [
    {
      iconName: "FiSearch",
      title: "Technical SEO",
      description:
        "Build a solid technical foundation that enables search engines to efficiently crawl, index, and understand your website. We optimize site architecture, improve Core Web Vitals, and implement structured data.",
      features: [
        "Site architecture & URL structure optimization",
        "Core Web Vitals improvement (LCP, FID, CLS)",
        "Schema markup & rich snippets implementation",
        "Mobile-first optimization & responsive design",
        "Page speed optimization & performance tuning",
        "XML sitemap & robots.txt configuration",
        "JavaScript rendering & client-side optimization",
        "International SEO & hreflang implementation",
      ],
    },
    {
      iconName: "FiFileText",
      title: "Content Strategy",
      description:
        "Data-driven content strategies that align with search intent and drive conversions. We help you create, optimize, and scale content that ranks and resonates with your target audience.",
      features: [
        "Comprehensive keyword research & mapping",
        "Content gap analysis & opportunity identification",
        "Editorial calendar planning & execution",
        "On-page optimization & meta tag strategy",
        "Content brief creation & writer guidelines",
        "Topic cluster & pillar page development",
        "Content refresh & historical optimization",
        "Conversion-focused content optimization",
      ],
    },
    {
      iconName: "FiLink",
      title: "Link Building",
      description:
        "White-hat link acquisition strategies that build domain authority and drive qualified referral traffic. We focus on earning high-quality backlinks through strategic outreach and content promotion.",
      features: [
        "Digital PR campaigns & brand mentions",
        "Strategic partnership development",
        "Content-driven link earning",
        "Competitor backlink analysis & replication",
        "Broken link building opportunities",
        "Resource page & roundup placements",
        "Guest posting on authoritative sites",
        "Link profile audit & toxic link removal",
      ],
    },
    {
      iconName: "FiBarChart2",
      title: "Local SEO",
      description:
        "Dominate local search results and drive foot traffic to your physical locations. We optimize your Google Business Profile, build citations, and develop location-specific content strategies.",
      features: [
        "Google Business Profile optimization",
        "Local citation building & NAP consistency",
        "Review generation & reputation management",
        "Local content strategies & location pages",
        "Local link building campaigns",
        "Google Maps optimization",
        "Multi-location SEO strategies",
        "Voice search optimization",
      ],
    },
    {
      iconName: "FiShoppingCart",
      title: "E-commerce SEO",
      description:
        "Drive online sales with product page optimization and category strategies designed for e-commerce sites. We help you rank for high-intent keywords and improve conversion rates.",
      features: [
        "Product page optimization & templates",
        "Category page & faceted navigation SEO",
        "Shopping feed optimization (Google, Bing)",
        "Product schema markup implementation",
        "Internal linking & site architecture",
        "Duplicate content resolution",
        "User-generated content optimization",
        "Seasonal campaign planning",
      ],
    },
    {
      iconName: "FiTrendingUp",
      title: "Enterprise SEO",
      description:
        "Scalable SEO programs designed for large websites with thousands of pages. We implement automated solutions, governance frameworks, and custom reporting for enterprise organizations.",
      features: [
        "Large-scale technical optimization",
        "International & multi-regional SEO",
        "SEO governance & stakeholder training",
        "Custom reporting dashboards & KPIs",
        "Migration planning & execution",
        "Platform-specific SEO (Shopify, WordPress, etc.)",
        "Programmatic SEO strategies",
        "Change management & documentation",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 pt-32 md:pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Comprehensive SEO Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end SEO solutions that drive measurable business results.
              From technical foundations to content strategy, we deliver organic
              growth at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our SEO Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that delivers consistent results for
              enterprise clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Audit & Analysis
              </h3>
              <p className="text-gray-600">
                Comprehensive audit of technical, content, and off-page factors
                to identify opportunities
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Strategy Development
              </h3>
              <p className="text-gray-600">
                Custom SEO roadmap aligned with your business goals and
                competitive landscape
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Implementation
              </h3>
              <p className="text-gray-600">
                Execution of technical optimizations, content creation, and link
                building campaigns
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Measurement & Optimization
              </h3>
              <p className="text-gray-600">
                Continuous monitoring, reporting, and optimization based on
                performance data
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep expertise across multiple verticals and business models
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Hospitality & Travel",
              "E-commerce & Retail",
              "Financial Services",
              "SaaS & Technology",
              "Healthcare",
              "Education",
              "Real Estate",
              "Professional Services",
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow"
              >
                <p className="text-gray-900 font-semibold">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Drive Organic Growth?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free SEO audit and discover your website's untapped potential.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Your Free Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
