// components/layout/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="px-6 lg:pt-8 pb-4 flex flex-col gap-8 w-full tracking-[0.01em] text-secondary mt-auto bg-neutral-50">
      {/* CTA Section */}
      <section className="flex overflow-visible relative flex-col items-center py-16 w-full sm:px-6 md:py-24 lg:py-20 lg:px-8 lg:max-w-6xl gap-8 justify-center px-0 mx-auto max-w-7xl text-xl text-center lg:gap-8">
        <div className="flex flex-col col-span-full gap-4 mx-auto max-w-2xl text-center lg:gap-8">
          <h1 className="text-3xl lg:text-5xl text-colored font-bold tracking-[-0.015em] leading-[0.95] text-balance">
            Ready for calmer, more productive meetings?
          </h1>
          <p className="text-xl font-medium lg:text-2xl text-colored-secondary">
            Try Granola for a few meetings today. It's free to get started
          </p>
        </div>
        
        {/* Download Button */}
        <div className="flex flex-col">
          <a 
            href="#" 
            className="flex-none bg-gradient-to-br justify-center flex gap-2 items-center from-emerald-400 to-emerald-500 transition-all hover:scale-[101%] transform-gpu text-white rounded-full focus:ring-2 focus:ring-emerald-400 font-medium focus:ring-offset-2 focus:outline-none text-base lg:text-xl shadow-sm group relative overflow-hidden duration-75 z-20 px-6 h-12 lg:h-14 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-transparent opacity-0 transition-all group-hover:opacity-50 to-white/10" />
            <span className="flex gap-3 items-center">
              Download Granola for Mac
            </span>
          </a>
        </div>
      </section>

      {/* Main Footer */}
      <div className="flex gap-4 items-center mx-auto w-full max-w-7xl text-secondary">
        {/* Logo */}
        <svg width="48" height="48" viewBox="0 0 1024 1024" fill="none" className="-ml-2.5 w-12 h-12">
          <path d="M0 0h40v40H0z" className="fill-emerald-700" />
        </svg>

        <div className="flex-1" />

        {/* Primary Links */}
        <Link href="/contact" className="underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4">
          Contact us
        </Link>
        <Link href="/security" className="underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4">
          Privacy & Security
        </Link>
        <Link href="/jobs" className="underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4">
          Careers
        </Link>

      </div>

      {/* Secondary Footer */}
      <div className="flex flex-col gap-2 items-end mx-auto w-full max-w-7xl md:items-center md:gap-4 md:flex-row text-tertiary">
        {/* Copyright */}
        <p>© ChataBubble {new Date().getFullYear()}</p>
        <p>Made with ♥︎ in Nigeria</p>
        
        <div className="flex-1" />
        
        {/* Legal Links */}
        <Link href="https://go.granola.so/privacy" className="underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4">
          Privacy Policy
        </Link>
        <Link href="/policies" className="underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4">
          Terms of Service
        </Link>

      </div>
    </footer>
  );
};

export default Footer;