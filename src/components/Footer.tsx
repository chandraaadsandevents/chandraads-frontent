import React from 'react';
import logo from '../assets/Chandraa ads logo.svg';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: 'fab fa-facebook', href: '#' },
    { icon: 'fab fa-twitter', href: '#' },
    { icon: 'fab fa-instagram', href: '#' },
    { icon: 'fab fa-linkedin', href: '#' },
    { icon: 'fab fa-youtube', href: '#' },
  ];

  const quickLinks = [
   { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/ourworks", label: "Our Works" },
    { href: "/branding", label: "Branding" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-light pt-16 pb-8">
      <div className="footer-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-4 lg:px-8">
        {/* Company Info Column */}
        <div className="company-info">
          <img 
            src={logo}
            alt="Chandraaads Logo" 
            className="h-12 mb-5"
          />
          <p className="company-description text-gray-300 mb-6">
            We are a full-service advertising agency with 24 years of experience in the industry. 
            We provide a wide range of services to help you promote your brand across various media.
          </p>

          {/* Social Media Links */}
          <div className="social-media">
            <h4 className="text-xl mb-4">Follow Us</h4>
            <div className="social-links flex gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-primary hover:-translate-y-1"
                >
                  <i className={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="footer-nav">
          <h4 className="text-xl mb-5">Quick Links</h4>
          <ul className="footer-links space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href}
                  className="text-gray-300 transition-all duration-300 hover:text-light hover:pl-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Map Column */}
        <div className="footer-contact">
          <h4 className="text-xl mb-5">Contact Info</h4>
          <div className="contact-details space-y-3 text-gray-300">
            <p>
              Email:{' '}
              <a 
                href="mailto:chandraaads1@gmail.com"
                className="text-light transition-colors duration-300 hover:text-primary"
              >
                chandraaads1@gmail.com
              </a>
            </p>
            <p>
              Phone:{' '}
              <a 
                href="tel:+91-9994272027"
                className="text-light transition-colors duration-300 hover:text-primary"
              >
                +91-9994272027
              </a>
            </p>
            <p>
              (office)Phone:{' '}
              <a 
                href="tel:04224500414"
                className="text-light transition-colors duration-300 hover:text-primary"
              >
                04224500414
              </a>
            </p>
            <p>
              Address: 1st Street, Sivananda Colony, Tatabad, Coimbatore, Tamil Nadu 641012
            </p>
          </div>

          {/* Location Map */}
          <div className="location-map h-48 rounded-xl overflow-hidden mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31275.582128451574!2d76.9587443!3d11.0233938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858f9f5792dc3%3A0x28fc74dad174d92a!2sOld%20No%3A20%2C%20New%20No%3A11%2C%201st%20Street%2C%20Sivananda%20Colony%2C%20Tatabad%2C%20Coimbatore%2C%20Tamil%20Nadu%20641012!5e0!3m2!1sen!2sin!4v1617573982866!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center pt-8 mt-8 border-t border-gray-700 text-gray-400 text-sm">
        <p>&copy; 2025 Chandraaads. All Rights Reserved.</p>
      </div>

      <div className="footer-copyright text-center pt-8 mt-8 border-t border-gray-700 text-gray-400 text-sm">
  <a 
    href="https://mediaweb6.com" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-white transition-colors duration-300"
  >
    Powered by Mediaweb6
  </a>
</div>
    </footer>
  );
};

export default Footer;