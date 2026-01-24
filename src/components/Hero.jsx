"use client";

import Link from "next/link";

// 10 abstract company logos as SVG components - larger size
const logos = [
  // Logo 1 - Hexagon Tech
  <svg key="1" viewBox="0 0 140 50" className="h-12 sm:h-14 w-auto">
    <path d="M25 5L45 15V35L25 45L5 35V15L25 5Z" fill="#10B981" opacity="0.8"/>
    <text x="52" y="32" fill="#9CA3AF" fontFamily="system-ui" fontSize="16" fontWeight="600">HEXTECH</text>
  </svg>,
  // Logo 2 - Circle Wave
  <svg key="2" viewBox="0 0 130 50" className="h-12 sm:h-14 w-auto">
    <circle cx="25" cy="25" r="16" fill="none" stroke="#14B8A6" strokeWidth="3"/>
    <path d="M17 25 Q25 15 33 25 Q25 35 17 25" fill="#14B8A6"/>
    <text x="48" y="32" fill="#9CA3AF" fontFamily="system-ui" fontSize="16" fontWeight="600">WAVE</text>
  </svg>,
  // Logo 3 - Stack Blocks
  <svg key="3" viewBox="0 0 150 50" className="h-12 sm:h-14 w-auto">
    <rect x="5" y="10" width="16" height="16" fill="#10B981" opacity="0.6"/>
    <rect x="14" y="18" width="16" height="16" fill="#14B8A6" opacity="0.8"/>
    <rect x="23" y="26" width="16" height="16" fill="#10B981"/>
    <text x="48" y="32" fill="#9CA3AF" fontFamily="system-ui" fontSize="16" fontWeight="600">STACKIFY</text>
  </svg>,
  // Logo 4 - Diamond
  <svg key="4" viewBox="0 0 130 50" className="h-12 sm:h-14 w-auto">
    <path d="M25 5L40 25L25 45L10 25Z" fill="#0D9488"/>
    <path d="M25 12L35 25L25 38L15 25Z" fill="#14B8A6"/>
    <text x="48" y="32" fill="#9CA3AF" fontFamily="system-ui" fontSize="16" fontWeight="600">PRISM</text>
  </svg>,
  // Logo 5 - Pulse
  <svg key="5" viewBox="0 0 130 50" className="h-12 sm:h-14 w-auto">
    <path d="M5 25 L15 25 L20 8 L28 42 L36 15 L42 25 L50 25" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round"/>
    <text x="56" y="32" fill="#9CA3AF" fontFamily="system-ui" fontSize="16" fontWeight="600">PULSE</text>
  </svg>,
  // Logo 6 - Cube 3D
  <svg key="6" viewBox="0 0 130 50" className="h-12 sm:h-14 w-auto">
    <path d="M25 8L42 17V33L25 42L8 33V17Z" fill="#14B8A6" opacity="0.4"/>
    <path d="M25 8L42 17L25 25L8 17Z" fill="#10B981"/>
    <path d="M25 25L42 17V33L25 42Z" fill="#0D9488"/>
    <text x="50" y="32" fill="#9CA3AF" fontFamily="system-ui" fontSize="16" fontWeight="600">CUBIX</text>
  </svg>,
  // Logo 7 - Arc
  <svg key="7" viewBox="0 0 120 50" className="h-12 sm:h-14 w-auto">
    <path d="M8 38 Q25 2 42 38" fill="none" stroke="#10B981" strokeWidth="5" strokeLinecap="round"/>
    <circle cx="25" cy="32" r="6" fill="#14B8A6"/>
    <text x="50" y="32" fill="#9CA3AF" fontFamily="system-ui" fontSize="16" fontWeight="600">ARCO</text>
  </svg>,
  // Logo 8 - Triangles
  <svg key="8" viewBox="0 0 140 50" className="h-12 sm:h-14 w-auto">
    <path d="M10 40L25 10L40 40Z" fill="#10B981" opacity="0.6"/>
    <path d="M18 40L33 15L48 40Z" fill="#14B8A6"/>
    <text x="55" y="32" fill="#9CA3AF" fontFamily="system-ui" fontSize="16" fontWeight="600">VERTEX</text>
  </svg>,
  // Logo 9 - Dots Grid
  <svg key="9" viewBox="0 0 130 50" className="h-12 sm:h-14 w-auto">
    <circle cx="12" cy="15" r="6" fill="#10B981"/>
    <circle cx="28" cy="15" r="6" fill="#14B8A6" opacity="0.7"/>
    <circle cx="12" cy="35" r="6" fill="#14B8A6" opacity="0.7"/>
    <circle cx="28" cy="35" r="6" fill="#10B981"/>
    <text x="42" y="32" fill="#9CA3AF" fontFamily="system-ui" fontSize="16" fontWeight="600">GRIDLY</text>
  </svg>,
  // Logo 10 - Infinity
  <svg key="10" viewBox="0 0 150 50" className="h-12 sm:h-14 w-auto">
    <path d="M12 25 C12 15 22 15 28 25 C34 35 44 35 44 25 C44 15 34 15 28 25 C22 35 12 35 12 25" fill="none" stroke="#10B981" strokeWidth="4"/>
    <text x="54" y="32" fill="#9CA3AF" fontFamily="system-ui" fontSize="16" fontWeight="600">INFINIX</text>
  </svg>,
];

