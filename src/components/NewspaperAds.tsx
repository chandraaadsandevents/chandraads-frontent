import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper } from 'lucide-react';

interface Pricing {
  basic: string;
  standard: string;
  premium: string;
}

interface NewspaperService {
  id: string;
  title: string;
  description: string;
  features: string[];
  pricing: Pricing;
  sizes: string[];
  icon: JSX.Element;
}

const newspaperServices: NewspaperService[] = [
  {
    id: '1',
    title: 'Front Page Ads',
    description: 'Maximum visibility with front page placements in leading newspapers.',
    features: ['Premium positioning', 'Full-color printing', 'Guaranteed visibility', 'Multiple size options'],
    pricing: { basic: '₹5,000', standard: '₹12,000', premium: '₹25,000' },
    sizes: ['Full Page', 'Half Page', 'Quarter Page'],
    icon: <Newspaper size={36} className="text-white" />,
  },
  {
    id: '2',
    title: 'Classified Ads',
    description: 'Affordable text-based ads for various categories.',
    features: ['Multiple categories', 'Daily publications', 'Budget-friendly', 'Quick placement'],
    pricing: { basic: '₹500', standard: '₹1,200', premium: '₹2,500' },
    sizes: ['Single Column', 'Double Column', 'Triple Column'],
    icon: <Newspaper size={36} className="text-white" />,
  },
  {
    id: '3',
    title: 'Display Ads',
    description: 'Creative display advertisements with customizable layouts.',
    features: ['Custom designs', 'Multiple sizes', 'Color options', 'Strategic placement'],
    pricing: { basic: '₹3,000', standard: '₹8,000', premium: '₹15,000' },
    sizes: ['Full Page', 'Half Page', 'Custom Banner'],
    icon: <Newspaper size={36} className="text-white" />,
  },
];

const NewspaperAds: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 via-white to-red-50 py-28 relative z-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Newspaper <span className="text-red-600">Advertising</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Reach millions of readers through trusted newspaper platforms. Elegant ad solutions tailored to your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-red-600 text-white px-10 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-red-700 transition duration-300"
            >
              Get Started Today
            </Link>
            <button className=" border-red-600 text-red-600 px-10 py-4 rounded-2xl font-semibold hover:bg-red-600 hover:text-white hover:scale-105 transition duration-300 shadow-sm hover:shadow-md">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="newspaper-ads" className="py-28 relative z-0 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Newspaper Ad Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Elegant and impactful advertising options with clear sizing categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {newspaperServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 border-gray-100"
              >
                {/* Icon Header */}
                <div className="h-48 bg-gradient-to-r from-red-500 via-red-600 to-red-700 flex items-center justify-center relative">
                  <div className="text-6xl">{service.icon}</div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-4">{service.description}</p>

                  {/* Ad Sizes */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Ad Sizes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.sizes.map((size, index) => (
                        <span
                          key={index}
                          className="bg-red-50 text-red-700 text-sm font-medium px-3 py-1 rounded-full hover:bg-red-100 transition duration-300"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <svg
                            className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Pricing:</h4>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="bg-white/50 backdrop-blur-md rounded-lg p-3 shadow-md hover:scale-105 transition duration-300">
                        <div className="text-sm text-gray-700">Basic</div>
                        <div className="font-bold text-red-600">{service.pricing.basic}</div>
                      </div>
                      <div className="bg-white/50 backdrop-blur-md rounded-lg p-3 shadow-md hover:scale-105 transition duration-300">
                        <div className="text-sm text-gray-700">Standard</div>
                        <div className="font-bold text-red-700">{service.pricing.standard}</div>
                      </div>
                      <div className="bg-white/50 backdrop-blur-md rounded-lg p-3 shadow-md hover:scale-105 transition duration-300">
                        <div className="text-sm text-gray-700">Premium</div>
                        <div className="font-bold text-red-800">{service.pricing.premium}</div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-4 bg-red-600 text-white py-3 rounded-2xl font-semibold hover:bg-red-700 hover:scale-105 transition duration-300 shadow-md hover:shadow-lg">
                    Select Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-50 via-white to-red-50 py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Advertise in Newspapers?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Contact us today and let our experts help you choose the perfect newspaper ad package.
          </p>
          <Link
            to="/contact"
            className="bg-red-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-red-700 hover:scale-105 transition duration-300 inline-block shadow-lg"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NewspaperAds;
