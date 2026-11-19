import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaChevronLeft,
  FaChevronRight,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaBuilding,
} from "react-icons/fa6";

const HERO_SLIDES = [
  {
    badge: "SUMMER TRAINING 2026",
    titleMain: "SUMMER",
    titleSub: "TRAINING",
    description:
      "45 Days & 60 Days Live Project Based Practical Industrial Summer Internship for B.Tech, Polytechnic Diploma, BCA & MCA Students.",
    featuredImage: "/images/digicoders-bach-1.jpeg",
    subPhotos: [
      "/images/lucknow-head-office-digicoders.jpg",
      "/images/SyllabusGallery/digicoder.jpeg",
      "/hero.jpeg",
    ],
    ctaLink: "/training/summer",
  },
  {
    badge: "6 MONTHS / 6 WEEKS",
    titleMain: "INDUSTRIAL",
    titleSub: "TRAINING",
    description:
      "Full Stack Development in MERN Stack, Python Django, Java Spring Boot, PHP Laravel & Flutter with Corporate Project Architecture.",
    featuredImage: "/hero.jpeg",
    subPhotos: [
      "/images/digicoders-bach-1.jpeg",
      "/images/back.jpg",
      "/images/SyllabusGallery/15august.jpeg",
    ],
    ctaLink: "/training/industrial",
  },
  {
    badge: "GOVT & NATS ALIGNED",
    titleMain: "APPRENTICE",
    titleSub: "PROGRAM",
    description:
      "Real Corporate Experience with stipend support, corporate software development workflow, and client delivery standards.",
    featuredImage: "/images/SyllabusGallery/digicoder.jpeg",
    subPhotos: [
      "/images/lucknow-head-office-digicoders.jpg",
      "/images/digicoders-bach-1.jpeg",
      "/images/back.jpg",
    ],
    ctaLink: "/training/apprenticeship",
  },
  {
    badge: "100% RECRUITMENT",
    titleMain: "CAMPUS",
    titleSub: "PLACEMENTS",
    description:
      "21,000+ Students Placed in Top MNCs & Startups. Direct Drives, HR Mock Interviews & Lifetime Green Card Support.",
    featuredImage: "/images/lucknow-head-office-digicoders.jpg",
    subPhotos: [
      "/images/SyllabusGallery/15august.jpeg",
      "/images/digicoders-bach-1.jpeg",
      "/hero.jpeg",
    ],
    ctaLink: "/placement",
  },
  {
    badge: "WINTER VOCATIONAL BOOTCAMP",
    titleMain: "WINTER",
    titleSub: "TRAINING",
    description:
      "Fast-track skill enhancement during winter break. Intensive coding drills, daily assessments and project reports.",
    featuredImage: "/images/SyllabusGallery/15august.jpeg",
    subPhotos: [
      "/images/back.jpg",
      "/images/lucknow-head-office-digicoders.jpg",
      "/images/SyllabusGallery/digicoder.jpeg",
    ],
    ctaLink: "/training/winter",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* ================= EXACT HERO BANNER SECTION ================= */}
      <div className="relative w-full min-h-[460px] sm:min-h-[500px] md:min-h-[540px] lg:min-h-[580px] bg-white flex items-center overflow-hidden">
        {/* Background Grayscale Student Crowd Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center filter grayscale opacity-25 select-none pointer-events-none"
          style={{ backgroundImage: `url('/images/back.jpg')` }}
        />

        {/* Diagonal Blue Geometric Accent Shape */}
        <div
          className="absolute -left-20 top-0 bottom-0 w-72 sm:w-96 md:w-[480px] bg-gradient-to-tr from-[#0040ff] via-[#1d4ed8] to-[#2563eb] opacity-90 transform -skew-x-12 z-0 hidden sm:block pointer-events-none"
          style={{ transformOrigin: "0 0" }}
        />

        {/* Content Container */}
        <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-8 md:px-12 py-6 md:py-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* LEFT COLUMN: Large Bold Typography */}
            <div className="lg:col-span-5 space-y-2 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-block bg-orange-600 text-white font-extrabold text-[11px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                {slide.badge}
              </div>

              {/* Main Headline */}
              <div className="relative inline-block lg:block pt-1">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#1e3a8a] leading-[0.9] uppercase drop-shadow-sm font-sans">
                  {slide.titleMain}
                </h1>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#1d4ed8] leading-[0.95] uppercase drop-shadow-sm font-sans mt-1">
                  {slide.titleSub}
                </h2>
              </div>

              <p className="text-gray-700 text-xs sm:text-sm md:text-base font-medium max-w-md pt-2 leading-relaxed mx-auto lg:mx-0">
                {slide.description}
              </p>

              <div className="pt-3 flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link
                  to="/registration"
                  className="bg-[#ea580c] hover:bg-orange-700 text-white font-bold px-6 py-2.5 rounded-lg text-xs sm:text-sm uppercase tracking-wider shadow-md transition transform hover:-translate-y-0.5"
                >
                  Register Now
                </Link>
                <Link
                  to={slide.ctaLink}
                  className="bg-[#1e3a8a] hover:bg-blue-950 text-white font-bold px-6 py-2.5 rounded-lg text-xs sm:text-sm uppercase tracking-wider shadow-md transition"
                >
                  Explore Details
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: Classroom & Students Real Photo Collage */}
            <div className="lg:col-span-7 relative flex items-center justify-center">
              {/* Main Large Classroom Photo (Students in class with teacher at blackboard) */}
              <div className="relative z-10 w-full max-w-[520px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src={slide.featuredImage}
                  alt={`${slide.titleMain} ${slide.titleSub} DigiCoders Classroom`}
                  className="w-full h-[260px] sm:h-[320px] md:h-[360px] object-cover transition-all duration-700"
                />
              </div>

              {/* Overlapping Floating Polaroid 1 (Top Left tilted) */}
              <div className="hidden sm:block absolute -top-4 -left-6 z-20 w-44 md:w-52 bg-white p-1.5 rounded-xl shadow-2xl border border-gray-200 transform -rotate-6 hover:rotate-0 transition duration-300">
                <img
                  src={slide.subPhotos[0]}
                  alt="Interactive Project Presentation"
                  className="w-full h-24 md:h-28 object-cover rounded-lg"
                />
              </div>

              {/* Overlapping Floating Polaroid 2 (Middle Left tilted) */}
              <div className="hidden md:block absolute top-36 -left-10 z-20 w-48 md:w-56 bg-white p-1.5 rounded-xl shadow-2xl border border-gray-200 transform rotate-3 hover:rotate-0 transition duration-300">
                <img
                  src={slide.subPhotos[1]}
                  alt="Lab Session at DigiCoders"
                  className="w-full h-24 md:h-28 object-cover rounded-lg"
                />
              </div>

              {/* Overlapping Floating Polaroid 3 (Bottom Right tilted) */}
              <div className="hidden sm:block absolute -bottom-4 right-0 z-20 w-48 md:w-56 bg-white p-1.5 rounded-xl shadow-2xl border border-gray-200 transform -rotate-3 hover:rotate-0 transition duration-300">
                <img
                  src={slide.subPhotos[2]}
                  alt="Smart AC Classroom Coding"
                  className="w-full h-24 md:h-28 object-cover rounded-lg"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Carousel Arrow Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition cursor-pointer"
          aria-label="Previous Banner"
        >
          <FaChevronLeft className="text-xs sm:text-sm" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition cursor-pointer"
          aria-label="Next Banner"
        >
          <FaChevronRight className="text-xs sm:text-sm" />
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === idx ? "w-6 bg-orange-600" : "w-2 bg-gray-400/60"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ================= EXACT BOTTOM TICKER ================= */}
      <div className="w-full bg-[#0284c7] text-white flex items-center h-10 sm:h-11 shadow-inner relative z-20 overflow-hidden font-sans">
        {/* Left Orange Angled Badge: "LATEST UPDATES" */}
        <div
          className="bg-[#ea580c] text-white font-extrabold px-4 sm:px-6 h-full flex items-center text-xs tracking-wider z-20 whitespace-nowrap shrink-0 shadow-md uppercase"
          style={{ clipPath: "polygon(0 0, 88% 0, 100% 100%, 0% 100%)", paddingRight: "1.75rem" }}
        >
          LATEST UPDATES
        </div>

        {/* Center Marquee Content */}
        <div className="overflow-hidden whitespace-nowrap w-full flex items-center px-2">
          <div className="animate-marquee inline-flex items-center gap-12 text-xs sm:text-[13px] font-semibold text-white tracking-wide">
            <span className="flex items-center gap-2">
              <FaCode className="text-yellow-300 shrink-0" />
              Full Stack Web Development, Python Django, PHP Laravel, Java Spring Boot & Android App Development Batches Starting Soon!
            </span>
            <span className="flex items-center gap-2">
              <FaBuilding className="text-yellow-300 shrink-0" />
              500+ Hiring Companies including MNCs, startups & top IT firms across India.
            </span>
            <span className="flex items-center gap-2">
              <FaBriefcase className="text-yellow-300 shrink-0" />
              Over 21,000+ Students Placed in IT Industry with highest package up to 12 LPA.
            </span>
            <span className="flex items-center gap-2">
              <FaGraduationCap className="text-yellow-300 shrink-0" />
              Summer Training 2026 Admissions Open in Lucknow (Aliganj), Kanpur & Gorakhpur Centers!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
