import React from "react";
import {
  Newspaper,
  Tv,
  Radio,
  Film,
  PackageOpen,
  Paintbrush,
} from "lucide-react";

const items = [
  { label: "Press Media", icon: <Newspaper size={20} /> },
  { label: "Tv & Satellite Channels", icon: <Tv size={20} /> },
  { label: "FM & Radio", icon: <Radio size={20} /> },
  { label: "Theater Ads", icon: <Film size={20} /> },
  { label: "Product Launch", icon: <PackageOpen size={20} /> },
  { label: "Wall Painting", icon: <Paintbrush size={20} /> },
];

interface ScrollingTickerProps {
  className?: string;
}

const ScrollingTicker: React.FC<ScrollingTickerProps> = ({ className = "" }) => {
  const repeated = [...items, ...items];

  return (
    <section className={`w-full overflow-hidden bg-yellow-500 py-3 ${className}`}>
      <div className="relative">
        <div className="ticker-viewport max-w-full mx-auto">
          <div className="ticker-track flex items-center whitespace-nowrap will-change-transform animate-marquee">
            
            {repeated.map((row, idx) => (
              <div
                key={idx}
                className="ticker-item flex items-center gap-2 px-8 py-2 text-[#95001E] text-sm md:text-lg font-semibold tracking-wide"
                aria-hidden={idx >= items.length}
              >
                {row.icon}
                {row.label}
              </div>
            ))}

          </div>
        </div>
      </div>

      <style>{`
        .ticker-viewport { position: relative; overflow: hidden; }
        .ticker-track { display: inline-flex; }

        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 18s linear infinite;
        }

        @media (max-width: 640px) {
          .animate-marquee { animation-duration: 12s; }
        }
      `}</style>
    </section>
  );
};

export default ScrollingTicker;
