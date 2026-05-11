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
  LucideIcon,
} from "lucide-react";
import { programs } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  BookOpen,
  GraduationCap,
  HandHeart,
  Users,
  Award,
  Cross,
};

export default function ProgramCard({
  program,
  index,
}: {
  program: (typeof programs)[0];
  index: number;
}) {
  const Icon = iconMap[program.icon] || BookOpen;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group rounded-2xl bg-white border border-cream-warm hover:border-gold/30 transition-all duration-300 hover:shadow-xl hover:shadow-gold/5 overflow-hidden flex flex-col h-full"
    >
      {/* Program Visual */}
      <div className="relative h-48 w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-navy/90 via-slate-900 to-navy">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08)_0%,_transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(255,255,255,0.08)_10%,_transparent_10%)_0_0/18px_18px] opacity-30" />
        <div className="absolute top-4 left-4 z-20 w-14 h-14 rounded-2xl bg-cream/90 shadow-lg flex items-center justify-center transition-all duration-300 group-hover:bg-gold">
          <Icon className="w-7 h-7 text-navy group-hover:text-cream" />
        </div>
        <div className="absolute bottom-4 left-4 z-20 rounded-full border border-cream/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cream">
          {program.title}
        </div>
        {program.id === "utme" && (
          <div className="absolute bottom-4 right-4 z-20 w-12 h-12">
            <img
              src="/images/jamblogo.png"
              alt="JAMB Logo"
              className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        )}
      </div>

      <div className="p-6 md:p-8 flex-1 flex flex-col">
        <h3 className="font-display text-xl font-semibold text-navy mb-3">
          {program.title}
        </h3>

      <p className="text-navy/70 text-sm leading-relaxed mb-4">
        {program.description}
      </p>

        <div className="pt-4 mt-auto border-t border-cream-warm">
          <p className="text-xs text-gold font-medium uppercase tracking-wide mb-1">
            Eligibility
          </p>
          <p className="text-sm text-navy/60">{program.eligibility}</p>
        </div>
      </div>
    </motion.div>
  );
}