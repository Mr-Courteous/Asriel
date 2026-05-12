"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/lib/constants";

export default function ProjectGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % galleryImages.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            Our Gallery
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy mb-4">
            Our Work in the Community
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto">
            A visual journey of our impact, showcasing the joy, learning, and growth of our amazing students and community members.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 10) * 0.05 }}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-navy/5 shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={`/images/New/${img}`}
                alt="Asriel Foundation Community Work"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-navy/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="rounded-full bg-white/20 p-3 backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="text-white" size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 p-4 md:p-10 backdrop-blur-xl"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 z-[110] rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
            >
              <X size={24} />
            </motion.button>

            {/* Navigation Buttons */}
            <button
              className="absolute left-4 md:left-8 z-[110] p-3 rounded-full bg-white/5 text-white/50 hover:bg-white/10 hover:text-white transition-all duration-300 backdrop-blur-sm"
              onClick={handlePrev}
            >
              <ChevronLeft size={36} />
            </button>

            <button
              className="absolute right-4 md:right-8 z-[110] p-3 rounded-full bg-white/5 text-white/50 hover:bg-white/10 hover:text-white transition-all duration-300 backdrop-blur-sm"
              onClick={handleNext}
            >
              <ChevronRight size={36} />
            </button>
            
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.9, opacity: 0, x: 20 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              exit={{ scale: 0.9, opacity: 0, x: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-h-full max-w-6xl w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`/images/New/${galleryImages[selectedIndex]}`}
                alt="Enlarged gallery image"
                className="max-h-[85vh] w-auto rounded-2xl shadow-2xl border border-white/10"
              />
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-sm font-medium">
              {selectedIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
