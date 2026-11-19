import React from "react";
import {
  FaUserGraduate,
  FaBuilding,
  FaAward,
  FaBriefcase,
  FaHandshake,
} from "react-icons/fa6";

const StatsSection = () => {
  const stats = [
    {
      icon: <FaUserGraduate className="text-2xl sm:text-3xl md:text-4xl text-orange-500" />,
      count: "21,000+",
      label: "Students Trained",
      desc: "Empowered through hands-on technical training",
    },
    {
      icon: <FaBuilding className="text-2xl sm:text-3xl md:text-4xl text-blue-500" />,
      count: "500+",
      label: "Hiring Companies",
      desc: "Top MNCs & product startups recruit our talent",
    },
    {
      icon: <FaAward className="text-2xl sm:text-3xl md:text-4xl text-amber-500" />,
      count: "7+ Years",
      label: "Industry Excellence",
      desc: "Providing quality education & development since 2019",
    },
    {
      icon: <FaBriefcase className="text-2xl sm:text-3xl md:text-4xl text-emerald-500" />,
      count: "95%",
      label: "Placement Assistance",
      desc: "Dedicated placement cell for mock interviews & jobs",
    },
    {
      icon: <FaHandshake className="text-2xl sm:text-3xl md:text-4xl text-indigo-500" />,
      count: "50+",
      label: "College MOUs",
      desc: "Official training partner with leading universities",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#000034] to-[#040854] text-white py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 border-y-4 border-orange-500 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 md:gap-8 text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`bg-white/5 hover:bg-white/10 p-3.5 sm:p-5 rounded-2xl border border-white/10 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col items-center justify-center ${
                index === 4 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <div className="mb-2 sm:mb-3 p-2.5 sm:p-3 bg-white/10 rounded-full inline-block">
                {item.icon}
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-orange-400 mb-0.5 sm:mb-1">
                {item.count}
              </h3>
              <p className="font-bold text-xs sm:text-sm md:text-base text-gray-100 mb-1">
                {item.label}
              </p>
              <span className="text-[10px] sm:text-xs text-gray-400 hidden sm:block">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
