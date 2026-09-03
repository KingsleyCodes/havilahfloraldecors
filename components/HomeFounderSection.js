'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Great_Vibes } from "next/font/google";

const signatureFont = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function HomeFounderSection() {
  return (
    <section
      aria-label="Meet the Founder"
      className="relative w-full bg-[#FAF8F5] text-[#1A1A1A] py-16 sm:py-20 md:py-24 border-b border-[#E8E1DC] overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN — PORTRAIT WITH EDITORIAL FRAME */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Background Decorative Accent Block */}
            <div className="absolute -inset-3 bg-[#E6DFDA]/60 rounded-sm transform -rotate-1 pointer-events-none" />

            <div className="relative aspect-[4/5] w-full bg-[#E6DFDA] overflow-hidden rounded-sm shadow-md border border-[#E8E1DC] group">
              <Image
                src="/o1.png"
                alt="Creative Director of Havilah Florals Decor"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
              
              {/* Inner Luxury Inset Border */}
              <div className="absolute inset-3 border border-white/40 pointer-events-none rounded-xs" />
            </div>

            {/* Floating Title Tag */}
          
          </motion.div>

          {/* RIGHT COLUMN — NARRATIVE STORY */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-7 space-y-5 mt-6 lg:mt-0"
          >
            {/* Header Tag */}
            <div className="inline-flex items-center space-x-3">
              <span className="w-8 h-[1px] bg-[#5F327B]/40" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-[#5F327B]">
                The Heart Behind the Design
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.15] text-[#1A1A1A]">
              Meet the Creative Director
            </h2>

            {/* Standout Quote */}
            <p className="font-serif text-base sm:text-lg text-[#1A1A1A] italic leading-snug pt-1 border-l-2 border-[#5F327B]/30 pl-4">
              "Wedding decor should be more than beautiful—it should feel personal. It should reflect the people at the heart of the celebration and tell a story guests experience the moment they step into the room."
            </p>

            {/* Concise Story Copy */}
            <div className="space-y-3 text-sm sm:text-base text-[#5C555B] font-light leading-relaxed">
              <p>
                When we work together, I look beyond colours and arrangements. I focus on the atmosphere you want to cultivate, the memories you want your guests to treasure, and the feeling you&apos;ll cherish every time you look back on your day.
              </p>
              <p>
                Beyond floral architecture, I am a wife, a mother, and a woman deeply rooted in faith—values that guide every celebration we curate with excellence, integrity, and joy.
              </p>
            </div>

            {/* FOUNDER SIGNATURE */}
            <div className="pt-2">
              <p className={`${signatureFont.className} text-4xl sm:text-5xl md:text-6xl text-[#5F327B] leading-none select-none`}>
                Miracle Katchy
              </p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#5C555B] font-medium mt-1">
                Founder & Creative Director
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}