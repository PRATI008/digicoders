import React from "react";
import Navbar from "../Components/Navbar";
import FloatingActions from "../Components/FloatingActions";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const LEADERSHIP = [
  {
    name: "Er. Himanshu Kashyap",
    role: "Co-Founder & Head of Projects & Operations",
    skills: "Project Architecture, Enterprise Solutions, Full Stack",
    exp: "10+ Years Exp",
    image: "images/himanshu1.png",
    bio: "Pioneered DigiCoders software development wing and overseen hundreds of enterprise live projects.",
  },
  {
    name: "Er. Gopal Singh",
    role: "Co-Founder & Training & Development Head",
    skills: "Academic Curriculum, Mentorship, Core Engineering",
    exp: "10+ Years Exp",
    image: "./images/gopal-singh.png",
    bio: "Architect behind DigiCoders' practical 100% live coding pedagogy and student placement cell.",
  },
];

const EXPERTS = [
  {
    name: "Gaurav Gupta",
    role: "Team Lead (Full Stack)",
    skills: "MERN Stack, React.js, Node.js, Cloud APIs",
    exp: "6+ Years Exp",
    image: "/images/gaurav-gupta.png",
    bio: "Senior full stack lead mentoring live commercial client web applications and state architecture.",
  },
  {
    name: "Ved Prakash",
    role: "Team Lead (Web Development)",
    skills: "MERN Stack, React.js, Node.js, Cloud APIs",
    exp: "7+ Years Exp",
    image: "/images/ved-prakash.png",
    bio: "Expert in backend enterprise software, ERP/CRM portals, and database optimization.",
  },
  {
    name: "Sumesh Gupta",
    role: "Team Lead (Graphics & UI/UX)",
    skills: "Figma, Adobe Creative Suite, UI/UX Prototyping",
    exp: "5+ Years Exp",
    image: "/images/sumesh-gupta.png",
    bio: "Design lead dedicated to user journey mapping and responsive visual interface design.",
  },
  {
    name: "Abhishek Singh",
    role: "Senior Data Analyst Expert",
    skills: "Python, Power BI, SQL, Machine Learning",
    exp: "5+ Years Exp",
    image: "/images/abhishek-singh.png",
    bio: "Specialist in business analytics, statistical data modeling, and automated pipelines.",
  },
];

const OurExperts = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />
      <FloatingActions />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#000034] to-[#0a1470] text-white py-12 sm:py-16 px-4 sm:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-orange-400 font-bold uppercase text-xs sm:text-sm tracking-widest bg-orange-500/20 px-3 py-1 rounded-full border border-orange-500/30">
            Meet The Mentors
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mt-3 sm:mt-4 mb-3 sm:mb-4">
            Our Expert Faculty & Mentors
          </h1>
          <p className="text-gray-200 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            Learn directly from working software architects, project managers, and tech directors who build real software daily.
          </p>
        </div>
      </div>

      {/* Leadership Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-orange-600 font-bold uppercase text-xs tracking-widest bg-orange-100 px-3 py-1 rounded-full">
            Core Leadership
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000034] mt-2 mb-2">
            The DigiCoders Founders & Directors
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {LEADERSHIP.map((leader, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover mb-4 border-4 border-orange-500 shadow"
              />
              <h3 className="font-bold text-xl text-gray-900">{leader.name}</h3>
              <p className="text-orange-600 font-semibold text-xs sm:text-sm mb-3">{leader.role}</p>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">{leader.bio}</p>
              <span className="text-xs font-semibold text-blue-900 bg-blue-50 px-3 py-1 rounded-lg">
                {leader.skills}
              </span>
            </div>
          ))}
        </div>

        {/* Technical Team Leads */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-orange-600 font-bold uppercase text-xs tracking-widest bg-orange-100 px-3 py-1 rounded-full">
            Technical Team Leads
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000034] mt-2 mb-2">
            Senior Software Engineers & Domain Experts
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERTS.map((expert, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-52 sm:h-56 overflow-hidden bg-gray-900">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover object-top filter brightness-95"
                />
                <span className="absolute bottom-3 right-3 bg-orange-600 text-white font-bold text-xs px-2.5 py-0.5 rounded-full shadow">
                  {expert.exp}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{expert.name}</h3>
                  <p className="text-orange-600 font-semibold text-xs mb-2">{expert.role}</p>
                  <p className="text-gray-600 text-xs leading-relaxed mb-3">{expert.bio}</p>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <span className="text-[11px] font-semibold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-lg inline-block">
                    {expert.skills}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 bg-orange-50 border border-orange-200 rounded-3xl p-6 sm:p-10 text-center max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-[#000034] mb-2">Want to Learn Under These Mentors?</h3>
          <p className="text-gray-600 text-xs sm:text-sm mb-6">
            Join the upcoming batch at DigiCoders Lucknow, Kanpur, or Gorakhpur and get mentored directly.
          </p>
          <Link
            to="/registration"
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 sm:px-8 py-3 rounded-xl shadow-lg transition inline-block text-xs sm:text-sm"
          >
            Register For Next Batch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurExperts;
