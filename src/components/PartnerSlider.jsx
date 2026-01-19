"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Premium and Platinum partners data - will come from backend
const partners = [
  {
    id: 1,
    name: "Alpine Tech Solutions",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
    package: "Platinum",
    href: "/companies/1",
  },
  {
    id: 3,
    name: "Swiss Wellness Center",
    logo: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=200&q=80",
    package: "Platinum",
    href: "/companies/3",
  },
  {
    id: 7,
    name: "Swiss Legal Partners",
    logo: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=200&q=80",
    package: "Platinum",
    href: "/companies/7",
  },
  {
    id: 4,
    name: "Berg Construction AG",
    logo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200&q=80",
    package: "Premium",
    href: "/companies/4",
  },
  {
    id: 6,
    name: "Alpen Fitness Studio",
    logo: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&q=80",
    package: "Premium",
    href: "/companies/6",
  },
  {
    id: 9,
    name: "Rheintal Motors",
    logo: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=200&q=80",
    package: "Premium",
    href: "/companies/9",
  },
  {
    id: 10,
    name: "Graubünden Gastro",
    logo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200&q=80",
    package: "Premium",
    href: "/companies/10",
  },
  {
    id: 11,
    name: "Churer Handwerk",
    logo: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=200&q=80",
    package: "Premium",
    href: "/companies/11",
  },
];

const PartnerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Number of visible items based on screen size (handled via CSS)
  const itemsPerView = 6;
  const totalSlides = Math.ceil(partners.length / itemsPerView);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="bg-white py-12 sm:py-16 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-emerald-600 text-sm font-semibold uppercase tracking-wider">
              Our Partners
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Trusted by Leading Businesses
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Join our growing network of Premium and Platinum partners in the Rhine Valley
          </p>
        </div>

        {/* Partner Logos Slider */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex % partners.length) * (100 / itemsPerView)}%)`,
            }}
          >
            {/* Duplicate partners for infinite scroll effect */}
            {[...partners, ...partners].map((partner, index) => (
              <Link
                key={`${partner.id}-${index}`}
                href={partner.href}
                className="flex-shrink-0 w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-3 group"
              >
                <div className="bg-gray-50 rounded-xl p-4 h-24 flex items-center justify-center relative overflow-hidden group-hover:bg-gray-100 transition-colors">
                  {/* Package indicator */}
                  {partner.package === "Platinum" && (
                    <div className="absolute top-1 right-1">
                      <div className="w-2 h-2 bg-gradient-to-r from-lime-500 to-cyan-500 rounded-full" />
                    </div>
                  )}
                  <div className="relative w-16 h-16 grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
                <p className="text-center text-xs text-gray-500 mt-2 truncate group-hover:text-emerald-600 transition-colors">
                  {partner.name}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: Math.min(partners.length, 8) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex % partners.length
                  ? "bg-emerald-500 w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
          >
            Become a Partner
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnerSlider;
