import Image from "next/image";
import Link from "next/link";

const introImage = "/i1.jpg";

export default function IntroSection() {
  return (
    <section 
      aria-label="About Havilah Florals and Decor" 
      className="relative w-full bg-[#FBF9F6] text-[#1A1A1A] py-8 sm:py-12 md:py-16 lg:py-20 transition-colors duration-300"
    >
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">

        {/* ASYMMETRICAL EDITORIAL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-start">
          
          {/* LEFT COLUMN: STATEMENT HEADLINE + EDITORIAL IMAGE */}
          <div className="lg:col-span-7 flex flex-col space-y-8 sm:space-y-12 md:space-y-16">
            
            {/* STATEMENT HEADLINE */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-[1.12] tracking-tight text-[#1A1A1A]">
              We transform beautiful ideas into{" "}
              <span className="italic font-normal text-[#471963]">
                unforgettable
              </span>{" "}
              spaces.
            </h2>

            {/* EDITORIAL PHOTOGRAPH CONTAINER */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-[#FAF8F5] overflow-hidden group">
              <Image
                src={introImage}
                alt="Havilah Florals & Decor luxury floral styling and event architecture"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                priority={false}
              />
            </div>

          </div>

          {/* RIGHT COLUMN: BRAND NARRATIVE & EDITORIAL CTA */}
          <div className="lg:col-span-5 lg:pt-4 xl:pt-8 flex flex-col justify-between space-y-8 sm:space-y-10 lg:space-y-12">
            
            <div className="space-y-6 sm:space-y-8">
              
              {/* FEATURED ESSENCE STATEMENT */}
              <div className="border-l border-[#471963]/30 pl-4 sm:pl-6">
                <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#1A1A1A] font-normal leading-snug">
                  Bespoke floral artistry and architectural venue styling curated for life's most meaningful celebrations.
                </p>
              </div>

              {/* BRAND STORY PARAGRAPHS */}
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-[#5C555B] font-light leading-relaxed">
                <p>
                  Havilah Florals &amp; Decor is a creative studio dedicated to transforming weddings, celebrations, and event spaces through thoughtful floral artistry and refined environmental design.
                </p>
                <p>
                  We approach every atmosphere with architectural intention—blending organic botanical textures, subtle lighting, and bespoke installations to craft immersive experiences that linger long after the final evening toast.
                </p>
              </div>

            </div>

            {/* EDITORIAL TEXT CTA LINK */}
            <div className="pt-6 sm:pt-8 border-t border-[#E8E1DC]">
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-3 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-[#471963] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#471963] focus-visible:ring-offset-2"
              >
                <span className="relative py-1 border-b border-[#471963]/30 group-hover:border-[#471963] transition-colors duration-300">
                 Book A Consultation
                </span>
                <span 
                  aria-hidden="true" 
                  className="text-sm transform transition-transform duration-300 group-hover:translate-x-1.5"
                >
                  →
                </span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}