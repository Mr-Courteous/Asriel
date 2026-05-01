"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Check, LucideIcon } from "lucide-react";
import { donationTiers, foundation } from "@/lib/constants";
import PayPalDonateButton from "@/components/PayPalDonateButton";

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | string | null>(
    null
  );
  const [customAmount, setCustomAmount] = useState("");
  const [isDonationComplete, setIsDonationComplete] = useState(false);

  // Replace with your actual PayPal hosted button ID
  // Get it from https://www.paypal.com/donate/buttons
  const PAYPAL_BUTTON_ID = "YOUR_PAYPAL_HOSTED_BUTTON_ID";

  const handleDonate = () => {
    if (selectedAmount === "custom" && customAmount) {
      // For custom amounts, redirect to PayPal donate page
      window.open(
        `https://www.paypal.com/donate/?hosted_button_id=${PAYPAL_BUTTON_ID}`,
        "_blank"
      );
    } else if (selectedAmount && selectedAmount !== "custom") {
      // For preset amounts, you would typically pass the amount to PayPal
      // For now, we'll show the PayPal button which handles the donation
      setIsDonationComplete(true);
    }
  };

  if (isDonationComplete) {
    return (
      <>
        {/* Hero */}
        <section className="pt-32 pb-20 md:pb-28 bg-navy relative overflow-hidden grain-overlay">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,168,76,0.1)_0%,_transparent_50%)]" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
                Thank You
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
                God Bless You!
              </h1>
              <p className="text-lg text-cream/70 leading-relaxed">
                Your generosity will make a real difference in the lives of
                students who need it most.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Thank You Message */}
        <section className="py-20 md:py-28 bg-cream">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto text-center glass-card p-10"
            >
              <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-gold" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-4">
                Thank You for Your Donation!
              </h2>
              <p className="text-navy/70 leading-relaxed mb-6">
                Your gift helps provide scholarships, STEM training, and
                mentorship to underprivileged students. Together, we are
                building a brighter future for the next generation of leaders.
              </p>
              <p className="text-sm text-navy/50">
                {foundation.name} is a registered 501(c)(3) non-profit. Your
                donation may be tax-deductible.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/" className="btn-primary">
                  Return Home
                </a>
                <a href="/contact" className="btn-outline">
                  Stay Connected
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pb-28 bg-navy relative overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,168,76,0.1)_0%,_transparent_50%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
              Support Our Mission
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
              Make a Difference
            </h1>
            <p className="text-lg text-cream/70 leading-relaxed">
              Your donation helps provide education, resources, and hope to
              students who need it most.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-5 gap-8"
            >
              {/* Amount Selection */}
              <div className="lg:col-span-3">
                <h2 className="font-display text-2xl font-bold text-navy mb-6">
                  Choose Your Donation Amount
                </h2>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {donationTiers.map((tier, index) => (
                    <motion.button
                      key={tier.amount}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedAmount(tier.amount)}
                      className={`p-5 rounded-xl text-left transition-all duration-300 ${
                        selectedAmount === tier.amount
                          ? "bg-gold text-navy shadow-lg shadow-gold/20"
                          : "bg-white border border-cream-warm hover:border-gold/30 hover:shadow-lg"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            selectedAmount === tier.amount
                              ? "bg-navy"
                              : "bg-gold/10"
                          }`}
                        >
                          <Heart
                            size={16}
                            className={
                              selectedAmount === tier.amount
                                ? "text-gold"
                                : "text-gold"
                            }
                          />
                        </div>
                        <span
                          className={`font-display text-2xl font-bold ${
                            selectedAmount === tier.amount
                              ? "text-navy"
                              : "text-navy"
                          }`}
                        >
                          {tier.amount === "custom"
                            ? "Custom"
                            : `$${tier.amount}`}
                        </span>
                      </div>
                      <p
                        className={`text-sm ${
                          selectedAmount === tier.amount
                            ? "text-navy/70"
                            : "text-navy/60"
                        }`}
                      >
                        {tier.impact}
                      </p>
                    </motion.button>
                  ))}
                </div>

                {/* Custom Amount Input */}
                {selectedAmount === "custom" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mb-6"
                  >
                    <label className="block text-sm font-medium text-navy mb-2">
                      Enter Custom Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/60">
                        $
                      </span>
                      <input
                        type="number"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        placeholder="0.00"
                        className="w-full pl-8 pr-4 py-3 rounded-xl border border-cream-warm focus:outline-none focus:border-gold"
                      />
                    </div>
                  </motion.div>
                )}

                {/* PayPal Button */}
                <div className="mt-8">
                  <h3 className="font-display text-lg font-semibold text-navy mb-4">
                    Complete Your Donation
                  </h3>
                  <div className="bg-white rounded-xl border border-cream-warm p-6">
                    <PayPalDonateButton hostedButtonId={PAYPAL_BUTTON_ID} />
                    <p className="text-xs text-navy/50 mt-4 text-center">
                      Secure donation powered by PayPal
                    </p>
                  </div>
                </div>
              </div>

              {/* Impact Info */}
              <div className="lg:col-span-2">
                <div className="glass-card p-6 sticky top-24">
                  <h3 className="font-display text-lg font-semibold text-navy mb-4">
                    Your Impact
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-navy/70">
                        $10 provides school supplies for one student
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-navy/70">
                        $25 covers a student&apos;s exam registration fee
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-navy/70">
                        $50 provides textbooks for a month
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-navy/70">
                        $100 funds a semester scholarship
                      </span>
                    </li>
                  </ul>

                  <div className="mt-6 pt-6 border-t border-cream-warm">
                    <p className="text-xs text-navy/50 text-center">
                      {foundation.name} is a registered 501(c)(3) non-profit
                      organization. EIN: {foundation.ein}
                    </p>
                    <p className="text-xs text-navy/50 text-center mt-2">
                      Your donation may be tax-deductible.
                    </p>
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