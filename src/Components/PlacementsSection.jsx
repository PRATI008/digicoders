import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const HOME_PLACED_POSTERS = [
  {
    name: "Isha Prajapati",
    company: "Quartz Technologies Kanpur",
    image:
      "https://thedigicoders.com/public/uploads/placement/isha-prajapati-placed-in-quartz-technologies-kanpur-1793790965.webp",
  },
  {
    name: "Deeksha Verma",
    college: "CSJM Gov Polytechnic Ambedkar Nagar",
    batchYear: "2026",
    designation: "BDE",
    company: "All Core Solutions",
    studentPhoto:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Sumit Kumar",
    college: "JIT Barabanki",
    batchYear: "2026",
    designation: "Bussiness Development Executive",
    company: "ARJUN'S Enterprises",
    studentPhoto:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Vibhav Bajpai",
    college: "Babu Sunder Singh Institute",
    batchYear: "2026",
    designation: "PHP Laravel Developer",
    company: "EMK Enterprise private limited",
    studentPhoto:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Navneet Srivastav",
    college: "SRMCEM, Lucknow",
    batchYear: "2026",
    designation: "Full Stack Web Developer",
    company: "Websofy Software Pvt. Ltd.",
    studentPhoto:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Naman Singh",
    college: "BBD University, Lucknow",
    batchYear: "2026",
    designation: "Software Engineer",
    company: "All Core Solutions",
    studentPhoto:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=80",
  },
];

const PlacementsSection = () => {
  return (
    <section className="py-14 sm:py-20 bg-white px-4 sm:px-6 md:px-8 w-full border-t border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Title matching the screenshot */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Recent Placement
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded"></div>
        </div>

        {/* Grid of Placement Poster Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {HOME_PLACED_POSTERS.map((item, idx) => {
            // Direct Uploaded Poster
            if (item.image) {
              return (
                <div
                  key={idx}
                  className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200 bg-white flex flex-col justify-between"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              );
            }

            // Exact DigiCoders Poster Graphic Blueprint matching the screenshot
            return (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition duration-300 border-2 border-amber-300/80 overflow-hidden flex flex-col justify-between"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 50% 0%, rgba(254, 243, 199, 0.45) 0%, rgba(255, 255, 255, 1) 70%)",
                }}
              >
                {/* Top Corner Badge: DREAM BELIEVE ACHIEVE */}
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

                  {/* Gold Medallion */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-700 p-0.5 shadow-md flex items-center justify-center text-center shrink-0">
                    <div className="w-full h-full rounded-full bg-[#000034] text-yellow-300 p-1 flex flex-col items-center justify-center leading-none">
                      <span className="text-[6.5px] font-black uppercase">DREAM</span>
                      <span className="text-[6.5px] font-black uppercase text-white">BELIEVE</span>
                      <span className="text-[6.5px] font-black uppercase">ACHIEVE</span>
                    </div>
                  </div>
                </div>

                {/* PLACEMENT 2026 Typography + Congratulations */}
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

                  <div className="col-span-5 flex justify-center">
                    <div className="w-24 h-32 sm:w-28 sm:h-36 rounded-xl overflow-hidden border-2 border-amber-400 shadow-md bg-white">
                      <img
                        src={item.studentPhoto}
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

        {/* View More Placement Link Button */}
        <div className="text-center mt-10 sm:mt-14">
          <Link
            to="/home/placement"
            className="inline-flex items-center gap-2 border-2 border-sky-600 text-sky-700 hover:bg-sky-600 hover:text-white font-extrabold px-8 py-3 rounded-lg text-sm transition shadow-sm"
          >
            View More Placement <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlacementsSection;
