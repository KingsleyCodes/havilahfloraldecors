import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#231326] text-[#FAF6F0] font-sans antialiased border-t border-[#3B223E]">
      {/* EDITORIAL CONSULTATION CTA INVITATION */}
      <div className="border-b border-[#3B223E] py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 md:gap-10">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C4B5C7] font-semibold block mb-3">
              Begin Your Celebration
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FAF6F0] leading-tight tracking-tight">
              Let’s create something truly beautiful together.
            </h2>
          </div>
          <div className="lg:text-right shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#FAF6F0] text-[#231326] px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-[#B388B5] hover:text-[#FFFFFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B388B5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#231326]"
            >
              <span>Book a Consultation</span>
              <span className="ml-3 transform transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* PRIMARY FOOTER GRID */}
      <div className="py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-10 lg:gap-12 items-start">
          {/* BRAND COLUMN */}
          <div className="lg:col-span-5 space-y-6">
            <Link
              href="/"
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B388B5] rounded-sm"
            >
              <Image
                src="/logo.png"
                alt="Havilah Florals & Decor"
                width={180}
                height={60}
                className="object-contain h-auto w-[160px] md:w-[180px]"
                priority={false}
              />
            </Link>
            <p className="text-sm md:text-base text-[#D4C8D6] font-light leading-relaxed max-w-sm">
              Floral artistry, bespoke event styling, and atmospheric venue transformations designed with intention for unforgettable celebrations.
            </p>
            {/* SOCIAL MEDIA LINKS */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#C4B5C7] font-semibold block mb-3">
                Follow Our Work
              </span>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.15em] font-medium text-[#FAF6F0]">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-[#B388B5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B388B5]"
                >
                  Instagram <span className="text-[10px] text-[#C4B5C7]">↗</span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-[#B388B5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B388B5]"
                >
                  Facebook <span className="text-[10px] text-[#C4B5C7]">↗</span>
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-[#B388B5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B388B5]"
                >
                  Pinterest <span className="text-[10px] text-[#C4B5C7]">↗</span>
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-[#B388B5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B388B5]"
                >
                  TikTok <span className="text-[10px] text-[#C4B5C7]">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* EXPLORE NAVIGATION */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C4B5C7] font-semibold block">
              Explore
            </span>
            <ul className="space-y-3 text-sm font-light text-[#FAF6F0]">
              <li>
                <Link
                  href="/"
                  className="transition-colors duration-300 hover:text-[#B388B5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B388B5]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition-colors duration-300 hover:text-[#B388B5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B388B5]"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="transition-colors duration-300 hover:text-[#B388B5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B388B5]"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition-colors duration-300 hover:text-[#B388B5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B388B5]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors duration-300 hover:text-[#B388B5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B388B5]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES NAVIGATION */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C4B5C7] font-semibold block">
              Services
            </span>
            <ul className="space-y-3 text-sm font-light text-[#FAF6F0]">
              <li>
                <Link
                  href="/services#floral-design"
                  className="transition-colors duration-300 hover:text-[#B388B5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B388B5]"
                >
                  Floral Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services#wedding-decor"
                  className="transition-colors duration-300 hover:text-[#B388B5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B388B5]"
                >
                  Wedding Decor
                </Link>
              </li>
              <li>
                <Link
                  href="/services#event-styling"
                  className="transition-colors duration-300 hover:text-[#B388B5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B388B5]"
                >
                  Event Styling
                </Link>
              </li>
              <li>
                <Link
                  href="/services#venue-styling"
                  className="transition-colors duration-300 hover:text-[#B388B5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B388B5]"
                >
                  Venue Styling
                </Link>
              </li>
              <li>
                <Link
                  href="/services#installations"
                  className="transition-colors duration-300 hover:text-[#B388B5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B388B5]"
                >
                  Floral Installations
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT DETAILS COLUMN */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C4B5C7] font-semibold block">
              Studio & Contact
            </span>
            <div className="space-y-3 text-sm font-light text-[#D4C8D6]">
            
              <p>Available worldwide for destination celebrations.</p>
              <div className="pt-2 space-y-1">
                <a
                  href="mailto:havilahflorals@gmail.com"
                  className="block text-[#FAF6F0] underline underline-offset-4 decoration-[#3B223E] hover:decoration-[#B388B5] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B388B5]"
                >
                  havilahflorals@gmail.com
                </a>
                <a
                  href="tel:+2349026810641"
                  className="block text-[#FAF6F0] hover:text-[#B388B5] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B388B5]"
                >
                  +2349026810641
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM LEGAL BAR */}
      <div className="border-t border-[#3B223E] py-8 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-[#C4B5C7]">
          <p>© {currentYear} Havilah Florals & Decor. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link
              href="/privacy"
              className="hover:text-[#FAF6F0] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B388B5]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#FAF6F0] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B388B5]"
            >
              Terms of Experience
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}