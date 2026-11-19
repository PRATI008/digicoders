import React from "react";
import { Link } from "react-router-dom";
import "../Components/CSS/Footer.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* ================= OUR SERVICES + CITY SECTION ================= */}
      <section className="footer-top">
        {/* OUR SERVICES */}
        <div className="footer-services">
          <h2>OUR SERVICES & POPULAR SPECIALIZATIONS</h2>
          <div className="orange-line"></div>
          <div className="service-links">
            <Link to="/training/summer" className="hover:text-orange-400"><span>Summer Training</span></Link>
            <Link to="/training/winter" className="hover:text-orange-400"><span>Winter Training</span></Link>
            <Link to="/training/industrial" className="hover:text-orange-400"><span>Industrial Training</span></Link>
            <Link to="/training/internship" className="hover:text-orange-400"><span>Internship Training</span></Link>
            <Link to="/training/apprenticeship" className="hover:text-orange-400"><span>Apprenticeship Training</span></Link>
            <Link to="/training/vocational" className="hover:text-orange-400"><span>Vocational Training</span></Link>
            <Link to="/training/project" className="hover:text-orange-400"><span>Project Training</span></Link>
            <Link to="/registration" className="hover:text-orange-400"><span>Python Training</span></Link>
            <Link to="/registration" className="hover:text-orange-400"><span>ASP.NET Training</span></Link>
            <Link to="/registration" className="hover:text-orange-400"><span>Java Training</span></Link>
            <Link to="/registration" className="hover:text-orange-400"><span>PHP Laravel Training</span></Link>
            <Link to="/registration" className="hover:text-orange-400"><span>Flutter Training</span></Link>
            <Link to="/registration" className="hover:text-orange-400"><span>Android Training</span></Link>
            <Link to="/registration" className="hover:text-orange-400"><span>MERN Stack Training</span></Link>
            <Link to="/registration" className="hover:text-orange-400"><span>AI ML Training</span></Link>
            <Link to="/registration" className="hover:text-orange-400"><span>CAD Software Mechanical</span></Link>
            <Link to="/registration" className="hover:text-orange-400"><span>CAD Software Civil</span></Link>
            <Link to="/registration" className="hover:text-orange-400"><span>CAD Software Electrical</span></Link>
            <Link to="/services/graphics-designing" className="hover:text-orange-400"><span>Graphic Designing</span></Link>
            <Link to="/services/digital-marketing" className="hover:text-orange-400"><span>Digital Marketing</span></Link>
            <Link to="/registration" className="hover:text-orange-400"><span>Data Analytics Training</span></Link>
          </div>
        </div>

        {/* CITY WE COVER */}
        <div className="city-section">
          <h2>CITIES WE COVER FOR IT RECRUITMENT & ADMISSIONS</h2>
          <div className="orange-line"></div>

          {/* Uttar Pradesh */}
          <div className="state-row">
            <strong>Uttar Pradesh</strong>
            <div className="city-list">
              <span>Lucknow</span>
              <span>Kanpur</span>
              <span>Gorakhpur</span>
              <span>Varanasi</span>
              <span>Prayagraj</span>
              <span>Agra</span>
              <span>Aligarh</span>
              <span>Ambedkar Nagar</span>
              <span>Amethi</span>
              <span>Ayodhya</span>
              <span>Azamgarh</span>
              <span>Bareilly</span>
              <span>Basti</span>
              <span>Bijnor</span>
              <span>Deoria</span>
              <span>Etawah</span>
              <span>Faizabad</span>
              <span>Ghaziabad</span>
              <span>Gonda</span>
              <span>Hardoi</span>
              <span>Jaunpur</span>
              <span>Jhansi</span>
              <span>Mathura</span>
              <span>Meerut</span>
              <span>Mirzapur</span>
              <span>Moradabad</span>
              <span>Noida</span>
              <span>Rae Bareli</span>
              <span>Saharanpur</span>
              <span>Sitapur</span>
              <span>Sultanpur</span>
              <span>Unnao</span>
            </div>
          </div>

          {/* Bihar */}
          <div className="state-row">
            <strong>Bihar</strong>
            <div className="city-list">
              <span>Patna</span>
              <span>Gaya</span>
              <span>Bhagalpur</span>
              <span>Muzaffarpur</span>
              <span>Darbhanga</span>
              <span>Arrah</span>
              <span>Chhapra</span>
              <span>Buxar</span>
              <span>Siwan</span>
              <span>Hajipur</span>
            </div>
          </div>

          {/* Delhi NCR */}
          <div className="state-row">
            <strong>Delhi NCR</strong>
            <div className="city-list">
              <span>Delhi</span>
              <span>New Delhi</span>
              <span>Gurugram</span>
              <span>Noida</span>
              <span>Faridabad</span>
              <span>Ghaziabad</span>
            </div>
          </div>

          {/* Madhya Pradesh */}
          <div className="state-row">
            <strong>Madhya Pradesh</strong>
            <div className="city-list">
              <span>Bhopal</span>
              <span>Indore</span>
              <span>Gwalior</span>
              <span>Jabalpur</span>
              <span>Ujjain</span>
              <span>Rewa</span>
              <span>Satna</span>
              <span>Sagar</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN FOOTER ================= */}
      <section className="main-footer">
        {/* Top Company & Branches */}
        <div className="footer-company">
          {/* Logo & Social */}
          <div className="footer-logo">
            <Link to="/">
              <img
                src="/logo1.png"
                alt="DigiCoders Technologies"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://thedigicoders.com/public/images/logo1.png";
                }}
              />
            </Link>
            <h4>FOLLOW US ON</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://wa.me/919198483820" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Lucknow */}
          <div className="branch">
            <h3>LUCKNOW HEAD OFFICE</h3>
            <div className="small-line"></div>
            <p>
              2ND FLOOR, B-36, SECTOR O, NEAR
              <br />
              RAM RAM BANK CHAURAHA,
              <br />
              ALIGANJ, LUCKNOW, UP 226021
              <br />
              📞 +91 9198483820
            </p>
          </div>

          {/* Kanpur */}
          <div className="branch">
            <h3>KANPUR BRANCH</h3>
            <div className="small-line"></div>
            <p>
              340, S-BLOCK, NEAR ANNAPOORNA
              <br />
              HOSPITAL, SHEHNAI CHAURAHA,
              <br />
              YASHODA NAGAR, KANPUR, 208011
              <br />
              📞 +91 9198483820
            </p>
          </div>

          {/* Gorakhpur */}
          <div className="branch">
            <h3>GORAKHPUR BRANCH</h3>
            <div className="small-line"></div>
            <p>
              INSIDE MAIN BUILDING, BUDDHA
              <br />
              INSTITUTE OF TECHNOLOGY (BIT),
              <br />
              SECTOR-7, GIDA, GORAKHPUR, 273209
              <br />
              📞 +91 9198483820
            </p>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="footer-links">
          {/* Company */}
          <div className="footer-column">
            <h3>Company</h3>
            <div className="small-line"></div>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/our-experts">Our Experts</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/registration">Online Admission</Link>
          </div>

          {/* Get In Touch */}
          <div className="footer-column">
            <h3>Get In Touch</h3>
            <div className="small-line"></div>
            <Link to="/verify-certificate">Verify Certificate</Link>
            <Link to="/placement">Student Placements</Link>
            <Link to="/blogs" className="blue-link font-bold">Latest Tech Blogs</Link>
            <a href="tel:+919198483820">Call Admissions</a>
            <a href="https://wa.me/919198483820" target="_blank" rel="noreferrer">WhatsApp Chat</a>
            <Link to="/contact">Feedback & Grievance</Link>
          </div>

          {/* Trainings */}
          <div className="footer-column">
            <h3>Trainings</h3>
            <div className="small-line"></div>
            <Link to="/training/summer">Summer Training 2026</Link>
            <Link to="/training/industrial">Industrial Training</Link>
            <Link to="/training/apprenticeship">Apprenticeship Training</Link>
            <Link to="/training/vocational">Vocational Training</Link>
            <Link to="/training/winter">Winter Training</Link>
            <Link to="/training/project">Live Project Training</Link>
          </div>

          {/* Our Services */}
          <div className="footer-column">
            <h3>Our Services</h3>
            <div className="small-line"></div>
            <Link to="/services/software-development">Software Development</Link>
            <Link to="/services/website-development">Website Development</Link>
            <Link to="/services/mobile-app-development">Mobile App Development</Link>
            <Link to="/services/digital-marketing">Digital Marketing</Link>
            <Link to="/services/graphics-designing">Graphic Designing</Link>
            <Link to="/services/erp-crm-development">ERP & CRM Solutions</Link>
          </div>
        </div>

        {/* SEO Bottom Links */}
        <div className="seo-footer">
          <div className="seo-column">
            <h2>Popular Training Programs</h2>
            <Link to="/training/summer">Best Summer Training for CS Students in Lucknow</Link>
            <Link to="/training/summer">Best Summer Training for EC Students in Lucknow</Link>
            <Link to="/training/summer">Best Summer Training for Electrical Students</Link>
            <Link to="/training/summer">Best Summer Training for Mechanical Engineering</Link>
            <Link to="/training/industrial">Corporate Training Programs in Lucknow</Link>
          </div>

          <div className="seo-column">
            <h2>Training Links in Lucknow</h2>
            <Link to="/training/winter">Winter Training in Lucknow</Link>
            <Link to="/training/industrial">Industrial Training in Lucknow</Link>
            <Link to="/training/vocational">Vocational Training in Lucknow</Link>
            <Link to="/registration">MERN Full Stack Program in Lucknow</Link>
            <Link to="/registration">Best Dot Net Core Training in Lucknow</Link>
          </div>

          <div className="seo-column">
            <h2>Advanced Tech Stacks</h2>
            <Link to="/training/summer">Best Summer Training on MERN Stack</Link>
            <Link to="/training/summer">Best Summer Training on Python Django</Link>
            <Link to="/training/summer">Best Summer Training on PHP Laravel</Link>
            <Link to="/training/summer">Best Summer Training on Java Spring Boot</Link>
            <Link to="/training/summer">Best Summer Training on Flutter & Android</Link>
          </div>

          <div className="seo-column">
            <h2>Top Recommended Courses</h2>
            <Link to="/registration">Top Data Analytics Course in Lucknow</Link>
            <Link to="/registration">Top React JS Course in Lucknow</Link>
            <Link to="/registration">Top Node JS Course in Lucknow</Link>
            <Link to="/registration">Top Digital Marketing Course in Lucknow</Link>
            <Link to="/registration">Top Python AI & ML Course in Lucknow</Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} DigiCoders Technologies Pvt. Ltd. All Rights Reserved. ISO 9001:2015 Certified Company.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
