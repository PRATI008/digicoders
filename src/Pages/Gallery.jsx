import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import FloatingActions from "../Components/FloatingActions";
import Footer from "../Components/Footer";

const GALLERY_IMAGES = [
  {
    category: "classroom",
    title: "Interactive Coding Session at Lucknow Head Office",
    image: "/images/lucknow-head-office-digicoders.jpg",
  },
  {
    category: "classroom",
    title: "Smart Computer Lab with Live Project Training",
    image: "/images/digicoders-bach-1.jpeg",
  },
  {
    category: "events",
    title: "15 August Independence Day Celebration at DigiCoders",
    image: "/images/SyllabusGallery/15august.jpeg",
  },
  {
    category: "batches",
    title: "Full Stack Web Development Batch Convocation",
    image: "/images/SyllabusGallery/digicoder.jpeg",
  },
  {
    category: "events",
    title: "Annual Tech Fest & Project Demo Award Ceremony",
    image: "/hero.jpeg",
  },
  {
    category: "batches",
    title: "Summer Training Batch Classrooms & Practical Labs",
    image: "/images/back.jpg",
  },
  {
    category: "classroom",
    title: "Interactive Coding Session at Lucknow Head Office",
    image: "/images/lucknow-head-office-digicoders.jpg",
  },
  {
    category: "classroom",
    title: "Smart Computer Lab with Live Project Training",
    image: "/images/digicoders-bach-1.jpeg",
  },
  {
    category: "events",
    title: "15 August Independence Day Celebration at DigiCoders",
    image: "/images/SyllabusGallery/15august.jpeg",
  },
  {
    category: "batches",
    title: "Full Stack Web Development Batch Convocation",
    image: "/images/SyllabusGallery/digicoder.jpeg",
  },
  {
    category: "events",
    title: "Annual Tech Fest & Project Demo Award Ceremony",
    image: "/hero.jpeg",
  },
  {
    category: "batches",
    title: "Summer Training Batch Classrooms & Practical Labs",
    image: "/images/back.jpg",
  },
  {
    category: "classroom",
    title: "Interactive Coding Session at Lucknow Head Office",
    image: "/images/lucknow-head-office-digicoders.jpg",
  },
  {
    category: "classroom",
    title: "Smart Computer Lab with Live Project Training",
    image: "/images/digicoders-bach-1.jpeg",
  },
  {
    category: "events",
    title: "15 August Independence Day Celebration at DigiCoders",
    image: "/images/SyllabusGallery/15august.jpeg",
  },
  {
    category: "batches",
    title: "Full Stack Web Development Batch Convocation",
    image: "/images/SyllabusGallery/digicoder.jpeg",
  },
  {
    category: "events",
    title: "Annual Tech Fest & Project Demo Award Ceremony",
    image: "/hero.jpeg",
  },
  {
    category: "batches",
    title: "Summer Training Batch Classrooms & Practical Labs",
    image: "/images/back.jpg",
  },
  {
    category: "classroom",
    title: "Interactive Coding Session at Lucknow Head Office",
    image: "/images/lucknow-head-office-digicoders.jpg",
  },
  {
    category: "classroom",
    title: "Smart Computer Lab with Live Project Training",
    image: "/images/digicoders-bach-1.jpeg",
  },
  {
    category: "events",
    title: "15 August Independence Day Celebration at DigiCoders",
    image: "/images/SyllabusGallery/15august.jpeg",
  },
  {
    category: "batches",
    title: "Full Stack Web Development Batch Convocation",
    image: "/images/SyllabusGallery/digicoder.jpeg",
  },
  {
    category: "events",
    title: "Annual Tech Fest & Project Demo Award Ceremony",
    image: "/hero.jpeg",
  },
  {
    category: "batches",
    title: "Summer Training Batch Classrooms & Practical Labs",
    image: "/images/back.jpg",
  },
  {
    category: "classroom",
    title: "Interactive Coding Session at Lucknow Head Office",
    image: "/images/lucknow-head-office-digicoders.jpg",
  },
  {
    category: "classroom",
    title: "Smart Computer Lab with Live Project Training",
    image: "/images/digicoders-bach-1.jpeg",
  },
  {
    category: "events",
    title: "15 August Independence Day Celebration at DigiCoders",
    image: "/images/SyllabusGallery/15august.jpeg",
  },
  {
    category: "batches",
    title: "Full Stack Web Development Batch Convocation",
    image: "/images/SyllabusGallery/digicoder.jpeg",
  },
  {
    category: "events",
    title: "Annual Tech Fest & Project Demo Award Ceremony",
    image: "/hero.jpeg",
  },
  {
    category: "batches",
    title: "Summer Training Batch Classrooms & Practical Labs",
    image: "/images/back.jpg",
  },
  {
    category: "classroom",
    title: "Interactive Coding Session at Lucknow Head Office",
    image: "/images/lucknow-head-office-digicoders.jpg",
  },
  {
    category: "classroom",
    title: "Smart Computer Lab with Live Project Training",
    image: "/images/digicoders-bach-1.jpeg",
  },
  {
    category: "events",
    title: "15 August Independence Day Celebration at DigiCoders",
    image: "/images/SyllabusGallery/15august.jpeg",
  },
  {
    category: "batches",
    title: "Full Stack Web Development Batch Convocation",
    image: "/images/SyllabusGallery/digicoder.jpeg",
  },
  {
    category: "events",
    title: "Annual Tech Fest & Project Demo Award Ceremony",
    image: "/hero.jpeg",
  },
  {
    category: "batches",
    title: "Summer Training Batch Classrooms & Practical Labs",
    image: "/images/back.jpg",
  },
  {
    category: "classroom",
    title: "Interactive Coding Session at Lucknow Head Office",
    image: "/images/lucknow-head-office-digicoders.jpg",
  },
  {
    category: "classroom",
    title: "Smart Computer Lab with Live Project Training",
    image: "/images/digicoders-bach-1.jpeg",
  },
  {
    category: "events",
    title: "15 August Independence Day Celebration at DigiCoders",
    image: "/images/SyllabusGallery/15august.jpeg",
  },
  {
    category: "batches",
    title: "Full Stack Web Development Batch Convocation",
    image: "/images/SyllabusGallery/digicoder.jpeg",
  },
  {
    category: "events",
    title: "Annual Tech Fest & Project Demo Award Ceremony",
    image: "/hero.jpeg",
  },
  {
    category: "batches",
    title: "Summer Training Batch Classrooms & Practical Labs",
    image: "/images/back.jpg",
  },
  {
    category: "classroom",
    title: "Interactive Coding Session at Lucknow Head Office",
    image: "/images/lucknow-head-office-digicoders.jpg",
  },
  {
    category: "classroom",
    title: "Smart Computer Lab with Live Project Training",
    image: "/images/digicoders-bach-1.jpeg",
  },
  {
    category: "events",
    title: "15 August Independence Day Celebration at DigiCoders",
    image: "/images/SyllabusGallery/15august.jpeg",
  },
  {
    category: "batches",
    title: "Full Stack Web Development Batch Convocation",
    image: "/images/SyllabusGallery/digicoder.jpeg",
  },
  {
    category: "events",
    title: "Annual Tech Fest & Project Demo Award Ceremony",
    image: "/hero.jpeg",
  },
  {
    category: "batches",
    title: "Summer Training Batch Classrooms & Practical Labs",
    image: "/images/back.jpg",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages =
    activeCategory === "all"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 overflow-x-hidden">
      <Navbar />
      <FloatingActions />

      {/* Banner */}
      <div className="bg-gradient-to-r from-[#000034] to-[#0a1470] text-white py-12 sm:py-16 px-4 sm:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-orange-400 font-bold uppercase text-xs sm:text-sm tracking-widest bg-orange-500/20 px-3 py-1 rounded-full border border-orange-500/30">
            Life At DigiCoders
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mt-3 sm:mt-4 mb-3 sm:mb-4">
            Photo & Events Gallery
          </h1>
          <p className="text-gray-200 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            Real moments from our classrooms, lab sessions, batch completions, hackathons, and cultural festivals.
          </p>
        </div>
      </div>

      {/* Gallery Filter & Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto flex-1 w-full">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {[
            { key: "all", label: "All Photos" },
            { key: "classroom", label: "Classrooms & Labs" },
            { key: "batches", label: "Batch Convocations" },
            { key: "events", label: "Events & Festivals" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveCategory(tab.key)}
              className={`px-4 sm:px-6 py-2 rounded-full font-bold text-xs sm:text-sm transition cursor-pointer ${activeCategory === tab.key
                  ? "bg-orange-600 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 bg-gray-900 h-64 sm:h-72 border border-gray-100"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-90 sm:opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-5">
                <p className="text-white text-xs sm:text-sm font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
