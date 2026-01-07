import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
}

export default function BlogCard({
  slug,
  title,
  description,
  date,
  author,
  category,
  readTime,
  image,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${slug}`} className="group">
      <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-500/50 h-full flex flex-col">
        {/* Image placeholder */}
        <div className="relative h-48 bg-gradient-to-br from-blue-50 to-gray-100 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl font-bold text-gray-300">
              {title.charAt(0)}
            </div>
          </div>
          <div className="absolute top-4 left-4">
            <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
            {description}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-4">
              <span>{formattedDate}</span>
              <span>•</span>
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
