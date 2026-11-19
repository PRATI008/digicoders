import React from "react";
import { FaStar, FaQuoteLeft, FaGraduationCap } from "react-icons/fa6";

const TESTIMONIALS = [
  {
    name: "Vikram Chauhan",
    branch: "MERN Stack Batch 2025",
    rating: 5,
    review:
      "DigiCoders is genuinely the best training company in Lucknow. Their focus on practical code and GitHub projects gave me the confidence to clear my TCS and startup interviews in the very first attempt!",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Ananya Saxena",
    branch: "Python & Machine Learning",
    rating: 5,
    review:
      "The mentors are working developers who explain core architecture so simply. Green card support is an amazing feature because I was able to attend revision classes even after my summer semester.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Mohd. Tariq",
    branch: "Flutter App Development",
    rating: 5,
    review:
      "I built 3 full-stack mobile applications with Firebase and Node backend during my 45-day training. The infrastructure in Lucknow Aliganj branch is great with smart AC labs and high-speed internet.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-600 font-bold uppercase text-xs md:text-sm tracking-widest bg-orange-100 px-3 py-1 rounded-full">
            Real Feedback
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#000034] mt-3 mb-4">
            What Our Students Say About Us
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4 rounded"></div>
          <p className="text-gray-600 text-sm md:text-base">
            Rated 4.9/5 by 21,000+ happy learners across Uttar Pradesh, Bihar, and other states.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group"
            >
              <FaQuoteLeft className="text-4xl text-orange-200 mb-4 group-hover:text-orange-400 transition" />
              <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                "{item.review}"
              </p>

              <div>
                <div className="flex gap-1 text-amber-400 mb-3 text-sm">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border border-orange-400"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                    <p className="text-xs text-orange-600 font-medium">{item.branch}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

