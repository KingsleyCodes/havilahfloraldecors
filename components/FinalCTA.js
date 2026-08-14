import Link from "next/link";
import Image from "next/image";

export default function FinalCTA() {
  return (
    <section
      aria-label="Final Consultation Call to Action"
      className="relative w-full bg-[#5F327B] text-[#FAF8F5] py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden"
    >
      {/* ATMOSPHERIC BACKGROUND GRAPHIC & OVERLAY */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:24px_24px]" 
      />
      
      {/* WATERMARK BRAND TYPOGRAPHY */}
      <div
        aria-hidden="true"
        className="absolute -bottom-10 right-0 select-none pointer-events-none opacity-[0.05] whitespace-nowrap overflow-hidden z-0"
      >
        <span className="font-serif text-[14vw] leading-none uppercase font-normal tracking-widest text-[#FAF8F5]">
          HAVILAH
        </span>
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* EDITORIAL TOP DIVIDER FRAME */}
       
        {/* ASYMMETRICAL EDITORIAL LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* MAIN HEADLINE & COPY (LEFT DOMINANT) */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-[#FAF8F5]">
              Your story deserves <br className="hidden sm:inline" />
              <span className="italic font-light text-[#FAF8F5]/90">
                a setting of its own.
              </span>
            </h2>

            <p className="max-w-2xl text-sm sm:text-base md:text-lg text-[#FAF8F5]/80 font-light leading-relaxed">
              We translate personal visions into immersive, architectural environments. 
              Whether planning a grand wedding or an intimate gala, every memorable experience 
              begins with a single conversation.
            </p>

            {/* CALL TO ACTION GROUP */}
            <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-between px-8 sm:px-10 py-4 sm:py-5 bg-[#FAF8F5] text-[#5F327B] text-xs sm:text-sm uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-[#FAF8F5]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF8F5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#5F327B]"
              >
                <span>Book a Consultation</span>
                <span
                  aria-hidden="true"
                  className="ml-4 transform transition-transform duration-300 group-hover:translate-x-1.5 text-base"
                >
                  →
                </span>
              </Link>

              <Link
                href="/portfolio"
                className="group inline-flex items-center space-x-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#FAF8F5]/80 hover:text-[#FAF8F5] transition-colors duration-300 py-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FAF8F5]"
              >
                <span className="border-b border-[#FAF8F5]/30 group-hover:border-[#FAF8F5] transition-colors duration-300">
                  Explore Our Work
                </span>
                <span
                  aria-hidden="true"
                  className="transform transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* EDITORIAL BOTANICAL / ARCHITECTURAL ACCENT (RIGHT COLUMN) */}
          <div className="lg:col-span-4 relative mt-8 lg:mt-0 flex justify-start lg:justify-end">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[340px] aspect-[4/5] p-2 border border-[#FAF8F5]/20 bg-[#5F327B]">
              <div className="relative w-full h-full overflow-hidden bg-[#5F327B]/50">
                <Image
                  src="/fcta.jpg"
                  alt="Havilah Florals custom venue installation detail"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover opacity-85 transition-transform duration-700 ease-out hover:scale-105 filter grayscale-[20%]"
                />
                {/* SUBTLE INNER BORDER FRAME */}
                <div className="absolute inset-2 border border-[#FAF8F5]/20 pointer-events-none" />
              </div>

              {/* OVERLAY CAPTION DETAIL */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-[#5F327B] border border-[#FAF8F5]/20 p-3 sm:p-4 max-w-[200px]">
                <span className="block font-serif text-xs italic text-[#FAF8F5]/90">
                  Tailored Atmosphere
                </span>
                <span className="block text-[9px] uppercase tracking-wider text-[#FAF8F5]/60 mt-0.5">
                  Bespoke Floral Architecture
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM FRAME & ACCESSIBILITY FOOTNOTE */}
        <div className="w-full border-b border-[#FAF8F5]/20 mt-16 sm:mt-20 md:mt-24 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px] sm:text-xs text-[#FAF8F5]/60">
          <p>© HAVILAH FLORALS & DECOR. ALL RIGHTS RESERVED.</p>
          <p className="font-serif italic text-xs text-[#FAF8F5]/80">
            Crafting memories across West Africa & global destinations.
          </p>
        </div>

      </div>
    </section>
  );
}