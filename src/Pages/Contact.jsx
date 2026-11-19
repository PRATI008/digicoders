import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import FloatingActions from "../Components/FloatingActions";
import BranchesSection from "../Components/BranchesSection";
import Footer from "../Components/Footer";
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaClock,
  FaPaperPlane,
  FaWhatsapp,
  FaCircleCheck,
} from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please provide your name and phone number.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navbar />
      <FloatingActions />

      {/* Banner */}
      <div className="bg-gradient-to-r from-[#000034] to-[#0a1470] text-white py-16 px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-orange-400 font-bold uppercase text-xs md:text-sm tracking-widest bg-orange-500/20 px-3 py-1 rounded-full border border-orange-500/30">
            Get In Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
            Contact DigiCoders Technologies
          </h1>
          <p className="text-gray-200 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Have questions about training batches, courses, live projects, or college campus tie-ups?
            Our friendly counselors are here to help.
          </p>
        </div>
      </div>

      {/* Contact Information & Form */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl font-extrabold text-[#000034]">Contact Channels</h2>
            <div className="w-14 h-1 bg-orange-500 rounded"></div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center shrink-0 text-xl">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Call & WhatsApp Helpline</h4>
                  <a href="tel:+919198483820" className="text-orange-600 font-extrabold text-base block mt-0.5">
                    +91 9198483820
                  </a>
                  <p className="text-xs text-gray-500">Also on WhatsApp for instant assistance</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0 text-xl">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Email Address</h4>
                  <span className="font-bold text-gray-800 text-sm block mt-0.5">
                    info@thedigicoders.com
                  </span>
                  <p className="text-xs text-gray-500">For general queries & corporate MOUs</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center shrink-0 text-xl">
                  <FaClock />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Office & Lab Hours</h4>
                  <p className="text-xs font-semibold text-gray-700 mt-0.5">
                    Monday - Saturday: 08:30 AM - 07:30 PM
                  </p>
                  <p className="text-xs font-semibold text-gray-500">
                    Sunday: 09:30 AM - 04:00 PM (Admissions & Counseling)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#000034] text-white p-6 rounded-2xl shadow-md">
              <h4 className="font-bold text-base mb-2">Instant WhatsApp Chat</h4>
              <p className="text-xs text-gray-300 mb-4">
                Chat directly with our Lucknow admissions team for batch timings, fee structures, and syllabus PDFs.
              </p>
              <a
                href="https://wa.me/919198483820"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition"
              >
                <FaWhatsapp className="text-base" /> Start WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-200">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <FaCircleCheck className="text-6xl text-green-500 mx-auto" />
                <h3 className="text-2xl font-bold text-gray-900">Message Sent Successfully!</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto">
                  Thank you for reaching out, <strong>{formData.name}</strong>. A DigiCoders representative will
                  respond via call/email shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-2 rounded-lg text-sm transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-2xl font-extrabold text-[#000034] mb-1">
                  Send Us a Direct Message
                </h3>
                <p className="text-xs text-gray-500 mb-6">
                  Fill in your details below and our team will get back to you promptly.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Singh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 border rounded-xl text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9198483820"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 border rounded-xl text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. ramesh@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 border rounded-xl text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      placeholder="e.g. Summer Training Admission"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 border rounded-xl text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Message</label>
                  <textarea
                    rows="4"
                    placeholder="Tell us what course you are interested in, your college, etc."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 border rounded-xl text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-extrabold py-3.5 px-6 rounded-xl shadow-lg transition flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  <FaPaperPlane /> Send Message Now
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <BranchesSection />
      <Footer />
    </div>
  );
};

export default Contact;

