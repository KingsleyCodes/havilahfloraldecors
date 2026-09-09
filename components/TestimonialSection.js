'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "We walked into the space and it looked like “PEACE”, the colors, the styling, florals - everything was perfect, picturesque and simply beautiful. Our favorite part of working with Havilah was Miracle, she was an embodiment of peace and vision, she handled everything calmly and took surprises in stride. One of our guest said the decor was international standard. Loved every part! Thank you.",
    role: "Goldie & Ned.",
    event: "Wedding",
  },
  {
    quote:
     "It was absolutely beautiful! Everything was exactly like the bride wanted it to be. What we loved most was the attention to detail, the seamless communication, and how well everything was executed. Our guests couldn't stop complimenting the tables, the lights, the seating - everything. We'd recommend Havilah Florals Decor to anyone; they did an amazing job",
    author: "Aura By Omi.",
    role: "Event Planner",
    event: "Milestone Celebration",
  },
   {
    quote:
      "I love that you were very patient with us, asking questions to understand what we really wanted and it was a good experience. Thank you.",
    author: "Hamdy & Sani.",
    role: "Couple.",
    event: "Wedding",
  },
  {
    quote:
      "We feel Fulfilled. Yes, you captured the vision perfectly. What we loved most was the patience and the listening ears, and our guests loved the photo area. Yes, of course we'd recommend Havilah Florals Decor",
    author: "Shirley & Reuben.",
    role: "Couple",
    event: "Milestone Celebration",
  },
  {
    quote:
      "Walking into our event space felt like stepping into a pretty garden. Our entire color palette came through beautifully, and the photo booth areas were stunning, everything was completely in sync with the space. What I loved most about working with Havilah was the ease, the calm, the professionalism, and how quickly they responded to everything. Our guests couldn't stop talking about it, some are even saying they want garden weddings now! I'd recommend Havilah Florals Decor to anyone. You can tell they genuinely pay attention to what their clients want.",
    author: "Wani & Evans.",
    role: "Couple.",
    event: "Wedding",
  },
  {
    quote:
      "We loved the decor, so beautiful! It was so pretty, it felt so luxurious, like I was surrounded by wealth. We had so much fun celebrating our union, and the ambience you created for us was everything",
    author: "Mary & Oswald.",
    role: "Couple.",
    event: "Wedding",
  },
];

// Motion variants for slide transition
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

export default function Testimonials() {
  const [[page, direction], setPage] = useState([0, 0]);

  // Handle wrapped index
  const currentIndex = ((page % testimonials.length) + testimonials.length) % testimonials.length;

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      aria-label="Love Notes and Client Experience"
      className="relative w-full text-[#1A1A1A] py-12 sm:py-16 md:py-20 border-b border-[#E8E1DC] overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* CENTERED EDITORIAL HEADER BLOCK */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-8 sm:mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] text-[#1A1A1A]">
             Our <br className="hidden sm:inline" />
            <span className="italic font-light text-[#5F327B]">
             Testimonials
            </span>
          </h2>
        </motion.div>

        {/* TEXT SLIDER CONTAINER */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-12 min-h-[260px] sm:min-h-[220px] flex flex-col justify-between">
          
          <div className="relative overflow-hidden w-full flex-grow flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 350, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="w-full text-center px-2 sm:px-6 py-4"
              >
                <p className="font-serif text-lg sm:text-2xl md:text-3xl text-[#1A1A1A] font-light leading-relaxed mb-6 italic">
                  “{currentTestimonial.quote}”
                </p>

                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-semibold uppercase tracking-[0.15em] text-[#5F327B]">
                    {currentTestimonial.author}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C555B] font-light">
                    {currentTestimonial.role} — <span className="italic">{currentTestimonial.event}</span>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* SLIDER CONTROLS & NAVIGATION */}
          <div className="flex items-center justify-between pt-8 sm:pt-10 border-t border-[#E8E1DC]/60 max-w-xs mx-auto w-full">
            
            {/* PREVIOUS BUTTON */}
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="p-2 text-[#1A1A1A] hover:text-[#5F327B] transition-colors duration-300 focus:outline-none"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* DOT INDICATORS */}
            <div className="flex space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setPage([idx, idx > currentIndex ? 1 : -1])}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-6 bg-[#5F327B]"
                      : "w-2 bg-[#E8E1DC] hover:bg-[#5F327B]/40"
                  }`}
                />
              ))}
            </div>

            {/* NEXT BUTTON */}
            <button
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="p-2 text-[#1A1A1A] hover:text-[#5F327B] transition-colors duration-300 focus:outline-none"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}