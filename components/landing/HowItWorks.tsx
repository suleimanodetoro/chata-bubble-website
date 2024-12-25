// components/landing/HowItWorks.tsx
import React from 'react';

const HowItWorks = () => {
  return (
    <div className="relative w-full">
      {/* Background confined to parent */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(at 71% 57%, hsla(108,100%,50%,0.3) 0px, transparent 50%), radial-gradient(at 53% 43%, hsla(60,100%,50%,0.3) 0px, transparent 50%), radial-gradient(at 31% 51%, hsla(30,100%,50%,0.17) 0px, transparent 50%)'
        }}
      />
      
      <section className="relative w-full py-16 md:py-24 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="text-3xl lg:text-5xl text-emerald-900 font-bold tracking-[-0.015em] leading-[0.95]">
              How it works
            </h1>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* First Card */}
            <div className="relative p-6 rounded-xl border shadow-lg bg-white">
              <h2 className="text-xl font-semibold lg:text-2xl mb-6">
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
              <div className="rounded-lg shadow-lg border overflow-hidden">
                <div className="flex items-center h-8 px-4 border-b bg-white">
                  <div className="flex gap-2">
                    <div className="rounded-full bg-red-400 w-2.5 h-2.5" />
                    <div className="rounded-full bg-yellow-300 w-2.5 h-2.5" />
                    <div className="rounded-full bg-green-400 w-2.5 h-2.5" />
                  </div>
                </div>
                <div className="aspect-[16/10] bg-white p-4" />
              </div>
            </div>

            {/* Second Card */}
            <div className="relative p-6 rounded-xl border shadow-lg bg-white">
              <h2 className="text-xl font-semibold lg:text-2xl mb-6">
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
              <div className="rounded-lg shadow-lg border overflow-hidden">
                <div className="flex items-center h-8 px-4 border-b bg-white">
                  <div className="flex gap-2">
                    <div className="rounded-full bg-red-400 w-2.5 h-2.5" />
                    <div className="rounded-full bg-yellow-300 w-2.5 h-2.5" />
                    <div className="rounded-full bg-green-400 w-2.5 h-2.5" />
                  </div>
                </div>
                <div className="aspect-[16/10] bg-white p-4" />
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="max-w-3xl mx-auto text-center mt-16">
            <blockquote className="text-2xl md:text-3xl italic text-emerald-900">
              Your app has become indispensable - feels like I'm living in the future.
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-4">
              <img 
                src="/api/placeholder/48/48"
                alt="User" 
                className="rounded-full w-12 h-12 bg-gray-200" 
              />
              <div className="text-left">
                <div className="font-semibold text-lg">John Doe</div>
                <p className="text-gray-500">CTO, Example Inc</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;