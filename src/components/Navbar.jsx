"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Companies", href: "/companies" },
    { name: "Categories", href: "/categories" },
    { name: "Pricing", href: "/pricing" },
    { name: "News", href: "/news" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-[#1a2332] border-b-2 border-emerald-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Rhy-Connect.ch"
                width={180}
                height={45}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  index === 0
                    ? "text-emerald-500 hover:text-emerald-400"
                    : "text-gray-300 hover:text-emerald-500"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              href="/list-business"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors"
            >
              List Your Business
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#1a2332] border-t border-gray-700">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  index === 0
                    ? "text-emerald-500 bg-[#2a3a4a]"
                    : "text-gray-300 hover:text-emerald-500 hover:bg-[#2a3a4a]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/list-business"
              className="block w-full text-center bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              List Your Business
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
