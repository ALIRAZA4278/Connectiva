"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const packages = [
  {
    id: "basic",
    name: "Basic",
    price: "Free",
    period: "",
    description: "Get started with essential features",
    popular: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "CHF 49",
    period: "/month",
    description: "Grow with enhanced visibility",
    popular: false,
  },
  {
    id: "business",
    name: "Business+",
    price: "CHF 99",
    period: "/month",
    description: "Full features for active businesses",
    popular: true,
  },
  {
    id: "platinum",
    name: "Platinum",
    price: "CHF 199",
    period: "/month",
    description: "Maximum online presence",
    popular: false,
  },
];

const categories = [
  "Restaurants & Cafes",
  "Health & Wellness",
  "Technology",
  "Construction",
  "Retail & Shopping",
  "Professional Services",
  "Automotive",
  "Education",
  "Real Estate",
  "Finance & Insurance",
  "Manufacturing",
  "Other",
];

export default function GetStartedPage() {
  const [step, setStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [formData, setFormData] = useState({
    businessName: "",
    category: "",
    email: "",
    phone: "",
    website: "",
    address: "",
    city: "",
    description: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handlePackageSelect = (pkgId) => {
    setSelectedPackage(pkgId);
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration:", { package: selectedPackage, ...formData });
    setStep(3);
  };

  return (
    <>
      <Navbar />
      <main className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-[#0f1419] py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-emerald-500 text-sm font-semibold uppercase tracking-wider">
                REGISTRATION
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
                <span className="text-white">Get </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400">
                  Started
                </span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Join the Rhine Valley's leading business directory in just a few steps.
              </p>

              {/* Progress Steps */}
              <div className="flex items-center justify-center gap-4 mt-10">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                        step >= s
                          ? "bg-emerald-500 text-white"
                          : "bg-gray-700 text-gray-400"
                      }`}
                    >
                      {step > s ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        s
                      )}
                    </div>
                    {s < 3 && (
                      <div className={`w-16 sm:w-24 h-1 mx-2 ${step > s ? "bg-emerald-500" : "bg-gray-700"}`} />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-8 sm:gap-16 mt-4 text-sm">
                <span className={step >= 1 ? "text-white" : "text-gray-500"}>Choose Plan</span>
                <span className={step >= 2 ? "text-white" : "text-gray-500"}>Business Info</span>
                <span className={step >= 3 ? "text-white" : "text-gray-500"}>Complete</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Step 1: Choose Package */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
                  Choose Your Package
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {packages.map((pkg) => (
                    <button
                      key={pkg.id}
                      onClick={() => handlePackageSelect(pkg.id)}
                      className={`relative bg-white rounded-xl p-6 text-left border-2 transition-all hover:shadow-lg ${
                        pkg.popular
                          ? "border-emerald-500 ring-2 ring-emerald-100"
                          : "border-gray-100 hover:border-emerald-300"
                      }`}
                    >
                      {pkg.popular && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          POPULAR
                        </span>
                      )}
                      <h3 className="font-bold text-gray-900 text-lg">{pkg.name}</h3>
                      <div className="flex items-baseline gap-1 my-2">
                        <span className="text-2xl font-bold text-gray-900">{pkg.price}</span>
                        <span className="text-gray-500 text-sm">{pkg.period}</span>
                      </div>
                      <p className="text-gray-500 text-sm">{pkg.description}</p>
                    </button>
                  ))}
                </div>
                <p className="text-center text-gray-500 mt-6">
                  Not sure which plan to choose?{" "}
                  <Link href="/pricing" className="text-emerald-600 hover:underline">
                    Compare all features
                  </Link>
                </p>
              </div>
            )}

            {/* Step 2: Business Information */}
            {step === 2 && (
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">Business Information</h2>
                  <button
                    onClick={() => setStep(1)}
                    className="text-gray-500 hover:text-gray-700 text-sm flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
                  {/* Selected Package */}
                  <div className="bg-emerald-50 rounded-lg p-4 mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-emerald-600">Selected Package</p>
                      <p className="font-bold text-gray-900">
                        {packages.find((p) => p.id === selectedPackage)?.name}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-emerald-600 text-sm hover:underline"
                    >
                      Change
                    </button>
                  </div>

                  {/* Business Name */}
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Business Name <span className="text-emerald-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      required
                      placeholder="Your Business Name"
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

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
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
                        placeholder="info@yourbusiness.ch"
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Phone <span className="text-emerald-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+41 XX XXX XX XX"
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Website */}
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://www.yourbusiness.ch"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Address & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div className="sm:col-span-2">
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Address <span className="text-emerald-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        placeholder="Street Address"
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        City <span className="text-emerald-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        placeholder="Chur"
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Business Description <span className="text-emerald-500">*</span>
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your business..."
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  {/* Terms */}
                  <div className="mb-6">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        required
                        className="mt-1 w-4 h-4 text-emerald-500 border-gray-300 rounded focus:ring-emerald-500"
                      />
                      <span className="text-sm text-gray-600">
                        I agree to the{" "}
                        <Link href="/terms" className="text-emerald-600 hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-emerald-600 hover:underline">
                          Privacy Policy
                        </Link>
                      </span>
                    </label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-3.5 rounded-lg font-medium transition-all"
                  >
                    Complete Registration
                  </button>
                </form>
              </div>
            )}

            {/* Step 3: Success */}
            {step === 3 && (
              <div className="max-w-lg mx-auto text-center">
                <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Registration Complete!
                  </h2>
                  <p className="text-gray-500 mb-8">
                    Thank you for joining Rhy-Connect. We've sent a confirmation email to your inbox.
                    Our team will review your listing and it will be live within 24 hours.
                  </p>
                  <div className="space-y-3">
                    <Link
                      href="/companies"
                      className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-medium transition-colors"
                    >
                      Browse Directory
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
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
