"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const packages = [
  {
    name: "Basic",
    price: "Free",
    period: "",
    description: "Presence only. Perfect for browsing the platform.",
    popular: false,
    color: "bg-gray-50",
    borderColor: "border-gray-200",
    buttonColor: "bg-gray-900 hover:bg-gray-800",
    badge: null,
    features: [
      { text: "Browse companies, jobs, real estate, cars", included: true },
      { text: "Use car comparison feature", included: true },
      { text: "Post community service requests", included: true },
      { text: "View company profiles", included: true },
    ],
    notIncluded: [
      "Create company profile",
      "Create listings",
      "Respond to community requests",
      "Featured placement",
    ],
  },
  {
    name: "Business+",
    price: "CHF XX",
    period: "/month",
    description: "Higher visibility + first leads for growing businesses.",
    popular: false,
    color: "bg-emerald-50",
    borderColor: "border-emerald-200",
    buttonColor: "bg-emerald-600 hover:bg-emerald-700",
    badge: null,
    features: [
      { text: "Company profile (created by team)", included: true },
      { text: "Logo, address, contact details", included: true },
      { text: "Link to website + Social media", included: true },
      { text: "Searchable in directory", included: true },
      { text: "\"Request a Quote\" button", included: true },
      { text: "Inquiry form on profile", included: true },
      { text: "Category slider (rotating)", included: true },
      { text: "Higher priority in search", included: true },
      { text: "1x Company of the Week", included: true },
      { text: "Up to 3 images in profile", included: true },
      { text: "Mini blog access (2 posts/year)", included: true },
      { text: "Respond to community requests", included: true },
    ],
    notIncluded: [
      "Videos",
      "Promotions / actions",
      "Partner badge",
      "Bonus listings",
    ],
  },
  {
    name: "Premium",
    price: "CHF XX",
    period: "/month",
    description: "Active marketing + strong visibility. Best value!",
    popular: true,
    color: "bg-gradient-to-br from-emerald-50 to-teal-50",
    borderColor: "border-emerald-300",
    buttonColor: "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600",
    badge: "Connectiva Partner",
    features: [
      { text: "Everything in Business+", included: true },
      { text: "Video section (1 video)", included: true },
      { text: "Up to 10 images in gallery", included: true },
      { text: "Logo in Partner Slider (homepage)", included: true },
      { text: "Blog access (4 posts/year)", included: true },
      { text: "Promotions / actions (4/year)", included: true },
      { text: "Significantly higher priority", included: true },
      { text: "Partner badge \"Connectiva Partner\"", included: true },
      { text: "Bonus: 5 cars OR 2 real estate OR 2 jobs", included: true },
    ],
    notIncluded: [
      "Mini website",
      "Dedicated contact form",
      "Unlimited content",
    ],
  },
  {
    name: "Platinum",
    price: "CHF XX",
    period: "/month",
    description: "Maximum presence + own mini website.",
    popular: false,
    color: "bg-gradient-to-br from-lime-50 via-emerald-50 to-cyan-50",
    borderColor: "border-transparent ring-2 ring-gradient",
    buttonColor: "bg-gradient-to-r from-lime-500 via-emerald-500 to-cyan-500 hover:from-lime-600 hover:via-emerald-600 hover:to-cyan-600",
    badge: "Platinum Partner",
    features: [
      { text: "Everything in Premium", included: true },
      { text: "Dedicated mini website", included: true },
      { text: "Hero slider + Image gallery", included: true },
      { text: "Multiple videos", included: true },
      { text: "Extended text sections", included: true },
      { text: "Dedicated contact form", included: true },
      { text: "Highest priority in all listings", included: true },
      { text: "2x Company of the Week/year", included: true },
      { text: "Logo in category headers", included: true },
      { text: "Unlimited blog posts", included: true },
      { text: "12 promotions/year", included: true },
      { text: "Platinum Partner badge", included: true },
      { text: "Bonus: 10 cars OR 4 real estate OR 4 jobs", included: true },
    ],
    notIncluded: [],
  },
];

