import React from 'react';

const ValuesSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Humans building for humans */}
        <div>
          <h2 className="text-2xl font-bold text-emerald-900 mb-4">
            Humans building for humans
          </h2>
          <p className="text-gray-600">
            Building a great product is rare. It takes a lot of care, love, and effort 
            on the part of the people building it. Building a great company takes the same. 
            We are a group of humans that have fun together, that care about each other, 
            and that make each other better. We put a lot of ourselves into Granola. 
            We have all worked at companies that didn't feel human, so appreciate how 
            special this opportunity is.
          </p>
        </div>

        {/* Designed in London */}
        <div>
          <h2 className="text-2xl font-bold text-emerald-900 mb-4">
            Designed in London, built for the world
          </h2>
          <p className="text-gray-600">
            We come from (and admire) Silicon Valley, but we believe in London. 
            We're living through a transformational era where new ideas and interfaces 
            need to be invented, and London punches above its weight in design, talent, 
            and taste.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;