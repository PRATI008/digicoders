import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../Components/CSS/BatchesSection.css";
import { FaCalendarDays, FaClock, FaArrowRight } from "react-icons/fa6";

const LOCAL_BATCHES_DATA = [
  {
    id: 1,
    title: "React JS Advanced Frontend",
    category: "upcoming",
    badgeText: "UPCOMING",
    badgeColor: "bg-[#f59e0b]", // Amber / Orange
    startDate: "20 Nov 2026",
    duration: "2 Months",
    image: "/images/digicoders-bach-1.jpeg",
    url: "/registration",
  },
  {
    id: 2,
    title: "Java Full Stack (Spring Boot)",
    category: "ongoing",
    badgeText: "ONGOING",
    badgeColor: "bg-[#10b981]", // Green
    startDate: "10 Oct 2026",
    duration: "4 Months",
    image: "/images/lucknow-head-office-digicoders.jpg",
    url: "/registration",
  },
  {
    id: 3,
    title: "Flutter & Mobile App Batch",
    category: "upcoming",
    badgeText: "UPCOMING",
    badgeColor: "bg-[#f59e0b]",
    startDate: "25 Nov 2026",
    duration: "3 Months",
    image: "/images/SyllabusGallery/15august.jpeg",
    url: "/registration",
  },
  {
    id: 4,
    title: "MERN Stack Web Development",
    category: "upcoming",
    badgeText: "UPCOMING",
    badgeColor: "bg-[#f59e0b]",
    startDate: "01 Dec 2026",
    duration: "6 Months",
    image: "/hero.jpeg",
    url: "/registration",
  },
  {
    id: 5,
    title: "Python & Data Science Batch",
    category: "ongoing",
    badgeText: "ONGOING",
    badgeColor: "bg-[#10b981]",
    startDate: "01 Nov 2026",
    duration: "3 Months",
    image: "/images/back.jpg",
    url: "/registration",
  },
  {
    id: 6,
    title: "PHP & Laravel Framework Batch",
    category: "upcoming",
    badgeText: "UPCOMING",
    badgeColor: "bg-[#f59e0b]",
    startDate: "15 Dec 2026",
    duration: "3 Months",
    image: "/images/SyllabusGallery/digicoder.jpeg",
    url: "/registration",
  },
];

const PROMOTIONAL_POSTERS = [
  {
    title: "MERN Stack Live Project Training 2026",
    tag: "WINTER TRAINING 2026",
    duration: "06 MONTHS & 03 MONTHS",
    techs: ["React", "Node.js", "Express", "MongoDB"],
    theme: "from-[#2b1807] via-[#452408] to-[#1a0e04]",
    accent: "border-amber-500",
    headlineColor: "text-amber-400",
    eligibility: "DIPLOMA / B.TECH / BCA / MCA",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
    phone: "9140967607, 6394296293",
  },
  {
    title: "Winter Training 2026",
    tag: "100% PRACTICAL TRAINING",
    duration: "06 WEEKS & 03 MONTHS",
    techs: ["PHP", "Python", "Java", "ASP.NET", "Flutter"],
    theme: "from-[#08291f] via-[#0d3b2d] to-[#041712]",
    accent: "border-emerald-500",
    headlineColor: "text-emerald-400",
    eligibility: "DIPLOMA / B.TECH / MCA / BCA / MSC (CS/IT)",
    photo: "/images/digicoders-bach-1.jpeg",
    phone: "9140967607, 6394296293",
  },
  {
    title: "Winter Training 2026 (6 Months)",
    tag: "100% JOB ORIENTED TRAINING",
    duration: "06 MONTHS",
    techs: ["Website Development", "App Development", "Digital Marketing", "Data Analytics"],
    theme: "from-[#2f0e26] via-[#451438] to-[#1c0817]",
    accent: "border-purple-500",
    headlineColor: "text-amber-400",
    eligibility: "DIPLOMA / B.TECH / MCA / BCA / MSC (CS/IT)",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80",
    phone: "9140967607, 6394296293",
  },
  {
    title: "Learn Data Analytics & Python",
    tag: "FROM RAW DATA TO INSIGHTS",
    duration: "06 WEEKS / 3 MONTHS",
    techs: ["Python", "Pandas", "NumPy", "PowerBI", "SQL"],
    theme: "from-[#07253b] via-[#0c3756] to-[#041624]",
    accent: "border-sky-500",
    headlineColor: "text-sky-400",
    eligibility: "B.TECH / BCA / MCA / BSC (IT)",
    photo: "/images/lucknow-head-office-digicoders.jpg",
    phone: "9140967607, 6394296293",
  },
];

