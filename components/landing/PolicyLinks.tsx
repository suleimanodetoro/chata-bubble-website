"use client";

import React from 'react';
import { Globe, User, Monitor, FileText, Lock } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'react-hot-toast';

// Step 1: We'll show a toast instead of alert
function handleLinkClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    toast.error("Sorry, this page is currently down. Please check back later!");
  }

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
    onClick={handleLinkClick} 
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
        <h2 className="text-4xl font-bold text-emerald-900 mb-16">Terms &amp; Policies</h2>
        
        {/* Terms Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-emerald-900 mb-8">Terms</h3>
          <p className="text-gray-600 mb-4">
            I’m a solo founder, and these terms are a work in progress. I’m still figuring 
            out how to handle all the legal stuff correctly, so please be patient!
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <PolicyCard
              icon={<Globe className="w-6 h-6" />}
              title="Platform Terms"
              description="Draft terms for using Chata Bubble’s AI platform"
              href="/policies/platform-terms"
            />
            <PolicyCard
              icon={<User className="w-6 h-6" />}
              title="User Terms"
              description="Draft terms for individuals practicing languages with Chata Bubble"
              href="/policies/user-terms"
            />
            <PolicyCard
              icon={<Monitor className="w-6 h-6" />}
              title="Application Terms"
              description="Draft terms for using our mobile or web app"
              href="/policies/app-terms"
            />
            <PolicyCard
              icon={<FileText className="w-6 h-6" />}
              title="Copyright Dispute Policy"
              description="Placeholder for how we’ll handle copyright issues"
              href="/policies/copyright"
            />
          </div>
        </div>

        {/* Privacy Section */}
        <div>
          <h3 className="text-2xl font-bold text-emerald-900 mb-8">Privacy</h3>
          <p className="text-gray-600 mb-4">
            All chats in Chata Bubble are encrypted. I store as little personal info as possible, 
            and what’s stored is yours to view or delete anytime in the menu. Still working on 
            official compliance.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <PolicyCard
              icon={<Lock className="w-6 h-6" />}
              title="Privacy Policy"
              description="Where I plan to detail how your data is stored & protected"
              href="/policies/privacy"
            />
            <PolicyCard
              icon={<Lock className="w-6 h-6" />}
              title="Data Processing Agreement"
              description="Fancy term, but basically says I handle your data responsibly"
              href="/policies/dpa"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicyLinks;
