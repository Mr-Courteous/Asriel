"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ImpactCounter from "@/components/ImpactCounter";
import ProgramCard from "@/components/ProgramCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { foundation, programs, partners } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Impact Numbers */}
      <ImpactCounter />

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-gold" />
              </div>
              <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-3 block">
                Our Mission
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mt-2 mb-4">
                {foundation.mission}
              </h2>
              <p className="text-navy/70 leading-relaxed">
                We are committed to inspiring, encouraging, and supporting
                hardworking and underprivileged elementary and secondary school
                students through comprehensive educational programs and
                mentorship.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 md:p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-gold" />
              </div>
              <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-3 block">
                Our Vision
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mt-2 mb-4">
                {foundation.vision}
              </h2>
              <p className="text-navy/70 leading-relaxed">
                We envision a world where every child has access to the best
                education — and the resources to maximize their full
                potential. Through quality education, we are raising the next
                generation of leaders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 md:py-28 bg-cream-warm">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              Our Programs
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">
              Comprehensive Educational Support
            </h2>
            <p className="text-navy/70 max-w-2xl mx-auto mt-4">
              From STEM training to scholarship support, we offer a range of
              programs designed to help students succeed academically and
              professionally.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.slice(0, 6).map((program, index) => (
              <ProgramCard key={program.id} program={program} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/programs" className="btn-outline inline-flex items-center gap-2">
              View All Programs
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>



      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Partners Section */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              Our Partners
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy">
              Collaborating for Impact
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 rounded-2xl bg-white border border-cream-warm flex items-center justify-center p-4">
                  <span className="text-sm font-medium text-navy/60 text-center leading-tight">
                    {partner}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 md:py-28 bg-gold relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #0A1628 1px, transparent 0)`,
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-navy mb-6">
              {foundation.ctaText}
            </h2>
            <p className="text-navy/70 max-w-xl mx-auto mb-8">
              Your donation helps provide scholarships, STEM training, and
              mentorship to students who need it most. Every contribution makes
              a difference.
            </p>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center px-8 py-4 bg-navy text-cream font-semibold rounded-full hover:bg-navy-light transition-all duration-300 hover:shadow-xl"
            >
              Donate Now
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}