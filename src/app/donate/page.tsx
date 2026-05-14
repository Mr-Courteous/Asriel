"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Check, ArrowRight, Shield, ExternalLink } from "lucide-react";
import { donationTiers, foundation } from "@/lib/constants";

const PAYPAL_BASE = "https://www.paypal.com/donate";
const PAYPAL_BUSINESS_EMAIL = "olulamidi@gmail.com";

function buildPayPalUrl(amount?: number | string) {
  const params = new URLSearchParams({
    business: PAYPAL_BUSINESS_EMAIL,
    currency_code: "USD",
    item_name: "Asriel Foundation Donation",
  });

  if (amount && amount !== "custom") {
    params.set("amount", String(amount));
  }

  return `${PAYPAL_BASE}?${params.toString()}`;
}

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | string | null>(
    null
  );
  const [customAmount, setCustomAmount] = useState("");
  const [customError, setCustomError] = useState("");

  const handleTierClick = (amount: number | string) => {
    setSelectedAmount(amount);
    setCustomAmount("");
    setCustomError("");

    if (amount !== "custom") {
      window.open(buildPayPalUrl(amount), "_blank", "noopener,noreferrer");
    }
  };

  const handleCustomDonate = () => {
    const val = parseFloat(customAmount);
    if (!customAmount || isNaN(val) || val <= 0) {
      setCustomError("Please enter a valid amount.");
      return;
    }
    setCustomError("");
    window.open(buildPayPalUrl(val), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="min-h-[60vh] pt-32 pb-20 md:pb-28 relative flex items-center"
        style={{
          backgroundImage: "url('/images/programs_hero_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(10,22,40,0.58)" }}
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full border text-sm font-medium mb-6"
              style={{
                backgroundColor: "rgba(201,168,76,0.15)",
                borderColor: "rgba(201,168,76,0.3)",
                color: "#c9a84c",
              }}
            >
              Support Our Mission
            </span>
            <h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold hero-heading mb-6"
              style={{ color: "#faf7f2" }}
            >
              Make a Difference Today
            </h1>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "rgba(250,247,242,0.82)" }}
            >
              Choose an amount below — you'll be taken directly to PayPal where
              you can pay by card, PayPal balance, or Venmo.
            </p>
            <p
              className="text-sm mt-4"
              style={{ color: "rgba(250,247,242,0.60)" }}
            >
              {foundation.nonprofitStatement}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Donation Section ── */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-5 gap-10"
            >
              {/* ── Left: Tier Cards ── */}
              <div className="lg:col-span-3">
                <h2 className="font-display text-2xl font-bold text-navy mb-2">
                  Choose Your Donation Amount
                </h2>
                <p className="text-sm text-navy/60 mb-8">
                  Click any amount to open PayPal — it's pre-filled and ready.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {donationTiers.map((tier) => {
                    const isCustomTier = tier.amount === "custom";
                    const isSelected = selectedAmount === tier.amount;

                    return (
                      <motion.button
                        key={tier.amount}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleTierClick(tier.amount)}
                        aria-label={`Donate ${tier.label} — ${tier.impact}`}
                        className={`p-5 rounded-xl text-left transition-all duration-300 group ${
                          isSelected
                            ? "bg-gold text-navy shadow-lg shadow-gold/20"
                            : "bg-white border border-cream-warm hover:border-gold/40 hover:shadow-lg"
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                              isSelected ? "bg-navy" : "bg-gold/10"
                            }`}
                          >
                            <Heart size={15} className="text-gold" />
                          </div>
                          <span className="font-display text-2xl font-bold text-navy">
                            {tier.label}
                          </span>
                          {!isCustomTier && (
                            <ExternalLink
                              size={14}
                              className={`ml-auto transition-opacity ${
                                isSelected
                                  ? "opacity-60"
                                  : "opacity-0 group-hover:opacity-40"
                              } text-navy`}
                            />
                          )}
                        </div>
                        <p className="text-sm text-navy/60">{tier.impact}</p>
                      </motion.button>
                    );
                  })}
                </div>

                {/* ── Custom Amount Input ── */}
                <AnimatePresence>
                  {selectedAmount === "custom" && (
                    <motion.div
                      key="custom-input"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-white border border-cream-warm rounded-xl p-5 mb-4">
                        <label className="block text-sm font-medium text-navy mb-2">
                          Enter your amount (USD)
                        </label>
                        <div className="flex gap-3">
                          <div className="relative flex-1">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/50 font-medium">
                              $
                            </span>
                            <input
                              type="number"
                              min="1"
                              step="1"
                              value={customAmount}
                              onChange={(e) => {
                                setCustomAmount(e.target.value);
                                setCustomError("");
                              }}
                              onKeyDown={(e) =>
                                e.key === "Enter" && handleCustomDonate()
                              }
                              placeholder="0.00"
                              className="w-full pl-8 pr-4 py-3 rounded-xl border border-cream-warm focus:outline-none focus:border-gold text-navy"
                            />
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={handleCustomDonate}
                            className="btn-primary flex items-center gap-2 whitespace-nowrap"
                          >
                            Donate Now
                            <ArrowRight size={16} />
                          </motion.button>
                        </div>
                        {customError && (
                          <p className="text-red-500 text-xs mt-2">
                            {customError}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ── Trust Badge ── */}
                <div className="flex items-center gap-2 text-xs text-navy/50 mt-2">
                  <Shield size={13} className="text-gold" />
                  <span>
                    Payments processed securely by PayPal. Card, PayPal &amp;
                    Venmo accepted.
                  </span>
                </div>
              </div>

              {/* ── Right: Impact Panel ── */}
              <div className="lg:col-span-2">
                <div className="glass-card p-6 sticky top-24">
                  <h3 className="font-display text-lg font-semibold text-navy mb-1">
                    Your Impact
                  </h3>
                  <p className="text-xs text-navy/50 mb-5">
                    Here's what each donation unlocks for a student in need.
                  </p>

                  <ul className="space-y-4">
                    {donationTiers
                      .filter((t) => t.amount !== "custom")
                      .map((tier) => (
                        <li
                          key={tier.amount}
                          className="flex items-start gap-3"
                        >
                          <div className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check size={11} className="text-gold" />
                          </div>
                          <span className="text-sm text-navy/70">
                            <strong className="text-navy font-semibold">
                              {tier.label}
                            </strong>{" "}
                            — {tier.impact}
                          </span>
                        </li>
                      ))}
                  </ul>

                  <div className="mt-6 pt-6 border-t border-cream-warm">
                    <p className="text-xs text-navy/50 text-center leading-relaxed">
                      {foundation.nonprofitStatement}
                    </p>
                  </div>

                  {/* PayPal logo hint */}
                  <div className="mt-4 flex items-center justify-center gap-2 opacity-50">
                    <Shield size={12} className="text-navy" />
                    <span className="text-[11px] text-navy/60 font-medium">
                      Secured by PayPal
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}