"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingBanner from "@/components/PricingBanner";

// Top recommended businesses
const recommendedBusinesses = [
  { id: 1, name: "Bärlocher Bau AG", subtitle: "Bauunternehmen · Umba...", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80", rating: 5.0 },
  { id: 2, name: "Hörler Tiefbau AG", subtitle: "Bauunternehmen · Aushu...", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80", rating: 5.0, isLogo: true, logoText: "HT", logoBg: "bg-emerald-500" },
  { id: 3, name: "STUTZ AG", subtitle: "Hochbau Tiefbau · Rückb...", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80", rating: 5.0, isLogo: true, logoText: "STUTZ", logoBg: "bg-white border border-gray-200" },
  { id: 4, name: "AZ Armierungen AG", subtitle: "Armierungen · Bauuntern...", image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=400&q=80", rating: 5.0 },
  { id: 5, name: "STUTZ AG Projekte +", subtitle: "Projektmanagement · Bau...", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80", rating: 5.0, isLogo: true, logoText: "STUTZ", logoBg: "bg-white border border-gray-200" },
  { id: 6, name: "Zulian + Co. AG", subtitle: "Bauunternehmen · Renov...", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80", rating: 4.8 },
  { id: 7, name: "WILLI Bauunternehmung", subtitle: "Bauunternehmen", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80", rating: 5.0 },
];

// Top rated businesses
const topRatedBusinesses = [
  { id: 8, name: "E-K Bauunternehmung GmbH", subtitle: "", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80", rating: 5.0 },
  { id: 9, name: "Koch AG, Strassen- & Tiefbau", subtitle: "", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80", rating: 5.0, isLogo: true, logoText: "KOCH", logoBg: "bg-emerald-600" },
  { id: 10, name: "I+ Konzeptbau GmbH", subtitle: "", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80", rating: 5.0 },
  { id: 11, name: "Bernhard Frei AG", subtitle: "", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80", rating: 5.0 },
  { id: 12, name: "Ivo Stark Tiefbau", subtitle: "", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80", rating: 5.0 },
  { id: 13, name: "A. Müller AG", subtitle: "Bauunternehmung", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80", rating: 5.0 },
  { id: 14, name: "Scherrer Bauunternehmen", subtitle: "", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80", rating: 5.0 },
];

// Company listings with coordinates for map
const companyListings = [
  {
    id: 1,
    name: "Bärlocher Bau AG",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&q=80",
    address: "Schuppisstrasse 3, 9016 St. Gallen",
    services: "Bauunternehmen • Umbau • Renovation • Fassaden • Isolierung",
    tagline: "Mit Bärlocher Bau geht Ihr Projekt vorwärts!",
    description: "Bärlocher Bau ist Ihr Profi für kleinere Bauarbeiten, anspruchsvolle Neubauten und Umbauten sowie komplexe Grossprojekte in der Region St.Gallen.",
    rating: null,
    reviews: "Noch keine Bewertungen",
    hours: "Geöffnet bis 15:00 Uhr",
    isPremium: true,
    lat: 47.4245,
    lng: 9.3767,
  },
  {
    id: 2,
    name: "Hörler Tiefbau AG",
    logo: null,
    logoText: "HT",
    logoBg: "bg-emerald-500",
    address: "Achslenstrasse 4, 9016 St. Gallen",
    services: "Bauunternehmen • Aushubarbeiten • Tiefbau",
    tagline: "",
    description: "",
    rating: null,
    reviews: "Noch keine Bewertungen",
    hours: "",
    isPremium: false,
    lat: 47.4301,
    lng: 9.3654,
  },
  {
    id: 3,
    name: "STUTZ AG Bauunternehmung",
    logo: null,
    logoText: "STUTZ",
    logoBg: "bg-white border-2 border-emerald-500",
    address: "Martinsbruggstrasse 87, 9016 St. Gallen",
    services: "Hochbau Tiefbau • Rückbau • Bauunternehmen",
    tagline: "Wir bauen mit Menschen für Menschen",
    description: "Mit Professionalität und Kreativität auf dem Bau hat sich die STUTZ AG zum führenden Bauunternehmen in der Ostschweiz entwickelt.",
    rating: 5.0,
    reviews: "5 (1)",
    hours: "Geöffnet bis 20:00 Uhr",
    isPremium: true,
    lat: 47.4189,
    lng: 9.3901,
  },
  {
    id: 4,
    name: "AZ Armierungen AG",
    logo: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=100&q=80",
    address: "Letzstrasse 25, 9015 St. Gallen",
    services: "Armierungen • Bauunternehmen • Metallbau",
    tagline: "Ihr Spezialist für Armierungen aus St. Gallen",
    description: "AZ ARMIERUNGEN AG: Unser Aktiengesellschaft ist langjähriges Mitglied im Schweizerischen Baumeisterverband.",
    rating: null,
    reviews: "Noch keine Bewertungen",
    hours: "Geöffnet bis 15:00 Uhr",
    isPremium: false,
    lat: 47.4156,
    lng: 9.3512,
  },
];

// Filter services based on category
const filterServicesByCategory = {
  construction: ["Painting Services", "Plastering Services", "Renovation Services", "Property Maintenance"],
  craft: ["Woodworking", "Metalwork", "Pottery", "Textile Arts", "Jewelry Making"],
  health: ["General Practice", "Dental Care", "Physiotherapy", "Mental Health", "Specialist Care"],
  default: ["All Services", "Premium Partners", "New Listings", "Top Rated"],
};

// Category names mapping
const categoryNames = {
  "construction": "Construction",
  "health": "Health",
  "craft": "Craft",
  "real-estate": "Real Estate & Living",
  "vehicles": "Vehicles & Mobility",
  "education": "Education & Courses",
  "services": "Services",
  "fashion": "Fashion & Lifestyle",
  "household": "Household",
  "everyday": "Everyday Life",
  "animals": "Animals",
  "agriculture": "Agriculture",
  "associations": "Associations",
  "public": "Public Services",
  "other": "Other",
};

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug;
  const categoryName = categoryNames[slug] || slug;
  const filterServices = filterServicesByCategory[slug] || filterServicesByCategory.default;

  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [showMap, setShowMap] = useState(true);

  const scrollRow = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 400;
      ref.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const toggleFilter = (filter) => {
    setSelectedFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
  };

  // Generate Google Maps URL with marker for selected company
  const getMapUrl = () => {
    if (selectedCompany) {
      return `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(selectedCompany.address)}&zoom=15`;
    }
    // Default St. Gallen map
    return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21617.47587711024!2d9.347899799999999!3d47.4244818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b1e36f7aa1d91%3A0x400ff8840190c20!2sSt.%20Gallen%2C%20Switzerland!5e0!3m2!1sen!2s!4v1706000000000!5m2!1sen!2s";
  };

  return (
    <>
      <Navbar />
      <main className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0f1419] to-[#1a2332] py-10 sm:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {categoryName} Companies
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                Browse <span className="text-emerald-400">{categoryName}</span> Businesses
              </h1>
              <p className="text-gray-400 text-base max-w-2xl mx-auto">
                Discover trusted {categoryName.toLowerCase()} companies in the Rhine Valley. Find the perfect partner for your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Top Recommended Business Section */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Top Recommended <span className="text-emerald-500">Businesses</span>
                </h2>
                <p className="text-gray-500 text-sm mt-1">Business+, Premium and Platinum partners</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => scrollRow(row1Ref, 'left')}
                  className="p-2 rounded-full bg-gray-100 hover:bg-emerald-100 hover:text-emerald-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollRow(row1Ref, 'right')}
                  className="p-2 rounded-full bg-gray-100 hover:bg-emerald-100 hover:text-emerald-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div ref={row1Ref} className="overflow-x-auto pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <div className="flex gap-4">
                {recommendedBusinesses.map((business) => (
                  <Link
                    key={business.id}
                    href={`/companies/${business.id}`}
                    className="flex-shrink-0 w-[160px] group"
                  >
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3 border-2 border-transparent group-hover:border-emerald-500 transition-all shadow-sm group-hover:shadow-md">
                      {business.isLogo ? (
                        <div className={`w-full h-full ${business.logoBg} flex items-center justify-center`}>
                          <span className={`font-bold text-lg ${business.logoBg.includes("bg-white") ? "text-emerald-600" : "text-white"}`}>
                            {business.logoText}
                          </span>
                        </div>
                      ) : (
                        <Image src={business.image} alt={business.name} fill className="object-cover group-hover:scale-105 transition-transform" />
                      )}
                    </div>
                    <p className="text-gray-900 text-sm font-medium truncate group-hover:text-emerald-600 transition-colors">{business.name}</p>
                    <p className="text-gray-500 text-xs truncate">{business.subtitle}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-gray-700 text-xs font-medium">{business.rating}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Top Rated Business Section */}
        <section className="py-10 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Top Rated on <span className="text-emerald-500">Connectiva</span>
                </h2>
                <p className="text-gray-500 text-sm mt-1">Highest rated partners by customers</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => scrollRow(row2Ref, 'left')}
                  className="p-2 rounded-full bg-white hover:bg-emerald-100 hover:text-emerald-600 transition-colors shadow-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollRow(row2Ref, 'right')}
                  className="p-2 rounded-full bg-white hover:bg-emerald-100 hover:text-emerald-600 transition-colors shadow-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div ref={row2Ref} className="overflow-x-auto pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <div className="flex gap-4">
                {topRatedBusinesses.map((business) => (
                  <Link
                    key={business.id}
                    href={`/companies/${business.id}`}
                    className="flex-shrink-0 w-[160px] group"
                  >
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3 border-2 border-transparent group-hover:border-emerald-500 transition-all shadow-sm group-hover:shadow-md">
                      {business.isLogo ? (
                        <div className={`w-full h-full ${business.logoBg} flex items-center justify-center`}>
                          <span className="font-bold text-lg text-white">{business.logoText}</span>
                        </div>
                      ) : (
                        <Image src={business.image} alt={business.name} fill className="object-cover group-hover:scale-105 transition-transform" />
                      )}
                    </div>
                    <p className="text-gray-900 text-sm font-medium truncate group-hover:text-emerald-600 transition-colors">{business.name}</p>
                    <p className="text-gray-500 text-xs truncate">{business.subtitle}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-gray-700 text-xs font-medium">{business.rating}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Company Listings Section with Map */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {categoryName} Companies
                </h2>
                <p className="text-gray-500 text-sm mt-1">Partners sorted by membership level</p>
              </div>
              <button
                onClick={() => setShowMap(!showMap)}
                className={`hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  showMap ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                {showMap ? 'Hide Map' : 'Show Map'}
              </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left Sidebar - Filters */}
              <div className="lg:w-52 flex-shrink-0">
                <div className="bg-gray-50 rounded-xl p-5 sticky top-4">
                  <h3 className="text-gray-900 font-semibold text-sm mb-4 flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                    Filter by service
                  </h3>
                  <ul className="space-y-2">
                    {filterServices.map((service) => (
                      <li key={service}>
                        <button
                          onClick={() => toggleFilter(service)}
                          className={`text-sm text-left w-full px-3 py-2 rounded-lg transition-colors ${
                            selectedFilters.includes(service)
                              ? 'bg-emerald-500 text-white'
                              : 'text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                          }`}
                        >
                          {service}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Main Content - Company Cards */}
              <div className="flex-1 min-w-0">
                <div className="bg-gray-50 rounded-xl mb-4 p-4 flex items-center justify-between">
                  <span className="text-gray-700 text-sm">
                    <strong className="text-gray-900">140</strong> {categoryName} companies in St. Gallen
                  </span>
                  {selectedCompany && (
                    <button
                      onClick={() => setSelectedCompany(null)}
                      className="text-emerald-600 text-sm font-medium hover:text-emerald-700"
                    >
                      Clear selection
                    </button>
                  )}
                </div>

                <div className="space-y-4">
                  {companyListings.map((company) => (
                    <div
                      key={company.id}
                      onClick={() => handleCompanyClick(company)}
                      className={`bg-white rounded-xl shadow-sm p-5 cursor-pointer transition-all hover:shadow-md ${
                        company.isPremium ? 'border-l-4 border-emerald-500' : 'border border-gray-100'
                      } ${selectedCompany?.id === company.id ? 'ring-2 ring-emerald-500 shadow-md' : ''}`}
                    >
                      <div className="flex gap-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                          {company.logo ? (
                            <div className="relative w-16 h-16 rounded-xl overflow-hidden">
                              <Image src={company.logo} alt={company.name} fill className="object-cover" />
                            </div>
                          ) : (
                            <div className={`w-16 h-16 ${company.logoBg} rounded-xl flex items-center justify-center`}>
                              <span className={`font-bold text-sm ${company.logoBg.includes("bg-white") ? "text-emerald-600" : "text-white"}`}>
                                {company.logoText}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h3 className="text-gray-900 font-semibold text-lg">{company.name}</h3>
                              <p className="text-gray-500 text-sm flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {company.address}
                              </p>
                              <p className="text-gray-600 text-sm mt-1">{company.services}</p>
                            </div>
                            <div className="text-right flex-shrink-0">
                              {company.rating && (
                                <div className="flex items-center gap-1 justify-end mb-1">
                                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <span className="text-gray-900 font-medium">{company.rating}</span>
                                </div>
                              )}
                              <p className="text-gray-400 text-xs">{company.reviews}</p>
                              {company.hours && (
                                <p className="text-emerald-600 text-xs flex items-center gap-1 justify-end mt-1">
                                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                  {company.hours}
                                </p>
                              )}
                            </div>
                          </div>

                          {company.tagline && (
                            <p className="text-emerald-600 text-sm font-medium mt-3">{company.tagline}</p>
                          )}
                          {company.description && (
                            <p className="text-gray-600 text-sm mt-1 line-clamp-2">{company.description}</p>
                          )}

                          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                            <button className="text-gray-500 text-sm hover:text-emerald-600 transition-colors flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              Contact
                            </button>
                            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">
                              Request Quote
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-8">
                  <button className="bg-gray-100 hover:bg-emerald-50 text-gray-700 hover:text-emerald-600 px-6 py-3 rounded-xl font-medium transition-colors">
                    Load more companies...
                  </button>
                </div>
              </div>

              {/* Right Sidebar - Map */}
              {showMap && (
                <div className="lg:w-[400px] flex-shrink-0 hidden lg:block">
                  <div className="sticky top-4">
                    <div className="relative bg-gray-200 rounded-xl h-[600px] overflow-hidden shadow-lg">
                      <iframe
                        src={getMapUrl()}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>

                      {/* Selected Company Info on Map */}
                      {selectedCompany && (
                        <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg p-4 shadow-lg">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-gray-900 font-semibold text-sm truncate">{selectedCompany.name}</p>
                              <p className="text-gray-500 text-xs truncate">{selectedCompany.address}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Map Instruction */}
                      {!selectedCompany && (
                        <div className="absolute top-4 left-4 right-4 bg-white/90 backdrop-blur rounded-lg p-3 shadow">
                          <p className="text-gray-600 text-xs text-center">
                            Click on a company to see its location on the map
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Sponsored Space Banner */}
        <PricingBanner />

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-cyan-500 py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Want to List Your Business?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Join the Rhine Valley's growing business community and reach thousands of local customers.
            </p>
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-3.5 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg"
            >
              Get Started Today
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
