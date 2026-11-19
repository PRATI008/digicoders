import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const RECRUITER_LOGOS = [
  {
    name: "Bimetrix Techsolutions",
    component: (
      <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl border border-gray-200 shadow-sm shrink-0">
        <div className="w-8 h-8 relative flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-sky-500 transform rotate-45 relative">
            <span className="absolute inset-1 bg-gray-900"></span>
          </div>
        </div>
        <div className="leading-tight text-left">
          <span className="text-sm font-black text-gray-900 tracking-tight block">bimetrix</span>
          <span className="text-[7.5px] uppercase tracking-widest text-sky-600 block">Techsolutions</span>
        </div>
      </div>
    ),
  },
  {
    name: "SAMDOX",
    component: (
      <div className="flex items-center bg-white px-5 py-3 rounded-xl border border-gray-200 shadow-sm shrink-0">
        <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0f2d59] font-sans">
          SAMD<span className="text-sky-500">O</span>X
        </span>
      </div>
    ),
  },
  {
    name: "OJD IT Consulting",
    component: (
      <div className="flex items-center gap-2 border border-gray-200 px-4 py-3 rounded-xl bg-white shadow-sm shrink-0">
        <div className="bg-[#0284c7] text-white font-black text-xs px-1.5 py-0.5 rounded">OJD</div>
        <div className="leading-tight text-left">
          <span className="text-[12px] font-bold text-gray-900 block">IT Consulting</span>
          <span className="text-[7.5px] text-gray-400 block uppercase">Private Limited</span>
        </div>
        <span className="text-[8px] bg-sky-100 text-sky-800 font-bold px-1.5 py-0.5 rounded ml-1">NO.1</span>
      </div>
    ),
  },
  {
    name: "IT INFO",
    component: (
      <div className="flex items-center gap-2.5 bg-white px-5 py-3 rounded-xl border border-gray-200 shadow-sm shrink-0">
        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-black text-xs">
          it
        </div>
        <div className="leading-none text-left">
          <span className="text-lg font-black tracking-tight text-black block">INFO</span>
          <span className="text-[7.5px] text-gray-500 block uppercase tracking-wider">We Grow Your Business</span>
        </div>
      </div>
    ),
  },
  {
    name: "All Core Solutions",
    component: (
      <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl border border-gray-200 shadow-sm shrink-0">
        <div className="w-7 h-7 bg-orange-600 rounded flex items-center justify-center text-white font-black text-xs">
          A
        </div>
        <div className="text-left leading-tight">
          <span className="text-sm font-black text-gray-900 block">ALL CORE</span>
          <span className="text-[8px] text-orange-600 block uppercase font-bold">Solutions</span>
        </div>
      </div>
    ),
  },
  {
    name: "Quartz Technologies",
    component: (
      <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl border border-gray-200 shadow-sm shrink-0">
        <div className="w-7 h-7 border-2 border-emerald-500 rounded-sm transform rotate-12 flex items-center justify-center font-bold text-xs text-emerald-600">
          Q
        </div>
        <span className="text-sm font-black text-gray-900 tracking-tight">QUARTZ Tech</span>
      </div>
    ),
  },
  {
    name: "Websofy Software",
    component: (
      <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl border border-gray-200 shadow-sm shrink-0">
        <span className="text-blue-600 font-black text-lg">&lt;W/&gt;</span>
        <div className="leading-tight text-left">
          <span className="text-xs font-black text-gray-900 block">Websofy</span>
          <span className="text-[7.5px] text-gray-400 block uppercase">Software Pvt. Ltd.</span>
        </div>
      </div>
    ),
  },
  {
    name: "ARJUN'S Enterprises",
    component: (
      <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl border border-gray-200 shadow-sm shrink-0">
        <div className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
          A
        </div>
        <span className="text-xs font-black text-gray-900 uppercase tracking-wide">
          ARJUN'S <span className="text-red-600 text-[10px]">Ent.</span>
        </span>
      </div>
    ),
  },
  {
    name: "EMK Enterprise",
    component: (
      <div className="flex items-center gap-1.5 bg-white px-4 py-3 rounded-xl border border-gray-200 shadow-sm shrink-0">
        <span className="text-sm font-black text-indigo-900 tracking-wider">EMK</span>
        <span className="text-[10px] bg-indigo-100 text-indigo-700 font-bold px-1.5 py-0.5 rounded">Enterprise</span>
      </div>
    ),
  },
];

const RecruitersSection = () => {
  return (
    <section className="py-14 sm:py-20 bg-gray-50/60 px-4 sm:px-6 md:px-8 border-t border-gray-100 overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* ================= LEFT SIDE: PREMIUM PLACEMENTS TITLE & TEXT ================= */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[#ea580c] font-black uppercase text-xs sm:text-[13px] tracking-widest block">
              PREMIUM PLACEMENTS
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-black text-[#000034] tracking-tight leading-[1.1]">
              Our Top Recruiters
            </h2>

            <p className="text-gray-600 text-xs sm:text-sm md:text-[14.5px] leading-relaxed max-w-md">
              We bridge the gap between talented engineers and global IT giants. Our students are consistently hired by industry leaders for their technical excellence and project readiness.
            </p>

            <div className="pt-2">
              <Link
                to="/home/placement"
                className="inline-flex items-center gap-2 bg-[#e0f2fe] hover:bg-sky-200 text-[#0284c7] font-black px-6 py-3 rounded-xl text-xs sm:text-sm transition duration-200 group shadow-sm"
              >
                Explore Placements{" "}
                <FaArrowRight className="transform group-hover:translate-x-1 transition duration-200" />
              </Link>
            </div>
          </div>

          {/* ================= RIGHT SIDE: INFINITE SLIDING MARQUEE CAROUSEL ================= */}
          <div className="lg:col-span-8 overflow-hidden relative py-2">
            {/* Left & Right Edge Faders */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50/90 to-transparent z-10 pointer-events-none" />

            {/* Seamless Infinite Slider with inline CSS animation */}
            <div className="w-full overflow-hidden flex">
              <div
                className="flex items-center gap-6 sm:gap-8 flex-nowrap"
                style={{
                  width: "max-content",
                  animation: "marquee-slide 30s linear infinite",
                }}
              >
                {/* 1st Loop of Companies */}
                {RECRUITER_LOGOS.map((item, idx) => (
                  <div key={`logo-1-${idx}`} className="shrink-0 hover:scale-105 transition duration-300">
                    {item.component}
                  </div>
                ))}

                {/* 2nd Loop of Companies (seamless loop) */}
                {RECRUITER_LOGOS.map((item, idx) => (
                  <div key={`logo-2-${idx}`} className="shrink-0 hover:scale-105 transition duration-300">
                    {item.component}
                  </div>
                ))}
              </div>
            </div>

            {/* Injected style for guaranteed rendering without Tailwind dependency */}
            <style>{`
              @keyframes marquee-slide {
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
    </section>
  );
};

export default RecruitersSection;