const addOns = [
  {
    category: "Jobs",
    description: "Post job openings to attract talent",
    options: [
      { slots: "1 position", price: "CHF XX" },
      { slots: "3 positions", price: "CHF XX" },
      { slots: "5 positions", price: "CHF XX" },
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    category: "Real Estate",
    description: "List properties for sale or rent",
    options: [
      { slots: "1 listing", price: "CHF XX" },
      { slots: "3 listings", price: "CHF XX" },
      { slots: "5 listings", price: "CHF XX" },
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    category: "Vehicles",
    description: "Showcase your vehicle inventory",
    options: [
      { slots: "5 vehicles", price: "CHF XX" },
      { slots: "15 vehicles", price: "CHF XX" },
      { slots: "50 vehicles", price: "CHF XX" },
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
];

const sponsorships = [
  {
    name: "Homepage Banner (Slider)",
    description: "Rotating banner on homepage with companies from various sectors",
    price: "Contact Us",
  },
  {
    name: "Category Page Banner",
    description: "Rotating banner on category pages with same-industry companies",
    price: "Contact Us",
  },
  {
    name: "Premium Sponsor",
    description: "Fixed medium-size banner on homepage visible all year",
    price: "Contact Us",
  },
  {
    name: "Gold Sponsor",
    description: "Large full-width banner on homepage fixed all year",
    price: "Contact Us",
  },
  {
    name: "Elite Sponsor",
    description: "Large homepage banner + footer banner on ALL pages",
    price: "Contact Us",
  },
];

const comparisonFeatures = [
  { feature: "Browse Platform", basic: true, business: true, premium: true, platinum: true },
  { feature: "Car Comparison", basic: true, business: true, premium: true, platinum: true },
  { feature: "Post Community Requests", basic: true, business: true, premium: true, platinum: true },
  { feature: "Company Profile", basic: false, business: true, premium: true, platinum: true },
  { feature: "Request a Quote Button", basic: false, business: true, premium: true, platinum: true },
  { feature: "Social Media Links", basic: false, business: true, premium: true, platinum: true },
  { feature: "Profile Images", basic: "-", business: "3", premium: "10", platinum: "Unlimited" },
  { feature: "Video Section", basic: false, business: false, premium: "1", platinum: "Multiple" },
  { feature: "Category Slider", basic: false, business: true, premium: true, platinum: true },
  { feature: "Partner Slider (Homepage)", basic: false, business: false, premium: true, platinum: true },
  { feature: "Blog Posts / Year", basic: "-", business: "2", premium: "4", platinum: "Unlimited" },
  { feature: "Promotions / Year", basic: "-", business: "-", premium: "4", platinum: "12" },
  { feature: "Company of Week", basic: "-", business: "1x", premium: "-", platinum: "2x/year" },
  { feature: "Partner Badge", basic: false, business: false, premium: true, platinum: true },
  { feature: "Mini Website", basic: false, business: false, premium: false, platinum: true },
  { feature: "Contact Form", basic: false, business: false, premium: false, platinum: true },
  { feature: "Search Priority", basic: "Standard", business: "Higher", premium: "Highest", platinum: "TOP" },
  { feature: "Bonus Car Listings", basic: "-", business: "-", premium: "5", platinum: "10" },
  { feature: "Bonus Real Estate", basic: "-", business: "-", premium: "2", platinum: "4" },
  { feature: "Bonus Job Postings", basic: "-", business: "-", premium: "2", platinum: "4" },
];

// Listing rules for "Who Can Do What" section
const listingRules = [
  {
    title: "Property for Rent/Sale",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    rules: [
      { user: "Private Person", requirement: "Max. 1 listing (Free)", highlight: true },
      { user: "Company (Basic)", requirement: "Max. 1 listing (Free)", highlight: true },
      { user: "Business+ / Premium / Platinum", requirement: "Multiple listings based on package", highlight: false },
    ],
  },
  {
    title: "Vehicle for Sale",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    rules: [
      { user: "Private Person", requirement: "Max. 1 listing (Free)", highlight: true },
      { user: "Company (Basic)", requirement: "Max. 1 listing (Free)", highlight: true },
      { user: "Business+ / Premium / Platinum", requirement: "Multiple listings based on package", highlight: false },
    ],
  },
  {
    title: "Job Applications",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    rules: [
      { user: "Job-Seeker Profile", requirement: "Free for all registered users", highlight: true },
      { user: "Apply for Jobs", requirement: "Free - No package required", highlight: true },
    ],
  },
  {
    title: "Job Postings",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    rules: [
      { user: "Private Individuals", requirement: "NOT allowed to post jobs", highlight: false, notAllowed: true },
      { user: "Companies (Business+, Premium, Platinum)", requirement: "Can post jobs based on package", highlight: false },
    ],
  },
  {
    title: "Community Requests",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    rules: [
      { user: "Post Request", requirement: "Any registered user can post", highlight: true },
      { user: "Reply to Request", requirement: "Only Business+, Premium, Platinum", highlight: false },
    ],
  },
  {
    title: "Moderation",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    rules: [
      { user: "Community Replies", requirement: "Manually reviewed before publishing", highlight: false },
      { user: "Protection", requirement: "Against spam, scams & misuse", highlight: true },
    ],
  },
];

const faqs = [
  {
    question: "What does 'CHF XX' mean in pricing?",
    answer: "Our platform is in market validation phase. Final pricing will be confirmed soon. All prices are configurable and will be displayed once finalized.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades will apply at the start of your next billing cycle.",
  },
  {
    question: "How are company profiles created?",
    answer: "Company profiles are professionally created by the Rhy-Connect team. Once you purchase a package, our team will work with you to build your profile.",
  },
  {
    question: "What is a Bonus Package?",
    answer: "Premium and Platinum members can choose ONE bonus package: Cars, Real Estate, or Jobs. These provide additional listing slots as part of your subscription.",
  },
  {
    question: "Can I purchase Add-Ons without a subscription?",
    answer: "Add-ons are available for both Connectiva and Non-Connectiva customers. You can purchase them separately to list jobs, properties, or vehicles.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, bank transfers, and TWINT for Swiss customers. All prices are in CHF (Swiss Francs).",
  },
  {
    question: "Can private persons list properties or cars for free?",
    answer: "Yes! Private persons can list 1 property (for rent or sale) and 1 car for free with the Basic plan. Companies need a package if they want to list more than one.",
  },
  {
    question: "Do I need to pay to apply for jobs?",
    answer: "No, applying for jobs is completely free for all users. You don't need any package to browse and apply for job listings.",
  },
  {
    question: "Who can post job listings?",
    answer: "Only listed companies with an active package can post job listings. The number of job posts depends on the selected package tier.",
  },
  {
    question: "How do community requests work?",
    answer: "Any registered user can post a community request for free. However, only companies with a paid package can respond to these requests.",
  },
];

export default function PricingPage() {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <>
      <Navbar />
      <main className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-[#0f1419] py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-emerald-500 text-sm font-semibold uppercase tracking-wider">
                PRICING
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
                <span className="text-white">Simple, Transparent </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400">
                  Pricing
                </span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Choose the perfect package for your business. Browsing is always free!
              </p>
              <p className="text-amber-400 text-sm mt-4 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Prices in market validation phase - final pricing coming soon
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 sm:py-20 -mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`${pkg.color} rounded-2xl p-6 relative border ${pkg.borderColor} ${
                    pkg.popular ? "shadow-xl scale-105 z-10" : "shadow-sm"
                  } ${pkg.name === "Platinum" ? "ring-2 ring-gradient-to-r from-lime-500 to-cyan-500" : ""} flex flex-col`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        BEST VALUE
                      </span>
                    </div>
                  )}

                  {pkg.name === "Platinum" && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-lime-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        MAXIMUM PRESENCE
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-gray-900 font-bold text-xl">{pkg.name}</h3>
                      {pkg.badge && (
                        <span className="text-xs bg-emerald-500/10 text-emerald-600 px-2 py-0.5 rounded-full">
                          {pkg.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                      <span className="text-gray-500">{pkg.period}</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-2">{pkg.description}</p>
                  </div>

                  <ul className="space-y-2.5 flex-1">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature.text}</span>
                      </li>
                    ))}
                    {pkg.notIncluded.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <svg className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/get-started"
                    className={`block w-full text-center ${pkg.buttonColor} text-white py-3 rounded-lg font-medium transition-all mt-6`}
                  >
                    {pkg.price === "Free" ? "Browse Free" : "Get Started"}
                  </Link>
                </div>
              ))}
            </div>

            {/* Show Comparison Toggle */}
            <div className="text-center mt-10">
              <button
                onClick={() => setShowComparison(!showComparison)}
                className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
              >
                {showComparison ? "Hide" : "Show"} Full Comparison
                <svg className={`w-4 h-4 transition-transform ${showComparison ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Full Comparison Table */}
        {showComparison && (
          <section className="pb-16 sm:pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="text-left py-4 px-6 font-semibold text-gray-900">Feature</th>
                        <th className="text-center py-4 px-4 font-semibold text-gray-900">Basic</th>
                        <th className="text-center py-4 px-4 font-semibold text-gray-900">Business+</th>
                        <th className="text-center py-4 px-4 font-semibold text-emerald-600 bg-emerald-50">Premium</th>
                        <th className="text-center py-4 px-4 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-cyan-500">Platinum</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonFeatures.map((row, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-6 text-gray-700 text-sm">{row.feature}</td>
                          <td className="py-3 px-4 text-center">
                            {typeof row.basic === "boolean" ? (
                              row.basic ? (
                                <svg className="w-5 h-5 text-emerald-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              ) : (
                                <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              )
                            ) : (
                              <span className="text-gray-500 text-sm">{row.basic}</span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-center">
                            {typeof row.business === "boolean" ? (
                              row.business ? (
                                <svg className="w-5 h-5 text-emerald-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              ) : (
                                <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              )
                            ) : (
                              <span className="text-gray-700 text-sm font-medium">{row.business}</span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-center bg-emerald-50/50">
                            {typeof row.premium === "boolean" ? (
                              row.premium ? (
                                <svg className="w-5 h-5 text-emerald-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              ) : (
                                <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              )
                            ) : (
                              <span className="text-emerald-700 text-sm font-medium">{row.premium}</span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-center">
                            {typeof row.platinum === "boolean" ? (
                              row.platinum ? (
                                <svg className="w-5 h-5 text-emerald-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              ) : (
                                <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              )
                            ) : (
                              <span className="text-gray-900 text-sm font-bold">{row.platinum}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Add-On Packages */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-emerald-500 text-sm font-semibold uppercase tracking-wider">
                ADD-ON PACKAGES
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-gray-900">
                Boost Your Listings
              </h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                Need more listings? Purchase add-on slots for Jobs, Real Estate, or Vehicles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                    {addon.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{addon.category}</h3>
                  <p className="text-gray-500 text-sm mb-4">{addon.description}</p>
                  <div className="space-y-2">
                    {addon.options.map((option, i) => (
                      <div key={i} className="flex items-center justify-between bg-white rounded-lg px-4 py-2 border border-gray-100">
                        <span className="text-gray-700 text-sm">{option.slots}</span>
                        <span className="text-emerald-600 font-semibold text-sm">{option.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-500 text-sm">
                Add-ons available for both Connectiva and Non-Connectiva customers
              </p>
            </div>
          </div>
        </section>

        {/* Who Can Do What Section */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-emerald-500 text-sm font-semibold uppercase tracking-wider">
                LISTING RULES
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-gray-900">
                Who Can Do What?
              </h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                Understand what you can do on our platform based on your account type.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listingRules.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {item.rules.map((rule, i) => (
                      <div key={i} className={`flex items-start gap-3 p-3 rounded-lg ${
                        rule.notAllowed ? 'bg-red-50 border border-red-200' :
                        rule.highlight ? 'bg-emerald-50 border border-emerald-200' : 'bg-gray-50'
                      }`}>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          rule.notAllowed ? 'bg-red-500 text-white' :
                          rule.highlight ? 'bg-emerald-500 text-white' : 'bg-gray-300 text-white'
                        }`}>
                          {rule.notAllowed ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          ) : rule.highlight ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          )}
                        </div>
                        <div>
                          <p className="text-gray-900 font-medium text-sm">{rule.user}</p>
                          <p className={`text-sm ${
                            rule.notAllowed ? 'text-red-600' :
                            rule.highlight ? 'text-emerald-700' : 'text-gray-500'
                          }`}>{rule.requirement}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Summary */}
            <div className="mt-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">FREE</div>
                  <p className="text-white/80 text-sm">Browse all content without registration</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">1 FREE</div>
                  <p className="text-white/80 text-sm">Property & Vehicle listing for registered users</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">FREE</div>
                  <p className="text-white/80 text-sm">Job-seeker profile & applications</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">FREE</div>
                  <p className="text-white/80 text-sm">Post community requests</p>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
              <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-amber-800 font-medium text-sm">Important: All community request replies are manually reviewed before publishing to protect against spam and misuse.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsorship Section */}
        <section className="py-16 sm:py-20 bg-[#0f1419]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-emerald-500 text-sm font-semibold uppercase tracking-wider">
                SPONSORSHIPS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-white">
                Premium Visibility Options
              </h2>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                Maximize your brand exposure with premium banner placements across the platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sponsorships.map((sponsor, index) => (
                <div key={index} className="bg-[#1a2332] rounded-xl p-6 border border-gray-700/50">
                  <h3 className="font-bold text-white text-lg mb-2">{sponsor.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{sponsor.description}</p>
                  <div className="text-emerald-400 font-bold text-lg">{sponsor.price}</div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Contact for Sponsorships
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-emerald-500 text-sm font-semibold uppercase tracking-wider">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-gray-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-500">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-gray-500 mb-4">Still have questions?</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
              >
                Contact our team
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-lime-500 via-emerald-500 to-cyan-500 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Join hundreds of businesses already thriving on Rhy-Connect.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Get Started
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/companies"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors"
              >
                Browse Free
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
