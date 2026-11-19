import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../Components/CSS/BatchesSection.css";
import { FaCalendarDays, FaClock, FaArrowRight } from "react-icons/fa6";

const LOCAL_BATCHES_DATA = [
  {
    id: 1,
    title: "MERN Stack Full Stack Batch",
    category: "upcoming",
    startDate: "15 Nov 2026",
    duration: "6 Months",
    image: "/images/digicoders-bach-1.jpeg",
    url: "/registration",
  },
  {
    id: 2,
    title: "Python & Data Science Batch",
    category: "ongoing",
    startDate: "01 Nov 2026",
    duration: "3 Months",
    image: "/images/back.jpg",
    url: "/registration",
  },
  {
    id: 3,
    title: "React JS Advanced Frontend",
    category: "upcoming",
    startDate: "20 Nov 2026",
    duration: "2 Months",
    image: "/images/SyllabusGallery/digicoder.jpeg",
    url: "/registration",
  },
  {
    id: 4,
    title: "Java Full Stack (Spring Boot)",
    category: "ongoing",
    startDate: "10 Oct 2026",
    duration: "4 Months",
    image: "/images/lucknow-head-office-digicoders.jpg",
    url: "/registration",
  },
  {
    id: 5,
    title: "Flutter & Mobile App Batch",
    category: "upcoming",
    startDate: "25 Nov 2026",
    duration: "3 Months",
    image: "/hero.jpeg",
    url: "/registration",
  },
  {
    id: 6,
    title: "PHP & Laravel Framework Batch",
    category: "upcoming",
    startDate: "01 Dec 2026",
    duration: "3 Months",
    image: "/images/SyllabusGallery/15august.jpeg",
    url: "/registration",
  },
];

const BatchesSlider = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredBatches = LOCAL_BATCHES_DATA.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  return (
    <div className="slider-wrapper py-12 sm:py-16 px-4 max-w-7xl mx-auto w-full">
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
        <span className="text-orange-600 font-bold uppercase text-xs tracking-widest bg-orange-100 px-3 py-1 rounded-full">
          Admissions Schedule
        </span>
        <h2 className="heading mt-2 text-2xl sm:text-3xl md:text-4xl">Upcoming & Ongoing Training Batches</h2>
        <div className="w-16 h-1 bg-orange-500 mx-auto rounded"></div>
      </div>

      {/* Filter Tabs */}
      <div className="tabs-container flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
        <button
          className={`tab-btn px-4 sm:px-6 py-2 rounded-full font-bold text-xs sm:text-sm cursor-pointer transition ${activeTab === "all" ? "active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          All Batches
        </button>
        <button
          className={`tab-btn px-4 sm:px-6 py-2 rounded-full font-bold text-xs sm:text-sm cursor-pointer transition ${activeTab === "upcoming" ? "active" : ""}`}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming
        </button>
        <button
          className={`tab-btn px-4 sm:px-6 py-2 rounded-full font-bold text-xs sm:text-sm cursor-pointer transition ${activeTab === "ongoing" ? "active" : ""}`}
          onClick={() => setActiveTab("ongoing")}
        >
          Ongoing
        </button>
      </div>

      {/* Loop Slider (Swiper Component) */}
      <div className="swiper-container w-full">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="mySwiper !pb-12"
        >
          {filteredBatches.map((batch) => (
            <SwiperSlide key={batch.id}>
              <div className="batch-card bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                {/* Category Badge */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-gray-100">
                  <span className={`badge ${batch.category} absolute top-3 right-3 z-10 px-3 py-1 rounded-full text-xs font-bold text-white shadow`}>
                    {batch.category === "upcoming" ? "Upcoming" : "Ongoing"}
                  </span>
                  {/* Banner Image using local public images */}
                  <img src={batch.image} alt={batch.title} className="w-full h-full object-cover transform hover:scale-105 transition duration-500" />
                </div>

                {/* Details */}
                <div className="batch-details p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{batch.title}</h3>
                    <p className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-1">
                      <FaCalendarDays className="text-orange-500 shrink-0" />
                      <span><strong>Starts:</strong> {batch.startDate}</span>
                    </p>
                    <p className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-4">
                      <FaClock className="text-blue-500 shrink-0" />
                      <span><strong>Duration:</strong> {batch.duration}</span>
                    </p>
                  </div>
                  <Link to={batch.url} className="action-btn w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow">
                    Register Now <FaArrowRight />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BatchesSlider;
