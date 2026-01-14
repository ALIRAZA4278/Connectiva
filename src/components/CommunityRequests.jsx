"use client";

import { useState } from "react";
import Link from "next/link";

const CommunityRequests = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Home Services", "Professional", "Events", "Other"];

  const requests = [
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
    },
  ];

  const filteredRequests = activeCategory === "All"
    ? requests
    : requests.filter(r => r.category === activeCategory);

  const membershipBadges = [
    { name: "Business+", color: "bg-teal-500" },
    { name: "Premium", color: "bg-emerald-500" },
    { name: "Platinum", color: "bg-gradient-to-r from-lime-500 to-cyan-500" },
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-emerald-500 text-sm font-semibold uppercase tracking-wider">
            COMMUNITY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            <span className="text-gray-900">Community </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-cyan-500">
              Requests
            </span>
          </h2>
          <p className="text-gray-500 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            Post your service requests and connect with verified local businesses.
            Everyone can browse, but only verified members can respond.
          </p>
        </div>

        {/* Who Can Reply Info */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm mb-8 border border-gray-100">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-900 font-medium">Only verified businesses can respond</p>
                <p className="text-gray-500 text-sm">Ensuring quality and trustworthy service providers</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {membershipBadges.map((badge) => (
                <span
                  key={badge.name}
                  className={`${badge.color} text-white text-xs font-medium px-3 py-1.5 rounded-full`}
                >
                  {badge.name}
                </span>
              ))}
            </div>
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

        {/* Request Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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
              <h3 className="text-gray-900 font-bold text-lg mb-2">
                {request.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {request.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
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

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-lime-500 via-emerald-500 to-cyan-500 rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Need a Service?
          </h3>
          <p className="text-white/90 text-base sm:text-lg max-w-3xl mx-auto mb-8">
            Post your request and let verified local businesses come to you. It's free to post,
            and you'll receive quotes from trusted professionals in the Rhine Valley.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/post-request"
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Post a Request
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </Link>
            <Link
              href="/browse-requests"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border-2 border-white text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Browse All Requests
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityRequests;
