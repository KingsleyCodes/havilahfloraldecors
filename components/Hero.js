'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const heroSlides = [
  {
    id: 'hero-1',
    src: '/a2.jpg',
    alt: 'Luxury floral arrangement and table styling for a high-end wedding reception',
    tagline: '',
    title: 'Bespoke Event Floral & Luxury Styling',
    description: '',
    buttonText: 'REQUEST A QUOTE NOW!',
    buttonHref: '/contact',
  },
  {
    id: 'hero-2',
    src: '/h1.png',
    alt: 'Sophisticated bridal bouquet with bespoke botanical elements',
    tagline: '',
    title: 'Ambience Lighting And Moments',
    description: '',
    buttonText: 'REQUEST A QUOTE NOW!',
    buttonHref: '/contact',
  },
  {
    id: 'her3',
    src: '/reff.png',
    alt: 'Sophisticated bridal bouquet with bespoke botanical elements',
    tagline: '',
    title: '85% Referral Rate',
    description: '',
    buttonText: 'REQUEST A QUOTE NOW!',
    buttonHref: '/contact',
  },
  {
    id: 'hero-4',
    src: '/hero5.jpg',
    alt: 'Elegant candlelit wedding table decor and floral centerpieces',
    tagline: '',
    title: 'Curated Tablescapes & Decor',
    description: '',
    buttonText: 'REQUEST A QUOTE NOW!',
    buttonHref: '/contact',
  },
];

// Motion animation variants for staggered bottom slide-in
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1.0], // Custom cubic-bezier for luxury smooth feel
    },
  },
};

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative mt-[52px] lg:mt-[64px] h-[calc(80svh-52px)] lg:h-[calc(80svh-64px)] w-full overflow-hidden bg-[#1A1A1A] select-none">
      {/* BACKGROUND SLIDES */}
      {heroSlides.map((slide, index) => {
        const isActive = index === currentIndex;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
              isActive ? 'z-10 opacity-100 pointer-events-auto' : 'z-0 opacity-0 pointer-events-none'
            }`}
            aria-hidden={!isActive}
          >
            {/* Background Image */}
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              quality={90}
              sizes="100vw"
              className="object-cover object-center w-full h-full"
            />

            {/* Dark Overlay for Text Legibility */}
            <div className="absolute inset-0 bg-black/40 z-10" />
          </div>
        );
      })}

      {/* SLIDE CONTENT OVERLAY WITH STAGGERED BOTTOM SLIDE-IN */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6 max-w-4xl mx-auto pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col items-center space-y-4 pointer-events-auto"
          >
            <motion.span
              variants={itemVariants}
              className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/80 font-light"
            >
              {heroSlides[currentIndex].tagline}
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-2xl md:text-4xl lg:text-5xl font-serif text-white tracking-wide leading-tight"
            >
              {heroSlides[currentIndex].title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xs md:text-base text-white/90 max-w-xl font-light leading-relaxed"
            >
              {heroSlides[currentIndex].description}
            </motion.p>

            {/* BUTTON WITH SAME STYLE */}
            <motion.div variants={itemVariants} className="pt-4">
              <Link
                href={heroSlides[currentIndex].buttonHref}
                className="group inline-flex items-center space-x-3 bg-[#5F327B] hover:bg-[#1A1A1A] text-white px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F327B]"
              >
                <span>{heroSlides[currentIndex].buttonText}</span>
                <span
                  aria-hidden="true"
                  className="text-xs transform transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* LEFT NAVIGATION ARROW */}
      <button
        onClick={handlePrev}
        type="button"
        aria-label="Previous Slide"
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 p-2.5 md:p-3 rounded-full bg-black/20 hover:bg-black/60 text-white backdrop-blur-md transition-all duration-300 border border-white/20 focus:outline-none"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* RIGHT NAVIGATION ARROW */}
      <button
        onClick={handleNext}
        type="button"
        aria-label="Next Slide"
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 p-2.5 md:p-3 rounded-full bg-black/20 hover:bg-black/60 text-white backdrop-blur-md transition-all duration-300 border border-white/20 focus:outline-none"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* SLIDE INDICATORS (DOTS) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Bottom Subtle Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 via-transparent to-transparent z-20 pointer-events-none" />
    </section>
  );
}