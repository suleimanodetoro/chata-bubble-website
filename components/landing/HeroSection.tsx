// components/landing/HeroSection.tsx
import React from 'react';

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
          <span className="text-emerald-900">AI notepad</span>{' '}
          <span className="text-gray-400">for people in</span>
          <br className="hidden md:block" />
          <span className="text-emerald-900">back-to-back meetings</span>
        </h1>

        <h2 className="px-14 w-full max-w-2xl text-lg font-medium leading-tight text-center lg:text-2xl text-gray-500">
          Takes your raw meeting notes and makes them awesome
        </h2>

        {/* Download Button */}
        <a href="#" className="mt-4 flex items-center px-6 h-12 bg-gradient-to-br from-emerald-400 to-emerald-500 text-white rounded-full font-medium transition-all hover:scale-[101%] shadow-sm">
          <span className="flex gap-2 items-center">
            Download Now
          </span>
        </a>
      </div>

      {/* Demo Cards Container */}
      <div className="relative gap-2 items-center px-4 -mb-16 w-full max-w-4xl sm:px-6 md:-mb-32 md:flex">
        {/* Original Notes Card */}
        <div className="flex flex-col gap-1 items-center w-3/5 md:gap-2 md:w-[95%] md:ml-[3%]">
          <p className="text-xs font-medium sm:text-base md:text-lg text-gray-500">
            Your notes + transcript
          </p>
          <div className="overflow-hidden rounded-lg shadow-lg flex relative flex-col flex-1 h-full backdrop-blur-lg font-mono bg-white border-0.5 w-full">
            {/* Window Controls */}
            <div className="flex relative flex-none gap-4 items-center pr-1 pl-2 py-2 md:h-8">
              <div className="flex items-center w-full space-x-[3%] md:space-x-2">
                <div className="rounded-full bg-red-400 w-[3%] md:w-2.5 md:h-2.5 aspect-square" />
                <div className="rounded-full bg-yellow-300 w-[3%] md:w-2.5 md:h-2.5 aspect-square" />
                <div className="rounded-full bg-green-400 w-[3%] md:w-2.5 md:h-2.5 aspect-square" />
              </div>
            </div>
            {/* Card Content */}
            <div className="relative flex-1 bg-white px-[5%] md:px-8 pt-4 aspect-[16/10] min-h-[300px]">
              {/* Demo Content */}
              <div className="space-y-2">
                <div className="h-6 bg-gray-100 rounded w-3/4" />
                <div className="h-6 bg-gray-100 rounded w-1/2" />
                <div className="h-6 bg-gray-100 rounded w-2/3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;