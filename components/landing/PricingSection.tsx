//components/landing/PricingSection
import React from 'react';
import { Check, Plus } from 'lucide-react';

const PricingCard = ({ 
  title, 
  price, 
  priceDetail, 
  ctaText, 
  features,
  isMainCta = false
}: {
  title: string;
  price: string;
  priceDetail?: string;
  ctaText: string;
  features: string[];
  isMainCta?: boolean;
}) => (
  <div className="bg-white rounded-xl border shadow-sm p-8 flex flex-col">
    {/* Header */}
    <h3 className="text-lg font-medium mb-2">{title}</h3>
    <div className="mb-6">
      <span className="text-4xl font-semibold">{price}</span>
      {priceDetail && (
        <span className="text-gray-600 ml-1">{priceDetail}</span>
      )}
    </div>

    {/* CTA Button */}
    <button 
      className={`w-full py-2 px-4 rounded-full font-medium mb-8 ${
        isMainCta 
          ? 'bg-gradient-to-br from-emerald-400 to-emerald-500 text-white' 
          : 'bg-gray-100 text-gray-900'
      }`}
    >
      {ctaText}
    </button>

    {/* Features */}
    <div className="space-y-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start gap-3">
          {feature.startsWith('Everything included') ? (
            <Plus className="w-5 h-5 text-gray-400 mt-0.5" />
          ) : (
            <Check className="w-5 h-5 text-emerald-500 mt-0.5" />
          )}
          <span className="text-gray-600">{feature}</span>
        </div>
      ))}
    </div>
  </div>
);

const PricingSection = () => {
  return (
    <section className="py-24 px-4 relative">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(at 53% 78%, hsla(60,100%,50%,0.3) 0px, transparent 50%), radial-gradient(at 71% 91%, hsla(108,100%,50%,0.3) 0px, transparent 50%)'
        }}
      />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-emerald-900 mb-4">
            Help your whole<br />company work smarter
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            With Granola, both teams and individuals can share knowledge easier, keeping on top of the things that matter
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <PricingCard
            title="Free trial"
            price="Free"
            ctaText="Download Granola for Mac"
            isMainCta
            features={[
              '25 free meetings',
              'AI chat with any meeting',
              'Create your own note templates'
            ]}
          />

          <PricingCard
            title="Individual"
            price="$18"
            priceDetail="per month"
            ctaText="Sign up in app"
            features={[
              'Unlimited meetings for you',
              'AI chat with any meeting',
              'Create your own note templates'
            ]}
          />

          <PricingCard
            title="Business"
            price="$14"
            priceDetail="per user per month (3 seat minimum)"
            ctaText="Sign up in app"
            features={[
              'Unlimited meetings for the whole team',
              'Share templates across your team',
              'Consolidated billing & admin',
              'Org-wide sharing controls',
              'Everything included in Individual'
            ]}
          />
        </div>

        {/* Enterprise CTA */}
        <div className="mt-12 text-center text-gray-600">
          <span>Need a custom plan for your company? </span>
          <a href="#" className="text-emerald-600 underline">Talk to us about enterprise</a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;