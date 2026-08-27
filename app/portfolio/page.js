"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Structured Portfolio Archives Data
const projectsData = [
  {
    id: "ivory-cathedral-wedding",
    title: "The Ivory Cathedral Wedding",
    category: "Weddings",
    image: "/a1.jpg",
    aspect: "aspect-[16/9]",
    featuredType: "hero",
    description:
      "An ethereal floral installation featuring thousands of cascading white garden roses, bespoke acrylic architectural structures, and warm ambient candlelight."
  },
  {
    id: "sculptural-botanical-gala",
    title: "Sculptural Botanical Gala",
    category: "Event Decor",
    location: "Abuja",
    image: "/por1.jpg",
    aspect: "aspect-[4/5]",
    description: "Avant-garde floral sculptures tailored for a high-profile corporate anniversary."
  },
  {
    id: "minimalist-champagne-arch",
    title: "Minimalist Champagne Arch",
    category: "Floral Design",
    location: "Victoria Island",
    image: "/por2.jpg",
    aspect: "aspect-[3/4]",
    description: "Organic asymmetrical ceremony arch blending dried pampas and fresh phalaenopsis orchids."
  },
  {
    id: "opulent-banquet-tablescape",
    title: "Opulent Banquet Tablescape",
    category: "Venue Styling",
    location: "Ikoyi",
    image: "/por3.jpg",
    aspect: "aspect-[16/10]",
    description: "Custom crystal tableware paired with low, immersive botanical arrangements."
  },
  {
    id: "overhead-hanging-flora",
    title: "Overhead Hanging Flora",
    category: "Installations",
    image: "/por4.jpg",
    aspect: "aspect-[4/3]",
    description: "A suspended ceiling canopy of emerald greenery and floating white blooms."
  },
  {
    id: "glasshouse-soiree",
    title: "The Glasshouse Soirée",
    category: "Weddings",
    location: "Eko Atlantic",
    image: "/por5.jpg",
    aspect: "aspect-[4/5]",
    featuredType: "split-left",
    description:
      "A light-filled botanical transformation using transparent glass columns, warm amber lighting, and layered neutral floral textures."
  },
  {
    id: "botanical-canopy-reception",
    title: "Botanical Canopy Reception",
    category: "Weddings",
    location: "Lekki",
    image: "/por6.jpg",
    aspect: "aspect-[3/4]",
    description: "Full indoor venue transformation with lush foliage and bespoke floral arches."
  },
  {
    id: "earthy-terracotta-soiree",
    title: "Earthy Terracotta Soirée",
    category: "Event Decor",
    location: "Abuja",
    image: "/po9.jpg",
    aspect: "aspect-[4/5]",
    description: "Warm earthy tones, dried botanical accents, and hand-poured ceramic details."
  },
  {
    id: "terrace-sunset-installation",
    title: "Terrace Sunset Installation",
    category: "Installations",
    location: "Victoria Island",
    image: "/pp2.jpg",
    aspect: "aspect-[4/5]",
    featuredType: "split-right",
    description:
      "A dramatic outdoor sunset backdrop meticulously built with layered ivory roses and botanical greenery overlooking the coast."
  },
  {
    id: "monochrome-dahlia-pavilion",
    title: "Monochrome Dahlia Pavilion",
    category: "Venue Styling",
    image: "/po7.jpg",
    aspect: "aspect-[16/10]",
    description: "Sleek contemporary venue arrangement featuring monochromatic dahlia clusters."
  },
  {
    id: "cascading-orchid-backdrop",
    title: "Cascading Orchid Backdrop",
    category: "Installations",
    location: "Abuja",
    image: "/po8.jpg",
    aspect: "aspect-[16/9]",
    featuredType: "final",
    description:
      "A grand statement backdrop constructed entirely with white Phalaenopsis orchids for an unforgettable grand entrance."
  }
];

