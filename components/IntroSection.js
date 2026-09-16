'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const introImage1 = "/hm.jpg";
const introImage2 = "/d2.jpg";

// Motion variants for smooth image entrance
const imageContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const imageSlideUpVariants = {
  hidden: { 
    opacity: 0, 
    y: 80,
    scale: 0.96,
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

export default function IntroSection() {
  return (
    <section
      aria-label="About Havilah Florals and Decor"
      className="relative w-full bg-white text-[#1A1A1A] py-10 sm:py-12 md:py-16 border-b border-[#E8E1DC] overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* CENTERED EDITORIAL HEADER BLOCK */}
      

        {/* REVERSED ASYMMETRIC GRID (TEXT LEFT / STACKED IMAGES RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: BRAND NARRATIVE & ACTION */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8 order-2 lg:order-1">
            
            <div className="space-y-4 sm:space-y-5">
              <div className="border-l-2 border-[#5F327B] pl-4 sm:pl-5">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium text-[#5F327B] block mb-1">
                  Intimate Wedding Decor Experience
                </span>
                <p className="text-xs sm:text-sm text-[#1A1A1A] font-medium leading-relaxed">
                 Your love story deserves a space that feels like it
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#5C555B] font-light leading-relaxed">
                <p>
                 Every Couple has a story, a journey, a personality that makes up their unique love story. That's why we believe wedding decor should be more than beautiful, but an experience
                </p>
                <p>
                 Personalized. Thoughtful. Detailed.
                </p>
                <p>
                This is why we want to shine through every decor we curate, an atmosphere where you and your guests experience your love story.
                </p>
                <p>
                  At Havilah Florals Decor, we intentionally design wedding experiences that celebrate love, create connecttion and leave joyful memories that stays long after the day is over. 
                </p>
              </div>
            </div>

            {/* BUTTON CTA */}
            <div className="pt-2">
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

          {/* RIGHT COLUMN: STACKED DUAL PHOTOGRAPHY WITH FRAMER MOTION SLIDE-IN */}
          <motion.div 
            variants={imageContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-7 grid grid-cols-12 gap-4 items-center order-1 lg:order-2"
          >
            
            {/* Main Tall Image */}
            <motion.div 
              variants={imageSlideUpVariants}
              className="col-span-7 relative aspect-[3/4] bg-[#FAF8F5] overflow-hidden rounded-sm border border-[#E8E1DC] shadow-sm group"
            >
              <Image
                src={introImage1}
                alt="Havilah Florals luxury venue styling"
                fill
                sizes="(max-width: 1024px) 60vw, 35vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                priority={false}
              />
            </motion.div>

            {/* Secondary Accent Detail Image */}
            <motion.div 
              variants={imageSlideUpVariants}
              className="col-span-5 relative aspect-[4/5] bg-[#FAF8F5] overflow-hidden rounded-sm border border-[#E8E1DC] shadow-sm group -mt-6 sm:-mt-8"
            >
              <Image
                src={introImage2}
                alt="Havilah botanical detail"
                fill
                sizes="(max-width: 1024px) 40vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}