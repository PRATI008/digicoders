import React, { useState } from "react";
import {
  FaPlay,
  FaUsers,
  FaChalkboardUser,
  FaStar,
  FaCode,
  FaHandshake,
  FaXmark,
} from "react-icons/fa6";

const MediaSpotlightSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full font-sans border-t border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

        {/* ================= LEFT COLUMN: IN CONVERSATION WITH RJ KARISHMA VIDEO ================= */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#050b1d] via-[#091533] to-[#040916] border-4 border-gray-900 group">

            {/* If user clicked Play, show YouTube Embed */}
            {isPlaying ? (
              <div className="relative w-full aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/AUZIYQEPZZOWlIruzqEWlCEuR0TUmH6A1zFyODYQzrTKqktO8qWdeOOufCrhGaiXD8sj97NdoXIDDJnbV3xvexNtjZIA-QivPsIjJYBeoBSi8U1Wx8cxOZl3CuTCc5WuLfhB9ZV?autoplay=1"
                  title="City Talk With RJ Karishma | DigiCoders Technologies IT Experts"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-3 right-3 bg-black/70 hover:bg-black text-white p-2 rounded-full z-20 cursor-pointer"
                  title="Close Video"
                >
                  <FaXmark />
                </button>
              </div>
            ) : (
              /* Custom Video Graphic Thumbnail (Exact Match of the Screenshot) */
              <div
                onClick={() => setIsPlaying(true)}
                className="relative w-full aspect-[16/9.5] sm:aspect-video flex items-center justify-between p-4 sm:p-7 select-none cursor-pointer overflow-hidden"
              >
                {/* Background Subtle Gradient & Studio Glow */}
                <div className="absolute inset-0 bg-radial from-blue-900/40 via-transparent to-black pointer-events-none" />

                {/* Top Center-Right Radio City Logo Badge */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-7 flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-sky-500 text-white px-2.5 sm:px-3 py-1 rounded-md text-[9px] sm:text-[11px] font-black tracking-wide shadow-md">
                  <span>91.1 FM</span>
                  <span className="bg-red-600 px-1 rounded text-[8px] font-bold">Radio City</span>
                </div>

                {/* Main Content Overlay */}
                <div className="relative z-10 w-full h-full flex flex-col justify-between">
                  {/* Top Header: "In Conversation with" */}
                  <div className="text-center sm:text-left pt-1">
                    <span className="text-gray-300 font-medium text-xs sm:text-base tracking-wide font-sans">
                      In Conversation with
                    </span>
                  </div>

                  {/* Center Visuals: RJ Karishma (Left) & DigiCoders IT Experts (Right) */}
                  <div className="grid grid-cols-12 gap-3 sm:gap-6 items-center my-auto">
                    {/* RJ Karishma (Circular Frame) */}
                    <div className="col-span-5 flex flex-col items-center">
                      <div className="relative w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 sm:border-4 border-amber-500 shadow-2xl bg-black">
                        <img
                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
                          alt="RJ Karishma Radio City"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-2 bg-[#2d1b11] border border-amber-600/40 text-amber-200 px-3 sm:px-4 py-1 rounded-full text-[9px] sm:text-xs font-bold shadow-lg flex items-center gap-1">
                        <span className="text-gray-400 font-normal">with:</span>
                        <strong className="tracking-wide">RJ KARISHMA</strong>
                      </div>
                    </div>

                    {/* Center Red Play Button */}
                    <div className="col-span-2 flex justify-center items-center">
                      <div className="w-12 h-8 sm:w-16 sm:h-11 bg-red-600 hover:bg-red-700 text-white rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition duration-300 cursor-pointer">
                        <FaPlay className="text-xs sm:text-base ml-0.5" />
                      </div>
                    </div>

                    {/* DigiCoders Founders / Tech Leads (Right Rectangular Frame) */}
                    <div className="col-span-5 flex flex-col items-center">
                      <div className="relative w-full max-w-[200px] h-24 sm:h-36 md:h-44 rounded-xl overflow-hidden border-2 sm:border-3 border-sky-500 shadow-2xl bg-[#031338]">
                        <img
                          src="/images/lucknow-head-office-digicoders.jpg"
                          alt="DigiCoders IT Experts Gopal Singh and Himanshu Kashyap"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-2 text-white text-center">
                        <span className="bg-red-600/90 text-[8.5px] sm:text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full tracking-wider shadow">
                          IT EXPERTS: DigiCoders
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Strip Label */}
                  <div className="text-center pb-1">
                    <span className="text-[10px] sm:text-xs text-gray-400 font-semibold tracking-wider uppercase">
                      Radio City Lucknow Interview • DigiCoders Technologies
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ================= RIGHT COLUMN: "WHO WE ARE" & 4 HIGHLIGHT CARDS ================= */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-6">

          {/* Top Big Card: Who We Are */}
          <div className="bg-[#f0f6ff] border border-blue-100 rounded-2xl p-5 sm:p-7 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0284c7] flex items-center justify-center text-lg shadow-sm">
                <FaUsers />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#000034] tracking-tight">
                Who We Are
              </h3>
            </div>
            <p className="text-gray-700 text-xs sm:text-sm md:text-[14.5px] leading-relaxed">
              <strong>DigiCoders Technologies</strong> is recognized as the{" "}
              <strong className="text-[#000034]">Best IT Training Institute in Lucknow</strong>, empowering students with industry-standard tech skills.
            </p>
          </div>

          {/* 4 Feature Small Cards (2x2 Grid exactly as screenshot) */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">

            {/* Card 1: Mentors (Blue) */}
            <div className="bg-white border border-gray-200/80 rounded-2xl p-3.5 sm:p-4 shadow-sm hover:shadow-md transition flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#0284c7] text-white flex items-center justify-center text-lg shrink-0 shadow-sm">
                <FaChalkboardUser />
              </div>
              <div className="min-w-0">
                <h4 className="font-extrabold text-sm sm:text-base text-gray-900 leading-tight">
                  Mentors
                </h4>
                <p className="text-[11px] sm:text-xs text-gray-500 font-medium truncate mt-0.5">
                  Industry Pros
                </p>
              </div>
            </div>

            {/* Card 2: Placement (Orange) */}
            <div className="bg-white border border-gray-200/80 rounded-2xl p-3.5 sm:p-4 shadow-sm hover:shadow-md transition flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#ea580c] text-white flex items-center justify-center text-lg shrink-0 shadow-sm">
                <FaStar />
              </div>
              <div className="min-w-0">
                <h4 className="font-extrabold text-sm sm:text-base text-gray-900 leading-tight">
                  Placement
                </h4>
                <p className="text-[11px] sm:text-xs text-gray-500 font-medium truncate mt-0.5">
                  100% Support
                </p>
              </div>
            </div>

            {/* Card 3: Projects (Green) */}
            <div className="bg-white border border-gray-200/80 rounded-2xl p-3.5 sm:p-4 shadow-sm hover:shadow-md transition flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#16a34a] text-white flex items-center justify-center text-lg shrink-0 shadow-sm">
                <FaCode />
              </div>
              <div className="min-w-0">
                <h4 className="font-extrabold text-sm sm:text-base text-gray-900 leading-tight">
                  Projects
                </h4>
                <p className="text-[11px] sm:text-xs text-gray-500 font-medium truncate mt-0.5">
                  Live Practical
                </p>
              </div>
            </div>

            {/* Card 4: Partners (Deep Cyan) */}
            <div className="bg-white border border-gray-200/80 rounded-2xl p-3.5 sm:p-4 shadow-sm hover:shadow-md transition flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#0369a1] text-white flex items-center justify-center text-lg shrink-0 shadow-sm">
                <FaHandshake />
              </div>
              <div className="min-w-0">
                <h4 className="font-extrabold text-sm sm:text-base text-gray-900 leading-tight">
                  Partners
                </h4>
                <p className="text-[11px] sm:text-xs text-gray-500 font-medium truncate mt-0.5">
                  500+ Hiring
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MediaSpotlightSection;

