import React, { useState } from "react";
import logo from "../assets/Chandraa ads logo.svg"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/ourworks", label: "Our Works" },
    { href: "/branding", label: "Branding" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 shadow-md bg-gradient-to-b from-[#fff] to-[#faf6ee]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 lg:px-6">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="Chandraa Ads Logo"
            className="h-12"
          />
        </a>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`w-7 h-1 bg-primary rounded transition-all ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-7 h-1 bg-primary rounded transition-all ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-7 h-1 bg-primary rounded transition-all ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Nav Links */}
        <ul
          className={`fixed lg:static top-0 right-0 bg-white h-screen lg:h-auto w-72 lg:w-auto shadow-2xl lg:shadow-none 
            p-24 lg:p-0 flex flex-col lg:flex-row gap-8 lg:gap-10 transition-all duration-300 
            ${isMenuOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-800 font-medium tracking-wide text-lg lg:text-base relative group"
              >
                {link.label}

                {/* underline */}
                <span
                  className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
