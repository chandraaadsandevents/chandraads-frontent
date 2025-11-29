import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { WorkItem } from '../types';

// Import all images individually
import works1 from '../assets/works1.png';
import works2 from '../assets/works2.png';
import works3 from '../assets/works3.jpg';
import works4 from '../assets/works4.jpg';
import works5 from '../assets/works5.jpg';
// Add remaining images as needed

const worksData: WorkItem[] = [
  {
    id: 1,
    title: 'Roll up banner mockup design',
    category: 'Roll up banners',
    image: works1,
    description: '360° multi-platform advertising solution',
    alt: ''
  },
  {
    id: 2,
    title: 'Roll up standy model banner',
    category: 'Outdoor Media',
    image: works2,
    description: 'Strategic outdoor placements',
    alt: ''
  },
  {
    id: 3,
    title: 'Creative brand identity',
    category: 'Logo design',
    image: works3,
    description: 'Create your unique meaningful logo with our creative team',
    alt: ''
  },
  {
    id: 4,
    title: 'Eye-Catching Brand Display',
    category: 'Promotional Standee',
    image: works4,
    description: 'High-impact standee designs for events and stores',
    alt: ''
  },
  {
    id: 5,
    title: 'High-Impact Airport Screens',
    category: 'Digital Display Advertising',
    image: works5,
    description: 'Captivate travelers with premium digital ads',
    alt: ''
  },
  // Add remaining items similarly
];

const categories = ['All', 'Roll up banners', 'Outdoor Media', 'Logo design', 'Promotional Standee', 'Digital Display Advertising'];

const OurWorks: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredItems = selectedCategory === 'All'
    ? worksData
    : worksData.filter(item => item.category === selectedCategory);

  return (
    <section className="bg-white relative overflow-hidden mt-16 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 fade-in-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-10 mb-5">
            Creative <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful advertising campaigns that have delivered exceptional results.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Overlay Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                    <ExternalLink className="text-white" size={32} strokeWidth={2} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
