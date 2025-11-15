import React from "react";
import hero from "../assets/heroImage-I.png";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Background Image */}
      <img
        src={hero}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Text Block - EXACT placement */}
      <div
        className="
          absolute
          top-1/2
          right-[12%]
          -translate-y-1/2
          text-left
          z-20
        "
      >
        <h1
          className="
            font-sansita 
            text-6xl
            font-bold
            leading-tight
            text-black
          "
        >
          Promote <br />
          Your <br />
          <span className="text-primary">Brand</span> <br />
          With Us
        </h1>
      </div>

    </section>
  );
};
                                                    
export default Hero;
