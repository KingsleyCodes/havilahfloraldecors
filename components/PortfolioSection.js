import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  {
    id: "01",
    title: "The Ivory Cathedral",
    category: "Weddings",
    location: "Lagos",
    year: "2025",
    image: "/p1.jpg",
    aspectRatio: "aspect-[4/5]",
    desktopGrid: "lg:col-span-7",
  },
  {
    id: "02",
    title: "Sculptural Botanical Gala",
    category: "Event Decor",
    location: "Abuja",
    year: "2025",
    image: "/p2.jpg",
    aspectRatio: "aspect-[3/4]",
    desktopGrid: "lg:col-span-5 lg:mt-16",
  },
  {
    id: "03",
    title: "Minimalist Champagne Arch",
    category: "Floral Design",
    location: "Victoria Island",
    year: "2024",
    image: "/p3.jpg",
    aspectRatio: "aspect-[4/3]",
    desktopGrid: "lg:col-span-5",
  },
  {
    id: "04",
    title: "Ethereal Glasshouse Reception",
    category: "Venue Transformation",
    location: "Ikoyi",
    year: "2025",
    image: "/p4.png",
    aspectRatio: "aspect-[16/10]",
    desktopGrid: "lg:col-span-7 lg:-mt-12",
  },
  {
    id: "05",
    title: "Monochromatic Rose Canopy",
    category: "Custom Installations",
    location: "Banana Island",
    year: "2024",
    image: "/p5.jpg",
    aspectRatio: "aspect-[16/9]",
    desktopGrid: "lg:col-span-12",
  },
];

export default function FeaturedPortfolio() {
  return (
    <section
      aria-label="Featured Portfolio - Havilah Curated Work"
      className="relative w-full bg-[#FBF9F6] text-[#1A1A1A] py-14 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* SECTION HEADER */}
        <div className="mb-10 sm:mb-14 md:mb-16 lg:mb-20 max-w-3xl">
          

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.12] text-[#1A1A1A] mb-3 sm:mb-4">
            Spaces made to be remembered.
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#5C555B] font-light leading-relaxed max-w-xl">
            A selection of floral compositions, wedding environments, and event transformations created with intention.
          </p>
        </div>

        {/* ASYMMETRIC EDITORIAL GALLERY GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-14 items-start">
          {portfolioItems.map((item, index) => (
            <article
              key={item.id}
              className={`group relative flex flex-col ${item.desktopGrid}`}
            >
              <Link
                href="/portfolio"
                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#471963] focus-visible:ring-offset-2"
              >
                {/* IMAGE CONTAINER */}
                <div
                  className={`relative w-full overflow-hidden bg-[#E6DFDA] ${item.aspectRatio}`}
                >
                  <Image
                    src={item.image}
                    alt={`${item.title} — ${item.category} in ${item.location}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 60vw"
                    priority={index === 0}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                {/* METADATA & TITLE */}
                <div className="mt-3 sm:mt-4 flex flex-col space-y-1">
                  <div className="flex items-center justify-between text-[10px] sm:text-xs uppercase tracking-[0.18em] text-[#5C555B] font-medium">
                    <span>
                      {item.category} &nbsp;—&nbsp; {item.location}
                    </span>
                    <span className="text-[#471963]/70 font-mono text-[11px]">
                      {item.year}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between pt-0.5">
                    <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-normal text-[#1A1A1A] group-hover:text-[#471963] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="text-sm sm:text-base text-[#471963] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ml-2"
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* SECTION CTA */}
        <div className="mt-14 sm:mt-18 md:mt-24 pt-8 border-t border-[#E6DFDA] flex justify-end">
          <Link
            href="/portfolio"
            className="group inline-flex items-center space-x-3 text-xs sm:text-sm uppercase tracking-[0.22em] font-medium text-[#471963] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#471963] focus-visible:ring-offset-2"
          >
            <span className="relative py-1 border-b border-[#471963]/30 group-hover:border-[#471963] transition-colors duration-300">
              View Full Portfolio
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
    </section>
  );
}