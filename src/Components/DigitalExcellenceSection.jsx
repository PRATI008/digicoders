import React, { useState } from "react";
import { FaPlay, FaCheck, FaXmark } from "react-icons/fa6";

const DigitalExcellenceSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full font-sans border-t border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* ================= LEFT COLUMN: TEXT CONTENT + 4 BULLETS ================= */}
        <div className="lg:col-span-6 space-y-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-[#000034] tracking-tight leading-[1.15]">
            Crafting Digital Excellence for the Future
          </h2>

          <p className="text-gray-600 text-xs sm:text-sm md:text-[15px] leading-relaxed">
            DigiCoders Technologies is a dynamic powerhouse of young software engineers and entrepreneurs. We don't just develop software; we build ecosystems that empower businesses to thrive in the digital age. From high-end training to commercial-grade application development, we are your umbrella solution for all IT needs.
          </p>

          {/* 4 Feature Points (2x2 Grid exactly as screenshot) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 pt-2">
            
            {/* 1. Expert Mentorship */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 border border-orange-200">
                <FaCheck className="text-[10px]" />
              </div>
              <span className="font-extrabold text-xs sm:text-sm text-gray-900">
                Expert Mentorship
              </span>
            </div>

            {/* 2. Live Project Training */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 border border-orange-200">
                <FaCheck className="text-[10px]" />
              </div>
              <span className="font-extrabold text-xs sm:text-sm text-gray-900">
                Live Project Training
              </span>
            </div>

            {/* 3. Industry Standards */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 border border-orange-200">
                <FaCheck className="text-[10px]" />
              </div>
              <span className="font-extrabold text-xs sm:text-sm text-gray-900">
                Industry Standards
              </span>
            </div>

            {/* 4. 100% Success Rate */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 border border-orange-200">
                <FaCheck className="text-[10px]" />
              </div>
              <span className="font-extrabold text-xs sm:text-sm text-gray-900">
                100% Success Rate
              </span>
            </div>

          </div>
        </div>

        {/* ================= RIGHT COLUMN: TOP FACTS VIDEO SPOTLIGHT ================= */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-full max-w-[620px] rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-900 bg-[#000034] relative group">
            
            {isPlaying ? (
              <div className="relative w-full aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/AUZIYQEPZZOWlIruzq2EWlCEuR0TUmH6A1zFyODYQzrTKqktO8qWdeOOufCrhGaiXD8sj97NdoXIDDJnbV3xvexNtjZIA-QivPsIjJYBeoBSi8U1Wx8cxOZl3CuTCc5WuLfhB9ZV?autoplay=1"
                  title="Top Facts About Summer Training & Apprenticeship | DigiCoders Technologies"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-3 right-3 bg-black/80 hover:bg-black text-white p-2 rounded-full z-20 cursor-pointer"
                  title="Close Video"
                >
                  <FaXmark />
                </button>
              </div>
            ) : (
              /* Custom Thumbnail exactly matching the screenshot */
              <div
                onClick={() => setIsPlaying(true)}
                className="relative w-full aspect-[16/9.5] sm:aspect-video flex flex-col justify-between p-4 sm:p-5 select-none cursor-pointer bg-gradient-to-br from-[#050c26] via-[#081545] to-[#04081c] overflow-hidden"
              >
                {/* Yellow Top Banner: TOP FACTS ABOUT */}
                <div className="text-center pt-1 z-10">
                  <div className="inline-block bg-[#ffdf00] text-black font-black uppercase text-xs sm:text-sm md:text-base px-4 py-1 rounded shadow-md tracking-wider">
                    TOP FACTS ABOUT
                  </div>
                </div>

                {/* Yellow Sub-Banner: SUMMER TRAINING & APPRENTICESHIP */}
                <div className="text-center mt-1 z-10">
                  <div className="inline-block bg-[#ffdf00] text-black font-black uppercase text-[10.5px] sm:text-xs md:text-sm px-4 py-0.5 rounded shadow-md tracking-wide">
                    SUMMER TRAINING & APPRENTICESHIP
                  </div>
                </div>

                {/* Center Content: Er. Gopal Singh (Left), Center Play Button, Er. Himanshu Kashyap (Right) */}
                <div className="grid grid-cols-12 gap-2 sm:gap-4 items-center my-auto z-10 px-2 sm:px-4">
                  
                  {/* Left: Er. Gopal Singh */}
                  <div className="col-span-5 flex flex-col items-center">
                    <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 sm:border-3 border-amber-400 shadow-xl bg-white">
                      <img
                        src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=80"
                        alt="Er. Gopal Singh"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-1.5 bg-[#ffdf00] text-black font-extrabold text-[9px] sm:text-[11px] px-2.5 py-0.5 rounded shadow whitespace-nowrap">
                      Er. Gopal Singh
                    </div>
                  </div>

                  {/* Center: Play Button & Real Industry Experts */}
                  <div className="col-span-2 flex flex-col items-center justify-center">
                    <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white text-[#000034] flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition duration-300">
                      <FaPlay className="text-xs sm:text-base text-[#0284c7] ml-0.5" />
                    </div>
                    <div className="mt-1.5 text-center leading-tight">
                      <span className="text-[8px] sm:text-[9.5px] font-black text-white uppercase block">
                        Real Industry
                      </span>
                      <span className="text-[8px] sm:text-[9.5px] font-black text-white uppercase block">
                        Experts
                      </span>
                    </div>
                  </div>

                  {/* Right: Er. Himanshu Kashyap */}
                  <div className="col-span-5 flex flex-col items-center">
                    <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 sm:border-3 border-amber-400 shadow-xl bg-white">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80"
                        alt="Er. Himanshu Kashyap"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-1.5 bg-[#ffdf00] text-black font-extrabold text-[9px] sm:text-[11px] px-2.5 py-0.5 rounded shadow whitespace-nowrap">
                      Er. Himanshu Kashyap
                    </div>
                  </div>

                </div>

                {/* Bottom Footer: From Digi{Coders} Technologies (P) Ltd. */}
                <div className="text-center pb-1 z-10">
                  <span className="text-[9px] text-gray-400 font-semibold block uppercase">
                    From
                  </span>
                  <div className="text-white font-black text-xs sm:text-sm tracking-tight inline-block">
                    Digi<span className="text-orange-500">&#123;</span>Coders
                    <span className="text-orange-500">&#125;</span>
                    <span className="text-[8px] text-gray-400 font-normal ml-1">Technologies (P) Ltd.</span>
                  </div>
                </div>

              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};

export default DigitalExcellenceSection;

