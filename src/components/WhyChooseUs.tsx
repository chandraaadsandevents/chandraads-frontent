import React from 'react';
import { Feature } from '../types';

const WhyChooseUs: React.FC = () => {
  const features: Feature[] = [
    {
      icon: 'fas fa-medal',
      title: '24 Years of Experience',
      description: 'Two decades of industry expertise delivering successful advertising campaigns across all media channels.'
    },
    {
      icon: 'fas fa-sync-alt',
      title: 'Multi-Channel Approach',
      description: 'Seamless integration across TV, print, radio, digital, and outdoor advertising for maximum impact.'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Creative Excellence',
      description: 'Innovative and compelling creative solutions that capture attention and drive engagement.'
    },
    {
      icon: 'fas fa-chart-pie',
      title: 'Data-Driven Strategies',
      description: 'Analytics-based approach to optimize campaigns and maximize return on investment.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Strong Media Partnerships',
      description: 'Long-standing relationships with leading media outlets for preferential rates and placements.'
    },
    {
      icon: 'fas fa-headset',
      title: 'Dedicated Support',
      description: 'Personalized service with dedicated account managers ensuring your complete satisfaction.'
    }
  ];

  return (
    <section className="py-24 px-4 bg-white lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="section-title text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why <span className="text-primary">Choose Us</span>
          </h2>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            What sets ChandraaAds apart in the advertising industry
          </p>
        </div>

        <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card bg-white rounded-xl p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-xl"
            >
              <div className="feature-icon-circle w-20 h-20 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${feature.icon} text-3xl text-primary`} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-dark">{feature.title}</h3>
              <p className="text-gray leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;