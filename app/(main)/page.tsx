"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import HeroSection from '@/components/landing/HeroSection';
import HowItWorks from '@/components/landing/HowItWorks';
import LogoCarousel from '@/components/landing/LogoCarousel';
import TweetGrid from '@/components/landing/TweetGrid';

export default function Page() {
  const pathname = usePathname();

  // Scroll to top when the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="flex-1 w-full lg:mx-auto">
      <div className="flex flex-col items-center py-0 text-primary">
        <HeroSection />
        <LogoCarousel />
        <HowItWorks />
        <TweetGrid />
        {/* Add more sections here if needed */}
      </div>
    </main>
  );
}
