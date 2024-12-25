// app/layout.tsx
import '../../app/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Language Learning App',
  description: 'Learn any language naturally through AI-powered conversations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="flex flex-col min-h-screen w-screen overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden flex-1 w-screen antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}