"use client";

import Image from "next/image";
import Link from "next/link";

// Company of the Week data - will come from backend/admin panel
const companyOfTheWeek = {
  id: 1,
  name: "Alpine Tech Solutions",
  category: "Technology",
  location: "Chur",
  description: "Leading IT services and software development company in the Rhine Valley. We provide innovative solutions for businesses of all sizes, specializing in web development, mobile apps, cloud services, and IT consulting.",
  image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
  rating: 4.8,
  reviews: 124,
  package: "Platinum",
  highlights: [
    "15+ Years Experience",
    "50+ Team Members",
    "200+ Projects Completed",
  ],
  href: "/companies/1",
};

const CompanyOfTheWeek = () => {
  return (
    <section className="bg-gradient-to-br from-[#0f1419] to-[#1a2332] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-lime-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full px-4 py-1.5 mb-4">
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">
              Company of the Week
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            <span className="text-white">Featured </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400">
              Business
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our highlighted partner making waves in the Rhine Valley business community
          </p>
        </div>

        {/* Featured Company Card */}
        <div className="bg-[#1a2332] border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="lg:w-1/2 relative">
              <div className="relative h-64 lg:h-full min-h-[300px]">
                <Image
                  src={companyOfTheWeek.image}
                  alt={companyOfTheWeek.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a2332]/80 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332] to-transparent lg:hidden" />
              </div>

              {/* Package Badge */}
              <div className="absolute top-4 left-4">
                <div className="bg-gradient-to-r from-lime-500 via-emerald-500 to-cyan-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {companyOfTheWeek.package}
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              {/* Company Logo & Name */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0">
                  <Image
                    src={companyOfTheWeek.logo}
                    alt={companyOfTheWeek.name}
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {companyOfTheWeek.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {companyOfTheWeek.category} • {companyOfTheWeek.location}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(companyOfTheWeek.rating)
                          ? "text-yellow-400"
                          : "text-gray-600"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white font-semibold">{companyOfTheWeek.rating}</span>
                <span className="text-gray-500">({companyOfTheWeek.reviews} reviews)</span>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 line-clamp-3">
                {companyOfTheWeek.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-3 mb-6">
                {companyOfTheWeek.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm px-3 py-1.5 rounded-lg"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={companyOfTheWeek.href}
                  className="flex-1 bg-gradient-to-r from-lime-500 via-emerald-500 to-cyan-500 hover:from-lime-600 hover:via-emerald-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-all text-center flex items-center justify-center gap-2"
                >
                  View Profile
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href={`${companyOfTheWeek.href}#contact`}
                  className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-lg font-medium transition-all text-center"
                >
                  Contact Business
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Why Featured */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Want your business featured?{" "}
            <Link href="/pricing" className="text-emerald-400 hover:text-emerald-300 font-medium">
              Upgrade to Business+ or higher
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyOfTheWeek;
