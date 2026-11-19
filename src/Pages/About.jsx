import React from "react";
import Navbar from "../Components/Navbar";
import FloatingActions from "../Components/FloatingActions";
import StatsSection from "../Components/StatsSection";
import WhyChooseSection from "../Components/WhyChooseSection";
import BranchesSection from "../Components/BranchesSection";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import {
  FaTrophy,
  FaHandshake,
  FaCertificate,
  FaCheck,
  FaRocket,
} from "react-icons/fa6";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />
      <FloatingActions />

      {/* Banner */}
      <div className="bg-gradient-to-r from-[#000034] to-[#0d1672] text-white py-12 sm:py-16 px-4 sm:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block text-orange-400 font-bold uppercase text-xs sm:text-sm tracking-widest bg-orange-500/20 px-3 py-1 rounded-full border border-orange-500/30">
            Who We Are
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mt-3 sm:mt-4 mb-3 sm:mb-4">
            About DigiCoders Technologies
          </h1>
          <p className="text-gray-200 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            Pioneering excellence in practical IT training, software engineering, and industry
            internships across North India since 2019.
          </p>
        </div>
      </div>

      {/* Main Story Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000034]">
              Bridging The Academic-Industry Divide
            </h2>
            <div className="w-16 h-1 bg-orange-500 rounded"></div>
            <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base">
              <strong>DigiCoders Technologies</strong> is recognized as the leading IT training
              institute and software development company headquartered in Lucknow, Uttar Pradesh.
              Founded by tech innovators with deep industry experience, we aim to transform
              traditional college students into productive, production-ready software engineers.
            </p>
            <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base">
              Over the last 7+ years, we have trained over <strong>21,000+ students</strong> from
              top polytechnics, engineering colleges, and universities including B.Tech, BCA, MCA,
              and Diploma candidates across UP, Bihar, Delhi, and Madhya Pradesh.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                <FaRocket className="text-2xl text-orange-600 mb-2" />
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">Our Mission</h4>
                <p className="text-xs text-gray-600 mt-1">
                  To provide 100% practical, project-based technical education affordable to every student.
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                <FaTrophy className="text-2xl text-blue-600 mb-2" />
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">Our Vision</h4>
                <p className="text-xs text-gray-600 mt-1">
                  To be India's most trusted developer finishing school and top provider of enterprise IT solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 mt-4 lg:mt-0">
            <div className="relative">
              <img
                src="/images/lucknow-head-office-digicoders.jpg"
                alt="DigiCoders Head Office & Trainees"
                className="rounded-3xl shadow-2xl object-cover w-full h-[320px] sm:h-[400px]"
              />
              <div className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:left-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold shrink-0">
                    <FaCertificate />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs sm:text-sm text-gray-900">ISO 9001:2015</h5>
                    <p className="text-[10px] sm:text-xs text-gray-500">Certified Training Institution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership / Founders - Official Er. Himanshu Kashyap & Er. Gopal Singh */}
      <section className="py-12 sm:py-16 bg-gray-50 px-4 sm:px-6 md:px-8 border-y border-gray-200 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-orange-600 font-bold uppercase text-xs tracking-widest bg-orange-100 px-3 py-1 rounded-full">
              Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000034] mt-2 sm:mt-3 mb-2">
              Meet Our Visionary Founders & Tech Directors
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-md hover:shadow-xl transition border border-gray-100 flex flex-col items-center">
              <img
                src="images/himanshu1.png"
                alt="Er. Himanshu Kashyap"
                className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover mb-4 border-4 border-orange-500 shadow"
              />
              <h3 className="font-bold text-xl text-gray-900">Er. Himanshu Kashyap</h3>
              <p className="text-orange-600 font-semibold text-xs sm:text-sm mb-3">Co-Founder & Head of Projects / Operations</p>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Tech visionary with over 10+ years of software industry experience, leading the commercial
                software and enterprise development wing and successfully executing hundreds of live client projects.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-md hover:shadow-xl transition border border-gray-100 flex flex-col items-center">
              <img
                src="/images/gopal-singh.png"
                alt="Er. Gopal Singh"
                className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover mb-4 border-4 border-blue-500 shadow"
              />
              <h3 className="font-bold text-xl text-gray-900">Er. Gopal Singh</h3>
              <p className="text-blue-600 font-semibold text-xs sm:text-sm mb-3">Co-Founder & Training & Development Head</p>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Over a decade of expertise in software development and advanced technical mentorship,
                architecting DigiCoders' industry-aligned practical pedagogy and student placement drives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* College MOUs & Recognition */}
      <section id="mou" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <span className="text-orange-600 font-bold uppercase text-xs tracking-widest bg-orange-100 px-3 py-1 rounded-full">
              Institutional Collaborations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000034] mt-3 mb-4">
              MOU With 50+ Top Colleges & Universities
            </h2>
            <div className="w-16 h-1 bg-orange-500 mb-6 rounded"></div>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
              DigiCoders Technologies is an officially signed training partner with government,
              aided, and private engineering institutions. We conduct on-campus Faculty Development
              Programs (FDP), student bootcamps, industrial visits, and center of excellence labs.
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-gray-700 font-semibold">
              <li className="flex items-center gap-3">
                <FaCheck className="text-green-600 shrink-0" /> Authorized Training Partner for B.Tech & Diploma students
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-green-600 shrink-0" /> On-Campus & Off-Campus Live Project Labs
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-green-600 shrink-0" /> Faculty Training & Industry 4.0 Workshops
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-green-600 shrink-0" /> Dedicated Placement Drives & Pool Campus Drives
              </li>
            </ul>

            <div className="mt-8">
              <Link
                to="/registration"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition inline-block shadow"
              >
                Request College Collaboration MOU
              </Link>
            </div>
          </div>

          <div className="bg-gray-100 rounded-3xl p-6 sm:p-8 border border-gray-200">
            <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-4 flex items-center gap-2">
              <FaHandshake className="text-orange-600" /> Partnered Institutions Include:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700 font-medium">
              <div className="p-3 bg-white rounded-xl shadow-sm">Government Polytechnic, Lucknow</div>
              <div className="p-3 bg-white rounded-xl shadow-sm">Buddha Institute of Technology, Gorakhpur</div>
              <div className="p-3 bg-white rounded-xl shadow-sm">BBD University, Lucknow</div>
              <div className="p-3 bg-white rounded-xl shadow-sm">SRMCEM, Lucknow</div>
              <div className="p-3 bg-white rounded-xl shadow-sm">Government Polytechnic, Kanpur</div>
              <div className="p-3 bg-white rounded-xl shadow-sm">PSIT, Kanpur</div>
              <div className="p-3 bg-white rounded-xl shadow-sm">Ambalika Institute of Management</div>
              <div className="p-3 bg-white rounded-xl shadow-sm">Integral University, Lucknow</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats, Why Choose & Branches */}
      <StatsSection />
      <WhyChooseSection />
      <BranchesSection />
      <Footer />
    </div>
  );
};

export default About;
