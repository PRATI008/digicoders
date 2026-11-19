import React from "react";
import Navbar from "../Components/Navbar";
import FloatingActions from "../Components/FloatingActions";
import EnquirySection from "../Components/EnquirySection";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaGlobe,
  FaMobileScreen,
  FaChartLine,
  FaPalette,
  FaServer,
  FaShieldHalved,
  FaArrowRight,
} from "react-icons/fa6";

const SERVICES_LIST = [
  {
    icon: <FaLaptopCode className="text-4xl text-orange-600" />,
    title: "Custom Software Development",
    desc: "Robust, tailored enterprise software solutions including ERP, CRM, Billing Software, HRMS, and School/College Management Systems.",
    features: ["Custom Business Logic", "Role-based Access Control", "High Reliability & Speed"],
  },
  {
    icon: <FaGlobe className="text-4xl text-blue-600" />,
    title: "Website & Web Portal Development",
    desc: "Responsive, lightning-fast dynamic corporate websites and high-conversion e-commerce stores built with React, Next.js, and Laravel.",
    features: ["Mobile Responsive UI", "SEO Friendly Architecture", "Payment Gateway Integration"],
  },
  {
    icon: <FaMobileScreen className="text-4xl text-green-600" />,
    title: "Mobile Application Development",
    desc: "Feature-packed native and cross-platform Android & iOS applications using Flutter and React Native with realtime cloud backend.",
    features: ["Cross-platform iOS & Android", "Play Store & App Store Deployment", "Push Notifications"],
  },
  {
    icon: <FaChartLine className="text-4xl text-purple-600" />,
    title: "Digital Marketing & Performance SEO",
    desc: "Data-driven organic search engine optimization, Google Ads PPC management, Meta social media campaigns, and lead generation.",
    features: ["Top Google Rankings", "Targeted Paid Ads", "Social Media Branding"],
  },
  {
    icon: <FaPalette className="text-4xl text-pink-600" />,
    title: "Graphic Designing & UI/UX Design",
    desc: "Creative brand identity design, company logos, brochure creation, Figma wireframing, and interactive UI/UX prototyping.",
    features: ["Modern Visual Aesthetics", "User Journey Prototyping", "Vector Brand Toolkits"],
  },
  {
    icon: <FaServer className="text-4xl text-cyan-600" />,
    title: "Domain, Cloud Hosting & DevOps",
    desc: "Scalable cloud server deployment on AWS, DigitalOcean, and GCP with automated SSL certificates and 99.9% uptime guarantees.",
    features: ["Cloud Server Setup", "Free SSL Security", "Automated Daily Backups"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />
      <FloatingActions />

      {/* Banner */}
      <div className="bg-gradient-to-r from-[#000034] to-[#0a1264] text-white py-16 px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-orange-400 font-bold uppercase text-xs md:text-sm tracking-widest bg-orange-500/20 px-3 py-1 rounded-full border border-orange-500/30">
            Enterprise Solutions
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
            Our Software Development & IT Services
          </h1>
          <p className="text-gray-200 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            From visionary startup MVPs to scalable corporate enterprise architectures, DigiCoders
            powers digital transformation for businesses worldwide.
          </p>
        </div>
      </div>

      <section className="py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((srv, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {srv.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition mb-3">
                  {srv.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{srv.desc}</p>
                <ul className="space-y-2 mb-6 text-xs font-semibold text-gray-700">
                  {srv.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <Link
                  to="/contact"
                  className="text-xs font-bold text-orange-600 group-hover:underline flex items-center gap-1.5"
                >
                  Request A Quote / Consultation <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <EnquirySection />
      <Footer />
    </div>
  );
};

export default Services;

