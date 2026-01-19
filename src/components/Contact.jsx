"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    interested: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const interestOptions = [
    "Basic Package",
    "Pro Package",
    "Business+ Package",
    "Platinum Package",
    "Partnership Opportunity",
    "General Inquiry",
  ];

  return (
    <section className="bg-[#0f1419] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-cyan-500 text-sm font-semibold uppercase tracking-wider">
            CONTACT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            <span className="text-white">Get In </span>
            <span className="text-emerald-500">Touch</span>
          </h2>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            Ready to join the Rhine Valley's digital hub? We'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left - Contact Form */}
          <div className="flex-1">
            <form
              onSubmit={handleSubmit}
              className="bg-[#1a2332] rounded-xl p-6 sm:p-8 border border-gray-700/50"
            >
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-white text-sm mb-2">
                    Full Name <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0f1419] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm mb-2">
                    Email Address <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0f1419] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div className="mb-4">
                <label className="block text-white text-sm mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Your Company"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full bg-[#0f1419] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              {/* Interest Dropdown */}
              <div className="mb-4">
                <label className="block text-white text-sm mb-2">
                  I'm interested in <span className="text-emerald-500">*</span>
                </label>
                <select
                  name="interested"
                  value={formData.interested}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0f1419] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors appearance-none cursor-pointer"
                >
                  <option value="" className="text-gray-500">Select an option</option>
                  {interestOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-white text-sm mb-2">
                  Message <span className="text-emerald-500">*</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us about your business..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-[#0f1419] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3.5 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>

          {/* Right - Contact Info & Hours */}
          <div className="lg:w-80 space-y-6">
            {/* Contact Information Card */}
            <div className="bg-[#1a2332] rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-white font-bold text-lg mb-6">Contact Information</h3>

              <div className="space-y-5">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">info@connectiva</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white">+41 XX XXX XX XX</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Rhine Valley, Switzerland</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6">
              <h3 className="text-white font-bold text-lg mb-4">Business Hours</h3>

              <div className="space-y-3">
                <div className="flex justify-between text-white">
                  <span>Monday - Friday</span>
                  <span>9:00 – 18:00</span>
                </div>
                <div className="flex justify-between text-white">
                  <span>Saturday</span>
                  <span>10:00 – 14:00</span>
                </div>
                <div className="flex justify-between text-white">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
