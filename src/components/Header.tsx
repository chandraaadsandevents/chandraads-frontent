import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  Menu,
  X,
  ChevronDown,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";

import logo from "../assets/Chandraa ads logo.svg";

const services = [
  { name: "Newspaper Ads", path: "/newspaperads" },
  { name: "Magazine Ads", path: "/magazineads" },
  { name: "Digital Marketing", path: "/digital-marketing" },
  { name: "TV & Radio Ads", path: "/tv-radio-ads" },
  { name: "Media", path: "/services" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  
  { name: "Portfolio", path: "/ourworks" },
  { name: "Contact", path: "/contact" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-md"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      {/* 🔹 Top Info Bar */}
      <div className="hidden md:block border-white-100">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-2 text-sm text-gray-600">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2">
              <Mail size={14} /> hello@chandraads.com
            </span>
            <span className="flex items-center gap-2">
              <Phone size={14} /> +91 98765 43210
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Facebook className="hover:text-[#C1272D] cursor-pointer" size={16} />
            <Instagram className="hover:text-[#C1272D] cursor-pointer" size={16} />
            <Twitter className="hover:text-[#C1272D] cursor-pointer" size={16} />
            <Youtube className="hover:text-[#C1272D] cursor-pointer" size={16} />
          </div>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Chandra Ads" className="h-12" />
            <span className="hidden md:block text-sm text-gray-600">
              Advertise in All Newspapers & Magazines
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <NavLink
                key={idx}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition ${
                    isActive ? "text-[#C1272D]" : "text-gray-700 hover:text-[#C1272D]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Services Dropdown after Contact */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 font-medium hover:text-[#C1272D] transition border-transparent">
                Our Services
                <ChevronDown
                  size={16}
                  className={`transition-transform ${servicesOpen ? "rotate-180" : ""} `}
                />
              </button>

              <div
                className={`absolute top-full mt-3 left-1/2 -translate-x-1/2 w-64 bg-white rounded-xl shadow-xl border-gray-100 overflow-hidden transition-all duration-300 border-transparent ${
                  servicesOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="block px-5 py-3 text-gray-700 hover:bg-red-50 hover:text-[#C1272D] transition"
                    onClick={() => setServicesOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/quote"
              className="bg-[#C1272D] text-white px-6 py-3 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-all"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 🔹 Mobile Dropdown */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t px-4 py-6 space-y-3 pb-8"> {/* added pb-8 for bottom space */}

          {navLinks.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block font-medium ${
                  isActive ? "text-[#C1272D]" : "text-gray-700 hover:text-[#C1272D]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Move Our Services to the end */}
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="flex items-center justify-between w-full py-2 font-medium text-gray-700"
          >
            Our Services <ChevronDown size={16} />
          </button>

          {servicesOpen && (
            <div className="pl-4 border-l border-gray-200 space-y-2">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  onClick={() => setMobileOpen(false)}
                  className="block text-gray-600 py-1 hover:text-[#C1272D]"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          )}

          <Link
            to="/quote"
            className="block bg-[#C1272D] text-white text-center py-3 rounded-md mt-4"
            onClick={() => setMobileOpen(false)}
          >
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
