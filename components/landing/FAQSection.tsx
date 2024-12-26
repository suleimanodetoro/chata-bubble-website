import React from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What admin controls will I have?',
    answer: 'Admin information here...'
  },
  {
    question: 'Is Granola secure / SOC-2 / HIPPA compliant?',
    answer: 'Security information here...'
  },
  {
    question: 'How does adding and removing team members work?',
    answer: 'Team management information here...'
  },
  {
    question: 'Do you offer a referral program?',
    answer: 'Referral program information here...'
  },
  {
    question: 'Discounts for edu/non-profit?',
    answer: 'Discount information here...'
  },
  {
    question: 'How does the free trial work?',
    answer: 'Free trial information here...'
  },
  {
    question: 'Where are my invoices?',
    answer: 'Invoice information here...'
  },
  {
    question: 'Can I cancel?',
    answer: 'Cancellation information here...'
  },
  {
    question: 'Can I pay by invoice?',
    answer: 'Payment information here...'
  }
];

const FAQSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-emerald-900 text-center mb-4">
          Questions & answers
        </h2>
        
        <p className="text-center text-gray-600 mb-16">
          Questions about security, privacy, or how it all works?{' '}
          <a href="#" className="text-emerald-900 underline">Read more here</a>
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details 
              key={index}
              className="group border-b last:border-b-0 pb-4"
            >
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg text-emerald-900">{faq.question}</h3>
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;