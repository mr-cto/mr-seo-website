import Link from "next/link";
import Image from "next/image";

interface Metric {
  label: string;
  value: string;
}

interface PortfolioCardProps {
  slug: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  image: string;
  metrics: Metric[];
}

export default function PortfolioCard({
  slug,
  title,
  client,
  industry,
  description,
  image,
  metrics,
}: PortfolioCardProps) {
  return (
    <Link href={`/portfolio/${slug}`} className="group">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-500/50">
        {/* Image */}
        <div className="relative h-64 bg-gradient-to-br from-blue-50 to-gray-50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
          <div className="absolute bottom-4 left-4 z-20">
            <span className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
              {industry}
            </span>
          </div>
          {/* Placeholder for actual image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl font-bold text-gray-300">
              {client.charAt(0)}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {client}
          </h3>
          <p className="text-gray-600 mb-6 line-clamp-2">{description}</p>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {metrics.slice(0, 2).map((metric, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {metric.value}
                </div>
                <div className="text-xs text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
            Read Case Study
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
