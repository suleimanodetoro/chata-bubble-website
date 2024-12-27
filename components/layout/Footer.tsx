// components/layout/Footer.tsx

"use client"; // Ensure client-side rendering for dynamic QR code generation

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import QRCode from 'qrcode';

const Footer = () => {
  // 1) Detect user agent
  const [isIos, setIsIos] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  // 2) Store generated QR codes as base64 data URLs
  const [iosQR, setIosQR] = useState<string>('');
  const [androidQR, setAndroidQR] = useState<string>('');

  // 3) Your store links (replace these with real links)
  const iOSLink = 'https://apps.apple.com/your-ios-link';
  const androidLink = 'https://play.google.com/store/apps/details?id=your-android-link';

  // 4) Detect platform in a client-side effect
  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setIsIos(true);
    } else if (/android/.test(userAgent)) {
      setIsAndroid(true);
    }
  }, []);

  // 5) Generate the two QR codes in a client-side effect
  useEffect(() => {
    const generateQRCodes = async () => {
      try {
        const iosQRDataUrl = await QRCode.toDataURL(iOSLink);
        const androidQRDataUrl = await QRCode.toDataURL(androidLink);

        setIosQR(iosQRDataUrl);
        setAndroidQR(androidQRDataUrl);
      } catch (err) {
        console.error('Failed to generate QR codes:', err);
      }
    };

    generateQRCodes();
  }, [iOSLink, androidLink]);

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
      </section>

      {/* QR Section: dynamic generation + device detection */}
      <section className="flex flex-col items-center gap-6"> {/* Increased gap for better spacing */}
        {/* iOS only */}
        {isIos && iosQR && (
          <div className="flex flex-col items-center">
            <p className="text-sm">Scan this QR Code to get the iOS app:</p>
            <Link href={iOSLink} target="_blank" rel="noopener noreferrer" className="mt-4">
              <img
                src={iosQR}
                alt="iOS QR Code"
                className="w-64 h-64 object-contain mb-4" // Consistent size and spacing below
              />
            </Link>
          </div>
        )}

        {/* Android only */}
        {isAndroid && androidQR && (
          <div className="flex flex-col items-center">
            <p className="text-sm">Scan this QR Code to get the Android app:</p>
            <Link href={androidLink} target="_blank" rel="noopener noreferrer" className="mt-4">
              <img
                src={androidQR}
                alt="Android QR Code"
                className="w-64 h-64 object-contain mb-4" // Consistent size and spacing below
              />
            </Link>
          </div>
        )}

        {/* Desktop or undetected device => show side-by-side buttons */}
        {!isIos && !isAndroid && (
          <div className="flex flex-row gap-6 items-center">
            {/* App Store Button */}
            <Link href={iOSLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-48 h-16 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-colors">
              <img
                src="/app-store.svg"
                alt="Download on the App Store"
                className="w-32 h-auto"
              />
            </Link>

            {/* Play Store Button */}
            <Link href={androidLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-48 h-16 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-colors">
              <img
                src="/play-store.png"
                alt="Get it on Google Play"
                className="w-32 h-auto"
              />
            </Link>
          </div>
        )}
      </section>

      {/* Main Footer */}
      <div className="flex gap-4 items-center mx-auto w-full max-w-7xl text-secondary">
        {/* Logo */}
        <svg width="48" height="48" viewBox="0 0 1024 1024" fill="none" className="-ml-2.5 w-12 h-12">
          <path d="M0 0h40v40H0z" className="fill-emerald-700" />
        </svg>

        <div className="flex-1" />

        {/* Primary Links */}
        <Link 
          href="/contact"
          className="underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4"
        >
          Contact us
        </Link>
        <Link 
          href="/security"
          className="underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4"
        >
          Privacy & Security
        </Link>
        <Link 
          href="/jobs"
          className="underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4"
        >
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
        <Link 
          href="https://go.granola.so/privacy"
          className="underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4"
        >
          Privacy Policy
        </Link>
        <Link 
          href="/policies"
          className="underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4"
        >
          Terms of Service
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
