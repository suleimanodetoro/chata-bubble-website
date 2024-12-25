// components/landing/LogoCarousel.tsx
import Image from 'next/image';
import React from 'react';

const logos = [
  { src: '/images/brands/lloyds.svg', alt: 'Lloyds Bank' },
  { src: '/images/brands/google.svg', alt: 'Google' },
  { src: '/images/brands/nhs.svg', alt: 'NHS' },
  { src: '/images/brands/playstation.svg', alt: 'PlayStation' },
  { src: '/images/brands/uber.svg', alt: 'Uber' },
  { src: '/images/brands/moniepoint.svg', alt: 'Moniepoint' },
  { src: '/images/brands/pearson.svg', alt: 'Pearson' },
  { src: '/images/brands/revolut.svg', alt: 'Revolut' },
  { src: '/images/brands/replit.svg', alt: 'Replit' },
  // add more logos if needed
];

const LogoCarousel = () => {
  return (
    <section className="relative flex flex-col items-center w-full px-4 py-12 mx-auto max-w-6xl sm:px-6 md:py-16 lg:px-8">
      {/* Title */}
      <h3 className="mb-8 text-base font-medium text-gray-500 text-center">
        Trusted by individuals from
      </h3>

      {/* First Row: normal marquee (left) */}
      <div className="relative w-full overflow-hidden py-2">
        <div className="flex animate-marquee gap-8 whitespace-nowrap">
          {/* The first set of logos */}
          {logos.map((logo, idx) => (
            <div key={`marquee-${idx}`} className="flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={80}
                className="h-12 w-auto object-contain opacity-90"
              />
            </div>
          ))}
          {/* The duplicated set */}
          {logos.map((logo, idx) => (
            <div key={`marquee-copy-${idx}`} className="flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={80}
                className="h-12 w-auto object-contain opacity-90"
              />
            </div>
          ))}
        </div>

        {/* Subtle overlays on each side */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
      </div>

      {/* Second Row: reverse marquee (right) */}
      <div className="relative w-full overflow-hidden py-2 mt-4">
        <div className="flex animate-marquee-reverse gap-8 whitespace-nowrap">
          {/* The first set of logos */}
          {logos.map((logo, idx) => (
            <div key={`reverse-${idx}`} className="flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={80}
                className="h-12 w-auto object-contain opacity-90"
              />
            </div>
          ))}
          {/* The duplicated set */}
          {logos.map((logo, idx) => (
            <div key={`reverse-copy-${idx}`} className="flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={80}
                className="h-12 w-auto object-contain opacity-90"
              />
            </div>
          ))}
        </div>

        {/* Subtle overlays on each side */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
};

export default LogoCarousel;
