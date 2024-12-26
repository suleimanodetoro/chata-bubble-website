import React from 'react';
import { Globe, User, Monitor, FileText, Lock } from 'lucide-react';
import Link from 'next/link';

const PolicyCard = ({ 
  icon, 
  title, 
  description, 
  href 
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) => (
  <Link 
    href={href}
    className="bg-white rounded-lg p-6 border hover:shadow-md transition-shadow flex flex-col gap-4"
  >
    <div className="text-emerald-600">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-semibold text-emerald-900 mb-1">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  </Link>
);

const PolicyLinks = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-emerald-900 mb-16">Terms & Policies</h2>
        
        {/* Terms Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-emerald-900 mb-8">Terms</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <PolicyCard
              icon={<Globe className="w-6 h-6" />}
              title="Platform Terms"
              description="The terms you agree to when using Granola"
              href="/policies/platform-terms"
            />
            <PolicyCard
              icon={<User className="w-6 h-6" />}
              title="User Terms"
              description="Your terms as an individual in a Granola workspace"
              href="/policies/user-terms"
            />
            <PolicyCard
              icon={<Monitor className="w-6 h-6" />}
              title="Application Terms"
              description="Your terms as a user of Granola's mobile app"
              href="/policies/app-terms"
            />
            <PolicyCard
              icon={<FileText className="w-6 h-6" />}
              title="Copyright Dispute Policy"
              description="How we handle copyright disputes"
              href="/policies/copyright"
            />
          </div>
        </div>

        {/* Privacy Section */}
        <div>
          <h3 className="text-2xl font-bold text-emerald-900 mb-8">Privacy</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <PolicyCard
              icon={<Lock className="w-6 h-6" />}
              title="Privacy Policy"
              description="How we protect your privacy and data"
              href="/policies/privacy"
            />
            <PolicyCard
              icon={<Lock className="w-6 h-6" />}
              title="Data Processing Agreement"
              description="How we handle customer data"
              href="/policies/dpa"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicyLinks;