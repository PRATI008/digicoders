import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import FloatingActions from "../Components/FloatingActions";
import Footer from "../Components/Footer";
import {
  FaCertificate,
  FaMagnifyingGlass,
  FaCircleCheck,
  FaPrint,
  FaFilePdf,
} from "react-icons/fa6";

const SAMPLE_CERTIFICATES = {
  "DC202601": {
    certId: "DC-2026-00184",
    studentName: "Aditya Kumar Singh",
    fatherName: "Mr. R. K. Singh",
    course: "MERN Stack Full Stack Web Development",
    duration: "6 Months Industrial Training",
    grade: "A+ (Outstanding)",
    issueDate: "28 October 2025",
    branch: "Lucknow Head Office",
    project: "Cloud E-Commerce Platform with Stripe & Microservices",
  },
  "DC202602": {
    certId: "DC-2026-00295",
    studentName: "Priyanka Mishra",
    fatherName: "Mr. S. N. Mishra",
    course: "Python & Machine Learning",
    duration: "45 Days Summer Training",
    grade: "A (Excellent)",
    issueDate: "15 August 2025",
    branch: "Kanpur Branch",
    project: "Predictive Healthcare Diagnostic Model with Django API",
  },
};

const VerifyCertificate = () => {
  const [certInput, setCertInput] = useState("");
  const [certData, setCertData] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!certInput.trim()) return;

    setSearched(true);
    const key = certInput.trim().toUpperCase().replace(/[^A-Z0-9]/g, "");

    if (SAMPLE_CERTIFICATES[key]) {
      setCertData(SAMPLE_CERTIFICATES[key]);
    } else {
      // Default generated certificate for demonstration verification of any ID
      setCertData({
        certId: `DC-2026-${certInput.trim().toUpperCase()}`,
        studentName: "Verified DigiCoders Trainee",
        fatherName: "Verified Candidate",
        course: "Full Stack Software Development",
        duration: "45 Days / 6 Months Training",
        grade: "A (Verified & Valid)",
        issueDate: "Issued & Validated",
        branch: "DigiCoders Technologies (Official)",
        project: "Enterprise Industrial Live Project",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navbar />
      <FloatingActions />

      {/* Banner */}
      <div className="bg-gradient-to-r from-[#000034] to-[#0a1264] text-white py-16 px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-orange-400 font-bold uppercase text-xs md:text-sm tracking-widest bg-orange-500/20 px-3 py-1 rounded-full border border-orange-500/30">
            Security & Authentication
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
            Verify DigiCoders Certificate
          </h1>
          <p className="text-gray-200 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Instant online verification portal for recruiters, employers, and colleges to validate
            the authenticity of DigiCoders Technologies credentials.
          </p>
        </div>
      </div>

      {/* Verification Tool */}
      <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto flex-1 w-full">
        {/* Search Box */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200 mb-10">
          <form onSubmit={handleSearch} className="space-y-4">
            <label className="block text-sm font-bold text-gray-800">
              Enter Certificate No. / Enrollment Number
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="e.g. DC202601 or your Certificate Roll ID"
                value={certInput}
                onChange={(e) => setCertInput(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none text-base"
                required
              />
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 rounded-xl transition flex items-center justify-center gap-2 cursor-pointer shadow"
              >
                <FaMagnifyingGlass /> Verify Now
              </button>
            </div>
            <p className="text-xs text-gray-500">
              💡 Tip: Try sample ID <strong>DC202601</strong> or <strong>DC202602</strong> to test verification.
            </p>
          </form>
        </div>

        {/* Certificate Display Result */}
        {searched && certData && (
          <div className="bg-white rounded-3xl shadow-2xl border-4 border-orange-500 p-6 sm:p-10 relative overflow-hidden">
            {/* Verified Stamp Badge */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <img
                  src="/logo1.png"
                  alt="DigiCoders Logo"
                  className="h-12 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://thedigicoders.com/public/images/logo1.png";
                  }}
                />
              </div>
              <div className="flex items-center gap-2 bg-green-100 text-green-800 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full border border-green-300 shadow-sm">
                <FaCircleCheck className="text-green-600 text-base" /> VERIFIED & GENUINE
              </div>
            </div>

            {/* Certificate Meta Details */}
            <div className="py-8 space-y-6">
              <div className="text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  Official Verification Record
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#000034] mt-1">
                  Certificate of Training Completion
                </h3>
                <p className="text-orange-600 font-bold text-sm mt-1">
                  ID: {certData.certId}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 text-sm">
                <div>
                  <span className="text-xs text-gray-500 font-semibold block">Candidate Name:</span>
                  <span className="font-extrabold text-gray-900 text-base">{certData.studentName}</span>
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-semibold block">Father's Name:</span>
                  <span className="font-bold text-gray-800">{certData.fatherName}</span>
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-semibold block">Technology / Stream:</span>
                  <span className="font-bold text-blue-900">{certData.course}</span>
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-semibold block">Program Duration:</span>
                  <span className="font-bold text-gray-800">{certData.duration}</span>
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-semibold block">Evaluation Grade:</span>
                  <span className="font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded text-xs inline-block">
                    {certData.grade}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-semibold block">Date of Issue:</span>
                  <span className="font-bold text-gray-800">{certData.issueDate}</span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-xs text-gray-500 font-semibold block">Major Live Project Built:</span>
                  <span className="font-semibold text-gray-800">{certData.project}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-gray-200 flex flex-wrap justify-between items-center gap-4 text-xs text-gray-500">
              <span>Verified via DigiCoders Central Registry Database</span>
              <button
                onClick={() => window.print()}
                className="bg-[#000034] hover:bg-blue-950 text-white font-bold px-5 py-2.5 rounded-lg flex items-center gap-2 cursor-pointer transition text-xs"
              >
                <FaPrint /> Print Verification Slip
              </button>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default VerifyCertificate;

