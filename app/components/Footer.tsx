"use client";

import Link from "next/link";
import { Compass, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {

  return (
    <footer className="bg-charcoal text-linen/90 pt-16 pb-8 border-t border-charcoal/50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-full bg-sand/15 text-sand">
              <Compass size={18} />
            </div>
            <span className="font-serif text-base font-bold tracking-widest text-linen">
              VERDANT HAVEN
            </span>
          </div>
          <p className="text-sm text-linen/75 leading-relaxed">
            A sanctuary of eco-luxury and deep relaxation, designed to immerse you in the healing presence of nature.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a href="#" className="p-2 rounded-full bg-linen/5 hover:bg-sand/20 text-linen hover:text-sand transition-all duration-300" aria-label="Instagram">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="#" className="p-2 rounded-full bg-linen/5 hover:bg-sand/20 text-linen hover:text-sand transition-all duration-300" aria-label="Facebook">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" className="p-2 rounded-full bg-linen/5 hover:bg-sand/20 text-linen hover:text-sand transition-all duration-300" aria-label="Twitter">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
          </div>

        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-sm font-semibold tracking-wider text-sand uppercase">
            Quick Navigation
          </h4>
          <nav className="flex flex-col gap-2.5 text-sm">
            <Link href="/" className="hover:text-sand transition-colors duration-200">
              Home
            </Link>
            <Link href="/rooms" className="hover:text-sand transition-colors duration-200">
              Our Rooms
            </Link>
            <Link href="/gallery" className="hover:text-sand transition-colors duration-200">
              Gallery Showcase
            </Link>
            <Link href="/about" className="hover:text-sand transition-colors duration-200">
              About the Haven
            </Link>
            <Link href="/contact" className="hover:text-sand transition-colors duration-200">
              Contact & Map
            </Link>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-sm font-semibold tracking-wider text-sand uppercase">
            Contact Us
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-linen/85">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-sand shrink-0 mt-0.5" />
              <span>100 Whispering Pines Rd, Sage Valley, OR 97401</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-sand shrink-0" />
              <span>+1 (541) 555-0199</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-sand shrink-0" />
              <span>stay@verdanthaven.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-sm font-semibold tracking-wider text-sand uppercase">
            Join the Sanctuary
          </h4>
          <p className="text-sm text-linen/75 leading-relaxed">
            Subscribe to receive seasonal stories, exclusive wellness tips, and resort offers.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 mt-1">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-linen/5 border border-linen/15 text-linen placeholder-linen/50 text-sm px-4 py-2 rounded-full focus:outline-none focus:border-sand/50 transition-colors"
              required
            />
            <button
              type="submit"
              className="p-2.5 rounded-full bg-sand text-charcoal hover:bg-sand-hover transition-colors shadow-md"
              aria-label="Subscribe"
            >
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-linen/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-linen/60">
        <p>&copy; {new Date().getFullYear()} Verdant Haven Resort. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-sand transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-sand transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-sand transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
