"use client";

import React from 'react';
import { Check, Plus } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  priceDetail?: string;
  ctaText: string;
  features: string[];
  isMainCta?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  priceDetail,
  ctaText,
  features,
  isMainCta = false
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

const PricingSection: React.FC = () => {
  return (
    <section className="py-24 px-4 relative">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 
            'radial-gradient(at 53% 78%, hsla(60,100%,50%,0.3) 0px, transparent 50%), ' +
            'radial-gradient(at 71% 91%, hsla(108,100%,50%,0.3) 0px, transparent 50%)'
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-emerald-900 mb-4">
            Choose a plan to unlock better language skills
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Chata Bubble offers AI-powered conversations and personalized learning for everyone. 
            Pick the plan that best fits your needs.
          </p>
        </div>

        {/* Pricing Grid (Two Cards) */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Monthly Plan */}
          <PricingCard
            title="Monthly Plan"
            price="$10"
            priceDetail="per month"
            ctaText="Get started"
            isMainCta
            features={[
              'Full access to AI chat features',
              'Unlimited persona creation',
              'Basic analytics and progress tracking'
            ]}
          />

          {/* Annual Plan */}
          <PricingCard
            title="Annual Plan"
            price="$5"
            priceDetail="per month, billed yearly ($60/year)"
            ctaText="Choose annual and save 50%"
            features={[
              'Everything in Monthly Plan',
              'Priority support',
              'Early access to new features'
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
