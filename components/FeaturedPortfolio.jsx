'use client';

import Image from "next/image";
import Link from "next/link";

const portfolioEvents = [
  {
    title: "",
    category: "",
    slug: "lauryn-and-ugo",
    image: "/couple1.jpg",
  },
  {
    title: "",
    category: "",
    slug: "amanda-and-frank",
    image: "/por5.jpg",
  },
  {
    title: "Love In Colors",
    category: "",
    slug: "love-in-colors-traditional-wedding",
    image: "/loveintraditionalmarriage1.webp",
  },
];

export default function FeaturedPortfolio() {
  return (
    <section
      aria-label="Featured Portfolio"
      className="relative w-full bg-white text-[#1A1A1A] py-12 sm:py-16 border-b border-[#E8E1DC] overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">

        {/* EDITORIAL HEADER BLOCK */}
        <div
          className="max-w-xl mx-auto text-center mb-6 sm:mb-8"
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal leading-[1.15] text-[#1A1A1A] mb-2">
            Curated Portfolio <br className="hidden sm:inline" />
          </h2>
        </div>

        {/* 6-IMAGE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10">
          {portfolioEvents.map((event, index) => (
            <div
              key={event.slug} 
              className={index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
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
            </div>
          ))}
        </div>

        {/* FULL-SIZED CTA BUTTON */}
        <div
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
        </div>

      </div>
    </section>
  );
}
