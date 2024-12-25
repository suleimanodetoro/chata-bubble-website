// app/(main)/page.tsx
import HeroSection from '@/components/landing/HeroSection';
import HowItWorks from '@/components/landing/HowItWorks';
import LogoCarousel from '@/components/landing/LogoCarousel';
import TweetGrid from '@/components/landing/TweetGrid';



export default function Home() {
  return (
    <main className="flex-1 w-full lg:mx-auto">
      <div className="flex flex-col items-center py-0 text-primary">
        <HeroSection />
        <LogoCarousel />
        <HowItWorks />
        <TweetGrid />
        {/* Other sections will be added here */}
      </div>
    </main>
  );
}