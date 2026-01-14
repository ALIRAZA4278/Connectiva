"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  "All Categories",
  "Restaurants & Cafes",
  "Health & Wellness",
  "Technology",
  "Construction",
  "Retail & Shopping",
  "Professional Services",
  "Automotive",
  "Education",
];

const locations = [
  "All Locations",
  "Chur",
  "Bad Ragaz",
  "Landquart",
  "Maienfeld",
  "Davos",
  "St. Moritz",
  "Arosa",
];

const companies = [
  {
    id: 1,
    name: "Alpine Tech Solutions",
    category: "Technology",
    location: "Chur",
    description: "Leading IT services and software development company in the Rhine Valley.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
    rating: 4.8,
    reviews: 124,
    package: "Platinum",
    verified: true,
  },
  {
    id: 2,
    name: "Rheintal Bäckerei",
    category: "Restaurants & Cafes",
    location: "Bad Ragaz",
    description: "Traditional Swiss bakery with fresh bread and pastries daily.",
    image: "https://images.unsplash.com/photo-1517433670267-30f41c09c7d7?w=400&q=80",
    rating: 4.9,
    reviews: 89,
    package: "Business+",
    verified: true,
  },
  {
    id: 3,
    name: "Swiss Wellness Center",
    category: "Health & Wellness",
    location: "Davos",
    description: "Premium spa and wellness services in the heart of the Alps.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80",
    rating: 4.7,
    reviews: 156,
    package: "Platinum",
    verified: true,
  },
  {
    id: 4,
    name: "Berg Construction AG",
    category: "Construction",
    location: "Landquart",
    description: "Quality construction and renovation services for residential and commercial.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
    rating: 4.6,
    reviews: 67,
    package: "Pro",
    verified: true,
  },
  {
    id: 5,
    name: "Graubünden Auto Center",
    category: "Automotive",
    location: "Chur",
    description: "Full-service auto dealership with new and certified pre-owned vehicles.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&q=80",
    rating: 4.5,
    reviews: 201,
    package: "Business+",
    verified: true,
  },
  {
    id: 6,
    name: "Alpen Fitness Studio",
    category: "Health & Wellness",
    location: "St. Moritz",
    description: "Modern fitness center with personal training and group classes.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80",
    rating: 4.8,
    reviews: 112,
    package: "Pro",
    verified: true,
  },
  {
    id: 7,
    name: "Swiss Legal Partners",
    category: "Professional Services",
    location: "Chur",
    description: "Expert legal advice for businesses and individuals in the Rhine Valley.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80",
    rating: 4.9,
    reviews: 78,
    package: "Platinum",
    verified: true,
  },
  {
    id: 8,
    name: "Mountain View School",
    category: "Education",
    location: "Arosa",
    description: "International education with Swiss excellence and alpine experiences.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80",
    rating: 4.7,
    reviews: 45,
    package: "Basic",
    verified: false,
  },
];

const packageColors = {
  Basic: "bg-gray-500",
  Pro: "bg-teal-500",
  "Business+": "bg-emerald-500",
  Platinum: "bg-gradient-to-r from-lime-500 to-cyan-500",
};

export default function CompaniesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCompanies = companies.filter((company) => {
    const matchesCategory = selectedCategory === "All Categories" || company.category === selectedCategory;
    const matchesLocation = selectedLocation === "All Locations" || company.location === selectedLocation;
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         company.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLocation && matchesSearch;
  });

  return (
    <>
    <Navbar />
      <main className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-[#0f1419] py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-emerald-500 text-sm font-semibold uppercase tracking-wider">
                DIRECTORY
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
                <span className="text-white">Browse </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400">
                  Companies
                </span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Discover trusted local businesses in the Rhine Valley. Find the perfect partner for your needs.
              </p>
            </div>

            {/* Search & Filters */}
            <div className="mt-10 bg-[#1a2332] rounded-xl p-4 sm:p-6 border border-gray-700/50">
              <div className="flex flex-col lg:flex-row gap-4">
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
                    className="w-full bg-[#0f1419] border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                {/* Category Dropdown */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-[#0f1419] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>

                {/* Location Dropdown */}
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="bg-[#0f1419] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Results Count */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-gray-900">{filteredCompanies.length}</span> companies
              </p>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 text-sm">Sort by:</span>
                <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500">
                  <option>Most Relevant</option>
                  <option>Highest Rated</option>
                  <option>Most Reviews</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>

            {/* Companies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCompanies.map((company) => (
                <Link
                  key={company.id}
                  href={`/companies/${company.id}`}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={company.image}
                      alt={company.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Package Badge */}
                    <div className={`absolute top-3 right-3 ${packageColors[company.package]} text-white text-xs font-medium px-2.5 py-1 rounded-full`}>
                      {company.package}
                    </div>
                    {company.verified && (
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-emerald-600 text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <span>{company.category}</span>
                      <span>•</span>
                      <span>{company.location}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-emerald-600 transition-colors">
                      {company.name}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                      {company.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="font-semibold text-gray-900">{company.rating}</span>
                      </div>
                      <span className="text-gray-400 text-sm">({company.reviews} reviews)</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More */}
            {filteredCompanies.length > 0 && (
              <div className="text-center mt-12">
                <button className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Load More Companies
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            )}

            {/* No Results */}
            {filteredCompanies.length === 0 && (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No companies found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

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
