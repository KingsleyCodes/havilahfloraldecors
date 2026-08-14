import Link from "next/link";

const services = [
  {
   
    title: "Wedding Decor",
    tagline: "Atmospheric & Intimate",
    description:
      "Curated environments designed around the unique emotion and spatial rhythm of your wedding day.",
  },
  {
    
    title: "Floral Styling",
    tagline: "Sculptural & Botanical",
    description:
      "Bespoke floral compositions, from delicate bouquets to dramatic living installations and tablescapes.",
  },
  {
    
    title: "Event & Venue Styling",
    tagline: "Immersive Environmental Design",
    description:
      "Full spatial transformation unifying florals, custom lighting, tactile fabrics, and custom furniture.",
  },
  {
    
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
      className="relative w-full bg-[#FAF8F5] text-[#1A1A1A] py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* EDITORIAL ASYMMETRIC CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">
          
          {/* LEFT SIDE: RICH BRAND ARCHIVE PANEL */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 bg-[#231326] text-[#FAF6F0] p-6 sm:p-8 md:p-10 rounded-none shadow-sm">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#C4B5C7] block mb-4 sm:mb-6">
              02 &nbsp;—&nbsp; Portfolio of Services
            </span>
            
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.15] mb-4 sm:mb-6 text-[#FAF6F0]">
              Curating environments that stir the emotions.
            </h2>
            
            <p className="text-xs sm:text-sm md:text-base text-[#D4C8D6] font-light leading-relaxed mb-6 sm:mb-8">
              Beyond simple floral arrangements, we craft spatial experiences. Every texture, flower stem, and ambient element is curated to transform grand Nigerian venues into intimate, unforgettable moments.
            </p>

            <Link
              href="/services"
              className="group inline-flex items-center space-x-2 sm:space-x-3 text-xs uppercase tracking-[0.2em] font-medium text-[#FAF6F0] hover:text-[#C4B5C7] transition-colors duration-300"
            >
              <span>Explore All Offerings</span>
              <span 
                aria-hidden="true" 
                className="text-sm text-[#C4B5C7] transform transition-transform duration-300 group-hover:translate-x-1.5"
              >
                →
              </span>
            </Link>
          </div>

          {/* RIGHT SIDE: STAGGERED FLUID SERVICE CARDS */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 lg:pt-0">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.number}
                  className={`group relative bg-[#F3EDF6]/60 p-5 sm:p-6 md:p-8 transition-all duration-500 hover:bg-[#F3EDF6] hover:-translate-y-1 ${
                    isEven ? "lg:mr-4 xl:mr-6" : "lg:ml-4 xl:ml-6"
                  }`}
                >
                  <Link href="/services" className="block focus:outline-none">
                    
                    {/* CARD HEADER: NUMBER + TAGLINE */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="font-serif text-xl sm:text-2xl text-[#471963] font-normal italic">
                        {service.number}
                      </span>
                      <span className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-[#5C555B] font-medium">
                        {service.tagline}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#1A1A1A] group-hover:text-[#471963] transition-colors duration-300 mb-2 sm:mb-3">
                      {service.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-xs sm:text-sm md:text-base text-[#5C555B] font-light leading-relaxed max-w-lg mb-4 sm:mb-6">
                      {service.description}
                    </p>

                    {/* SUBTLE HOVER LINK */}
                    <div className="flex items-center space-x-2 text-[11px] sm:text-xs uppercase tracking-[0.18em] font-medium text-[#471963] group-hover:text-[#231326] transition-colors duration-300">
                      <span>View Details</span>
                      <span 
                        aria-hidden="true" 
                        className="transform transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </div>

                  </Link>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}