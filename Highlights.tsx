/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldAlert, Award, Heart, CheckSquare } from 'lucide-react';

export default function Highlights() {
  const items = [
    {
      icon: ShieldAlert,
      title: '24/7 Emergency Response',
      value: 'Instant Critical Help',
      desc: 'Rapid ICU dispatch and emergency specialist care.',
      glowColor: 'hover:shadow-[0_12px_30px_rgba(234,88,12,0.06)]',
      iconColor: 'text-[#ea580c] bg-orange-50 border-orange-100'
    },
    {
      icon: CheckSquare,
      title: 'Advanced Diagnostics',
      value: 'State-of-the-Art',
      desc: 'High-precision computerized scanning & pathology assays.',
      glowColor: 'hover:shadow-[0_12px_30px_rgba(14,165,233,0.06)]',
      iconColor: 'text-sky-600 bg-sky-50 border-sky-100'
    },
    {
      icon: Award,
      title: 'Neuro & Spinal Experts',
      value: 'BHU Specialized',
      desc: 'Led by premium micro-neurosurgical surgeon Dr. Keshri.',
      glowColor: 'hover:shadow-[0_12px_30px_rgba(13,148,136,0.06)]',
      iconColor: 'text-teal-600 bg-teal-50 border-teal-100'
    },
    {
      icon: Heart,
      title: 'Patient-First Focus',
      value: 'Compassionate Care',
      desc: 'Empathetic medical protocols with comfortable ward rooms.',
      glowColor: 'hover:shadow-[0_12px_30px_rgba(244,63,94,0.06)]',
      iconColor: 'text-rose-600 bg-rose-50 border-rose-100'
    }
  ];

  return (
    <section className="relative z-10 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-white border border-slate-200/60 rounded-xl p-5 hover:border-teal-500/30 shadow-[0_4px_20px_rgba(15,23,42,0.02)] transition-all duration-300 ${item.glowColor}`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-lg border ${item.iconColor} transition-all duration-300 group-hover:scale-105`}>
                  <IconComponent className="h-5 w-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-teal-600 font-sans block">
                    {item.value}
                  </span>
                  <h3 className="text-slate-800 font-display font-bold text-sm sm:text-base tracking-tight group-hover:text-teal-700 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
              <p className="text-slate-500 font-sans text-xs mt-3 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
