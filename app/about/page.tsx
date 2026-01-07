import Link from "next/link";

export const metadata = {
  title: "About Us | Enterprise SEO Agency",
  description:
    "Learn about our team of SEO experts who have driven millions in organic revenue for Fortune 500 brands and high-growth startups.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 pt-32 md:pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              We Drive Organic Growth at Scale
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A team of SEO experts who have generated millions in revenue for
              Fortune 500 brands through data-driven strategies and technical
              excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            We believe every business deserves to dominate organic search. Our
            mission is to deliver enterprise-level SEO strategies that drive
            measurable business results— more traffic, more leads, and more
            revenue.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                $890M+
              </div>
              <div className="text-gray-600">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4.2M+</div>
              <div className="text-gray-600">Leads Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Founded by a team of former in-house SEO directors from Fortune
              500 companies, we've seen firsthand what works at scale. We've
              managed multi-million dollar SEO budgets, optimized sites with
              millions of pages, and navigated countless Google algorithm
              updates.
            </p>
            <p className="text-gray-700 mb-6">
              Our agency was born from a simple frustration: too many SEO
              agencies focus on vanity metrics instead of business outcomes. We
              built our practice around one principle—drive measurable ROI
              through technical excellence and strategic thinking.
            </p>
            <p className="text-gray-700">
              Today, we work with leading brands across hospitality, e-commerce,
              SaaS, financial services, and more. Our clients trust us because
              we deliver results, not just reports.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-4">01</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Data-Driven Strategy
              </h3>
              <p className="text-gray-600">
                Every decision is backed by data. We use advanced analytics,
                competitive intelligence, and industry insights to build
                strategies that deliver ROI.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-4">02</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Technical Excellence
              </h3>
              <p className="text-gray-600">
                We obsess over technical details—site architecture, Core Web
                Vitals, structured data, and everything that helps search
                engines understand your site.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-4">03</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Transparent Communication
              </h3>
              <p className="text-gray-600">
                No black boxes. We explain our strategies, share our data, and
                keep you informed every step of the way. You'll always know what
                we're doing and why.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Built by SEO Veterans
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team includes former SEO directors from companies like Expedia,
            Zillow, and HubSpot. We've managed SEO at scale and know what works.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Scale Your Organic Growth?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help you dominate organic search.
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
