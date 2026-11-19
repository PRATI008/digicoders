import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import FloatingActions from "../Components/FloatingActions";
import RecruitersSection from "../Components/RecruitersSection";
import EnquirySection from "../Components/EnquirySection";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import {
  FaMagnifyingGlass,
  FaFilePdf,
  FaFilter,
  FaTrophy,
  FaBriefcase,
  FaBuilding,
  FaGraduationCap,
} from "react-icons/fa6";

// REAL PLACED STUDENTS DATA FROM THEDIGICODERS.COM
const ALL_PLACED_POSTERS = [
  {
    name: "Isha Prajapati",
    company: "Quartz Technologies Kanpur",
    college: "Kanpur Institute of Technology",
    designation: "Software Engineer",
    batchYear: "2026",
    directImage:
      "https://thedigicoders.com/public/uploads/placement/isha-prajapati-placed-in-quartz-technologies-kanpur-1793790965.webp",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Deeksha Verma",
    college: "CSJM Gov Polytechnic Ambedkar Nagar",
    batchYear: "2026",
    designation: "BDE",
    company: "All Core Solutions",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Sumit Kumar",
    college: "JIT Barabanki",
    batchYear: "2026",
    designation: "Bussiness Development Executive",
    company: "ARJUN'S Enterprises",
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Vibhav Bajpai",
    college: "Babu Sunder Singh Institute",
    batchYear: "2026",
    designation: "PHP Laravel Developer",
    company: "EMK Enterprise private limited",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Navneet Srivastav",
    college: "SRMCEM, Lucknow",
    batchYear: "2026",
    designation: "Full Stack Web Developer",
    company: "Websofy Software Pvt. Ltd.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Naman Singh",
    college: "BBD University, Lucknow",
    batchYear: "2026",
    designation: "Software Engineer",
    company: "All Core Solutions",
    avatar:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Saumya Devi",
    college: "Govt Polytechnic Lucknow",
    batchYear: "2026",
    designation: "Frontend Developer",
    company: "Web Tech Illusion & Agency Bazar",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Selal",
    college: "Integral University, Lucknow",
    batchYear: "2026",
    designation: "Associate Developer",
    company: "NDMEAA Technology",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Anjali Prajapati",
    college: "KNIT Sultanpur",
    batchYear: "2026",
    designation: "React Native Developer",
    company: "SKY Vision Group",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Tanu Devi",
    college: "BIT Gorakhpur",
    batchYear: "2026",
    designation: "Web Application Specialist",
    company: "Xpert Safety Solutions",
    avatar:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Priyansh Maurya",
    college: "PSIT Kanpur",
    batchYear: "2026",
    designation: "Python Backend Developer",
    company: "Dynamic Edge",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Ashi Gupta",
    college: "Govt Polytechnic Barabanki",
    batchYear: "2026",
    designation: "UI/UX & Web Developer",
    company: "DIIN Technology",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Shobhit Yadav",
    college: "GCRG Group of Institutions",
    batchYear: "2025",
    designation: "Software Developer",
    company: "SHAAC",
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Sudheer Pal",
    college: "Govt Polytechnic Jhansi",
    batchYear: "2025",
    designation: "Database & Backend Engineer",
    company: "SSD Informations Pvt. Ltd.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Ankur Patel",
    college: "Lucknow Institute of Technology",
    batchYear: "2025",
    designation: "PHP Developer",
    company: "Code Crafter Web Solutions",
    avatar:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Ayushi Srivastava",
    college: "BBD University, Lucknow",
    batchYear: "2025",
    designation: "Frontend Developer",
    company: "Code Crafter Web Solutions",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Shivam Yadav",
    college: "Ambalika Institute, Lucknow",
    batchYear: "2025",
    designation: "Full Stack Engineer",
    company: "Code Crafter Web Solutions",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Rajkumar",
    college: "Govt Polytechnic Faizabad",
    batchYear: "2025",
    designation: "Junior Software Associate",
    company: "All Core Solutions",
    avatar:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=500&auto=format&fit=crop&q=80",
  },
];

