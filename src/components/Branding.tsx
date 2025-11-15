import React, { useEffect, useRef } from 'react';
import { 
  Palette, 
  BookOpen, 
  Megaphone, 
  Printer,
  Monitor, 
  Type,
  Target,
  BarChart3
} from 'lucide-react';
import { BrandingCard, ProcessStep } from '../types';
import brandingHero from '../assets/brandig-hero.png';

const Branding: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const processStepsRef = useRef<(HTMLDivElement | null)[]>([]);

  const brandingCards: BrandingCard[] = [
    {
      id: 1,
      icon: 'palette',
      title: 'Logo Design',
      description: 'Creative logo design to represent your brand.'
    },
    {
      id: 2,
      icon: 'book',
      title: 'Style Guide',
      description: 'Comprehensive style guide for consistency.'
    },
    {
      id: 3,
      icon: 'ad',
      title: 'Advertisements',
      description: 'Effective advertisements for promotions.'
    },
    {
      id: 4,
      icon: 'print',
      title: 'Printing Needs',
      description: 'High-quality prints for all your branding needs.'
    },
    {
      id: 5,
      icon: 'strategy',
      title: 'Brand Strategy',
      description: [
        'Core Identity Development:',
        'Target audience analysis',
        'Brand positioning',
        'Personality & voice guidelines'
      ]
    },
    {
      id: 6,
      icon: 'trademark',
      title: 'Naming & Identity',
      description: [
        'Comprehensive Solutions:',
        'Memorable naming',
        'Tagline creation',
        'Brand architecture'
      ]
    },
    {
      id: 7,
      icon: 'digital',
      title: 'Digital Presence',
      description: [
        'Online Brand Management:',
        'Social media strategy',
        'Reputation monitoring',
        'Digital advertising'
      ]
    },
    {
      id: 8,
      icon: 'evolution',
      title: 'Brand Evolution',
      description: [
        'Continuous Improvement:',
        'Performance analytics',
        'Market adaptation',
        'Strategic refinement'
      ]
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      number: 1,
      title: 'Discovery & Strategy',
      description: 'We start by understanding your business, market position, and goals to develop a tailored branding strategy.',
      features: [
        'Market research and analysis',
        'Competitor analysis',
        'Target audience profiling',
        'Brand positioning strategy'
      ]
    },
    {
      number: 2,
      title: 'Creative Development',
      description: 'Our creative team develops visual and verbal brand elements that capture your essence.',
      features: [
        'Logo design concepts',
        'Color palette selection',
        'Typography system',
        'Brand voice definition',
        'Style guide creation'
      ]
    },
    {
      number: 3,
      title: 'Implementation & Launch',
      description: 'We bring your brand to life across all touchpoints and support a successful launch.',
      features: [
        'Brand asset development',
        'Marketing collateral',
        'Digital implementation',
        'Launch strategy',
        'Employee training'
      ]
    }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up', 'opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    processStepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  const addCardToRefs = (el: HTMLDivElement | null, index: number) => {
    cardsRef.current[index] = el;
  };

  const addProcessToRefs = (el: HTMLDivElement | null, index: number) => {
    processStepsRef.current[index] = el;
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'palette':
        return <Palette className="w-12 h-12 text-red-700 mb-4" />;
      case 'book':
        return <BookOpen className="w-12 h-12 text-red-700 mb-4" />;
      case 'ad':
        return <Megaphone className="w-12 h-12 text-red-700 mb-4" />;
      case 'print':
        return <Printer className="w-12 h-12 text-red-700 mb-4" />;
      case 'strategy':
        return <Target className="w-12 h-12 text-red-700 mb-4" />;
      case 'trademark':
        return <Type className="w-12 h-12 text-red-700 mb-4" />;
      case 'digital':
        return <Monitor className="w-12 h-12 text-red-700 mb-4" />;
      case 'evolution':
        return <BarChart3 className="w-12 h-12 text-red-700 mb-4" />;
      default:
        return null;
    }
  };

  const renderDescription = (description: string | string[]) => {
    if (Array.isArray(description)) {
      return (
        <div className="text-left">
          {description.map((line, index) => (
            <p 
              key={index} 
              className={`${
                index === 0 ? 'font-bold text-red-700 mb-2' : 'text-gray-600'
              } text-sm leading-relaxed`}
            >
              {line}
            </p>
          ))}
        </div>
      );
    }
    return <p className="text-gray-600 leading-relaxed">{description}</p>;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="hero relative h-80 lg:h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${brandingHero})`
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="hero-overlay bg-white/80 rounded-xl p-8 max-w-4xl mx-4 text-center transform transition-all duration-700 ease-out">
          <h2 className="text-3xl lg:text-4xl font-bold text-red-700 mb-6 animate-fade-in-up">
            Branding
          </h2>
          <p className="text-lg lg:text-xl text-gray-800 leading-relaxed animate-fade-in-up animation-delay-300">
            <span className="text-red-700 font-semibold">To build a strong brand</span>, start with defining your brand's purpose, target audience, and core values,{' '}
            <span className="text-red-700 font-semibold">then develop a unique brand identity</span> including a{' '}
            <span className="text-red-700 font-semibold">logo, tagline, and style guide</span>, and finally, consistently apply your branding across all platforms.
          </p>
        </div>
      </section>

      {/* Branding Cards Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="branding-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {brandingCards.map((card, index) => (
              <div
                key={card.id}
                ref={(el) => addCardToRefs(el, index)}
                className="card group bg-white rounded-xl shadow-lg p-6 text-center transform transition-all duration-500 ease-out opacity-0 translate-y-8 hover:-translate-y-4 hover:shadow-2xl cursor-pointer"
                style={{ animationDelay: `${(index % 8) * 0.1 + 0.2}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 ease-out">
                    {getIconComponent(card.icon)}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors duration-300">
                  {card.title}
                </h3>
                {renderDescription(card.description)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branding Process Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              Our <span className="text-red-700">Branding Process</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-red-700 rounded"></div>
            </h2>
            <p className="text-lg text-gray-600">How we create powerful brands that stand out</p>
          </div>

          <div className="process-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                ref={(el) => addProcessToRefs(el, index)}
                className="process-step bg-white rounded-2xl p-8 shadow-lg relative overflow-hidden opacity-0 transform translate-y-8 transition-all duration-700 ease-out hover:shadow-xl"
                style={{ animationDelay: `${index * 0.2 + 0.2}s` }}
              >
                <div className="step-number absolute top-6 right-6 text-6xl font-black text-red-700/10 pointer-events-none">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-red-700 mb-4 relative z-10">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                  {step.description}
                </p>
                <ul className="text-left space-y-3 relative z-10">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-700">
                      <span className="text-red-700 font-bold mr-3 mt-1">✓</span>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 uppercase">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Let's collaborate to create a powerful brand identity that resonates with your audience
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-red-700 px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-lg"
            >
              Start Your Brand Journey
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Branding;