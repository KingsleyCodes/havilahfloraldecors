'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  {
    category: "Signature",
    title: "Intimate Wedding Decor",
    description:
      "Curated environments for smaller gatherings, focusing on deep connection and exquisite detailing. We transform venues to reflect your personal narrative.",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLvKc0d4Ez7sYXPeU7abeSlFhydihKpNL9O0jljglbromZ0MdEuX3Xhq_dYGnM9sdOs3iLTaSIJAE4AfhpjnJ1BPwXBfvvVeFcZ5jZZnWbjSzXpY3rWUfFHdejHvxA4vgfiJdy90d18ehQ1g_uh8HUAfOxYvojOFn7GmtZ7VIECIWnzUaqY3blk5Iz4_lgidWc5cf_IjsT9QS38KV-wfZaywkCIfZ6L-WaC3y8G4rqcejnts_NpTLvu0dx3_",
    features: [
      "Spatial & Tabletop Styling",
      "Custom Botanical Installations",
      "Atmospheric Lighting & Textiles",
    ],
  },
  {
    category: "Bespoke",
    title: "Luxe Floral Styling",
    description:
      "Bespoke arrangements using premium, highly-coveted blooms. From dramatic hanging installations to delicate, sculptural bridal bouquets.",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLvsffVKAkbmjhgZG_W2IKLDtexwbLOtvgk3Xc8I29QUC7SJX3iGGCp33Ahhpkt_YJ4O57L-68wt2KziUH6fqb3R6yww9aXW-7pHYN0Hqu6OCKVuPcbrMsHCP8Vrgznfue4D-hu4X3jYlh3cjMYlWGCfachg7HWkFlJR3ah4HEzyyV4LlCjVRFKtDoOuLJbhwJPeNaQvC3M6_68QlZZIV-zIND9A3jJs8oXdaAoT6FWqdxSX3sABqDNDdsnK",
    features: [
      "Botanical Sculptures",
      "Bridal & Party Artistry",
      "On-Site Conditioning & Build",
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
      {/* GLOBAL NAVBAR */}
      <Navbar />

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
                  Elevating Moments Through Botanical Artistry.
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
                    src="/h2.png"
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
                <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#1A1A1A] leading-[1.1]">
                  Bespoke offerings crafted for extraordinary celebrations.
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {services.map((item, index) => (
                <article
                  key={index}
                  className="bg-white border border-[#E6DFDA] rounded-sm overflow-hidden flex flex-col justify-between group hover:shadow-md hover:border-[#5F327B]/40 transition-all duration-300"
                >
                  <div className="relative aspect-[16/9] w-full bg-[#E6DFDA] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                    <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.18em] text-[#5F327B] font-medium px-2.5 py-1 bg-[#FAF8F5] rounded-sm shadow-xs">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                    <div className="space-y-3 mb-6">
                      <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1A1A1A] group-hover:text-[#5F327B] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5C555B] font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#E6DFDA]/80 space-y-2">
                      <span className="text-[10px] uppercase tracking-widest text-[#5C555B] font-mono block">
                        Included Focus:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#1A1A1A]">
                        {item.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#5F327B]" />
                            <span className="font-light">{feat}</span>
                          </li>
                        ))}
                      </ul>
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
                floral vision to life?
              </span>
            </h2>

            <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#FAF8F5]/80 font-light leading-relaxed mb-6">
              We look forward to translating your event ideas into an immersive architectural and botanical experience.
            </p>

            <div>
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-3 px-6 sm:px-8 py-3.5 bg-[#FAF8F5] text-[#5F327B] text-xs uppercase tracking-[0.2em] font-medium rounded-full transition-all duration-300 hover:bg-[#FAF8F5]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF8F5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#5F327B]"
              >
                <span>Inquire About Your Date</span>
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