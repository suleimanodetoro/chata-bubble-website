// chata_bubble_website/components/layout/Navbar.txt
"use client";

import React, { useState } from "react";
import Link from "next/link";

/**
 * Navbar Component
 * Provides navigation for the ChataBubble website.
 */
const Navbar: React.FC = () => {
  // State for managing mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll to download section and close menu
  const handleDownloadClick = (e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>) => {
    e.preventDefault();
    const downloadSection = document.getElementById("download-section");
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close menu after clicking
  };

  // Define menu items for navigation
  const menuItems = [
    { label: "Pricing", href: "/pricing" },
    { label: "Careers", href: "/jobs" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" }, // Added Privacy Policy
    { label: "Terms of Service", href: "/terms-of-service" }, // Added Terms of Service
  ];

  // Separate items for desktop vs mobile for layout control
  const desktopMenuItems = menuItems.slice(0, 3); // Pricing, Careers, Contact
  const legalMenuItems = menuItems.slice(3); // Privacy, Terms

  return (
    <>
      {/* Navigation Bar Container */}
      <nav className="flex flex-col items-end fixed top-0 inset-x-0 z-50 p-2 h-14 md:my-2 md:rounded-full border-0 md:border-0.5 backdrop-blur-lg md:top-6 md:left-1/2 md:right-auto md:-translate-x-1/2 text-primary md:shadow-sm md:bg-white/60">
        <div className="flex gap-2 justify-between items-center w-full md:gap-px">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 mr-3 ml-3" onClick={() => setIsMenuOpen(false)}>
            <div className="flex items-center gap-2">
              {/* Simple logo placeholder */}
              <div className="w-2 h-2 rounded-full bg-emerald-700" />
              <span className="font-bold text-xl tracking-tight text-emerald-900">
                ChataBubble
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Main links */}
            {desktopMenuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hidden select-none px-3 md:flex group items-center font-medium transition-all py-1.5 rounded-full border flex-none hover:bg-black/5 border-transparent text-gray-500"
              >
                {item.label}
              </Link>
            ))}
            {/* Legal links grouped */}
            <div className="relative group">
               <span className="hidden select-none px-3 md:flex items-center font-medium transition-all py-1.5 rounded-full border flex-none hover:bg-black/5 border-transparent text-gray-500 cursor-default">
                 Legal
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1 text-gray-400 group-hover:text-gray-600">
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
               </span>
               <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-1 py-1 border border-gray-200 w-40 right-0">
                 {legalMenuItems.map((item) => (
                   <Link
                     key={item.href}
                     href={item.href}
                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                   >
                     {item.label}
                   </Link>
                 ))}
               </div>
             </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {!isMenuOpen ? (
              // Hamburger Icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            ) : (
              // Close Icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>

          {/* Download Button (Desktop) */}
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
            {/* All menu items listed vertically */}
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
                className="text-4xl font-medium text-gray-600 hover:text-emerald-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            {/* Mobile Download Link */}
            <a
              href="#download-section"
              onClick={handleDownloadClick}
              className="text-4xl font-medium text-gray-600 hover:text-emerald-900 transition-colors cursor-pointer"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </>
  );
};

// Export the component
export default Navbar;
