import React from 'react';
import { Link } from 'react-router-dom';
import { AdService } from '../types';

const OutdoorAds: React.FC = () => {
  const outdoorServices: AdService[] = [
    {
      id: '1',
      title: 'Billboard Advertising',
      description: 'Massive impact with strategic billboard placements across high-traffic locations.',
      features: [
        'Prime locations',
        '24/7 visibility',
        'Large format printing',
        'Digital options available'
      ],
      pricing: {
        basic: '₹50,000',
        standard: '₹1,20,000',
        premium: '₹2,50,000'
      },
      image: '/api/placeholder/600/400',
      icon: '🏢'
    },
    {
      id: '2',
      title: 'Bus Shelter Ads',
      description: 'Target commuters with strategically placed bus shelter advertisements.',
      features: [
        'High foot traffic',
        'Local targeting',
        'Illuminated options',
        'Multiple routes'
      ],
      pricing: {
        basic: '₹15,000',
        standard: '₹35,000',
        premium: '₹75,000'
      },
      image: '/api/placeholder/600/400',
      icon: '🚌'
    },
    {
      id: '3',
      title: 'Digital Signage',
      description: 'Dynamic digital displays with rotating content and real-time updates.',
      features: [
        'Dynamic content',
        'Multiple ads rotation',
        'Real-time updates',
        'High visibility'
      ],
      pricing: {
        basic: '₹75,000',
        standard: '₹1,80,000',
        premium: '₹3,50,000'
      },
      image: '/api/placeholder/600/400',
      icon: '📺'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Outdoor <span className="text-green-600">Advertising</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Make a big impression with outdoor advertising that captures attention 
              and drives brand awareness across high-traffic locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
              >
                Book Space Now
              </Link>
              <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition duration-300">
                View Locations
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Outdoor Advertising Solutions
            </h2>
            <p className="text-gray-600 text-lg">
              From traditional billboards to modern digital displays, we have the perfect outdoor solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outdoorServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600 relative">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute top-4 left-4 text-4xl">
                    {service.icon}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className=" pt-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Pricing (Monthly):</h4>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-green-50 rounded-lg p-2">
                        <div className="text-sm text-gray-600">Basic</div>
                        <div className="font-bold text-green-600">{service.pricing.basic}</div>
                      </div>
                      <div className="bg-green-100 rounded-lg p-2">
                        <div className="text-sm text-gray-600">Standard</div>
                        <div className="font-bold text-green-700">{service.pricing.standard}</div>
                      </div>
                      <div className="bg-green-200 rounded-lg p-2">
                        <div className="text-sm text-gray-600">Premium</div>
                        <div className="font-bold text-green-800">{service.pricing.premium}</div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
                    Select Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Outdoor Advertising Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '👁️',
                title: '24/7 Visibility',
                description: 'Your ad works around the clock, reaching audiences day and night.'
              },
              {
                icon: '🎯',
                title: 'Local Targeting',
                description: 'Reach specific geographic areas and local communities effectively.'
              },
              {
                icon: '💡',
                title: 'High Impact',
                description: 'Large formats create memorable impressions and brand recognition.'
              },
              {
                icon: '📈',
                title: 'Cost Effective',
                description: 'Reach thousands of people daily at a low cost per impression.'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-500 to-teal-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Dominate the Outdoors?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to discuss your outdoor advertising strategy and get the best locations.
          </p>
          <Link
            to="/contact"
            className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300 inline-block"
          >
            Get Quote Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OutdoorAds;