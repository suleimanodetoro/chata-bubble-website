// components/landing/HowItWorks.tsx
import React from 'react';

const HowItWorks = () => {
  return (
    <section className="flex overflow-visible relative flex-col gap-16 px-4 py-16 w-full max-w-3xl sm:px-6 md:py-24 lg:py-20 lg:px-8 lg:max-w-6xl items-center lg:gap-12">
      {/* Title */}
      <div className="flex flex-col col-span-full gap-4 mx-auto max-w-2xl text-center lg:gap-8">
        <h1 className="text-3xl lg:text-5xl text-emerald-900 font-bold tracking-[-0.015em] leading-[0.95] text-balance">
          How it works
        </h1>
      </div>

      {/* Features Grid */}
      <div className="grid gap-6 w-full lg:grid-cols-2">
        {/* First Feature */}
        <div className="overflow-hidden p-6 rounded-xl border shadow-lg flex relative flex-col gap-4">
          <div className="overflow-visible absolute inset-0 select-none z-[-1]" 
            style={{
              background: 'radial-gradient(at 53% 78%, hsla(60,100%,50%,0.3) 0px, transparent 50%), radial-gradient(at 71% 91%, hsla(108,100%,50%,0.3) 0px, transparent 50%)'
            }}
          />
          
          <h2 className="text-xl font-semibold lg:text-2xl">
            <span>Your app is like Apple notes, but it also </span>
            <span className="inline-flex relative gap-2 items-baseline pr-2 pl-8 rounded-full text-emerald-700">
              <div className="flex absolute inset-y-0 -inset-x-1 items-center pl-2 rounded-full bg-emerald-50">
                <div className="flex justify-center items-center w-6 h-6 gap-[3px]">
                  <div className="bg-emerald-500 rounded-full w-[3px]" style={{ height: '40%' }} />
                  <div className="bg-emerald-500 rounded-full w-[3px]" style={{ height: '90%' }} />
                  <div className="bg-emerald-500 rounded-full w-[3px]" style={{ height: '50%' }} />
                </div>
              </div>
              <span>transcribes</span>
            </span>
            <span> your conversation</span>
          </h2>

          {/* Demo Window */}
          <div className="overflow-hidden bg-white rounded-lg shadow-lg -mb-8 border w-full aspect-square md:aspect-[4/3]">
            {/* Window Controls */}
            <div className="flex justify-between items-center p-2.5 w-full h-10">
              <div className="flex items-center w-full space-x-2">
                <div className="rounded-full bg-red-400 w-2.5 h-2.5" />
                <div className="rounded-full bg-yellow-300 w-2.5 h-2.5" />
                <div className="rounded-full bg-green-400 w-2.5 h-2.5" />
              </div>
            </div>

            {/* Content Area */}
            <div className="relative px-8 py-2 w-full text-sm aspect-video font-mono">
              {/* Add your demo content here */}
            </div>
          </div>
        </div>

        {/* Second Feature */}
        <div className="overflow-hidden p-6 rounded-xl border shadow-lg flex relative flex-col gap-4">
          <div className="overflow-visible absolute inset-0 select-none z-[-1]" 
            style={{
              background: 'radial-gradient(at 53% 78%, hsla(60,100%,50%,0.3) 0px, transparent 50%), radial-gradient(at 71% 91%, hsla(108,100%,50%,0.3) 0px, transparent 50%)'
            }}
          />
          
          <h2 className="text-xl font-semibold lg:text-2xl">
            When the meeting ends, the app{' '}
            <span className="inline-flex relative gap-2 items-baseline pr-2 pl-8 rounded-full text-emerald-700">
              <div className="flex absolute inset-y-0 -inset-x-1 items-center pl-2 rounded-full bg-emerald-50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path d="M15.98 1.804a1 1 0 0 0-1.96 0l-.24 1.192a1 1 0 0 1-.784.785l-1.192.238a1 1 0 0 0 0 1.962l1.192.238a1 1 0 0 1 .785.785l.238 1.192a1 1 0 0 0 1.962 0l.238-1.192a1 1 0 0 1 .785-.785l1.192-.238a1 1 0 0 0 0-1.962l-1.192-.238a1 1 0 0 1-.785-.785l-.238-1.192Z" />
                </svg>
              </div>
              <span>enhances</span>
            </span>
            {' '}the notes you've written
          </h2>

          {/* Demo Window */}
          <div className="overflow-hidden bg-white rounded-lg shadow-lg -mb-8 w-full border aspect-square md:aspect-[4/3]">
            {/* Window Controls */}
            <div className="flex justify-between items-center p-2.5 w-full h-10">
              <div className="flex items-center w-full space-x-2">
                <div className="rounded-full bg-red-400 w-2.5 h-2.5" />
                <div className="rounded-full bg-yellow-300 w-2.5 h-2.5" />
                <div className="rounded-full bg-green-400 w-2.5 h-2.5" />
              </div>
            </div>

            {/* Content Area */}
            <div className="relative px-8 py-2 w-full text-sm aspect-video font-mono">
              {/* Add your demo content here */}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="flex flex-col col-span-full gap-4 items-center py-12 mx-auto text-emerald-900">
        <blockquote className="max-w-3xl text-2xl italic text-center md:text-3xl text-balance">
          Your app has become indispensable - feels like I'm living in the future.
        </blockquote>
        <div className="flex gap-4 items-center -ml-2">
          <img src="/images/testimonials/user.jpg" alt="User" className="rounded-full w-10 h-10 md:w-12 md:h-12 bg-neutral-200" />
          <div className="flex flex-col">
            <span className="font-semibold leading-tight md:text-lg">John Doe</span>
            <p className="text-sm font-normal text-gray-500">
              CTO, Example Inc
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;