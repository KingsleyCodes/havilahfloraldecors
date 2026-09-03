"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// =========================================================================
// 🎨 MANUAL LOGO SIZING CONFIGURATION
// =========================================================================
const LOGO_CONFIG = {
  // Small screens / Mobile
  mobile: "h-14",

  // Large screens / Desktop (Static height)
  desktop: "lg:h-24",
};

const leftNavLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
];

const rightNavLinks = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const allNavLinks = [...leftNavLinks, ...rightNavLinks];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const checkIsActive = (href) => {
    return href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white text-black shadow-sm border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* =========================================================================
            DESKTOP LAYOUT (Large Screens - Equal 3-Column Grid)
            ========================================================================= */}
        <div className="hidden lg:grid grid-cols-3 items-center py-2.5">
          {/* LEFT NAV LINKS */}
          <nav
            className="flex items-center space-x-8 justify-start"
            aria-label="Main navigation left"
          >
            {leftNavLinks.map((link) => {
              const isActive = checkIsActive(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`group relative py-2 text-xs uppercase tracking-[0.18em] font-medium transition-colors duration-300 ${
                    isActive ? "text-[#5F327B]" : "text-gray-800 hover:text-[#5F327B]"
                  }`}
                >
                  {link.name}

                  {/* Creative animated underline effect */}
                  <span
                    className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 bg-[#5F327B] transition-all duration-300 ease-in-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CENTER LOGO */}
          <div className="flex justify-center">
            <Link
              href="/"
              className="group focus-visible:outline-none"
              aria-label="Havilah Florals & Decor home"
            >
              <div
                className={`relative flex items-center justify-center ${LOGO_CONFIG.desktop}`}
              >
                <Image
                  src="/logo.png"
                  alt="Havilah Florals & Decor"
                  width={320}
                  height={394}
                  priority
                  className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
          </div>

          {/* RIGHT NAV LINKS & CTA */}
          <div className="flex items-center justify-end space-x-8">
            <nav
              className="flex items-center space-x-8"
              aria-label="Main navigation right"
            >
              {rightNavLinks.map((link) => {
                const isActive = checkIsActive(link.href);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`group relative py-2 text-xs uppercase tracking-[0.18em] font-medium transition-colors duration-300 ${
                      isActive ? "text-[#5F327B]" : "text-gray-800 hover:text-[#5F327B]"
                    }`}
                  >
                    {link.name}

                    {/* Creative animated underline effect */}
                    <span
                      className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 bg-[#5F327B] transition-all duration-300 ease-in-out ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* DESKTOP CTA BUTTON */}
            <Link
              href="/contact"
              className="group inline-flex items-center space-x-3 bg-[#5F327B] hover:bg-[#1A1A1A] text-white px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F327B]"
            >
              <span>Book A Consultation</span>
              <span 
                aria-hidden="true" 
                className="text-xs transform transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        {/* =========================================================================
            MOBILE LAYOUT (Small Screens - Hamburger Left, Center Logo, CTA Right)
            ========================================================================= */}
        <div className="grid lg:hidden grid-cols-3 items-center py-3 relative">
          
          {/* LEFT COLUMN: HAMBURGER ICON */}
          <div className="flex items-center justify-start">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="p-1.5 text-black focus-visible:outline-none"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* CENTER COLUMN: LOGO */}
          <div className="flex items-center justify-center">
            <Link
              href="/"
              aria-label="Havilah Florals & Decor home"
              className="focus-visible:outline-none"
            >
              <div
                className={`w-auto relative flex items-center justify-center ${LOGO_CONFIG.mobile}`}
              >
                <Image
                  src="/logo.png"
                  alt="Havilah Florals & Decor"
                  width={320}
                  height={398}
                  priority
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>
          </div>

          {/* RIGHT COLUMN: CTA BUTTON */}
          <div className="flex items-center justify-end">
            <Link
              href="/contact"
              className="group inline-flex items-center space-x-2 bg-[#5F327B] hover:bg-[#1A1A1A] text-white px-3 sm:px-4 py-2 text-[10px] sm:text-xs uppercase tracking-[0.18em] font-medium transition-colors duration-300 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F327B]"
            >
              <span>Book</span>
              <span 
                aria-hidden="true" 
                className="text-[10px] transform transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>

          {/* MOBILE MENU DRAWER */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="absolute top-full left-0 right-0 mt-2 bg-[#F4EFEB] border border-[#E6DDD0] shadow-2xl rounded-2xl overflow-hidden py-5 px-6 text-[#2C2C2C] z-50"
              >
                <nav
                  className="flex flex-col space-y-2.5 text-center"
                  aria-label="Mobile navigation"
                >
                  {allNavLinks.map((link, idx) => {
                    const isActive = checkIsActive(link.href);

                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.04 * idx }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          aria-current={isActive ? "page" : undefined}
                          className={`block text-base tracking-widest font-serif py-1.5 border-b border-[#E6DDD0]/40 last:border-none ${
                            isActive
                              ? "text-[#5F327B] font-medium"
                              : "text-[#2C2C2C] hover:text-[#5F327B]"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.25 }}
                  className="mt-5 pt-4 border-t border-[#E6DDD0] flex flex-col items-center"
                >
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="group w-full inline-flex items-center justify-center space-x-3 bg-[#5F327B] hover:bg-[#1A1A1A] text-white px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F327B]"
                  >
                    <span>Book A Consultation</span>
                    <span 
                      aria-hidden="true" 
                      className="text-xs transform transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </header>
  );
}