// app/(main)/jobs/page.tsx
import HeroSection from '@/components/landing/CareersHeroSection';
import ValuesSection from '@/components/landing/ValueSection';

import MomentumSection from '@/components/landing/MomentumSection';
import TeamSection from '@/components/landing/TeamSection';

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-white">
      <HeroSection />
      <ValuesSection />
      <TeamSection />
      <MomentumSection />
    </main>
  );
}