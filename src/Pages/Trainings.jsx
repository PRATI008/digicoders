import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import FloatingActions from "../Components/FloatingActions";
import BatchesSection from "../Components/BatchesSection";
import WhyChooseSection from "../Components/WhyChooseSection";
import EnquirySection from "../Components/EnquirySection";
import Footer from "../Components/Footer";
import {
  FaCheck,
  FaCalendarCheck,
  FaFilePdf,
  FaCertificate,
  FaLaptopCode,
  FaArrowRight,
} from "react-icons/fa6";

const TRAINING_INFO = {
  summer: {
    title: "Summer Training 2026 in Lucknow, Kanpur & Gorakhpur",
    subtitle: "45 Days / 60 Days Live Project Based Practical Summer Internship for B.Tech, Diploma, BCA & MCA",
    duration: "45 Days / 60 Days / 2 Months",
    eligibility: "B.Tech (CS, IT, EC, EE, ME, CE), BCA, MCA, Polytechnic Diploma, B.Sc (IT)",
    highlights: [
      "100% Practical Industrial Coding with Zero Boring Theory",
      "Major Live Project Development with Source Code on GitHub",
      "Company Recognized Training Certificate & Project Report for College",
      "Lifetime Revision Green Card Support for Doubts & Placement",
      "Weekly Personality Development & Technical Mock Interviews",
    ],
  },
  industrial: {
    title: "6 Months / 6 Weeks Industrial Training Program",
    subtitle: "Enterprise Grade Live Software Development for Final Year Students Seeking Corporate Readiness",
    duration: "6 Months / 3 Months / 6 Weeks",
    eligibility: "Final Year / Passed Out B.Tech, MCA, BCA, and Engineering Diploma Students",
    highlights: [
      "Full Stack Development in MERN, Java Spring Boot, or Python Django",
      "Direct work on live commercial client projects and APIs",
      "Daily code reviews and pull-request workflow on GitHub",
      "Complete Final Year Major Project Report & Presentation Guidance",
      "100% Guaranteed Placement Drives and Interview Assistance",
    ],
  },
  apprenticeship: {
    title: "Apprenticeship IT Training in Uttar Pradesh",
    subtitle: "Government & NATS Aligned Apprenticeship with Real-World Corporate Work Experience",
    duration: "6 Months to 1 Year",
    eligibility: "Diploma & Degree Engineering Graduates Seeking Real Corporate Exposure",
    highlights: [
      "Hands-on exposure to live enterprise software development cycles",
      "Mentorship from experienced senior tech leads and scrum masters",
      "Real-world application testing, bug tracking, and deployment",
      "Apprenticeship Certificate + Recommendation Letter for Top MNCs",
      "Direct conversion opportunities into permanent full-time roles",
    ],
  },
  vocational: {
    title: "Vocational IT Training Program",
    subtitle: "Short-term hands-on skill development program for college students during semester breaks",
    duration: "4 Weeks / 6 Weeks",
    eligibility: "All college students looking to acquire in-demand software skills",
    highlights: [
      "Master essential programming basics to advanced project implementation",
      "Flexible morning, afternoon, and evening batch timings",
      "Individual system provided in fully air-conditioned smart computer labs",
      "Free access to recorded sessions and assignment portal",
      "Authorized Vocational Project Training Completion Certificate",
    ],
  },
  winter: {
    title: "Winter Training 2026",
    subtitle: "Accelerated 15 to 30 days fast-track bootcamp during winter vacation",
    duration: "15 Days / 30 Days",
    eligibility: "B.Tech, BCA, MCA, Diploma students on winter break",
    highlights: [
      "Fast-track project building in Python, Web Development, or Android",
      "Intensive 3-4 hours daily interactive sessions with practical labs",
      "Mini Project completion with source code and documentation",
      "Winter Internship Certificate accepted across all universities",
    ],
  },
};

