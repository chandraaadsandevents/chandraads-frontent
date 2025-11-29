import React, { useEffect, useRef } from 'react';
import { Target, Lightbulb, Handshake } from 'lucide-react';
import { TimelineItem, ProcessStep, ValueCard } from '../types';

const About: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const processStepsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  const timelineData: TimelineItem[] = [
    {
      year: "1999",
      title: "Humble Beginnings",
      description: "In a small rented office in Chennai, three ambitious individuals with a shared vision set out to redefine print media advertising. Armed with little more than creativity and determination, they worked tirelessly to bring bold, innovative designs to life."
    },
    {
      year: "2005",
      title: "Expanding Horizons",
      description: "As demand for integrated marketing grew, we ventured into television advertising—one of the first regional agencies to successfully bridge traditional print with dynamic broadcasting. With every campaign, we brought local brands to national prominence."
    },
    {
      year: "2012",
      title: "Digital Transformation",
      description: "The rise of digital media changed everything. Recognizing the shift, we expanded into web development, social media marketing, and branding strategies that empowered businesses to thrive in the digital age. Our transition was seamless, embracing technology without losing our creative essence."
    },
    {
      year: "2018",
      title: "Innovation & Growth",
      description: "With cutting-edge design, AI-driven advertising solutions, and strategic brand storytelling, we revolutionized how brands connect with audiences. From startups to corporate giants, our expertise became synonymous with market success."
    },
    {
      year: "Now",
      title: "Looking Ahead",
      description: "As pioneers of print, digital, and experiential branding, our journey continues with relentless innovation. With a dedicated team and unwavering passion, we craft compelling narratives that shape the future of advertising."
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      number: 1,
      title: "Discovery & Strategy",
      description: "Understanding your brand needs and crafting customized solutions through in-depth research and analysis.",
      features: []
    },
    {
      number: 2,
      title: "Creative Development",
      description: "Designing compelling campaigns across multiple media formats that resonate with your target audience.",
      features: []
    },
    {
      number: 3,
      title: "Execution & Delivery",
      description: "Seamless implementation across chosen advertising channels with precision and attention to detail.",
      features: []
    }
  ];

  const values: ValueCard[] = [
    {
      icon: "target",
      title: "Precision Targeting",
      description: "Reaching the right audience through data-driven strategies and audience insights to maximize campaign effectiveness."
    },
    {
      icon: "innovation",
      title: "Innovative Solutions",
      description: "Pioneering new approaches in digital and traditional media to keep our clients ahead of the competition."
    },
    {
      icon: "partnership",
      title: "Client Partnership",
      description: "Building long-term relationships based on trust, transparency, and mutual success beyond just campaigns."
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
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.timeline-item, .process-step, .value-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'target':
        return <Target className="w-14 h-14 text-current transition-colors duration-300 mb-6" />;
      case 'innovation':
        return <Lightbulb className="w-14 h-14 text-current transition-colors duration-300 mb-6" />;
      case 'partnership':
        return <Handshake className="w-14 h-14 text-current transition-colors duration-300 mb-6" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-red-700 mb-4 uppercase tracking-wide">
              Our <span className="text-yellow-500">Story</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 font-medium">
              24 Years of Advertising Excellence
            </p>
          </div>
        </div>
      </section> */}
    
      {/* Origins Section */}
      <section className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Ccircle%20cx%3D%222%22%20cy%3D%222%22%20r%3D%221%22%20fill%3D%22%2395001e%22%20opacity%3D%220.05%22/%3E%3C/svg%3E')] opacity-5 pointer-events-none"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              Our <span className="text-red-700">Origins</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-red-700 rounded"></div>
            </h2>
            <p className="text-gray-600 text-lg">From humble beginnings to industry leaders</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Timeline */}
            <div className="relative">
              <div className="history-timeline pl-10 lg:pl-12 mt-8" ref={timelineRef}>
                <div className="absolute left-5 lg:left-6 top-0 w-0.5 h-full bg-red-700"></div>
                
                {timelineData.map((item, index) => (
                  <div
                    key={index}
                    className="timeline-item relative mb-12 opacity-0 transform -translate-x-5 transition-all duration-700 ease-out"
                  >
                    <div className="absolute -left-10 lg:-left-12 top-2 bg-red-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                      {item.year}
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <h3 className="text-xl font-bold text-red-700 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="/src/assets/orginiamge.png"
                  alt="Our Journey"
                  className="w-full max-w-md lg:max-w-lg rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* Process Section */}
<section className="relative py-16 lg:py-24 bg-gray-900 text-white">
  <div className="absolute inset-0 bg-gray-900"></div>
    
  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 relative inline-block">
        Our <span className="text-yellow-500">Process</span>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-500 rounded"></div>
      </h2>
      <p className="text-gray-300 text-lg">How we create advertising magic</p>
    </div>

    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" ref={processStepsRef}>
      {processSteps.map((step, index) => (
        <div
          key={index}
          className="process-step bg-gray-800 rounded-2xl p-8 border border-gray-700 opacity-0 transform translate-y-8 transition-all duration-700 ease-out hover:bg-gray-700 hover:-translate-y-2"
        >
          <div className="w-16 h-16 bg-yellow-500 text-gray-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 transition-transform duration-500 hover:rotate-360">
            {step.number}
          </div>
          <h3 className="text-xl font-bold text-yellow-500 mb-4 text-center">
            {step.title}
          </h3>
          <p className="text-gray-300 text-center leading-relaxed">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              Core <span className="text-red-700">Values</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-red-700 rounded"></div>
            </h2>
            <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" ref={valuesRef}>
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out opacity-0 scale-95 hover:-translate-y-2"
              >
                <div className="flex justify-center">
                  <div className="text-red-700 group-hover:text-yellow-500 transition-colors duration-300">
                    {getIconComponent(value.icon)}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-red-700 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-28 bg-red-700 text-white">
        <div className="absolute inset-0 bg-red-700 bg-opacity-85"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 uppercase">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Let's collaborate to create advertising that resonates and delivers results
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-red-700 px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;