'use client';

import Link from "next/link";

const mergedServices = [
  {
    id: "full-scale-event-styling",
    title: "Wedding Decor Styling",
    tagline: "",
    description:
      "For couples celebrating their love story. We thoughtfully design and transform wedding spaces into beautiful, personal experiences that reflect your story, your style and the feeling you want your celebration to leave behind. From the ceremony to the reception, every detail comes together to create an atmosphere you and your guests will remember.",
    highlights: ["Weddings & Celebrations", "Design Development", "Ambient Lighting"],
  },
  {
    id: "botanical-floral-artistry",
    title: "Milestone Celebrations",
    tagline: "",
    description:
      "For life's moments worth celebrating. Some moments deserve more than a gathering; they deserve to be remembered. We create thoughtfully styled experiences for birthdays, anniversaries, proposals, baby showers and special gatherings, bringing together the details that make each occasion feel meaningful, beautiful and uniquely yours.",
    highlights: ["Bespoke Floral Design", "Milestone Celebrations", "Design Development"],
  },
];

export default function ServicesSection() {
  return (
    <section
      aria-label="What We Create - Havilah Services"
      className="relative w-full bg-white text-[#1A1A1A] py-12 sm:py-16 md:py-20 border-b border-[#E8E1DC] overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* CONSOLIDATED 2-CARD GRID */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-10 sm:mb-12"
        >
          {mergedServices.map((service) => (
            <div
              key={service.id}
              className="group relative bg-[#FAF8F5] border border-[#E8E1DC] p-6 sm:p-8 md:p-10 rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 hover:border-[#5F327B]/50 flex flex-col justify-between"
            >
              <Link href="/services" className="block focus:outline-none h-full flex flex-col justify-between">
                <div>
                  {/* CARD TOP: TAGLINE */}
                  {/* <div className="border-b border-[#E8E1DC] pb-4 mb-6 flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#5F327B] font-semibold">
                      {service.tagline}
                    </span>
                  </div> */}

                  {/* TITLE */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1A1A1A] group-hover:text-[#5F327B] transition-colors duration-300 mb-4">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-xs sm:text-sm text-[#5C555B] font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* HIGHLIGHT BULLETS */}
                  <ul className="space-y-2 mb-8 border-t border-[#E8E1DC]/60 pt-4">
                    {service.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center text-xs text-[#1A1A1A] font-medium tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5F327B] mr-2.5 opacity-75" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* HOVER LINK ACTION */}
                <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-[#5F327B] group-hover:text-[#1A1A1A] transition-colors duration-300 pt-2 border-t border-[#E8E1DC]">
                  <span>Explore Service</span>
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
        <div
          className="text-center"
        >
          <Link
            href="/services"
            className="group inline-flex items-center space-x-3 bg-[#5F327B] hover:bg-[#1A1A1A] text-white px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 rounded-sm shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F327B]"
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
