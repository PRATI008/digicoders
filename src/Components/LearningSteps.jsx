import React from "react";
import {
  FaCode,
  FaDiagramProject,
  FaUserTie,
  FaBuildingCircleCheck,
} from "react-icons/fa6";

const LearningSteps = () => {
  const steps = [
    {
      step: "01",
      icon: <FaCode className="text-3xl text-orange-500" />,
      title: "Foundation & Deep Logic",
      desc: "Learn core data structures, syntax mastery, problem solving, and architecture best practices from scratch.",
    },
    {
      step: "02",
      icon: <FaDiagramProject className="text-3xl text-blue-500" />,
      title: "Real-World Live Project",
      desc: "Work in agile development sprints under senior tech leads building commercial-grade web and mobile apps.",
    },
    {
      step: "03",
      icon: <FaUserTie className="text-3xl text-emerald-500" />,
      title: "Mock Interview & Resume",
      desc: "Polish GitHub portfolio, optimize LinkedIn profile, and practice multiple 1-on-1 technical & HR mock rounds.",
    },
    {
      step: "04",
      icon: <FaBuildingCircleCheck className="text-3xl text-purple-500" />,
      title: "Campus Drives & Placement",
      desc: "Get unlimited interview calls with 500+ hiring partners until you land your dream IT career offer letter.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 px-4 md:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-600 font-bold uppercase text-xs md:text-sm tracking-widest bg-orange-100 px-3 py-1 rounded-full">
            Our Proven Formula
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#000034] mt-3 mb-4">
            How DigiCoders Turns You Into an Industry-Ready Developer
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4 rounded"></div>
          <p className="text-gray-600 text-sm md:text-base">
            From zero coding knowledge to high-paying software developer. Follow our structured 4-step path.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-white p-7 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 relative group flex flex-col items-center text-center"
            >
              <span className="text-5xl font-black text-gray-100 absolute top-3 right-4 select-none group-hover:text-orange-100 transition">
                {item.step}
              </span>
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningSteps;

