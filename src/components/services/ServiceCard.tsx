import React from 'react';
import { Service } from '../../types/services';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 my-16 p-6 lg:p-10 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative ${
      service.alignment === 'right' ? 'lg:flex-row-reverse' : ''
    }`}>
      {/* Left border accent */}
      <div className="absolute left-0 top-0 h-full w-2 bg-red-800 rounded-l-xl" />
      
      {/* Badge */}
      <span className="absolute top-6 right-6 bg-red-800 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
        {service.badge}
      </span>

      {/* Image */}
      <div className="flex-1 min-w-0">
        <div className="rounded-lg overflow-hidden shadow-xl">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 lg:px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 relative">
          {service.title}
          <span className="absolute -bottom-2 left-0 w-12 h-1 bg-red-800 rounded" />
        </h2>
        
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          {service.description}
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-red-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span className="text-gray-700 font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;