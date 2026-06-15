/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { DEPARTMENTS } from '../data';
import { motion } from 'motion/react';
import { 
  Activity, 
  ShieldAlert, 
  Stethoscope, 
  Layers, 
  Sparkles, 
  Heart 
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<any>> = {
  Activity: Activity,
  FlameKindling: ShieldAlert, // fallback for Emergency
  Stethoscope: Stethoscope,
  Layers: Layers,
  Sparkles: Sparkles,
  Heart: Heart,
};

export default function Departments() {
  return (
    <section id="departments" className="py-24 relative overflow-hidden bg-[#f0f7ff]/50 border-t border-b border-slate-100/80">
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/2 filter blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-teal-700 font-sans font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full bg-teal-55/70 bg-teal-50 border border-teal-100/80">
            SUPER-SPECIALITY DEPARTMENTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Eminent Medical Departments
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Sharda Medicity is structured with six specialized medical wings, configured to deliver integrated therapeutic solutions under strict safety guidelines.
          </p>
          <div className="h-1 w-12 bg-teal-600 rounded-full mx-auto mt-2.5" />
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEPARTMENTS.map((dept, idx) => {
            const IconComponent = iconMap[dept.iconName] || Activity;
            
            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="group relative bg-white border border-slate-200/60 rounded-2xl p-6 hover:border-teal-500/30 transition-all duration-300 hover:shadow-[0_15px_40px_-15px_rgba(15,23,42,0.06)]"
              >
                {/* Icon Circle */}
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white border border-teal-100 transition-all duration-300">
                  <IconComponent className="h-6 w-6" />
                </div>

                {/* Copy */}
                <div className="mt-5 space-y-2">
                  <h3 className="text-slate-900 font-display font-bold text-lg group-hover:text-teal-700 transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-teal-700 font-sans text-xs font-bold uppercase tracking-wider">
                    {dept.shortDescription}
                  </p>
                  <p className="text-slate-500 font-sans text-xs sm:text-sm pt-2 leading-relaxed">
                    {dept.description}
                  </p>
                </div>

                {/* Base hover light indicator */}
                <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
