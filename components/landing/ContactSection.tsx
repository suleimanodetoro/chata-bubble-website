// pages/contact.tsx
import React from 'react';

// ContactOption component defined within the same file
const ContactOption = ({ title, email }: { title: string; email: string }) => (
  <div className="flex flex-col">
    <h2 className="text-xl text-emerald-900 mb-2">{title}</h2>
    <a 
      href={`mailto:${email}`}
      className="text-xl text-emerald-600 hover:text-emerald-700 transition-colors border-b border-emerald-200 hover:border-emerald-300 inline-block w-fit"
    >
      {email}
    </a>
  </div>
);

const ContactSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div 
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background: 'radial-gradient(at 71% 57%, hsla(108,100%,50%,0.3) 0px, transparent 50%), radial-gradient(at 53% 43%, hsla(60,100%,50%,0.3) 0px, transparent 50%)'
        }}
      />
      
      <div className="max-w-3xl mx-auto relative">
        <h1 className="text-4xl lg:text-5xl font-bold text-emerald-900 mb-16 text-center">
          Contact us
        </h1>

        <div className="space-y-12">
          <ContactOption
            title="For help with Chata Bubble:"
            email="support@chatabubble.com"
          />

          <ContactOption
            title="For language partnerships and collaborations:"
            email="partners@chatabubble.com"
          />

          <ContactOption
            title="For press inquiries about our AI language learning:"
            email="press@chatabubble.com"
          />

          <ContactOption
            title="For other inquiries:"
            email="hello@chatabubble.com"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;