/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const buildingImg = '/building.jpg';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, HeartPulse, Building } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Trusted Local Expertise',
      desc: 'Deeply integrated into the Sigra community, delivering healthcare based on surgical specialization and deep-seated medical ethics.'
    },
    {
      icon: HeartPulse,
      title: 'State-of-the-Art Operations',
      desc: 'Our surgical wings and critical care setup match modern clinical standards, delivering high-level security during delicate procedures.'
    },
    {
      icon: Building,
      title: 'Modern Emergency Layout',
      desc: 'An organized clinical floor plan that facilitates swift transit between emergency receiving, radiology, and active operating theatres.'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white border-b border-slate-100">
      {/* Background visual helpers */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-500/3 filter blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-sky-500/3 filter blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Copy */}
          <div className="lg:col-span-7 space-y-7">
            <div className="space-y-3.5">
              <span className="text-teal-600 font-sans font-bold text-xs uppercase tracking-widest block">
                OUR MISSION & FOUNDATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.25]">
                A Beacon of Medical Integrity & <br className="hidden sm:inline" />
                Empathetic Healthcare in Varanasi
              </h2>
              <div className="h-1 w-16 bg-teal-600 rounded-full" />
            </div>

            <div className="text-slate-600 font-sans text-sm sm:text-base space-y-4 leading-relaxed">
              <p>
                Founded on the principles of absolute trust and surgical precision, <strong className="text-slate-905 font-bold">Sharda Medicity Hospital</strong> has established itself as Varanasi’s foremost destination for advanced medical interventions, specializing in complex Neuro and Spinal trauma.
              </p>
              <p>
                We recognize that medical care is not merely about physical recovery, but about reclaiming the quality of life. For patients and family members confronting delicate spine conditions or acute emergencies, we offer absolute transparency, stellar medical intellect, and a clinical environment that prioritizes patient comfort over all else.
              </p>
            </div>

            {/* Split Grid Values */}
            <div className="space-y-4.5 pt-2">
              {values.map((v, idx) => {
                const IconComponent = v.icon;
                return (
                  <div key={idx} className="flex gap-4 p-3.5 rounded-xl bg-slate-50/60 border border-slate-100 hover:border-teal-500/20 transition-all">
                    <div className="p-2 bg-teal-50 border border-teal-100 rounded-lg text-teal-600 shrink-0">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-slate-900 font-display font-bold text-sm sm:text-base">
                        {v.title}
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Building Image Frame */}
          <div className="lg:col-span-5 relative">
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-155/30 group"
            >
              {/* Outer Gradient Overlay to keep text card legible */}
              <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10 transition-opacity duration-500" />
              
              <img
                src={buildingImg}
                alt="Sharda Medicity Facade"
                className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Float badge */}
              <div className="absolute bottom-6 left-6 right-6 z-20 p-4.5 rounded-xl bg-white/95 border border-slate-200/50 backdrop-blur-md shadow-lg">
                <span className="text-[10px] uppercase font-bold text-teal-700 font-sans tracking-wider block">
                  SIGRA, VARANASI
                </span>
                <h4 className="text-slate-950 font-display font-extrabold text-sm sm:text-base mt-1">
                  Fully Verified Medical Facility
                </h4>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                  Located near major transport axes matching the emergency protocol for immediate access in Varanasi.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
