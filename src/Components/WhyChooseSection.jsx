import React from "react";
import {
  FaLaptopCode,
  FaChalkboardUser,
  FaIdCard,
  FaDiagramProject,
  FaUserCheck,
  FaNetworkWired,
  FaClockRotateLeft,
  FaCertificate,
} from "react-icons/fa6";

const WhyChooseSection = () => {
  const features = [
    {
      icon: <FaLaptopCode className="text-3xl text-orange-600" />,
      title: "100% Practical Training",
      desc: "No boring theory. Daily code-along sessions where students write real code from day one.",
    },
    {
      icon: <FaChalkboardUser className="text-3xl text-blue-600" />,
      title: "Expert Tech Mentors",
      desc: "Learn directly from working software architects and full stack developers with 5+ years experience.",
    },
    {
      icon: <FaIdCard className="text-3xl text-green-600" />,
      title: "Lifetime Support Green Card",
      desc: "Get free revision classes, interview preparation, and lifelong doubt-solving assistance.",
    },
    {
      icon: <FaDiagramProject className="text-3xl text-purple-600" />,
      title: "Live Client Projects",
      desc: "Build deployable web and mobile applications to create a standout portfolio on GitHub & LinkedIn.",
    },
    {
      icon: <FaUserCheck className="text-3xl text-red-600" />,
      title: "Dedicated Placement Cell",
      desc: "Direct interview drives with 500+ recruitment partners, resume reviews & HR mock sessions.",
    },
    {
      icon: <FaNetworkWired className="text-3xl text-teal-600" />,
      title: "Smart AC Labs & High-Speed WiFi",
      desc: "State-of-the-art computer labs with individual systems, gigabit internet, and friendly environment.",
    },
    {
      icon: <FaClockRotateLeft className="text-3xl text-amber-600" />,
      title: "Daily Tasks & Assessment",
      desc: "Structured milestone assessments, coding tests, and feedback loops to guarantee proficiency.",
    },
    {
      icon: <FaCertificate className="text-3xl text-cyan-600" />,
      title: "ISO & Govt Recognized Certificate",
      desc: "Earn valid ISO certified project training completion certificate and corporate project letters.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-600 font-bold uppercase text-xs md:text-sm tracking-widest bg-orange-100 px-3 py-1 rounded-full">
            The DigiCoders Advantage
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#000034] mt-3 mb-4">
            Why Choose DigiCoders Technologies?
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4 rounded"></div>
          <p className="text-gray-600 text-sm md:text-base">
            Recognized as the premier IT training and software development company in Lucknow,
            Kanpur, and Gorakhpur. Here is what sets us apart from ordinary institutes.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition">
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

export default WhyChooseSection;

