// src/components/HeroSection.jsx
import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="pt-24 px-4 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Company Name / Tagline */}
        <span className="text-emerald-700 font-semibold mb-6 block text-lg tracking-wide">
          Chata Bubble
        </span>

        {/* Hero Text */}
        <div className="max-w-4xl mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-emerald-900 mb-8 leading-tight">
            Pioneering AI for Global Language Mastery
          </h1>
          <p className="text-gray-700 text-xl lg:text-2xl mb-8 leading-relaxed">
            At Chata Bubble, we are dedicated to revolutionizing language learning through cutting-edge AI. 
            Our mission is to empower individuals worldwide to connect with their heritage, master new languages, 
            and bridge cultural divides. We envision a world where technology fosters understanding and preserves linguistic diversity.
          </p>
        </div>

        {/* Content Layout with Images and Text Side by Side */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
          {/* Vision Text */}
          <div className="lg:w-1/2 text-gray-700">
            <h2 className="text-3xl font-semibold text-emerald-800 mb-6">Our Vision for Connection</h2>
            <p className="text-lg leading-relaxed mb-4">
              Inspired by the transformative power of technology and the limitless potential of artificial intelligence, 
              Chata Bubble is committed to crafting intuitive and impactful tools. We believe this is a pivotal era 
              for developing solutions that not only facilitate language acquisition but also celebrate and preserve 
              the rich tapestry of global cultures for generations to come.
            </p>
            <p className="text-lg leading-relaxed">
              Our journey is driven by innovation and a passion for creating meaningful connections. We are building more than just an app; 
              we are building a gateway to new worlds and a deeper appreciation of our shared human experience.
            </p>
          </div>

          {/* Image Stack */}
          <div className="lg:w-1/2 relative mt-8 lg:mt-0">
            {/* Desktop View - Tilted Stack */}
            <div className="hidden lg:block relative h-[300px] group">
              <div className="absolute right-0 flex gap-4 transform -rotate-6 group-hover:rotate-0 group-hover:scale-105 transition-transform duration-500 ease-out">
                <div className="relative w-[200px] h-[140px] rounded-xl shadow-2xl overflow-hidden transform hover:scale-110 transition-transform">
                  <Image
                    src="/images/idea.png" // Replace with a more professional/abstract image if possible
                    alt="Innovation at Chata Bubble"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="relative w-[200px] h-[140px] rounded-xl shadow-2xl overflow-hidden transform hover:scale-110 transition-transform delay-75">
                  <Image
                    src="/images/davinci.png" // Replace with a more professional/abstract image
                    alt="Global Connection"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="relative w-[200px] h-[140px] rounded-xl shadow-2xl overflow-hidden transform hover:scale-110 transition-transform delay-150">
                  <Image
                    src="/images/vintage-pc.png" // Replace with a modern tech/AI image
                    alt="Future of Language Tech"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
             {/* Mobile View - Stacked or Carousel */}
            <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="relative w-full aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
                     <Image src="/images/idea.png" alt="Innovation" layout="fill" objectFit="cover" />
                </div>
                <div className="relative w-full aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
                    <Image src="/images/davinci.png" alt="Connection" layout="fill" objectFit="cover" />
                </div>
                <div className="relative w-full aspect-[4/3] rounded-lg shadow-lg overflow-hidden col-span-2 sm:col-span-1">
                    <Image src="/images/vintage-pc.png" alt="Technology" layout="fill" objectFit="cover" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
