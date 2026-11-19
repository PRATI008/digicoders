import React, { useState, useEffect } from "react";
import { FaPhone, FaWhatsapp, FaGraduationCap, FaChevronUp } from "react-icons/fa6";
import { BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ================= LEFT FIXED TAB: ASSESSMENT PORTAL =================
          Exact styling matching the screenshot:
          - Bright Cyan/Sky Blue #0084c7
          - Fixed to left edge (left: 0)
          - Rotated 90 degrees CCW (-90deg)
          - Icon on the left (which turns bottom/top in rotation)
          - Uppercase bold white text with tracking
      */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 pointer-events-auto">
        <a
          href="https://thedigicoders.com"
          target="_blank"
          rel="noreferrer"
          className="bg-[#0082c8] hover:bg-[#006ea8] text-white font-extrabold text-[11px] tracking-wider py-2.5 px-4 shadow-xl flex items-center gap-2 rounded-t-lg transition duration-200 border-t border-x border-white/20 select-none whitespace-nowrap"
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "left bottom",
            marginLeft: "0px",
          }}
          title="DigiCoders Assessment Portal"
        >
          {/* Note icon with pencil matching screenshot */}
          <BsPencilSquare className="text-sm shrink-0" />
          <span>ASSESSMENT PORTAL</span>
        </a>
      </div>

      {/* ================= RIGHT FIXED TAB: REGISTER FOR TRAINING =================
          Exact styling matching the screenshot:
          - Deep Orange/Coral #ea580c
          - Fixed to right edge (right: 0)
          - Rotated 90 degrees CW (90deg)
          - Icon + REGISTER FOR TRAINING text
          - Rounded top edges facing inwards
      */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 pointer-events-auto">
        <Link
          to="/registration"
          className="bg-[#f25922] hover:bg-[#d94814] text-white font-extrabold text-[11px] tracking-wider py-2.5 px-4 shadow-xl flex items-center gap-2 rounded-t-lg transition duration-200 border-t border-x border-white/20 select-none whitespace-nowrap"
          style={{
            transform: "rotate(90deg)",
            transformOrigin: "right bottom",
            marginRight: "0px",
          }}
          title="Register For IT Training"
        >
          <FaGraduationCap className="text-sm shrink-0" />
          <span>REGISTER FOR TRAINING</span>
        </Link>
      </div>

      {/* ================= FLOATING CALL & WHATSAPP (Bottom-Left) ================= */}
      <div className="fixed bottom-6 left-5 z-50 flex flex-col gap-3">
        {/* Phone Call Button */}
        <a
          href="tel:+919198483820"
          className="w-12 h-12 bg-[#0284c7] hover:bg-[#0369a1] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 border-2 border-white/80"
          title="Call Digicoders: +91 9198483820"
          aria-label="Call DigiCoders Helpline"
        >
          <FaPhone className="text-lg" />
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919198483820?text=Hello%20DigiCoders,%20I%20am%20interested%20in%20IT%20Training%20Batches."
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 bg-[#22c55e] hover:bg-[#16a34a] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 border-2 border-white/80"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-2xl" />
        </a>
      </div>

      {/* ================= FLOATING SCROLL-TO-TOP & CHAT (Bottom-Right) ================= */}
      <div className="fixed bottom-6 right-5 z-50 flex flex-col items-center gap-3">
        {/* Scroll To Top Button (Green square with rounded corners matching screenshot) */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 bg-[#059669] hover:bg-[#047857] text-white rounded-lg flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            title="Scroll To Top"
            aria-label="Scroll to top"
          >
            <FaChevronUp className="text-lg" />
          </button>
        )}

        {/* Orange Circular Chatbot Avatar Button (matching screenshot bottom right) */}
        <button
          onClick={() => {
            const el = document.getElementById("enquiry-section");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="w-13 h-13 bg-[#f59e0b] hover:bg-[#d97706] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 border-2 border-white/80 cursor-pointer"
          title="DigiCoders Counseling Help"
          aria-label="DigiCoders Counseling Help"
        >
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center relative shadow-inner">
            <span className="w-3.5 h-2 bg-[#f59e0b] rounded-b-full"></span>
          </div>
        </button>
      </div>
    </>
  );
};

export default FloatingActions;
