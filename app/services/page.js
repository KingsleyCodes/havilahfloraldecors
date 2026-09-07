'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    category: "",
    title: "Personalized Wedding Decor",
    description:
      "Creating spaces that feel like your love story.We transform venues into personalized wedding experiences where every detail works together beautifully, allowing you and your guests to feel immersed in the celebration of your journey.",
    image:
      "/couple1.jpg",
    features: [
      "Spatial & Tabletop Styling",
      "Custom Botanical Installations",
      "Atmospheric Lighting & Textiles",
    ],
  },
  {
    category: "",
    title: "Milestone Celebrations",
    description:
      "Beautifully celebrating life's meaningful moments. Whether it's a milestone birthday, anniversary, baby shower, proposal, engagement, or special gathering, we design experiences that honour the occasion and the people at the heart of it.",
    image:
      "/couple1.jpg",
    features: [
      "Botanical Sculptures",
      "Bridal & Party Artistry",
      "On-Site Conditioning & Build",
    ],
  },
  {
    category: "",
    title: "Floral Design and Installations",
    description:
      "Designed to completely elevate your venue, our bespoke floral installations transform architectural spaces into unforgettable, atmospheric backdrops that capture the beauty and emotion of your event.",
    image:
      "/couple1.jpg",
    features: [
      "Custom Backdrop & Stage Design",
      "Brand-Aligned Color Curation",
      "Complete On-Site Management",
    ],
  },
  {
    category: "",
    title: "Design Development",
    description:
      "For clients who want professional guidance before making decor decisions, we help shape your inspiration into a cohesive concept that brings clarity, confidence, and direction to your celebration.",
    image:
      "/couple1.jpg",
    features: [
      "Overhead Suspended Greenery",
      "Architectural Entrance Arches",
      "Custom Drapery & Mood Lighting",
    ],
  },
];

const processSteps = [
  {
    label: "Consultation",
    title: "Vision & Concept Development",
    text: "An initial creative dialogue to explore your style, color story, venue dynamics, and structural aspirations.",
  },
  {
    label: "Proposal",
    title: "Tailored Visual Strategy",
    text: "We curate custom mood boards, floral recipes, spatial layouts, and detailed quotes aligned with your aesthetic.",
  },
  {
    label: "Execution",
    title: "Artisan On-Site Production",
    text: "Our team manages complete installation, floral styling, and precise placement on the day of your event.",
  },
];

export default function ServicesPage() {
  useEffect(() => {
    const handleReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 80) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleReveal);
    handleReveal();
    return () => window.removeEventListener('scroll', handleReveal);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] font-sans antialiased selection:bg-[#5F327B] selection:text-white flex flex-col">
      <main className="pt-20 lg:pt-24 flex-grow">
        {/* =========================================================================
            SECTION — HERO
            ========================================================================= */}
        <section className="relative py-6 sm:py-8 md:py-10 bg-[#FAF8F5] border-b border-[#E6DFDA]">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
              
              {/* HERO TEXT */}
              <div className="lg:col-span-7 space-y-4 reveal active">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#5F327B] block">
                  Design &amp; Curation Services
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] text-[#1A1A1A]">
                  We Curate Wedding Decor Experiences
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-[#5C555B] font-light leading-relaxed max-w-xl">
                  We design immersive floral environments that tell your unique story. From intimate gatherings to grand celebrations, our approach is rooted in modern luxury and editorial refinement.
                </p>
                <div className="pt-2">
                  <a
                    href="#services-grid"
                    className="inline-flex items-center space-x-2 text-[#5F327B] hover:text-[#5F327B]/80 transition-colors duration-300 text-xs font-semibold uppercase tracking-[0.2em] group"
                  >
                    <span>Explore Our Services</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-y-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* HERO IMAGE */}
              <div className="lg:col-span-5 reveal active">
                <div className="relative aspect-[4/5] w-full bg-[#E6DFDA] overflow-hidden rounded-sm border border-[#E6DFDA] shadow-sm">
                  <Image
                    src="/serviceshavilahfloralsdecor.jpg"
                    alt="Elegant Havilah floral arrangement"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 border-[6px] border-[#FAF8F5]/20 pointer-events-none" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION — OUR SERVICES GRID
            ========================================================================= */}
        <section id="services-grid" className="relative py-6 sm:py-8 md:py-10 bg-[#FAF8F5] border-b border-[#E6DFDA]">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 pb-4 border-b border-[#E6DFDA]">
              <div className="max-w-2xl">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#5F327B] block mb-1.5">
                  What We Offer
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1A1A1A] leading-[1.1]">
                  Bespoke offerings crafted for extraordinary celebrations.
                </h2>
              </div>
            </div>

            {/* 4 CARDS AT A GLANCE ON DESKTOP */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {services.map((item, index) => (
                <article
                  key={index}
                  className="bg-white border border-[#E6DFDA] rounded-sm overflow-hidden flex flex-col justify-between group hover:shadow-md hover:border-[#5F327B]/40 transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] w-full bg-[#E6DFDA] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                    {item.category && (
                      <span className="absolute top-3 left-3 text-[9px] uppercase tracking-[0.15em] text-[#5F327B] font-semibold px-2 py-0.5 bg-[#FAF8F5] rounded-xs shadow-xs">
                        {item.category}
                      </span>
                    )}
                  </div>

                  <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
                    <div className="space-y-2 mb-4">
                      <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1A1A1A] group-hover:text-[#5F327B] transition-colors duration-300 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#5C555B] font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION — THE PROCESS
            ========================================================================= */}
        <section className="relative py-6 sm:py-8 md:py-10 bg-[#F4EFF6] text-[#1A1A1A] border-b border-[#E6DFDA]">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            
            <div className="max-w-2xl mb-6">
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#5F327B] block mb-1.5">
                Our Workflow
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#1A1A1A] leading-[1.1]">
                A disciplined approach from concept to celebration.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white border border-[#E6DFDA] rounded-sm flex flex-col justify-between group hover:border-[#5F327B] transition-colors duration-300"
                >
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#5F327B] font-mono block mb-2">
                      {step.label}
                    </span>
                    <h3 className="font-serif text-xl font-normal text-[#1A1A1A] mb-2 group-hover:text-[#5F327B] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C555B] font-light leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION — CLOSING INVITATION
            ========================================================================= */}
        <section className="relative py-8 sm:py-12 bg-[#5F327B] text-[#FAF8F5] overflow-hidden">
          <div 
            aria-hidden="true" 
            className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:24px_24px]" 
          />

          <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
            
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#FAF8F5]/70 block mb-2">
              Start a Conversation
            </span>

            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal leading-[1.1] text-[#FAF8F5] max-w-3xl mx-auto mb-4">
              Ready to bring your <br className="hidden sm:inline" />
              <span className="italic font-light text-[#FAF8F5]/90">
                event vision to life?
              </span>
            </h2>

            <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#FAF8F5]/80 font-light leading-relaxed mb-6">
              We look forward to translating your event ideas into an immersive architectural and botanical experience.
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