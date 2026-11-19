import React from "react";
import { Link } from "react-router-dom";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaDiamondTurnRight,
} from "react-icons/fa6";

const BRANCHES = [
  {
    name: "Lucknow Head Office",
    city: "Lucknow, Uttar Pradesh",
    tag: "Corporate Head Office",
    address:
      "2nd Floor, B-36, Sector O, Near Ram Ram Bank Chauraha, Aliganj, Lucknow, UP 226021",
    phone: "+91 9198483820 / +91 6394296297",
    email: "info@thedigicoders.com",
    mapLink: "https://maps.google.com/?q=DigiCoders+Technologies+Lucknow",
    slug: "lucknow",
    image: "/images/lucknow-head-office-digicoders.jpg",
  },
  {
    name: "Kanpur Branch Office",
    city: "Kanpur, Uttar Pradesh",
    tag: "Training Center",
    address:
      "340, S-Block, Near Annapoorna Hospital, Shehnai Chauraha, Yashoda Nagar, Kanpur, UP 208011",
    phone: "+91 9198483820",
    email: "kanpur@thedigicoders.com",
    mapLink: "https://maps.google.com/?q=DigiCoders+Technologies+Kanpur",
    slug: "kanpur",
    image: "/images/digicoders-bach-1.jpeg",
  },
  {
    name: "Gorakhpur Branch Office",
    city: "Gorakhpur, Uttar Pradesh",
    tag: "Campus Tech Hub",
    address:
      "Inside Main Building, Buddha Institute of Technology (BIT), CL-1, Sector-7, GIDA, Gorakhpur, UP 273209",
    phone: "+91 9198483820",
    email: "gorakhpur@thedigicoders.com",
    mapLink: "https://maps.google.com/?q=Buddha+Institute+of+Technology+GIDA+Gorakhpur",
    slug: "gorakhpur",
    image: "/images/SyllabusGallery/digicoder.jpeg",
  },
];

const BranchesSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50 px-4 sm:px-6 md:px-8 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-orange-600 font-bold uppercase text-xs sm:text-sm tracking-widest bg-orange-100 px-3 py-1 rounded-full">
            Our Centers
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#000034] mt-2 sm:mt-3 mb-2">
            Visit Our DigiCoders Branches
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-orange-500 mx-auto rounded"></div>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2">
            Walk into our hi-tech training facilities for free career counseling, live demo classes,
            and batch registration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BRANCHES.map((b, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 sm:h-52 overflow-hidden bg-gray-900">
                <img
                  src={b.image}
                  alt={b.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#000034]/90 text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm shadow">
                  {b.tag}
                </span>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-lg sm:text-xl text-gray-900 group-hover:text-orange-600 transition mb-3">
                    {b.name}
                  </h3>

                  <div className="space-y-2.5 text-xs sm:text-sm text-gray-600">
                    <p className="flex items-start gap-2.5">
                      <FaLocationDot className="text-orange-600 text-base shrink-0 mt-0.5" />
                      <span>{b.address}</span>
                    </p>
                    <p className="flex items-center gap-2.5">
                      <FaPhone className="text-blue-600 shrink-0" />
                      <a href="tel:+919198483820" className="hover:text-orange-600 font-medium">
                        {b.phone}
                      </a>
                    </p>
                    <p className="flex items-center gap-2.5">
                      <FaEnvelope className="text-green-600 shrink-0" />
                      <span>{b.email}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                  <Link
                    to={`/branches/${b.slug}`}
                    className="flex-1 text-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-2.5 px-3 rounded-xl text-xs sm:text-sm shadow transition"
                  >
                    View Branch Info
                  </Link>
                  <a
                    href={b.mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl border border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-600 transition"
                    title="Get Directions"
                  >
                    <FaDiamondTurnRight className="text-base" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;
