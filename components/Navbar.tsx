"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route-style navigation
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const linkClass =
    "text-text-tertiary hover:text-text-secondary transition-colors text-sm";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/95 backdrop-blur-sm border-b border-border-subtle"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/logo-full.svg"
            alt="memstalker"
            width={140}
            height={32}
            priority
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="https://github.com/willynikes2/knowledge-base-server#readme"
            className={linkClass}
          >
            Docs
          </a>
          <a href="/#pricing" className={linkClass}>
            Pricing
          </a>
          <a
            href="https://github.com/willynikes2/knowledge-base-server"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            GitHub
          </a>
        </div>

        {/* Desktop CTA + Mobile hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="/#early-access"
            className="bg-white text-black font-semibold text-sm px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            Start Free
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-text-secondary transition-all duration-200 ${
                mobileOpen ? "rotate-45 translate-y-1" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-text-secondary transition-all duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-text-secondary transition-all duration-200 ${
                mobileOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-bg/95 backdrop-blur-sm border-t border-border-subtle px-6 py-6 flex flex-col gap-4">
          <a
            href="https://github.com/willynikes2/knowledge-base-server#readme"
            className={linkClass}
            onClick={() => setMobileOpen(false)}
          >
            Docs
          </a>
          <a
            href="/#pricing"
            className={linkClass}
            onClick={() => setMobileOpen(false)}
          >
            Pricing
          </a>
          <a
            href="https://github.com/willynikes2/knowledge-base-server"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
            onClick={() => setMobileOpen(false)}
          >
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
}
