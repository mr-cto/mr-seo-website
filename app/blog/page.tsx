import { getBlogPosts } from "@/lib/mdx";
import BlogCard from "@/components/ui/BlogCard";
import Link from "next/link";

export const metadata = {
  title: "SEO Blog | Expert Tips, Strategies & Industry Insights",
  description:
    "Stay ahead with expert SEO guides, strategies, and best practices. Learn from our team of SEO professionals who drive results for Fortune 500 brands.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "SEO Blog | Expert Tips, Strategies & Industry Insights",
    description:
      "Stay ahead with expert SEO guides, strategies, and best practices. Learn from our team of SEO professionals who drive results for Fortune 500 brands.",
    url: "/blog",
  },
};

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  const categories = [
    "All",
    ...new Set(blogPosts.map((post) => post.frontmatter.category)),
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 pt-32 md:pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              SEO Insights & Strategies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert guides, best practices, and cutting-edge strategies to help
              you dominate organic search.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
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
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Stay Updated on SEO Trends
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest SEO strategies, algorithm updates, and expert
            insights delivered to your inbox.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
