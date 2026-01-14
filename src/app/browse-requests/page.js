"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = ["All", "Home Services", "Professional", "Events", "Automotive", "Other"];

const allRequests = [
  {
    id: 1,
    category: "Home Services",
    title: "Need my apartment painted",
    description: "Looking for a professional painter for my 3-room apartment in Chur. White walls, approximately 80m². Need it done within 2 weeks.",
    author: "Maria S.",
    location: "Chur",
    postedAt: "2 hours ago",
    replies: 5,
    urgent: true,
    budget: "CHF 2,000 - 3,000",
  },
  {
    id: 2,
    category: "Professional",
    title: "Looking for accountant for small business",
    description: "Need help with annual tax filing and bookkeeping for my small retail shop. Experience with Swiss tax law required.",
    author: "Thomas K.",
    location: "Bad Ragaz",
    postedAt: "5 hours ago",
    replies: 3,
    urgent: false,
    budget: "CHF 500 - 1,000",
  },
  {
    id: 3,
    category: "Home Services",
    title: "Garden maintenance needed",
    description: "Weekly garden maintenance for a 200m² garden. Tasks include mowing, hedge trimming, and seasonal planting.",
    author: "Anna B.",
    location: "Landquart",
    postedAt: "1 day ago",
    replies: 8,
    urgent: false,
    budget: "CHF 200/month",
  },
  {
    id: 4,
    category: "Events",
    title: "Catering for company event",
    description: "Looking for catering service for 50 people. Corporate lunch event, dietary options needed including vegetarian and vegan.",
    author: "Swiss Tech GmbH",
    location: "Maienfeld",
    postedAt: "2 days ago",
    replies: 12,
    urgent: true,
    budget: "CHF 3,000 - 4,000",
  },
  {
    id: 5,
    category: "Automotive",
    title: "Winter tires installation",
    description: "Need someone to install winter tires on my SUV. Have the tires already, just need installation and balancing.",
    author: "Peter M.",
    location: "Davos",
    postedAt: "3 days ago",
    replies: 4,
    urgent: false,
    budget: "CHF 100 - 150",
  },
  {
    id: 6,
    category: "Home Services",
    title: "Bathroom renovation consultation",
    description: "Planning to renovate my bathroom. Looking for a contractor to provide consultation and quote for the work.",
    author: "Lisa F.",
    location: "Chur",
    postedAt: "4 days ago",
    replies: 6,
    urgent: false,
    budget: "CHF 15,000 - 20,000",
  },
  {
    id: 7,
    category: "Professional",
    title: "Website development for restaurant",
    description: "Need a modern website for my restaurant with online menu, reservation system, and photo gallery.",
    author: "Restaurant Alpenblick",
    location: "Arosa",
    postedAt: "5 days ago",
    replies: 9,
    urgent: false,
    budget: "CHF 3,000 - 5,000",
  },
  {
    id: 8,
    category: "Events",
    title: "Wedding photographer needed",
    description: "Looking for a professional photographer for our wedding in June. Full day coverage plus engagement shoot.",
    author: "Sarah & Marco",
    location: "St. Moritz",
    postedAt: "1 week ago",
    replies: 15,
    urgent: false,
    budget: "CHF 2,500 - 4,000",
  },
];

export default function BrowseRequestsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRequests = allRequests.filter((request) => {
    const matchesCategory = activeCategory === "All" || request.category === activeCategory;
    const matchesSearch = request.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         request.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
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
                COMMUNITY
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
                <span className="text-white">Browse </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400">
                  Requests
                </span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Find service requests from the Rhine Valley community and connect with potential customers.
              </p>
            </div>

            {/* Search */}
            <div className="max-w-2xl mx-auto mt-10">
              <div className="relative">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search requests..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#1a2332] border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Info Banner */}
            <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 border border-emerald-200 rounded-xl p-4 sm:p-6 mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Want to respond to requests?</p>
                    <p className="text-gray-500 text-sm">Only Business+, Premium, and Platinum members can reply.</p>
                  </div>
                </div>
                <Link
                  href="/pricing"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium transition-colors text-sm"
                >
                  Upgrade Plan
                </Link>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-emerald-500 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">{filteredRequests.length}</span> requests found
              </p>
              <Link
                href="/post-request"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
              >
                Post a Request
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </Link>
            </div>

            {/* Request Cards */}
            <div className="space-y-4">
              {filteredRequests.map((request) => (
                <div
                  key={request.id}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  {/* Header Row */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                        {request.category}
                      </span>
                      {request.urgent && (
                        <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          Urgent
                        </span>
                      )}
                    </div>
                    <span className="text-gray-400 text-xs">{request.postedAt}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-gray-900 font-bold text-lg mb-2">{request.title}</h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{request.description}</p>

                  {/* Budget */}
                  <div className="bg-gray-50 rounded-lg px-3 py-2 inline-block mb-4">
                    <span className="text-gray-500 text-sm">Budget: </span>
                    <span className="text-gray-900 font-medium text-sm">{request.budget}</span>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4">
                      {/* Author */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm font-medium">{request.author}</span>
                      </div>
                      {/* Location */}
                      <div className="flex items-center gap-1 text-gray-400 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {request.location}
                      </div>
                    </div>
                    {/* Replies */}
                    <div className="flex items-center gap-1 text-emerald-500 text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      {request.replies} replies
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredRequests.length === 0 && (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No requests found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}

            {/* Load More */}
            {filteredRequests.length > 0 && (
              <div className="text-center mt-12">
                <button className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors">
                  Load More Requests
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
