import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Data structures reflecting Havilah Florals & Decor actual brand positioning and editorial flow
const philosophies = [
  {
   
    title: "Architectural Intent",
    subtitle: "Beyond Ornamentation",
    description:
      "We believe floral design is an architectural discipline. We do not simply fill tables with blooms; we analyze spatial proportions, sightlines, ceiling heights, and guest movement to construct immersive structures that reframe venues into living canvases.",
  },
  {
  
    title: "Organic Materiality",
    subtitle: "Harmonious Curation",
    description:
      "Our work celebrates the natural movement, texture, and rare seasonal beauty of botanicals. Paired with custom linen selections, bespoke lighting design, and tactile tableware, every element is curated to evoke authentic sensory warmth.",
  },
  {

    title: "Atmospheric Storytelling",
    subtitle: "Emotionally Grounded",
    description:
      "Every celebration possesses a singular narrative. We reject template aesthetics, listening deeply to your vision to compose an environment that feels profoundly personal, emotionally resonant, and distinctly unforgettable.",
  },
];

const experienceSteps = [
  {
  
    title: "The Vision & Discovery",
    duration: "Phase I",
    description:
      "We begin with an in-depth creative consultation to understand the emotional heart of your event, exploring color palettes, architectural themes, floral preferences, and physical venue dynamics.",
  },
  {
   
    title: "Spatial & Floral Design",
    duration: "Phase II",
    description:
      "Our design studio translates ideas into spatial concepts, floral selections, lighting schematics, and custom structural mockups—ensuring every detail aligns with your refined taste.",
  },
  {
   
    title: "Bespoke Curation",
    duration: "Phase III",
    description:
      "From sourcing rare botanical varieties to crafting custom installation frameworks and selecting complementary tableware, every physical component is meticulously curated.",
  },
  {
   
    title: "Flawless Execution",
    duration: "Phase IV",
    description:
      "On the day of your celebration, our artisan production team manages on-site build-outs, floral conditioning, atmospheric styling, and precise installation with calm, professional rigor.",
  },
];

