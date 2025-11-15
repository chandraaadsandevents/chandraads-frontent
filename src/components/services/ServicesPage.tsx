import React from 'react';
import Header from '../Header';
import ScrollProgress from '../ScrollProgress';
import ServicesHero from './ServicesHero';
import ServiceCard from './ServiceCard';
import StatsSection from './StatsSection';
import FAQSection from './FAQSection';
import CTASection from './CTASection';
import Footer from '../Footer';
import { Service } from '../../types/services';

const ServicesPage: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: 'TV Advertising',
      description: 'Reach millions of viewers through strategic prime-time placements and targeted channel selection. Our TV campaigns deliver maximum impact with memorable creative content.',
      image: 'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      badge: 'Prime Placement',
      alignment: 'left',
      features: [
        'Prime-time slots for maximum visibility',
        'Regional and national channel coverage',
        'Advanced campaign analytics',
        'Creative concept development',
        'Target audience segmentation',
        'ROI tracking and reporting'
      ]
    },
    {
      id: 2,
      title: 'Press Media',
      description: 'Dominate print media with placements in leading newspapers and popular magazines. Our press campaigns build credibility and reach engaged audiences.',
      image: 'https://images.unsplash.com/photo-1510274642460-65b81f543c1b?auto=format&fit=crop&w=800&q=80',
      badge: 'Print Solutions',
      alignment: 'right',
      features: [
        'National & regional newspapers',
        'Magazine features and advertorials',
        'Special edition placements',
        'Press release distribution',
        'Media buying strategy',
        'Circulation analysis'
      ]
    },
    {
      id: 3,
      title: 'FM Radio',
      description: 'Connect with audiences through engaging radio spots and sponsored programs. Our audio campaigns create memorable brand experiences.',
      image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      badge: 'Audio Impact',
      alignment: 'left',
      features: [
        'Prime-time jingles and ads',
        'Radio talk show integrations',
        'Traffic hour spots',
        'Radio contest sponsorships',
        'Local station partnerships',
        'Voice talent selection'
      ]
    },
    {
      id: 4,
      title: 'Outdoor Advertising',
      description: 'Maximize visibility with strategic outdoor placements across high-traffic locations. Our OOH campaigns ensure your brand gets noticed.',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      badge: 'High Visibility',
      alignment: 'right',
      features: [
        'Billboards & hoardings',
        'Transit advertising (buses, trains)',
        'Digital outdoor displays',
        'Airport and mall advertising',
        'Street furniture branding',
        'Location-based targeting'
      ]
    },
    {
      id: 5,
      title: 'Digital Marketing',
      description: 'Drive online engagement with targeted digital campaigns across multiple platforms. Our digital strategies deliver measurable results.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      badge: 'Online Presence',
      alignment: 'left',
      features: [
        'Social media marketing',
        'Search engine optimization',
        'Pay-per-click advertising',
        'Email marketing campaigns',
        'Content marketing strategy',
        'Analytics and conversion tracking'
      ]
    },
    {
      id: 6,
      title: 'Event Marketing',
      description: 'Create memorable brand experiences through strategically planned events and activations.',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      badge: 'Experiential',
      alignment: 'right',
      features: [
        'Product launch events',
        'Exhibition and trade show management',
        'Corporate event planning',
        'Brand activation experiences',
        'Celebrity and influencer appearances',
        'Event ROI measurement'
      ]
    },
    {
      id: 7,
      title: 'Creative Production',
      description: 'Bring your brand story to life with compelling creative content across all media formats.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      badge: 'Creative Excellence',
      alignment: 'left',
      features: [
        'Commercial video production',
        'Photography and image creation',
        'Graphic design services',
        'Copywriting and content creation',
        'Animation and motion graphics',
        'Brand identity development'
      ]
    },
    {
      id: 8,
      title: 'Media Strategy',
      description: 'Develop comprehensive media plans that maximize your advertising budget and reach.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      badge: 'Strategic Planning',
      alignment: 'right',
      features: [
        'Cross-channel media planning',
        'Audience research and segmentation',
        'Competitive media analysis',
        'Budget allocation strategy',
        'Performance forecasting',
        'ROI optimization'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Header />
      
      <main>
        <ServicesHero />
        
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-16 relative">
              Our <span className="text-red-800">Services</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-800 mt-4 rounded" />
            </h1>
            
            <div className="space-y-16">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        <StatsSection />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;