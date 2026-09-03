'use client';

import Link from "next/link";
import { motion } from "framer-motion";

const mergedServices = [
  {
    id: "full-scale-event-styling",
    title: "Full-Scale Event & Venue Styling",
    tagline: "Atmospheric & Environmental Design",
    description:
      "Curated wedding and event environments designed around the unique spatial rhythm of your venue. We unify custom venue layouts, tactile fabrics, ambient lighting, and bespoke furniture to turn grand spaces into deeply personal experiences.",
    highlights: ["Weddings & Celebrations", "Venue Spatial Transformation", "Lighting & Ambient Styling"],
  },
  {
    id: "botanical-floral-artistry",
    title: "Botanical & Floral Artistry",
    tagline: "Sculptural & Architectural Statements",
    description:
      "Bespoke floral compositions crafted with architectural precision. From delicate bridal party bouquets and immersive banquet tablescapes to dramatic suspended ceiling canopies and grand living botanical structures.",
    highlights: ["Bespoke Floral Compositions", "Tablescapes & Centerpieces", "Custom Ceiling & Arch Installations"],
  },
];

// Motion variants for smooth staggered slide-in entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 70,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 16,
      mass: 0.8,
    },
  },
};

export default function ServicesSection() {
  return (
    <section
      aria-label="What We Create - Havilah Services"
      className="relative w-full bg-white text-[#1A1A1A] py-12 sm:py-16 md:py-20 border-b border-[#E8E1DC] overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* CENTERED EDITORIAL HEADER BLOCK */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-14"
        >
        </motion.div>

        {/* CONSOLIDATED 2-CARD GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-10 sm:mb-12"
        >
          {mergedServices.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group relative bg-[#FAF8F5] border border-[#E8E1DC] p-6 sm:p-8 md:p-10 rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 hover:border-[#5F327B]/50 flex flex-col justify-between"
            >
              <Link href="/services" className="block focus:outline-none h-full flex flex-col justify-between">
                <div>
                  {/* CARD TOP: TAGLINE */}
                  <div className="border-b border-[#E8E1DC] pb-4 mb-6 flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#5F327B] font-semibold">
                      {service.tagline}
                    </span>
                  
                  </div>

                  {/* TITLE */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1A1A1A] group-hover:text-[#5F327B] transition-colors duration-300 mb-4">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-xs sm:text-sm text-[#5C555B] font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* HIGHLIGHT BULLETS */}
                  <ul className="space-y-2 mb-8 border-t border-[#E8E1DC]/60 pt-4">
                    {service.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center text-xs text-[#1A1A1A] font-medium tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5F327B] mr-2.5 opacity-75" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* HOVER LINK ACTION */}
                <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-[#5F327B] group-hover:text-[#1A1A1A] transition-colors duration-300 pt-2 border-t border-[#E8E1DC]">
                  <span>Explore Service</span>
                  <span
                    aria-hidden="true"
                    className="transform transition-transform duration-300 group-hover:translate-x-1.5"
                  >
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* BOTTOM CENTERED EXPLORE ALL CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/services"
            className="group inline-flex items-center space-x-3 bg-[#5F327B] hover:bg-[#1A1A1A] text-white px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 rounded-sm shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F327B]"
          >
            <span>Explore All Services</span>
            <span
              aria-hidden="true"
              className="text-xs transform transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}