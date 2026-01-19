"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Properties data with package tiers
const propertiesData = {
  // PLATINUM Agency Property
  1: {
    id: 1,
    title: "Modern Alpine Apartment",
    type: "Apartment",
    listingType: "For Sale",
    location: "Davos",
    address: "Promenade 45, 7270 Davos",
    price: "CHF 850,000",
    priceLabel: "",
    bedrooms: 3,
    bathrooms: 2,
    area: "120 m²",
    floor: "3rd Floor",
    yearBuilt: "2020",
    parking: "1 Underground",
    heating: "Underfloor Heating",
    description: "Stunning mountain views with modern finishes and ski-in/ski-out access. This exceptional apartment offers the perfect blend of luxury living and alpine lifestyle. Floor-to-ceiling windows provide breathtaking panoramic views of the Swiss Alps.",
    features: [
      "Panoramic mountain views",
      "Ski-in/ski-out access",
      "Floor-to-ceiling windows",
      "Modern open kitchen",
      "Private balcony",
      "Underfloor heating throughout",
      "High-end finishes",
      "Secure underground parking",
      "Storage room included",
      "Elevator access",
    ],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200&q=80",
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    virtualTour: "https://my.matterport.com/show",
    floorPlan: "https://images.unsplash.com/photo-1628744448839-9acb7e9a8d71?w=800&q=80",
    featured: true,
    premium: true,
    agency: {
      id: 1,
      name: "Alpine Real Estate AG",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
      description: "Premier luxury real estate agency in the Swiss Alps, specializing in high-end properties in Davos, St. Moritz, and Arosa.",
      phone: "+41 81 123 45 67",
      email: "info@alpinerealestate.ch",
      website: "www.alpinerealestate.ch",
      package: "Platinum",
      verified: true,
    },
    agent: {
      name: "Marco Bernasconi",
      role: "Senior Property Consultant",
      phone: "+41 79 123 45 67",
      email: "marco@alpinerealestate.ch",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    },
    postedAt: "1 week ago",
  },
  // PREMIUM Agency Property
  2: {
    id: 2,
    title: "Charming Family House",
    type: "House",
    listingType: "For Sale",
    location: "Chur",
    address: "Ringstrasse 12, 7000 Chur",
    price: "CHF 1,200,000",
    priceLabel: "",
    bedrooms: 4,
    bathrooms: 3,
    area: "180 m²",
    floor: "Ground + 2",
    yearBuilt: "2015",
    parking: "2 Garage",
    heating: "Heat Pump",
    description: "Beautiful family home with garden, garage, and quiet neighborhood. Perfect for families looking for space and tranquility while still being close to the city center and all amenities.",
    features: [
      "Private garden",
      "Double garage",
      "Modern kitchen",
      "Home office",
      "Guest bathroom",
      "Terrace",
      "Quiet neighborhood",
      "Near schools",
    ],
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
    ],
    video: null,
    virtualTour: null,
    floorPlan: null,
    featured: true,
    premium: true,
    agency: {
      id: 2,
      name: "Rheintal Immobilien",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
      description: "Your trusted partner for real estate in the Rhine Valley region.",
      phone: "+41 81 234 56 78",
      email: "info@rheintal-immo.ch",
      package: "Premium",
      verified: true,
    },
    agent: {
      name: "Lisa Casutt",
      role: "Property Agent",
      phone: "+41 79 234 56 78",
      email: "lisa@rheintal-immo.ch",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    },
    postedAt: "3 days ago",
  },
  // BUSINESS+ Property
  3: {
    id: 3,
    title: "Luxury Penthouse",
    type: "Apartment",
    listingType: "For Rent",
    location: "St. Moritz",
    address: "Via Serlas 27, 7500 St. Moritz",
    price: "CHF 5,500",
    priceLabel: "/month",
    bedrooms: 2,
    bathrooms: 2,
    area: "95 m²",
    floor: "Top Floor",
    yearBuilt: "2018",
    parking: "1 Underground",
    heating: "Central",
    description: "Premium penthouse with panoramic views and luxury amenities. Perfect for those seeking an exclusive lifestyle in Switzerland's most prestigious resort town.",
    features: [
      "Panoramic views",
      "Luxury finishes",
      "Modern kitchen",
      "Private terrace",
    ],
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    ],
    video: null,
    virtualTour: null,
    floorPlan: null,
    featured: false,
    premium: false,
    agency: {
      id: 3,
      name: "Engadin Properties",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
      description: "Specialized in Engadin real estate.",
      phone: "+41 81 345 67 89",
      email: "info@engadin-prop.ch",
      package: "Business+",
      verified: true,
    },
    agent: null,
    postedAt: "5 days ago",
  },
  // BUSINESS+ Property
  4: {
    id: 4,
    title: "Cozy Studio Apartment",
    type: "Apartment",
    listingType: "For Rent",
    location: "Landquart",
    address: "Bahnhofstrasse 8, 7302 Landquart",
    price: "CHF 1,200",
    priceLabel: "/month",
    bedrooms: 1,
    bathrooms: 1,
    area: "35 m²",
    floor: "2nd Floor",
    yearBuilt: "2010",
    parking: "Outdoor",
    heating: "Gas",
    description: "Perfect starter apartment near public transport and shopping. Ideal for young professionals or students.",
    features: [
      "Near train station",
      "Modern appliances",
      "Balcony",
      "Storage",
    ],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
    ],
    video: null,
    virtualTour: null,
    floorPlan: null,
    featured: false,
    premium: false,
    agency: {
      id: 4,
      name: "Quick Rent AG",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
      description: "Fast and reliable rental services.",
      phone: "+41 81 456 78 90",
      email: "info@quickrent.ch",
      package: "Business+",
      verified: true,
    },
    agent: {
      name: "Peter Müller",
      role: "Rental Manager",
      phone: "+41 79 456 78 90",
      email: "peter@quickrent.ch",
      image: null,
    },
    postedAt: "1 week ago",
  },
  // BUSINESS+ Property
  5: {
    id: 5,
    title: "Historic Villa",
    type: "Villa",
    listingType: "For Sale",
    location: "Bad Ragaz",
    address: "Am Kurpark 3, 7310 Bad Ragaz",
    price: "CHF 2,800,000",
    priceLabel: "",
    bedrooms: 6,
    bathrooms: 4,
    area: "350 m²",
    floor: "Ground + 2",
    yearBuilt: "1920",
    parking: "4 Cars",
    heating: "Oil + Solar",
    description: "Grand historic villa with spa potential near thermal baths. A unique opportunity to own a piece of Swiss heritage.",
    features: [
      "Historic architecture",
      "Large garden",
      "Near thermal baths",
      "Renovation potential",
      "Original features",
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    ],
    video: null,
    virtualTour: null,
    floorPlan: null,
    featured: true,
    premium: false,
    agency: {
      id: 2,
      name: "Rheintal Immobilien",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
      description: "Your trusted partner for real estate.",
      phone: "+41 81 234 56 78",
      email: "info@rheintal-immo.ch",
      package: "Business+",
      verified: true,
    },
    agent: null,
    postedAt: "2 weeks ago",
  },
  // BASIC Property
  6: {
    id: 6,
    title: "Commercial Office Space",
    type: "Commercial",
    listingType: "For Rent",
    location: "Chur",
    address: "Poststrasse 15, 7000 Chur",
    price: "CHF 3,200",
    priceLabel: "/month",
    bedrooms: 0,
    bathrooms: 2,
    area: "150 m²",
    floor: "1st Floor",
    yearBuilt: "2005",
    parking: "Available",
    heating: "Central",
    description: "Modern office space in central location with parking.",
    features: [
      "Central location",
      "Parking available",
    ],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    ],
    video: null,
    virtualTour: null,
    floorPlan: null,
    featured: false,
    premium: false,
    agency: {
      id: 5,
      name: "Commercial Realty",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
      description: "Commercial properties specialist.",
      package: "Basic",
      verified: false,
    },
    agent: null,
    postedAt: "3 weeks ago",
  },
  // BASIC Property
  7: {
    id: 7,
    title: "Mountain Chalet",
    type: "House",
    listingType: "For Sale",
    location: "Arosa",
    address: "Bergweg 22, 7050 Arosa",
    price: "CHF 1,650,000",
    priceLabel: "",
    bedrooms: 4,
    bathrooms: 2,
    area: "160 m²",
    floor: "Ground + 1",
    yearBuilt: "1985",
    parking: "2 Cars",
    heating: "Wood + Electric",
    description: "Traditional Swiss chalet with modern amenities and mountain access.",
    features: [
      "Mountain views",
      "Traditional design",
    ],
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&q=80",
    ],
    video: null,
    virtualTour: null,
    floorPlan: null,
    featured: false,
    premium: false,
    agency: {
      id: 6,
      name: "Mountain Homes",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
      description: "Alpine property specialists.",
      package: "Basic",
      verified: false,
    },
    agent: null,
    postedAt: "1 month ago",
  },
  // BASIC Property
  8: {
    id: 8,
    title: "Building Land",
    type: "Land",
    listingType: "For Sale",
    location: "Landquart",
    address: "Industriestrasse, 7302 Landquart",
    price: "CHF 450,000",
    priceLabel: "",
    bedrooms: 0,
    bathrooms: 0,
    area: "800 m²",
    floor: "N/A",
    yearBuilt: "N/A",
    parking: "N/A",
    heating: "N/A",
    description: "Prime building land with permits ready for construction.",
    features: [
      "Building permits ready",
      "Good location",
    ],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80",
    ],
    video: null,
    virtualTour: null,
    floorPlan: null,
    featured: false,
    premium: false,
    agency: {
      id: 7,
      name: "Land Sales GmbH",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
      description: "Land and development plots.",
      package: "Basic",
      verified: false,
    },
    agent: null,
    postedAt: "2 months ago",
  },
};

