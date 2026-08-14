'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  // Simple scroll reveal effect simulation for interactive feel
  useEffect(() => {
    const handleReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 100) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleReveal);
    handleReveal();
    return () => window.removeEventListener('scroll', handleReveal);
  }, []);

  return (
    <div className="bg-[#EEEDE7] text-[#1b1c1c] antialiased selection:bg-[#5f327b] selection:text-white min-h-screen flex flex-col">
      
      {/* IMPORTED NAVBAR COMPONENT */}
      <Navbar />

      <main className="pt-[100px] flex-grow">
        
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-5 md:px-16 py-16">
          <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10 items-center">
            
            <div className="col-span-1 md:col-span-7 space-y-8 reveal active">
              <span className="inline-block px-4 py-1 bg-[#E9E1F0] text-[#471963] text-xs font-semibold rounded-full uppercase tracking-widest">
                Bespoke Curation
              </span>
              <h1 className="text-4xl md:text-[72px] font-serif leading-[1.1] text-[#5f327b] tracking-tight">
                Elevating Moments<br />Through Botanical<br />Artistry.
              </h1>
              <p className="text-lg text-[#4c444f] max-w-xl leading-relaxed font-sans">
                We design immersive floral environments that tell your unique story. From intimate gatherings to grand celebrations, our approach is rooted in modern luxury and editorial refinement.
              </p>
              <div className="pt-4">
                <a
                  href="#services"
                  className="inline-flex items-center space-x-2 text-[#471963] hover:text-[#794b95] transition-colors duration-300 text-xs font-semibold uppercase tracking-widest group"
                >
                  <span>Explore Services</span>
                  <span className="material-symbols-outlined transform group-hover:translate-y-1 transition-transform text-base">
                    arrow_downward
                  </span>
                </a>
              </div>
            </div>

            <div className="col-span-1 md:col-span-5 relative mt-12 md:mt-0 reveal active">
              <div className="aspect-[3/4] relative overflow-hidden bg-[#e4e2e2] rounded-lg shadow-xl">
                <Image
                  src="/h2.png"
                  alt="Elegant floral arrangement"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-8 -left-6 md:-left-12 bg-white/80 backdrop-blur-md p-6 max-w-[240px] rounded-lg shadow-lg border border-[#e4e2e2]">
                <p className="font-serif text-[20px] text-[#5f327b] italic">&ldquo;Art in bloom.&rdquo;</p>
              </div>
            </div>

          </div>
        </section>

        {/* Services Bento Grid */}
        <section className="py-24 px-5 md:px-16 bg-white" id="services">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-16 md:mb-24 reveal">
              <h2 className="text-4xl md:text-5xl font-serif text-[#5f327b] mb-4">Our Services</h2>
              <div className="w-12 h-[1px] bg-[#e9c176] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Service 1 */}
              <div className="md:col-span-8 group relative overflow-hidden bg-[#EEEDE7] min-h-[500px] rounded-lg reveal">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="https://lh3.googleusercontent.com/aida/AP1WRLvKc0d4Ez7sYXPeU7abeSlFhydihKpNL9O0jljglbromZ0MdEuX3Xhq_dYGnM9sdOs3iLTaSIJAE4AfhpjnJ1BPwXBfvvVeFcZ5jZZnWbjSzXpY3rWUfFHdejHvxA4vgfiJdy90d18ehQ1g_uh8HUAfOxYvojOFn7GmtZ7VIECIWnzUaqY3blk5Iz4_lgidWc5cf_IjsT9QS38KV-wfZaywkCIfZ6L-WaC3y8G4rqcejnts_NpTLvu0dx3_"
                    alt="Intimate wedding decor setup"
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-[#5f327b]/10 group-hover:bg-[#5f327b]/20 transition-colors duration-500"></div>
                </div>
                <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12 bg-gradient-to-t from-[#5f327b]/80 via-transparent to-transparent">
                  <span className="text-xs font-semibold text-[#E9E1F0] uppercase tracking-widest mb-3 inline-block">01. Signature</span>
                  <h3 className="text-3xl font-serif text-white mb-4">Intimate Wedding Decor</h3>
                  <p className="text-base text-white/90 max-w-md hidden md:block font-sans">
                    Curated environments for smaller gatherings, focusing on deep connection and exquisite detailing. We transform spaces to reflect your personal narrative.
                  </p>
                </div>
              </div>

              {/* Service 2 */}
              <div className="md:col-span-4 bg-[#fbf9f8] p-8 md:p-12 flex flex-col justify-between border border-[#e4e2e2] rounded-lg reveal">
                <div>
                  <span className="text-xs font-semibold text-[#775a19] uppercase tracking-widest mb-3 inline-block">02. Bespoke</span>
                  <h3 className="text-3xl font-serif text-[#5f327b] mb-4">Luxe Floral Styling</h3>
                  <p className="text-base text-[#4c444f] mb-8 font-sans">
                    Bespoke arrangements using premium, highly-coveted blooms. From dramatic hanging installations to delicate, sculptural bridal bouquets.
                  </p>
                </div>
                <Link href="#inquire" className="inline-flex items-center space-x-2 text-[#471963] hover:text-[#775a19] transition-colors duration-300 text-xs font-semibold uppercase tracking-widest">
                  <span>Inquire</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>

              {/* Service 3 */}
              <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 reveal">
                <div className="order-2 md:order-1 flex flex-col justify-center p-8 md:p-16 bg-[#E9E1F0]/30 rounded-lg">
                  <span className="text-xs font-semibold text-[#471963] uppercase tracking-widest mb-3 inline-block">03. Strategy</span>
                  <h3 className="text-3xl font-serif text-[#5f327b] mb-6">Event Design &amp; Consultation</h3>
                  <p className="text-base text-[#4c444f] mb-8 font-sans">
                    A highly collaborative process where we take your initial vision and translate it into a comprehensive visual strategy, encompassing florals, linens, and spatial flow.
                  </p>
                  <ul className="space-y-4 text-base text-[#4c444f] font-sans">
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-[#775a19] mr-3 mt-1">check_circle</span>
                      Concept Development
                    </li>
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-[#775a19] mr-3 mt-1">check_circle</span>
                      Color Palette Curation
                    </li>
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-[#775a19] mr-3 mt-1">check_circle</span>
                      Spatial Planning
                    </li>
                  </ul>
                </div>
                <div className="order-1 md:order-2 h-[400px] md:h-auto overflow-hidden rounded-lg relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida/AP1WRLvsffVKAkbmjhgZG_W2IKLDtexwbLOtvgk3Xc8I29QUC7SJX3iGGCp33Ahhpkt_YJ4O57L-68wt2KziUH6fqb3R6yww9aXW-7pHYN0Hqu6OCKVuPcbrMsHCP8Vrgznfue4D-hu4X3jYlh3cjMYlWGCfachg7HWkFlJR3ah4HEzyyV4LlCjVRFKtDoOuLJbhwJPeNaQvC3M6_68QlZZIV-zIND9A3jJs8oXdaAoT6FWqdxSX3sABqDNDdsnK"
                    alt="Floral design consultation details"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 px-5 md:px-16 bg-[#EEEDE7]">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-4 reveal">
                <h2 className="text-4xl md:text-5xl font-serif text-[#5f327b] sticky top-32">The Process</h2>
                <p className="text-base text-[#4c444f] mt-6 pr-8 font-sans">
                  We believe that luxury lies in the experience as much as the final aesthetic. Our methodical approach ensures peace of mind.
                </p>
              </div>
              <div className="md:col-span-8 space-y-16 mt-12 md:mt-0">
                <div className="flex flex-col md:flex-row gap-8 reveal">
                  <div className="md:w-1/4">
                    <span className="text-6xl font-serif text-[#5f327b]/20">01</span>
                  </div>
                  <div className="md:w-3/4 border-t border-[#cfc3d0] pt-6">
                    <h4 className="text-2xl font-serif text-[#5f327b] mb-3">Consultation</h4>
                    <p className="text-base text-[#4c444f] font-sans">
                      An initial meeting to understand your style, preferences, and the scale of your event. We discuss overall themes and initial concepts.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-8 reveal">
                  <div className="md:w-1/4">
                    <span className="text-6xl font-serif text-[#5f327b]/20">02</span>
                  </div>
                  <div className="md:w-3/4 border-t border-[#cfc3d0] pt-6">
                    <h4 className="text-2xl font-serif text-[#5f327b] mb-3">Design Proposal</h4>
                    <p className="text-base text-[#4c444f] font-sans">
                      We present a tailored mood board, curated floral recipes, and a comprehensive quote that aligns with your vision and venue.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-8 reveal">
                  <div className="md:w-1/4">
                    <span className="text-6xl font-serif text-[#5f327b]/20">03</span>
                  </div>
                  <div className="md:w-3/4 border-t border-[#cfc3d0] pt-6">
                    <h4 className="text-2xl font-serif text-[#5f327b] mb-3">Execution</h4>
                    <p className="text-base text-[#4c444f] font-sans">
                      Our team manages the seamless installation and styling on the day of the event, ensuring every petal is perfectly placed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-5 md:px-16 bg-[#5f327b] text-white text-center relative overflow-hidden" id="inquire">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white"></div>
          </div>
          <div className="max-w-2xl mx-auto relative z-10 reveal">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Let&apos;s Create Something Beautiful.</h2>
            <p className="text-lg text-white/80 mb-10 font-sans">
              Currently accepting commissions for the upcoming season. Reach out to secure your date and begin the design journey.
            </p>
            <form className="space-y-6 max-w-md mx-auto text-left">
              <div>
                <input
                  className="w-full bg-transparent border-0 border-b border-white/30 text-white placeholder-white/50 focus:ring-0 focus:border-white text-base pb-2 px-0 transition-colors"
                  placeholder="Your Name"
                  type="text"
                />
              </div>
              <div>
                <input
                  className="w-full bg-transparent border-0 border-b border-white/30 text-white placeholder-white/50 focus:ring-0 focus:border-white text-base pb-2 px-0 transition-colors"
                  placeholder="Email Address"
                  type="email"
                />
              </div>
              <button
                className="w-full py-4 bg-white text-[#5f327b] text-xs font-semibold uppercase tracking-widest hover:bg-[#EEEDE7] transition-colors duration-300 mt-4 rounded-md"
                type="button"
              >
                Inquire Now
              </button>
            </form>
          </div>
        </section>

      </main>

      
        
      <Footer/> 

    </div>
  );
}