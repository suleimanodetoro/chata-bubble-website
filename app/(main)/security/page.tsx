import PolicyLinks from '@/components/landing/PolicyLinks';
import SecuritySection from '@/components/landing/SecuritySection';

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-white">
      <SecuritySection />
      <PolicyLinks />

    </main>
  );
}