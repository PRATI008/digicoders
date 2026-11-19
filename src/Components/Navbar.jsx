import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaFilePdf,
  FaCertificate,
  FaPen,
  FaRightToBracket,
  FaPhone,
  FaBars,
  FaXmark,
  FaChevronDown,
  FaGlobe,
} from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const location = useLocation();

  const toggleSubmenu = (menu) => {
    setMobileSubmenu(mobileSubmenu === menu ? null : menu);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setMobileSubmenu(null);
  };

  return (
    <header className="w-full font-sans">
      {/* ================= TOP BAR (Normal Scroll, Not Fixed) ================= */}
      <div className="bg-[#121c2b] text-white text-[12px] md:text-[13px] py-1.5 px-3 sm:px-6 md:px-8 flex flex-wrap items-center justify-between gap-2 border-b border-gray-800">
        {/* Left Section: Phone & PDF Brochures */}
        <div className="flex items-center flex-wrap gap-2.5 sm:gap-4 font-normal">
          {/* Phone */}
          <a
            href="tel:+919198483820"
            className="flex items-center gap-1.5 text-orange-400 hover:text-orange-300 font-semibold transition"
          >
            <MdPhoneIphone className="text-orange-500 text-sm" />
            <span>+91 9198483820</span>
          </a>

          {/* Brochures (Desktop) */}
          <div className="hidden lg:flex items-center gap-3.5 text-gray-200">
            <a
              href="https://thedigicoders.com/public/images/DigiCoders_2026_Company_Profile.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-orange-400 transition"
            >
              <FaFilePdf className="text-green-500 text-xs" /> Company Profile
            </a>
            <a
              href="https://thedigicoders.com/public/images/DigiCoders_2026_Training_Brochure.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-orange-400 transition"
            >
              <FaFilePdf className="text-green-500 text-xs" /> Training Brochure
            </a>
            <a
              href="https://thedigicoders.com/public/images/DigiCoders_2026_Placement_Brochure.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-orange-400 transition"
            >
              <FaFilePdf className="text-green-500 text-xs" /> Placement Brochure
            </a>
          </div>
        </div>

        {/* Right Section: Exact 4 Action Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* 1. Verify Certificate (Dark Slate Blue) */}
          <Link
            to="/verify-certificate"
            className="bg-[#334155] hover:bg-[#475569] text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded text-[11px] sm:text-xs font-medium flex items-center gap-1.5 shadow-sm transition"
          >
            <FaCertificate className="text-yellow-400 text-xs" /> Verify Certificate
          </Link>

          {/* 2. Register For Training (Orange Red) */}
          <Link
            to="/registration"
            className="bg-[#dc4c18] hover:bg-[#c23d0e] text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded text-[11px] sm:text-xs font-medium flex items-center gap-1.5 shadow-sm transition"
          >
            <FaPen className="text-white text-xs" /> Register For Training
          </Link>

          {/* 3. Student Login (Vibrant Emerald Green) */}
          <a
            href="https://thedigicoders.com"
            target="_blank"
            rel="noreferrer"
            className="bg-[#059669] hover:bg-[#047857] text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded text-[11px] sm:text-xs font-medium flex items-center gap-1.5 shadow-sm transition"
          >
            <FaRightToBracket className="text-white text-xs" /> Student Login
          </a>

          {/* 4. Development Website (Deep Sky Blue) */}
          <a
            href="https://digicoders.in"
            target="_blank"
            rel="noreferrer"
            className="hidden xs:flex bg-[#0284c7] hover:bg-[#0369a1] text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded text-[11px] sm:text-xs font-medium items-center gap-1.5 shadow-sm transition"
          >
            <FaGlobe className="text-white text-xs" /> Development Website
          </a>
        </div>
      </div>

      {/* ================= MAIN NAVBAR (Sticky / Fixed to Top on Scroll) ================= */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 px-3 sm:px-6 md:px-8 py-2.5 flex items-center justify-between shadow-md">
        {/* EXACT LOGO (Digi{Coders}) */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="DigiCoders Technologies"
            className="h-10 sm:h-12 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/logo1.png";
            }}
          />
        </Link>

        {/* EXACT DESKTOP NAV LINKS:
            HOME | ABOUT | OUR BRANCHES | TRAININGS | REGISTRATION | GALLERY | PLACEMENTS | CONTACT US | BLOGS | OUR SERVICES
        */}
        <div className="hidden xl:flex items-center space-x-5 text-[12.5px] font-bold tracking-wide text-gray-800 uppercase">
          {/* HOME */}
          <Link
            to="/"
            className={`py-1 hover:text-orange-600 transition border-b-2 ${location.pathname === "/"
              ? "text-orange-600 border-orange-600"
              : "border-transparent"
              }`}
          >
            HOME
          </Link>

          {/* ABOUT DROPDOWN */}
          <div className="relative group py-2">
            <Link
              to="/about"
              className={`flex items-center gap-1 hover:text-orange-600 transition ${location.pathname.startsWith("/about") || location.pathname === "/our-experts"
                ? "text-orange-600"
                : ""
                }`}
            >
              ABOUT <FaChevronDown className="text-[9px]" />
            </Link>
            <div className="absolute left-0 top-full hidden group-hover:block w-60 bg-white shadow-xl rounded-b-lg border-t-2 border-orange-600 py-2 z-50 text-[12px] normal-case">
              <Link to="/about" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-600">
                About Us
              </Link>
              <Link to="/our-experts" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-600">
                Our Experts & Mentors
              </Link>
              <Link to="/about#appreciation" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-600">
                Appreciation Letters
              </Link>
              <Link to="/about#mou" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-600">
                MOU With Colleges
              </Link>
              <Link to="/about#awards" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-600">
                Certification & Achievements
              </Link>
            </div>
          </div>

          {/* OUR BRANCHES DROPDOWN */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1 hover:text-orange-600 transition cursor-pointer uppercase">
              OUR BRANCHES <FaChevronDown className="text-[9px]" />
            </button>
            <div className="absolute left-0 top-full hidden group-hover:block w-64 bg-white shadow-xl rounded-b-lg border-t-2 border-orange-600 py-2 z-50 text-[12px] normal-case">
              <Link to="/branches/lucknow" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-600">
                Lucknow Head Office (Aliganj)
              </Link>
              <Link to="/branches/kanpur" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-600">
                Kanpur Branch (Yashoda Nagar)
              </Link>
              <Link to="/branches/gorakhpur" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-600">
                Gorakhpur Branch (BIT GIDA)
              </Link>
            </div>
          </div>

          {/* TRAININGS DROPDOWN */}
          <div className="relative group py-2">
            <Link
              to="/trainings"
              className={`flex items-center gap-1 hover:text-orange-600 transition ${location.pathname.startsWith("/training") ? "text-orange-600" : ""
                }`}
            >
              TRAININGS <FaChevronDown className="text-[9px]" />
            </Link>
            <div className="absolute left-0 top-full hidden group-hover:block w-72 bg-white shadow-xl rounded-b-lg border-t-2 border-orange-600 py-2 z-50 text-[12px] normal-case">
              <Link to="/training/summer" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-600">
                Summer Training 2026
              </Link>
              <Link to="/training/industrial" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-600">
                Industrial Training (6 Months / 6 Weeks)
              </Link>
              <Link to="/training/apprenticeship" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-600">
                Apprenticeship Training
              </Link>
              <Link to="/training/vocational" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-600">
                Vocational Training
              </Link>
              <Link to="/training/winter" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-600">
                Winter Training
              </Link>
              <Link to="/training/internship" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-600">
                Internship Program
              </Link>
            </div>
          </div>

          {/* REGISTRATION */}
          <Link
            to="/registration"
            className={`py-1 hover:text-orange-600 transition border-b-2 ${location.pathname === "/registration"
              ? "text-orange-600 border-orange-600"
              : "border-transparent"
              }`}
          >
            REGISTRATION
          </Link>

          {/* GALLERY */}
          <Link
            to="/gallery"
            className={`py-1 hover:text-orange-600 transition border-b-2 ${location.pathname === "/gallery"
              ? "text-orange-600 border-orange-600"
              : "border-transparent"
              }`}
          >
            GALLERY
          </Link>

          {/* PLACEMENTS (Highlighted with Orange) */}
          <Link
            to="/placement"
            className={`py-1 text-orange-600 hover:text-orange-700 transition border-b-2 ${location.pathname === "/placement"
              ? "border-orange-600 font-extrabold"
              : "border-orange-500 font-extrabold"
              }`}
          >
            PLACEMENTS
          </Link>

          {/* CONTACT US */}
          <Link
            to="/contact"
            className={`py-1 hover:text-orange-600 transition border-b-2 ${location.pathname === "/contact"
              ? "text-orange-600 border-orange-600"
              : "border-transparent"
              }`}
          >
            CONTACT US
          </Link>

          {/* BLOGS */}
          <Link
            to="/blogs"
            className={`py-1 hover:text-orange-600 transition border-b-2 ${location.pathname === "/blogs"
              ? "text-orange-600 border-orange-600"
              : "border-transparent"
              }`}
          >
            BLOGS
          </Link>

          {/* OUR SERVICES */}
          <Link
            to="/services"
            className={`py-1 hover:text-orange-600 transition border-b-2 ${location.pathname === "/services"
              ? "text-orange-600 border-orange-600"
              : "border-transparent"
              }`}
          >
            OUR SERVICES
          </Link>
        </div>

        {/* MOBILE HAMBURGER TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden text-2xl text-gray-800 p-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </nav>

      {/* ================= MOBILE MENU DRAWER ================= */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-gray-200 px-4 py-4 space-y-2 text-sm font-semibold max-h-[80vh] overflow-y-auto shadow-xl uppercase">
          <Link
            to="/"
            onClick={closeMenu}
            className="block py-2 text-gray-800 hover:text-orange-600 border-b border-gray-100"
          >
            HOME
          </Link>

          {/* ABOUT SUBMENU */}
          <div className="border-b border-gray-100">
            <button
              onClick={() => toggleSubmenu("about")}
              className="w-full flex justify-between items-center py-2 text-gray-800 hover:text-orange-600 text-left uppercase"
            >
              ABOUT <FaChevronDown className="text-xs" />
            </button>
            {mobileSubmenu === "about" && (
              <div className="pl-4 pb-2 space-y-1 text-xs normal-case text-gray-600">
                <Link to="/about" onClick={closeMenu} className="block py-1.5 hover:text-orange-600">
                  About Us
                </Link>
                <Link to="/our-experts" onClick={closeMenu} className="block py-1.5 hover:text-orange-600">
                  Our Experts
                </Link>
                <Link to="/about#mou" onClick={closeMenu} className="block py-1.5 hover:text-orange-600">
                  MOU With Colleges
                </Link>
              </div>
            )}
          </div>

          {/* BRANCHES SUBMENU */}
          <div className="border-b border-gray-100">
            <button
              onClick={() => toggleSubmenu("branches")}
              className="w-full flex justify-between items-center py-2 text-gray-800 hover:text-orange-600 text-left uppercase"
            >
              OUR BRANCHES <FaChevronDown className="text-xs" />
            </button>
            {mobileSubmenu === "branches" && (
              <div className="pl-4 pb-2 space-y-1 text-xs normal-case text-gray-600">
                <Link to="/branches/lucknow" onClick={closeMenu} className="block py-1.5 hover:text-orange-600">
                  Lucknow Head Office
                </Link>
                <Link to="/branches/kanpur" onClick={closeMenu} className="block py-1.5 hover:text-orange-600">
                  Kanpur Branch
                </Link>
                <Link to="/branches/gorakhpur" onClick={closeMenu} className="block py-1.5 hover:text-orange-600">
                  Gorakhpur Branch
                </Link>
              </div>
            )}
          </div>

          {/* TRAININGS SUBMENU */}
          <div className="border-b border-gray-100">
            <button
              onClick={() => toggleSubmenu("trainings")}
              className="w-full flex justify-between items-center py-2 text-gray-800 hover:text-orange-600 text-left uppercase"
            >
              TRAININGS <FaChevronDown className="text-xs" />
            </button>
            {mobileSubmenu === "trainings" && (
              <div className="pl-4 pb-2 space-y-1 text-xs normal-case text-gray-600">
                <Link to="/training/summer" onClick={closeMenu} className="block py-1.5 hover:text-orange-600">
                  Summer Training 2026
                </Link>
                <Link to="/training/industrial" onClick={closeMenu} className="block py-1.5 hover:text-orange-600">
                  Industrial Training
                </Link>
                <Link to="/training/apprenticeship" onClick={closeMenu} className="block py-1.5 hover:text-orange-600">
                  Apprenticeship
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/registration"
            onClick={closeMenu}
            className="block py-2 text-gray-800 hover:text-orange-600 border-b border-gray-100"
          >
            REGISTRATION
          </Link>
          <Link
            to="/gallery"
            onClick={closeMenu}
            className="block py-2 text-gray-800 hover:text-orange-600 border-b border-gray-100"
          >
            GALLERY
          </Link>
          <Link
            to="/placement"
            onClick={closeMenu}
            className="block py-2 text-orange-600 font-extrabold border-b border-gray-100"
          >
            PLACEMENTS
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="block py-2 text-gray-800 hover:text-orange-600 border-b border-gray-100"
          >
            CONTACT US
          </Link>
          <Link
            to="/blogs"
            onClick={closeMenu}
            className="block py-2 text-gray-800 hover:text-orange-600 border-b border-gray-100"
          >
            BLOGS
          </Link>
          <Link
            to="/services"
            onClick={closeMenu}
            className="block py-2 text-gray-800 hover:text-orange-600"
          >
            OUR SERVICES
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
