"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingBanner from "@/components/PricingBanner";

const categories = [
  "All Categories",
  "Health",
  "Craft",
  "Construction",
  "Real Estate & Living",
  "Vehicles & Mobility",
  "Education & Courses",
  "Services",
  "Fashion & Lifestyle",
  "Household",
  "Everyday Life",
  "Animals",
  "Agriculture",
  "Associations",
  "Public Services",
];

const locations = [
  "All Locations",
  "Chur",
  "Bad Ragaz",
  "Landquart",
  "Maienfeld",
  "Davos",
  "St. Moritz",
  "St. Gallen",
  "Arosa",
];

// Top Categories / Industries with images
const topCategories = [
  { name: "Health", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80", href: "/companies/category/health" },
  { name: "Craft", image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&q=80", href: "/companies/category/craft" },
  { name: "Construction", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80", href: "/companies/category/construction" },
  { name: "Real Estate & Living", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80", href: "/companies/category/real-estate" },
  { name: "Vehicles & Mobility", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&q=80", href: "/companies/category/vehicles" },
  { name: "Education & Courses", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80", href: "/companies/category/education" },
  { name: "Services", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80", href: "/companies/category/services" },
  { name: "Fashion & Lifestyle", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80", href: "/companies/category/fashion" },
  { name: "Household", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80", href: "/companies/category/household" },
  { name: "Everyday Life", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80", href: "/companies/category/everyday" },
  { name: "Animals", image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80", href: "/companies/category/animals" },
  { name: "Agriculture", image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&q=80", href: "/companies/category/agriculture" },
  { name: "Associations", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80", href: "/companies/category/associations" },
  { name: "Public Services", image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=400&q=80", href: "/companies/category/public" },
  { name: "Other", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80", href: "/companies/category/other" },
];

// Top recommended businesses (Business+, Premium, Platinum)
const recommendedBusinesses = [
  { id: 1, name: "Bärlocher Bau AG", subtitle: "Bauunternehmen · Umba...", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80", rating: 5.0 },
  { id: 2, name: "Hörler Tiefbau AG", subtitle: "Bauunternehmen · Aushu...", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80", rating: 5.0, isLogo: true, logoText: "HT", logoBg: "bg-red-500" },
  { id: 3, name: "STUTZ AG", subtitle: "Hochbau Tiefbau · Rückb...", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80", rating: 5.0, isLogo: true, logoText: "STUTZ", logoBg: "bg-white" },
  { id: 4, name: "AZ Armierungen AG", subtitle: "Armierungen · Bauuntern...", image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=400&q=80", rating: 5.0 },
  { id: 5, name: "STUTZ AG Projekte +", subtitle: "Projektmanagement · Bau...", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80", rating: 5.0, isLogo: true, logoText: "STUTZ", logoBg: "bg-white" },
  { id: 6, name: "Zulian + Co. AG", subtitle: "Bauunternehmen · Renov...", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80", rating: 4.8 },
  { id: 7, name: "WILLI Bauunternehmung", subtitle: "Bauunternehmen", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80", rating: 5.0 },
  { id: 8, name: "E-K Bauunternehmung GmbH", subtitle: "", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80", rating: 5.0 },
  { id: 9, name: "Koch AG, Strassen- & Tiefbau, Kies & Beton", subtitle: "", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80", rating: 5.0, isLogo: true, logoText: "KOCH", logoBg: "bg-red-600" },
  { id: 10, name: "I+ Konzeptbau GmbH", subtitle: "", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80", rating: 5.0 },
  { id: 11, name: "Bernhard Frei AG", subtitle: "", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80", rating: 5.0 },
  { id: 12, name: "Ivo Stark Tiefbau", subtitle: "", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80", rating: 5.0 },
  { id: 13, name: "A. Müller AG - Bauunternehmung", subtitle: "", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80", rating: 5.0 },
  { id: 14, name: "Scherrer Bauunternehmen", subtitle: "", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80", rating: 5.0 },
];

export default function CompaniesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [searchQuery, setSearchQuery] = useState("");
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  const scrollRow = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 400;
      ref.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="bg-[#0f1419] py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-emerald-500 text-sm font-semibold uppercase tracking-wider">
                DIRECTORY
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
                <span className="text-white">Browse </span>
                <span className="text-emerald-400">Companies</span>
              </h1>
              <p className="text-gray-400 text-base max-w-2xl mx-auto">
                Discover trusted local businesses in the Rhine Valley. Find the perfect partner for your needs.
              </p>
            </div>

            {/* Search & Filters */}
            <div className="mt-8 bg-[#1a2332] rounded-xl p-4 border border-gray-700/50">
              <div className="flex flex-col lg:flex-row gap-3">
                {/* Search Input */}
                <div className="flex-1 relative">
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search companies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-lg pl-12 pr-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                {/* Category Dropdown */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-emerald-500 text-white rounded-lg px-4 py-3 focus:outline-none cursor-pointer font-medium"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat} className="bg-white text-gray-700">{cat}</option>
                  ))}
                </select>

                {/* Location Dropdown */}
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="bg-emerald-500 text-white rounded-lg px-4 py-3 focus:outline-none cursor-pointer font-medium"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc} className="bg-white text-gray-700">{loc}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Top Categories / Industries Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
              <span className="text-gray-900">Top Categories / </span>
              <span className="text-emerald-500">Industries</span>
            </h2>

            {/* Categories Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {topCategories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="group relative rounded-xl overflow-hidden aspect-[4/3] hover:shadow-xl transition-all duration-300"
                >
                  {/* Background Image */}
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-emerald-600/80 transition-all duration-300" />

                  {/* Category Name */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-white font-semibold text-sm text-center drop-shadow-lg">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Top Recommended Business Section */}
        <section className="py-12 sm:py-16 bg-[#0f1419]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-emerald-500 mb-2">
              Top recommended business
            </h2>
            <p className="text-gray-400 text-center mb-10">
              logos of Business+, Premium and Platinum customers
            </p>

            {/* Business Slider */}
            <div className="relative">

              {/* Row 1 - Scrolling Left with Arrows */}
              <div className="relative mb-4">
                {/* Left Arrow Row 1 */}
                <button
                  onClick={() => scrollRow(row1Ref, 'left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-700 hover:bg-gray-600 rounded-full p-2 shadow-lg"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div ref={row1Ref} className="overflow-x-auto mx-10" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  <div className="flex">
                    {[...recommendedBusinesses.slice(0, 7), ...recommendedBusinesses.slice(0, 7)].map((business, index) => (
                      <Link
                        key={`row1-${index}`}
                        href={`/companies/${business.id}`}
                        className="flex-shrink-0 w-[180px] mx-2 bg-transparent hover:bg-white/5 rounded-lg transition-colors"
                      >
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-2">
                          {business.isLogo ? (
                            <div className={`w-full h-full ${business.logoBg} flex items-center justify-center`}>
                              <span className={`font-bold text-xl ${business.logoBg === "bg-white" ? "text-orange-500" : "text-white"}`}>
                                {business.logoText}
                              </span>
                            </div>
                          ) : (
                            <Image src={business.image} alt={business.name} fill className="object-cover" />
                          )}
                        </div>
                        <div className="flex items-start justify-between gap-1">
                          <div className="flex-1 min-w-0">
                            <p className="text-white text-sm font-medium truncate">{business.name}</p>
                            {business.subtitle && <p className="text-gray-400 text-xs truncate">{business.subtitle}</p>}
                          </div>
                          <div className="flex items-center gap-0.5 flex-shrink-0">
                            <span className="text-white text-xs">{business.rating}</span>
                            <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Right Arrow Row 1 */}
                <button
                  onClick={() => scrollRow(row1Ref, 'right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-700 hover:bg-gray-600 rounded-full p-2 shadow-lg"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Row 2 - Scrolling Right with Arrows */}
              <div className="relative">
                {/* Left Arrow Row 2 */}
                <button
                  onClick={() => scrollRow(row2Ref, 'left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-700 hover:bg-gray-600 rounded-full p-2 shadow-lg"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div ref={row2Ref} className="overflow-x-auto mx-10" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  <div className="flex">
                    {[...recommendedBusinesses.slice(7), ...recommendedBusinesses.slice(7)].map((business, index) => (
                      <Link
                        key={`row2-${index}`}
                        href={`/companies/${business.id}`}
                        className="flex-shrink-0 w-[180px] mx-2 bg-transparent hover:bg-white/5 rounded-lg transition-colors"
                      >
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-2">
                          {business.isLogo ? (
                            <div className={`w-full h-full ${business.logoBg} flex items-center justify-center`}>
                              <span className={`font-bold text-xl ${business.logoBg === "bg-white" ? "text-orange-500" : "text-white"}`}>
                                {business.logoText}
                              </span>
                            </div>
                          ) : (
                            <Image src={business.image} alt={business.name} fill className="object-cover" />
                          )}
                        </div>
                        <div className="flex items-start justify-between gap-1">
                          <div className="flex-1 min-w-0">
                            <p className="text-white text-sm font-medium truncate">{business.name}</p>
                            {business.subtitle && <p className="text-gray-400 text-xs truncate">{business.subtitle}</p>}
                          </div>
                          <div className="flex items-center gap-0.5 flex-shrink-0">
                            <span className="text-white text-xs">{business.rating}</span>
                            <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Right Arrow Row 2 */}
                <button
                  onClick={() => scrollRow(row2Ref, 'right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-700 hover:bg-gray-600 rounded-full p-2 shadow-lg"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* All Categories Button */}
            <div className="text-center mt-12">
              <Link
                href="/companies/all"
                className="inline-flex items-center gap-2 border-2 border-emerald-500 text-emerald-500 px-12 py-3 rounded-lg font-medium hover:bg-emerald-500 hover:text-white transition-colors"
              >
                Button All Categories
              </Link>
            </div>
          </div>
        </section>

        {/* Sponsored Space Banner */}
        <PricingBanner />

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-lime-500 via-emerald-500 to-cyan-500 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Want to List Your Business?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Join the Rhine Valley's growing business community and reach thousands of local customers.
            </p>
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Get Started
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
