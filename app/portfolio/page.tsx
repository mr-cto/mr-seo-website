import { getPortfolioItems } from "@/lib/mdx";
import PortfolioCard from "@/components/ui/PortfolioCard";

export const metadata = {
  title: "Portfolio | SEO Case Studies & Results",
  description:
    "View our enterprise SEO case studies. See how we have driven millions in revenue for Fortune 500 companies including Hyatt, Rocket Mortgage, and more.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio | SEO Case Studies & Results",
    description:
      "View our enterprise SEO case studies. See how we have driven millions in revenue for Fortune 500 companies including Hyatt, Rocket Mortgage, and more.",
    url: "/portfolio",
  },
};

export default async function PortfolioPage() {
  const portfolioItems = await getPortfolioItems();

  const industries = [
    "All",
    ...new Set(portfolioItems.map((item) => item.frontmatter.industry)),
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 pt-32 md:pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              SEO Success Stories
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real clients. Discover how we've helped leading
              brands achieve transformational organic growth.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can drive similar results for your business.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Your SEO Journey
          </a>
        </div>
      </section>
    </div>
  );
}
