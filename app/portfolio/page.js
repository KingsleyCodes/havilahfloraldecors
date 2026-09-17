"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Structured Portfolio Archives Data
// NOTE: Ensure these IDs match the keys in your [slug] page's eventGalleries object
const projectsData = [
  {
    id: "the-beauty-of-nature",
    title: "Goldie and Ned",
    category: "The Beauty Of Nature",
    location: "",
    image: "/crucmain.jpg",
    description: ""
  },
  {
    id: "featured-wedding-one",
    title: "",
    category: "",
    location: "",
    image: "/couple1.jpg",
    description: ""
  },
  {
    id: "featured-wedding-two",
    title: "",
    category: "",
    location: "",
    image: "/por5.jpg",
    description: ""
  },
  {
    id: "love-in-colors-traditional-wedding",
    title: "Happiness and Demola",
    category: "Love in color",
    location: "",
    image: "/loveintraditionalmarriage1.webp",
    description: ""
  },
  {
    id: "the-royal-wedding-reception",
    title: "Mary and Oswald",
    category: "The Royal Regal",
    location: "",
    image: "/theroyal.jpeg",
    description: "An intimate outdoor dining experience featuring warm candlelit long tables."
  },
  {
    id: "the-adorables-milestone-celebration",
    title: "The Adorables",
    category: "One Year Birthday",
    location: "",
    image: "/theadorables1.webp",
    description: "A dramatic botanical sculpture designed to anchor ceremony vows."
  },
  {
    id: "we-together-forever",
    title: "Wani and Evans",
    category: "WE: Together FORVER",
    location: "",
    image: "/we.jpg",
    description: "Rich velvet textures paired with moody floral arrangements."
  },
  {
    id: "celebration-of-life-mummy-crown",
    title: "Mummy Crown",
    category: "celebration of life",
    location: "",
    image: "/celebrationoflife.webp",
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
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
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
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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

        
      </main>
    </div>
  );
}