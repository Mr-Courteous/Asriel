"use client";

import ProjectGallery from "@/components/ProjectGallery";
import { motion } from "framer-motion";

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="min-h-[60vh] pt-32 pb-20 md:pb-28 relative flex items-center"
        style={{
          backgroundImage: "url('/images/programs_hero_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Single semi-transparent overlay for text readability */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,22,40,0.55)" }} />

        <div className="container mx-auto px-4 md:px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border text-sm font-medium mb-6" style={{ backgroundColor: "rgba(201,168,76,0.15)", borderColor: "rgba(201,168,76,0.3)", color: "#c9a84c" }}>
              Our Impact
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold hero-heading mb-6" style={{ color: "#faf7f2" }}>
              Photo Gallery
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "rgba(250,247,242,0.82)" }}>
              A visual journey of our work and the lives being transformed in our community.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="bg-cream">
        <ProjectGallery />
      </div>
    </>
  );
}
