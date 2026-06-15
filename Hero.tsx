/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const buildingImg = '/building.jpg';
import { motion } from 'motion/react';
import { Calendar, AlertTriangle, ShieldCheck, Clock, Award, Stethoscope } from 'lucide-react';

interface HeroProps {
  onBookConsultationClick: () => void;
}

export default function Hero({ onBookConsultationClick }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-br from-teal-50/60 via-[#f8fafc] to-sky-50/70">
      {/* Background Image with Cinematic Healthcare Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={buildingImg}
          alt="Sharda Medicity Hospital Building"
          className="absolute right-0 top-0 h-full w-full lg:w-[48%] object-cover opacity-15 lg:opacity-20 mix-blend-multiply pointer-events-none select-none"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic gradients matching professional light themes */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/90 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 filter blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-32 w-96 h-96 bg-sky-500/5 filter blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/50 text-teal-800 text-xs font-bold tracking-wider uppercase shadow-xs"
            >
              <ShieldCheck className="h-4 w-4 text-teal-600 animate-pulse" />
              <span>SUPER-SPECIALITY COGNITIVE NEURO & SPINE CARE</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6.5xl font-display font-extrabold text-slate-900 leading-[1.12] tracking-tight">
                Advanced Healthcare <br />
                <span className="bg-gradient-to-r from-teal-700 via-sky-600 to-teal-650 bg-clip-text text-transparent">
                  With Trust & Compassion
                </span>
              </h1>
              
              <p className="text-slate-600 font-sans text-sm sm:text-base max-w-xl leading-relaxed">
                Experience world-class neurological excellence and patient-first compassionate healing at Varanasi's leading super-speciality neuro and spine care center, directed by Dr. Virendra Keshri.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1.5"
            >
              <button
                onClick={onBookConsultationClick}
                className="inline-flex items-center justify-center gap-2.5 bg-teal-600 hover:bg-teal-700 active:bg-teal-850 text-white font-sans text-sm font-bold tracking-wide px-7 py-3.5 rounded-xl shadow-md shadow-teal-500/10 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="h-4 w-4" />
                <span>Book OPD Consultation</span>
              </button>

              <a
                href="tel:+918090713713"
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/80 font-sans text-sm font-bold tracking-wide px-7 py-3.5 rounded-xl shadow-xs transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <AlertTriangle className="h-4 w-4 text-[#ea580c]" />
                <span>24/7 Trauma Hotline</span>
              </a>
            </motion.div>

            {/* Realistic Medical Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6.5 border-t border-slate-200/60"
            >
              <div className="space-y-1">
                <p className="text-2xl font-extrabold text-teal-800 font-display">15+ Yrs</p>
                <p className="text-[10px] text-slate-500 font-sans font-bold uppercase tracking-wider">Clinical Trust</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-extrabold text-sky-800 font-display">5K+</p>
                <p className="text-[10px] text-slate-500 font-sans font-bold uppercase tracking-wider">Successful Surgeries</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-extrabold text-teal-800 font-display">99%</p>
                <p className="text-[10px] text-slate-500 font-sans font-bold uppercase tracking-wider">Patient Comfort</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-extrabold text-[#ea580c] font-display">24/7</p>
                <p className="text-[10px] text-slate-500 font-sans font-bold uppercase tracking-wider">Emergency Care</p>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Content: Premium Realistic Info Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative bg-white border border-slate-200/60 rounded-2xl p-6 sm:p-7 shadow-[0_12px_40px_-15px_rgba(15,23,42,0.08)] md:max-w-md mx-auto group hover:border-teal-500/20 transition-all duration-500"
            >
              {/* Card Accent Colors */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 filter blur-xl rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-sky-500/5 filter blur-xl rounded-full pointer-events-none" />
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5 text-teal-600 animate-pulse" />
                  <span className="text-xs uppercase tracking-widest text-teal-700 font-bold">clinical directory</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-[10px] text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-250/20 font-sans font-bold">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-ping" />
                  <span>OPD ACTIVE</span>
                </div>
              </div>

              {/* Rows */}
              <div className="pt-5 space-y-4.5">
                {/* 1. Specialist */}
                <div className="flex items-start gap-3">
                  <div className="p-2 ml-0.5 mt-0.5 bg-teal-50 border border-teal-100 rounded-lg text-teal-600">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-xs.5 leading-snug">Chief Surgical Advisor</h3>
                    <p className="text-teal-850 font-bold text-sm mt-0.5 font-display text-teal-800">Dr. Virendra Keshri</p>
                    <p className="text-slate-500 text-[11px] mt-0.5">M.B.B.S, M.S, M.Ch (Neuro & Spine Expert)</p>
                  </div>
                </div>

                {/* 2. Chief Specialty */}
                <div className="flex items-start gap-3">
                  <div className="p-2 ml-0.5 mt-0.5 bg-sky-50 border border-sky-100 rounded-lg text-sky-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-xs.5 leading-snug">Core Speciality</h3>
                    <p className="text-slate-700 font-bold text-xs mt-0.5">Neuro & Spinal Trauma Surgery</p>
                    <p className="text-slate-500 text-[11px] mt-0.5">Advanced microscopic facilities & integrated post-trauma rehab.</p>
                  </div>
                </div>

                {/* 3. OPD & Consultation Hours */}
                <div className="flex items-start gap-3">
                  <div className="p-2 ml-0.5 mt-0.5 bg-amber-50 border border-amber-100 rounded-lg text-amber-600">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-xs.5 leading-snug">Schedules & OPD Hours</h3>
                    <p className="text-amber-700 font-bold text-xs mt-0.5 font-sans">Mon - Sat: 11:00 AM - 04:00 PM</p>
                    <p className="text-slate-500 text-[11px] mt-0.5">Walk-ins are verified at priority clearance desk.</p>
                  </div>
                </div>

                {/* 4. Support Call */}
                <div className="flex items-start gap-3">
                  <div className="p-2 ml-0.5 mt-0.5 bg-orange-50 border border-orange-100 rounded-lg text-[#ea580c]">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-slate-900 font-bold text-xs.5 leading-snug">Priority Ambulance</h3>
                    <p className="text-[#ea580c] font-bold text-xs mt-0.5 font-mono">Emergency: +91 8090 713 713</p>
                    <p className="text-slate-500 text-[11px] mt-0.5">ICU ambulances with rapid triage onboarding.</p>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <button
                  onClick={onBookConsultationClick}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-3 rounded-xl bg-teal-50 hover:bg-teal-600 hover:text-white text-teal-800 border border-teal-200/50 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xs cursor-pointer"
                >
                  <span>REQUEST OPD ENTRY PASS</span>
                  <span className="text-xs">&rarr;</span>
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
