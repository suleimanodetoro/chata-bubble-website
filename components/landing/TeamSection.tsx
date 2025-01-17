// components/landing/TeamSection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TeamSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-emerald-900">Behind Chata Bubble</h2>
          <p className="text-gray-600">
            Chata Bubble is created and led by a solo founder from Nigeria.
            I&#39;m currently not hiring—but I&#39;m always open to connecting with
            like-minded folks who share a passion for languages and culture.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 overflow-hidden rounded-full relative">
            <Image
              src="/images/suleiman.JPG"
              alt="Suleiman Odetoro"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 64px, 64px"
              priority
            />
          </div>
          <div>
            <h3 className="font-medium text-emerald-900">Suleiman Odetoro</h3>
            <p className="text-gray-600 text-sm">Founder</p>
            <div className="flex gap-2 mt-1">
              <Link href="https://twitter.com/yourhandle" className="text-gray-500 hover:text-gray-700">
                𝕏
              </Link>
              <Link href="https://linkedin.com/in/yourhandle" className="text-gray-500 hover:text-gray-700">
                in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;