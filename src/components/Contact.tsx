import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Newspaper, Radio, Brush, Megaphone, Tv } from 'lucide-react';
import { ContactCard, ContactFormData, FloatingElement } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    file: null,
    honeypot: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const contactCards: ContactCard[] = [
    {
      id: 1,
      icon: 'map',
      title: 'Our Location',
      description: '1st Street, Sivananda Colony, Tatabad, Coimbatore, Tamil Nadu 641012',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31275.582128451574!2d76.9587443!3d11.0233938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858f9f5792dc3%3A0x28fc74dad174d92a!2sOld%20No%3A20%2C%20New%20No%3A11%2C%201st%20Street%2C%20Sivananda%20Colony%2C%20Tatabad%2C%20Coimbatore%2C%20Tamil%20Nadu%20641012!5e0!3m2!1sen!2sin!4v1617573982866!5m2!1sen!2sin',
      linkType: 'external'
    },
    {
      id: 2,
      icon: 'phone',
      title: 'Call Us',
      description: '+91-9994272027\nMon-Fri: 9:30AM - 7PM',
      link: 'tel:+91-9994272027',
      linkType: 'tel'
    },
    {
      id: 3,
      icon: 'email',
      title: 'Email Us',
      description: 'chandraaads1@gmail.com\nResponse within 24hrs',
      link: 'mailto:chandraaads1@gmail.com',
      linkType: 'mailto'
    }
  ];

  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    // Initialize floating elements
    const elements: FloatingElement[] = [];
    const elementTypes = [
      { icon: 'newspaper', class: 'floating-newspaper' },
      { icon: 'radio', class: 'floating-radio' },
      { icon: 'brush', class: 'floating-brush' },
      { icon: 'megaphone', class: 'floating-megaphone' },
      { icon: 'tv', class: 'floating-tv' }
    ];

    elementTypes.forEach((type, typeIndex) => {
      for (let i = 0; i < 2; i++) {
        elements.push({
          id: typeIndex * 2 + i,
          icon: type.icon,
          class: type.class,
          left: `${Math.random() * 80 + 10}%`,
          animationDelay: `-${Math.random() * 15}s`,
          fontSize: `${20 + Math.random() * 30}px`
        });
      }
    });

    setFloatingElements(elements);
  }, []);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'map':
        return <MapPin className="w-8 h-8 text-red-700 mb-4" />;
      case 'phone':
        return <Phone className="w-8 h-8 text-red-700 mb-4" />;
      case 'email':
        return <Mail className="w-8 h-8 text-red-700 mb-4" />;
      case 'newspaper':
        return <Newspaper className="w-full h-full text-red-700" />;
      case 'radio':
        return <Radio className="w-full h-full text-yellow-500" />;
      case 'brush':
        return <Brush className="w-full h-full text-red-700" />;
      case 'megaphone':
        return <Megaphone className="w-full h-full text-yellow-500" />;
      case 'tv':
        return <Tv className="w-full h-full text-red-700" />;
      default:
        return null;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      file
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatusMessage("Opening your email app…");

    let fileAttachment = "";

    if (formData.file) {
      const fileType = formData.file.type;

      if (fileType.startsWith("image/")) {
        // Convert images to Base64
        const reader = new FileReader();
        reader.readAsDataURL(formData.file);

        reader.onload = () => {
          fileAttachment = `\nAttached Image (Base64):\n${reader.result}`;
          sendMail(fileAttachment);
        };

        reader.onerror = () => {
          console.error("File read error:", reader.error);
          setStatusMessage("Error reading the file.");
          setIsSubmitting(false);
        };
        return; // Wait for FileReader
      } else {
        // For PDF, Word, Excel or others
        fileAttachment = `\nAttached File: ${formData.file.name}\nPlease attach manually before sending.`;
      }
    }

    sendMail(fileAttachment);
  };

  const sendMail = (fileAttachment: string) => {
    const subject = `New Contact Form Submission - ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}

Message:
${formData.message}

${fileAttachment}

Sent from Chandra Ads Website
  `.trim();

    window.location.href = `mailto:chandraaads1@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setStatusMessage("Email composer opened! Please send your email.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      file: null,
      honeypot: ""
    });
    setIsSubmitting(false);
  };



  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className={`absolute floating-element ${element.class}`}
            style={{
              left: element.left,
              animationDelay: element.animationDelay,
              fontSize: element.fontSize
            }}
          >
            {getIconComponent(element.icon)}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <main className="contact-hero relative z-10 pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Contact Cards Section */}
          <div className="contact-cards grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            {contactCards.map((card) => (
              <div
                key={card.id}
                className="contact-card group bg-white rounded-2xl shadow-xl p-8 text-center transform transition-all duration-500 ease-out hover:-translate-y-4 hover:shadow-2xl cursor-pointer border border-gray-100"
              >
                <a
                  href={card.link}
                  target={card.linkType === 'external' ? '_blank' : '_self'}
                  rel={card.linkType === 'external' ? 'noopener noreferrer' : ''}
                  className="block no-underline text-inherit"
                >
                  <div className="flex justify-center mb-6">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {getIconComponent(card.icon)}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {card.description}
                  </p>
                </a>
              </div>
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-200">
            <form
              ref={formRef}
              className="contact-form"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name / Business Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
                    placeholder="Enter your name or business name"
                  />
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
                    placeholder="+91 99999 99999"
                  />
                </div>

                {/* Service */}
                <div className="form-group">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    What do you need help with?*
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
                  >
                    <option value="">Select an option</option>
                    <option value="branding">Branding & Identity</option>
                    <option value="advertising">Advertising Campaign</option>
                    <option value="print">Print Media</option>
                    <option value="digital">Digital Marketing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="form-group mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              {/* File Attachment */}
              <div className="form-group mb-6">
                <label htmlFor="attachment" className="block text-sm font-medium text-gray-700 mb-2">
                  Attach File (optional)
                </label>
                <input
                  type="file"
                  id="attachment"
                  name="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.jpg,.png"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
                />
                <small className="text-gray-500 text-sm mt-1 block">
                  Max file size: 5MB (PDF, DOC, JPG, PNG)
                </small>
              </div>

              {/* Honeypot Field */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleInputChange}
                style={{ display: 'none' }}
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-700 text-white py-4 px-8 rounded-lg font-bold uppercase tracking-wide hover:bg-red-800 disabled:bg-gray-400 disabled:cursor-not-allowed transform transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Message */}
              {statusMessage && (
                <div
                  id="formStatus"
                  className={`status-message mt-4 p-4 rounded-lg text-center ${statusMessage.includes('successfully')
                    ? 'bg-green-100 text-green-700 border border-green-200'
                    : statusMessage.includes('Error') || statusMessage.includes('error')
                      ? 'bg-red-100 text-red-700 border border-red-200'
                      : 'bg-blue-100 text-blue-700 border border-blue-200'
                    }`}
                >
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;