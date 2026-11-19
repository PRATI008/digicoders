import React, { useState } from "react";
import { FaPaperPlane, FaPhone, FaEnvelope, FaLocationDot, FaCircleCheck } from "react-icons/fa6";

const EnquirySection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "MERN Stack Web Development",
    branch: "Lucknow Head Office (Aliganj)",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter your name and contact phone number.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#000034] to-[#0a1264] text-white px-4 md:px-8 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-orange-400 font-bold uppercase text-xs md:text-sm tracking-widest bg-orange-500/20 px-3 py-1 rounded-full border border-orange-500/30">
              Quick Admissions 2026
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Start Your IT Journey Today With Us
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Book a free 1-on-1 career consultation session, reserve your seat in the upcoming Summer
              or Industrial training batch, or request a complete syllabus brochure.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Direct Helpline</p>
                  <a href="tel:+919198483820" className="font-bold text-white hover:text-orange-400">
                    +91 9198483820
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Official Email</p>
                  <span className="font-bold text-white">info@thedigicoders.com</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <FaLocationDot />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Head Office</p>
                  <span className="font-bold text-white">Aliganj, Lucknow, UP</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7 bg-white text-gray-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-gray-100">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <FaCircleCheck className="text-6xl text-green-500 mx-auto" />
                <h3 className="text-2xl font-bold text-gray-900">Enquiry Received Successfully!</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our senior tech career counselor from DigiCoders
                  Technologies will call you on <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      phone: "",
                      email: "",
                      course: "MERN Stack Web Development",
                      branch: "Lucknow Head Office (Aliganj)",
                      message: "",
                    });
                  }}
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-2 rounded-lg text-sm transition"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-2xl font-extrabold text-[#000034] mb-2">
                  Request Free Counseling & Syllabus
                </h3>
                <p className="text-xs text-gray-500 mb-6">
                  Fill in your details below. No spam, our team will contact you within 2 business hours.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      WhatsApp / Mobile No *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 9198483820"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. rahul@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Select Training Branch
                    </label>
                    <select
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm bg-white"
                    >
                      <option>Lucknow Head Office (Aliganj)</option>
                      <option>Kanpur Branch (Yashoda Nagar)</option>
                      <option>Gorakhpur Branch (GIDA BIT Campus)</option>
                      <option>Online Live Interactive Training</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Select Course Interested In
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm bg-white"
                  >
                    <option>MERN Stack Web Development</option>
                    <option>Python Full Stack & AI/ML</option>
                    <option>Java Full Stack (Spring Boot)</option>
                    <option>PHP & Laravel Development</option>
                    <option>Flutter & Android App Development</option>
                    <option>Summer Training 2026 (All Streams)</option>
                    <option>6 Months Industrial Training</option>
                    <option>Data Analytics & Power BI</option>
                    <option>Digital Marketing & UI/UX</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Your College / Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Mention your college, semester or any specific queries..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-extrabold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-orange-500/40 transition duration-300 flex items-center justify-center gap-2 cursor-pointer text-base"
                >
                  <FaPaperPlane /> Submit Enquiry & Get Free Syllabus
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;