const Trainings = () => {
  const { type } = useParams();
  const currentKey = type && TRAINING_INFO[type] ? type : "summer";
  const training = TRAINING_INFO[currentKey];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />
      <FloatingActions />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#000034] to-[#0d1672] text-white py-16 px-4 md:px-8 text-center relative">
        <div className="max-w-4xl mx-auto">
          <span className="text-orange-400 font-bold uppercase text-xs md:text-sm tracking-widest bg-orange-500/20 px-3 py-1 rounded-full border border-orange-500/30">
            DigiCoders Training Wing
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
            {training.title}
          </h1>
          <p className="text-gray-200 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            {training.subtitle}
          </p>
        </div>
      </div>

      {/* Training Navigation Tabs */}
      <div className="bg-gray-100 border-b border-gray-200 sticky top-[72px] z-30 px-4">
        <div className="max-w-7xl mx-auto flex overflow-x-auto py-2.5 gap-2 text-xs md:text-sm font-bold scrollbar-none">
          {[
            { slug: "summer", label: "Summer Training 2026" },
            { slug: "industrial", label: "Industrial Training (6 Months)" },
            { slug: "apprenticeship", label: "Apprenticeship" },
            { slug: "vocational", label: "Vocational Training" },
            { slug: "winter", label: "Winter Training" },
          ].map((tab) => (
            <Link
              key={tab.slug}
              to={`/training/${tab.slug}`}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition ${
                currentKey === tab.slug
                  ? "bg-orange-600 text-white shadow"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Details Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#000034] mb-3">
                Program Overview & Details
              </h2>
              <div className="w-16 h-1 bg-orange-500 rounded mb-4"></div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                At <strong>DigiCoders Technologies</strong>, our training curriculum is engineered
                in collaboration with senior industry architects to bridge the massive gap between
                college textbooks and actual IT industry requirements. Whether you are aiming for
                product startups or top tier MNCs like TCS, Wipro, and Infosys, this program gives
                you the technical edge.
              </p>
            </div>

            {/* Key Meta */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-orange-50/70 rounded-xl border border-orange-100">
                <span className="text-xs font-bold text-orange-600 uppercase">Duration</span>
                <h4 className="text-base font-bold text-gray-900 mt-1">{training.duration}</h4>
              </div>
              <div className="p-4 bg-blue-50/70 rounded-xl border border-blue-100">
                <span className="text-xs font-bold text-blue-600 uppercase">Eligibility</span>
                <h4 className="text-base font-bold text-gray-900 mt-1">{training.eligibility}</h4>
              </div>
            </div>

            {/* Program Highlights */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What You Get in This Training:
              </h3>
              <div className="space-y-3">
                {training.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <FaCheck className="text-green-500 text-sm mt-1 shrink-0" />
                    <span className="text-sm font-medium text-gray-800">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Covered */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Available Technology Streams:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm font-semibold text-gray-700">
                <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm text-center">
                  MERN Full Stack Web
                </div>
                <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm text-center">
                  Python, Django & AI
                </div>
                <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm text-center">
                  Java Spring Boot & Hibernate
                </div>
                <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm text-center">
                  PHP & Laravel Development
                </div>
                <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm text-center">
                  Flutter & Android Mobile Apps
                </div>
                <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm text-center">
                  Data Science & Machine Learning
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar CTA Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#000034] text-white p-6 rounded-2xl shadow-xl sticky top-28">
              <span className="text-orange-400 text-xs font-bold uppercase tracking-wider">
                Admissions Open 2026
              </span>
              <h3 className="text-xl font-bold mt-2 mb-3">Reserve Your Seat Today</h3>
              <p className="text-gray-300 text-xs leading-relaxed mb-6">
                Limited seats per batch to maintain 1-on-1 mentor attention and individual system in labs.
              </p>

              <div className="space-y-3 mb-6">
                <Link
                  to="/registration"
                  className="w-full block text-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-xl text-sm shadow transition"
                >
                  Register Online Now
                </Link>
                <a
                  href="https://thedigicoders.com/public/images/DigiCoders_2026_Training_Brochure.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-3 rounded-xl text-xs transition"
                >
                  <FaFilePdf /> Download Syllabus PDF
                </a>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-gray-300 space-y-2">
                <p>📍 Available at Lucknow, Kanpur & Gorakhpur</p>
                <p>📞 Call Helpline: +91 9198483820</p>
                <p>💬 WhatsApp Assistance Available 24x7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Batches & Enquiry */}
      <BatchesSection />
      <WhyChooseSection />
      <EnquirySection />
      <Footer />
    </div>
  );
};

export default Trainings;