const packageFeatures = {
  Basic: {
    hasContactForm: false,
    hasGallery: false,
    hasVideo: false,
    hasVirtualTour: false,
    hasFloorPlan: false,
    hasAgentInfo: false,
    maxFeatures: 2,
  },
  "Business+": {
    hasContactForm: true,
    hasGallery: true,
    hasVideo: false,
    hasVirtualTour: false,
    hasFloorPlan: false,
    hasAgentInfo: true,
    maxFeatures: 5,
  },
  Premium: {
    hasContactForm: true,
    hasGallery: true,
    hasVideo: true,
    hasVirtualTour: true,
    hasFloorPlan: true,
    hasAgentInfo: true,
    maxFeatures: 10,
  },
  Platinum: {
    hasContactForm: true,
    hasGallery: true,
    hasVideo: true,
    hasVirtualTour: true,
    hasFloorPlan: true,
    hasAgentInfo: true,
    maxFeatures: 999,
  },
};

const packageColors = {
  Basic: "bg-gray-500",
  "Business+": "bg-emerald-500",
  Premium: "bg-gradient-to-r from-emerald-500 to-teal-500",
  Platinum: "bg-gradient-to-r from-lime-500 via-emerald-500 to-cyan-500",
};

export default function PropertyDetailPage() {
  const params = useParams();
  const property = propertiesData[params.id];
  const [selectedImage, setSelectedImage] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  if (!property) {
    return (
      <>
        <Navbar />
        <main className="bg-gray-50 min-h-screen py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h1>
            <p className="text-gray-500 mb-8">This property listing may have been removed or is no longer available.</p>
            <Link href="/real-estate" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Browse All Properties
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const features = packageFeatures[property.agency.package] || packageFeatures.Basic;

  // Basic property listing
  const renderBasicProperty = () => (
    <main className="bg-gray-50 min-h-screen">
      <section className="bg-[#0f1419] py-8">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/real-estate" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Properties
          </Link>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Image */}
          <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden mb-6">
            <Image src={property.images[0]} alt={property.title} fill className="object-cover" />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className={`text-white text-sm font-medium px-3 py-1 rounded-full ${property.listingType === "For Sale" ? "bg-emerald-500" : "bg-teal-500"}`}>
                {property.listingType}
              </span>
            </div>
          </div>

          {/* Basic Info Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{property.title}</h1>
                <p className="text-gray-500 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {property.location}
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-emerald-600">{property.price}</div>
                <div className="text-gray-500 text-sm">{property.priceLabel}</div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4 py-4 border-y border-gray-100 mb-4">
              {property.bedrooms > 0 && (
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="text-gray-700">{property.bedrooms} Bedrooms</span>
                </div>
              )}
              {property.bathrooms > 0 && (
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                  <span className="text-gray-700">{property.bathrooms} Bathrooms</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
                <span className="text-gray-700">{property.area}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-4">{property.description}</p>

            {/* Agency Info */}
            <div className="pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-500">Listed by: <span className="font-medium text-gray-700">{property.agency.name}</span></p>
              <p className="text-xs text-gray-400 mt-1">Posted {property.postedAt}</p>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-6 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-6 text-center">
            <p className="text-gray-600 mb-2">Interested in this property?</p>
            <p className="text-sm text-gray-500">Contact the agency directly for more information.</p>
          </div>
        </div>
      </section>
    </main>
  );

  // Business+ property listing
  const renderBusinessPlusProperty = () => (
    <main className="bg-gray-50 min-h-screen">
      <section className="bg-[#0f1419] py-8">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/real-estate" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Properties
          </Link>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Main Image */}
              <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden">
                <Image src={property.images[selectedImage] || property.images[0]} alt={property.title} fill className="object-cover" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`text-white text-sm font-medium px-3 py-1.5 rounded-full ${property.listingType === "For Sale" ? "bg-emerald-500" : "bg-teal-500"}`}>
                    {property.listingType}
                  </span>
                  {property.featured && (
                    <span className="bg-yellow-500 text-white text-sm font-medium px-3 py-1.5 rounded-full">Featured</span>
                  )}
                  <span className={`${packageColors[property.agency.package]} text-white text-xs font-medium px-3 py-1.5 rounded-full`}>
                    {property.agency.package}
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              {features.hasGallery && property.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {property.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 ${selectedImage === index ? 'ring-2 ring-emerald-500' : ''}`}
                    >
                      <Image src={img} alt={`View ${index + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Property Details */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{property.title}</h1>
                <p className="text-gray-500 flex items-center gap-1 mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {property.address || property.location}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-gray-100 mb-6">
                  {property.bedrooms > 0 && (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{property.bedrooms}</div>
                      <div className="text-sm text-gray-500">Bedrooms</div>
                    </div>
                  )}
                  {property.bathrooms > 0 && (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{property.bathrooms}</div>
                      <div className="text-sm text-gray-500">Bathrooms</div>
                    </div>
                  )}
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{property.area}</div>
                    <div className="text-sm text-gray-500">Living Area</div>
                  </div>
                  {property.yearBuilt !== "N/A" && (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{property.yearBuilt}</div>
                      <div className="text-sm text-gray-500">Year Built</div>
                    </div>
                  )}
                </div>

                {/* Description */}
                <h2 className="text-lg font-bold text-gray-900 mb-3">Description</h2>
                <p className="text-gray-600 mb-6">{property.description}</p>

                {/* Features */}
                <h2 className="text-lg font-bold text-gray-900 mb-3">Features</h2>
                <div className="grid sm:grid-cols-2 gap-2">
                  {property.features.slice(0, features.maxFeatures).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Details */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Property Details</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500">Property Type</span>
                    <span className="text-gray-900 font-medium">{property.type}</span>
                  </div>
                  {property.floor !== "N/A" && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-500">Floor</span>
                      <span className="text-gray-900 font-medium">{property.floor}</span>
                    </div>
                  )}
                  {property.parking !== "N/A" && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-500">Parking</span>
                      <span className="text-gray-900 font-medium">{property.parking}</span>
                    </div>
                  )}
                  {property.heating !== "N/A" && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-500">Heating</span>
                      <span className="text-gray-900 font-medium">{property.heating}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Price Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-emerald-600 mb-1">{property.price}</div>
                <div className="text-gray-500 mb-4">{property.priceLabel}</div>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-medium transition-colors mb-3"
                >
                  Contact Agent
                </button>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-medium transition-colors">
                  Schedule Viewing
                </button>
              </div>

              {/* Agent Card */}
              {features.hasAgentInfo && property.agent && (
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4">Listed By</h3>
                  <div className="flex items-center gap-3 mb-4">
                    {property.agent.image && (
                      <div className="w-14 h-14 rounded-full overflow-hidden">
                        <Image src={property.agent.image} alt={property.agent.name} width={56} height={56} className="object-cover" />
                      </div>
                    )}
                    <div>
                      <div className="font-medium text-gray-900">{property.agent.name}</div>
                      <div className="text-sm text-gray-500">{property.agent.role}</div>
                    </div>
                  </div>
                  {property.agent.phone && (
                    <a href={`tel:${property.agent.phone}`} className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {property.agent.phone}
                    </a>
                  )}
                  {property.agent.email && (
                    <a href={`mailto:${property.agent.email}`} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {property.agent.email}
                    </a>
                  )}
                </div>
              )}

              {/* Agency Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden">
                    <Image src={property.agency.logo} alt={property.agency.name} width={48} height={48} className="object-cover" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{property.agency.name}</div>
                    {property.agency.verified && (
                      <span className="text-xs text-emerald-600 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-500">{property.agency.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Contact About Property</h3>
              <button onClick={() => setShowContactForm(false)} className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500" defaultValue={`I'm interested in ${property.title} at ${property.location}.`} />
              </div>
              <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-medium transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );

  // Premium/Platinum property listing
  const renderPremiumProperty = () => (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Gallery */}
      <section className="relative">
        <div className="h-[50vh] min-h-[400px] relative">
          <Image
            src={property.images[selectedImage] || property.images[0]}
            alt={property.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Navigation */}
          <div className="absolute top-4 left-4">
            <Link href="/real-estate" className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-black/50 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </Link>
          </div>

          {/* Badges */}
          <div className="absolute top-4 right-4 flex gap-2">
            <span className={`text-white text-sm font-medium px-4 py-2 rounded-full ${property.listingType === "For Sale" ? "bg-emerald-500" : "bg-teal-500"}`}>
              {property.listingType}
            </span>
            {property.featured && (
              <span className="bg-yellow-500 text-white text-sm font-medium px-4 py-2 rounded-full">Featured</span>
            )}
            <span className={`${packageColors[property.agency.package]} text-white text-sm font-medium px-4 py-2 rounded-full`}>
              {property.agency.package}
            </span>
          </div>

          {/* Gallery Button */}
          {property.images.length > 1 && (
            <button
              onClick={() => setShowGallery(true)}
              className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-white transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              View All {property.images.length} Photos
            </button>
          )}

          {/* Price Badge */}
          <div className="absolute bottom-4 left-4 bg-white rounded-xl px-6 py-4 shadow-lg">
            <div className="text-3xl font-bold text-gray-900">{property.price}</div>
            <div className="text-gray-500">{property.priceLabel || property.type}</div>
          </div>
        </div>

        {/* Thumbnails */}
        {features.hasGallery && property.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden lg:flex gap-2 bg-black/30 backdrop-blur-sm p-2 rounded-lg">
            {property.images.slice(0, 5).map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-16 h-16 rounded-lg overflow-hidden ${selectedImage === index ? 'ring-2 ring-white' : 'opacity-70 hover:opacity-100'}`}
              >
                <Image src={img} alt={`View ${index + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Content */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Title & Location */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
                <p className="text-gray-500 flex items-center gap-2 text-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {property.address || property.location}
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6 pt-6 border-t border-gray-100">
                  {property.bedrooms > 0 && (
                    <div className="text-center">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{property.bedrooms}</div>
                      <div className="text-sm text-gray-500">Bedrooms</div>
                    </div>
                  )}
                  {property.bathrooms > 0 && (
                    <div className="text-center">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                        </svg>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{property.bathrooms}</div>
                      <div className="text-sm text-gray-500">Bathrooms</div>
                    </div>
                  )}
                  <div className="text-center">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{property.area}</div>
                    <div className="text-sm text-gray-500">Living Area</div>
                  </div>
                  {property.yearBuilt !== "N/A" && (
                    <div className="text-center">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{property.yearBuilt}</div>
                      <div className="text-sm text-gray-500">Year Built</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Video */}
              {features.hasVideo && property.video && (
                <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <div className="relative pt-[56.25%]">
                    <iframe
                      src={property.video}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {/* Virtual Tour */}
              {features.hasVirtualTour && property.virtualTour && (
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-1">Virtual Tour Available</h3>
                      <p className="text-white/80">Experience this property from anywhere</p>
                    </div>
                    <a href={property.virtualTour} target="_blank" rel="noopener noreferrer" className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                      Start Tour
                    </a>
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4">About This Property</h2>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
              </div>

              {/* Features */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Features & Amenities</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
                      <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floor Plan */}
              {features.hasFloorPlan && property.floorPlan && (
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Floor Plan</h2>
                  <div className="relative h-80 rounded-lg overflow-hidden bg-gray-100">
                    <Image src={property.floorPlan} alt="Floor Plan" fill className="object-contain" />
                  </div>
                </div>
              )}

              {/* Property Details */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Property Details</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-500">Property Type</span>
                    <span className="text-gray-900 font-medium">{property.type}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-500">Listing Type</span>
                    <span className="text-gray-900 font-medium">{property.listingType}</span>
                  </div>
                  {property.floor !== "N/A" && (
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-500">Floor</span>
                      <span className="text-gray-900 font-medium">{property.floor}</span>
                    </div>
                  )}
                  {property.parking !== "N/A" && (
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-500">Parking</span>
                      <span className="text-gray-900 font-medium">{property.parking}</span>
                    </div>
                  )}
                  {property.heating !== "N/A" && (
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-500">Heating</span>
                      <span className="text-gray-900 font-medium">{property.heating}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-500">Location</span>
                    <span className="text-gray-900 font-medium">{property.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm sticky top-6">
                <button
                  onClick={() => setShowContactForm(true)}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-4 rounded-lg font-bold text-lg transition-colors mb-3"
                >
                  Request Information
                </button>
                <button className="w-full bg-white border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 py-3 rounded-lg font-medium transition-colors mb-4">
                  Schedule a Viewing
                </button>
                <p className="text-center text-sm text-gray-500">Posted {property.postedAt}</p>
              </div>

              {/* Agent Card */}
              {features.hasAgentInfo && property.agent && (
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4">Your Property Expert</h3>
                  <div className="flex items-center gap-4 mb-4">
                    {property.agent.image && (
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <Image src={property.agent.image} alt={property.agent.name} width={64} height={64} className="object-cover" />
                      </div>
                    )}
                    <div>
                      <div className="font-bold text-gray-900">{property.agent.name}</div>
                      <div className="text-sm text-gray-500">{property.agent.role}</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {property.agent.phone && (
                      <a href={`tel:${property.agent.phone}`} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors">
                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {property.agent.phone}
                      </a>
                    )}
                    {property.agent.email && (
                      <a href={`mailto:${property.agent.email}`} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors">
                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {property.agent.email}
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Agency Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl overflow-hidden">
                    <Image src={property.agency.logo} alt={property.agency.name} width={56} height={56} className="object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{property.agency.name}</div>
                    {property.agency.verified && (
                      <span className="text-xs text-emerald-600 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified Agency
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">{property.agency.description}</p>
                {property.agency.website && (
                  <a href={`https://${property.agency.website}`} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
                    Visit Website →
                  </a>
                )}
              </div>

              {/* Share */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">Share This Property</h3>
                <div className="flex gap-3">
                  <button className="flex-1 bg-[#25D366] text-white py-2 rounded-lg text-sm font-medium hover:opacity-90">
                    WhatsApp
                  </button>
                  <button className="flex-1 bg-[#1877F2] text-white py-2 rounded-lg text-sm font-medium hover:opacity-90">
                    Facebook
                  </button>
                  <button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-300">
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col">
          <div className="flex justify-between items-center p-4">
            <span className="text-white">{selectedImage + 1} / {property.images.length}</span>
            <button onClick={() => setShowGallery(false)} className="text-white hover:text-gray-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl h-[70vh]">
              <Image src={property.images[selectedImage]} alt={property.title} fill className="object-contain" />
            </div>
          </div>
          <div className="flex justify-center gap-2 p-4 overflow-x-auto">
            {property.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 ${selectedImage === index ? 'ring-2 ring-white' : 'opacity-50 hover:opacity-100'}`}
              >
                <Image src={img} alt={`View ${index + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Request Information</h3>
              <button onClick={() => setShowContactForm(false)} className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500" defaultValue={`I'm interested in "${property.title}" at ${property.location}. Please contact me with more information.`} />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="viewing" className="rounded border-gray-300 text-emerald-500 focus:ring-emerald-500" />
                <label htmlFor="viewing" className="text-sm text-gray-600">I would like to schedule a viewing</label>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-3 rounded-lg font-medium transition-colors">
                Send Request
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );

  return (
    <>
      <Navbar />
      {property.agency.package === "Basic" && renderBasicProperty()}
      {property.agency.package === "Business+" && renderBusinessPlusProperty()}
      {property.agency.package === "Premium" && renderPremiumProperty()}
      {property.agency.package === "Platinum" && renderPremiumProperty()}
      <Footer />
    </>
  );
}
