import React from 'react';

const ValuesSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Humans building for humans */}
        <div>
          <h2 className="text-2xl font-bold text-emerald-900 mb-4">
            Solo founder, human focus
          </h2>
          <p className="text-gray-600">
            Chata Bubble isn’t backed by big teams or massive budgets—it's built 
            by one person with a passion for language, culture, and communication. 
            I put a lot of myself into this product because I believe that the best 
            way to build something meaningful is to stay connected to the people 
            using it. It's a personal mission to help people embrace their roots 
            and discover new ways of speaking.
          </p>
        </div>

        {/* Designed in Nigeria */}
        <div>
          <h2 className="text-2xl font-bold text-emerald-900 mb-4">
            Designed in Nigeria, built for the world
          </h2>
          <p className="text-gray-600">
            Being from Nigeria gives me a unique perspective on the importance of 
            preserving local dialects and bridging language barriers. But Chata Bubble 
            aims to serve learners around the globe, no matter who you are or where you 
            live. After all, languages connect us all.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
