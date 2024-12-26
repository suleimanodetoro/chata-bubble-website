import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Work with us tag */}
        <span className="text-emerald-900 font-medium mb-6 block">
          Work with us
        </span>

        {/* Hero Text */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-emerald-900 mb-6">
            Build tools that help humans think better
          </h1>
          <p className="text-gray-600 text-xl">
            We are a small, tight-knit team with massive ambitions. If your heart jumps a little when you read what's below, reach out.
          </p>
        </div>

        {/* Image Stack */}
        <div className="relative h-[400px] mb-16">
          <div className="absolute right-0 flex gap-4 transform -rotate-6">
            <Image 
              src="/api/placeholder/300/200" 
              alt="Vintage computer" 
              width={300}
              height={200}
              className="rounded-lg shadow-lg"
            />
            <Image 
              src="/api/placeholder/300/200" 
              alt="Code editor" 
              width={300}
              height={200}
              className="rounded-lg shadow-lg"
            />
            <Image 
              src="/api/placeholder/300/200" 
              alt="Team photo" 
              width={300}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Vision Text */}
        <div className="max-w-2xl mb-24 text-gray-600">
          <p className="mb-8">
            We've always looked up to the computing pioneers of the 60s, 70s and 80s. 
            With the advent of LLMs, it's now the most exciting time for tool building since 
            Engelbart gave his demo in 1968. All of us on the team feel like our best work 
            is ahead of us, that we haven't made our dent yet. We are pinching ourselves 
            that we get to work on this product, with this team, at this time - this is our shot.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;