import Link from "next/link";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiTwitter,
  FiGithub,
} from "react-icons/fi";

export default function Footer() {
  const services = [
    { name: "Technical SEO", href: "/services#technical" },
    { name: "Content Marketing", href: "/services#content" },
    { name: "Link Building", href: "/services#links" },
    { name: "Local SEO", href: "/services#local" },
  ];

  const company = [
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white">
                Mr <span className="text-blue-500">SEO</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Driving organic growth for enterprise brands through data-driven
              SEO strategies. Proven results, transparent reporting, and
              measurable ROI.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <FiMail className="w-5 h-5 mr-3 text-blue-500" />
                <a
                  href="mailto:t@mrcto.ai"
                  className="hover:text-white transition-colors"
                >
                  t@mrcto.ai
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <FiPhone className="w-5 h-5 mr-3 text-blue-500" />
                <a
                  href="tel:+17343071356"
                  className="hover:text-white transition-colors"
                >
                  (734) 307-1356
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <FiMapPin className="w-5 h-5 mr-3 text-blue-500" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} SEO Agency. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <FiTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
