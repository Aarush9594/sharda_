/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
const logoImg = '/logo.png';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Departments', href: '#departments' },
    { label: 'Specialist', href: '#specialist' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/50 py-2.5 shadow-[0_4px_25px_rgba(15,23,42,0.03)]'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo & Branding */}
          <div className="flex items-center gap-3">
            <a href="#home" className="flex items-center gap-2.5 group">
              <img
                src={logoImg}
                alt="Sharda Medicity Logo"
                className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-slate-900 font-display font-extrabold text-base leading-none tracking-tight group-hover:text-teal-600 transition-colors">
                  SHARDA
                </span>
                <span className="text-teal-600 font-sans font-bold text-[9px] leading-none tracking-[0.15em] mt-1.5 uppercase">
                  MEDICITY
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-slate-700 hover:text-teal-600 font-sans text-xs uppercase tracking-wider font-bold transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:height-[2px] after:bg-teal-600 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:+918090713713"
              className="inline-flex items-center gap-2 bg-[#ea580c] hover:bg-[#c2410c] text-white font-sans text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Phone className="h-3.5 w-3.5 text-white animate-pulse" />
              <span>24/7 Emergency</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="tel:+918090713713"
              className="inline-flex items-center justify-center p-2 bg-orange-50 border border-orange-200 rounded-full text-[#ea580c] hover:text-white"
              title="Emergency Call"
            >
              <Phone className="h-4.5 w-4.5 animate-pulse" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200/80 px-4 pt-2 pb-6 space-y-2.5 shadow-2xl transition-all duration-300">
          <div className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-slate-700 hover:text-teal-600 font-sans text-sm font-semibold py-2.5 px-3 rounded-lg hover:bg-slate-50 transition-colors block"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 px-3 border-t border-slate-200">
              <a
                href="tel:+918090713713"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#ea580c] text-white font-sans text-xs font-bold uppercase tracking-wider py-3 rounded-xl shadow-md"
              >
                <Phone className="h-4 w-4 text-white animate-pulse" />
                <span>24/7 EMERGENCY CALL</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
