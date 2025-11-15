import React, { useState } from 'react';
import { FAQItem } from '../../types/services';

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'How long does it take to create an advertising campaign?',
      answer: 'The timeline for creating an advertising campaign varies based on complexity, media channels, and creative requirements. Typically, a comprehensive multi-channel campaign takes 4-8 weeks from initial briefing to launch. This includes research, strategy development, creative production, media planning, and implementation.'
    },
    {
      id: 2,
      question: 'What makes Chandraaads different from other agencies?',
      answer: 'With 24 years in the industry, we combine traditional advertising expertise with cutting-edge digital strategies. Our team includes specialists in every media channel, ensuring integrated campaigns that deliver results. We prioritize measurable ROI and maintain long-term partnerships with media outlets for better rates and placements.'
    },
    {
      id: 3,
      question: 'How do you measure campaign success?',
      answer: 'We establish clear KPIs before campaign launch based on your objectives. For digital campaigns, we track metrics like impressions, CTR, conversions, and ROI. For traditional media, we use methods like brand lift studies, coupon redemptions, unique promo codes, and sales correlation analysis. All campaigns include detailed performance reporting.'
    },
    {
      id: 4,
      question: 'What is your minimum campaign budget?',
      answer: 'We work with businesses of all sizes. Our minimum engagement starts at ₹50,000 for specific digital services. For comprehensive multi-channel campaigns, we typically recommend budgets starting at ₹2 lakhs to ensure meaningful impact and measurable results. We always provide transparent pricing and maximize your budget\'s effectiveness.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id}
              className={`border-b border-gray-200 last:border-b-0 transition-all duration-300 ${
                activeIndex === index ? 'bg-gray-50' : ''
              }`}
            >
              <button
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg lg:text-xl font-semibold text-gray-800 pr-4">
                  {faq.question}
                </span>
                <span className={`transform transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg className="w-5 h-5 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;