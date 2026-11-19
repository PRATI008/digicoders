import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import FloatingActions from "../Components/FloatingActions";
import EnquirySection from "../Components/EnquirySection";
import Footer from "../Components/Footer";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaDiamondTurnRight,
  FaCheck,
} from "react-icons/fa6";

const BRANCH_DATA = {
  lucknow: {
    name: "Lucknow Head Office",
    subtitle: "DigiCoders Technologies Corporate Headquarters & Main Training Campus",
    address: "2nd Floor, B-36, Sector O, Near Ram Ram Bank Chauraha, Aliganj, Lucknow, Uttar Pradesh 226021",
    phone: "+91 9198483820 / +91 6394296297",
    email: "info@thedigicoders.com",
    mapLink: "https://maps.google.com/?q=DigiCoders+Technologies+Lucknow",
    image: "/images/lucknow-head-office-digicoders.jpg",
    facilities: [
      "4 State-of-the-art Computer Labs with 150+ Workstations",
      "Dedicated High-Speed Gigabit Fiber Internet Connection",
      "Individual Systems for Every Student During Lab Hours",
      "Centralized Air Conditioning & Ergonomic Seating",
      "Library, Conference Room & Presentation Hall",
      "Green Card Doubt Clearing & Lifetime Revision Hub",
    ],
  },
  kanpur: {
    name: "Kanpur Branch Office",
    subtitle: "Premier IT Training & Industrial Internship Hub for Central UP",
    address: "340, S-Block, Near Annapoorna Hospital, Shehnai Chauraha, Yashoda Nagar, Kanpur, Uttar Pradesh 208011",
    phone: "+91 9198483820",
    email: "kanpur@thedigicoders.com",
    mapLink: "https://maps.google.com/?q=DigiCoders+Technologies+Kanpur",
    image: "/images/digicoders-bach-1.jpeg",
    facilities: [
      "Smart Interactive Coding Classrooms",
      "High Configuration Labs for Full Stack & Mobile App Development",
      "Experienced Onsite Tech Leads and Mentors",
      "Direct Connectivity from Kanpur Central Station & Metro",
      "Mock Interview Rooms & Personality Development Hub",
      "Placement Cell Assistance & College Tie-ups",
    ],
  },
  gorakhpur: {
    name: "Gorakhpur Branch Office",
    subtitle: "Advanced Tech Learning Center Inside Buddha Institute of Technology (BIT)",
    address: "Inside Main Building, Buddha Institute of Technology (BIT), CL-1, Sector-7, GIDA, Gorakhpur, UP 273209",
    phone: "+91 9198483820",
    email: "gorakhpur@thedigicoders.com",
    mapLink: "https://maps.google.com/?q=Buddha+Institute+of+Technology+GIDA+Gorakhpur",
    image: "/images/SyllabusGallery/digicoder.jpeg",
    facilities: [
      "Campus Incubator & Center of Excellence in GIDA Gorakhpur",
      "Joint College Hackathon & Coding Bootcamp Infrastructure",
      "Industry Grade Live Project Mentorship",
      "Hostel & Campus Facilities Support for Outstation Trainees",
      "Direct Pool Placement Drives for Purvanchal Students",
    ],
  },
};

const BranchDetails = () => {
  const { slug } = useParams();
  const currentKey = slug && BRANCH_DATA[slug] ? slug : "lucknow";
  const branch = BRANCH_DATA[currentKey];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 overflow-x-hidden">
      <Navbar />
      <FloatingActions />

      {/* Banner */}
      <div className="bg-gradient-to-r from-[#000034] to-[#0a1264] text-white py-12 sm:py-16 px-4 sm:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-orange-400 font-bold uppercase text-xs sm:text-sm tracking-widest bg-orange-500/20 px-3 py-1 rounded-full border border-orange-500/30">
            DigiCoders Branch Campus
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mt-3 sm:mt-4 mb-3 sm:mb-4">
            {branch.name}
          </h1>
          <p className="text-gray-200 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            {branch.subtitle}
          </p>
        </div>
      </div>

      {/* Branch Navigation Pills */}
      <div className="bg-gray-100 border-b border-gray-200 sticky top-[68px] sm:top-[76px] z-30 px-4">
        <div className="max-w-7xl mx-auto flex justify-center flex-wrap py-2.5 gap-2 sm:gap-3 text-xs sm:text-sm font-bold">
          <Link
            to="/branches/lucknow"
            className={`px-4 sm:px-5 py-2 rounded-xl transition ${
              currentKey === "lucknow" ? "bg-orange-600 text-white shadow" : "bg-white text-gray-700 hover:bg-gray-200"
            }`}
          >
            Lucknow Head Office
          </Link>
          <Link
            to="/branches/kanpur"
            className={`px-4 sm:px-5 py-2 rounded-xl transition ${
              currentKey === "kanpur" ? "bg-orange-600 text-white shadow" : "bg-white text-gray-700 hover:bg-gray-200"
            }`}
          >
            Kanpur Branch
          </Link>
          <Link
            to="/branches/gorakhpur"
            className={`px-4 sm:px-5 py-2 rounded-xl transition ${
              currentKey === "gorakhpur" ? "bg-orange-600 text-white shadow" : "bg-white text-gray-700 hover:bg-gray-200"
            }`}
          >
            Gorakhpur Branch
          </Link>
        </div>
      </div>

      {/* Content */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000034]">
              Campus Infrastructure & Features
            </h2>
            <div className="w-16 h-1 bg-orange-500 rounded"></div>

            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Our {branch.name} is designed with a modern corporate workplace aesthetic so trainees
              experience an authentic IT office environment from day one of their training.
            </p>

            <div className="space-y-3 pt-2">
              {branch.facilities.map((fac, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <FaCheck className="text-green-500 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">{fac}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-3 sm:gap-4">
              <Link
                to="/registration"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow transition"
              >
                Enroll for {branch.name}
              </Link>
              <a
                href={branch.mapLink}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow transition flex items-center gap-2"
              >
                <FaDiamondTurnRight /> Get GPS Directions
              </a>
            </div>
          </div>

          {/* Branch Contact Details Card */}
          <div className="lg:col-span-5 space-y-6 mt-4 lg:mt-0">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">
              <img src={branch.image} alt={branch.name} className="w-full h-52 sm:h-64 object-cover" />
              <div className="p-5 sm:p-6 bg-white space-y-4">
                <div className="flex items-start gap-3">
                  <FaLocationDot className="text-orange-600 text-lg shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-gray-900 text-sm">Center Address:</h5>
                    <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{branch.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t">
                  <FaPhone className="text-blue-600 text-base shrink-0" />
                  <div>
                    <h5 className="font-bold text-gray-900 text-sm">Helpline:</h5>
                    <a href="tel:+919198483820" className="text-xs text-orange-600 font-bold">
                      {branch.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t">
                  <FaEnvelope className="text-green-600 text-base shrink-0" />
                  <div>
                    <h5 className="font-bold text-gray-900 text-sm">Email:</h5>
                    <span className="text-xs text-gray-600">{branch.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnquirySection />
      <Footer />
    </div>
  );
};

export default BranchDetails;
