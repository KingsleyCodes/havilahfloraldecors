"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";

// YOUR EVENT IMAGES & DETAILS DATA
const eventGalleries = {
  "featured-wedding-one": {
    title: "",
    category: "",
    date: "",
    location: "",
    description: "",
    gallery: [
      { src: "/couple1.jpg", alt: "", caption: "" },
      { src: "/personalizedwedding.jpg", alt: "", caption: "" },
      { src: "/a2.jpg", alt: "", caption: "" },
    ],
  },
  "featured-wedding-two": {
    title: "",
    category: "Weddings",
    date: "Summer 2025",
    location: "Estate Conservatory",
    description: "",
    gallery: [
      { src: "/por5.jpg", alt: "", caption: "" },
      { src: "/porr.jpg", alt: "", caption: "" },
      { src: "/ff2.png", alt: "", caption: "" },
    ],
  },
  
  "the-beauty-of-nature": {
    title: "",
    category: "",
    date: "",
    location: "",
    description: "",
    gallery: [
      { src: "/cruc1.webp", alt: "", caption: "" },
      { src: "/cruc2.webp", alt: "", caption: "" },
      { src: "/cruc4.webp", alt: "", caption: "" },
      { src: "/cruc5.webp", alt: "", caption: "" },
      { src: "/cruc6.webp", alt: "", caption: "" },
      { src: "/cruc8.webp", alt: "", caption: "" },
    ],
  },
  "love-in-colors-traditional-wedding": {
    title: "",
    category: "",
    date: "",
    location: "",
    description: "",
    gallery: [
      { src: "/loveintraditionalmarriage2.webp", alt: "", caption: "" },
      { src: "/loveintraditionalmarriage9.webp", alt: "", caption: "" },
      { src: "/loveintraditionalmarriage4.webp", alt: "", caption: "" },
      { src: "/loveintraditionalmarriage5.webp", alt: "", caption: "" },
      { src: "/loveintraditionalmarriage10.webp", alt: "", caption: "" },
      { src: "/loveintraditionalmarriage7.webp", alt: "", caption: "" },
    ],
  },
  "the-royal-wedding-reception": {
    title: "",
    category: "",
    date: "",
    location: "",
    description: "",
    gallery: [
      { src: "/theroyal.webp", alt: "", caption: "" },
      { src: "/theroyal.jpeg", alt: "", caption: "" },
      { src: "/theroyal2.webp", alt: "", caption: "" },
      { src: "/theroyal6.webp", alt: "", caption: "" },
      { src: "/theroyal4.webp", alt: "", caption: "" },
      { src: "/theroyal5.webp", alt: "", caption: "" },
    ],
  },
  "featured-wedding-three": {
    title: "Floral Arch",
    category: "Installations",
    date: "Winter 2025",
    location: "Metropolitan Hall",
    description: "A dramatic botanical sculpture designed to anchor ceremony vows.",
    gallery: [
      { src: "/couple4.jpg", alt: "", caption: "" },
      { src: "/reff.jpg", alt: "", caption: "" },
      { src: "/couple44.jpg", alt: "", caption: "" },
    ],
  },
  "the-adorables-milestone-celebration": {
    title: "",
    category: "",
    date: "",
    location: "",
    description: "",
    gallery: [
      { src: "/theadorables.webp", alt: "Lounge Seating", caption: "" },
      { src: "/theadorables1.webp", alt: "Lounge Seating", caption: "" },
      { src: "/theadorables2.webp", alt: "Lounge Seating", caption: "" },
      { src: "/theadorables6.webp", alt: "Lounge Seating", caption: "" },
      { src: "/theadorables7.webp", alt: "Lounge Seating", caption: "" },
      { src: "/theadorables8.webp", alt: "Lounge Seating", caption: "" },
     
    ],
  },
  "we-together-forever": {
    title: "",
    category: "",
    date: "",
    location: "",
    description: "",
    gallery: [
      { src: "/wetogetherforever.webp", alt: "Lounge Seating", caption: "" },
      { src: "/wetogetherforever1.webp", alt: "Lounge Seating", caption: "" },
      { src: "/wetogetherforever6.webp", alt: "Lounge Seating", caption: "" },
      { src: "/wetogetherforever10.webp", alt: "Lounge Seating", caption: "" },
      { src: "/wetogetherforever4.webp", alt: "Lounge Seating", caption: "" },
      { src: "/wetogetherforever5.webp", alt: "Lounge Seating", caption: "" },
     
    ],
  },
  "celebration-of-life-mummy-crown": {
    title: "",
    category: "",
    date: "",
    location: "",
    description: "",
    gallery: [
      { src: "/celebrationoflife.webp", alt: "Lounge Seating", caption: "" },
      { src: "/celebrationoflife2.webp", alt: "Lounge Seating", caption: "" },
      { src: "/celebrationoflife3.webp", alt: "Lounge Seating", caption: "" },
      { src: "/celebrationoflife4.webp", alt: "Lounge Seating", caption: "" },
      { src: "/celebrationoflife5.webp", alt: "Lounge Seating", caption: "" },
      { src: "/celebrationoflife7.webp", alt: "Lounge Seating", caption: "" },
     
    ],
  },
  "opulent-imperial-reception": {
    title: "Imperial Reception",
    category: "Weddings",
    date: "Summer 2025",
    location: "Royal Ballroom",
    description: "Grand ballroom transformation incorporating height-scaled floral arrangements.",
    gallery: [
      { src: "/couple6.png", alt: "Ballroom Layout", caption: "Grand Ballroom Layout" },
    ],
  },
};

