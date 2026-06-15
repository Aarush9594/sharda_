/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import About from './components/About';
import Departments from './components/Departments';
import Specialist from './components/Specialist';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const handleBookConsultationScroll = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#f8fafc] text-slate-800 min-h-screen relative selection:bg-teal-600 selection:text-white overflow-x-hidden">
      
      {/* Premium medical status line or top micro-bar */}
      <div className="bg-slate-900 py-2.5 border-b border-slate-800 text-[10px] sm:text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-slate-300 font-sans">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              <span>OPD Consultation Active: Sigra Clinic</span>
            </span>
            <span className="hidden md:inline text-slate-700">|</span>
            <span className="hidden md:inline">24/7 Trauma Emergency Receiving</span>
          </div>

          <div className="flex items-center gap-4 font-semibold text-white">
            <a href="tel:+918090713713" className="hover:text-teal-300 transition-colors">
              Urgent Help Hotline: +91 8090 713 713
            </a>
          </div>
        </div>
      </div>

      {/* Primary Sticky Navbar */}
      <Navbar />

      {/* Main Container with Entrance Animations */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Hero Banner Component */}
        <Hero onBookConsultationClick={handleBookConsultationScroll} />

        {/* Floating Quick Highlights Strip overlaying Hero */}
        <Highlights />

        {/* Sincere Symmetrical About Segment */}
        <About />

        {/* Managed Departments Portfolio */}
        <Departments />

        {/* Surgeon Bio Section */}
        <Specialist />

        {/* Photo Gallery Component */}
        <Gallery />

        {/* Varanasi Local Patient reviews */}
        <Testimonials />

        {/* Inquiries & Google Maps integration */}
        <Contact />
      </motion.main>

      {/* Custom Medical Footer */}
      <Footer />

    </div>
  );
}

