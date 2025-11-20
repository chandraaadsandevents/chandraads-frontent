import React from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import Header from "./components/Header";
import ScrollProgress from "./components/ScrollProgress";

// Main pages
import Hero from "./components/Hero";
import Advertistement from "./components/advertistement";
import PressMedia from "./components/PressMedia";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import OurWorks from './components/OurWorks';
import Branding from './components/Branding';
import Contact from './components/Contact';

// View All Services Page
import ServicesPage from "./components/services/ServicesPage";
import About from "./components/About";
import SEO from "./components/SEO";

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ScrollProgress />
      <Header />

      <main>
        <Routes>
          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <SEO 
                  title="Chandraa Ads - Advertising Solutions"
                  description="24 years of advertising excellence. Full-service agency specializing in TV, digital, print media, FM radio, and outdoor advertising in Coimbatore."
                  keywords="advertising agency Coimbatore, TV advertising, digital marketing, print media, brand promotion, marketing agency"
                  canonical="/"
                />
                <Hero />
                <Advertistement />
                <PressMedia />
                <Services />
                <WhyChooseUs />
              </>
            }
          />

          {/* VIEW ALL SERVICES PAGE */}
          <Route path="/services" element={
            <>
              <SEO 
                title="Our Services - Advertising Solutions"
                description="Explore our comprehensive advertising services including TV, press media, FM radio, outdoor advertising, digital marketing, and branding solutions."
                keywords="TV advertising services, press media advertising, FM radio ads, outdoor advertising, digital marketing services"
                canonical="/services"
              />
              <ServicesPage />
            </>
          } />

          {/* ABOUT PAGE */}
          <Route path="/about" element={
            <>
              <SEO 
                title="About Us - 24 Years of Excellence"
                description="Learn about Chandraa Ads' journey from humble beginnings in 1999 to becoming a leading advertising agency with 24 years of industry experience."
                keywords="about Chandraa Ads, advertising agency history, 24 years experience, brand success stories"
                canonical="/about"
              />
              <About />
            </>
          } />

          {/* CONTACT PAGE */}
          <Route path="/contact" element={
            <>
              <SEO 
                title="Contact Us - Get in Touch"
                description="Contact Chandraa Ads for professional advertising solutions. Call +91-9994272027 or email chandraaads1@gmail.com for brand consultations."
                keywords="contact advertising agency, get advertising quote, brand consultation, marketing agency contact"
                canonical="/contact"
              />
              <Contact />
            </>
          } />

          {/* OUR WORKS PAGE */}
          <Route path="/ourworks" element={
            <>
              <SEO 
                title="Our Works - Creative Portfolio"
                description="Browse our portfolio of successful advertising campaigns, branding projects, and creative works spanning 24 years in the industry."
                keywords="advertising portfolio, creative works, brand campaigns, successful ads, case studies"
                canonical="/ourworks"
              />
              <OurWorks />
            </>
          } />

          {/* BRANDING PAGE */}
          <Route path="/branding" element={
            <>
              <SEO 
                title="Branding Services - Build Your Identity"
                description="Professional branding services including logo design, style guides, brand strategy, and comprehensive identity development for businesses."
                keywords="branding services, logo design, brand identity, style guide, corporate branding"
                canonical="/branding"
              />
              <Branding />
            </>
          } />

          {/* 404 PAGE */}
          <Route path="*" element={
            <>
              <SEO 
                title="Page Not Found - 404"
                description="The page you're looking for doesn't exist. Return to Chandraa Ads homepage for advertising solutions and services."
              />
              <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
                  <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
                  <a 
                    href="/" 
                    className="bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition-colors"
                  >
                    Go Back Home
                  </a>
                </div>
              </div>
            </>
          } />
        </Routes>
      </main>

      <Footer />
    </HelmetProvider>
  );
};

export default App;
