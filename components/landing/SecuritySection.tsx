import React from 'react';
import Image from 'next/image';
import { Shield, Server, UserCircle2, Lock } from 'lucide-react';

const SecuritySection = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-emerald-900 mb-6">
          Security, privacy, and<br />how it all works
        </h1>
        <p className="text-lg text-gray-600">
          Tools like Granola make life easier, but meetings contain some of your most sensitive data. 
          Treating this with the respect it deserves is of utmost importance to us.
        </p>
      </div>

      {/* The Basics Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-emerald-900 mb-6">The basics</h2>
        <div className="space-y-6 text-gray-600">
          <p>
            Granola is a Mac app, a lot like Apple Notes or Notion. It requires Google Workspace 
            login and integrates with your calendar.
          </p>
          <p>
            You have to manually start Granola for a meeting (it won't auto-join or auto-record anything). 
            Granola then accesses the system audio on your computer and transcribes it. It does not add 
            a bot to your video call.
          </p>
          <p>
            As a result, Granola works with any meeting platform. Zoom, Meet, Teams, you name it.
          </p>
          <p>
            Granola uses best-in-class transcription providers (like Deepgram and Assembly) and AI 
            providers (like OpenAI and Anthropic) to summarize your meeting. We are constantly switching 
            to the best option as soon as new models come out.
          </p>
        </div>
      </div>

      {/* Compliance Badges */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-lg p-6 border flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
            <span className="text-lg font-semibold">SOC-2</span>
          </div>
          <div>
            <h3 className="font-semibold mb-1">SOC-2</h3>
            <p className="text-gray-600">We're working with Vanta to achieve full SOC-2 compliance</p>
            <a href="#" className="text-emerald-600 hover:underline mt-2 inline-block">
              View our trust page
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <Image src="/api/placeholder/48/48" alt="EU Flag" width={32} height={32} className="rounded-full" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">GDPR</h3>
            <p className="text-gray-600">
              We have incorporated GDPR standards into data practices to make sure our customers 
              have confidence in our security.
            </p>
          </div>
        </div>
      </div>

      {/* Security Features */}
      <div className="space-y-12">
        <SecurityFeature
          icon={<Server className="w-6 h-6" />}
          title="No recording"
          description="Granola doesn't save the audio from calls - it transcribes in real time 
          and only stores the transcript (and any notes you provide) from a call."
        />

        <SecurityFeature
          icon={<UserCircle2 className="w-6 h-6" />}
          title="You control who sees your notes"
          description="As a user, you control who sees your notes. Notes are private by default, 
          until you choose to share them with others. You can delete individual notes, or request 
          deletion of all your data at any time"
        />

        <SecurityFeature
          icon={<Lock className="w-6 h-6" />}
          title="Everything stored in industry standard, encrypted infrastructure"
          description="Notes are stored in our US-hosted AWS Virtual Private Cloud. They encrypted 
          at rest and in transit and are backed up daily. Granola is built and maintained by our 
          top-tier engineering team, who've built scalable infrastructure for companies like Apple, 
          Amazon, Google, and Meta."
        />

        <div className="pt-8">
          <h3 className="text-xl font-semibold text-emerald-900 mb-4">We're here if you need us</h3>
          <p className="text-gray-600">
            If you're curious about how we're handling your data, or have any questions, please 
            reach out to us at{' '}
            <a href="mailto:sales@granola.so" className="text-emerald-600 hover:underline">
              sales@granola.so
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const SecurityFeature = ({ icon, title, description }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div>
    <div className="flex items-center gap-3 mb-2">
      <div className="text-emerald-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-emerald-900">{title}</h3>
    </div>
    <p className="text-gray-600 ml-9">{description}</p>
  </div>
);

export default SecuritySection;