import ContactForm from "@/components/forms/ContactForm";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import Script from "next/script";

export const metadata = {
  title: "Contact Us | Get Your Free SEO Audit",
  description:
    "Ready to drive organic growth? Contact our team for a free SEO audit and strategy consultation. We typically respond within 24 hours.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Get Your Free SEO Audit",
    description:
      "Ready to drive organic growth? Contact our team for a free SEO audit and strategy consultation. We typically respond within 24 hours.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Calendly Widget Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 pt-32 md:pt-40 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Let's Grow Your Organic Traffic
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get a free SEO audit and strategy consultation. We'll analyze
                your website and provide actionable recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    We're here to answer your questions and help you achieve
                    your organic growth goals. Reach out today to start the
                    conversation.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiMail className="text-blue-600" size={24} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:t@mrcto.ai"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        t@mrcto.ai
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiPhone className="text-blue-600" size={24} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Phone
                      </h3>
                      <a
                        href="tel:+17343071356"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        (734) 307-1356
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiMapPin className="text-blue-600" size={24} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Location
                      </h3>
                      <p className="text-gray-600">
                        Remote-First Agency
                        <br />
                        Serving Clients Worldwide
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiClock className="text-blue-600" size={24} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Response Time
                      </h3>
                      <p className="text-gray-600">
                        We typically respond within 24 hours
                        <br />
                        Monday - Friday, 9am - 6pm EST
                      </p>
                    </div>
                  </div>
                </div>

                {/* Calendly */}
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Schedule a Strategy Call
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Prefer to talk? Book a 30-minute strategy session with our
                    team.
                  </p>
                  {/* Replace YOUR_CALENDLY_URL with your actual Calendly link */}
                  <a
                    href="https://calendly.com/t-mrcto/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Schedule Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What's included in a free SEO audit?
                </h3>
                <p className="text-gray-600">
                  Our free audit includes technical SEO analysis, content gap
                  assessment, backlink profile review, and keyword opportunity
                  identification. You'll receive a detailed report with
                  actionable recommendations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How long does it take to see results?
                </h3>
                <p className="text-gray-600">
                  Most clients see measurable improvements within 3-6 months.
                  Enterprise sites with strong technical foundations may see
                  results sooner, while competitive industries require
                  longer-term investment.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do you work with small businesses?
                </h3>
                <p className="text-gray-600">
                  While we specialize in enterprise SEO, we work with
                  high-growth startups and mid-market companies. If you're
                  serious about organic growth and have the budget to invest,
                  we'd love to discuss how we can help.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
