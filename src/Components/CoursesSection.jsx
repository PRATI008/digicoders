import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaClock,
  FaCircleCheck,
  FaArrowRight,
  FaFilePdf,
} from "react-icons/fa6";

const COURSES_DATA = [
  {
    id: 1,
    title: "MERN Stack Web Development",
    category: "web",
    duration: "45 Days / 6 Months",
    level: "Beginner to Advanced",
    badge: "Trending #1",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "/images/digicoders-bach-1.jpeg",
    description:
      "Complete industry-standard JavaScript stack. Master single page applications, RESTful APIs, JWT Authentication, and deploy full scale web apps.",
    features: ["100% Practical Industrial Coding", "Live Client Projects on GitHub", "Interview Preparation & Green Card"],
  },
  {
    id: 2,
    title: "Python Full Stack & Django",
    category: "python",
    duration: "45 Days / 3 Months",
    level: "All Engineering Branches",
    badge: "Most Enrolled",
    technologies: ["Python", "Django", "MySQL", "REST APIs", "AI/ML Basics"],
    image: "/images/back.jpg",
    description:
      "From basic logic, data structures, and OOPs concepts to building robust MVC web applications with Django framework and database integration.",
    features: ["Core & Advanced Python Modules", "Database Connectivity & CRUD", "Major Project Report Included"],
  },
  {
    id: 3,
    title: "Java Full Stack & Spring Boot",
    category: "java",
    duration: "45 Days / 6 Months",
    level: "Corporate Enterprise",
    badge: "Top Placements",
    technologies: ["Core Java", "Spring Boot", "Hibernate", "Microservices", "MySQL"],
    image: "/images/lucknow-head-office-digicoders.jpg",
    description:
      "Enterprise software standard. Learn object-oriented architecture, multi-threading, Spring Boot microservices, and database ORM.",
    features: ["Enterprise Architecture", "Banking & ERP System Design", "MNC Interview Questions Prep"],
  },
  {
    id: 4,
    title: "PHP & Laravel Framework",
    category: "web",
    duration: "45 Days / 3 Months",
    level: "Beginner Friendly",
    badge: "Quick Hiring",
    technologies: ["PHP 8.x", "Laravel", "MySQL", "AJAX", "Payment Gateway"],
    image: "/images/SyllabusGallery/15august.jpeg",
    description:
      "Build dynamic e-commerce, CRM systems, school management, and web portals using PHP and the powerful Laravel framework.",
    features: ["Full ERP Development", "Payment & SMS API Integration", "Live cPanel / Cloud Hosting"],
  },
  {
    id: 5,
    title: "Flutter & Android Mobile Apps",
    category: "app",
    duration: "45 Days / 3 Months",
    level: "Cross-Platform",
    badge: "Hot Career",
    technologies: ["Flutter", "Dart", "Android XML", "Firebase", "REST APIs"],
    image: "/hero.jpeg",
    description:
      "Build native performance iOS and Android apps with a single codebase using Google Flutter framework and cloud database.",
    features: ["Google Play Store Publishing", "Realtime Firebase Authentication", "Live Utility Mobile App"],
  },
  {
    id: 6,
    title: "AI, Machine Learning & Data Analytics",
    category: "data",
    duration: "3 Months / 6 Months",
    level: "Advanced Track",
    badge: "Future Skill",
    technologies: ["Python", "Pandas", "NumPy", "Power BI", "Scikit-Learn"],
    image: "/images/SyllabusGallery/digicoder.jpeg",
    description:
      "Analyze massive data sets, create interactive Power BI dashboards, and build predictive machine learning models.",
    features: ["Data Cleaning & Visualization", "Business Intelligence Dashboards", "Statistical Modeling"],
  },
];

const CoursesSection = () => {
  const [filter, setFilter] = useState("all");

  const filteredCourses =
    filter === "all"
      ? COURSES_DATA
      : COURSES_DATA.filter((c) => c.category === filter);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <span className="text-orange-600 font-bold uppercase text-xs sm:text-sm tracking-widest bg-orange-100 px-3 py-1 rounded-full">
          Industry Oriented Curriculum
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#000034] mt-2 sm:mt-3 mb-2">
          Our Job-Oriented Training Programs & Courses
        </h2>
        <div className="w-16 sm:w-20 h-1 bg-orange-500 mx-auto rounded"></div>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2">
          Designed by Er. Himanshu Kashyap & Er. Gopal Singh to match corporate recruitment standards across India.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
        {[
          { key: "all", label: "All Courses" },
          { key: "web", label: "Web (MERN / PHP)" },
          { key: "python", label: "Python & AI" },
          { key: "java", label: "Java Enterprise" },
          { key: "app", label: "Mobile Apps (Flutter)" },
          { key: "data", label: "Data Analytics" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`px-4 sm:px-6 py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
              filter === tab.key
                ? "bg-orange-600 text-white shadow-md shadow-orange-500/30"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group"
          >
            {/* Course Thumbnail using local public images */}
            <div className="relative h-48 sm:h-52 overflow-hidden bg-gray-900">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
              />
              <span className="absolute top-3 right-3 bg-orange-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow">
                {course.badge}
              </span>
              <span className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded flex items-center gap-1.5">
                <FaClock className="text-orange-400" /> {course.duration}
              </span>
            </div>

            {/* Course Details */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-orange-600 transition mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed line-clamp-2">
                  {course.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {course.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-50 text-blue-700 text-[11px] font-semibold px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Features Bullet List */}
                <ul className="space-y-1.5 mb-6 text-xs text-gray-700 font-medium">
                  {course.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <FaCircleCheck className="text-green-500 text-xs shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                <Link
                  to="/registration"
                  className="flex-1 text-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm shadow transition"
                >
                  Register Now
                </Link>
                <a
                  href="https://thedigicoders.com/public/images/DigiCoders_2026_Training_Brochure.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl border border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-600 transition flex items-center justify-center gap-1.5 text-xs font-semibold"
                  title="Download Syllabus PDF"
                >
                  <FaFilePdf className="text-red-500 text-sm" /> Syllabus
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Courses Callout */}
      <div className="mt-12 text-center">
        <Link
          to="/registration"
          className="inline-flex items-center gap-2 bg-[#000034] hover:bg-blue-900 text-white font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm shadow-lg transition"
        >
          Looking for Custom College Syllabus? Register With Us <FaArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default CoursesSection;
