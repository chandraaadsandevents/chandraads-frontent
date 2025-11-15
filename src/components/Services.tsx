import s1 from "../assets/service1.png";
import s2 from "../assets/service2.png";
import s3 from "../assets/service3.png";
import s4 from "../assets/service4.png";

const ViewAllServices = () => {
  const services = [
    {
      id: 1,
      title: "TV Advertising",
      desc: "Reach millions of viewers through strategic prime-time placements and targeted channel selection.",
      image: s1,
      features: [
        "Prime-time slots",
        "Regional channel coverage",
        "Campaign analytics",
        "Creative development",
        "Target audience segmentation",
        "ROI tracking",
      ],
    },
    {
      id: 2,
      title: "Press Media",
      desc: "Dominate print media with placements in leading newspapers and popular magazines.",
      image: s2,
      features: [
        "National & regional newspapers",
        "Magazine features",
        "Special edition placements",
        "Press release distribution",
        "Media buying strategy",
        "Circulation analysis",
      ],
    },
    {
      id: 3,
      title: "FM Radio",
      desc: "Connect with audiences through engaging radio spots and sponsored programs.",
      image: s3,
      features: [
        "Prime-time jingles",
        "Radio talk show integrations",
        "Traffic hour spots",
        "Contest sponsorships",
        "Local station partnerships",
        "Voice talent selection",
      ],
    },
    {
      id: 4,
      title: "Outdoor Advertising",
      desc: "Maximize visibility with strategic outdoor placements across high-traffic locations.",
      image: s4,
      features: [
        "Billboards & hoardings",
        "Transit advertising",
        "Digital outdoor displays",
        "Airport and mall advertising",
        "Street furniture branding",
        "Location-based targeting",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 lg:px-10 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">

        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div
              key={service.id}
              className={`bg-white rounded-3xl shadow-lg p-8 md:p-12 flex flex-col ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-10 md:gap-16 transition-all duration-300 hover:shadow-xl`}
            >
              {/* IMAGE */}
              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* TEXT CONTENT */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-gray-900 relative inline-block">
                  {service.title}
                  <span className="absolute bottom-0 left-0 w-14 h-[3px] bg-[#b90a0a] rounded-full -mb-1"></span>
                </h2>

                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  {service.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, featureIndex) => (
                    <p 
                      key={featureIndex} 
                      className="text-gray-700 flex items-start gap-3 group hover:text-gray-900 transition-colors duration-200"
                    >
                      <span className="text-[#b90a0a] font-bold text-xl mt-0.5 flex-shrink-0">✓</span>
                      <span className="leading-relaxed">{feature}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

      </div>

      {/* CTA BUTTON */}
      <div className="flex justify-center mt-16">
        <a
          href="/contact"
          className="px-10 py-4 bg-[#b90a0a] text-white font-semibold text-lg rounded-full shadow-md hover:bg-[#8a0606] transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
        >
          Get Started Today
        </a>
      </div>
    </section>
  );
};

export default ViewAllServices;