const BatchesSlider = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredBatches = LOCAL_BATCHES_DATA.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full font-sans border-b border-gray-100">
      
      {/* ================= SECTION TITLE ================= */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#000034] tracking-tight">
          Upcoming & Ongoing Training Batches
        </h2>
        <div className="w-16 h-1 bg-orange-500 mx-auto mt-2 rounded"></div>
      </div>

      {/* ================= EXACT 3 PILL FILTER TABS ================= */}
      <div className="flex justify-center items-center gap-3 sm:gap-4 mb-10 sm:mb-12">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-6 sm:px-8 py-2 rounded-full font-black text-xs sm:text-sm tracking-wide transition-all duration-300 cursor-pointer ${
            activeTab === "all"
              ? "bg-[#0052cc] text-white shadow-lg shadow-blue-500/30 border-2 border-[#0052cc]"
              : "bg-white text-[#0052cc] border-2 border-[#0052cc] hover:bg-blue-50"
          }`}
        >
          All Batches
        </button>
        <button
          onClick={() => setActiveTab("upcoming")}
          className={`px-6 sm:px-8 py-2 rounded-full font-black text-xs sm:text-sm tracking-wide transition-all duration-300 cursor-pointer ${
            activeTab === "upcoming"
              ? "bg-[#0052cc] text-white shadow-lg shadow-blue-500/30 border-2 border-[#0052cc]"
              : "bg-white text-[#0052cc] border-2 border-[#0052cc] hover:bg-blue-50"
          }`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setActiveTab("ongoing")}
          className={`px-6 sm:px-8 py-2 rounded-full font-black text-xs sm:text-sm tracking-wide transition-all duration-300 cursor-pointer ${
            activeTab === "ongoing"
              ? "bg-[#0052cc] text-white shadow-lg shadow-blue-500/30 border-2 border-[#0052cc]"
              : "bg-white text-[#0052cc] border-2 border-[#0052cc] hover:bg-blue-50"
          }`}
        >
          Ongoing
        </button>
      </div>

      {/* ================= 1. CAROUSEL OF BATCH CARDS (Auto-sliding, Arrows Removed) ================= */}
      <div className="w-full relative mb-16">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={false}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 28 },
          }}
          className="mySwiper !pb-14"
        >
          {filteredBatches.map((batch) => (
            <SwiperSlide key={batch.id}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full transform hover:-translate-y-1">
                {/* Image Container with Top-Right Badge */}
                <div className="relative h-56 sm:h-60 overflow-hidden bg-gray-900">
                  {/* Badge: UPCOMING (Yellow/Orange) or ONGOING (Green) */}
                  <span
                    className={`absolute top-4 right-4 z-20 px-3.5 py-1 rounded-md text-[11px] font-black uppercase text-white shadow-lg tracking-wider ${batch.badgeColor}`}
                  >
                    {batch.badgeText}
                  </span>
                  
                  <img
                    src={batch.image}
                    alt={batch.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Batch Details */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-extrabold text-lg sm:text-xl text-gray-900 mb-3 leading-tight">
                      {batch.title}
                    </h3>
                    
                    {/* Starts Date with Calendar Icon */}
                    <p className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-2">
                      <FaCalendarDays className="text-[#ea580c] shrink-0 text-sm" />
                      <span>
                        <strong className="text-gray-800">Starts:</strong> {batch.startDate}
                      </span>
                    </p>
                    
                    {/* Duration with Clock Icon */}
                    <p className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-6">
                      <FaClock className="text-[#0284c7] shrink-0 text-sm" />
                      <span>
                        <strong className="text-gray-800">Duration:</strong> {batch.duration}
                      </span>
                    </p>
                  </div>

                  {/* Register Now Button (Royal Blue full width with Arrow) */}
                  <Link
                    to={batch.url}
                    className="w-full bg-[#0052cc] hover:bg-[#003d99] text-white font-extrabold py-3 px-4 rounded-xl text-xs sm:text-sm transition duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    Register Now <FaArrowRight />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ================= 2. PROMOTIONAL POSTERS TRACK (Exact Match to Image 2) ================= */}
      <div className="pt-4 border-t border-gray-100">
        <div className="text-center mb-8">
          <span className="text-[#ea580c] font-black uppercase text-xs tracking-widest bg-orange-50 px-3.5 py-1 rounded-full border border-orange-200/60 inline-block mb-2">
            Admissions Open 2026
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-[#000034] tracking-tight">
            Winter & Industrial Training Brochures
          </h3>
        </div>

        {/* Continuous Auto-Sliding Marquee of Posters */}
        <div className="relative w-full overflow-hidden py-2">
          {/* Subtle Left & Right Edge Faders */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="w-full overflow-hidden flex">
            <div
              className="flex items-center gap-6 sm:gap-8 flex-nowrap"
              style={{
                width: "max-content",
                animation: "posters-slide 32s linear infinite",
              }}
            >
              {/* Loop 1: Posters */}
              {PROMOTIONAL_POSTERS.map((poster, idx) => (
                <div
                  key={`poster-1-${idx}`}
                  className="w-[300px] sm:w-[340px] md:w-[370px] h-[400px] sm:h-[440px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl border-2 border-gray-800 transition-all duration-300 transform hover:-translate-y-1.5 shrink-0 relative flex flex-col justify-between p-5 sm:p-6 text-white group"
                >
                  {/* Poster Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${poster.theme} z-0`} />
                  
                  {/* Background Classroom Texture */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-screen pointer-events-none"
                    style={{ backgroundImage: `url('/images/back.jpg')` }}
                  />

                  {/* Header: Digi{Coders} + Tag */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between border-b border-white/20 pb-2 mb-3">
                      <span className="text-sm font-black text-white tracking-tight">
                        Digi<span className="text-orange-500">&#123;</span>Coders
                        <span className="text-orange-500">&#125;</span>
                      </span>
                      <span className="text-[9px] font-black uppercase text-amber-400 tracking-wider">
                        {poster.tag}
                      </span>
                    </div>

                    <h4 className={`text-2xl sm:text-3xl font-black uppercase tracking-tight leading-none ${poster.headlineColor}`}>
                      {poster.title}
                    </h4>

                    {/* Course Duration Box */}
                    <div className="mt-3 bg-white/10 backdrop-blur-md rounded-lg p-2.5 border border-white/20 inline-block">
                      <span className="text-[9px] font-extrabold uppercase text-gray-300 block">
                        COURSE DURATION
                      </span>
                      <span className="text-sm font-black text-white block">
                        {poster.duration}
                      </span>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="relative z-10 my-auto py-2">
                    <div className="flex flex-wrap gap-1.5">
                      {poster.techs.map((t, i) => (
                        <span
                          key={i}
                          className="bg-black/40 text-gray-200 border border-white/20 text-[10px] font-bold px-2.5 py-0.5 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <p className="text-[10px] text-gray-300 font-bold mt-2">
                      Eligibility: {poster.eligibility}
                    </p>
                  </div>

                  {/* Bottom Strip: Phone & thedigicoders.com */}
                  <div className="relative z-10 pt-3 border-t border-white/20 bg-black/40 -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-3 px-5 sm:px-6 flex items-center justify-between text-[11px] font-bold">
                    <span className="text-amber-400">📞 {poster.phone}</span>
                    <span className="text-gray-300">thedigicoders.com</span>
                  </div>
                </div>
              ))}

              {/* Loop 2: Duplicate for Seamless Continuous Loop */}
              {PROMOTIONAL_POSTERS.map((poster, idx) => (
                <div
                  key={`poster-2-${idx}`}
                  className="w-[300px] sm:w-[340px] md:w-[370px] h-[400px] sm:h-[440px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl border-2 border-gray-800 transition-all duration-300 transform hover:-translate-y-1.5 shrink-0 relative flex flex-col justify-between p-5 sm:p-6 text-white group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${poster.theme} z-0`} />
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-screen pointer-events-none"
                    style={{ backgroundImage: `url('/images/back.jpg')` }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between border-b border-white/20 pb-2 mb-3">
                      <span className="text-sm font-black text-white tracking-tight">
                        Digi<span className="text-orange-500">&#123;</span>Coders
                        <span className="text-orange-500">&#125;</span>
                      </span>
                      <span className="text-[9px] font-black uppercase text-amber-400 tracking-wider">
                        {poster.tag}
                      </span>
                    </div>

                    <h4 className={`text-2xl sm:text-3xl font-black uppercase tracking-tight leading-none ${poster.headlineColor}`}>
                      {poster.title}
                    </h4>

                    <div className="mt-3 bg-white/10 backdrop-blur-md rounded-lg p-2.5 border border-white/20 inline-block">
                      <span className="text-[9px] font-extrabold uppercase text-gray-300 block">
                        COURSE DURATION
                      </span>
                      <span className="text-sm font-black text-white block">
                        {poster.duration}
                      </span>
                    </div>
                  </div>

                  <div className="relative z-10 my-auto py-2">
                    <div className="flex flex-wrap gap-1.5">
                      {poster.techs.map((t, i) => (
                        <span
                          key={i}
                          className="bg-black/40 text-gray-200 border border-white/20 text-[10px] font-bold px-2.5 py-0.5 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <p className="text-[10px] text-gray-300 font-bold mt-2">
                      Eligibility: {poster.eligibility}
                    </p>
                  </div>

                  <div className="relative z-10 pt-3 border-t border-white/20 bg-black/40 -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-3 px-5 sm:px-6 flex items-center justify-between text-[11px] font-bold">
                    <span className="text-amber-400">📞 {poster.phone}</span>
                    <span className="text-gray-300">thedigicoders.com</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @keyframes posters-slide {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </div>
      </div>

    </div>
  );
};

export default BatchesSlider;
