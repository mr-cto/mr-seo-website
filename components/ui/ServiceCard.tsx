import {
  FiSearch,
  FiBarChart2,
  FiFileText,
  FiLink,
  FiTrendingUp,
  FiShoppingCart,
} from "react-icons/fi";

interface ServiceCardProps {
  iconName: string;
  title: string;
  description: string;
  features: string[];
}

const iconMap: Record<string, any> = {
  FiSearch,
  FiBarChart2,
  FiFileText,
  FiLink,
  FiTrendingUp,
  FiShoppingCart,
};

export default function ServiceCard({
  iconName,
  title,
  description,
  features,
}: ServiceCardProps) {
  const Icon = iconMap[iconName];

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-500/50 group">
      <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
        <div className="text-blue-600 group-hover:text-white transition-colors">
          {Icon && <Icon size={28} />}
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
