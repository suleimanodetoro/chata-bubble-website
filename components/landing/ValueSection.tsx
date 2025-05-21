// src/components/ValuesSection.jsx
import React from 'react';
import { Users, Globe, Lightbulb } from 'lucide-react'; // Example icons

const ValuesSection = () => {
  return (
    <section className="py-20 px-4 bg-emerald-50">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-emerald-900 mb-4">Our Core Principles</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          These values guide our innovation, our culture, and our commitment to learners everywhere.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Value 1: Human-Centric Innovation */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="flex justify-center mb-6">
            <Users className="w-12 h-12 text-emerald-600" />
          </div>
          <h3 className="text-2xl font-semibold text-emerald-900 mb-4 text-center">
            Human-Centric Innovation
          </h3>
          <p className="text-gray-700 leading-relaxed text-center">
            At Chata Bubble, our technology serves humanity. We craft intuitive, AI-powered experiences 
            that foster genuine connection and understanding, placing the learner at the heart of every innovation.
            Our focus is on building tools that are not just smart, but also empathetic and empowering.
          </p>
        </div>

        {/* Value 2: Global Vision, Local Roots */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="flex justify-center mb-6">
            <Globe className="w-12 h-12 text-emerald-600" />
          </div>
          <h3 className="text-2xl font-semibold text-emerald-900 mb-4 text-center">
            Global Vision, Cultural Integrity
          </h3>
          <p className="text-gray-700 leading-relaxed text-center">
            Chata Bubble is built for a global audience, with a profound respect for linguistic diversity. 
            Our approach is informed by a deep understanding of cultural nuances, ensuring our platform 
            not only teaches languages but also celebrates and helps preserve the rich heritage they represent.
          </p>
        </div>

        {/* Value 3: Purpose-Driven Technology (New Value) */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
          <div className="flex justify-center mb-6">
            <Lightbulb className="w-12 h-12 text-emerald-600" />
          </div>
          <h3 className="text-2xl font-semibold text-emerald-900 mb-4 text-center">
            Purpose-Driven Technology
          </h3>
          <p className="text-gray-700 leading-relaxed text-center">
            We believe in the power of technology to make a positive impact. Every feature and
            every line of code at Chata Bubble is driven by the purpose of making language learning
            more accessible, engaging, and effective, ultimately contributing to a more interconnected world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