export default function EventGalleryClient({ slug }) {
  const eventData = eventGalleries[slug];

  if (!eventData) {
    notFound();
  }

  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === eventData.gallery.length - 1 ? 0 : prev + 1));
    }
  }, [lightboxIndex, eventData.gallery.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? eventData.gallery.length - 1 : prev - 1));
    }
  }, [lightboxIndex, eventData.gallery.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, showNext, showPrev]);

  const hasHeaderContent =
    Boolean(eventData.title) ||
    Boolean(eventData.category) ||
    Boolean(eventData.location) ||
    Boolean(eventData.date) ||
    Boolean(eventData.description);

  return (
    <main className="w-full bg-white text-[#1A1A1A] pt-32 sm:pt-36 pb-16 sm:pb-24">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* BACK TO PORTFOLIO LINK */}
        <div className={`relative z-20 block ${hasHeaderContent ? "mb-4 sm:mb-6" : "mb-6 sm:mb-8"}`}>
          <Link
            href="/portfolio"
            className="inline-flex items-center space-x-2 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-[#5F327B] hover:text-[#1A1A1A] transition-colors duration-300 py-1"
          >
            <ArrowLeft size={16} className="shrink-0" />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* HEADER SECTION */}
        {hasHeaderContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border-b border-[#E8E1DC] pb-4 mb-6"
          >
            {(eventData.category || eventData.location || eventData.date) && (
              <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                {eventData.category && (
                  <span className="text-xs uppercase tracking-[0.25em] text-[#5F327B] font-semibold">
                    {eventData.category}
                  </span>
                )}
                <div className="flex items-center space-x-4 text-xs tracking-wider text-[#5C555B] font-medium">
                  {eventData.location && <span>{eventData.location}</span>}
                  {eventData.location && eventData.date && <span>•</span>}
                  {eventData.date && <span>{eventData.date}</span>}
                </div>
              </div>
            )}

            {eventData.title && (
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-[#1A1A1A] mb-2">
                {eventData.title}
              </h1>
            )}

            {eventData.description && (
              <p className="text-sm sm:text-base text-[#5C555B] font-light leading-relaxed max-w-2xl">
                {eventData.description}
              </p>
            )}
          </motion.div>
        )}

        {/* GALLERY GRID */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16"
        >
          {eventData.gallery.map((item, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="group relative aspect-square w-full cursor-pointer overflow-hidden rounded-sm bg-[#FAF8F5] border border-[#E8E1DC] shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                priority={idx < 3}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 z-10">
                <span className="text-xs text-white uppercase tracking-[0.18em] font-medium">
                  {item.caption || "Expand Image"}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-8"
          >
            <div className="flex items-center justify-between text-white z-10">
              <span className="text-xs uppercase tracking-[0.2em] opacity-80">
                {lightboxIndex + 1} / {eventData.gallery.length}
              </span>
              <button
                type="button"
                onClick={closeLightbox}
                className="p-2 text-white/80 hover:text-white transition-colors"
              >
                <X size={28} />
              </button>
            </div>

            <div className="relative flex-1 flex items-center justify-center my-4">
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="relative w-full h-full max-w-5xl max-h-[80vh]"
              >
                <Image
                  src={eventData.gallery[lightboxIndex].src}
                  alt={eventData.gallery[lightboxIndex].alt}
                  fill
                  priority
                  className="object-contain"
                />
              </motion.div>

              <button
                type="button"
                onClick={showPrev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-black/70 text-white rounded-full"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                type="button"
                onClick={showNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-black/70 text-white rounded-full"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="text-center text-white/90 text-xs sm:text-sm tracking-widest uppercase py-2 z-10">
              {eventData.gallery[lightboxIndex].caption}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}