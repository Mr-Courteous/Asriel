"use client";

import { motion } from "framer-motion";
import { Users, Award, Shield, Briefcase } from "lucide-react";

const boardMembers = [
  {
    name: "Lamidi (LMD)",
    role: "Founder",
    bio: "Visionary leader and philanthropist dedicated to educational empowerment and community development.",
    icon: Award,
  },
  {
    name: "Christiana Lamidi",
    role: "Co-founder",
    bio: "Educator and mentor experienced in developing student-focused educational programs.",
    icon: Briefcase,
  },
  {
    name: "Olasupo Samuel Awoleru",
    role: "Board Member",
    bio: "Committed to organizational excellence and community impact with years of experience in leadership.",
    icon: Shield,
  },
];

export default function BoardMembersPage() {
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
              Our Governance
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6 hero-heading">
              Board Members
            </h1>
            <p className="text-lg text-cream/70 leading-relaxed">
              Our board provides strategic oversight and ensures we remain true to our mission of empowering the next generation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-cream-warm shadow-sm hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                  <member.icon className="w-10 h-10 text-gold" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy mb-2">
                  {member.name}
                </h3>
                <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-4">
                  {member.role}
                </p>
                <p className="text-navy/60 leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gold">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-6">
              Connect With Us
            </h2>
            <p className="text-navy/70 max-w-xl mx-auto mb-8">
              Interested in our governance or looking to partner with our board? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Contact Board
              </a>
              <a href="/about" className="btn-outline border-navy text-navy hover:bg-navy hover:text-cream">
                Back to About
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
