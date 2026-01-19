"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jobTypes = ["All Types", "Full-time", "Part-time", "Contract", "Internship"];
const locations = ["All Locations", "Chur", "Bad Ragaz", "Landquart", "Davos", "St. Moritz"];
const categories = ["All Categories", "Technology", "Healthcare", "Finance", "Hospitality", "Construction", "Education"];

const jobs = [
  {
    id: 1,
    title: "Senior Software Developer",
    company: "Alpine Tech Solutions",
    companyLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&q=80",
    location: "Chur",
    type: "Full-time",
    category: "Technology",
    salary: "CHF 95,000 - 120,000",
    description: "We're looking for an experienced software developer to join our growing team. Work on exciting projects using modern technologies.",
    postedAt: "2 days ago",
    featured: true,
    package: "Platinum",
    verified: true,
  },
  {
    id: 2,
    title: "Hotel Manager",
    company: "Grand Resort Bad Ragaz",
    companyLogo: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=100&q=80",
    location: "Bad Ragaz",
    type: "Full-time",
    category: "Hospitality",
    salary: "CHF 80,000 - 100,000",
    description: "Lead our prestigious hotel operations and deliver exceptional guest experiences in the heart of the Rhine Valley.",
    postedAt: "3 days ago",
    featured: true,
    package: "Premium",
    verified: true,
  },
  {
    id: 3,
    title: "Medical Assistant",
    company: "Swiss Health Clinic",
    companyLogo: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=100&q=80",
    location: "Davos",
    type: "Full-time",
    category: "Healthcare",
    salary: "CHF 55,000 - 65,000",
    description: "Support our medical team in providing quality healthcare services to patients in our modern clinic.",
    postedAt: "5 days ago",
    featured: false,
    package: "Business+",
    verified: true,
  },
  {
    id: 4,
    title: "Financial Analyst",
    company: "Graubünden Bank AG",
    companyLogo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=100&q=80",
    location: "Chur",
    type: "Full-time",
    category: "Finance",
    salary: "CHF 75,000 - 90,000",
    description: "Analyze financial data and provide insights to support strategic business decisions.",
    postedAt: "1 week ago",
    featured: false,
    package: "Business+",
    verified: true,
  },
  {
    id: 5,
    title: "Construction Site Manager",
    company: "Berg Construction AG",
    companyLogo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=100&q=80",
    location: "Landquart",
    type: "Full-time",
    category: "Construction",
    salary: "CHF 85,000 - 105,000",
    description: "Oversee construction projects from planning to completion, ensuring quality and safety standards.",
    postedAt: "1 week ago",
    featured: true,
    package: "Business+",
    verified: true,
  },
  {
    id: 6,
    title: "Marketing Intern",
    company: "Rhy-Connect",
    companyLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&q=80",
    location: "Chur",
    type: "Internship",
    category: "Technology",
    salary: "CHF 2,000/month",
    description: "Join our marketing team and learn digital marketing strategies for a growing tech platform.",
    postedAt: "3 days ago",
    featured: false,
    package: "Basic",
    verified: false,
  },
  {
    id: 7,
    title: "Primary School Teacher",
    company: "Mountain View School",
    companyLogo: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=100&q=80",
    location: "St. Moritz",
    type: "Full-time",
    category: "Education",
    salary: "CHF 70,000 - 85,000",
    description: "Inspire young minds and deliver quality education in our international school setting.",
    postedAt: "2 weeks ago",
    featured: false,
    package: "Basic",
    verified: false,
  },
  {
    id: 8,
    title: "Ski Instructor",
    company: "Davos Ski School",
    companyLogo: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=100&q=80",
    location: "Davos",
    type: "Part-time",
    category: "Hospitality",
    salary: "CHF 40/hour",
    description: "Teach skiing to visitors of all levels in one of Switzerland's premier ski destinations.",
    postedAt: "4 days ago",
    featured: false,
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

export default function JobsPage() {
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = jobs.filter((job) => {
    const matchesType = selectedType === "All Types" || job.type === selectedType;
    const matchesLocation = selectedLocation === "All Locations" || job.location === selectedLocation;
    const matchesCategory = selectedCategory === "All Categories" || job.category === selectedCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesLocation && matchesCategory && matchesSearch;
  });

  const featuredJobs = filteredJobs.filter(job => job.featured);
  const regularJobs = filteredJobs.filter(job => !job.featured);

  return (
    <>
    <Navbar/>
      <main className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-[#0f1419] py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-emerald-500 text-sm font-semibold uppercase tracking-wider">
                CAREERS
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
                <span className="text-white">Find Your Dream </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400">
                  Job
                </span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Discover exciting career opportunities in the Rhine Valley. Your next adventure starts here.
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
                    placeholder="Job title or company..."
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

                {/* Type Dropdown */}
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="bg-[#0f1419] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                >
                  {jobTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Jobs Listing */}
        <section className="py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Results Count */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">{filteredJobs.length}</span> jobs found
              </p>
            </div>

            {/* Featured Jobs */}
            {featuredJobs.length > 0 && (
              <div className="mb-10">
                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Featured Jobs
                </h2>
                <div className="space-y-4">
                  {featuredJobs.map((job) => (
                    <Link
                      key={job.id}
                      href={`/jobs/${job.id}`}
                      className="block bg-gradient-to-r from-emerald-50 to-cyan-50 border-2 border-emerald-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* Company Logo */}
                        <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-white">
                          <Image
                            src={job.companyLogo}
                            alt={job.company}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className={`${packageColors[job.package]} text-white text-xs font-medium px-2.5 py-1 rounded-full`}>
                              {job.package}
                            </span>
                            <span className="bg-yellow-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                              Featured
                            </span>
                            <span className="bg-white text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full border">
                              {job.type}
                            </span>
                            {job.verified && (
                              <span className="text-emerald-600 text-xs flex items-center gap-0.5">
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Verified
                              </span>
                            )}
                            <span className="text-gray-400 text-xs">{job.postedAt}</span>
                          </div>
                          <h3 className="font-bold text-gray-900 text-xl mb-1">{job.title}</h3>
                          <p className="text-emerald-600 font-medium mb-2">{job.company}</p>
                          <p className="text-gray-500 text-sm mb-3 line-clamp-2">{job.description}</p>
                          <div className="flex flex-wrap items-center gap-4 text-sm">
                            <span className="flex items-center gap-1 text-gray-500">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {job.location}
                            </span>
                            <span className="font-semibold text-gray-900">{job.salary}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Regular Jobs */}
            <div className="space-y-4">
              {regularJobs.map((job) => (
                <Link
                  key={job.id}
                  href={`/jobs/${job.id}`}
                  className="block bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:border-emerald-200 transition-all"
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Company Logo */}
                    <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                      <Image
                        src={job.companyLogo}
                        alt={job.company}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`${packageColors[job.package]} text-white text-xs font-medium px-2.5 py-1 rounded-full`}>
                          {job.package}
                        </span>
                        <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full">
                          {job.type}
                        </span>
                        <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full">
                          {job.category}
                        </span>
                        {job.verified && (
                          <span className="text-emerald-600 text-xs flex items-center gap-0.5">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </span>
                        )}
                        <span className="text-gray-400 text-xs">{job.postedAt}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1 hover:text-emerald-600 transition-colors">{job.title}</h3>
                      <p className="text-gray-600 mb-2">{job.company}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <span className="flex items-center gap-1 text-gray-500">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </span>
                        <span className="font-semibold text-emerald-600">{job.salary}</span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="hidden sm:flex items-center">
                      <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* No Results */}
            {filteredJobs.length === 0 && (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No jobs found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}

            {/* Load More */}
            {filteredJobs.length > 0 && (
              <div className="text-center mt-12">
                <button className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Load More Jobs
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0f1419] py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Looking to Hire?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Post your job openings and reach qualified candidates in the Rhine Valley.
            </p>
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3 rounded-lg font-medium transition-all"
            >
              Post a Job
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