const distinctionPoints = [
  {
   
    heading: "Bespoke Event Architecture",
    text: "We specialize in grand-scale transformations—turning blank exhibition halls, private estates, and ballroom venues into intimate, emotionally captivating environments.",
  },
  {
    
    heading: "Artisan Botanical Mastery",
    text: "Our floral artists treat stems like brushstrokes, blending rare local and imported blooms into living installations that honor both natural form and structural balance.",
  },
  {
   
    heading: "Seamless Production Precision",
    text: "Behind our delicate aesthetic lies a disciplined logistical framework. We handle every detail, timeline, and spatial installation so you can experience your day fully.",
  },
  {
    
    heading: "Uncompromising Quality",
    text: "We deliberately limit the number of commissions we accept each season to ensure every couple and host receives our absolute focus, devotion, and artistic rigor.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] font-sans antialiased selection:bg-[#5F327B] selection:text-white">
      {/* GLOBAL NAVBAR */}
      <Navbar />

      <main>
        {/* =========================================================================
            SECTION 01 — EDITORIAL HERO
            ========================================================================= */}
        <section
          aria-label="About Havilah Florals & Decor"
          className="relative pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-20 md:pb-24 overflow-hidden border-b border-[#E6DFDA]"
        >
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            
            {/* HERO EDITORIAL HEADER */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 sm:mb-16 md:mb-20">
              <div className="lg:col-span-8">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#5F327B] block mb-3 sm:mb-4">
                  01 &nbsp;—&nbsp; About Our Studio
                </span>
                <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] text-[#1A1A1A]">
                  Where thoughtful design becomes an{" "}
                  <span className="italic font-light text-[#5F327B]">
                    unforgettable experience.
                  </span>
                </h1>
              </div>
              <div className="lg:col-span-4 lg:pb-2">
                <p className="text-xs sm:text-sm md:text-base text-[#5C555B] font-light leading-relaxed">
                  Havilah Florals &amp; Decor is a premier floral design and luxury event styling studio. We compose immersive, architectural atmospheres for weddings, galas, and landmark celebrations.
                </p>
              </div>
            </div>

            {/* ASYMMETRIC EDITORIAL PHOTO COMPOSITION */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              <div className="lg:col-span-8 relative min-h-[350px] sm:min-h-[480px] md:min-h-[560px] bg-[#E6DFDA] overflow-hidden group">
                <Image
                  src="/a1.jpg"
                  alt="Havilah Florals luxury botanical event installation setup"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-xs font-mono tracking-widest uppercase">
                  Studio Portfolio &nbsp;|&nbsp; Custom Floral Architecture
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-between gap-6">
                <div className="relative aspect-[4/5] sm:aspect-[16/9] lg:aspect-[4/5] bg-[#E6DFDA] overflow-hidden group">
                  <Image
                    src="/a2.jpg"
                    alt="Close-up detail of rare seasonal blooms and table styling"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 sm:p-8 bg-[#FAF8F5] border border-[#E6DFDA] flex flex-col justify-between">
                  <span className="font-serif italic text-2xl text-[#5F327B] mb-2 block">
                    “Atmosphere is everything.”
                  </span>
                  <p className="text-xs sm:text-sm text-[#5C555B] font-light leading-relaxed">
                    Our work blends botanical organic forms with structured spatial layout to turn physical spaces into emotional memories.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 02 — OUR STORY
            ========================================================================= */}
        <section
          aria-label="Our Story"
          className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-[#FAF8F5] border-b border-[#E6DFDA]"
        >
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              
              {/* LEFT COLUMN — EDITORIAL STATEMENT */}
              <div className="lg:col-span-5 space-y-6 sm:space-y-8">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#5F327B] block">
                  02 &nbsp;—&nbsp; The Origin
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.12] text-[#1A1A1A]">
                  Born from a passion for botanical artistry &amp; spatial transformation.
                </h2>

                <div className="relative aspect-[3/4] w-full max-w-md bg-[#E6DFDA] overflow-hidden border border-[#E6DFDA]">
                  <Image
                    src="/o1.png"
                    alt="Havilah Florals creative process and arrangement styling"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 border-[8px] border-[#FAF8F5]/30 pointer-events-none" />
                </div>
              </div>

              {/* RIGHT COLUMN — DETAILED STORY NARRATIVE */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-8 lg:pl-6 text-sm sm:text-base md:text-lg text-[#5C555B] font-light leading-relaxed">
                <p className="font-serif text-xl sm:text-2xl text-[#1A1A1A] leading-relaxed italic border-l-2 border-[#5F327B] pl-6 py-1">
                  Havilah Florals &amp; Decor was founded on a simple yet profound premise: celebrations should not look like temporary stages, but feel like bespoke, living environments.
                </p>

                <p>
                  What started as an intimate passion for floral artistry quickly expanded into a sought-after event styling studio. Based in Nigeria and serving premier destinations, Havilah has established a reputation for balancing artistic freedom with meticulous spatial execution.
                </p>

                <p>
                  Whether designing a lavish wedding, an exclusive private gala, or a high-profile corporate evening, our philosophy remains steadfast. We curate every flower stem, custom installation, ambient light fixture, and linen fold with intention.
                </p>

                <p>
                  We recognize that our clients are trusting us with their most momentous personal chapters. We do not take that trust lightly; we honor it by delivering an experience marked by professionalism, creative rigor, and absolute calm.
                </p>

                <div className="pt-4 grid grid-cols-2 gap-6 border-t border-[#E6DFDA] text-xs uppercase tracking-[0.2em] font-medium text-[#1A1A1A]">
                  <div>
                    <span className="text-[#5F327B] block font-serif italic text-lg lowercase tracking-normal">aesthetic</span>
                    Editorial &amp; Architectural
                  </div>
                  <div>
                    <span className="text-[#5F327B] block font-serif italic text-lg lowercase tracking-normal">focus</span>
                    Weddings &amp; Luxury Events
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 03 — THE HAVILAH PHILOSOPHY
            ========================================================================= */}
        <section
          aria-label="The Havilah Philosophy"
          className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-[#FAF8F5] border-b border-[#E6DFDA]"
        >
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#5F327B] block mb-3 sm:mb-4">
                03 &nbsp;—&nbsp; Our Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1A1A1A] leading-[1.1]">
                Three pillars that govern every stem, structure, and space we compose.
              </h2>
            </div>

            <div className="divide-y divide-[#E6DFDA] border-t border-b border-[#E6DFDA]">
              {philosophies.map((item) => (
                <article
                  key={item.number}
                  className="py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline group"
                >
                  <div className="lg:col-span-2 flex items-baseline space-x-3">
                    <span className="font-serif text-2xl sm:text-3xl italic text-[#5F327B]">
                      ({item.number})
                    </span>
                    <span className="text-xs uppercase tracking-widest text-[#5C555B]">
                      Pillar
                    </span>
                  </div>

                  <div className="lg:col-span-4">
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1A1A1A] group-hover:text-[#5F327B] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <span className="text-xs uppercase tracking-[0.18em] text-[#5F327B] font-medium block mt-1">
                      {item.subtitle}
                    </span>
                  </div>

                  <div className="lg:col-span-6">
                    <p className="text-xs sm:text-sm md:text-base text-[#5C555B] font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 04 — WHAT WE BELIEVE
            ========================================================================= */}
        <section
          aria-label="What We Believe"
          className="relative py-20 sm:py-24 md:py-28 bg-[#F4EFF6] text-[#1A1A1A] border-b border-[#E6DFDA]"
        >
          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
            
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#5F327B] block mb-6">
              04 &nbsp;—&nbsp; Core Belief
            </span>

            <blockquote className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#1A1A1A] leading-[1.18] max-w-5xl mx-auto mb-8 sm:mb-10">
              “Beauty is not an afterthought added to a room. True design is the invisible energy that makes guests feel genuinely honored to be there.”
            </blockquote>

            <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-[#5C555B] font-light leading-relaxed">
              We believe in the quiet luxury of thoughtful detail, the power of organic botanical composition, and the lasting impact of a seamlessly executed event environment.
            </p>

          </div>
        </section>

        {/* =========================================================================
            SECTION 05 — THE HAVILAH EXPERIENCE
            ========================================================================= */}
        <section
          aria-label="The Havilah Experience"
          className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-[#FAF8F5] border-b border-[#E6DFDA]"
        >
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 sm:mb-16">
              <div className="lg:col-span-8">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#5F327B] block mb-3 sm:mb-4">
                  05 &nbsp;—&nbsp; The Experience
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1A1A1A] leading-[1.1]">
                  A collaborative creative journey designed for absolute peace of mind.
                </h2>
              </div>
              <div className="lg:col-span-4 lg:pb-2">
                <p className="text-xs sm:text-sm text-[#5C555B] font-light leading-relaxed">
                  From initial vision mapping to late-night event teardown, our structural process guarantees clarity and artistic perfection.
                </p>
              </div>
            </div>

            {/* PROCESS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {experienceSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-6 sm:p-8 bg-[#FAF8F5] border border-[#E6DFDA] flex flex-col justify-between group hover:border-[#5F327B] transition-colors duration-500"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E6DFDA]">
                      <span className="font-serif text-2xl italic text-[#5F327B]">
                        ({step.step})
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#5C555B]">
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1A1A1A] mb-3 group-hover:text-[#5F327B] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C555B] font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-[#E6DFDA]/60 text-[10px] uppercase tracking-widest text-[#5F327B]">
                    Studio Standard
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 06 — VISUAL BRAND MOMENT
            ========================================================================= */}
        <section
          aria-label="Visual Brand Moment"
          className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] min-h-[400px] bg-[#E6DFDA] overflow-hidden"
        >
          <Image
            src="/a1.jpg"
            alt="Immersive floral reception canopy designed by Havilah Florals & Decor"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/25" />
          
          <div className="absolute inset-0 flex items-center justify-center text-center p-6">
            <div className="max-w-3xl space-y-4">
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-white/80 block">
                Immersion &amp; Artistry
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight">
                Transforming spaces into living, breathing stories.
              </h2>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 07 — WHY HAVILAH
            ========================================================================= */}
        <section
          aria-label="Why Havilah"
          className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-[#FAF8F5] border-b border-[#E6DFDA]"
        >
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#5F327B] block mb-3 sm:mb-4">
                07 &nbsp;—&nbsp; The Distinction
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1A1A1A] leading-[1.1]">
                Why discerning hosts and couples partner with our studio.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {distinctionPoints.map((item) => (
                <div
                  key={item.num}
                  className="p-8 sm:p-10 border border-[#E6DFDA] bg-[#FAF8F5] flex flex-col justify-between group hover:border-[#5F327B] transition-colors duration-300"
                >
                  <div>
                    <span className="font-serif text-xl sm:text-2xl italic text-[#5F327B] block mb-4">
                      ({item.num})
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-normal mb-3 group-hover:text-[#5F327B] transition-colors duration-300">
                      {item.heading}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-[#5C555B] font-light leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 08 — CLOSING BRAND STATEMENT
            ========================================================================= */}
        <section
          aria-label="Closing Invitation"
          className="relative py-20 sm:py-24 md:py-28 bg-[#5F327B] text-[#FAF8F5] overflow-hidden"
        >
          <div 
            aria-hidden="true" 
            className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:24px_24px]" 
          />

          <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
            
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#FAF8F5]/70 block mb-4">
              08 &nbsp;—&nbsp; Begin Your Story
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] text-[#FAF8F5] max-w-4xl mx-auto mb-6 sm:mb-8">
              Let’s create something <br className="hidden sm:inline" />
              <span className="italic font-light text-[#FAF8F5]/90">
                truly unforgettable.
              </span>
            </h2>

            <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-[#FAF8F5]/80 font-light leading-relaxed mb-8 sm:mb-10">
              Whether you are planning an intimate gathering or a grand destination wedding, we invite you to start a conversation with our design team.
            </p>

            <div>
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-3 px-8 sm:px-10 py-4 sm:py-5 bg-[#FAF8F5] text-[#5F327B] text-xs sm:text-sm uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-[#FAF8F5]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF8F5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#5F327B]"
              >
                <span>Let’s Create Your Experience</span>
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