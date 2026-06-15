/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SPECIALIST } from '../data';
import { motion } from 'motion/react';
import { Award, GraduationCap, Calendar, Compass, ShieldCheck, HeartPulse } from 'lucide-react';

export default function Specialist() {
  return (
    <section id="specialist" className="py-24 relative overflow-hidden bg-white border-b border-slate-100">
      {/* Background visual helpers */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500/1 filter blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-teal-500/2 filter blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-teal-700 font-sans font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100">
            CHIEF MEDICAL OFFICER & SURGEON
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Consultant Neuro & Spinal Surgeon
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Highly trained spinal specialist executing micro-surgical procedures with over a decade of clinical distinction in Varanasi.
          </p>
          <div className="h-1 w-12 bg-teal-600 rounded-full mx-auto mt-2.5" />
        </div>

        {/* Surgeon Profile Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-slate-50/60 border border-slate-150 p-6 sm:p-10 lg:p-12 rounded-3xl relative overflow-hidden shadow-xs">
          {/* Subtle sign glow accent */}
          <div className="absolute top-0 right-0 w-[400px] h-[200px] bg-teal-500/2 filter blur-3xl pointer-events-none" />
          
          {/* Left Column: Premium Surgeon Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[340px] aspect-[4/5] bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100 border border-slate-200 rounded-2xl overflow-hidden p-6 flex flex-col justify-between shadow-md group"
            >
              {/* Coordinate design layout to look clinical */}
              <div className="absolute top-4 left-4 text-[9px] font-mono text-teal-600/40 font-bold uppercase tracking-wider">
                VARANASI &middot; SIGRA &middot; OPD
              </div>
              <div className="absolute bottom-4 right-4 text-[9px] font-mono text-teal-600/40 font-bold uppercase tracking-wider">
                CRANIAL_SPINAL_MCh
              </div>

              {/* Real Elegant Surgeon Icon / Line Silhouette Graphic */}
              <div className="flex-1 flex items-center justify-center relative">
                {/* Microscopic glowing lines */}
                <div className="absolute w-44 h-44 rounded-full border border-teal-500/10 animate-spin -duration-15000" />
                
                {/* Doctor Icon Silhouette */}
                <div className="relative text-teal-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-32 h-32 text-teal-600/30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M12 2a5 5 0 100 10 5 5 0 000-10zM5 20a7 7 0 0114 0H5z" clipRule="evenodd" />
                  </svg>
                  {/* Subtle orange cross representing trauma care */}
                  <div className="absolute bottom-4 right-4 bg-[#ea580c] border border-orange-400 p-2 rounded-full shadow-md">
                    <HeartPulse className="h-4.5 w-4.5 text-white animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Doctor Details Bar */}
              <div className="relative z-10 pt-4 border-t border-slate-200 bg-white p-3 rounded-lg flex flex-col items-center text-center shadow-xs">
                <span className="text-slate-900 font-display font-extrabold text-base leading-tight">
                  Dr. Virendra Keshri
                </span>
                <span className="text-teal-700 font-sans text-[11px] font-bold tracking-wider mt-1 uppercase">
                  M.Ch (Neuro & Spinal Surgeon)
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Credentials & Stats */}
          <div className="lg:col-span-7 space-y-7">
            <div>
              <div className="flex items-center gap-2.5 text-teal-700 text-xs font-bold uppercase tracking-wider mb-2">
                <Compass className="h-4 w-4" />
                <span>CHIEF CONSULTANT PROFILE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
                {SPECIALIST.name}
              </h3>
              <p className="text-teal-750 font-bold text-xs sm:text-sm mt-1 text-teal-750">
                {SPECIALIST.designation} &middot; {SPECIALIST.specialty}
              </p>
            </div>

            <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
              {SPECIALIST.about}
            </p>

            {/* Qualifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Degrees */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                  <GraduationCap className="h-4 w-4 text-teal-600" />
                  <span>Academic Degrees</span>
                </div>
                <div className="flex flex-col gap-1.5 pl-6">
                  {SPECIALIST.degrees.map((degree, idx) => (
                    <span key={idx} className="text-slate-700 text-xs font-semibold bg-white border border-slate-200 px-2.5 py-1 rounded w-fit shadow-xs">
                      {degree}
                    </span>
                  ))}
                  <span className="text-slate-500 text-[10px] mt-0.5">Alumnus of Institute of Medical Sciences (IMS BHU)</span>
                </div>
              </div>

              {/* Consulting Hours */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                  <Calendar className="h-4 w-4 text-teal-600" />
                  <span>OPD Consultation Schedule</span>
                </div>
                <div className="pl-6 space-y-1">
                  <p className="text-amber-800 font-sans text-xs font-bold bg-amber-50 border border-amber-250 px-2 rounded w-fit py-1">
                    {SPECIALIST.schedule}
                  </p>
                  <p className="text-slate-500 text-xs leading-relaxed pt-1">
                    Please call emergency support lines for immediate trauma admission instructions.
                  </p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-3 pt-3 border-t border-slate-200">
              <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                <Award className="h-4 w-4 text-teal-600" />
                <span>Distinguished Milestones</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-6 list-disc text-slate-600 text-xs leading-relaxed">
                {SPECIALIST.achievements.map((ach, idx) => (
                  <li key={idx} className="marker:text-teal-600">
                    {ach}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
