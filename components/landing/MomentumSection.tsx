// src/components/MomentumSection.jsx
import React from "react";
import Link from 'next/link';
import { Zap, Users, Target, TrendingUp, Briefcase, MessageSquare } from "lucide-react"; // Updated icons

const MomentumSection = () => {
  return (
    <section className="py-20 px-4 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-900 mb-4">Driving the Future of Language Learning</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Chata Bubble is rapidly advancing, fueled by a commitment to innovation and a growing global community. 
            Our strategic focus is creating tangible impact in how individuals connect with languages and cultures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Key Points */}
          <div className="space-y-10">
            <div className="flex gap-6 items-start p-6 bg-emerald-50 rounded-lg shadow-sm">
              <Zap className="w-10 h-10 text-amber-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">
                  Focused Innovation & Agility
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our lean structure and clear vision grant us the agility to innovate rapidly and responsively. 
                  This allows Chata Bubble to prioritize features that deliver genuine, long-term value to our users, 
                  free from traditional constraints.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start p-6 bg-emerald-50 rounded-lg shadow-sm">
              <Users className="w-10 h-10 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">
                  Vibrant User Community
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A passionate and growing global community of learners, educators, and cultural enthusiasts
                  is at the heart of Chata Bubble. Their engagement and feedback are pivotal to our platform&apos;s evolution and success.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start p-6 bg-emerald-50 rounded-lg shadow-sm">
              <Target className="w-10 h-10 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">
                  Mission for Cultural Preservation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Beyond language acquisition, Chata Bubble is committed to the preservation of linguistic diversity. 
                  We empower communities to safeguard and revitalize their languages, creating a lasting cultural impact.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start p-6 bg-emerald-50 rounded-lg shadow-sm">
              <TrendingUp className="w-10 h-10 text-purple-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">
                  The Path Forward: Expanding Horizons
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our roadmap is ambitious, with plans for enhanced AI capabilities, new language integrations, and richer interactive experiences. 
                  Chata Bubble is poised for significant growth as we continue to redefine language technology.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Join Our Mission / Future Opportunities */}
          <div className="bg-gray-100 p-8 rounded-xl shadow-lg mt-8 md:mt-0">
            <div className="flex justify-center mb-6">
                <Briefcase className="w-12 h-12 text-emerald-700" />
            </div>
            <h3 className="text-3xl font-bold text-emerald-900 mb-6 text-center">
              Join Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6 text-center">
              Chata Bubble is driven by a passion to connect the world through language. While we are currently optimizing our core team, 
              we are always open to connecting with exceptional talent who share our vision for innovation in EdTech and cultural technology.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8 text-center">
              If you are inspired by our mission and believe your expertise can contribute to our journey, we encourage you to reach out. 
              We anticipate future opportunities as we scale.
            </p>
            <div className="text-center">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300 text-lg">
                    <MessageSquare size={20} />
                    Connect With Us
                </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MomentumSection;
