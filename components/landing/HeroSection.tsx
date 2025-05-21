// components/landing/HeroSection.tsx
"use client"
import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component

const HeroSection: React.FC = () => {
  return (
    <section className="flex relative flex-col gap-4 justify-center items-center pb-24 w-full">
      {/* Background Gradient */}
      <div 
        className="overflow-visible absolute inset-0 select-none z-[-1]" 
        style={{
          background: 'radial-gradient(at 53% 78%, hsla(60,100%,50%,0.3) 0px, transparent 50%), radial-gradient(at 71% 91%, hsla(108,100%,50%,0.3) 0px, transparent 50%), radial-gradient(at 31% 91%, hsla(30,100%,50%,0.17) 0px, transparent 50%)'
        }}
      />

      {/* Hero Content */}
      <div className="flex flex-col gap-4 justify-center items-center px-6 pt-28 pb-12 lg:pb-16 lg:gap-8 md:pt-40 lg:pt-40">
        {/* Mobile Banner */}
        <a className="px-3 py-1.5 font-medium rounded-full border text-gray-800 hover:bg-neutral-100 transition-colors flex gap-1 items-center" href="/app">
          🎉 Cooler learning features – coming soon!
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gray-500">
            <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" />
          </svg>
        </a>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-center leading-[0.9]">
          <span className="text-gray-400">The</span>{' '}
          <span className="text-emerald-900">AI buddy</span>{' '}
          <span className="text-gray-400">for language learning</span>
          <br className="hidden md:block" />
          <span className="text-emerald-900">at the Price of Lunch!</span>
        </h1>

        <h2 className="px-4 md:px-8 w-full max-w-6xl text-lg font-medium leading-tight text-center lg:text-2xl text-gray-500">
          Get fluent fast with your playful AI buddy—at 4x less the cost of the usual apps. Practice real-life convos, perfect your accent, and rediscover hidden gems in Nigerian languages!
        </h2>

        {/* Download Button */}
        <a 
          href="#download-section" 
          className="mt-4 flex items-center px-6 h-12 bg-gradient-to-br from-emerald-400 to-emerald-500 text-white rounded-full font-medium transition-all hover:scale-[101%] shadow-sm"
          onClick={(e) => {
            e.preventDefault();
            const downloadSection = document.getElementById("download-section");
            if (downloadSection) {
              downloadSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <span className="flex gap-2 items-center">
            Download Now
          </span>
        </a>
      </div>

      {/* Demo Cards Container */}
      <div className="relative gap-2 items-center px-4 -mb-16 w-full max-w-4xl sm:px-6 md:-mb-32 md:flex">
        {/* Main App Window Card (Single Image) */}
        <div className="flex flex-col gap-1 items-center w-full md:w-4/5 mx-auto md:gap-2"> {/* Adjusted width and centered */}
          <p className="text-xs font-medium sm:text-base md:text-lg text-gray-500">
            Learning + Machine Learning
          </p>
          <div className="overflow-hidden rounded-lg shadow-2xl flex relative flex-col flex-1 h-full backdrop-blur-lg font-mono bg-white/80 border border-gray-200/50 w-full">
            {/* Window Controls */}
            <div className="flex relative flex-none gap-1.5 items-center px-3 py-2.5 md:h-10 border-b border-gray-200/70">
              <div className="flex items-center space-x-1.5">
                <div className="rounded-full bg-red-400 w-2.5 h-2.5 md:w-3 md:h-3" />
                <div className="rounded-full bg-yellow-400 w-2.5 h-2.5 md:w-3 md:h-3" />
                <div className="rounded-full bg-green-400 w-2.5 h-2.5 md:w-3 md:h-3" />
              </div>
             \
            </div>
            {/* Card Content - Single Screenshot */}
            <div className="relative flex-1 bg-white p-2 sm:p-4 md:p-6 aspect-[16/10] min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
              <div className="relative w-full h-full rounded-md overflow-hidden">
                <Image
                  src="/images/screenshot3.jpg" 
                  alt="App Screenshot - Chat with AI"
                  layout="fill"
                  objectFit="contain" 
                  className="transition-transform duration-500 group-hover:scale-105" // Added group-hover for potential parent hover effect
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
