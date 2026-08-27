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
    duration: "Phase",
    description:
      "We begin with an in-depth creative consultation to understand the emotional heart of your event, exploring color palettes, architectural themes, floral preferences, and physical venue dynamics.",
  },
  {
    title: "Spatial & Floral Design",
    duration: "Phase",
    description:
      "Our design studio translates ideas into spatial concepts, floral selections, lighting schematics, and custom structural mockups—ensuring every detail aligns with your refined taste.",
  },
  {
    title: "Bespoke Curation",
    duration: "Phase",
    description:
      "From sourcing rare botanical varieties to crafting custom installation frameworks and selecting complementary tableware, every physical component is meticulously curated.",
  },
  {
    title: "Flawless Execution",
    duration: "Phase",
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

      <main className="pt-20 lg:pt-24">
        {/* =========================================================================
            SECTION — OUR STORY
            ========================================================================= */}
        <section
          aria-label="Our Story"
          className="relative py-6 sm:py-8 md:py-10 bg-[#FAF8F5] border-b border-[#E6DFDA]"
        >
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
              
              {/* LEFT COLUMN — CREATIVE DIRECTOR PHOTO & TITLE */}
              <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#5F327B] block">
                  Creative Leadership
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] text-[#1A1A1A]">
                  Meet the Creative Director
                </h2>

                <div className="relative aspect-[4/5] w-full bg-[#E6DFDA] overflow-hidden rounded-sm shadow-sm border border-[#E6DFDA]">
                  <Image
                    src="/o1.png"
                    alt="Havilah Florals creative process and arrangement styling"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 border-[6px] border-[#FAF8F5]/20 pointer-events-none" />
                </div>
              </div>

              {/* RIGHT COLUMN — DETAILED STORY NARRATIVE */}
              <div className="lg:col-span-7 bg-white/60 p-6 sm:p-8 rounded-sm border border-[#E6DFDA]/80 shadow-xs space-y-4 text-sm sm:text-base md:text-lg text-[#5C555B] font-light leading-relaxed">
                <p className="text-base sm:text-lg md:text-xl font-serif text-[#1A1A1A] italic leading-snug">
                  Havilah Florals Decor started because I believe wedding decor should be more than beautiful—it should feel personal. It should reflect the people at the heart of the celebration and tell a story that guests can experience the moment they walk into the space.
                </p>

                <p>
                  Over the years, we&apos;ve had the privilege of helping couples transform ordinary venues into meaningful experiences that celebrate their journey, their personalities, and the love that brought them here.
                </p>

                <p>
                  When we work together, I&apos;m not simply thinking about colours, florals, or aesthetics. I&apos;m thinking about the atmosphere you want to create, the memories you want your guests to leave with, and the feeling you want to remember every time you look back on your wedding day.
                </p>

                <p>
                  I design for the engaged couple—not just the bride, not just the details, but the story you&apos;re building together.
                </p>

                <p>
                  Beyond Havilah, I&apos;m a wife, a mother, and a woman deeply rooted in faith. Those roles shape how I serve every couple: with thoughtfulness, excellence, integrity, and joy.
                </p>

                <p className="pt-2 font-medium text-[#1A1A1A]">
                  It would be an honour to help you create a celebration that feels beautifully and authentically yours.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION — THE HAVILAH PHILOSOPHY
            ========================================================================= */}
        <section
          aria-label="The Havilah Philosophy"
          className="relative py-6 sm:py-8 md:py-10 bg-[#FAF8F5] border-b border-[#E6DFDA]"
        >
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 pb-4 border-b border-[#E6DFDA]">
              <div className="max-w-2xl">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#5F327B] block mb-1.5">
                  Our Philosophy
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#1A1A1A] leading-[1.1]">
                  Pillars that govern every stem, structure, and space we compose.
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {philosophies.map((item, index) => (
                <article
                  key={index}
                  className="p-6 bg-white border border-[#E6DFDA] rounded-sm flex flex-col justify-between group hover:shadow-md hover:border-[#5F327B]/40 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] uppercase tracking-widest text-[#5C555B] font-mono">
                        Pillar
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.18em] text-[#5F327B] font-medium px-2 py-0.5 bg-[#F4EFF6] rounded">
                        {item.subtitle}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1A1A1A] mb-3 group-hover:text-[#5F327B] transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5C555B] font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION — WHAT WE BELIEVE
            ========================================================================= */}
        <section
          aria-label="What We Believe"
          className="relative py-8 sm:py-10 bg-[#F4EFF6] text-[#1A1A1A] border-b border-[#E6DFDA]"
        >
          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
            
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#5F327B] block mb-3">
              Core Belief
            </span>

            <blockquote className="font-serif text-xl sm:text-3xl md:text-4xl font-normal text-[#1A1A1A] leading-[1.25] max-w-4xl mx-auto mb-4">
              “Beauty is not an afterthought added to a room. True design is the invisible energy that makes guests feel genuinely honored to be there.”
            </blockquote>

            <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#5C555B] font-light leading-relaxed">
              We believe in the quiet luxury of thoughtful detail, the power of organic botanical composition, and the lasting impact of a seamlessly executed event environment.
            </p>

          </div>
        </section>

        {/* =========================================================================
            SECTION — THE HAVILAH EXPERIENCE
            ========================================================================= */}
        <section
          aria-label="The Havilah Experience"
          className="relative py-6 sm:py-8 md:py-10 bg-[#FAF8F5] border-b border-[#E6DFDA]"
        >
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-end mb-6">
              <div className="lg:col-span-8">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#5F327B] block mb-1.5">
                  The Experience
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#1A1A1A] leading-[1.1]">
                  A collaborative creative journey designed for absolute peace of mind.
                </h2>
              </div>
              <div className="lg:col-span-4 lg:pb-1">
                <p className="text-xs sm:text-sm text-[#5C555B] font-light leading-relaxed">
                  From initial vision mapping to late-night event teardown, our structural process guarantees clarity and artistic perfection.
                </p>
              </div>
            </div>

            {/* PROCESS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {experienceSteps.map((step, index) => (
                <div
                  key={index}
                  className="p-5 bg-white border border-[#E6DFDA] rounded-sm flex flex-col justify-between group hover:border-[#5F327B] transition-colors duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#E6DFDA]">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#5C555B]">
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1A1A1A] mb-2 group-hover:text-[#5F327B] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#5C555B] font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-2 border-t border-[#E6DFDA]/60 text-[9px] uppercase tracking-widest text-[#5F327B]">
                    Studio Standard
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION — VISUAL BRAND MOMENT
            ========================================================================= */}
        <section
          aria-label="Visual Brand Moment"
          className="relative w-full h-[35vh] sm:h-[45vh] min-h-[280px] bg-[#E6DFDA] overflow-hidden"
        >
          <Image
            src="/a1.jpg"
            alt="Immersive floral reception canopy designed by Havilah Florals & Decor"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="absolute inset-0 flex items-center justify-center text-center p-4">
            <div className="max-w-2xl space-y-2">
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-white/90 block">
                Immersion &amp; Artistry
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-white font-normal leading-tight">
                Transforming spaces into living, breathing stories.
              </h2>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION — WHY HAVILAH
            ========================================================================= */}
        <section
          aria-label="Why Havilah"
          className="relative py-6 sm:py-8 md:py-10 bg-[#FAF8F5] border-b border-[#E6DFDA]"
        >
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            
            <div className="max-w-2xl mb-6">
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#5F327B] block mb-1.5">
                The Distinction
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#1A1A1A] leading-[1.1]">
                Why discerning hosts and couples partner with our studio.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {distinctionPoints.map((item, index) => (
                <div
                  key={index}
                  className="p-6 border border-[#E6DFDA] bg-white rounded-sm flex items-start group hover:border-[#5F327B] transition-colors duration-300"
                >
                  <div>
                    <h3 className="font-serif text-xl text-[#1A1A1A] font-normal mb-2 group-hover:text-[#5F327B] transition-colors duration-300">
                      {item.heading}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C555B] font-light leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION — CLOSING BRAND STATEMENT
            ========================================================================= */}
        <section
          aria-label="Closing Invitation"
          className="relative py-8 sm:py-12 bg-[#5F327B] text-[#FAF8F5] overflow-hidden"
        >
          <div 
            aria-hidden="true" 
            className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:24px_24px]" 
          />

          <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
            
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#FAF8F5]/70 block mb-2">
              Begin Your Story
            </span>

            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal leading-[1.1] text-[#FAF8F5] max-w-3xl mx-auto mb-4">
              Let’s create something <br className="hidden sm:inline" />
              <span className="italic font-light text-[#FAF8F5]/90">
                truly unforgettable.
              </span>
            </h2>

            <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#FAF8F5]/80 font-light leading-relaxed mb-6">
              Whether you are planning an intimate gathering or a grand destination wedding, we invite you to start a conversation with our design team.
            </p>

            <div>
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-3 px-6 sm:px-8 py-3.5 bg-[#FAF8F5] text-[#5F327B] text-xs uppercase tracking-[0.2em] font-medium rounded-full transition-all duration-300 hover:bg-[#FAF8F5]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF8F5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#5F327B]"
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