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

const programImages = [
  "010139cb-e206-478e-bc7f-cc3480d0f79b.JPG",
  "02dd81d0-f315-4fc7-86d0-a22174131f75.JPG",
  "17345d7f-9e4b-4a09-b315-31560dc30951.JPG",
  "179a2bf7-d09f-42a6-bf39-3315c926d804.JPG",
  "25aa93d8-198b-4dba-b843-f2d58a493bb8.JPG",
  "298d0a8f-9044-4ab5-bf06-b71d6134bd36.JPG",
];

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
      {/* Program Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors duration-500 z-10" />
        <img
          src={`/images/New/${programImages[index % programImages.length]}`}
          alt={program.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        {/* Icon over image */}
        <div className="absolute top-4 left-4 z-20 w-12 h-12 rounded-xl bg-white/90 backdrop-blur shadow-lg flex items-center justify-center group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
          <Icon className="w-6 h-6 text-navy group-hover:text-cream" />
        </div>
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