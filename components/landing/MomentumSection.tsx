import React from 'react';
import { DollarSign, Heart, Rocket, BoomBox } from 'lucide-react';

const MomentumSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-emerald-900">Momentum</h2>
          <p className="text-gray-600">
            Chata Bubble is self-funded by a solo founder from Nigeria. Despite 
            the modest resources, the passion for keeping languages alive and making 
            learning fun has already captured an engaged audience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column - Key Points */}
          <div className="space-y-12">
            <div className="flex gap-4">
              <DollarSign className="w-8 h-8 text-amber-500 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-emerald-900 mb-2">Self-Funded & Independent</h3>
                <p className="text-gray-600">
                  No big VCs here—just personal passion and sweat equity. That means 
                  full freedom to build what's genuinely valuable for language learners, 
                  without external pressure.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Heart className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-emerald-900 mb-2">A Growing Community of Learners</h3>
                <p className="text-gray-600">
                  Word is spreading among students, travelers, and anyone looking to 
                  preserve local dialects. Hearing user success stories keeps this 
                  journey fueled with heart.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Rocket className="w-8 h-8 text-emerald-500 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-emerald-900 mb-2">Cultural Mission</h3>
                <p className="text-gray-600">
                  Chata Bubble helps endangered languages stay alive by letting young 
                  people practice them daily. That’s real momentum and real impact—no 
                  matter how big or small the budget.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <BoomBox className="w-8 h-8 text-purple-500 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-emerald-900 mb-2">The Road Ahead</h3>
                <p className="text-gray-600">
                  There’s so much left to explore—voice recognition, new languages, 
                  and deeper AI interactions. This is just the beginning, and I’m excited 
                  for every next step.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - (No Open Roles) */}
          <div>
            <h3 className="text-2xl font-bold text-emerald-900 mb-6">Staying Solo—for Now</h3>
            <p className="text-gray-600">
              I’m not currently hiring, but I love meeting people who share the vision 
              of bridging cultural gaps through language. If you want to learn more or 
              just say hi, feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MomentumSection;
