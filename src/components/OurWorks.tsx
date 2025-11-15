import React, { useEffect, useRef } from 'react';
import { WorkItem } from '../types';
import works1 from '../assets/works1.png';
import works2 from '../assets/works2.png';
import works3 from '../assets/works3.jpg';
import works4 from '../assets/works4.jpg';
import works5 from '../assets/works5.jpg';
import works6 from '../assets/works6.jpg';
import works7 from '../assets/works7.jpg';
import works8 from '../assets/works8.jpg';
import works9 from '../assets/works9.jpg';
import works10 from '../assets/works10.jpg';
import works11 from '../assets/works11.jpg';
import works12 from '../assets/works12.jpg';
import works13 from '../assets/works13.jpg';
import works14 from '../assets/works14.jpg';
import works15 from '../assets/works15.jpg';
import works16 from '../assets/works16.jpg';
import works17 from '../assets/works17.jpg';
import works18 from '../assets/works18.jpg';
import works19 from '../assets/works19.jpg';

const OurWorks: React.FC = () => {
  const workItemsRef = useRef<(HTMLDivElement | null)[]>([]);

   const worksData: WorkItem[] = [
    {
      id: 1,
      image: works1,
      alt: "Advertising Campaign",
      category: "Roll up banners",
      title: "Roll up banner mockup design",
      description: "360° multi-platform advertising solution"
    },
    {
      id: 2,
      image: works2,
      alt: "Outdoor Advertising",
      category: "Outdoor Media",
      title: "roll up standy model banner",
      description: "Strategic outdoor placements"
    },
    {
      id: 3,
      image: works3,
      alt: "Radio Campaign",
      category: "Logo design",
      title: "creative barnd identity",
      description: "create your uniqe meaningfull logo with our creative people"
    },
    {
      id: 4,
      image: works4,
      alt: "Brand Standee Design",
      category: "Promotional Standee",
      title: "Eye-Catching Brand Display",
      description: "High-impact standee designs for brand promotion at events, stores, and exhibitions."
    },
    {
      id: 5,
      image: works5,
      alt: "Airport Screen Advertisement",
      category: "Digital Display Advertising",
      title: "High-Impact Airport Screens",
      description: "Captivate travelers with premium digital ads on airport display screens for maximum reach and brand visibility."
    },
    {
      id: 6,
      image: works6,
      alt: "Visiting Card Printing",
      category: "Business Card Printing",
      title: "Premium Visiting Cards",
      description: "Custom-designed business cards with high-quality finishes for a lasting impression."
    },
    {
      id: 7,
      image: works7,
      alt: "Photo Frame Design",
      category: "Custom Photo Frames",
      title: "Personalized Frame Designs",
      description: "Elegant and custom-crafted photo frames to preserve your special moments."
    },
    {
      id: 8,
      image: works8,
      alt: "Radio Campaign",
      category: "Website design",
      title: "design and development",
      description: "we design and develop site for your brand."
    },
    {
      id: 9,
      image: works9,
      alt: "Photo Frame Design",
      category: "Custom Photo Frames",
      title: "Elegant Memory Preservation",
      description: "Personalized photo frames designed to showcase and protect your cherished moments."
    },
    {
      id: 10,
      image: works10,
      alt: "Bus Stop Advertisement",
      category: "Outdoor Advertising",
      title: "High-Visibility Bus Shelter Ads",
      description: "Strategically positioned ads at bus stops for maximum urban reach and brand exposure."
    },
    {
      id: 11,
      image: works11,
      alt: "Diary Printing",
      category: "Custom Diary Printing",
      title: "Personalized Corporate Diaries",
      description: "Brand-focused diaries designed for professional use with premium-quality printing."
    },
    {
      id: 12,
      image: works12,
      alt: "Radio Campaign",
      category: "Diary Printing",
      title: "Print Your Custom Diary",
      description: "Diary with your logo or your identity."
    },
    {
      id: 13,
      image: works13,
      alt: "Radio Campaign",
      category: "Design visualization",
      title: "logo mock up",
      description: "Design your logo and preview your design before impliment"
    },
    {
      id: 14,
      image: works14,
      alt: "Medicine Bottle Design",
      category: "Pharmaceutical Packaging",
      title: "Precision in Every Dose",
      description: "Secure, compliant, and brand-focused medicine packaging."
    },
    {
      id: 15,
      image: works15,
      alt: "Brochure Design",
      category: "Brochure Design",
      title: "Elegant & Impactful Branding",
      description: "Crafted brochures that showcase your brand's essence with stunning visuals and compelling content."
    },
    {
      id: 16,
      image: works16,
      alt: "Box Packaging Design",
      category: "Luxury Packaging",
      title: "Premium Box Design",
      description: "Elegantly crafted packaging that enhances product presentation and brand identity."
    },
    {
      id: 17,
      image: works17,
      alt: "Bus Stop Advertisement",
      category: "Outdoor Advertising",
      title: "Bus Stop Shelter Branding",
      description: "Strategically placed ads for maximum urban visibility and audience engagement."
    },
    {
      id: 18,
      image: works18,
      alt: "Textured Visiting Card Design",
      category: "Business Card Design",
      title: "Premium Textured Finish",
      description: "Elegant and durable business cards with a sophisticated touch and fine texture."
    },
    {
      id: 19,
      image: works19,
      alt: "Textured Visiting Card Design",
      category: "Custom Card Printing",
      title: "Luxury Matte & Embossed Cards",
      description: "High-quality embossed and matte-finished cards for a lasting professional impression."
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

    workItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    workItemsRef.current[index] = el;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Works Header */}
      <section className="works-header py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 relative inline-block">
            Our <span className="text-red-700">Creative Portfolio</span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-red-700 rounded"></div>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mt-6">
            Explore our two decades of advertising excellence
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="portfolio-grid columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 max-w-7xl mx-auto">
            {worksData.map((work, index) => (
              <div
                key={work.id}
                ref={(el) => addToRefs(el, index)}
                className="work-item break-inside-avoid bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 ease-out opacity-0 translate-y-8 hover:scale-105 hover:shadow-2xl group cursor-pointer"
                style={{ animationDelay: `${(index % 6) * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.alt}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="work-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform translate-y-full group-hover:translate-y-0 p-6 flex flex-col justify-end">
                    <span className="work-category font-bold text-yellow-400 text-sm mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 transform translate-y-4 group-hover:translate-y-0">
                      {work.category}
                    </span>
                    <h3 className="work-title text-white font-bold text-lg mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 transform translate-y-4 group-hover:translate-y-0">
                      {work.title}
                    </h3>
                    <p className="work-description text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 delay-300 transform translate-y-4 group-hover:translate-y-0">
                      {work.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWorks;