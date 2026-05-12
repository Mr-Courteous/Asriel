"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle, Loader2 } from "lucide-react";
import { foundation } from "@/lib/constants";

const subjects = [
  { value: "partner", label: "Partner With Us" },
  { value: "volunteer", label: "Volunteer" },
  { value: "general", label: "General Inquiry" },
  { value: "scholarship", label: "Apply for Scholarship" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
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
                Thank You
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold hero-heading mb-6" style={{ color: "#faf7f2" }}>
                Message Sent!
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: "rgba(250,247,242,0.82)" }}>
                We appreciate you reaching out. Our team will get back to you
                within 24-48 hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Success Message */}
        <section className="py-20 md:py-28 bg-cream">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto text-center glass-card p-10"
            >
              <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-gold" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-4">
                We&apos;ve Received Your Message
              </h2>
              <p className="text-navy/70 leading-relaxed mb-6">
                Thank you for taking the time to connect with Asriel Foundation.
                Whether you&apos;re interested in partnering, volunteering, or
                applying for our programs, we&apos;re excited to explore how we
                can work together.
              </p>
              <p className="text-sm text-navy/50 mb-6">
                In the meantime, feel free to explore our{" "}
                <a href="/programs" className="text-gold hover:underline">
                  programs
                </a>{" "}
                or{" "}
                <a href="/donate" className="text-gold hover:underline">
                  support our mission
                </a>
                .
              </p>
              <a href="/" className="btn-primary">
                Return Home
              </a>
            </motion.div>
          </div>
        </section>
      </>
    );
  }

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
              Contact Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold hero-heading mb-6" style={{ color: "#faf7f2" }}>
              Get in Touch
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "rgba(250,247,242,0.82)" }}>
              Have questions about our programs or want to get involved? We&apos;d
              love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-2">
                Send Us a Message
              </h2>
              <p className="text-navy/70 mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as
                possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-navy mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-cream-warm focus:outline-none focus:border-gold transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-navy mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-cream-warm focus:outline-none focus:border-gold transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-navy mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-cream-warm focus:outline-none focus:border-gold transition-colors bg-white"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject) => (
                      <option key={subject.value} value={subject.value}>
                        {subject.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-navy mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-cream-warm focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Tell us about yourself and how you'd like to get involved..."
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-2">
                  Contact Information
                </h2>
                <p className="text-navy/70">
                  Prefer to reach out directly? Here&apos;s how you can contact
                  us.
                </p>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Address</h3>
                    <p className="text-navy/70">{foundation.address}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Email</h3>
                    <a
                      href="mailto:info@asrielfoundation.com"
                      className="text-navy/70 hover:text-gold transition-colors"
                    >
                      info@asrielfoundation.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Phone</h3>
                    <p className="text-navy/70">+1 (774) 360-3242</p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="glass-card p-6">
                <h3 className="font-display text-lg font-semibold text-navy mb-4">
                  Office Hours
                </h3>
                <ul className="space-y-2 text-sm text-navy/70">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
              </div>

              {/* 501(c)(3) Notice */}
              <div className="p-6 bg-cream-warm rounded-xl">
                <p className="text-sm text-navy/70">
                  <strong className="text-navy">{foundation.name}</strong> is a
                  registered 501(c)(3) non-profit organization. Your support is
                  tax-deductible to the extent allowed by law.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}