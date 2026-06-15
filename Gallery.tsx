/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
const buildingImg = '/building.jpg';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Grid, Sparkles, SlidersHorizontal, Image as ImageIcon } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState<'all' | 'exterior' | 'interior' | 'diagnostics' | 'clinical'>('all');
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  const categories = [
    { label: 'All Photos', value: 'all' },
    { label: 'Exterior Profile', value: 'exterior' },
    { label: 'Interiors & Wards', value: 'interior' },
    { label: 'Diagnostics & Labs', value: 'diagnostics' },
    { label: 'Surgical Suites', value: 'clinical' },
  ];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => filter === 'all' || item.category === filter
  );

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-slate-50 border-t border-b border-slate-100">
      {/* Background aesthetics */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-teal-500/2 filter blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-sky-500/2 filter blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Banner */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-teal-700 font-sans font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100">
            CLINICAL PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Realistic Hospital Galleries
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Take a visual tour of our healthcare facilities in Sigra, Varanasi. Authentic photographs representing our real clinical equipment and hospital aesthetics.
          </p>
          <div className="h-1 w-12 bg-teal-600 rounded-full mx-auto mt-2.5" />
        </div>

        {/* Filter Sliders */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value as any)}
              className={`px-4.5 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wide transition-all border cursor-pointer ${
                filter === cat.value
                  ? 'bg-teal-600 text-white border-teal-600 font-bold shadow-md shadow-teal-500/10'
                  : 'bg-white text-slate-650 border-slate-200 hover:bg-slate-100 hover:text-slate-900 shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              // Resolve actual buildingImg dynamically for authenticity
              const finalImageSrc = item.image === 'building' ? buildingImg : item.image;

              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setActivePhoto(finalImageSrc)}
                  className="group relative bg-white border border-slate-200/80 rounded-2xl overflow-hidden cursor-pointer shadow-[0_5px_15px_-5px_rgba(15,23,42,0.03)] hover:border-teal-500/20 hover:shadow-lg transition-all duration-300"
                >
                  {/* Photo Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    {/* Real building marker/badge */}
                    {item.image === 'building' && (
                      <div className="absolute top-3.5 left-3.5 z-20 bg-teal-600 text-white font-sans font-bold text-[9px] px-2.5 py-1 rounded shadow">
                        REAL PREVIEW
                      </div>
                    )}
                    <img
                      src={finalImageSrc}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 scale-101 group-hover:scale-108"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Hover Tint Overlay */}
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="p-3 bg-teal-650 bg-teal-600 text-white rounded-full shadow-md transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                        <Eye className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  {/* Descriptions */}
                  <div className="p-5 space-y-1.5 border-t border-slate-100 bg-white">
                    <span className="text-[10px] text-teal-700 font-sans uppercase tracking-widest font-bold block">
                      {item.category} unit
                    </span>
                    <h3 className="text-slate-900 font-display font-extrabold text-sm sm:text-base tracking-tight leading-snug group-hover:text-teal-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          id="lightbox"
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-xl border border-slate-800 shadow-2xl">
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 p-2.5 bg-slate-900/80 border border-slate-700 rounded-full text-white hover:bg-teal-600 hover:text-white hover:border-teal-500 transition-colors"
            >
              &times; Close
            </button>
            <img
              src={activePhoto}
              alt="Enlarged Hospital View"
              className="w-full h-auto max-h-[80vh] object-contain rounded"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </section>
  );
}
