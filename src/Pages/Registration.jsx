import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import FloatingActions from "../Components/FloatingActions";
import Footer from "../Components/Footer";
import {
  FaUserPlus,
  FaCircleCheck,
  FaPrint,
  FaFilePdf,
  FaShieldHalved,
  FaHeadset,
} from "react-icons/fa6";

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    mobile: "",
    whatsapp: "",
    email: "",
    college: "",
    branchStream: "Computer Science (CS/IT)",
    semester: "Final Year",
    course: "MERN Stack Full Stack Web Development",
    trainingType: "Summer Training 2026",
    trainingCenter: "Lucknow Head Office (Aliganj)",
    batchTiming: "Morning (09:00 AM - 11:30 AM)",
    address: "",
  });

  const [registered, setRegistered] = useState(false);
  const [regId, setRegId] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.mobile) {
      alert("Please enter candidate name and mobile number.");
      return;
    }
    const newId = `DC-${Math.floor(100000 + Math.random() * 900000)}`;
    setRegId(newId);
    setRegistered(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navbar />
      <FloatingActions />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#000034] to-[#0a1264] text-white py-16 px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-orange-400 font-bold uppercase text-xs md:text-sm tracking-widest bg-orange-500/20 px-3 py-1 rounded-full border border-orange-500/30">
            Admissions Open Batch 2026
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
            Online Training Registration Portal
          </h1>
          <p className="text-gray-200 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Reserve your seat for Summer Training, 6 Months Industrial Training, Apprenticeship, or
            Internship program across Lucknow, Kanpur, and Gorakhpur.
          </p>
        </div>
      </div>

      <section className="py-12 md:py-16 px-4 md:px-8 max-w-5xl mx-auto flex-1 w-full">
        {registered ? (
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border-4 border-green-500 text-center space-y-6">
            <FaCircleCheck className="text-6xl text-green-500 mx-auto" />
            <h2 className="text-3xl font-extrabold text-[#000034]">
              Registration Submitted Successfully!
            </h2>
            <div className="p-4 bg-green-50 rounded-2xl max-w-md mx-auto border border-green-200">
              <span className="text-xs text-gray-500 block">Your Provisional Registration ID:</span>
              <strong className="text-2xl text-green-700 tracking-wider">{regId}</strong>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl text-left text-sm max-w-2xl mx-auto space-y-2 border border-gray-200">
              <p><strong>Candidate Name:</strong> {formData.fullName}</p>
              <p><strong>Contact Phone:</strong> {formData.mobile}</p>
              <p><strong>Registered Course:</strong> {formData.course}</p>
              <p><strong>Program Type:</strong> {formData.trainingType}</p>
              <p><strong>Selected Branch:</strong> {formData.trainingCenter}</p>
              <p><strong>Preferred Timing:</strong> {formData.batchTiming}</p>
              <p><strong>College:</strong> {formData.college || "N/A"}</p>
            </div>

            <p className="text-xs text-gray-500 max-w-lg mx-auto">
              Our academic counselor will call you on <strong>{formData.mobile}</strong> to confirm your batch
              start date, syllabus kit, and lab timings.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button
                onClick={() => window.print()}
                className="bg-[#000034] hover:bg-blue-900 text-white font-bold px-6 py-2.5 rounded-xl text-sm flex items-center gap-2 cursor-pointer"
              >
                <FaPrint /> Print Registration Slip
              </button>
              <button
                onClick={() => setRegistered(false)}
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm cursor-pointer"
              >
                Register Another Student
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 border border-gray-200">
            <div className="border-b pb-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000034]">
                  Fill Admission & Enrollment Form
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Please provide accurate details as printed on your college ID and marksheets.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-green-700 bg-green-50 px-3 py-1.5 rounded-full border border-green-200">
                <FaShieldHalved /> 100% Secure SSL Enrollment
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Details */}
              <div>
                <h3 className="text-base font-bold text-orange-600 uppercase tracking-wider mb-4">
                  1. Candidate Personal Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Full Name (As per High School Certificate) *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Vikas Kumar"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border rounded-xl text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Father's / Guardian's Name
                    </label>
                    <input
                      type="text"
                      name="fatherName"
                      placeholder="e.g. Sh. Ramesh Kumar"
                      value={formData.fatherName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border rounded-xl text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Candidate Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      placeholder="e.g. 9198483820"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border rounded-xl text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      placeholder="e.g. 9198483820"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border rounded-xl text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. vikas@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border rounded-xl text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Academic Details */}
              <div className="pt-4 border-t">
                <h3 className="text-base font-bold text-orange-600 uppercase tracking-wider mb-4">
                  2. Academic & College Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      College / University / Polytechnic Institute Name
                    </label>
                    <input
                      type="text"
                      name="college"
                      placeholder="e.g. BBD University, Lucknow"
                      value={formData.college}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border rounded-xl text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Branch / Stream
                    </label>
                    <select
                      name="branchStream"
                      value={formData.branchStream}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border rounded-xl text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none bg-white"
                    >
                      <option>Computer Science (CS/IT)</option>
                      <option>Electronics & Comm. (EC)</option>
                      <option>Electrical Engg (EE/EN)</option>
                      <option>Mechanical Engg (ME)</option>
                      <option>Civil Engg (CE)</option>
                      <option>BCA / MCA</option>
                      <option>Polytechnic Diploma</option>
                      <option>Other / Graduate</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Course Selection */}
              <div className="pt-4 border-t">
                <h3 className="text-base font-bold text-orange-600 uppercase tracking-wider mb-4">
                  3. Select Training Program & Preferred Center
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Training Program
                    </label>
                    <select
                      name="trainingType"
                      value={formData.trainingType}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border rounded-xl text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none bg-white"
                    >
                      <option>Summer Training 2026</option>
                      <option>6 Months Industrial Training</option>
                      <option>6 Weeks Apprenticeship Training</option>
                      <option>Vocational Training</option>
                      <option>Winter Training</option>
                      <option>Live Project Training</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Technology Course
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border rounded-xl text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none bg-white"
                    >
                      <option>MERN Stack Full Stack Web Development</option>
                      <option>Python Full Stack, Django & AI</option>
                      <option>Java Full Stack (Spring Boot)</option>
                      <option>PHP & Laravel Development</option>
                      <option>Flutter & Android App Development</option>
                      <option>Data Analytics, SQL & Power BI</option>
                      <option>AutoCAD / SolidWorks (Mechanical)</option>
                      <option>Digital Marketing & UI/UX Design</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Select DigiCoders Training Center
                    </label>
                    <select
                      name="trainingCenter"
                      value={formData.trainingCenter}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border rounded-xl text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none bg-white"
                    >
                      <option>Lucknow Head Office (Aliganj)</option>
                      <option>Kanpur Branch (Yashoda Nagar)</option>
                      <option>Gorakhpur Branch (GIDA BIT Campus)</option>
                      <option>Online Interactive Live Batch</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Preferred Batch Timing
                    </label>
                    <select
                      name="batchTiming"
                      value={formData.batchTiming}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border rounded-xl text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none bg-white"
                    >
                      <option>Morning (09:00 AM - 11:30 AM)</option>
                      <option>Noon (11:30 AM - 02:00 PM)</option>
                      <option>Afternoon (02:30 PM - 05:00 PM)</option>
                      <option>Evening (05:00 PM - 07:30 PM)</option>
                      <option>Weekend Batch (Sat & Sun)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-extrabold py-4 px-6 rounded-2xl shadow-xl hover:shadow-orange-500/30 transition text-base flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FaUserPlus /> Confirm & Submit Registration Form
                </button>
              </div>
            </form>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Registration;

