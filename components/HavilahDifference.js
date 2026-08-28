import Image from "next/image";
import Link from "next/link";

const principles = [
  {
    title: "Intentional Architecture",
    description:
      "We design beyond surface-level ornamentation. Every arch, canopy, and botanical line is drawn with spatial scale, lighting, and movement in mind.",
  },
  {
    title: "Bespoke Materiality",
    description:
      "A curated harmony of rare seasonal blooms, tactile linens, custom structures, and atmospheric lighting that honors the distinct emotion of your event.",
  },
  {
    title: "Complete Transformation",
    description:
      "We re-imagine grand halls and intimate grounds alike, turning blank canvases into immersive environments that transport your guests from the moment they arrive.",
  },
];

export default function HavilahDifference() {
  return (
    <section
      aria-label="The Havilah Difference"
      className="relative w-full bg-white text-[#1A1A1A] py-10 sm:py-12 md:py-16 border-b border-[#E8E1DC] overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* CENTERED EDITORIAL HEADER BLOCK */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-14">
          <div className="inline-flex items-center justify-center space-x-3 mb-3 sm:mb-4">
            <span className="w-8 h-[1px] bg-[#5F327B]/40" />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-[#5F327B]">
              The Havilah Difference
            </span>
            <span className="w-8 h-[1px] bg-[#5F327B]/40" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] text-[#1A1A1A] mb-4 sm:mb-5">
            We don’t simply decorate spaces. <br className="hidden sm:inline" />
            <span className="italic font-light text-[#5F327B]">
              We compose atmospheres.
            </span>
          </h2>

          <p className="font-serif text-base sm:text-lg md:text-xl text-[#5C555B] font-light italic max-w-2xl mx-auto leading-relaxed">
            “Every celebration is a singular story. Our approach merges architectural precision with organic botanical artistry to craft environments that leave an indelible memory.”
          </p>
        </div>

        {/* ASYMMETRIC GRID (PRINCIPLES LEFT / SIDE-BY-SIDE IMAGES RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: EDITORIAL PRINCIPLES LIST & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="divide-y divide-[#E6DFDA]">
              {principles.map((principle) => (
                <article
                  key={principle.title}
                  className="pt-4 sm:pt-5 first:pt-0 group"
                >
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-normal text-[#1A1A1A] group-hover:text-[#5F327B] transition-colors duration-300 mb-1 sm:mb-1.5">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C555B] font-light leading-relaxed">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>

            {/* ACTION CTA BUTTON */}
            <div className="pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center space-x-3 bg-[#5F327B] hover:bg-[#1A1A1A] text-white px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F327B]"
              >
                <span>Discover Our Story</span>
                <span
                  aria-hidden="true"
                  className="text-xs transform transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: SIDE-BY-SIDE DUAL PHOTOGRAPHY */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-4 items-center order-1 lg:order-2">
            
            {/* Primary Main Image */}
            <div className="col-span-7 relative aspect-[3/4] bg-[#FAF8F5] overflow-hidden rounded-sm border border-[#E8E1DC] shadow-sm group">
              <Image
                src="/d1.png"
                alt="Grand floral installation with custom lighting designed by Havilah Florals & Decor"
                fill
                sizes="(max-width: 1024px) 60vw, 35vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                priority={false}
              />
            </div>

            {/* Accent Detail Image */}
            <div className="col-span-5 relative aspect-[4/5] bg-[#FAF8F5] overflow-hidden rounded-sm border border-[#E8E1DC] shadow-sm group -mt-6 sm:-mt-8">
              <Image
                src="/d2.jpg"
                alt="Close-up botanical detail showing texture and floral artistry"
                fill
                sizes="(max-width: 1024px) 40vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}