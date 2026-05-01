"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { donationTiers } from "@/lib/constants";

export default function DonationTier({
  amount,
  impact,
  isSelected,
  onClick,
}: {
  amount: number | string;
  impact: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  const isCustom = amount === "custom";

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full p-5 rounded-xl text-left transition-all duration-300 ${
        isSelected
          ? "bg-gold text-navy shadow-lg shadow-gold/20"
          : "bg-white border border-cream-warm hover:border-gold/30 hover:shadow-lg"
      }`}
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            isSelected ? "bg-navy" : "bg-gold/10"
          }`}
        >
          <Heart
            size={16}
            className={isSelected ? "text-gold" : "text-gold"}
          />
        </div>
        <span
          className={`font-display text-2xl font-bold ${
            isSelected ? "text-navy" : "text-navy"
          }`}
        >
          {isCustom ? "Custom" : `$${amount}`}
        </span>
      </div>
      <p
        className={`text-sm ${
          isSelected ? "text-navy/70" : "text-navy/60"
        }`}
      >
        {impact}
      </p>
    </motion.button>
  );
}