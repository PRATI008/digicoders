import React from "react";
import { Link } from "react-router-dom";
import {
  FaIdCard,
  FaCircleCheck,
  FaVideo,
  FaBookOpen,
  FaPalette,
  FaHeadset,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa6";

const GreenCardSection = () => {
  const benefits = [
    {
      title: "Lifetime Technical Support",
      desc: "Connect with our tech leads anytime for project debugging, code reviews, and technical assistance.",
      icon: <FaHeadset className="text-2xl text-emerald-600" />,
    },
    {
      title: "Free Semester Programming Classes",
      desc: "Free subject classes for your college semesters to ensure high grades alongside practical skills.",
      icon: <FaBookOpen className="text-2xl text-blue-600" />,
    },
    {
      title: "Free Job Alerts & Open Drives",
      desc: "Get notified of verified off-campus & on-campus job vacancies, walk-ins, and direct referrals.",
      icon: <FaBriefcase className="text-2xl text-purple-600" />,
    },
    {
      title: "Complimentary MNC Preparation",
      desc: "Specialized preparation sessions for MNC aptitude tests, technical rounds, and HR interviews.",
      icon: <FaCircleCheck className="text-2xl text-orange-600" />,
    },
    {
      title: "Video Courses & Digital Tutorials",
      desc: "Lifetime access to pre-recorded technical video tutorials and refresher modules.",
      icon: <FaVideo className="text-2xl text-rose-600" />,
    },
    {
      title: "Curated Design & Code Assets",
      desc: "Access to verified open-source templates, code snippets, project architectures, and UI kits.",
      icon: <FaPalette className="text-2xl text-teal-600" />,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#000034] text-white px-4 md:px-8 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Info Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold uppercase text-xs md:text-sm tracking-wider px-3.5 py-1 rounded-full">
              <FaIdCard /> Lifetime Support Portal
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              DigiCoders Exclusive <span className="text-emerald-400">Green Card</span> For Every Student
            </h2>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              We don't end our relationship when your training finishes. Every student who completes industrial training at DigiCoders receives our signature <strong>Green Card</strong>, unlocking lifetime tech support, semester classes, and dedicated job placement drives.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-white/10 rounded-lg">{b.icon}</div>
                    <h3 className="font-bold text-white text-sm">{b.title}</h3>
                  </div>
                  <p className="text-gray-300 text-xs leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/verify-certificate"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition flex items-center gap-2"
              >
                Verify Green Card Credentials <FaArrowRight />
              </Link>
              <Link
                to="/registration"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-lg shadow-orange-500/20 transition"
              >
                Enroll & Get Green Card
              </Link>
            </div>
          </div>

          {/* Right Card Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-950 rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-emerald-400/40 relative transform hover:rotate-1 transition duration-500">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-emerald-500/30 pb-4 mb-6">
                <div>
                  <h4 className="font-black text-xl tracking-wider text-white">DIGICODERS</h4>
                  <p className="text-[10px] uppercase tracking-widest text-emerald-200">Technologies Pvt. Ltd.</p>
                </div>
                <div className="bg-emerald-400/20 text-emerald-300 font-extrabold text-[11px] px-3 py-1 rounded-full border border-emerald-300/30 flex items-center gap-1.5">
                  <FaIdCard /> GREEN CARD
                </div>
              </div>

              {/* Card Body */}
              <div className="space-y-4 mb-6">
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <span className="text-[10px] uppercase text-emerald-300 font-semibold block">Member Benefit</span>
                  <span className="text-sm font-bold text-white">Lifetime Technical Support & Placement Pass</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-black/20 p-3 rounded-lg border border-white/10">
                    <span className="text-[10px] text-emerald-300 block">Validity</span>
                    <span className="font-bold text-white">Lifetime Access</span>
                  </div>
                  <div className="bg-black/20 p-3 rounded-lg border border-white/10">
                    <span className="text-[10px] text-emerald-300 block">Authorized By</span>
                    <span className="font-bold text-white">Head of Training</span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-emerald-500/30 text-[11px] text-emerald-200">
                <span>ISO 9001:2015 Certified</span>
                <span className="font-mono">DC-GC-LIFETIME</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenCardSection;

