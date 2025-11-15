import React from 'react';

const ServicesHero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-black to-gray-900 text-white py-32">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80')`
        }}
      />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
          Our Premium Services
        </h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto animate-fade-in-up animation-delay-200">
          24 years of delivering impactful advertising solutions across all media channels
        </p>
      </div>
    </section>
  );
};

export default ServicesHero;