const Hero = () => {
  const stats = [
    { value: "500+", label: "Active Businesses" },
    { value: "10K+", label: "Monthly Visitors" },
    { value: "4.9", label: "Average Rating", hasIcon: true },
    { value: "15+", label: "Categories" },
  ];

  return (
    <section className="bg-[#0f1419] min-h-[calc(100vh-64px)] relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-20 left-[20%] w-1.5 h-1.5 bg-emerald-500 rounded-full opacity-60"></div>
      <div className="absolute top-40 left-[35%] w-1 h-1 bg-teal-500 rounded-full opacity-40"></div>
      <div className="absolute bottom-32 left-[15%] w-1.5 h-1.5 bg-emerald-500 rounded-full opacity-50"></div>
      <div className="absolute top-[60%] right-[30%] w-1 h-1 bg-emerald-500 rounded-full opacity-40"></div>
      <div className="absolute bottom-20 right-[25%] w-1.5 h-1.5 bg-teal-500 rounded-full opacity-50"></div>
      <div className="absolute top-32 right-[15%] w-1 h-1 bg-emerald-400 rounded-full opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-[#1a2332]/50 mb-6 sm:mb-8">
              <svg
                className="w-4 h-4 text-emerald-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
              </svg>
              <span className="text-emerald-500 text-sm font-medium">
                Rhine Valley's Digital Hub
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-white block">Connect .</span>
              <span className="text-white block">Discover.</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400 block">
                Grow Together.
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8">
              The ultimate platform connecting local businesses with their community
              in the Rhine Valley region.
              <br />
              Find and support businesses near you.
            </p>

            {/* CTA Button */}
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg text-base font-medium transition-all hover:gap-3"
            >
              Get Started
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="flex-shrink-0 w-full sm:w-auto">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-xs sm:max-w-sm mx-auto lg:mx-0">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-[#1a2332] border border-gray-700/50 rounded-xl p-4 sm:p-6 text-center hover:border-teal-500/50 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-400 mb-1">
                    {stat.value}
                    {stat.hasIcon && (
                      <span className="text-yellow-400 ml-1">★</span>
                    )}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Partners Logo Strip - Animated */}
      <div className="border-t border-gray-800/50">
        <div className="py-8 sm:py-12 overflow-hidden">
          {/* Row 1 - First 5 logos moving LEFT to RIGHT */}
          <div className="relative mb-8">
            <div className="flex animate-scroll-right-hero">
              {/* Triple the logos for seamless loop */}
              {[...logos.slice(0, 5), ...logos.slice(0, 5), ...logos.slice(0, 5)].map((logo, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 mx-10 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Remaining 5 logos moving RIGHT to LEFT */}
          <div className="relative">
            <div className="flex animate-scroll-left-hero">
              {[...logos.slice(5, 10), ...logos.slice(5, 10), ...logos.slice(5, 10)].map((logo, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 mx-10 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scroll-right-hero {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes scroll-left-hero {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll-right-hero {
          animation: scroll-right-hero 25s linear infinite;
        }

        .animate-scroll-left-hero {
          animation: scroll-left-hero 22s linear infinite;
        }

        .animate-scroll-right-hero:hover,
        .animate-scroll-left-hero:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Hero;
