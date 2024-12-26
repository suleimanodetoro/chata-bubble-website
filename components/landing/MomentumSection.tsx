import React from 'react';
import { DollarSign, Heart, Rocket, BoomBox } from 'lucide-react';

const MomentumSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-emerald-900">Momentum</h2>
          <p className="text-gray-600">
            Now is a great time to be joining Granola. Here are a few things that have us excited.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column - Key Points */}
          <div className="space-y-12">
            <div className="flex gap-4">
              <DollarSign className="w-8 h-8 text-amber-500 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-emerald-900 mb-2">Investors</h3>
                <p className="text-gray-600 mb-4">
                  We've raised over $24M from amazing investors, including:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Top tier VC funds: Lightspeed, Betaworks, Firstminute Capital</li>
                  <li>• Mike Krieger, cofounder of Instagram</li>
                  <li>• Soleio: Early facebook designer. Backer of Figma, Framer, Vercel, and more</li>
                  <li>• David Lieb: YC partner, founder of Bump & creator of Google Photos</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <Heart className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-emerald-900 mb-2">Passionate users who talk to us every day</h3>
                <p className="text-gray-600 mb-4">
                  We've built a vibrant community of early users, and Granola is used and loved by some of product-building heroes:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Guillermo Rauch: founder of Vercel</li>
                  <li>• Nat Friedman: ex-CEO of Github</li>
                  <li>• Des Traynor: co-founder of Intercom</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <Rocket className="w-8 h-8 text-emerald-500 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-emerald-900 mb-2">We're growing</h3>
                <p className="text-gray-600">
                  The Granola app has high engagement with its users, and is spreading virally within companies that use it
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <BoomBox className="w-8 h-8 text-purple-500 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-emerald-900 mb-2">Still lots to figure out</h3>
                <p className="text-gray-600">
                  We're still early in our journey. There's plenty of space to make big moves with the product and have a huge impact on the trajectory of the company
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Open Roles */}
          <div>
            <h3 className="text-2xl font-bold text-emerald-900 mb-6">Open roles</h3>
            <div className="space-y-4">
              <RoleCard
                title="Founding Marketer"
                location="London, UK"
                icon="🎯"
              />
              <RoleCard
                title="Product Engineer"
                location="London, UK"
                icon="⚡"
              />
              <RoleCard
                title="iOS Engineer"
                location="London, UK"
                icon="🍎"
              />
              <RoleCard
                title="AI Engineer"
                location="London, UK"
                icon="🤖"
              />
              <RoleCard
                title="Founding Customer Experience Lead"
                location="London, UK"
                icon="💫"
              />
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Interested but don't see a match? Email us, we're always interested in hearing from passionate folks:
                <a href="mailto:hiring@granola.so" className="text-emerald-600 hover:underline ml-1">
                  hiring@granola.so
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const RoleCard = ({ title, location, icon }: { title: string; location: string; icon: string }) => (
  <a 
    href="#" 
    className="block p-4 rounded-lg border hover:shadow-md transition-shadow bg-white"
  >
    <div className="flex items-center gap-3">
      <span className="text-2xl">{icon}</span>
      <div>
        <h4 className="font-medium text-emerald-900">{title}</h4>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
    </div>
  </a>
);

export default MomentumSection;