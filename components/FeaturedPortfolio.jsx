'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const portfolioEvents = [
  {
    title: "Featured Wedding One",
    category: "",
    slug: "featured-wedding-one",
    image: "/couple1.jpg",
  },
  {
    title: "Featured Wedding Two",
    category: "",
    slug: "featured-wedding-two",
    image: "/por5.jpg",
  },
  {
    title: "Featured Wedding Three",
    category: "",
    slug: "featured-wedding-three",
    image: "/couple4.jpg",
  },
];

export default function FeaturedPortfolio() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Card variants: Slide from side (x: 70) on mobile, slide from bottom (y: 70) on desktop
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: isMobile ? 70 : 0,
      y: isMobile ? 0 : 70,
      scale: 0.96,
    },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 65,
        damping: 16,
        mass: 0.8,
        delay: isMobile ? 0 : index * 0.1, // Stagger on desktop grid, scroll-driven per card on mobile
      },
    }),
  };

  return (
    <section
      aria-label="Featured Portfolio"
      className="relative w-full bg-white text-[#1A1A1A] py-12 sm:py-16 border-b border-[#E8E1DC] overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">

        {/* EDITORIAL HEADER BLOCK */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-xl mx-auto text-center mb-6 sm:mb-8"
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal leading-[1.15] text-[#1A1A1A] mb-2">
            Curated Portfolio <br className="hidden sm:inline" />
          </h2>
        </motion.div>

        {/* 6-IMAGE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10">
          {portfolioEvents.map((event, index) => (
            <motion.div 
              key={event.slug} 
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Triggers individually as each card enters 20% into view
            >
              <Link
                href={`/portfolio/${event.slug}`}
                className="group relative block aspect-square w-full overflow-hidden bg-[#FAF8F5] rounded-sm border border-[#E8E1DC] shadow-sm hover:shadow-xl transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F327B]"
              >
                {/* Event Image */}
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end text-white z-10">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/90 font-medium mb-1 transition-transform duration-300 group-hover:-translate-y-1">
                    {event.category}
                  </span>

                  <h3 className="font-serif text-lg sm:text-xl font-normal leading-snug text-white mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                    {event.title}
                  </h3>

                  <div className="inline-flex items-center space-x-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#E8E1DC] font-medium opacity-90 group-hover:text-white transition-all duration-300">
                    <span>View Event</span>
                    <span
                      aria-hidden="true"
                      className="text-xs transform transition-transform duration-300 group-hover:translate-x-1.5"
                    >
                      →
                    </span>
                  </div>
                </div>

                {/* Inner Border Hover Effect */}
                <div className="absolute inset-2.5 border border-white/0 group-hover:border-white/30 transition-all duration-500 rounded-sm pointer-events-none" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* FULL-SIZED CTA BUTTON */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <Link
            href="/portfolio"
            className="group inline-flex items-center space-x-3 bg-[#5F327B] hover:bg-[#1A1A1A] text-white px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 rounded-sm shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F327B]"
          >
            <span>Explore All Works</span>
            <span
              aria-hidden="true"
              className="text-sm transform transition-transform duration-300 group-hover:translate-x-2"
            >
              →
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}