import React from "react";
import Navbar from "../Components/Navbar";
import FloatingActions from "../Components/FloatingActions";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { FaCalendar, FaUser, FaArrowRight } from "react-icons/fa6";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Best Summer Training for Computer Science (CS/IT) Students in Lucknow 2026",
    excerpt:
      "A complete guide on choosing between MERN Stack, Python Django, and Java Spring Boot for your mandatory college summer internship.",
    author: "DigiCoders Editorial",
    date: "15 Oct 2025",
    category: "Career Guidance",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Top 20 Full Stack Developer Interview Questions & Answers for Freshers",
    excerpt:
      "Master essential JavaScript closures, React hooks, Node event loops, and database indexing questions frequently asked in MNC interviews.",
    author: "Satyam Rastogi",
    date: "02 Oct 2025",
    category: "Interview Prep",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Why Flutter is Dominating Mobile App Development in 2026",
    excerpt:
      "Explore how single-codebase cross platform frameworks like Google Flutter are helping tech startups launch both iOS and Android apps faster.",
    author: "Deepak Mishra",
    date: "24 Sep 2025",
    category: "Mobile Apps",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "How to Build a Standout GitHub Portfolio That Attracts Tech Recruiters",
    excerpt:
      "Step-by-step advice on organizing your repository readme files, adding architecture diagrams, and deploying live demo links.",
    author: "Himanshu Kashyap",
    date: "10 Sep 2025",
    category: "Developer Tips",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=600&q=80",
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navbar />
      <FloatingActions />

      {/* Banner */}
      <div className="bg-gradient-to-r from-[#000034] to-[#0a1264] text-white py-16 px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-orange-400 font-bold uppercase text-xs md:text-sm tracking-widest bg-orange-500/20 px-3 py-1 rounded-full border border-orange-500/30">
            Insights & Guides
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
            DigiCoders Technical Blogs
          </h1>
          <p className="text-gray-200 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Tech roadmaps, placement preparation advice, and industry trends written by senior software
            developers and tech trainers.
          </p>
        </div>
      </div>

      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-orange-600 text-white font-bold text-xs px-3 py-1 rounded-full shadow">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <FaCalendar className="text-orange-500" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaUser className="text-blue-500" /> {post.author}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition mb-3 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-orange-600 group-hover:underline flex items-center gap-1">
                    Read Full Article <FaArrowRight />
                  </span>
                  <span className="text-xs text-gray-400">4 min read</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;

