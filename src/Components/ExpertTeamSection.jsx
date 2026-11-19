import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const EXPERT_TEAM_MEMBERS = [
  {
    name: "Shiva Vishwakarma",
    role: "MERN Stack Developer",
    tag: "#TEAMDIGICODERS",
    themeColor: "from-[#2f241a] via-[#3d2f21] to-[#1a140e]",
    badgeBg: "bg-amber-900/40 text-amber-300",
    description:
      "Shiva Vishwakarma is a MERN Stack Developer at Digicoders, proficient in MongoDB, Express.js, React, and Node.js. He builds scalable, high-performance web applications and contributes to delivering modern, reliable digital solutions.",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Mayank Pandey",
    role: "Full Stack Developer",
    tag: "#TEAMDIGICODERS",
    themeColor: "from-[#102347] via-[#162e5c] to-[#0c1830]",
    badgeBg: "bg-blue-900/40 text-blue-300",
    description:
      "Mayank Pandey is a Full Stack Developer at Digicoders, experienced in front-end and back-end technologies. He develops scalable web applications, writes clean and efficient code, and contributes to delivering high-quality, user-centric digital solutions.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Saurabh Kumar",
    role: "Full Stack Developer",
    tag: "#TEAMDIGICODERS",
    themeColor: "from-[#25321f] via-[#33442a] to-[#172013]",
    badgeBg: "bg-emerald-900/40 text-emerald-300",
    description:
      "Saurabh Kumar is a Full Stack Developer at Digicoders, proficient in front-end and back-end development. He builds efficient, scalable web applications, ensures smooth user experiences, and contributes to innovative software solutions.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Gaurav Gupta",
    role: "Team Lead (Full Stack)",
    tag: "#TEAMDIGICODERS",
    themeColor: "from-[#3b1828] via-[#4d2035] to-[#240d18]",
    badgeBg: "bg-rose-900/40 text-rose-300",
    description:
      "Gaurav Gupta is a Senior Technical Lead at Digicoders with 6+ years of expertise in large-scale MERN architecture, cloud microservices, and leading enterprise application delivery.",
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Er. Ved Prakash",
    role: "Team Lead (Web Development)",
    tag: "#TEAMDIGICODERS",
    themeColor: "from-[#1d1f3d] via-[#282a54] to-[#121326]",
    badgeBg: "bg-indigo-900/40 text-indigo-300",
    description:
      "Er. Ved Prakash specializes in PHP Laravel, relational database architectures, and custom enterprise ERP/CRM applications for high-volume enterprise production environments.",
    photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Sumesh Gupta",
    role: "Team Lead (Graphics & UI/UX)",
    tag: "#TEAMDIGICODERS",
    themeColor: "from-[#352516] via-[#47321e] to-[#21170d]",
    badgeBg: "bg-amber-900/40 text-amber-300",
    description:
      "Sumesh Gupta oversees UI/UX design, design systems, and frontend aesthetics ensuring responsive visual journeys across commercial web and mobile products.",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80",
  },
];

