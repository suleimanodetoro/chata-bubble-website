// components/layout/Navbar.tsx
import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-col items-end fixed top-0 inset-x-0 z-50 p-2 h-14 md:my-2 md:rounded-full border-0 md:border-0.5 backdrop-blur-lg md:top-6 md:left-1/2 md:right-auto md:-translate-x-1/2 text-primary md:shadow-sm md:bg-white/60">
      <div className="flex gap-2 justify-between items-center w-full md:gap-px">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 mr-3 ml-3">
          <svg
            viewBox="0 0 299 105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-7"
          >
            <path d="M0 0h40v40H0z" className="fill-emerald-700" />
          </svg>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-1">
          <Link
            href="/pricing"
            className="hidden select-none px-3 md:flex group items-center font-medium transition-all py-1.5 rounded-full border flex-none hover:bg-black/5 border-transparent text-gray-500"
          >
            Pricing
          </Link>
          {/* <Link 
            href="/news" 
            className="hidden select-none px-3 md:flex group items-center font-medium transition-all py-1.5 rounded-full border flex-none hover:bg-black/5 border-transparent text-gray-500"
          >
            News
          </Link>
          */}
          <Link
            href="/careers"
            className="hidden select-none px-3 md:flex group items-center font-medium transition-all py-1.5 rounded-full border flex-none hover:bg-black/5 border-transparent text-gray-500"
          >
            Careers
          </Link>
        </div>

        {/* Download Button */}
        <Link
          href="/download"
          className="select-none flex items-center font-medium transition-all py-1.5 rounded-full border flex-none px-3 border-black/5 hover:bg-black/5"
        >
          Download
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
