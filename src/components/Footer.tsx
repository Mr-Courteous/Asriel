"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { foundation, navLinks, socialLinks } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-cream/80 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/images/7f06501d-48c3-4493-a5ef-e3b1f5083779.png"
                alt="Asriel Foundation Logo"
                className="h-32 w-auto object-contain brightness-0 invert"
              />
              <span className="font-display text-4xl font-semibold text-cream">
                {foundation.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-cream/60">
              {foundation.tagline}
              <br />
              {foundation.mission}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center hover:bg-gold transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon === "Facebook" && <Facebook size={18} />}
                  {social.icon === "Twitter" && <Twitter size={18} />}
                  {social.icon === "Instagram" && <Instagram size={18} />}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg text-cream font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-display text-lg text-cream font-semibold">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-sm">{foundation.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <a
                  href="mailto:info@asrielfoundation.org"
                  className="text-sm hover:text-gold transition-colors duration-200"
                >
                  info@asrielfoundation.org
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-display text-lg text-cream font-semibold">
              Stay Updated
            </h4>
            <p className="text-sm text-cream/60">
              Subscribe to our newsletter for updates on our programs and impact.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-full bg-navy-light border border-navy-light text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gold text-navy rounded-full font-semibold hover:bg-gold-light transition-colors duration-200"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-navy-light">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-cream/40">
              © {currentYear} {foundation.name}. All rights reserved.
            </p>
            <p className="text-sm text-cream/40">
              {foundation.name} is a registered 501(c)(3) non-profit. EIN:{" "}
              {foundation.ein}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}