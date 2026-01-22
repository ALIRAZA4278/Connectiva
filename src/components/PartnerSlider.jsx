"use client";

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

// Second row partners (can be different or shuffled)
const partnersRow2 = [
  {
    id: 12,
    name: "Rhine Valley Tech",
    logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&q=80",
    package: "Premium",
    href: "/companies/12",
  },
  {
    id: 13,
    name: "Swiss Digital Agency",
    logo: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=200&q=80",
    package: "Platinum",
    href: "/companies/13",
  },
  {
    id: 14,
    name: "Alpine Consulting",
    logo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=200&q=80",
    package: "Premium",
    href: "/companies/14",
  },
  {
    id: 15,
    name: "Graubünden Finance",
    logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&q=80",
    package: "Platinum",
    href: "/companies/15",
  },
  {
    id: 16,
    name: "Swiss Healthcare",
    logo: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=200&q=80",
    package: "Premium",
    href: "/companies/16",
  },
  {
    id: 17,
    name: "Rhine Logistics",
    logo: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=200&q=80",
    package: "Premium",
    href: "/companies/17",
  },
  {
    id: 18,
    name: "Alpine Media Group",
    logo: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=200&q=80",
    package: "Platinum",
    href: "/companies/18",
  },
  {
    id: 19,
    name: "Swiss Education Hub",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&q=80",
    package: "Premium",
    href: "/companies/19",
  },
];

const PartnerSlider = () => {
  return (
    <section className="bg-[#0f1419] py-12 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">
              Our Partners
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Trusted by Leading Businesses
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join our growing network of Premium and Platinum partners in the Rhine Valley
          </p>
        </div>
      </div>

      {/* Row 1 - Scrolls Left */}
      <div className="relative mb-4">
        <div className="flex animate-scroll-left">
          {/* First set */}
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <Link
              key={`row1-${partner.id}-${index}`}
              href={partner.href}
              className="flex-shrink-0 mx-3 group"
            >
              <div className="bg-[#1a2332] rounded-xl p-4 h-20 w-40 flex items-center justify-center relative overflow-hidden group-hover:bg-[#2a3a4a] transition-colors border border-gray-700/50">
                {partner.package === "Platinum" && (
                  <div className="absolute top-1 right-1">
                    <div className="w-2 h-2 bg-gradient-to-r from-lime-500 to-cyan-500 rounded-full" />
                  </div>
                )}
                <div className="relative w-12 h-12 grayscale group-hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
              <p className="text-center text-xs text-gray-500 mt-2 truncate group-hover:text-emerald-400 transition-colors w-40">
                {partner.name}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Row 2 - Scrolls Right */}
      <div className="relative">
        <div className="flex animate-scroll-right">
          {/* Second set */}
          {[...partnersRow2, ...partnersRow2, ...partnersRow2].map((partner, index) => (
            <Link
              key={`row2-${partner.id}-${index}`}
              href={partner.href}
              className="flex-shrink-0 mx-3 group"
            >
              <div className="bg-[#1a2332] rounded-xl p-4 h-20 w-40 flex items-center justify-center relative overflow-hidden group-hover:bg-[#2a3a4a] transition-colors border border-gray-700/50">
                {partner.package === "Platinum" && (
                  <div className="absolute top-1 right-1">
                    <div className="w-2 h-2 bg-gradient-to-r from-lime-500 to-cyan-500 rounded-full" />
                  </div>
                )}
                <div className="relative w-12 h-12 grayscale group-hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
              <p className="text-center text-xs text-gray-500 mt-2 truncate group-hover:text-emerald-400 transition-colors w-40">
                {partner.name}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
        >
          Become a Partner
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* CSS Animation Styles */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PartnerSlider;
