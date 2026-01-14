"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  "Home Services",
  "Professional Services",
  "Events",
  "Automotive",
  "Education & Training",
  "Health & Wellness",
  "Other",
];

const locations = [
  "Chur",
  "Bad Ragaz",
  "Landquart",
  "Maienfeld",
  "Davos",
  "St. Moritz",
  "Arosa",
  "Other",
];

export default function PostRequestPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    budget: "",
    location: "",
    contactName: "",
    email: "",
    phone: "",
    urgent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Request submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="bg-gray-50 min-h-screen py-16">
          <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Request Posted!
              </h2>
              <p className="text-gray-500 mb-8">
                Your service request has been posted successfully. Verified businesses will be able to see and respond to your request.
              </p>
              <div className="space-y-3">
                <Link
                  href="/browse-requests"
                  className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  View All Requests
                </Link>
                <Link
                  href="/"
                  className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-medium transition-colors"
                >
                  Return Home
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-[#0f1419] py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-emerald-500 text-sm font-semibold uppercase tracking-wider">
                COMMUNITY
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
                <span className="text-white">Post a </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400">
                  Request
                </span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Describe the service you need and let verified local businesses come to you.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Info Banner */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 font-medium">How it works</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Post your request for free. Only verified Business+, Premium, and Platinum members can respond, ensuring you get quotes from trusted local professionals.
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Request Details</h2>

              {/* Title */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Request Title <span className="text-emerald-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Need my apartment painted"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                />
              </div>

              {/* Category */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Category <span className="text-emerald-500">*</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors cursor-pointer"
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Description <span className="text-emerald-500">*</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Describe what you need in detail. Include size, materials, timeline, and any specific requirements..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors resize-none"
                />
              </div>

              {/* Budget & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Budget Range
                  </label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="e.g., CHF 1,000 - 2,000"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Location <span className="text-emerald-500">*</span>
                  </label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors cursor-pointer"
                  >
                    <option value="">Select location</option>
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Urgent Checkbox */}
              <div className="mb-6">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="urgent"
                    checked={formData.urgent}
                    onChange={handleChange}
                    className="w-4 h-4 text-emerald-500 border-gray-300 rounded focus:ring-emerald-500"
                  />
                  <span className="text-sm text-gray-700">
                    Mark as urgent (needed within 1 week)
                  </span>
                </label>
              </div>

              <hr className="my-6" />

              <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>

              {/* Contact Name */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Your Name <span className="text-emerald-500">*</span>
                </label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Email <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+41 XX XXX XX XX"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Privacy Note */}
              <p className="text-gray-500 text-sm mb-6">
                Your contact information will only be shared with businesses that respond to your request.
              </p>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-3.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
              >
                Post Request
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
