import React, { useEffect, useState, useRef } from 'react';

interface OrbitItem {
  id: number;
  imageUrl: string;
  title: string;
}

const AIMarketingSection: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const orbitContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const orbitItems: OrbitItem[] = [
    { id: 1, imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', title: 'Wedding Photography' },
    { id: 2, imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', title: 'Culinary Arts' },
    { id: 3, imageUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', title: 'Luxury Real Estate' },
    { id: 4, imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', title: 'AI Technology' },
    { id: 5, imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', title: 'Data Analytics' },
    { id: 6, imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', title: 'Digital Marketing' }
  ];

  const maxScrollDistance = 800;
  const orbitRadius = 320;

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const sectionStart = sectionTop - windowHeight * 0.8;
      const sectionEnd = sectionTop + sectionHeight;
      
      const isSectionInView = scrollY >= sectionStart && scrollY <= sectionEnd;
      setIsInView(isSectionInView);

      if (isSectionInView) {
        const sectionScrollProgress = Math.min(
          (scrollY - sectionStart) / maxScrollDistance,
          1
        );
        
        setScrollProgress(sectionScrollProgress);
        setIsContentVisible(sectionScrollProgress > 0.7);
      } else if (scrollY < sectionStart) {
        setScrollProgress(0);
        setIsContentVisible(false);
      } else if (scrollY > sectionEnd) {
        setScrollProgress(1);
        setIsContentVisible(true);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (orbitContainerRef.current?.contains(e.target as Node) && isInView) {
        e.preventDefault();
        
        const delta = e.deltaY > 0 ? 80 : -80;
        const newProgress = Math.max(0, Math.min(scrollProgress + delta / maxScrollDistance, 1));
        setScrollProgress(newProgress);
        setIsContentVisible(newProgress > 0.7);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('wheel', handleWheel);
    };
  }, [isInView, scrollProgress]);

  const updateImagePositions = (progress: number) => {
    return orbitItems.map((_, index) => {
      const angle = (index / orbitItems.length) * 2 * Math.PI;
      const targetX = Math.cos(angle) * orbitRadius;
      const targetY = Math.sin(angle) * orbitRadius;
      
      const scale = 0.7 + progress * 0.6;
      const easedProgress = 1 - Math.pow(1 - progress, 2);

      return {
        transform: `translate(${targetX * easedProgress}px, ${targetY * easedProgress}px) scale(${scale})`,
        transition: `transform ${progress > 0 ? '0.8s' : '0.5s'} cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
        opacity: progress > 0 ? 1 : 0.8
      };
    });
  };

  const imageStyles = updateImagePositions(scrollProgress);

  useEffect(() => {
    if (!isInView || scrollProgress === 0) return;

    const interval = setInterval(() => {
      setScrollProgress(prev => {
        if (prev >= 1) return prev;
        return Math.min(prev + 0.002, 1);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isInView, scrollProgress]);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-white text-white flex items-center justify-center p-8"
    >
      <div className="w-full max-w-[1400px] relative overflow-hidden py-16">

        {/* Orbit Container */}
        <div 
          ref={orbitContainerRef}
          className="relative h-[700px] w-full flex justify-center items-center"
        >
          {/* Orbit Rings */}
          <div 
            className="absolute w-[600px] h-[600px]  rounded-full opacity-20 transition-all duration-1000"
            style={{
              transform: `scale(${0.9 + scrollProgress * 0.2})`,
              opacity: 0.1 + scrollProgress * 0.2
            }}
          ></div>
          <div 
            className="absolute w-[800px] h-[800px]  rounded-full opacity-20 transition-all duration-1200"
            style={{
              transform: `scale(${0.8 + scrollProgress * 0.3})`,
              opacity: 0.05 + scrollProgress * 0.15
            }}
          ></div>
          <div 
            className="absolute w-[400px] h-[400px]  rounded-full opacity-20 transition-all duration-800"
            style={{
              transform: `scale(${1 + scrollProgress * 0.1})`,
              opacity: 0.15 + scrollProgress * 0.1
            }}
          ></div>

          {/* Orbit Items */}
          {orbitItems.map((item, index) => (
            <div
              key={item.id}
              className="absolute w-[200px] h-[200px] rounded-2xl overflow-hidden shadow-2xl origin-center z-10 opacity-90 hover:z-20 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
              style={imageStyles[index]}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent text-white py-3 px-4 text-sm text-center font-medium opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                {item.title}
              </div>
            </div>
          ))}

          {/* Orbit Center Content */}
          <div 
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 transition-all duration-1000 ease-out pointer-events-none max-w-[280px] w-full bg-black/90 backdrop-blur-md rounded-2xl p-6  border-white/10 ${
              isContentVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <p className="text-sm text-gray-300 mb-5 leading-relaxed">
              AI isn't just disrupting how people search. It's deciding what they see and what they don't.
            </p>
            <div className="flex gap-3 justify-center items-center flex-wrap">
              <button className="bg-gradient-to-br from-purple-600 to-purple-700 text-white border-none px-5 py-2 rounded-full font-semibold text-sm cursor-pointer transition-all duration-300 ease-in-out shadow-lg shadow-purple-500/30 hover:-translate-y-1 hover:shadow-purple-500/40 hover:scale-105">
                Get a demo
              </button>
              <a 
                href="/contact" 
                className="text-purple-300 no-underline font-medium text-sm relative transition-colors duration-300 ease-in-out hover:text-purple-200 after:content-[''] after:absolute after:w-full after:h-px after:bottom-[-2px] after:left-0 after:bg-purple-300 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 ease-in-out hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMarketingSection;
