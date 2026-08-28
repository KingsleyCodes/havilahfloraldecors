import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#231326] text-[#FAF6F0] font-sans antialiased border-t border-[#3B223E]">
      
      {/* EDITORIAL CONSULTATION CTA INVITATION */}
      <div className="border-b border-[#3B223E] py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[1500px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 md:gap-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-3 mb-3">
              <span className="w-6 h-[1px] bg-[#C4B5C7]/60" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#C4B5C7]">
                Begin Your Celebration
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FAF6F0] leading-tight tracking-tight">
              Let’s create something <br className="hidden sm:inline" />
              <span className="italic font-light text-[#C4B5C7]">
                truly beautiful together.
              </span>
            </h2>
          </div>
          
          <div className="lg:text-right shrink-0">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center bg-[#FAF6F0] text-[#231326] px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-[#5F327B] hover:text-white rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4B5C7]"
            >
              <span>Book a Consultation</span>
              <span 
                aria-hidden="true" 
                className="ml-3 transform transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* PRIMARY FOOTER GRID */}
      <div className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-10 lg:gap-12 items-start">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-5 space-y-6">
            <Link
              href="/"
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4B5C7] rounded-sm"
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
            
            <p className="text-xs sm:text-sm text-[#D4C8D6] font-light leading-relaxed max-w-sm">
              Floral artistry, bespoke event styling, and atmospheric venue transformations designed with intention for unforgettable celebrations.
            </p>

            {/* SOCIAL MEDIA LINKS */}
            <div className="pt-2">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#C4B5C7] font-semibold block mb-3">
                Follow Our Work
              </span>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.15em] font-medium text-[#FAF6F0]">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-[#C4B5C7] focus-visible:outline-none"
                >
                  Instagram <span className="text-[10px] text-[#C4B5C7]">↗</span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-[#C4B5C7] focus-visible:outline-none"
                >
                  Facebook <span className="text-[10px] text-[#C4B5C7]">↗</span>
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-[#C4B5C7] focus-visible:outline-none"
                >
                  Pinterest <span className="text-[10px] text-[#C4B5C7]">↗</span>
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-[#C4B5C7] focus-visible:outline-none"
                >
                  TikTok <span className="text-[10px] text-[#C4B5C7]">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* EXPLORE NAVIGATION */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#C4B5C7] font-semibold block">
              Explore
            </span>
            <ul className="space-y-3 text-xs sm:text-sm font-light text-[#FAF6F0]">
              <li>
                <Link href="/" className="transition-colors duration-300 hover:text-[#C4B5C7]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors duration-300 hover:text-[#C4B5C7]">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="transition-colors duration-300 hover:text-[#C4B5C7]">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-colors duration-300 hover:text-[#C4B5C7]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors duration-300 hover:text-[#C4B5C7]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES NAVIGATION */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#C4B5C7] font-semibold block">
              Services
            </span>
            <ul className="space-y-3 text-xs sm:text-sm font-light text-[#FAF6F0]">
              <li>
                <Link href="/services#floral-design" className="transition-colors duration-300 hover:text-[#C4B5C7]">
                  Floral Design
                </Link>
              </li>
              <li>
                <Link href="/services#wedding-decor" className="transition-colors duration-300 hover:text-[#C4B5C7]">
                  Wedding Decor
                </Link>
              </li>
              <li>
                <Link href="/services#event-styling" className="transition-colors duration-300 hover:text-[#C4B5C7]">
                  Event Styling
                </Link>
              </li>
              <li>
                <Link href="/services#venue-styling" className="transition-colors duration-300 hover:text-[#C4B5C7]">
                  Venue Styling
                </Link>
              </li>
              <li>
                <Link href="/services#installations" className="transition-colors duration-300 hover:text-[#C4B5C7]">
                  Floral Installations
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT DETAILS COLUMN */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#C4B5C7] font-semibold block">
              Studio &amp; Contact
            </span>
            <div className="space-y-3 text-xs sm:text-sm font-light text-[#D4C8D6]">
              <p>Available worldwide for destination celebrations.</p>
              <div className="pt-2 space-y-1">
                <a
                  href="mailto:havilahflorals@gmail.com"
                  className="block text-[#FAF6F0] underline underline-offset-4 decoration-[#3B223E] hover:decoration-[#C4B5C7] transition-colors duration-300"
                >
                  havilahflorals@gmail.com
                </a>
                <a
                  href="tel:+2349026810641"
                  className="block text-[#FAF6F0] hover:text-[#C4B5C7] transition-colors duration-300"
                >
                  +2349026810641
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM LEGAL BAR */}
      <div className="border-t border-[#3B223E] py-8 px-6 md:px-12 lg:px-20 max-w-[1500px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-[#C4B5C7]">
          <p>© {currentYear} Havilah Florals &amp; Decor. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-[#FAF6F0] transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#FAF6F0] transition-colors duration-300">
              Terms of Experience
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}