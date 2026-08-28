import Link from "next/link";

const services = [
  {
    id: "wedding-decor",
    title: "Wedding Decor",
    tagline: "Atmospheric & Intimate",
    description:
      "Curated environments designed around the unique emotion and spatial rhythm of your wedding day.",
  },
  {
    id: "floral-styling",
    title: "Floral Styling",
    tagline: "Sculptural & Botanical",
    description:
      "Bespoke floral compositions, from delicate bouquets to dramatic living installations and tablescapes.",
  },
  {
    id: "event-venue-styling",
    title: "Event & Venue Styling",
    tagline: "Immersive Environmental Design",
    description:
      "Full spatial transformation unifying florals, custom lighting, tactile fabrics, and custom furniture.",
  },
  {
    id: "custom-installations",
    title: "Custom Installations",
    tagline: "Architectural Statements",
    description:
      "Grand ceiling canopies and structural floral art crafted to transform any venue into a work of art.",
  },
];

export default function ServicesSection() {
  return (
    <section
      aria-label="What We Create - Havilah Services"
      className="relative w-full bg-white text-[#1A1A1A] py-10 sm:py-12 md:py-16 border-b border-[#E8E1DC] overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* CENTERED EDITORIAL HEADER BLOCK */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-14">
          <div className="inline-flex items-center justify-center space-x-3 mb-3 sm:mb-4">
            <span className="w-8 h-[1px] bg-[#5F327B]/40" />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-[#5F327B]">
              Portfolio of Services
            </span>
            <span className="w-8 h-[1px] bg-[#5F327B]/40" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] text-[#1A1A1A] mb-4 sm:mb-5">
            Curating environments that <br className="hidden sm:inline" />
            <span className="italic font-light text-[#5F327B]">
              stir the emotions.
            </span>
          </h2>

          <p className="font-serif text-base sm:text-lg md:text-xl text-[#5C555B] font-light italic max-w-2xl mx-auto leading-relaxed">
            “Beyond simple floral arrangements, we craft spatial experiences tailored to transform grand venues into intimate moments.”
          </p>
        </div>

        {/* ELEGANT 2x2 SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-10 sm:mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-[#FAF8F5] border border-[#E8E1DC] p-6 sm:p-8 rounded-sm shadow-sm hover:shadow-md transition-all duration-500 hover:border-[#5F327B]/40 flex flex-col justify-between"
            >
              <Link href="/services" className="block focus:outline-none h-full flex flex-col justify-between">
                <div>
                  {/* CARD TOP: TAGLINE */}
                  <div className="border-b border-[#E8E1DC] pb-4 mb-5">
                    <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#5F327B] font-semibold">
                      {service.tagline}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#1A1A1A] group-hover:text-[#5F327B] transition-colors duration-300 mb-3">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-xs sm:text-sm text-[#5C555B] font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* HOVER LINK ACTION */}
                <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-[#5F327B] group-hover:text-[#1A1A1A] transition-colors duration-300 pt-2">
                  <span>Explore Services</span>
                  <span
                    aria-hidden="true"
                    className="transform transition-transform duration-300 group-hover:translate-x-1.5"
                  >
                    →
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* BOTTOM CENTERED EXPLORE ALL CTA */}
        <div className="text-center">
          <Link
            href="/services"
            className="group inline-flex items-center space-x-3 bg-[#5F327B] hover:bg-[#1A1A1A] text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F327B]"
          >
            <span>Explore All Services</span>
            <span
              aria-hidden="true"
              className="text-xs transform transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}