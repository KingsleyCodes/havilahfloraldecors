'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  // CENTERPIECE ANCHOR
  { id: "img-1", src: "/why.jpg", alt: "Gallery Image 1", gridPos: "lg:col-start-5 lg:col-span-4 lg:row-start-2 z-20", transform: "rotate-[-1deg] lg:translate-y-0", objectPosition: "top" },

  // INNER SPIRAL (Surrounding Center)
  { id: "img-2", src: "/couple1.jpg", alt: "Gallery Image 2", gridPos: "lg:col-start-1 lg:col-span-4 lg:row-start-1 z-10", transform: "rotate-[3deg] lg:translate-y-8 lg:translate-x-4", objectPosition: "center" },
  { id: "img-3", src: "/por5.jpg", alt: "Gallery Image 3", gridPos: "lg:col-start-5 lg:col-span-4 lg:row-start-1 z-10", transform: "rotate-[-2deg] lg:-translate-y-6", objectPosition: "top" },
  { id: "img-4", src: "/couple4.jpg", alt: "Gallery Image 4", gridPos: "lg:col-start-9 lg:col-span-4 lg:row-start-1 z-10", transform: "rotate-[2deg] lg:translate-y-12 lg:-translate-x-4", objectPosition: "center" },

  // MIDSPIRAL FLANKS
  { id: "img-5", src: "/personalizedwedding.jpg", alt: "Gallery Image 5", gridPos: "lg:col-start-1 lg:col-span-4 lg:row-start-2 z-10", transform: "rotate-[-3deg] lg:-translate-y-4 lg:translate-x-8", objectPosition: "center" },
  { id: "img-6", src: "/po7.jpg", alt: "Gallery Image 6", gridPos: "lg:col-start-9 lg:col-span-4 lg:row-start-2 z-10", transform: "rotate-[1deg] lg:-translate-y-8 lg:-translate-x-6", objectPosition: "top" },

  // BASE SPIRAL WRAP
  { id: "img-7", src: "/milestone.png", alt: "Gallery Image 7", gridPos: "lg:col-start-2 lg:col-span-4 lg:row-start-3 z-10", transform: "rotate-[2deg] lg:-translate-y-10", objectPosition: "center" },
  { id: "img-8", src: "/d2.jpg", alt: "Gallery Image 8", gridPos: "lg:col-start-6 lg:col-span-4 lg:row-start-3 z-10", transform: "rotate-[-2deg] lg:translate-y-6 lg:-translate-x-4", objectPosition: "top" },
  { id: "img-9", src: "/serviceshavilahfloralsdecor.jpg", alt: "Gallery Image 9", gridPos: "lg:col-start-10 lg:col-span-3 lg:row-start-3 z-10", transform: "rotate-[3deg] lg:-translate-y-14 lg:-translate-x-8", objectPosition: "center" },
];

export default function Gallery() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: isMobile ? 50 : 0,
      y: isMobile ? 0 : 50,
      scale: 0.9,
    },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 65,
        damping: 18,
        mass: 0.8,
        delay: isMobile ? 0 : (index % 3) * 0.1,
      },
    }),
  };

  return (
    <section
      aria-label="Image Gallery"
      className="relative w-full bg-[#FAF8F5] py-12 sm:py-16 lg:py-24 border-b border-[#E8E1DC] overflow-hidden"
    >
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SPIRAL PINWHEEL GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-4 relative">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`w-full ${image.gridPos} transition-all duration-500`}
            >
              <div
                className={`group relative w-full aspect-[3/4] overflow-hidden rounded-sm bg-[#E6DFDA] border border-[#E8E1DC] shadow-md hover:shadow-2xl transition-all duration-500 ease-out transform hover:rotate-0 hover:scale-105 hover:z-40 ${image.transform}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ objectPosition: image.objectPosition || "center" }}
                />

                {/* Framing & Lighting Highlights */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
                <div className="absolute inset-2.5 border border-white/0 group-hover:border-white/40 transition-all duration-500 rounded-sm pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}