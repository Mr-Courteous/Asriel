"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  BookOpen,
  GraduationCap,
  HandHeart,
  Users,
  Award,
  Cross,
  CheckCircle,
  LucideIcon,
} from "lucide-react";
import { foundation } from "@/lib/constants";
import { programs, programLogos } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  BookOpen,
  GraduationCap,
  HandHeart,
  Users,
  Award,
  Cross,
};

export default function ProgramsPage() {
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
              Our Programs
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold hero-heading mb-6" style={{ color: "#faf7f2" }}>
              Educational Programs
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "rgba(250,247,242,0.82)" }}>
              Comprehensive support designed to help students succeed
              academically, technologically, and spiritually.
            </p>
            <p className="text-base leading-relaxed mt-6" style={{ color: "rgba(250,247,242,0.82)" }}>
              {foundation.nonprofitStatement}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {programs.map((program, index) => {
              const Icon = iconMap[program.icon] || BookOpen;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-gold" />
                      </div>
                      <span className="text-gold text-sm font-medium uppercase tracking-wide">
                        Program {index + 1}
                      </span>
                    </div>

                    <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
                      {program.title}
                    </h2>

                    <p className="text-navy/70 text-lg leading-relaxed mb-6">
                      {program.description}
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-navy">
                            Eligibility
                          </h4>
                          <p className="text-navy/70 text-sm">
                            {program.eligibility}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-navy">
                            How to Apply
                          </h4>
                          <p className="text-navy/70 text-sm">
                            {program.howToApply}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visual */}
                  <div
                    className={`glass-card p-4 md:p-6 overflow-hidden ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative aspect-video rounded-xl bg-navy overflow-hidden flex items-center justify-center">
                      {(() => {
                        const logoSrc = programLogos[program.id];
                        if (logoSrc) {
                          return (
                            <>
                              <img
                                src={logoSrc}
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                            </>
                          );
                        }
                        return (
                          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-navy/10" />
                        );
                      })()}
                      
                      <div className="relative z-10 text-center">
                        <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                          <Icon className="w-10 h-10 text-gold" />
                        </div>
                        <p className="text-navy font-bold text-lg drop-shadow-sm">
                          {program.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 md:py-28 bg-cream-warm">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
              Get Started
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-6">
              Ready to Apply?
            </h2>
            <p className="text-navy/70 text-lg leading-relaxed mb-8">
              Our programs are designed to support students at various levels
              of their educational journey. Whether you&apos;re looking for
              academic support, STEM training, or spiritual guidance, we have a
              program for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Contact Us
              </a>
              <a href="/donate" className="btn-outline">
                Support Our Programs
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}