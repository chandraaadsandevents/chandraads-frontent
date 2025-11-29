import React from "react";
import { MediaPartner } from "../types";

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
    <section className="py-10 bg-white w-full">
      {/* Section Title */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl font-bold mb-4">
          Press <span className="text-primary">Media</span>
        </h2>
        <p className="text-lg text-black max-w-2xl mx-auto">
          We partner with leading publications to amplify your brand's presence across print media
        </p>
      </div>

      {/* Full-Width Auto-Scrolling Logos */}
      <div className="overflow-hidden w-full">
        <div className="flex animate-scroll gap-8 w-max">
          {mediaPartners.concat(mediaPartners).map((partner, idx) => (
            <div
              key={idx}
              className="rounded-full  p-6 flex items-center justify-center w-48 h-48 shadow-lg bg-white flex-shrink-0 mb-2"
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                className="max-h-16"
              />
            </div>
          ))}
        </div>
      </div>


      {/* Tailwind CSS Animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            width: max-content;
            animation: scroll 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default PressMedia;
