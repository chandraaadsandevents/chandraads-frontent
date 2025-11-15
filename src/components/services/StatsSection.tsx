import React, { useEffect, useRef, useState } from 'react';
import { StatItem } from '../../types/services';

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    { id: 1, number: '24+', label: 'Years Experience', delay: '0s' },
    { id: 2, number: '500+', label: 'Happy Clients', delay: '0.2s' },
    { id: 3, number: '2500+', label: 'Campaigns', delay: '0.4s' },
    { id: 4, number: '97%', label: 'Client Retention', delay: '0.6s' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gradient-to-r from-gray-900 to-black text-white py-20 my-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div 
              key={stat.id}
              className="p-6 transform transition-all duration-500 hover:scale-110"
              style={{
                animationDelay: stat.delay,
                animationFillMode: 'both'
              }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-red-500 mb-3 transition-all duration-300">
                {isVisible ? stat.number : '0'}
              </div>
              <div className="text-lg lg:text-xl uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;