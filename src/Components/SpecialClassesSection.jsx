import React from "react";
import {
  FaCode,
  FaGithub,
  FaLinkedin,
  FaClockRotateLeft,
  FaUserGraduate,
  FaAward,
  FaPalette,
  FaListCheck,
  FaGraduationCap,
  FaCheck,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const SpecialClassesSection = () => {
  const specialClasses = [
    {
      title: "Special Coding Classes",
      desc: "Deep-dive live problem solving, logic building & algorithmic thinking for technical rounds.",
      icon: <FaCode className="text-3xl text-orange-500" />,
      badge: "Every Weekend",
    },
    {
      title: "Git & GitHub Industry Sessions",
      desc: "Learn version control, repo management, pull requests, branching and live open-source workflows.",
      icon: <FaGithub className="text-3xl text-gray-900" />,
      badge: "Must-Have",
    },
    {
      title: "LinkedIn & Resume Optimization",
      desc: "Craft ATS-friendly engineering resumes and optimize LinkedIn profiles to attract top recruiters.",
      icon: <FaLinkedin className="text-3xl text-blue-600" />,
      badge: "Career Growth",
    },
    {
      title: "Marathon Coding Sessions",
      desc: "Non-stop 4 to 6 hours hands-on coding hackathons building full-stack project modules live.",
      icon: <FaClockRotateLeft className="text-3xl text-purple-600" />,
      badge: "Hands-on",
    },
    {
      title: "Revision & Doubt Recovery Classes",
      desc: "Dedicated extra time slots for students needing extra clarity on complex logic and architecture.",
      icon: <FaListCheck className="text-3xl text-teal-600" />,
      badge: "Zero Doubt",
    },
    {
      title: "Personality Development & HR Prep",
      desc: "Communication skills, mock HR interviews, email etiquette, and presentation training for MNCs.",
      icon: <FaUserGraduate className="text-3xl text-red-500" />,
      badge: "Soft Skills",
    },
    {
      title: "Graphic Designing & UI/UX Basics",
      desc: "Learn Figma, Canva & modern UI design fundamentals so your applications look world-class.",
      icon: <FaPalette className="text-3xl text-pink-500" />,
      badge: "Design Skill",
    },
    {
      title: "Weekly Coding Tests & Assessments",
      desc: "Track your progress with structured weekly timed assignments and ranking benchmarks.",
      icon: <FaAward className="text-3xl text-amber-500" />,
      badge: "Evaluation",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white px-4 md:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-600 font-bold uppercase text-xs md:text-sm tracking-widest bg-orange-100 px-3 py-1 rounded-full">
            Value Added Sessions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#000034] mt-3 mb-4">
            Special Add-On Classes Included In Training
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4 rounded"></div>
          <p className="text-gray-600 text-sm md:text-base">
            At DigiCoders Technologies, your training is not just limited to regular syllabus. We provide free supplementary industry-readiness sessions to ensure you get placed in top MNCs.
          </p>
        </div>

        {/* Grid of Classes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialClasses.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold text-orange-600 bg-orange-50 border border-orange-200 px-2.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#000034] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-gray-50 flex items-center text-xs font-semibold text-green-600 gap-1.5">
                <FaCheck /> 100% Free For All Trainees
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/registration"
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3.5 rounded-xl text-sm shadow-lg hover:shadow-orange-500/20 transition"
          >
            <FaGraduationCap /> Enroll In Training & Avail All Special Classes
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialClassesSection;

