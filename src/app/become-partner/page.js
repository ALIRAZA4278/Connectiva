"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const benefits = [
  {
    title: "Build Mini-Websites",
    description: "Create professional websites for Platinum members and earn steady income from each project.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Creative Freedom",
    description: "Showcase your design skills with full creative control within brand guidelines.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Steady Projects",
    description: "Regular flow of projects from businesses upgrading to Platinum packages.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Fair Compensation",
    description: "Competitive rates for quality work with transparent payment terms.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const requirements = [
  "Portfolio with at least 3 website projects",
  "Proficiency in modern web technologies (HTML, CSS, JavaScript)",
  "Experience with responsive design",
  "Strong communication skills",
  "Based in or familiar with Rhine Valley region (preferred)",
];

const processSteps = [
  { number: 1, title: "Apply", description: "Submit your portfolio and application" },
  { number: 2, title: "Review", description: "Our team reviews your work" },
  { number: 3, title: "Interview", description: "Quick video call to discuss" },
  { number: 4, title: "Onboard", description: "Get set up in our system" },
];

export default function BecomePartnerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    portfolio: "",
    experience: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Partner application:", formData);
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
                Application Submitted!
              </h2>
              <p className="text-gray-500 mb-8">
                Thank you for your interest in becoming a partner. Our team will review your application and get back to you within 3-5 business days.
              </p>
              <Link
                href="/"
                className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-medium transition-colors"
              >
                Return Home
              </Link>
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
        <section className="bg-[#0f1419] py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-emerald-500 text-sm font-semibold uppercase tracking-wider">
                PARTNERSHIP
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
                <span className="text-white">Become a </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400">
                  Partner
                </span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Are you a web developer or designer? Join our network and build custom mini-websites for Platinum members.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
              Why Partner With Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-gray-900 font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-500 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-4">
              How Partnership Works
            </h2>
            <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
              When a business chooses our Platinum package, we connect them with our verified development partners. You build their custom mini-website, they get a professional online presence.
            </p>

            {/* Process Steps */}
            <div className="relative mb-16">
              <div className="hidden sm:block absolute top-6 left-0 right-0 h-0.5 bg-emerald-200"></div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
                {processSteps.map((step) => (
                  <div key={step.number} className="text-center relative">
                    <div className="w-12 h-12 mx-auto border-2 border-emerald-500 rounded-full flex items-center justify-center bg-white text-emerald-500 font-bold text-lg mb-3 relative z-10">
                      {step.number}
                    </div>
                    <h4 className="text-gray-900 font-semibold mb-1">{step.title}</h4>
                    <p className="text-gray-500 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Requirements</h3>
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16 sm:py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
              Apply Now
            </h2>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Full Name <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                  />
                </div>
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
              </div>

              {/* Phone & Website */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
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
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Your Website
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://yourwebsite.com"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Portfolio Link */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Portfolio Link <span className="text-emerald-500">*</span>
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  required
                  placeholder="https://behance.net/yourportfolio or similar"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                />
              </div>

              {/* Experience */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Years of Experience <span className="text-emerald-500">*</span>
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors cursor-pointer"
                >
                  <option value="">Select experience level</option>
                  <option value="1-2">1-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Tell Us About Yourself
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="What makes you a great fit for our partner network? What technologies do you specialize in?"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-3.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
              >
                Submit Application
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
