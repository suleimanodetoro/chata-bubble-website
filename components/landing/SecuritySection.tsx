"use client";

import React from "react";
import { Server, UserCircle2, Lock } from "lucide-react";
import { toast } from "react-hot-toast";

function handleLinkClick(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  toast.error(
    "Sorry, this page is currently down. Please check back later!"
  );
}

const SecuritySection = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-emerald-900 mb-6">
          Security, privacy, and
          <br />
          what we’re still figuring out
        </h1>
        <p className="text-lg text-gray-600">
          Chata Bubble is all about fun language learning. But even fun tools
          should respect your privacy. As a solo founder from Nigeria, I’m still
          learning the ropes on compliance—and I don’t claim to be an expert.
          Below is where we stand now, and how we’re keeping your data safe.
        </p>
      </div>

      {/* Compliance Badges */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Redesigned SOC-2 Card */}
        <div className="bg-white rounded-lg p-6 border flex items-start gap-4">
          <div className="w-12 h-12 rounded-full border border-dashed border-emerald-600 flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-semibold text-emerald-600">
              SOC-2
            </span>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-emerald-900">SOC-2</h3>
              <span className="bg-gray-200 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                IN PROGRESS
              </span>
            </div>
            <p className="text-gray-600 mt-2">
              We’re collaborating with Vanta to achieve full SOC-2 compliance,
              ensuring your data is handled with care and security.
            </p>
            <a
              href="#"
              className="text-emerald-600 hover:underline mt-2 inline-block"
              onClick={handleLinkClick}
            >
              View our trust page
            </a>
          </div>
        </div>

        {/* GDPR-ish Card */}
        <div className="bg-white rounded-lg p-6 border flex items-start gap-4">
  {/* Icon Section with Flag */}
  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
    <span role="img" aria-label="EU Flag" className="text-lg">🇪🇺</span>
  </div>

  {/* Content Section */}
  <div className="flex-1">
    <h3 className="text-lg font-semibold text-emerald-900">GDPR-ish</h3>
    <p className="text-gray-600 mt-2">
      I’m trying to incorporate GDPR standards and give users confidence, but I’m not a lawyer. 
      Your data is encrypted, and you can delete it whenever you want.
    </p>
  </div>
</div>

      </div>

      {/* Security Features */}
      <div className="space-y-12">
        <SecurityFeature
          icon={<Server className="w-6 h-6" />}
          title="No hidden recordings"
          description="Chata Bubble only stores your chat transcript and AI persona. No audio or 
            secret logs. What you see is what we have."
        />

        <SecurityFeature
          icon={<UserCircle2 className="w-6 h-6" />}
          title="You decide who sees your chats"
          description="Your AI chats are private unless you explicitly share them. You can delete 
            your data anytime, or request a full purge."
        />

        <SecurityFeature
          icon={<Lock className="w-6 h-6" />}
          title="Encrypted & Minimally Stored"
          description="All data is encrypted in transit and at rest, hosted in a secure US-based 
            AWS VPC. As a solo founder, I'm the only one with admin access, and I'm serious 
            about keeping it safe."
        />

        <div className="pt-8">
          <h3 className="text-xl font-semibold text-emerald-900 mb-4">
            I’m here if you need me
          </h3>
          <p className="text-gray-600">
            If you have questions on how your data is handled, email me directly
            at{" "}
            <a
              href="mailto:sales@chata-bubble.com"
              className="text-emerald-600 hover:underline"
            >
              sales@chata-bubble.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

const SecurityFeature = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div>
    <div className="flex items-center gap-3 mb-2">
      <div className="text-emerald-600">{icon}</div>
      <h3 className="text-xl font-semibold text-emerald-900">{title}</h3>
    </div>
    <p className="text-gray-600 ml-9">{description}</p>
  </div>
);

export default SecuritySection;
