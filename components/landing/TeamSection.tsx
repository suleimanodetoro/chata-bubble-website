import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedIn?: string;
  twitter?: string;
  github?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Chris',
    role: 'Cofounder & CEO',
    image: '/team/chris.jpg',
    twitter: '#',
    linkedIn: '#'
  },
  {
    name: 'Sam',
    role: 'Cofounder',
    image: '/team/sam.jpg',
    twitter: '#',
    linkedIn: '#',
    github: '#'
  },
  {
    name: 'Vas',
    role: 'CTO',
    image: '/team/vas.jpg',
    twitter: '#',
    linkedIn: '#'
  },
  {
    name: 'Jo',
    role: 'Chief of Staff & LLM Whisperer',
    image: '/team/jo.jpg',
    linkedIn: '#'
  },
  {
    name: 'Clementine',
    role: 'Operations lead',
    image: '/team/clementine.jpg',
    linkedIn: '#'
  },
  {
    name: 'Tom',
    role: 'Head of hiring',
    image: '/team/tom.jpg',
    linkedIn: '#'
  }
];

const TeamSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-emerald-900">The team</h2>
          <p className="text-gray-600">
            We're a friendly bunch with deep experience in product, design and engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex items-center gap-4">
              <Image
                src={`/api/placeholder/64/64`}
                alt={member.name}
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h3 className="font-medium text-emerald-900">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
                <div className="flex gap-2 mt-1">
                  {member.linkedIn && (
                    <Link href={member.linkedIn} className="text-gray-500 hover:text-gray-700">
                      in
                    </Link>
                  )}
                  {member.twitter && (
                    <Link href={member.twitter} className="text-gray-500 hover:text-gray-700">
                      𝕏
                    </Link>
                  )}
                  {member.github && (
                    <Link href={member.github} className="text-gray-500 hover:text-gray-700">
                      ⌘
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;