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
      className="group p-6 md:p-8 rounded-2xl bg-white border border-cream-warm hover:border-gold/30 transition-all duration-300 hover:shadow-xl hover:shadow-gold/5"
    >
      <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
        <Icon className="w-7 h-7 text-gold" />
      </div>

      <h3 className="font-display text-xl font-semibold text-navy mb-3">
        {program.title}
      </h3>

      <p className="text-navy/70 text-sm leading-relaxed mb-4">
        {program.description}
      </p>

      <div className="pt-4 border-t border-cream-warm">
        <p className="text-xs text-gold font-medium uppercase tracking-wide mb-1">
          Eligibility
        </p>
        <p className="text-sm text-navy/60">{program.eligibility}</p>
      </div>
    </motion.div>
  );
}