const ExpertTeamSection = () => {
  return (
    <section className="py-14 sm:py-20 bg-white px-4 sm:px-6 md:px-8 border-t border-gray-100 overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* ================= TITLE: Expert Team of DigiCoders ================= */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Expert Team of DigiCoders
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded"></div>
        </div>

        {/* ================= AUTO-SLIDING HORIZONTAL TRACK ================= */}
        <div className="relative w-full overflow-hidden py-2">
          {/* Subtle Left & Right Gradient Faders */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="w-full overflow-hidden flex">
            <div
              className="flex items-center gap-6 sm:gap-8 flex-nowrap"
              style={{
                width: "max-content",
                animation: "team-slide 34s linear infinite",
              }}
            >
              {/* Loop 1: Expert Cards */}
              {EXPERT_TEAM_MEMBERS.map((member, idx) => (
                <div
                  key={`expert-1-${idx}`}
                  className="w-[330px] sm:w-[380px] md:w-[410px] h-[360px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl border-2 border-gray-200/80 transition-all duration-300 transform hover:-translate-y-1.5 shrink-0 relative flex flex-col justify-between p-5 sm:p-6 text-white group"
                >
                  {/* Background Split: Left Gradient with Text + Right Student Photo */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${member.themeColor} z-0`}
                  />

                  {/* Half-Right Photo with Orange DigiCoders Watermark Wall */}
                  <div className="absolute top-0 right-0 bottom-0 w-[55%] z-0 overflow-hidden">
                    {/* DigiCoders Repeating Wall Pattern Background */}
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen"
                      style={{ backgroundImage: `url('/images/back.jpg')` }}
                    />
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Gradient blending from Left to Right */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${member.themeColor} via-transparent to-transparent opacity-95`}
                    />
                  </div>

                  {/* ================= CARD CONTENT ================= */}
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    {/* Top: #TEAMDIGICODERS Tag */}
                    <div>
                      <span className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-white/90 drop-shadow">
                        {member.tag}
                      </span>

                      {/* Name & Role */}
                      <div className="mt-3 sm:mt-4 max-w-[210px] sm:max-w-[230px]">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white leading-tight tracking-tight drop-shadow">
                          {member.name}
                        </h3>
                        <p className="text-xs sm:text-[13px] font-bold text-gray-200 mt-0.5">
                          {member.role}
                        </p>
                      </div>

                      {/* Bio Description */}
                      <p className="text-white/80 text-[10.5px] sm:text-xs leading-relaxed mt-2.5 sm:mt-3 max-w-[200px] sm:max-w-[220px] font-normal line-clamp-5">
                        {member.description}
                      </p>
                    </div>

                    {/* Bottom: "Do you have any project in mind?" + Contact CTA */}
                    <div className="pt-2 sm:pt-3 border-t border-white/20 mt-auto">
                      <p className="text-[10px] sm:text-[11px] text-gray-300 font-medium">
                        Do you have any project in mind?
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="bg-white text-gray-900 font-black text-[9px] uppercase px-2 py-0.5 rounded shadow">
                          Connect With Us :
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-[10px] sm:text-[11px] text-white font-bold mt-1.5">
                        <span className="text-orange-400">9198483820</span>
                        <span>•</span>
                        <span className="text-gray-300">thedigicoders.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Loop 2: Duplicate for Seamless Continuous Loop */}
              {EXPERT_TEAM_MEMBERS.map((member, idx) => (
                <div
                  key={`expert-2-${idx}`}
                  className="w-[330px] sm:w-[380px] md:w-[410px] h-[360px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl border-2 border-gray-200/80 transition-all duration-300 transform hover:-translate-y-1.5 shrink-0 relative flex flex-col justify-between p-5 sm:p-6 text-white group"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${member.themeColor} z-0`}
                  />

                  <div className="absolute top-0 right-0 bottom-0 w-[55%] z-0 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen"
                      style={{ backgroundImage: `url('/images/back.jpg')` }}
                    />
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${member.themeColor} via-transparent to-transparent opacity-95`}
                    />
                  </div>

                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      <span className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-white/90 drop-shadow">
                        {member.tag}
                      </span>

                      <div className="mt-3 sm:mt-4 max-w-[210px] sm:max-w-[230px]">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white leading-tight tracking-tight drop-shadow">
                          {member.name}
                        </h3>
                        <p className="text-xs sm:text-[13px] font-bold text-gray-200 mt-0.5">
                          {member.role}
                        </p>
                      </div>

                      <p className="text-white/80 text-[10.5px] sm:text-xs leading-relaxed mt-2.5 sm:mt-3 max-w-[200px] sm:max-w-[220px] font-normal line-clamp-5">
                        {member.description}
                      </p>
                    </div>

                    <div className="pt-2 sm:pt-3 border-t border-white/20 mt-auto">
                      <p className="text-[10px] sm:text-[11px] text-gray-300 font-medium">
                        Do you have any project in mind?
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="bg-white text-gray-900 font-black text-[9px] uppercase px-2 py-0.5 rounded shadow">
                          Connect With Us :
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-[10px] sm:text-[11px] text-white font-bold mt-1.5">
                        <span className="text-orange-400">9198483820</span>
                        <span>•</span>
                        <span className="text-gray-300">thedigicoders.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Keyframe Style Scoped */}
          <style>{`
            @keyframes team-slide {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </div>

        {/* View All Experts Link */}
        <div className="text-center mt-10 sm:mt-12">
          <Link
            to="/our-experts"
            className="inline-flex items-center gap-2 border-2 border-sky-600 text-sky-700 hover:bg-sky-600 hover:text-white font-extrabold px-8 py-3 rounded-lg text-xs sm:text-sm transition shadow-sm"
          >
            Meet Our Full Expert Team <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExpertTeamSection;

