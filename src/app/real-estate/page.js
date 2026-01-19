"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const propertyTypes = ["All Types", "Apartment", "House", "Villa", "Commercial", "Land"];
const listingTypes = ["All Listings", "For Sale", "For Rent"];
const locations = ["All Locations", "Chur", "Bad Ragaz", "Landquart", "Davos", "St. Moritz", "Arosa"];

const properties = [
  {
    id: 1,
    title: "Modern Alpine Apartment",
    type: "Apartment",
    listingType: "For Sale",
    location: "Davos",
    price: "CHF 850,000",
    priceLabel: "",
    bedrooms: 3,
    bathrooms: 2,
    area: "120 m²",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    featured: true,
    description: "Stunning mountain views with modern finishes and ski-in/ski-out access.",
    package: "Platinum",
    verified: true,
  },
  {
    id: 2,
    title: "Charming Family House",
    type: "House",
    listingType: "For Sale",
    location: "Chur",
    price: "CHF 1,200,000",
    priceLabel: "",
    bedrooms: 4,
    bathrooms: 3,
    area: "180 m²",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    featured: true,
    description: "Beautiful family home with garden, garage, and quiet neighborhood.",
    package: "Premium",
    verified: true,
  },
  {
    id: 3,
    title: "Luxury Penthouse",
    type: "Apartment",
    listingType: "For Rent",
    location: "St. Moritz",
    price: "CHF 5,500",
    priceLabel: "/month",
    bedrooms: 2,
    bathrooms: 2,
    area: "95 m²",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    featured: false,
    description: "Premium penthouse with panoramic views and luxury amenities.",
    package: "Business+",
    verified: true,
  },
  {
    id: 4,
    title: "Cozy Studio Apartment",
    type: "Apartment",
    listingType: "For Rent",
    location: "Landquart",
    price: "CHF 1,200",
    priceLabel: "/month",
    bedrooms: 1,
    bathrooms: 1,
    area: "35 m²",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
    featured: false,
    description: "Perfect starter apartment near public transport and shopping.",
    package: "Business+",
    verified: true,
  },
  {
    id: 5,
    title: "Historic Villa",
    type: "Villa",
    listingType: "For Sale",
    location: "Bad Ragaz",
    price: "CHF 2,800,000",
    priceLabel: "",
    bedrooms: 6,
    bathrooms: 4,
    area: "350 m²",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    featured: true,
    description: "Grand historic villa with spa potential near thermal baths.",
    package: "Business+",
    verified: true,
  },
  {
    id: 6,
    title: "Commercial Office Space",
    type: "Commercial",
    listingType: "For Rent",
    location: "Chur",
    price: "CHF 3,200",
    priceLabel: "/month",
    bedrooms: 0,
    bathrooms: 2,
    area: "150 m²",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    featured: false,
    description: "Modern office space in central location with parking.",
    package: "Basic",
    verified: false,
  },
  {
    id: 7,
    title: "Mountain Chalet",
    type: "House",
    listingType: "For Sale",
    location: "Arosa",
    price: "CHF 1,650,000",
    priceLabel: "",
    bedrooms: 4,
    bathrooms: 2,
    area: "160 m²",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&q=80",
    featured: false,
    description: "Traditional Swiss chalet with modern amenities and mountain access.",
    package: "Basic",
    verified: false,
  },
  {
    id: 8,
    title: "Building Land",
    type: "Land",
    listingType: "For Sale",
    location: "Landquart",
    price: "CHF 450,000",
    priceLabel: "",
    bedrooms: 0,
    bathrooms: 0,
    area: "800 m²",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80",
    featured: false,
    description: "Prime building land with permits ready for construction.",
    package: "Basic",
    verified: false,
  },
];

const packageColors = {
  Basic: "bg-gray-500",
  "Business+": "bg-emerald-500",
  Premium: "bg-gradient-to-r from-emerald-500 to-teal-500",
  Platinum: "bg-gradient-to-r from-lime-500 via-emerald-500 to-cyan-500",
};

export default function RealEstatePage() {
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedListing, setSelectedListing] = useState("All Listings");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProperties = properties.filter((property) => {
    const matchesType = selectedType === "All Types" || property.type === selectedType;
    const matchesListing = selectedListing === "All Listings" || property.listingType === selectedListing;
    const matchesLocation = selectedLocation === "All Locations" || property.location === selectedLocation;
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesListing && matchesLocation && matchesSearch;
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
                REAL ESTATE
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
                <span className="text-white">Find Your Perfect </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400">
                  Property
                </span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Explore homes, apartments, and commercial spaces in the beautiful Rhine Valley.
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
                    placeholder="Search properties..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#0f1419] border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                {/* Listing Type */}
                <select
                  value={selectedListing}
                  onChange={(e) => setSelectedListing(e.target.value)}
                  className="bg-[#0f1419] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                >
                  {listingTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>

                {/* Property Type */}
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="bg-[#0f1419] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                >
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
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

        {/* Properties Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Results Count */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">{filteredProperties.length}</span> properties found
              </p>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 text-sm">Sort by:</span>
                <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500">
                  <option>Newest First</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Size: Large to Small</option>
                </select>
              </div>
            </div>

            {/* Properties Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProperties.map((property) => (
                <Link
                  key={property.id}
                  href={`/real-estate/${property.id}`}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      <span className={`${packageColors[property.package]} text-white text-xs font-medium px-2.5 py-1 rounded-full`}>
                        {property.package}
                      </span>
                      <span className={`text-white text-xs font-medium px-2.5 py-1 rounded-full ${
                        property.listingType === "For Sale" ? "bg-emerald-500" : "bg-teal-500"
                      }`}>
                        {property.listingType}
                      </span>
                      {property.featured && (
                        <span className="bg-yellow-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    {property.verified && (
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-emerald-600 text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                    {/* Price */}
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                      <span className="font-bold text-gray-900">{property.price}</span>
                      <span className="text-gray-500 text-sm">{property.priceLabel}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <span>{property.type}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {property.location}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-emerald-600 transition-colors">
                      {property.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                      {property.description}
                    </p>
                    {/* Features */}
                    <div className="flex items-center gap-4 pt-3 border-t border-gray-100 text-sm text-gray-500">
                      {property.bedrooms > 0 && (
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                          {property.bedrooms} bed
                        </span>
                      )}
                      {property.bathrooms > 0 && (
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                          </svg>
                          {property.bathrooms} bath
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                        {property.area}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* No Results */}
            {filteredProperties.length === 0 && (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No properties found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}

            {/* Load More */}
            {filteredProperties.length > 0 && (
              <div className="text-center mt-12">
                <button className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Load More Properties
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-lime-500 via-emerald-500 to-cyan-500 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              List Your Property
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Reach thousands of potential buyers and renters in the Rhine Valley.
            </p>
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              List Property
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
