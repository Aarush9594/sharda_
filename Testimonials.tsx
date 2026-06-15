/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TESTIMONIALS } from '../data';
import { motion } from 'motion/react';
import { Star, Quote, QuoteIcon } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-white border-b border-slate-100">
      {/* Background visual indicators */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-teal-500/2 filter blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Description */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-teal-750 font-sans font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100">
            TESTIMONIALS & GRATITUDE
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Varanasi Patient Recoveries
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Read authentic stories of healing, surgical precision, and quick clinical actions from local patients who placed their trust in our medical teams.
          </p>
          <div className="h-1 w-12 bg-teal-600 rounded-full mx-auto mt-2.5" />
        </div>

        {/* Testimonials Card Slider Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-slate-50/60 border border-slate-200/80 p-6 sm:p-7 rounded-2xl flex flex-col justify-between shadow-[0_4px_15px_-3px_rgba(15,23,42,0.02)] hover:bg-white hover:border-teal-500/20 hover:shadow-md transition-all group duration-300"
            >
              {/* Quote Accent Ornament */}
              <div className="absolute top-6 right-6 text-teal-600/10 h-8 w-8 transition-transform duration-300 group-hover:scale-110">
                <Quote className="h-full w-full rotate-180 opacity-80" />
              </div>

              {/* Story */}
              <div className="space-y-4">
                {/* Stars Indicator */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-500" />
                  ))}
                </div>

                <p className="text-slate-650 font-sans text-xs sm:text-sm leading-relaxed italic text-slate-700">
                  &ldquo;{test.text}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="text-slate-900 font-display font-extrabold text-sm sm:text-base tracking-tight">
                    {test.patientName}
                  </h3>
                  <p className="text-slate-500 text-[11px] mt-0.5 font-sans">
                    Resident &middot; {test.location}
                  </p>
                </div>
                <span className="text-[10px] bg-teal-50 border border-teal-100 text-teal-700 font-sans uppercase tracking-wider font-bold px-2.5 py-1 rounded-full">
                  {test.department}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Local trust statement banner */}
        <div className="mt-16 text-center max-w-lg mx-auto bg-slate-50 border border-slate-205/10 border-slate-200/60 rounded-2xl p-4 shadow-xs">
          <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed">
            *Every testimonial represents a real therapeutic history recorded at Sharda Medicity. Patient anonymity and details are protected under legal clinical ethics.
          </p>
        </div>

      </div>
    </section>
  );
}
