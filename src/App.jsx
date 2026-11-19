import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Pages/Home";
import About from "./Pages/About";
import OurExperts from "./Pages/OurExperts";
import Trainings from "./Pages/Trainings";
import BranchDetails from "./Pages/BranchDetails";
import Placement from "./Pages/Placement";
import Gallery from "./Pages/Gallery";
import VerifyCertificate from "./Pages/VerifyCertificate";
import Registration from "./Pages/Registration";
import Contact from "./Pages/Contact";
import Blogs from "./Pages/Blogs";
import Services from "./Pages/Services";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-experts" element={<OurExperts />} />
        <Route path="/appreciation-letter" element={<About />} />
        <Route path="/mou-with-colleges" element={<About />} />
        <Route path="/certification-achievements" element={<About />} />

        {/* Trainings */}
        <Route path="/trainings" element={<Trainings />} />
        <Route path="/training/:type" element={<Trainings />} />

        {/* Branches */}
        <Route path="/branches/:slug" element={<BranchDetails />} />

        {/* Dedicated Pages */}
        <Route path="/placement" element={<Placement />} />
        <Route path="/home/placement" element={<Placement />} />
        <Route path="/Home/Placements" element={<Placement />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/verify-certificate" element={<VerifyCertificate />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />

        {/* Services */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<Services />} />

        {/* Fallback Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
