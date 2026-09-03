"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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
            </div>
          </div>

          {/* EDITORIAL BOTANICAL / ARCHITECTURAL ACCENT (RIGHT COLUMN) */}
          <div className="lg:col-span-4 relative mt-8 lg:mt-0 flex justify-start lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[340px] aspect-[4/5] p-2 border border-[#FAF8F5]/20 bg-[#5F327B]"
            >
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
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}