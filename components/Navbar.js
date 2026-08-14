"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-close mobile menu when resizing back to desktop screen width
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

  // Scrolled state vs transparent hero gradient state
  const headerBgClass = isHome
    ? isScrolled || mobileMenuOpen
      ? "bg-[#F4EFEB]/95 backdrop-blur-md shadow-sm border-b border-[#E6DDD0]/60 py-4"
      : "bg-transparent py-5 lg:py-7"
    : isScrolled || mobileMenuOpen
      ? "bg-[#F4EFEB]/95 backdrop-blur-md shadow-sm border-b border-[#E6DDD0]/60 py-4"
      : "bg-[#5F327B] py-5 lg:py-7";

  const logoBrightnessClass =
    isHome && !isScrolled && !mobileMenuOpen
      ? "brightness-0 invert"
      : "brightness-100 filter-none";

  const logoSizingClass = isScrolled || mobileMenuOpen
    ? "h-12 lg:h-14 xl:h-14"
    : "h-14 lg:h-20 xl:h-20";

  const linkColorClass = isHome
    ? isScrolled || mobileMenuOpen
      ? "text-[#2C2C2C] hover:text-[#5F327B]"
      : "text-white/90 hover:text-white"
    : isScrolled || mobileMenuOpen
      ? "text-[#2C2C2C] hover:text-[#5F327B]"
      : "text-white hover:text-white/80";

  const underlineColorClass =
    isHome && !isScrolled && !mobileMenuOpen
      ? "bg-white"
      : "bg-[#5F327B]";

  const ctaButtonClass = isHome
    ? isScrolled || mobileMenuOpen
      ? "bg-[#5F327B] hover:bg-[#5F327B]/90 text-white"
      : "bg-transparent hover:bg-white hover:text-[#2C2C2C] text-white border border-white/40"
    : isScrolled || mobileMenuOpen
      ? "bg-[#5F327B] hover:bg-[#5F327B]/90 text-white"
      : "bg-white hover:bg-white/90 text-[#5F327B]";

  const hamburgerColorClass = isHome
    ? isScrolled || mobileMenuOpen
      ? "text-[#2C2C2C]"
      : "text-white"
    : isScrolled || mobileMenuOpen
      ? "text-[#2C2C2C]"
      : "text-white";

  return (
    <>
      {/* GRADIENT SCRIM OVERLAY (Only visible on home hero before scrolling) */}
      {isHome && (
        <div
          className={`fixed top-0 left-0 right-0 h-36 lg:h-44 pointer-events-none z-40 transition-opacity duration-500 bg-gradient-to-b from-black/70 via-black/30 to-transparent ${
            isScrolled || mobileMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        />
      )}

      {/* HEADER NAVBAR */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBgClass}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-14 flex items-center justify-between relative">
          {/* LOGO WITH DYNAMIC RESPONSIVE SIZING */}
          <Link
            href="/"
            className="relative z-10 flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F327B] focus-visible:ring-offset-2"
            aria-label="Havilah Florals & Decor home"
          >
            <div className={`w-auto relative flex items-center transition-all duration-500 ${logoSizingClass}`}>
              <Image
                src="/logo.png"
                alt="Havilah Florals & Decor"
                width={320}
                height={394}
                priority
                className={`h-full w-auto object-contain transition-all duration-500 ${logoBrightnessClass}`}
              />
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-xs uppercase tracking-[0.2em] font-light transition-colors duration-300 relative group py-1 ${linkColorClass}`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] transition-all duration-300 ${underlineColorClass} ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className={`inline-flex items-center justify-center text-[11px] uppercase tracking-[0.2em] font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-sm ${ctaButtonClass}`}
            >
              Book a Consultation
            </Link>
          </div>

          {/* MOBILE MENU BUTTON WITH ROTATION ANIMATION */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className={`p-2 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F327B] focus-visible:ring-offset-2 ${hamburgerColorClass}`}
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
                    <X size={26} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={26} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* MOBILE MENU DRAWER */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "top center" }}
                className="absolute top-full left-0 right-0 mt-2 bg-[#F4EFEB] backdrop-blur-xl border border-[#E6DDD0] shadow-2xl rounded-2xl overflow-hidden lg:hidden py-6 px-6"
              >
                <nav className="flex flex-col space-y-3 text-center" aria-label="Mobile navigation">
                  {navLinks.map((link, idx) => {
                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname === link.href || pathname.startsWith(`${link.href}/`);

                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: 0.05 * idx }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          aria-current={isActive ? "page" : undefined}
                          className={`block text-lg font-light tracking-wide transition-colors duration-300 font-serif py-1.5 border-b border-[#E6DDD0]/40 last:border-none ${
                            isActive ? "text-[#5F327B]" : "text-[#2C2C2C] hover:text-[#5F327B]"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.3 }}
                  className="mt-6 pt-5 border-t border-[#E6DDD0] flex flex-col items-center"
                >
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center uppercase tracking-widest text-xs font-medium py-3.5 px-6 bg-[#5F327B] text-white rounded-full shadow-sm transition-colors duration-300 hover:bg-[#5F327B]/90"
                  >
                    Book a Consultation
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}