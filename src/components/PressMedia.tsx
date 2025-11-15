import React from "react";
import { MediaPartner } from "../types";

// IMPORT IMAGES CORRECTLY
import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import logo3 from "../assets/logo3.svg";
import logo4 from "../assets/logo4.svg";
import logo5 from "../assets/logo5.svg";
import logo6 from "../assets/logo6.svg";
import logo7 from "../assets/logo7.svg";
import logo8 from "../assets/logo8.svg";
import logo9 from "../assets/logo9.svg";

const PressMedia: React.FC = () => {
  const mediaPartners: MediaPartner[] = [
    { id: 1, logo: logo1, alt: "Vigadan" },
    { id: 2, logo: logo2, alt: "The Indian Express" },
    { id: 3, logo: logo3, alt: "Thina Thanthi" },
    { id: 4, logo: logo4, alt: "Thina Malar" },
    { id: 5, logo: logo5, alt: "Thinakran" },
    { id: 6, logo: logo6, alt: "Thinamani" },
    { id: 7, logo: logo7, alt: "Kumudam" },
    { id: 8, logo: logo8, alt: "The Hindu" },
    { id: 9, logo: logo9, alt: "Deccan Chronicle" },
  ];

  return (
    <section className="py-24 px-4 bg-white lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="section-title text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Press <span className="text-primary">Media</span>
          </h2>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            We partner with leading publications to amplify your brand's presence across print media
          </p>
        </div>

        <div className="logos-container flex flex-wrap justify-center gap-10 mt-16">
          {mediaPartners.map((partner) => (
            <div
              key={partner.id}
              className="logo-item bg-white rounded-xl p-6 flex items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-xl h-32 w-48"
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                className="max-h-16 grayscale transition-all duration-300 hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        <p className="press-quote text-center text-xl italic text-primary font-medium max-w-2xl mx-auto mt-16 py-5">
          Partnering with the finest in journalism to deliver your message to the right audience
        </p>
      </div>
    </section>
  );
};

export default PressMedia;
