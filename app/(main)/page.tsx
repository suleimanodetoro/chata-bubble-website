// chata_bubble_website/app/(main)/page.tsx
"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Import required sections
import HeroSection from '@/components/landing/HeroSection';
import HowItWorks from '@/components/landing/HowItWorks';
import LogoCarousel from '@/components/landing/LogoCarousel';
import TweetGrid from '@/components/landing/TweetGrid';
// Removed import for TeamSection as it's no longer used

/**
 * Main Landing Page Component
 * Displays the primary sections of the landing page.
 */
export default function Page() {
  const pathname = usePathname();

  // Effect to scroll to the top when the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="flex-1 w-full lg:mx-auto">
      <div className="flex flex-col items-center py-0 text-primary">
        {/* Render landing page sections */}
        <HeroSection />
        <LogoCarousel />
        <HowItWorks />
        <TweetGrid />
        {/* <TeamSection /> was removed from here */}
        {/* Add more sections here if needed */}
      </div>
    </main>
  );
}
