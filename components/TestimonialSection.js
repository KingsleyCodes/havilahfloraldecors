import Image from "next/image";

const testimonials = [
  {
    image: "/tt1.png",
    alt: "Havilah Florals & Decor testimonial 1",
  },
  {
    image: "/tt2.png",
    alt: "Havilah Florals & Decor testimonial 2",
  },
  {
    image: "/tt3.png",
    alt: "Havilah Florals & Decor testimonial 3",
  },
];

export default function Testimonials() {
  return (
    <section
      aria-label="Love Notes and Client Experience"
      className="relative w-full bg-[#FAF8F5] text-[#1A1A1A] py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* EDITORIAL SECTION HEADER */}
        <div className="mb-12 sm:mb-16 md:mb-20 max-w-3xl">
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.12] text-[#1A1A1A]">
            What stays with our couples isn’t just how it looked — &nbsp;
            <span className="italic font-light text-[#5F327B]">
              it’s how it felt.
            </span>
          </h2>
        </div>

        {/* 3 ONLY-IMAGE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#E6DFDA] overflow-hidden group shadow-sm transition-all duration-300 hover:shadow-xl rounded-sm"
            >
              <div className="relative w-full aspect-[4/5] bg-[#E6DFDA] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}