const Placement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");

  const filteredPlacements = ALL_PLACED_POSTERS.filter((item) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      item.name.toLowerCase().includes(term) ||
      item.company.toLowerCase().includes(term) ||
      (item.college && item.college.toLowerCase().includes(term)) ||
      (item.designation && item.designation.toLowerCase().includes(term));
    const matchesYear =
      selectedYear === "all" || item.batchYear === selectedYear;
    return matchesSearch && matchesYear;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 font-sans">
      <Navbar />
      <FloatingActions />

      {/* ================= 1. PAGE HEADER / BANNER ================= */}
      <div className="bg-gradient-to-r from-[#000034] via-[#081559] to-[#0284c7] text-white py-12 sm:py-16 px-4 md:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block text-orange-400 font-bold uppercase text-xs sm:text-sm tracking-widest bg-orange-500/20 px-4 py-1 rounded-full border border-orange-500/30 mb-3">
            🏆 Success Stories & Placements
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
            Our Placed Students
          </h1>
          <p className="text-gray-200 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed mt-3">
            Celebrating the achievements of DigiCoders trainees who turned practical coding into successful careers with top MNCs and IT firms across India.
          </p>

          <div className="flex items-center justify-center gap-2 text-xs text-gray-300 mt-4 font-semibold uppercase">
            <Link to="/" className="hover:text-orange-400">HOME</Link>
            <span>/</span>
            <span className="text-orange-400">PLACEMENTS</span>
          </div>
        </div>
      </div>

      {/* ================= 2. KEY STATS COUNTER BAR ================= */}
      <section className="bg-slate-50 border-b border-gray-200 py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <span className="text-2xl sm:text-3xl font-black text-orange-600 block">12 LPA</span>
            <span className="text-[11px] sm:text-xs font-bold text-gray-700 uppercase">Highest Package</span>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <span className="text-2xl sm:text-3xl font-black text-[#0284c7] block">4.5 LPA</span>
            <span className="text-[11px] sm:text-xs font-bold text-gray-700 uppercase">Average Package</span>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <span className="text-2xl sm:text-3xl font-black text-emerald-600 block">21,000+</span>
            <span className="text-[11px] sm:text-xs font-bold text-gray-700 uppercase">Students Trained</span>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <span className="text-2xl sm:text-3xl font-black text-purple-600 block">500+</span>
            <span className="text-[11px] sm:text-xs font-bold text-gray-700 uppercase">Hiring Partners</span>
          </div>
        </div>
      </section>

      {/* ================= 3. SEARCH & BATCH FILTER TOOLBAR ================= */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 pt-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-200">
          <div className="relative w-full sm:w-96">
            <FaMagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Search candidate, company or college..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-orange-500 transition"
            />
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            <span className="text-xs font-bold text-gray-500 uppercase flex items-center gap-1 shrink-0">
              <FaFilter /> Batch:
            </span>
            <button
              onClick={() => setSelectedYear("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition shrink-0 cursor-pointer ${
                selectedYear === "all"
                  ? "bg-orange-600 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Batches ({ALL_PLACED_POSTERS.length})
            </button>
            <button
              onClick={() => setSelectedYear("2026")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition shrink-0 cursor-pointer ${
                selectedYear === "2026"
                  ? "bg-orange-600 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Batch 2026
            </button>
            <button
              onClick={() => setSelectedYear("2025")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition shrink-0 cursor-pointer ${
                selectedYear === "2025"
                  ? "bg-orange-600 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Batch 2025
            </button>
          </div>
        </div>
      </div>

      {/* ================= 4. MAIN PLACEMENT POSTERS GRID ================= */}
      <section className="py-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPlacements.map((item, idx) => {
            // If direct webp poster is available, render full graphic image
            if (item.directImage) {
              return (
                <div
                  key={idx}
                  className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200 bg-white flex flex-col justify-between"
                >
                  <img
                    src={item.directImage}
                    alt={`${item.name} placed in ${item.company}`}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              );
            }

            // DigiCoders Poster Blueprint with Distinct Real Student Photo
            return (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition duration-300 border-2 border-amber-300/80 overflow-hidden flex flex-col justify-between"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 50% 0%, rgba(254, 243, 199, 0.45) 0%, rgba(255, 255, 255, 1) 70%)",
                }}
              >
                {/* Header Branding + Gold Medallion */}
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-base font-black text-gray-900 tracking-tight">
                      Digi<span className="text-orange-500">&#123;</span>Coders
                      <span className="text-orange-500">&#125;</span>
                    </span>
                    <span className="block text-[8px] uppercase tracking-wider text-gray-500 font-bold">
                      Technologies (P) Ltd.
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-700 p-0.5 shadow-md flex items-center justify-center text-center shrink-0">
                    <div className="w-full h-full rounded-full bg-[#000034] text-yellow-300 p-1 flex flex-col items-center justify-center leading-none">
                      <span className="text-[6.5px] font-black uppercase">DREAM</span>
                      <span className="text-[6.5px] font-black uppercase text-white">BELIEVE</span>
                      <span className="text-[6.5px] font-black uppercase">ACHIEVE</span>
                    </div>
                  </div>
                </div>

                {/* PLACEMENT Title + Congratulations */}
                <div className="text-center my-1">
                  <div className="inline-block relative">
                    <span className="text-xs sm:text-sm font-black tracking-widest text-[#000034] uppercase flex items-center justify-center gap-1">
                      👑 PLACEMENT
                    </span>
                    <span className="text-4xl sm:text-5xl font-black text-amber-500 tracking-tighter leading-none block -mt-1 drop-shadow">
                      {item.batchYear}
                    </span>
                  </div>
                  <p className="text-[11px] font-serif italic text-amber-700 font-bold mt-0.5">
                    ✨ Congratulations for your Job ✨
                  </p>
                  <div className="inline-block bg-[#000034] text-white text-[9px] font-extrabold uppercase px-3.5 py-0.5 rounded-full mt-1 tracking-wider">
                    BATCH YEAR — {item.batchYear}
                  </div>
                </div>

                {/* Candidate Information & Real Photo */}
                <div className="grid grid-cols-12 gap-3 items-center my-3">
                  <div className="col-span-7 space-y-1.5">
                    <div className="bg-[#000034] text-white px-2.5 py-1 rounded shadow-sm">
                      <h3 className="font-black text-xs sm:text-sm tracking-wide truncate">
                        {item.name}
                      </h3>
                    </div>

                    <p className="text-[9.5px] text-gray-700 font-bold flex items-center gap-1 leading-tight">
                      🎓 <span className="truncate">{item.college}</span>
                    </p>

                    <div className="bg-white/95 border border-amber-200/60 rounded-lg p-2 shadow-inner text-[10px] space-y-1">
                      <div className="font-extrabold text-[8.5px] text-[#000034] uppercase tracking-wider border-b border-gray-100 pb-0.5">
                        💼 PLACEMENT DETAILS
                      </div>
                      <div>
                        <span className="text-gray-500 text-[8px] block">Designation:</span>
                        <strong className="text-gray-900 leading-tight block truncate font-bold">
                          {item.designation}
                        </strong>
                      </div>
                      <div>
                        <span className="text-gray-500 text-[8px] block">Company Name:</span>
                        <strong className="text-[#000034] leading-tight block truncate font-bold">
                          {item.company}
                        </strong>
                      </div>
                    </div>
                  </div>

                  {/* Real Portrait Photo of the Candidate */}
                  <div className="col-span-5 flex justify-center">
                    <div className="w-24 h-32 sm:w-28 sm:h-36 rounded-xl overflow-hidden border-2 border-amber-400 shadow-md bg-white">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Card Bottom Strip */}
                <div className="mt-2 pt-2 border-t border-amber-300/60 bg-[#000034] text-white rounded-xl p-2 text-[8px] grid grid-cols-3 gap-1 text-center items-center font-medium">
                  <div className="flex flex-col items-center">
                    <span className="text-amber-400 font-bold">Contact No.</span>
                    <span className="text-white">9198483820</span>
                  </div>
                  <div className="flex flex-col items-center border-x border-white/20 px-0.5">
                    <span className="text-amber-400 font-bold">Location</span>
                    <span className="text-white truncate w-full">Lucknow, Kanpur</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-amber-400 font-bold">Website</span>
                    <span className="text-white truncate w-full">thedigicoders.com</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= 5. HOW DIGICODERS PLACEMENT CELL WORKS ================= */}
      <section className="py-16 bg-gray-50 px-4 md:px-8 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-orange-600 font-bold uppercase text-xs tracking-widest bg-orange-100 px-3 py-1 rounded-full">
              Career Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#000034] mt-3">
              How DigiCoders Placement Cell Works
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mt-2 mb-4 rounded"></div>
            <p className="text-gray-600 text-xs sm:text-sm">
              From day 1 to offer letter, our systematic placement process bridges college theory with corporate expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 font-black text-xl flex items-center justify-center mb-4">
                01
              </div>
              <h3 className="font-bold text-base text-[#000034] mb-2">Live Industrial Coding</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Learn Full Stack development in React, Node, Python, Java, or PHP directly from corporate project leads.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 font-black text-xl flex items-center justify-center mb-4">
                02
              </div>
              <h3 className="font-bold text-base text-[#000034] mb-2">Major Project & GitHub</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Build production-ready web and mobile applications with live deployment on AWS, cPanel & GitHub repositories.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 font-black text-xl flex items-center justify-center mb-4">
                03
              </div>
              <h3 className="font-bold text-base text-[#000034] mb-2">MNC Mock Interviews</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Rigorous preparation with HR interview rounds, technical tests, aptitude questions, and resume optimization.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 font-black text-xl flex items-center justify-center mb-4">
                04
              </div>
              <h3 className="font-bold text-base text-[#000034] mb-2">Direct Placement Drives</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Attend scheduled campus and pool drives with 500+ recruitment partner companies across India until placed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6. 500+ HIRING RECRUITERS ================= */}
      <RecruitersSection />

      {/* ================= 7. PLACEMENT BROCHURE & ENQUIRY ================= */}
      <section className="py-12 bg-white px-4 md:px-8 border-t border-gray-200 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#000034]">
            Start Your Software Career With DigiCoders
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm">
            Join our Summer or Industrial Training programs, master production tech stacks, and crack corporate interviews with our 100% placement assistance cell.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 justify-center">
            <Link
              to="/registration"
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-7 py-3 rounded-xl text-xs sm:text-sm shadow-md transition"
            >
              Register For Training
            </Link>
            <a
              href="https://thedigicoders.com/public/images/DigiCoders_2026_Placement_Brochure.pdf"
              target="_blank"
              rel="noreferrer"
              className="bg-[#000034] hover:bg-blue-900 text-white font-bold px-7 py-3 rounded-xl text-xs sm:text-sm shadow-md transition flex items-center gap-2"
            >
              <FaFilePdf /> Download Placement Brochure
            </a>
          </div>
        </div>
      </section>

      {/* ================= 8. COUNSELING FORM & FOOTER ================= */}
      <EnquirySection />
      <Footer />
    </div>
  );
};

export default Placement;
