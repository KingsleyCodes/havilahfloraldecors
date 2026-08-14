import Image from "next/image";
import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Intentional Architecture",
    description:
      "We design beyond surface-level ornamentation. Every arch, canopy, and botanical line is drawn with spatial scale, lighting, and movement in mind.",
  },
  {
    number: "02",
    title: "Bespoke Materiality",
    description:
      "A curated harmony of rare seasonal blooms, tactile linens, custom structures, and atmospheric lighting that honors the distinct emotion of your event.",
  },
  {
    number: "03",
    title: "Complete Transformation",
    description:
      "We re-imagine grand halls and intimate grounds alike, turning blank canvases into immersive environments that transport your guests from the moment they arrive.",
  },
];

export default function HavilahDifference() {
  return (
    <section
      aria-label="The Havilah Difference"
      className="relative w-full bg-[#FAF8F5] text-[#1A1A1A] py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* EDITORIAL HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 sm:mb-16 md:mb-20">
          <div className="lg:col-span-8">
           
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.08] text-[#1A1A1A]">
              We don’t simply decorate spaces. <br className="hidden sm:inline" />
              <span className="italic font-light text-[#5F327B]">
                We compose atmospheres.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pb-2">
            <p className="text-xs sm:text-sm md:text-base text-[#5C555B] font-light leading-relaxed">
              Every celebration is a singular story. Our approach merges architectural precision with organic botanical artistry to craft environments that leave an indelible memory.
            </p>
          </div>
        </div>

        {/* ASYMMETRIC CONTENT & IMAGERY COMPOSITION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: OVERLAPPING ART-DIRECTED PHOTOGRAPHY */}
          <div className="lg:col-span-6 relative">
            {/* Primary Large Image */}
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] bg-[#E6DFDA] overflow-hidden">
              <Image
                src="/d1.png"
                alt="Grand floral installation with custom lighting designed by Havilah Florals & Decor"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
            </div>

            {/* Accent Overlapping Detail Image (Desktop/Tablet) */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 lg:-right-8 w-1/2 aspect-[4/5] border-[6px] border-[#FAF8F5] bg-[#DCD2DF] overflow-hidden shadow-xl">
              <Image
                src="/d2.jpg"
                alt="Close-up botanical detail showing texture and floral artistry"
                fill
                sizes="(max-width: 1024px) 30vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: EDITORIAL PRINCIPLES LIST */}
          <div className="lg:col-span-6 lg:pl-6 space-y-8 sm:space-y-10 mt-4 lg:mt-0">
            <div className="divide-y divide-[#E6DFDA]">
              {principles.map((principle) => (
                <article
                  key={principle.number}
                  className="pt-6 sm:pt-8 first:pt-0 group"
                >
                  <div className="flex items-baseline space-x-3 sm:space-x-4 mb-2 sm:mb-3">
                    <span className="font-serif text-lg sm:text-xl italic text-[#5F327B] font-normal">
                      ({principle.number})
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-normal text-[#1A1A1A] group-hover:text-[#5F327B] transition-colors duration-300">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-[#5C555B] font-light leading-relaxed pl-8 sm:pl-10">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>

            {/* EDITORIAL LINK */}
            <div className="pt-4 sm:pt-6">
              <Link
                href="/about"
                className="group inline-flex items-center space-x-3 text-xs sm:text-sm uppercase tracking-[0.22em] font-medium text-[#5F327B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F327B] focus-visible:ring-offset-2"
              >
                <span className="relative py-1 border-b border-[#5F327B]/30 group-hover:border-[#5F327B] transition-colors duration-300">
                  Discover Our Story
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