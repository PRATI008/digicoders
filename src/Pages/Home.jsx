import React from "react";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import FloatingActions from "../Components/FloatingActions";
import StatsSection from "../Components/StatsSection";
import BatchesSection from "../Components/BatchesSection";
import WhyChooseSection from "../Components/WhyChooseSection";
import CoursesSection from "../Components/CoursesSection";
import DigitalExcellenceSection from "../Components/DigitalExcellenceSection";
import LearningSteps from "../Components/LearningSteps";
import SpecialClassesSection from "../Components/SpecialClassesSection";
import GreenCardSection from "../Components/GreenCardSection";
import PlacementsSection from "../Components/PlacementsSection";
import MediaSpotlightSection from "../Components/MediaSpotlightSection";
import RecruitersSection from "../Components/RecruitersSection";
import TechStackSection from "../Components/TechStackSection";
import ExpertTeamSection from "../Components/ExpertTeamSection";
import TestimonialsSection from "../Components/TestimonialsSection";
import BranchesSection from "../Components/BranchesSection";
import MouSection from "../Components/MouSection";
import EnquirySection from "../Components/EnquirySection";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { FaCircleCheck, FaArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Top Navbar */}
      <Navbar />

      {/* Hero Carousel + Ticker */}
      <Slider />

      {/* Floating Call, WhatsApp & Side Badges */}
      <FloatingActions />

      {/* ================= ABOUT DIGICODERS HERO OVERVIEW ================= */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <span className="inline-block text-orange-600 font-bold uppercase text-xs sm:text-sm tracking-widest bg-orange-100 px-3 py-1 rounded-full">
              Leading IT Institute & Software Firm
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#000034] leading-tight">
              About The DigiCoders Technologies
            </h2>

            <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded"></div>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              <strong className="text-gray-900">DigiCoders Technologies</strong> is recognized as the{" "}
              <strong className="text-orange-600">Best IT Training Institute in Lucknow</strong>, led by a
              dynamic team of seasoned software engineers, architects, and tech entrepreneurs. We don't
              just teach code; we build lifelong engineering careers through{" "}
              <strong>Industrial Training, Summer Internships</strong>, and <strong>Live Project Based Learning</strong>.
            </p>

            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
              As a premier <strong>Software Development Company in Lucknow</strong>, we deliver enterprise
              solutions in Web Development, Mobile Applications, ERPs, and Digital Marketing—ensuring our
              students master current production standards like React, Node, Python, Django, Java Spring
              Boot, PHP Laravel, and Flutter.
            </p>

            {/* Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm font-semibold text-gray-700">
              <div className="flex items-center gap-2">
                <FaCircleCheck className="text-green-500 shrink-0" /> ISO Certified IT Training Company
              </div>
              <div className="flex items-center gap-2">
                <FaCircleCheck className="text-green-500 shrink-0" /> Working Corporate Tech Leads
              </div>
              <div className="flex items-center gap-2">
                <FaCircleCheck className="text-green-500 shrink-0" /> 100% Placement & Interview Support
              </div>
              <div className="flex items-center gap-2">
                <FaCircleCheck className="text-green-500 shrink-0" /> Lifetime Revision Support Green Card
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3 sm:gap-4">
              <Link
                to="/about"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm shadow-md transition flex items-center gap-2"
              >
                Know More About Us <FaArrowRight />
              </Link>
              <Link
                to="/registration"
                className="bg-[#000034] hover:bg-blue-900 text-white font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm shadow-md transition"
              >
                Book Free Demo Class
              </Link>
            </div>
          </div>

          {/* Image using public /hero.jpeg */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/hero.jpeg"
                alt="DigiCoders Technologies Convocation & Team"
                className="w-full h-auto max-h-[460px] object-cover transform hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white pr-4">
                <span className="bg-orange-600 text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-md mb-1 sm:mb-2 inline-block shadow">
                  Aliganj, Lucknow Head Office
                </span>
                <h4 className="font-bold text-sm sm:text-lg">Interactive Coding Classrooms & Events</h4>
              </div>
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:right-6 bg-orange-600 text-white p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl font-black">7+</span>
              <span className="text-[10px] sm:text-xs font-bold leading-tight uppercase">
                Years of <br /> Excellence
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsSection />

      {/* Upcoming & Ongoing Batches Slider */}
      <BatchesSection />

      {/* Why Choose DigiCoders */}
      <WhyChooseSection />

      {/* Courses / Training Programs */}
      <CoursesSection />

      {/* Crafting Digital Excellence for the Future */}
      <DigitalExcellenceSection />

      {/* 4-Step Learning Roadmap */}
      <LearningSteps />

      {/* Special Add-On Classes Section */}
      <SpecialClassesSection />

      {/* DigiCoders Exclusive Green Card Section */}
      <GreenCardSection />

      {/* Placements & Success Stories */}
      <PlacementsSection />

      {/* In Conversation with RJ Karishma & Who We Are */}
      <MediaSpotlightSection />

      {/* Top Recruiters */}
      <RecruitersSection />

      {/* Industry-Ready Technology Stack */}
      <TechStackSection />

      {/* Expert Team of DigiCoders Continuous Sliding Section */}
      <ExpertTeamSection />

      {/* Student Testimonials */}
      <TestimonialsSection />

      {/* Our Branches */}
      <BranchesSection />

      {/* MOUs with Colleges Continuous Sliding Section */}
      <MouSection />

      {/* Interactive Quick Enquiry Form */}
      <EnquirySection />

      {/* Comprehensive City & SEO Footer */}
      <Footer />
    </div>
  );
};

export default Home;
