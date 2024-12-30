// src/components/HeroSection.jsx
import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Intro Tag */}
        <span className="text-emerald-900 font-medium mb-6 block">
          Chata Bubble
        </span>

        {/* Hero Text */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-emerald-900 mb-6">
            Building AI tools for language learning
          </h1>
          <p className="text-gray-600 text-xl mb-6">
            Hi! I&#39;m the solo founder from Nigeria, pouring my heart, sweat, and cash into Chata Bubble. 
            I believe in empowering people to keep their heritage alive and discover new languages. 
            We&#39;ve got big dreams—and I&#39;m excited to share them with you.
          </p>
        </div>

        {/* Content Layout with Images and Text Side by Side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-24">
          {/* Vision Text */}
          <div className="lg:w-1/2 text-gray-600">
            <p>
              Inspired by computing pioneers of the 60s, 70s, and 80s—and fueled by modern AI—
              I&#39;m convinced there&#39;s never been a better time to build tools that help people learn 
              languages and preserve their cultures. Chata Bubble is my shot at doing something 
              meaningful for the world, and I can&#39;t wait to see where it leads.
            </p>
          </div>


{/* Image Stack */}
<div className="lg:w-1/2 relative">
  {/* Desktop View - Tilted Stack */}
  <div className="hidden lg:block relative h-[300px]">
    <div className="absolute right-0 flex gap-2 transform -rotate-12">
      <Image
        src="/images/idea.png"
        alt="Idea Cup"
        width={180}
        height={120}
        className="rounded-lg shadow-lg"
      />
      <Image
        src="/images/davinci.png"
        alt="Davinci Statue"
        width={180}
        height={120}
        className="rounded-lg shadow-lg"
      />
      <Image
        src="/images/vintage-pc.png"
        alt="Vintage Computer"
        width={180}
        height={120}
        className="rounded-lg shadow-lg"
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