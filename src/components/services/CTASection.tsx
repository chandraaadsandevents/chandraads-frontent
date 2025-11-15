import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-red-800 to-red-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Ready to Transform Your Brand?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Let's create an advertising campaign that delivers real results for your business.
        </p>
        <a 
          href="/contact"
          className="inline-block bg-white text-red-800 px-8 py-4 rounded-full font-semibold text-lg uppercase tracking-wide shadow-lg hover:bg-gray-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-white"
        >
          Contact Us Today
        </a>
      </div>
    </section>
  );
};

export default CTASection;