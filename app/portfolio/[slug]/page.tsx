import { getPortfolioItems, getPortfolioItem } from "@/lib/mdx";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  const items = await getPortfolioItems();
  return items.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = await getPortfolioItem(slug);

  if (!item) {
    return {};
  }

  return {
    title: `${item.frontmatter.client} Case Study | ${item.frontmatter.title}`,
    description: item.frontmatter.description,
    alternates: {
      canonical: `/portfolio/${slug}`,
    },
    openGraph: {
      title: `${item.frontmatter.client} Case Study | ${item.frontmatter.title}`,
      description: item.frontmatter.description,
      url: `/portfolio/${slug}`,
      type: "article",
    },
  };
}

export default async function PortfolioItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = await getPortfolioItem(slug);

  if (!item) {
    notFound();
  }

  const { frontmatter, content } = item;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 pt-32 md:pt-40 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Portfolio
          </Link>

          <div className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-full mb-4">
            {frontmatter.industry}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {frontmatter.client}
          </h1>

          <p className="text-xl text-gray-300 mb-6">{frontmatter.title}</p>

          <div className="flex flex-wrap gap-2">
            {frontmatter.services.map((service: string, index: number) => (
              <span
                key={index}
                className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {frontmatter.metrics.map(
              (metric: { label: string; value: string }, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm p-6 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg max-w-none
            prose-headings:font-bold
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-gray-900
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-gray-900
            prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3 prose-h4:text-gray-900
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
            prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
            prose-li:my-2 prose-li:text-gray-700
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-code:bg-gray-100 prose-code:text-pink-600 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
            prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
            prose-hr:my-8 prose-hr:border-gray-300
          "
          >
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want Results Like These?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can drive similar growth for your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Your Free SEO Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
