/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
const logoImg = '/logo.png';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Linkedin, 
  Facebook, 
  Award,
  Heart
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-sm text-slate-400 relative overflow-hidden">
      {/* Absolute design aesthetic overlay */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/2 filter blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-teal-500/2 filter blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-slate-800 pb-10">
          
          {/* Col 1: Brand & Logo */}
          <div className="md:col-span-4 space-y-5">
            <div className="flex items-center gap-2.5">
              <img
                src={logoImg}
                alt="Sharda Medicity Logo"
                className="h-10 w-10 object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-white font-display font-extrabold text-base leading-none tracking-tight">
                  SHARDA
                </span>
                <span className="text-teal-450 text-teal-400 font-sans font-semibold text-[10px] leading-none tracking-[0.12em] mt-1">
                  MEDICITY
                </span>
              </div>
            </div>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Premium multi-speciality medical facility providing high-precision Neuro & Spinal Care, 24/7 Trauma Services, and general OPD therapies in Sigra, Varanasi, India.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs text-teal-400 font-bold uppercase tracking-wider">CERTIFICATIONS:</span>
              <span className="text-[10px] bg-teal-55/10 bg-teal-500/10 border border-teal-500/20 px-2 py-0.5 rounded text-teal-400 font-mono">
                IMS-BHU ALUMNI
              </span>
              <span className="text-[10px] bg-sky-500/10 border border-sky-500/20 px-2 py-0.5 rounded text-sky-400 font-mono">
                REGIST. UP-CLIN
              </span>
            </div>
          </div>

          {/* Col 2: Directory Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider">
              Hospital Directory
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-teal-400 transition-colors">
                Home Entry
              </a>
              <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-teal-400 transition-colors">
                About Hospital
              </a>
              <a href="#departments" onClick={(e) => handleLinkClick(e, '#departments')} className="hover:text-teal-400 transition-colors">
                Medical Units
              </a>
              <a href="#specialist" onClick={(e) => handleLinkClick(e, '#specialist')} className="hover:text-teal-400 transition-colors">
                Our Specialists
              </a>
              <a href="#gallery" onClick={(e) => handleLinkClick(e, '#gallery')} className="hover:text-teal-400 transition-colors">
                Gallery Views
              </a>
              <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-teal-400 transition-colors">
                Contact & Map
              </a>
            </div>
          </div>

          {/* Col 3: Trauma Line */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider">
              Emergency Contact Desk
            </h4>
            
            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <MapPin className="h-4.5 w-4.5 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm leading-relaxed text-slate-300 font-medium">
                  Sigra Road, Sigra, Varanasi, Uttar Pradesh 221010
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4.5 w-4.5 text-[#ea580c] animate-pulse shrink-0" />
                <div className="flex gap-2 items-center">
                  <span className="text-[#ea580c] font-bold text-[11px] uppercase tracking-wider">24/7 Helpline:</span>
                  <a href="tel:+918090713713" className="text-white font-extrabold text-sm sm:text-base hover:text-red-400 transition-colors font-mono">
                    +91 8090 713 713
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4.5 w-4.5 text-sky-450 text-sky-400 shrink-0" />
                <div className="flex gap-2 items-center text-xs sm:text-sm">
                  <span className="text-sky-400 font-bold text-[11px] uppercase tracking-wider">Inquiries:</span>
                  <a href="mailto:info@shardamedicity.com" className="text-white hover:text-teal-400 transition-colors">
                    info@shardamedicity.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Closing details */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 font-medium text-center sm:text-left">
            &copy; {currentYear} Sharda Medicity Hospital. All surgical, patient records, and medical files are ethically protected. Created Varanasi, India.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-500 font-semibold">
            <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-teal-400">Privacy Policy</a>
            <span className="hidden sm:inline">&middot;</span>
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-teal-400">Terms of Use</a>
            <span className="hidden sm:inline">&middot;</span>
            <span className="flex items-center gap-1.5">
              Made with <Heart className="h-3 w-3 text-orange-550 text-orange-500 fill-orange-500 animate-pulse" /> in Sigra, Varanasi
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
