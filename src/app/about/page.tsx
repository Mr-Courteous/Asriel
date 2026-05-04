"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Globe, Leaf, Award } from "lucide-react";
import { foundation } from "@/lib/constants";
import ProjectGallery from "@/components/ProjectGallery";

const team = [
  {
    name: "Rev. Dr. John Smith",
    role: "Founder & Executive Director",
    bio: "Dedicated to education ministry for over 20 years.",
    icon: Award,
  },
  {
    name: "Sarah Johnson",
    role: "Program Director",
    bio: "Former educator with a passion for student success.",
    icon: Users,
  },
  {
    name: "Michael Chen",
    role: "STEM Coordinator",
    bio: "Engineer turned educator, inspiring future innovators.",
    icon: Globe,
  },
];

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6 hero-heading">
              Our Story
            </h1>
            <p className="text-lg text-cream/70 leading-relaxed">
              Founded on faith and a commitment to education, Asriel Foundation
              has been transforming lives since 2011.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-gold" />
              </div>
              <span className="text-gold text-sm font-medium uppercase tracking-wide">
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
              <span className="text-gold text-sm font-medium uppercase tracking-wide">
                Our Vision
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mt-2 mb-4">
                {foundation.vision}
              </h2>
              <p className="text-navy/70 leading-relaxed">
                We envision a world where every child has access to the best
                education — and the resources to maximize their God-given
                potential. Through faith and education, we are raising the next
                generation of leaders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-cream-warm">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: "Compassion",
                description:
                  "We lead with love and empathy, treating every student as valued.",
              },
              {
                icon: Users,
                title: "Integrity",
                description:
                  "We operate with transparency and accountability in all we do.",
              },
              {
                icon: Globe,
                title: "Excellence",
                description:
                  "We strive for the highest standards in education and mentorship.",
              },
              {
                icon: Leaf,
                title: "Sustainability",
                description:
                  "We build programs that last and empower communities for generations.",
              },
              {
                icon: Award,
                title: "Faith",
                description:
                  "We integrate Christian values into all aspects of our mission.",
              },
              {
                icon: Target,
                title: "Impact",
                description:
                  "We measure success by the lives transformed and futures changed.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white border border-cream-warm hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-navy mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-navy/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEI Statement */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
              Diversity, Equity & Inclusion
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-6">
              Every Child Matters
            </h2>
            <p className="text-lg text-cream/70 leading-relaxed">
              At Asriel Foundation, we believe that every child deserves
              opportunity, regardless of race, tribe, background, or
              circumstance. We actively work to remove barriers to education and
              create an inclusive environment where all students can thrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Environmental Sustainability */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Leaf className="w-7 h-7 text-gold" />
              </div>
              <div>
                <span className="text-gold text-sm font-medium uppercase tracking-wide">
                  Environmental Commitment
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mt-2 mb-4">
                  Caring for God&apos;s Creation
                </h2>
                <p className="text-navy/70 leading-relaxed">
                  We are committed to environmental stewardship. Our programs
                  incorporate sustainable practices, and we educate students on
                  the importance of caring for our environment. From paperless
                  operations to eco-friendly event planning, we strive to
                  minimize our carbon footprint while maximizing our positive
                  impact on students and communities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Gallery */}
      <ProjectGallery />

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-cream-warm">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">
              Dedicated Leaders
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white border border-cream-warm text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                  <member.icon className="w-10 h-10 text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-navy">
                  {member.name}
                </h3>
                <p className="text-gold text-sm font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-navy/60 text-sm">{member.bio}</p>
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
              Join Our Mission
            </h2>
            <p className="text-navy/70 max-w-xl mx-auto mb-8">
              Whether through volunteering, partnering, or donating, your
              contribution helps us continue our work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/donate" className="btn-primary">
                Donate Now
              </a>
              <a href="/contact" className="btn-outline border-navy text-navy hover:bg-navy hover:text-cream">
                Get Involved
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}