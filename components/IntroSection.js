import Image from "next/image";
import Link from "next/link";

const introImage1 = "/i1.jpg";
const introImage2 = "/d2.jpg";

export default function IntroSection() {
  return (
    <section
      aria-label="About Havilah Florals and Decor"
      className="relative w-full bg-white text-[#1A1A1A] py-10 sm:py-12 md:py-16 border-b border-[#E8E1DC] overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* CENTERED EDITORIAL HEADER BLOCK */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-14">
          <div className="inline-flex items-center justify-center space-x-3 mb-3 sm:mb-4">
            <span className="w-8 h-[1px] bg-[#5F327B]/40" />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-[#5F327B]">
              The Havilah Atelier
            </span>
            <span className="w-8 h-[1px] bg-[#5F327B]/40" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] text-[#1A1A1A] mb-4 sm:mb-5">
            We transform beautiful ideas into{" "}
            <span className="italic font-light text-[#5F327B]">
              unforgettable
            </span>{" "}
            spaces.
          </h2>

          <p className="font-serif text-base sm:text-lg md:text-xl text-[#5C555B] font-light italic max-w-2xl mx-auto leading-relaxed">
            “Curating architectural floral installations and environmental design for life’s most cherished moments.”
          </p>
        </div>

        {/* REVERSED ASYMMETRIC GRID (TEXT LEFT / STACKED IMAGES RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: BRAND NARRATIVE & ACTION */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8 order-2 lg:order-1">
            
            <div className="space-y-4 sm:space-y-5">
              <div className="border-l-2 border-[#5F327B] pl-4 sm:pl-5">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium text-[#5F327B] block mb-1">
                  Spatial Mastery
                </span>
                <p className="text-xs sm:text-sm text-[#1A1A1A] font-medium leading-relaxed">
                  Every bloom, archway, and ambient element is curated to honor the distinct rhythm of your venue.
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#5C555B] font-light leading-relaxed">
                <p>
                  Havilah Florals &amp; Decor is a premier event architecture and floral design studio. We specialize in turning blank canvas spaces into grand, emotional environments.
                </p>
                <p>
                  From structural ceiling canopies to bespoke tablescapes, our work merges architectural precision with natural botanical textures for an experience that lingers long after the final toast.
                </p>
              </div>
            </div>

            {/* BUTTON CTA */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-3 bg-[#5F327B] hover:bg-[#1A1A1A] text-white px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F327B]"
              >
                <span>Book A Consultation</span>
                <span 
                  aria-hidden="true" 
                  className="text-xs transform transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>

          </div>

          {/* RIGHT COLUMN: STACKED DUAL PHOTOGRAPHY */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-4 items-center order-1 lg:order-2">
            
            {/* Main Tall Image */}
            <div className="col-span-7 relative aspect-[3/4] bg-[#FAF8F5] overflow-hidden rounded-sm border border-[#E8E1DC] shadow-sm group">
              <Image
                src={introImage1}
                alt="Havilah Florals luxury venue styling"
                fill
                sizes="(max-width: 1024px) 60vw, 35vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                priority={false}
              />
            </div>

            {/* Secondary Accent Detail Image */}
            <div className="col-span-5 relative aspect-[4/5] bg-[#FAF8F5] overflow-hidden rounded-sm border border-[#E8E1DC] shadow-sm group -mt-6 sm:-mt-8">
              <Image
                src={introImage2}
                alt="Havilah botanical detail"
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