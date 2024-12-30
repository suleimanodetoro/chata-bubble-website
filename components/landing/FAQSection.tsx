"use client";

import React from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How secure is Chata Bubble?',
    answer: 'Chats are encrypted, minimal user data is stored, and data can be deleted anytime.'
  },
  {
    question: 'Are there any discounts for students or non-profits?',
    answer: 'Discounts are offered on a case-by-case basis. Reach out for more information.'
  },
  {
    question: 'What happens to my progress if I cancel?',
    answer: 'No progress is lost. All transcripts and stats remain, but access to AI features is limited.'
  },
  {
    question: 'Can I switch from monthly to annual?',
    answer: 'Yes. Billing cycles are flexible. Switch anytime in account settings.'
  },
  {
    question: 'Is there a free plan?',
    answer: 'No free plan at this time, but we do offer a 7-day money-back guarantee.'
  },
  {
    question: 'How do I delete my account?',
    answer: 'All account actions, including deletion, are found in the user menu settings.'
  },
  {
    question: 'Are voice features included?',
    answer: 'Voice checks and feedback are included in both plans, with ongoing improvements.'
  }
];

const FAQSection: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-emerald-900 text-center mb-4">
          Frequently Asked Questions
        </h2>
        
        <p className="text-center text-gray-600 mb-16">
          Learn more about security, billing, or general usage below.
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
