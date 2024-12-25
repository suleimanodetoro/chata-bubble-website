// components/landing/LogoCarousel.tsx
import Image from 'next/image';
import React from 'react';

const logos = [
  { src: '/images/brands/vercel.svg', alt: 'Vercel' },
  { src: '/images/brands/descript.svg', alt: 'Descript' },
  { src: '/images/brands/angellist.svg', alt: 'AngelList' },
  { src: '/images/brands/roblox.svg', alt: 'Roblox' },
  { src: '/images/brands/replit.svg', alt: 'Replit' },
  // Add more logos as needed
];

const LogoCarousel = () => {
  return (
    <section className="flex overflow-visible relative flex-col items-center px-4 py-16 w-full max-w-3xl sm:px-6 md:py-24 lg:py-20 lg:px-8 lg:max-w-6xl gap-0 pb-0 mt-8 lg:gap-0">
      <h3 className="mb-8 font-medium text-gray-500">Trusted by individuals at</h3>
      
      {/* First Carousel */}
      <div className="flex overflow-hidden relative">
        <div className="flex flex-none gap-4 animate-marquee">
          {logos.map((logo, idx) => (
            <Image
              key={idx}
              src={logo.src}
              alt={logo.alt}
              width={240}
              height={120}
              className="w-40 opacity-80 md:w-48"
            />
          ))}
        </div>
        <div className="flex flex-none gap-4 animate-marquee">
          {logos.map((logo, idx) => (
            <Image
              key={`second-${idx}`}
              src={logo.src}
              alt={logo.alt}
              width={240}
              height={120}
              className="w-40 opacity-80 md:w-48"
            />
          ))}
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute left-0 w-1/3 h-full bg-gradient-to-l from-transparent to-white" />
        <div className="absolute right-0 w-1/3 h-full bg-gradient-to-r from-transparent to-white" />
      </div>

      {/* Second Carousel (Reverse Direction) */}
      <div className="flex overflow-hidden relative">
        <div className="flex flex-none gap-4 animate-marquee-reverse">
          {logos.map((logo, idx) => (
            <Image
              key={`reverse-${idx}`}
              src={logo.src}
              alt={logo.alt}
              width={240}
              height={120}
              className="w-40 opacity-80 md:w-48"
            />
          ))}
        </div>
        <div className="flex flex-none gap-4 animate-marquee-reverse">
          {logos.map((logo, idx) => (
            <Image
              key={`reverse-second-${idx}`}
              src={logo.src}
              alt={logo.alt}
              width={240}
              height={120}
              className="w-40 opacity-80 md:w-48"
            />
          ))}
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute left-0 w-1/3 h-full bg-gradient-to-l from-transparent to-white" />
        <div className="absolute right-0 w-1/3 h-full bg-gradient-to-r from-transparent to-white" />
      </div>
    </section>
  );
};

export default LogoCarousel;