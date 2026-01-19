"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Companies", href: "/companies" },
    { name: "Categories", href: "#", hasDropdown: true },
    { name: "Pricing", href: "/pricing" },
    { name: "News", href: "/news" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const categoryLinks = [
    { name: "Jobs", href: "/jobs", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )},
    { name: "Real Estate", href: "/real-estate", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )},
    { name: "Cars", href: "/cars", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    )},
    { name: "Community Requests", href: "/browse-requests", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    )},
  ];

  // Check if current path matches the link or starts with it (for nested routes)
  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  // Check if any category link is active
  const isCategoryActive = categoryLinks.some(cat => isActive(cat.href));

  return (
    <nav className="bg-[#1a2332] border-b-2 border-emerald-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="connectiva"
                width={180}
                height={45}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setIsCategoriesOpen(true)}
                  onMouseLeave={() => setIsCategoriesOpen(false)}
                >
                  <button
                    className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                      isCategoryActive
                        ? "text-emerald-500"
                        : "text-gray-300 hover:text-emerald-500"
                    }`}
                  >
                    {link.name}
                    <svg className={`w-4 h-4 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {isCategoriesOpen && (
                    <div className="absolute top-full left-0 mt-0 w-56 bg-[#1a2332] border border-gray-700 rounded-lg shadow-xl py-2 z-50">
                      {categoryLinks.map((category) => (
                        <Link
                          key={category.name}
                          href={category.href}
                          className={`flex items-center gap-3 px-4 py-2.5 transition-colors ${
                            isActive(category.href)
                              ? "text-emerald-500 bg-[#2a3a4a]"
                              : "text-gray-300 hover:text-emerald-500 hover:bg-[#2a3a4a]"
                          }`}
                        >
                          <span className="text-emerald-500">{category.icon}</span>
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-emerald-500"
                      : "text-gray-300 hover:text-emerald-500"
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              href="/get-started"
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                isActive("/get-started")
                  ? "bg-emerald-600 text-white"
                  : "bg-emerald-500 hover:bg-emerald-600 text-white"
              }`}
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
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.name}>
                  <button
                    onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                    className={`flex items-center justify-between w-full px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      isCategoryActive
                        ? "text-emerald-500 bg-[#2a3a4a]"
                        : "text-gray-300 hover:text-emerald-500 hover:bg-[#2a3a4a]"
                    }`}
                  >
                    {link.name}
                    <svg className={`w-4 h-4 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isCategoriesOpen && (
                    <div className="pl-4 mt-1 space-y-1">
                      {categoryLinks.map((category) => (
                        <Link
                          key={category.name}
                          href={category.href}
                          className={`flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors ${
                            isActive(category.href)
                              ? "text-emerald-500 bg-[#2a3a4a]"
                              : "text-gray-400 hover:text-emerald-500 hover:bg-[#2a3a4a]"
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="text-emerald-500">{category.icon}</span>
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    isActive(link.href)
                      ? "text-emerald-500 bg-[#2a3a4a]"
                      : "text-gray-300 hover:text-emerald-500 hover:bg-[#2a3a4a]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Link
              href="/get-started"
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
