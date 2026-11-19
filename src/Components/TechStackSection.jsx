import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaJava,
  FaLaravel,
  FaFire,
  FaDatabase,
  FaPhp,
} from "react-icons/fa6";
import { SiNestjs, SiExpress, SiFlutter, SiDart, SiMysql, SiCodeigniter } from "react-icons/si";

const WEB_FRAMEWORKS = [
  {
    logo: <FaHtml5 className="text-4xl text-[#e34f26]" />,
    category: "CORE WEB",
    categoryColor: "text-red-500",
    name: "HTML5",
  },
  {
    logo: <FaCss3Alt className="text-4xl text-[#1572b6]" />,
    category: "UI/UX",
    categoryColor: "text-blue-500",
    name: "CSS3",
  },
  {
    logo: <FaJs className="text-4xl text-[#f7df1e]" />,
    category: "LOGIC",
    categoryColor: "text-amber-500",
    name: "JavaScript",
  },
  {
    logo: <FaBootstrap className="text-4xl text-[#7952b3]" />,
    category: "STYLING",
    categoryColor: "text-purple-600",
    name: "Bootstrap",
  },
  {
    logo: <FaReact className="text-4xl text-[#61dafb]" />,
    category: "FRONTEND",
    categoryColor: "text-cyan-500",
    name: "React JS",
  },
  {
    logo: <FaAngular className="text-4xl text-[#dd0031]" />,
    category: "ENTERPRISE",
    categoryColor: "text-red-600",
    name: "Angular",
  },
  {
    logo: <SiNestjs className="text-4xl text-[#ea2845]" />,
    category: "BACKEND",
    categoryColor: "text-green-600",
    name: "Nest JS",
  },
  {
    logo: <SiExpress className="text-4xl text-gray-800" />,
    category: "BACKEND",
    categoryColor: "text-green-600",
    name: "Express JS",
  },
];

const BACKEND_MOBILE_DATA = [
  {
    logo: <FaPython className="text-4xl text-[#3776ab]" />,
    category: "AI / ML",
    categoryColor: "text-teal-600",
    name: "Python",
  },
  {
    logo: <FaJava className="text-4xl text-[#f89820]" />,
    category: "BACKEND",
    categoryColor: "text-teal-600",
    name: "Java",
  },
  {
    logo: <FaLaravel className="text-4xl text-[#ff2d20]" />,
    category: "PHP EXPERT",
    categoryColor: "text-red-600",
    name: "Laravel",
  },
  {
    logo: <SiCodeigniter className="text-4xl text-[#ee4326]" />,
    category: "WEB APP",
    categoryColor: "text-red-500",
    name: "CodeIgniter",
  },
  {
    logo: <SiMysql className="text-4xl text-[#00758f]" />,
    category: "DATABASE",
    categoryColor: "text-teal-600",
    name: "MySQL",
  },
  {
    logo: <SiFlutter className="text-4xl text-[#02569b]" />,
    category: "MOBILE",
    categoryColor: "text-sky-600",
    name: "Flutter",
  },
  {
    logo: <SiDart className="text-4xl text-[#0175c2]" />,
    category: "MOBILE",
    categoryColor: "text-sky-600",
    name: "Dart",
  },
  {
    logo: <FaPhp className="text-4xl text-[#777bb4]" />,
    category: "BACKEND",
    categoryColor: "text-teal-600",
    name: "PHP",
  },
];

const TechStackSection = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#fafcff] px-4 sm:px-6 md:px-8 border-t border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-[#ea580c] font-black uppercase text-[11px] sm:text-xs tracking-widest bg-orange-100/70 border border-orange-200/50 px-4 py-1 rounded-full mb-3">
            BEST IT TRAINING IN LUCKNOW
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#000034] tracking-tight">
            Industry-Ready Technology Stack
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-3 leading-relaxed">
            DigiCoders Technologies provides students with the advanced skills required for modern software development, web engineering, and mobile app architecture.
          </p>
        </div>

        {/* ================= GROUP 1: Web & Modern Frameworks ================= */}
        <div className="mb-10 sm:mb-14">
          <h3 className="text-lg sm:text-xl font-black text-[#000034] mb-5 tracking-tight">
            Web & Modern Frameworks
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {WEB_FRAMEWORKS.map((tech, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 sm:p-5 border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
                  {tech.logo}
                </div>
                <div className="min-w-0">
                  <span className={`text-[10px] font-black uppercase tracking-wider block ${tech.categoryColor}`}>
                    {tech.category}
                  </span>
                  <h4 className="font-extrabold text-sm sm:text-base text-gray-900 leading-tight truncate">
                    {tech.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= GROUP 2: Backend, Mobile & Data ================= */}
        <div>
          <h3 className="text-lg sm:text-xl font-black text-[#000034] mb-5 tracking-tight">
            Backend, Mobile & Data
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {BACKEND_MOBILE_DATA.map((tech, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 sm:p-5 border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
                  {tech.logo}
                </div>
                <div className="min-w-0">
                  <span className={`text-[10px] font-black uppercase tracking-wider block ${tech.categoryColor}`}>
                    {tech.category}
                  </span>
                  <h4 className="font-extrabold text-sm sm:text-base text-gray-900 leading-tight truncate">
                    {tech.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechStackSection;

