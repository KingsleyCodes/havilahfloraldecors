"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Structured Portfolio Archives Data
const projectsData = [
  {
    id: "project-01",
    title: "The Ivory Cathedral Wedding",
    category: "Weddings",
    location: "Lagos, Nigeria",
    year: "2026",
    image: "/a1.jpg",
    aspect: "aspect-[16/9]",
    featuredType: "hero",
    description:
      "An ethereal floral installation featuring thousands of cascading white garden roses, bespoke acrylic architectural structures, and warm ambient candlelight."
  },
  {
    id: "project-02",
    title: "Sculptural Botanical Gala",
    category: "Event Decor",
    location: "Abuja",
    year: "2026",
    image: "/por1.jpg",
    aspect: "aspect-[4/5]",
    description: "Avant-garde floral sculptures tailored for a high-profile corporate anniversary."
  },
  {
    id: "project-03",
    title: "Minimalist Champagne Arch",
    category: "Floral Design",
    location: "Victoria Island",
    year: "2025",
    image: "/por2.jpg",
    aspect: "aspect-[3/4]",
    description: "Organic asymmetrical ceremony arch blending dried pampas and fresh phalaenopsis orchids."
  },
  {
    id: "project-04",
    title: "Opulent Banquet Tablescape",
    category: "Venue Styling",
    location: "Ikoyi",
    year: "2025",
    image: "/por3.jpg",
    aspect: "aspect-[16/10]",
    description: "Custom crystal tableware paired with low, immersive botanical arrangements."
  },
  {
    id: "project-05",
    title: "Overhead Hanging Flora",
    category: "Installations",
    location: "Lagos",
    year: "2025",
    image: "/por4.jpg",
    aspect: "aspect-[4/3]",
    description: "A suspended ceiling canopy of emerald greenery and floating white blooms."
  },
  {
    id: "project-06",
    title: "The Glasshouse Soirée",
    category: "Weddings",
    location: "Eko Atlantic",
    year: "2025",
    image: "/por5.jpg",
    aspect: "aspect-[4/5]",
    featuredType: "split-left",
    description:
      "A light-filled botanical transformation using transparent glass columns, warm amber lighting, and layered neutral floral textures."
  },
  {
    id: "project-07",
    title: "Botanical Canopy Reception",
    category: "Weddings",
    location: "Lekki",
    year: "2025",
    image: "/por6.jpg",
    aspect: "aspect-[3/4]",
    description: "Full indoor venue transformation with lush foliage and bespoke floral arches."
  },
  {
    id: "project-08",
    title: "Earthy Terracotta Soirée",
    category: "Event Decor",
    location: "Abuja",
    year: "2025",
    image: "/po9.jpg",
    aspect: "aspect-[4/5]",
    description: "Warm earthy tones, dried botanical accents, and hand-poured ceramic details."
  },
  {
    id: "project-09",
    title: "Terrace Sunset Installation",
    category: "Installations",
    location: "Victoria Island",
    year: "2026",
    image: "/pp2.jpg",
    aspect: "aspect-[4/5]",
    featuredType: "split-right",
    description:
      "A dramatic outdoor sunset backdrop meticulously built with layered ivory roses and botanical greenery overlooking the coast."
  },
  {
    id: "project-10",
    title: "Monochrome Dahlia Pavilion",
    category: "Venue Styling",
    location: "Lagos",
    year: "2026",
    image: "/po7.jpg",
    aspect: "aspect-[16/10]",
    description: "Sleek contemporary venue arrangement featuring monochromatic dahlia clusters."
  },
  {
    id: "project-11",
    title: "Cascading Orchid Backdrop",
    category: "Installations",
    location: "Abuja",
    year: "2026",
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

  // Deterministic derived data (no unnecessary React state or useEffect)
  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  // Extract special featured items for rhythmic placement when "All" is selected
  const isAll = activeCategory === "All";
  const primaryHero = isAll ? projectsData.find((p) => p.featuredType === "hero") : null;
  const splitLeftProject = isAll ? projectsData.find((p) => p.featuredType === "split-left") : null;
  const splitRightProject = isAll ? projectsData.find((p) => p.featuredType === "split-right") : null;
  const finalFeatured = isAll ? projectsData.find((p) => p.featuredType === "final") : null;

  // Split gallery projects into two natural sections to frame the full-width & split features
  const regularProjects = filteredProjects.filter((p) => !p.featuredType);
  const galleryPart1 = regularProjects.slice(0, 4);
  const galleryPart2 = regularProjects.slice(4);

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1A1A1A] font-sans antialiased selection:bg-[#E2D2C0] selection:text-[#1A1A1A]">
      {/* Existing Navbar Integration */}
      <Navbar />

      <main className="pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-28">
        {/* EDITORIAL PORTFOLIO INTRO HERO */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto mb-16 md:mb-24">
          <div className="border-b border-[#E8E2D8] pb-10 md:pb-16">
            <span className="block text-xs uppercase tracking-[0.25em] text-[#8C8275] mb-4 font-semibold">
              Selected Archives
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal leading-[1.08] tracking-tight text-[#1A1A1A] max-w-5xl">
              Our Portfolio
            </h1>
          </div>
        </section>

        {/* SELECTED WORK INTRODUCTION */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto mb-16 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5">
              <span className="text-xs uppercase tracking-[0.2em] text-[#8C8275] font-semibold block mb-2">
                01 / Philosophy
              </span>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-normal text-[#1A1A1A] leading-snug">
                A collection of floral designs, wedding environments, and event experiences created with intention.
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="text-base md:text-lg text-[#555048] leading-relaxed font-light">
                Every space holds a story. At Havilah Florals & Decor, our portfolio showcases bespoke botanical sculpting, refined event styling, and atmospheric venue transformations designed to elevate moments into timeless memories.
              </p>
            </div>
          </div>
        </section>

        {/* CATEGORY FILTER */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto mb-16 md:mb-20">
          <div className="flex items-center space-x-6 md:space-x-10 overflow-x-auto no-scrollbar border-b border-[#E8E2D8] pb-4">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs md:text-sm uppercase tracking-[0.18em] transition-all duration-300 whitespace-nowrap relative pb-2 focus:outline-none ${
                    isActive
                      ? "text-[#1A1A1A] font-semibold"
                      : "text-[#8C8275] hover:text-[#1A1A1A] font-normal"
                  }`}
                  aria-pressed={isActive}
                >
                  {cat}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C5A059]" />
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* PRIMARY FEATURED PROJECT (HERO EXHIBIT) */}
        {primaryHero && (
          <section className="px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto mb-20 md:mb-32">
            <Link
              href={`/portfolio/${primaryHero.id}`}
              className="group block relative overflow-hidden bg-[#F2EDE4]"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={primaryHero.image}
                  alt={primaryHero.title}
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1600px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.18em] text-[#8C8275] mb-2 font-medium">
                    <span>{primaryHero.category}</span>
                    <span>•</span>
                    <span>{primaryHero.location}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl text-[#1A1A1A] group-hover:text-[#C5A059] transition-colors duration-300">
                    {primaryHero.title}
                  </h3>
                  {primaryHero.description && (
                    <p className="text-sm md:text-base text-[#666055] font-light max-w-2xl mt-2">
                      {primaryHero.description}
                    </p>
                  )}
                </div>
                <div className="flex items-center text-xs uppercase tracking-[0.2em] font-medium text-[#1A1A1A] group-hover:text-[#C5A059] transition-colors duration-300 whitespace-nowrap pt-2 md:pt-0">
                  <span>View Project</span>
                  <span className="ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300">
                    →
                  </span>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* GALLERY PART 1 — ASYMMETRIC PORTFOLIO GRID */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto mb-20 md:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            {galleryPart1.map((project, idx) => {
              // Version 1 Asymmetric Layout Engine
              let colSpan = "md:col-span-6";
              if (idx % 4 === 0) colSpan = "md:col-span-7";
              if (idx % 4 === 1) colSpan = "md:col-span-5";
              if (idx % 4 === 2) colSpan = "md:col-span-5";
              if (idx % 4 === 3) colSpan = "md:col-span-7";

              return (
                <div key={project.id} className={`${colSpan} group`}>
                  <Link href={`/portfolio/${project.id}`} className="block">
                    <div
                      className={`relative w-full ${project.aspect} overflow-hidden bg-[#F2EDE4] mb-4`}
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
                        <span className="block text-[11px] uppercase tracking-[0.18em] text-[#8C8275] mb-1">
                          {project.category} — {project.location}
                        </span>
                        <h4 className="font-serif text-lg md:text-2xl text-[#1A1A1A] group-hover:text-[#C5A059] transition-colors duration-300">
                          {project.title}
                        </h4>
                      </div>
                      <span className="text-xs uppercase tracking-[0.15em] text-[#8C8275] group-hover:text-[#1A1A1A] transition-colors duration-300 ml-4 hidden sm:inline-block">
                        {project.year}
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* FEATURED PROJECT 02 — SPLIT LAYOUT (IMAGE LEFT / TEXT RIGHT) */}
        {splitLeftProject && (
          <section className="px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto mb-20 md:mb-32">
            <div className="border-t border-[#E8E2D8] pt-16 md:pt-24">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
                <div className="md:col-span-7">
                  <Link
                    href={`/portfolio/${splitLeftProject.id}`}
                    className="group block relative aspect-[4/3] w-full overflow-hidden bg-[#F2EDE4]"
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
                <div className="md:col-span-5">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#8C8275] font-semibold block mb-3">
                    {splitLeftProject.category} · {splitLeftProject.location}
                  </span>
                  <h3 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] leading-tight mb-4">
                    {splitLeftProject.title}
                  </h3>
                  <p className="text-base text-[#666055] font-light leading-relaxed mb-8">
                    {splitLeftProject.description}
                  </p>
                  <Link
                    href={`/portfolio/${splitLeftProject.id}`}
                    className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-medium text-[#1A1A1A] hover:text-[#C5A059] transition-colors duration-300"
                  >
                    <span>View Project</span>
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FULL-WIDTH PHOTOGRAPH MOMENT */}
        <section className="w-full mb-20 md:mb-32">
          <div className="relative w-full h-[50vh] md:h-[75vh] bg-[#1A1A1A]">
            <Image
              src="/pp1.jpg"
              alt="Havilah Grand Floral Installation"
              fill
              loading="lazy"
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto mt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h4 className="font-serif text-xl text-[#1A1A1A]">
              Ethereal Pavilion Environment
            </h4>
            <span className="text-xs uppercase tracking-[0.18em] text-[#8C8275]">
              Venue Styling · Lagos
            </span>
          </div>
        </section>

        {/* FEATURED PROJECT 03 — SPLIT LAYOUT (TEXT LEFT / IMAGE RIGHT) */}
        {splitRightProject && (
          <section className="px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto mb-20 md:mb-32">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
              <div className="md:col-span-5 order-2 md:order-1">
                <span className="text-xs uppercase tracking-[0.2em] text-[#8C8275] font-semibold block mb-3">
                  {splitRightProject.category} · {splitRightProject.location}
                </span>
                <h3 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] leading-tight mb-4">
                  {splitRightProject.title}
                </h3>
                <p className="text-base text-[#666055] font-light leading-relaxed mb-8">
                  {splitRightProject.description}
                </p>
                <Link
                  href={`/portfolio/${splitRightProject.id}`}
                  className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-medium text-[#1A1A1A] hover:text-[#C5A059] transition-colors duration-300"
                >
                  <span>View Project</span>
                  <span className="ml-2">→</span>
                </Link>
              </div>
              <div className="md:col-span-7 order-1 md:order-2">
                <Link
                  href={`/portfolio/${splitRightProject.id}`}
                  className="group block relative aspect-[4/3] w-full overflow-hidden bg-[#F2EDE4]"
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
          </section>
        )}

        {/* GALLERY PART 2 — MORE ASYMMETRIC WORK */}
        {galleryPart2.length > 0 && (
          <section className="px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto mb-20 md:mb-32">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
              {galleryPart2.map((project, idx) => {
                let colSpan = "md:col-span-6";
                if (idx % 3 === 0) colSpan = "md:col-span-5";
                if (idx % 3 === 1) colSpan = "md:col-span-7";
                if (idx % 3 === 2) colSpan = "md:col-span-12";

                return (
                  <div key={project.id} className={`${colSpan} group`}>
                    <Link href={`/portfolio/${project.id}`} className="block">
                      <div
                        className={`relative w-full ${project.aspect} overflow-hidden bg-[#F2EDE4] mb-4`}
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
                          <span className="block text-[11px] uppercase tracking-[0.18em] text-[#8C8275] mb-1">
                            {project.category} — {project.location}
                          </span>
                          <h4 className="font-serif text-lg md:text-2xl text-[#1A1A1A] group-hover:text-[#C5A059] transition-colors duration-300">
                            {project.title}
                          </h4>
                        </div>
                        <span className="text-xs uppercase tracking-[0.15em] text-[#8C8275] group-hover:text-[#1A1A1A] transition-colors duration-300 ml-4 hidden sm:inline-block">
                          {project.year}
                        </span>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* FINAL FEATURED PROJECT EXHIBIT */}
        {finalFeatured && (
          <section className="px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto mb-20 md:mb-32">
            <div className="border-t border-[#E8E2D8] pt-16 md:pt-24">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#8C8275] font-semibold">
                    02 / Highlight Archive
                  </span>
                  <h3 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] mt-2">
                    {finalFeatured.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-[#666055] font-light max-w-md mt-4 md:mt-0">
                  {finalFeatured.description}
                </p>
              </div>

              <Link
                href={`/portfolio/${finalFeatured.id}`}
                className="group block relative overflow-hidden bg-[#F2EDE4]"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={finalFeatured.image}
                    alt={finalFeatured.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1200px) 100vw, 1600px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* ELEGANT CONSULTATION CTA */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
          <div className="bg-[#FAF6F0] border border-[#E8E2D8] p-10 md:p-20 text-center rounded-none">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8C8275] font-semibold block mb-4">
              Let's Create Something Beautiful
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] font-normal max-w-2xl mx-auto mb-6">
              Your celebration deserves a setting designed with intention.
            </h2>
            <p className="text-base md:text-lg text-[#666055] font-light max-w-xl mx-auto mb-10">
              Allow us to bring our signature botanical aesthetic to your upcoming wedding, gala, or private event.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#1A1A1A] text-[#FBF9F5] px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C5A059] hover:text-white transition-colors duration-300"
            >
              Book a Consultation →
            </Link>
          </div>
        </section>
      </main>

      {/* Existing Footer Integration */}
      <Footer />
    </div>
  );
}