const categories = [
  "All",
  "Weddings",
  "Floral Design",
  "Event Decor",
  "Venue Styling",
  "Installations"
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  const isAll = activeCategory === "All";
  const primaryHero = isAll ? projectsData.find((p) => p.featuredType === "hero") : null;
  const splitLeftProject = isAll ? projectsData.find((p) => p.featuredType === "split-left") : null;
  const splitRightProject = isAll ? projectsData.find((p) => p.featuredType === "split-right") : null;
  const finalFeatured = isAll ? projectsData.find((p) => p.featuredType === "final") : null;

  const regularProjects = filteredProjects.filter((p) => !p.featuredType);
  const galleryPart1 = regularProjects.slice(0, 4);
  const galleryPart2 = regularProjects.slice(4);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] font-sans antialiased selection:bg-[#5F327B] selection:text-white flex flex-col">
      {/* GLOBAL NAVBAR */}
      <Navbar />

      <main className="pt-20 lg:pt-24 flex-grow">
        {/* =========================================================================
            SECTION — PORTFOLIO INTRO HERO
            ========================================================================= */}
        <section className="relative py-6 sm:py-8 md:py-10 bg-[#FAF8F5] border-b border-[#E6DFDA]">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            
            <div className="max-w-4xl space-y-3 mb-6">
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#5F327B] block">
                Selected Archives
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-[#1A1A1A]">
                Our Portfolio
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-[#5C555B] font-light leading-relaxed max-w-2xl pt-1">
                A collection of floral designs, wedding environments, and bespoke event experiences created with architectural intention.
              </p>
            </div>

            {/* CATEGORY FILTER NAV */}
            <div className="flex items-center space-x-6 overflow-x-auto no-scrollbar pt-2 border-t border-[#E6DFDA]">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-xs uppercase tracking-[0.18em] transition-all duration-300 whitespace-nowrap relative py-2 focus:outline-none ${
                      isActive
                        ? "text-[#5F327B] font-semibold"
                        : "text-[#5C555B] hover:text-[#1A1A1A] font-normal"
                    }`}
                    aria-pressed={isActive}
                  >
                    {cat}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#5F327B]" />
                    )}
                  </button>
                );
              })}
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION — PRIMARY FEATURED HERO EXHIBIT
            ========================================================================= */}
        {primaryHero && (
          <section className="relative py-6 sm:py-8 md:py-10 bg-[#FAF8F5] border-b border-[#E6DFDA]">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
              <Link
                href={`/portfolio/${primaryHero.id}`}
                className="group block relative overflow-hidden bg-[#E6DFDA] rounded-sm border border-[#E6DFDA]"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={primaryHero.image}
                    alt={primaryHero.title}
                    fill
                    priority
                    sizes="(max-width: 1200px) 100vw, 1500px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
                <div className="p-5 sm:p-6 bg-white flex flex-col md:flex-row md:items-end justify-between gap-4 border-t border-[#E6DFDA]">
                  <div>
                    <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.18em] text-[#5F327B] font-medium mb-1">
                      <span>{primaryHero.category}</span>
                      {primaryHero.location && (
                        <>
                          <span>•</span>
                          <span>{primaryHero.location}</span>
                        </>
                      )}
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#1A1A1A] group-hover:text-[#5F327B] transition-colors duration-300">
                      {primaryHero.title}
                    </h3>
                    {primaryHero.description && (
                      <p className="text-xs sm:text-sm text-[#5C555B] font-light max-w-2xl mt-1">
                        {primaryHero.description}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center text-xs uppercase tracking-[0.2em] font-medium text-[#5F327B] group-hover:text-[#1A1A1A] transition-colors duration-300 whitespace-nowrap pt-2 md:pt-0">
                    <span>Explore Project</span>
                    <span className="ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* =========================================================================
            SECTION — GALLERY PART 1 (GRID)
            ========================================================================= */}
        <section className="relative py-6 sm:py-8 md:py-10 bg-[#FAF8F5] border-b border-[#E6DFDA]">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {galleryPart1.map((project, idx) => {
                let colSpan = "md:col-span-6";
                if (idx % 4 === 0) colSpan = "md:col-span-7";
                if (idx % 4 === 1) colSpan = "md:col-span-5";
                if (idx % 4 === 2) colSpan = "md:col-span-5";
                if (idx % 4 === 3) colSpan = "md:col-span-7";

                return (
                  <div key={project.id} className={`${colSpan} group`}>
                    <Link href={`/portfolio/${project.id}`} className="block">
                      <div
                        className={`relative w-full ${project.aspect} overflow-hidden bg-[#E6DFDA] rounded-sm border border-[#E6DFDA] mb-3`}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="flex items-baseline justify-between pt-1">
                        <div>
                          <span className="block text-[10px] uppercase tracking-[0.18em] text-[#5F327B] font-medium mb-0.5">
                            {project.category} {project.location ? `— ${project.location}` : ""}
                          </span>
                          <h4 className="font-serif text-lg sm:text-xl text-[#1A1A1A] group-hover:text-[#5F327B] transition-colors duration-300">
                            {project.title}
                          </h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION — FEATURED SPLIT (IMAGE LEFT / TEXT RIGHT)
            ========================================================================= */}
        {splitLeftProject && (
          <section className="relative py-6 sm:py-8 md:py-10 bg-[#F4EFF6] border-b border-[#E6DFDA]">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                <div className="md:col-span-7">
                  <Link
                    href={`/portfolio/${splitLeftProject.id}`}
                    className="group block relative aspect-[4/3] w-full overflow-hidden bg-[#E6DFDA] rounded-sm border border-[#E6DFDA]"
                  >
                    <Image
                      src={splitLeftProject.image}
                      alt={splitLeftProject.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 900px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </Link>
                </div>
                <div className="md:col-span-5 space-y-3">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#5F327B] font-semibold block">
                    {splitLeftProject.category} {splitLeftProject.location ? `· ${splitLeftProject.location}` : ""}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-4xl text-[#1A1A1A] leading-tight">
                    {splitLeftProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C555B] font-light leading-relaxed">
                    {splitLeftProject.description}
                  </p>
                  <div className="pt-2">
                    <Link
                      href={`/portfolio/${splitLeftProject.id}`}
                      className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-medium text-[#5F327B] hover:text-[#1A1A1A] transition-colors duration-300"
                    >
                      <span>Explore Project</span>
                      <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =========================================================================
            SECTION — FULL-WIDTH BRAND MOMENT
            ========================================================================= */}
        <section className="relative w-full h-[35vh] sm:h-[45vh] min-h-[280px] bg-[#E6DFDA] overflow-hidden border-b border-[#E6DFDA]">
          <Image
            src="/pp1.jpg"
            alt="Havilah Grand Floral Canopy"
            fill
            loading="lazy"
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center text-center p-4">
            <h4 className="font-serif text-2xl sm:text-4xl text-white font-normal max-w-2xl leading-tight">
              Ethereal Pavilion Environment
            </h4>
          </div>
        </section>

        {/* =========================================================================
            SECTION — FEATURED SPLIT (TEXT LEFT / IMAGE RIGHT)
            ========================================================================= */}
        {splitRightProject && (
          <section className="relative py-6 sm:py-8 md:py-10 bg-[#FAF8F5] border-b border-[#E6DFDA]">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                <div className="md:col-span-5 order-2 md:order-1 space-y-3">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#5F327B] font-semibold block">
                    {splitRightProject.category} {splitRightProject.location ? `· ${splitRightProject.location}` : ""}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-4xl text-[#1A1A1A] leading-tight">
                    {splitRightProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C555B] font-light leading-relaxed">
                    {splitRightProject.description}
                  </p>
                  <div className="pt-2">
                    <Link
                      href={`/portfolio/${splitRightProject.id}`}
                      className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-medium text-[#5F327B] hover:text-[#1A1A1A] transition-colors duration-300"
                    >
                      <span>Explore Project</span>
                      <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
                <div className="md:col-span-7 order-1 md:order-2">
                  <Link
                    href={`/portfolio/${splitRightProject.id}`}
                    className="group block relative aspect-[4/3] w-full overflow-hidden bg-[#E6DFDA] rounded-sm border border-[#E6DFDA]"
                  >
                    <Image
                      src={splitRightProject.image}
                      alt={splitRightProject.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 900px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =========================================================================
            SECTION — GALLERY PART 2 (GRID)
            ========================================================================= */}
        {galleryPart2.length > 0 && (
          <section className="relative py-6 sm:py-8 md:py-10 bg-[#FAF8F5] border-b border-[#E6DFDA]">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {galleryPart2.map((project, idx) => {
                  let colSpan = "md:col-span-6";
                  if (idx % 3 === 0) colSpan = "md:col-span-5";
                  if (idx % 3 === 1) colSpan = "md:col-span-7";
                  if (idx % 3 === 2) colSpan = "md:col-span-12";

                  return (
                    <div key={project.id} className={`${colSpan} group`}>
                      <Link href={`/portfolio/${project.id}`} className="block">
                        <div
                          className={`relative w-full ${project.aspect} overflow-hidden bg-[#E6DFDA] rounded-sm border border-[#E6DFDA] mb-3`}
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                          />
                        </div>
                        <div className="flex items-baseline justify-between pt-1">
                          <div>
                            <span className="block text-[10px] uppercase tracking-[0.18em] text-[#5F327B] font-medium mb-0.5">
                              {project.category} {project.location ? `— ${project.location}` : ""}
                            </span>
                            <h4 className="font-serif text-lg sm:text-xl text-[#1A1A1A] group-hover:text-[#5F327B] transition-colors duration-300">
                              {project.title}
                            </h4>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* =========================================================================
            SECTION — FINAL FEATURED EXHIBIT
            ========================================================================= */}
        {finalFeatured && (
          <section className="relative py-6 sm:py-8 md:py-10 bg-[#FAF8F5] border-b border-[#E6DFDA]">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
              
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#5F327B] font-semibold block mb-1">
                    Highlight Archive
                  </span>
                  <h3 className="font-serif text-2xl sm:text-4xl text-[#1A1A1A]">
                    {finalFeatured.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#5C555B] font-light max-w-md mt-2 md:mt-0">
                  {finalFeatured.description}
                </p>
              </div>

              <Link
                href={`/portfolio/${finalFeatured.id}`}
                className="group block relative overflow-hidden bg-[#E6DFDA] rounded-sm border border-[#E6DFDA]"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={finalFeatured.image}
                    alt={finalFeatured.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1200px) 100vw, 1500px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </Link>

            </div>
          </section>
        )}

        {/* =========================================================================
            SECTION — CLOSING INVITATION CTA
            ========================================================================= */}
        <section className="relative py-8 sm:py-12 bg-[#5F327B] text-[#FAF8F5] overflow-hidden">
          <div 
            aria-hidden="true" 
            className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:24px_24px]" 
          />

          <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
            
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
                className="group inline-flex items-center space-x-3 px-6 sm:px-8 py-3.5 bg-[#FAF8F5] text-[#5F327B] text-xs uppercase tracking-[0.2em] font-medium rounded-full transition-all duration-300 hover:bg-[#FAF8F5]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF8F5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#5F327B]"
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

      {/* GLOBAL FOOTER */}
      <Footer />
    </div>
  );
}