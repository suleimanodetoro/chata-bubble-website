// chata_bubble_website/components/layout/Footer.tsx
"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import QRCode from 'qrcode'; // Ensure qrcode is installed: npm install qrcode @types/qrcode

/**
 * Footer Component (iOS Only)
 * Includes CTA, download link/QR code for the App Store, and site navigation/info.
 */
const Footer = () => {
  // State for detecting iOS and storing the QR code
  const [isIos, setIsIos] = useState(false);
  const [iosQR, setIosQR] = useState<string>('');

  // App Store link
  const iOSLink = 'https://apps.apple.com/gb/app/chata-bubble/id6742192243';

  // Detect if the user is on an iOS device
  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setIsIos(true);
    }
  }, []);

  // Generate the iOS QR code when the component mounts
  useEffect(() => {
    const generateQRCode = async () => {
      // Ensure the link is valid before generating
      if (iOSLink && !iOSLink.includes('your-ios-link')) {
        try {
          const iosQRDataUrl = await QRCode.toDataURL(iOSLink, {
            errorCorrectionLevel: 'M',
            margin: 2,
            width: 256,
          });
          setIosQR(iosQRDataUrl);
        } catch (err) {
          console.error('Failed to generate QR code:', err);
        }
      } else {
        console.warn('QR Code generation skipped: A valid App Store link is not provided.');
      }
    };

    generateQRCode();
  }, [iOSLink]); // Re-run only if the iOSLink changes

  return (
    <footer className="px-6 lg:pt-8 pb-4 flex flex-col gap-8 w-full tracking-[0.01em] text-secondary mt-auto bg-neutral-50">
      {/* CTA Section */}
      <section className="flex overflow-visible relative flex-col items-center py-16 w-full sm:px-6 md:py-24 lg:py-20 lg:px-8 lg:max-w-6xl gap-8 justify-center px-0 mx-auto max-w-7xl text-xl text-center lg:gap-8">
        <div className="flex flex-col col-span-full gap-4 mx-auto max-w-2xl text-center lg:gap-8">
          <h1 className="text-3xl lg:text-5xl font-bold tracking-[-0.015em] leading-[0.95] text-balance text-emerald-900">
            Ready to learn languages the fun way?
          </h1>
          <p className="text-xl font-medium lg:text-2xl text-emerald-700">
            Give Chata Bubble a try—it&apos;s free to get started!
          </p>
        </div>
      </section>

      {/* Download Section (QR Code / Store Button) */}
      <section id="download-section" className="flex flex-col items-center gap-6">
        {/* If on iOS, show the QR code */}
        {isIos && iosQR && (
          <div className="flex flex-col items-center text-center">
            <p className="text-sm text-gray-600 mb-2">Scan to download from the App Store:</p>
            <Link href={iOSLink} target="_blank" rel="noopener noreferrer" className="mt-2 block">
              <Image src={iosQR} alt="iOS App Store QR Code" width={192} height={192} className="w-48 h-48 md:w-56 md:h-56 object-contain mb-4 border rounded-lg shadow-sm" />
            </Link>
          </div>
        )}
        {/* Fallback for Desktop or if QR code isn't ready */}
        {!isIos && (
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link href={iOSLink} target="_blank" rel="noopener noreferrer" className="block w-40 h-auto sm:w-48 transition-transform hover:scale-105">
              <Image src="/app-store.svg" alt="Download on the App Store" width={160} height={54} className="w-full h-full object-contain" />
            </Link>
          </div>
        )}
      </section>

      {/* Footer Bottom Section */}
      <div className="flex flex-col gap-4 items-center mx-auto w-full max-w-7xl text-secondary pt-8 border-t border-gray-200">
        {/* Logo Placeholder */}
        <svg width="32" height="32" viewBox="0 0 1024 1024" fill="none" className="w-8 h-8 text-emerald-700">
          <path d="M512 0C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0zm0 947.2c-240.5 0-435.2-194.7-435.2-435.2S271.5 76.8 512 76.8s435.2 194.7 435.2 435.2S752.5 947.2 512 947.2z" fill="currentColor"/>
          <path d="M682.7 341.3c-99.5-99.5-260.8-99.5-360.3 0-99.5 99.5-99.5 260.8 0 360.3 99.5 99.5 260.8 99.5 360.3 0 99.5-99.4 99.5-260.8 0-360.3zM512 614.4c-56.6 0-102.4-45.8-102.4-102.4S455.4 409.6 512 409.6s102.4 45.8 102.4 102.4S568.6 614.4 512 614.4z" fill="currentColor"/>
        </svg>

        <div className="flex flex-col items-center gap-4 w-full text-sm text-gray-500 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-2 md:flex-row md:items-center md:gap-4">
            <p>&copy; ChataBubble {new Date().getFullYear()}</p>
            <p className="hidden md:block">|</p>
            <p>Made with ♥︎ by BytesandCode Initiative, Nigeria</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-end">
            <Link href="/contact" className="hover:text-emerald-700 hover:underline underline-offset-2">
              Contact us
            </Link>
            <Link href="/privacy-policy" className="hover:text-emerald-700 hover:underline underline-offset-2">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-emerald-700 hover:underline underline-offset-2">
              Terms of Service
            </Link>
            <Link href="/jobs" className="hover:text-emerald-700 hover:underline underline-offset-2">
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
