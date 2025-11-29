import React from 'react';
import { Link } from 'react-router-dom';
import { AdService } from '../types';

const MagazineAds: React.FC = () => {
  const magazineServices: AdService[] = [
    {
      id: '1',
      title: 'Full Page Ads',
      description: 'Dominate the magazine with full-page, high-impact advertisements.',
      features: ['Premium glossy paper', 'High-resolution printing', 'Center spread options', 'Long shelf life'],
      pricing: { basic: '₹15,000', standard: '₹35,000', premium: '₹75,000' },
      image: '/api/placeholder/600/400',
      icon: '📖',
    },
    {
      id: '2',
      title: 'Half Page Ads',
      description: 'Balance impact and budget with strategically placed half-page ads.',
      features: ['Cost-effective', 'Multiple positions', 'Color options', 'Targeted placement'],
      pricing: { basic: '₹8,000', standard: '₹18,000', premium: '₹35,000' },
      image: '/api/placeholder/600/400',
      icon: '📄',
    },
    {
      id: '3',
      title: 'Back Cover Ads',
      description: 'Get guaranteed visibility with premium back cover positioning.',
      features: ['Maximum visibility', 'Premium positioning', 'High-quality print', 'Exclusive placement'],
      pricing: { basic: '₹25,000', standard: '₹60,000', premium: '₹1,20,000' },
      image: '/api/placeholder/600/400',
      icon: '🏆',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Magazine <span className="text-red-600">Advertising</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Captivate your audience with high-impact magazine advertisements. Premium prints that leave a lasting impression.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-red-600 text-white px-10 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-red-700 transition duration-300"
            >
              Start Advertising
            </Link>
            <button className=" border-red-600 text-red-600 px-10 py-4 rounded-2xl font-semibold hover:bg-red-600 hover:text-white hover:scale-105 transition duration-300 shadow-sm hover:shadow-md">
              See Examples
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Magazine Ad Packages</h2>
            <p className="text-gray-600 text-lg">Premium advertising solutions for magazines with clear packages and features.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {magazineServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 border-gray-100"
              >
                <div className="h-48 bg-gradient-to-r from-red-500 via-red-600 to-red-700 flex items-center justify-center relative">
                  <div className="absolute top-4 left-4 text-4xl">{service.icon}</div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-6">{service.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
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
                      <div className="bg-red-50 rounded-lg p-2 shadow-sm hover:scale-105 transition duration-300">
                        <div className="text-sm text-gray-600">Basic</div>
                        <div className="font-bold text-red-600">{service.pricing.basic}</div>
                      </div>
                      <div className="bg-red-100 rounded-lg p-2 shadow-sm hover:scale-105 transition duration-300">
                        <div className="text-sm text-gray-600">Standard</div>
                        <div className="font-bold text-red-700">{service.pricing.standard}</div>
                      </div>
                      <div className="bg-red-200 rounded-lg p-2 shadow-sm hover:scale-105 transition duration-300">
                        <div className="text-sm text-gray-600">Premium</div>
                        <div className="font-bold text-red-800">{service.pricing.premium}</div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-4 bg-red-600 text-white py-3 rounded-2xl font-semibold hover:bg-red-700 hover:scale-105 transition duration-300 shadow-md hover:shadow-lg">
                    Choose Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-50 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Advertise in Magazines?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Contact our experts to choose the perfect magazine ad package for your business.
          </p>
          <Link
            to="/contact"
            className="bg-red-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-red-700 hover:scale-105 transition duration-300 inline-block shadow-lg"
          >
            Contact Experts
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MagazineAds;
