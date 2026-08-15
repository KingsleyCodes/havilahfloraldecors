'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const heroImages = [
  {
    id: 'hero-1',
    src: '/h1.png',
    alt: 'Luxury floral arrangement and table styling for a high-end wedding reception',
  },
  {
    id: 'hero-2',
    src: '/a2.jpg',
    alt: 'Sophisticated bridal bouquet with bespoke botanical elements',
  },
  {
    id: 'hero-3',
    src: '/h3.png',
    alt: 'Grand floral installation and event venue styling',
  },
  {
    id: 'hero-4',
    src: '/h4.png',
    alt: 'Elegant candlelit wedding table decor and floral centerpieces',
  },
  {
    id: 'hero-5',
    src: '/h3.png',
    alt: 'Immersive luxury event setup and floral design architecture',
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  // Automatic slideshow interval
  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        setPreviousIndex(prevIndex);
        return (prevIndex + 1) % heroImages.length;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <section className="relative h-screen min-h-[100svh] w-full overflow-hidden bg-[#1A1A1A]">
      {heroImages.map((image, index) => {
        const isActive = index === currentIndex;
        const isPrevious = index === previousIndex;

        // Determine z-index and visibility to ensure continuous cross-fade
        let zClass = 'z-0 opacity-0 pointer-events-none';
        if (isActive) {
          zClass = 'z-10 opacity-100';
        } else if (isPrevious) {
          zClass = 'z-0 opacity-100'; // Keep outgoing image visible behind incoming image
        }

        return (
          <div
            key={image.id}
            className={`absolute inset-0 h-full w-full transition-opacity ease-in-out ${
              prefersReducedMotion ? 'duration-700' : 'duration-[2000ms]'
            } ${zClass}`}
            aria-hidden={!isActive}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              quality={90}
              sizes="100vw"
              className={`object-cover object-center w-full h-full ${
                !prefersReducedMotion && isActive
                  ? 'animate-cinematic-zoom'
                  : 'scale-100'
              }`}
            />
          </div>
        );
      })}

      {/* Very subtle dark gradient just for the navbar area */}
      <div className="absolute top-0 left-0 right-0 h-32 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/5 to-transparent" />
      </div>

      {/* Subtle bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 via-transparent to-transparent z-20 pointer-events-none" />

      {/* Tailwind Custom Keyframes injection for subtle cinematic motion */}
      <style jsx global>{`
        @keyframes cinematicZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.06);
          }
        }

        .animate-cinematic-zoom {
          animation: cinematicZoom 7s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
      `}</style>
    </section>
  );
}