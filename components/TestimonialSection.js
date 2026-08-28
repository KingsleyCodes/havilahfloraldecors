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
  {
    image: "/tt1.png",
    alt: "Havilah Florals & Decor testimonial 4",
  },
  {
    image: "/tt2.png",
    alt: "Havilah Florals & Decor testimonial 5",
  },
  {
    image: "/tt3.png",
    alt: "Havilah Florals & Decor testimonial 6",
  },
];

export default function Testimonials() {
  return (
    <section
      aria-label="Love Notes and Client Experience"
      className="relative w-full bg-white text-[#1A1A1A] py-10 sm:py-12 md:py-16 border-b border-[#E8E1DC] overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* CENTERED EDITORIAL HEADER BLOCK */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-14">
          <div className="inline-flex items-center justify-center space-x-3 mb-3 sm:mb-4">
            <span className="w-8 h-[1px] bg-[#5F327B]/40" />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-[#5F327B]">
              Love Notes &amp; Memories
            </span>
            <span className="w-8 h-[1px] bg-[#5F327B]/40" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] text-[#1A1A1A] mb-4 sm:mb-5">
            What stays with our couples isn’t just how it looked — <br className="hidden sm:inline" />
            <span className="italic font-light text-[#5F327B]">
              it’s how it felt.
            </span>
          </h2>

          <p className="font-serif text-base sm:text-lg md:text-xl text-[#5C555B] font-light italic max-w-2xl mx-auto leading-relaxed">
            “The true measure of our work lies in the emotion left behind long after the lights fade.”
          </p>
        </div>

      </div>

      {/* STRICT NATIVE SCROLL SNAP CONTAINER WITH TAILWIND UTILITIES TO HIDE SCROLLBAR */}
      <div className="w-full overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1500px] mx-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex space-x-6 sm:space-x-8 py-2 w-max">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="snap-start w-[280px] sm:w-[340px] md:w-[380px] shrink-0 bg-[#FAF8F5] border border-[#E8E1DC] overflow-hidden group shadow-sm hover:shadow-md transition-shadow duration-500 rounded-sm p-2 sm:p-2.5"
            >
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] bg-[#E6DFDA] overflow-hidden rounded-sm border border-[#E8E1DC]/60">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, 380px"
                  priority={index < 3}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}