"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Structured Portfolio Archives Data
// NOTE: Ensure these IDs match the keys in your [slug] page's eventGalleries object
const projectsData = [
  {
    id: "royal-orchid-gala",
    title: "Orchid Gala",
    category: "Event Decor",
    location: "The Grand Pavilion",
    image: "/a1.jpg",
    description: "An ethereal evening environment defined by rare orchid compositions."
  },
  {
    id: "celestial-botanical-wedding",
    title: "Botanical Wedding",
    category: "Weddings",
    location: "Estate Conservatory",
    image: "/por1.jpg",
    description: "A lush botanical installation featuring immersive ceiling greenery."
  },
  {
    id: "candlelit-garden-reception",
    title: "Garden Reception",
    category: "Weddings",
    location: "Private Residence",
    image: "/por2.jpg",
    description: "An intimate outdoor dining experience featuring warm candlelit long tables."
  },
  {
    id: "grand-arch-floral-installation",
    title: "Floral Arch",
    category: "Installations",
    location: "Metropolitan Hall",
    image: "/por3.jpg",
    description: "A dramatic botanical sculpture designed to anchor ceremony vows."
  },
  {
    id: "velvet-galia-soiree",
    title: "Velvet Soirée",
    category: "Event Decor",
    location: "The Glasshouse",
    image: "/por4.jpg",
    description: "Rich velvet textures paired with moody floral arrangements."
  },
  {
    id: "opulent-imperial-reception",
    title: "Imperial Reception",
    category: "Weddings",
    location: "Royal Ballroom",
    image: "/por5.jpg",
    description: "Grand ballroom transformation incorporating height-scaled floral arrangements."
  }
];

// Staggered motion variants for card animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 70,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 65,
      damping: 16,
      mass: 0.8,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] font-sans antialiased selection:bg-[#5F327B] selection:text-white flex flex-col">
      <main className="pt-20 lg:pt-24 flex-grow">
        {/* HERO SECTION */}
        <section className="relative py-12 sm:py-16 bg-white border-b border-[#E8E1DC] overflow-hidden">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-2xl mx-auto text-center"
            >
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.15] text-[#1A1A1A]">
                Curated Portfolio
              </h1>
            </motion.div>
          </div>
        </section>

        {/* 6-IMAGE GRID PORTFOLIO ARCHIVE */}
        <section className="relative py-12 sm:py-16 bg-[#FAF8F5]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
              >
                {projectsData.map((event) => (
                  <motion.div key={event.id} variants={cardVariants}>
                    <Link
                      href={`/portfolio/${event.id}`}
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
                          {event.category} {event.location ? `· ${event.location}` : ""}
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
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* CLOSING INVITATION CTA */}
        <section className="relative py-12 sm:py-16 bg-[#5F327B] text-[#FAF8F5] overflow-hidden">
          <div 
            aria-hidden="true" 
            className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:24px_24px]" 
          />

          <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 text-center">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#FAF8F5]/70 block mb-2">
              Let&apos;s Create Something Beautiful
            </span>

            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal leading-[1.1] text-[#FAF8F5] max-w-3xl mx-auto mb-4">
              Your celebration deserves a setting <br className="hidden sm:inline" />
              <span className="italic font-light text-[#FAF8F5]/90">
                designed with intention.
              </span>
            </h2>

            <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#FAF8F5]/80 font-light leading-relaxed mb-6">
              Allow us to bring our signature botanical aesthetic to your upcoming wedding, gala, or private event.
            </p>

            <div>
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-3 px-8 py-4 bg-[#FAF8F5] text-[#5F327B] text-xs uppercase tracking-[0.2em] font-medium rounded-sm transition-all duration-300 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF8F5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#5F327B]"
              >
                <span>Book a Consultation</span>
                <span
                  aria-hidden="true"
                  className="transform transition-transform duration-300 group-hover:translate-x-1.5 text-base"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}