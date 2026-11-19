import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const MOU_PHOTOS = [
  {
    title: "UP Government Directorate Technical Education MOU",
    college: "Technical Education Directorate UP",
    image: "/hero.jpeg",
  },
  {
    title: "Govt. Polytechnic Academic Partnership Signing",
    college: "Govt. Polytechnic Lucknow",
    image: "/images/lucknow-head-office-digicoders.jpg",
  },
  {
    title: "MOU Signing with Engineering Faculty",
    college: "CSJM Govt. Polytechnic Ambedkar Nagar",
    image: "/images/digicoders-bach-1.jpeg",
  },
  {
    title: "Certificate & MOU Exchange Ceremony",
    college: "Govt. Girls Polytechnic Gorakhpur",
    image: "/images/SyllabusGallery/15august.jpeg",
  },
  {
    title: "Technical Collaboration & Lab Setup",
    college: "Buddha Institute of Technology (BIT GIDA)",
    image: "/images/SyllabusGallery/digicoder.jpeg",
  },
  {
    title: "Industry Training Partnership Agreement",
    college: "Govt. Polytechnic Saharanpur & Shamli",
    image: "/images/back.jpg",
  },
];

const MouSection = () => {
  return (
    <section className="py-14 sm:py-20 bg-white px-4 sm:px-6 md:px-8 border-t border-gray-100 overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* ================= TITLE: MOUs with Colleges ================= */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            MOUs with Colleges
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded"></div>
        </div>

        {/* ================= AUTO-SLIDING HORIZONTAL TRACK ================= */}
        <div className="relative w-full overflow-hidden py-2">
          {/* Left & Right Subtle Fade Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Marquee Scroller */}
          <div className="w-full overflow-hidden flex">
            <div
              className="flex items-center gap-5 sm:gap-6 flex-nowrap"
              style={{
                width: "max-content",
                animation: "mou-slide 32s linear infinite",
              }}
            >
              {/* Loop 1 */}
              {MOU_PHOTOS.map((item, idx) => (
                <div
                  key={`mou-1-${idx}`}
                  className="w-72 sm:w-80 md:w-96 h-60 sm:h-68 md:h-72 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border-2 border-gray-100 transition-all duration-300 transform hover:-translate-y-1.5 shrink-0 bg-gray-900 relative group"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Bottom Information Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                    <span className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-wider block">
                      Official Institutional Tie-up
                    </span>
                    <h3 className="font-extrabold text-sm sm:text-base leading-tight mt-0.5">
                      {item.college}
                    </h3>
                  </div>
                </div>
              ))}

              {/* Loop 2 (Duplicate for Seamless Endless Sliding) */}
              {MOU_PHOTOS.map((item, idx) => (
                <div
                  key={`mou-2-${idx}`}
                  className="w-72 sm:w-80 md:w-96 h-60 sm:h-68 md:h-72 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border-2 border-gray-100 transition-all duration-300 transform hover:-translate-y-1.5 shrink-0 bg-gray-900 relative group"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                    <span className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-wider block">
                      Official Institutional Tie-up
                    </span>
                    <h3 className="font-extrabold text-sm sm:text-base leading-tight mt-0.5">
                      {item.college}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Keyframe Style Scoped */}
          <style>{`
            @keyframes mou-slide {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </div>

        {/* ================= BUTTON: View All MOUs -> ================= */}
        <div className="text-center mt-10 sm:mt-12">
          <Link
            to="/about#mou"
            className="inline-flex items-center gap-2 border-2 border-sky-600 text-sky-700 hover:bg-sky-600 hover:text-white font-extrabold px-8 py-3 rounded-lg text-xs sm:text-sm transition shadow-sm"
          >
            View All MOUs <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MouSection;

