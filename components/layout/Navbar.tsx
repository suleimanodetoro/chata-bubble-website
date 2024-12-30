// Navbar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownloadClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const downloadSection = document.getElementById("download-section");
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: 'Pricing', href: '/pricing' },
    { label: 'Careers', href: '/jobs' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy & Terms', href: '/security' },
  ];

  return (
    <>
      <nav className="flex flex-col items-end fixed top-0 inset-x-0 z-50 p-2 h-14 md:my-2 md:rounded-full border-0 md:border-0.5 backdrop-blur-lg md:top-6 md:left-1/2 md:right-auto md:-translate-x-1/2 text-primary md:shadow-sm md:bg-white/60">
        <div className="flex gap-2 justify-between items-center w-full md:gap-px">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 mr-3 ml-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-700" />
              <span className="font-bold text-xl tracking-tight text-emerald-900">ChataBubble</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.slice(0, 3).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hidden select-none px-3 md:flex group items-center font-medium transition-all py-1.5 rounded-full border flex-none hover:bg-black/5 border-transparent text-gray-500"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {!isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>

          {/* Download Button */}
          <div
            onClick={handleDownloadClick}
            className="cursor-pointer select-none hidden md:flex items-center font-medium transition-all py-1.5 rounded-full border flex-none px-3 border-black/5 hover:bg-black/5"
          >
            Download
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-neutral-50 flex flex-col pt-20 px-8">
          <div className="flex flex-col space-y-12">
            {menuItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-medium text-gray-600 hover:text-emerald-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div
              onClick={handleDownloadClick}
              className="text-4xl font-medium text-gray-600 hover:text-emerald-900 transition-colors cursor-pointer"
            >
              Download
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;