"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Jobs data with package tiers
const jobsData = {
  // PLATINUM Company Job
  1: {
    id: 1,
    title: "Senior Software Developer",
    company: {
      id: 1,
      name: "Alpine Tech Solutions",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
      coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      description: "Leading IT services and software development company in the Rhine Valley. We provide innovative solutions for businesses of all sizes.",
      employees: "50-100",
      founded: "2008",
      website: "www.alpinetech.ch",
      package: "Platinum",
      verified: true,
    },
    location: "Chur",
    type: "Full-time",
    category: "Technology",
    salary: "CHF 95,000 - 120,000",
    salaryPeriod: "per year",
    description: "We're looking for an experienced software developer to join our growing team. Work on exciting projects using modern technologies in a collaborative environment.",
    responsibilities: [
      "Design and develop high-quality software solutions",
      "Collaborate with cross-functional teams to define requirements",
      "Write clean, maintainable, and well-documented code",
      "Participate in code reviews and mentor junior developers",
      "Stay up-to-date with emerging technologies and best practices",
    ],
    requirements: [
      "5+ years of experience in software development",
      "Strong proficiency in JavaScript/TypeScript, React, and Node.js",
      "Experience with cloud services (AWS, Azure, or GCP)",
      "Excellent problem-solving and communication skills",
      "BSc in Computer Science or equivalent experience",
    ],
    benefits: [
      "Competitive salary with annual bonus",
      "Flexible working hours and remote options",
      "Professional development budget",
      "Health insurance and pension plan",
      "Modern office with mountain views",
      "Team events and company retreats",
    ],
    postedAt: "2 days ago",
    deadline: "March 15, 2026",
    applicants: 24,
    featured: true,
    urgent: false,
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    contactPerson: {
      name: "Sarah Müller",
      role: "HR Manager",
      email: "jobs@alpinetech.ch",
      phone: "+41 81 123 45 67",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    },
  },
  // PREMIUM Company Job
  2: {
    id: 2,
    title: "Hotel Manager",
    company: {
      id: 9,
      name: "Grand Resort Bad Ragaz",
      logo: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=200&q=80",
      coverImage: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80",
      description: "Luxury 5-star resort offering world-class hospitality, spa services, and fine dining in the heart of the Rhine Valley.",
      employees: "200-500",
      founded: "1840",
      website: "www.grandresort.ch",
      package: "Premium",
      verified: true,
    },
    location: "Bad Ragaz",
    type: "Full-time",
    category: "Hospitality",
    salary: "CHF 80,000 - 100,000",
    salaryPeriod: "per year",
    description: "Lead our prestigious hotel operations and deliver exceptional guest experiences in the heart of the Rhine Valley.",
    responsibilities: [
      "Oversee daily hotel operations and staff management",
      "Ensure exceptional guest satisfaction and service quality",
      "Manage budgets and optimize operational efficiency",
      "Coordinate with department heads on strategic initiatives",
      "Handle VIP guest relations and special requests",
    ],
    requirements: [
      "10+ years of experience in luxury hospitality",
      "Proven track record in hotel management",
      "Excellent leadership and communication skills",
      "Fluent in German and English, French is a plus",
      "Degree in Hotel Management or related field",
    ],
    benefits: [
      "Competitive salary package",
      "Accommodation allowance",
      "Staff discounts on resort services",
      "Health insurance",
      "Career development opportunities",
    ],
    postedAt: "3 days ago",
    deadline: "March 30, 2026",
    applicants: 18,
    featured: true,
    urgent: false,
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    ],
    video: null,
    contactPerson: {
      name: "Thomas Weber",
      role: "Head of HR",
      email: "careers@grandresort.ch",
      phone: "+41 81 234 56 78",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    },
  },
  // BUSINESS+ Company Job
  3: {
    id: 3,
    title: "Medical Assistant",
    company: {
      id: 10,
      name: "Swiss Health Clinic",
      logo: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=200&q=80",
      description: "Modern healthcare facility providing comprehensive medical services to the Rhine Valley community.",
      employees: "20-50",
      package: "Business+",
      verified: true,
    },
    location: "Davos",
    type: "Full-time",
    category: "Healthcare",
    salary: "CHF 55,000 - 65,000",
    salaryPeriod: "per year",
    description: "Support our medical team in providing quality healthcare services to patients in our modern clinic.",
    responsibilities: [
      "Assist doctors during patient consultations",
      "Manage patient records and appointments",
      "Perform basic medical procedures",
      "Handle administrative tasks",
    ],
    requirements: [
      "Certified Medical Assistant qualification",
      "2+ years of clinical experience",
      "Strong interpersonal skills",
      "Proficiency in German",
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Continuing education support",
    ],
    postedAt: "5 days ago",
    deadline: "February 28, 2026",
    applicants: 12,
    featured: false,
    urgent: false,
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"],
    video: null,
    contactPerson: null,
  },
  // BUSINESS+ Company Job
  4: {
    id: 4,
    title: "Financial Analyst",
    company: {
      id: 11,
      name: "Graubünden Bank AG",
      logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&q=80",
      description: "Regional bank providing financial services to individuals and businesses in Graubünden.",
      employees: "50-100",
      package: "Business+",
      verified: true,
    },
    location: "Chur",
    type: "Full-time",
    category: "Finance",
    salary: "CHF 75,000 - 90,000",
    salaryPeriod: "per year",
    description: "Analyze financial data and provide insights to support strategic business decisions.",
    responsibilities: [
      "Prepare financial reports and forecasts",
      "Analyze market trends and investment opportunities",
      "Support risk assessment processes",
      "Present findings to senior management",
    ],
    requirements: [
      "Bachelor's degree in Finance or Economics",
      "3+ years of financial analysis experience",
      "Strong Excel and financial modeling skills",
      "CFA certification preferred",
    ],
    benefits: [
      "Performance bonus",
      "Pension contributions",
      "Professional development",
    ],
    postedAt: "1 week ago",
    deadline: "March 10, 2026",
    applicants: 31,
    featured: false,
    urgent: false,
    images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"],
    video: null,
    contactPerson: null,
  },
  // BUSINESS+ Company Job
  5: {
    id: 5,
    title: "Construction Site Manager",
    company: {
      id: 4,
      name: "Berg Construction AG",
      logo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200&q=80",
      description: "Quality construction and renovation services for residential and commercial projects.",
      employees: "50-100",
      package: "Business+",
      verified: true,
    },
    location: "Landquart",
    type: "Full-time",
    category: "Construction",
    salary: "CHF 85,000 - 105,000",
    salaryPeriod: "per year",
    description: "Oversee construction projects from planning to completion, ensuring quality and safety standards.",
    responsibilities: [
      "Manage construction site operations",
      "Coordinate with subcontractors and suppliers",
      "Ensure safety compliance",
      "Monitor project budgets and timelines",
    ],
    requirements: [
      "Civil Engineering degree or equivalent",
      "5+ years construction management experience",
      "Strong leadership skills",
      "Knowledge of Swiss building regulations",
    ],
    benefits: [
      "Company vehicle",
      "Performance bonus",
      "Training opportunities",
    ],
    postedAt: "1 week ago",
    deadline: "March 20, 2026",
    applicants: 15,
    featured: true,
    urgent: false,
    images: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"],
    video: null,
    contactPerson: {
      name: "Hans Brunner",
      role: "HR Coordinator",
      email: "jobs@bergconstruction.ch",
      phone: null,
      image: null,
    },
  },
  // BASIC Company Job
  6: {
    id: 6,
    title: "Marketing Intern",
    company: {
      id: 12,
      name: "Rhy-Connect",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
      description: "Digital platform connecting businesses in the Rhine Valley.",
      package: "Basic",
      verified: false,
    },
    location: "Chur",
    type: "Internship",
    category: "Technology",
    salary: "CHF 2,000",
    salaryPeriod: "per month",
    description: "Join our marketing team and learn digital marketing strategies for a growing tech platform.",
    responsibilities: [
      "Support social media management",
      "Assist with content creation",
      "Help with marketing campaigns",
    ],
    requirements: [
      "Currently studying Marketing or Communications",
      "Basic knowledge of social media",
      "Good communication skills",
    ],
    benefits: [],
    postedAt: "3 days ago",
    deadline: "February 20, 2026",
    applicants: 8,
    featured: false,
    urgent: false,
    images: [],
    video: null,
    contactPerson: null,
  },
  // BASIC Company Job
  7: {
    id: 7,
    title: "Primary School Teacher",
    company: {
      id: 8,
      name: "Mountain View School",
      logo: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=200&q=80",
      description: "International education with Swiss excellence.",
      package: "Basic",
      verified: false,
    },
    location: "St. Moritz",
    type: "Full-time",
    category: "Education",
    salary: "CHF 70,000 - 85,000",
    salaryPeriod: "per year",
    description: "Inspire young minds and deliver quality education in our international school setting.",
    responsibilities: [
      "Teach primary school curriculum",
      "Prepare lesson plans",
      "Assess student progress",
    ],
    requirements: [
      "Teaching certification",
      "Experience in primary education",
      "English and German fluency",
    ],
    benefits: [],
    postedAt: "2 weeks ago",
    deadline: "March 1, 2026",
    applicants: 6,
    featured: false,
    urgent: false,
    images: [],
    video: null,
    contactPerson: null,
  },
  // BASIC Company Job
  8: {
    id: 8,
    title: "Ski Instructor",
    company: {
      id: 13,
      name: "Davos Ski School",
      logo: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=200&q=80",
      description: "Professional ski instruction services in Davos.",
      package: "Basic",
      verified: false,
    },
    location: "Davos",
    type: "Part-time",
    category: "Hospitality",
    salary: "CHF 40",
    salaryPeriod: "per hour",
    description: "Teach skiing to visitors of all levels in one of Switzerland's premier ski destinations.",
    responsibilities: [
      "Provide ski lessons to guests",
      "Ensure safety on slopes",
      "Adapt teaching to skill levels",
    ],
    requirements: [
      "Swiss Ski Instructor certification",
      "Excellent skiing ability",
      "Good communication skills",
    ],
    benefits: [],
    postedAt: "4 days ago",
    deadline: "Ongoing",
    applicants: 4,
    featured: false,
    urgent: false,
    images: [],
    video: null,
    contactPerson: null,
  },
};

const packageFeatures = {
  Basic: {
    hasContactForm: false,
    hasDetailedCompanyInfo: false,
    hasImages: false,
    hasVideo: false,
    hasBenefits: false,
    hasContactPerson: false,
    maxResponsibilities: 3,
  },
  "Business+": {
    hasContactForm: true,
    hasDetailedCompanyInfo: true,
    hasImages: true,
    hasVideo: false,
    hasBenefits: true,
    hasContactPerson: true,
    maxResponsibilities: 5,
  },
  Premium: {
    hasContactForm: true,
    hasDetailedCompanyInfo: true,
    hasImages: true,
    hasVideo: true,
    hasBenefits: true,
    hasContactPerson: true,
    maxResponsibilities: 10,
  },
  Platinum: {
    hasContactForm: true,
    hasDetailedCompanyInfo: true,
    hasImages: true,
    hasVideo: true,
    hasBenefits: true,
    hasContactPerson: true,
    maxResponsibilities: 999,
  },
};

const packageColors = {
  Basic: "bg-gray-500",
  "Business+": "bg-emerald-500",
  Premium: "bg-gradient-to-r from-emerald-500 to-teal-500",
  Platinum: "bg-gradient-to-r from-lime-500 via-emerald-500 to-cyan-500",
};

export default function JobDetailPage() {
  const params = useParams();
  const job = jobsData[params.id];
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!job) {
    return (
      <>
        <Navbar />
        <main className="bg-gray-50 min-h-screen py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h1>
            <p className="text-gray-500 mb-8">This job listing may have been removed or is no longer available.</p>
            <Link href="/jobs" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Browse All Jobs
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const features = packageFeatures[job.company.package] || packageFeatures.Basic;

  // Render based on package
  const renderBasicJob = () => (
    <main className="bg-gray-50 min-h-screen">
      {/* Simple Header */}
      <section className="bg-[#0f1419] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/jobs" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Jobs
          </Link>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-white rounded-xl overflow-hidden flex-shrink-0">
              <Image src={job.company.logo} alt={job.company.name} width={64} height={64} className="object-cover" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{job.title}</h1>
              <p className="text-gray-400">{job.company.name} • {job.location}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            {/* Job Info */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm">{job.type}</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm">{job.category}</span>
              <span className="bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-lg text-sm font-medium">{job.salary} {job.salaryPeriod}</span>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Job Description</h2>
              <p className="text-gray-600">{job.description}</p>
            </div>

            {/* Requirements */}
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Requirements</h2>
              <ul className="space-y-2">
                {job.requirements.slice(0, 3).map((req, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* Posted Info */}
            <div className="pt-4 border-t border-gray-100 text-sm text-gray-500">
              Posted {job.postedAt} • Deadline: {job.deadline}
            </div>
          </div>

          {/* Upgrade CTA for Basic */}
          <div className="mt-6 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-6 text-center">
            <p className="text-gray-600 mb-3">Want to see more details and apply directly?</p>
            <p className="text-sm text-gray-500">Contact the employer directly or check their website for more information.</p>
          </div>
        </div>
      </section>
    </main>
  );

  const renderBusinessPlusJob = () => (
    <main className="bg-gray-50 min-h-screen">
      {/* Header with Company Info */}
      <section className="bg-[#0f1419] py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/jobs" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Jobs
          </Link>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-20 h-20 bg-white rounded-xl overflow-hidden flex-shrink-0">
              <Image src={job.company.logo} alt={job.company.name} width={80} height={80} className="object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl sm:text-3xl font-bold text-white">{job.title}</h1>
                {job.featured && (
                  <span className="bg-yellow-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">Featured</span>
                )}
              </div>
              <Link href={`/companies/${job.company.id}`} className="text-emerald-400 hover:text-emerald-300 font-medium">
                {job.company.name}
              </Link>
              {job.company.verified && (
                <span className="ml-2 inline-flex items-center gap-1 text-emerald-400 text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Verified
                </span>
              )}
              <p className="text-gray-400 mt-2">{job.location} • {job.type}</p>
              <div className="mt-4">
                <span className={`${packageColors[job.company.package]} text-white text-xs font-medium px-3 py-1 rounded-full`}>
                  {job.company.package}
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">{job.salary}</div>
              <div className="text-gray-400 text-sm">{job.salaryPeriod}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Image */}
              {features.hasImages && job.images && job.images.length > 0 && (
                <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <div className="relative h-64">
                    <Image src={job.images[0]} alt={job.title} fill className="object-cover" />
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-bold text-gray-900 mb-4">About This Role</h2>
                <p className="text-gray-600 mb-6">{job.description}</p>

                {/* Responsibilities */}
                <h3 className="font-bold text-gray-900 mb-3">Responsibilities</h3>
                <ul className="space-y-2 mb-6">
                  {job.responsibilities.slice(0, features.maxResponsibilities).map((resp, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {resp}
                    </li>
                  ))}
                </ul>

                {/* Requirements */}
                <h3 className="font-bold text-gray-900 mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              {features.hasBenefits && job.benefits && job.benefits.length > 0 && (
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-lg font-bold text-gray-900 mb-4">Benefits</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {job.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3 text-gray-600">
                        <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Apply Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <button
                  onClick={() => setShowApplicationForm(true)}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-3 rounded-lg font-medium transition-colors mb-4"
                >
                  Apply Now
                </button>
                <div className="text-center text-sm text-gray-500">
                  {job.applicants} applicants • Posted {job.postedAt}
                </div>
              </div>

              {/* Job Details */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">Job Details</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Job Type</span>
                    <span className="text-gray-900 font-medium">{job.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Category</span>
                    <span className="text-gray-900 font-medium">{job.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Location</span>
                    <span className="text-gray-900 font-medium">{job.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Deadline</span>
                    <span className="text-gray-900 font-medium">{job.deadline}</span>
                  </div>
                </div>
              </div>

              {/* Company Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">About the Company</h3>
                <p className="text-gray-600 text-sm mb-4">{job.company.description}</p>
                <Link
                  href={`/companies/${job.company.id}`}
                  className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
                >
                  View Company Profile →
                </Link>
              </div>

              {/* Contact Person */}
              {features.hasContactPerson && job.contactPerson && (
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4">Contact Person</h3>
                  <div className="flex items-center gap-3 mb-3">
                    {job.contactPerson.image && (
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image src={job.contactPerson.image} alt={job.contactPerson.name} width={48} height={48} className="object-cover" />
                      </div>
                    )}
                    <div>
                      <div className="font-medium text-gray-900">{job.contactPerson.name}</div>
                      <div className="text-sm text-gray-500">{job.contactPerson.role}</div>
                    </div>
                  </div>
                  {job.contactPerson.email && (
                    <a href={`mailto:${job.contactPerson.email}`} className="block text-emerald-600 hover:text-emerald-700 text-sm">
                      {job.contactPerson.email}
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Apply for this Position</h3>
              <button onClick={() => setShowApplicationForm(false)} className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
                <textarea rows={4} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">CV/Resume</label>
                <input type="file" className="w-full" accept=".pdf,.doc,.docx" />
              </div>
              <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-medium transition-colors">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );

  const renderPremiumJob = () => (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero with Cover Image */}
      <section className="relative">
        <div className="h-64 sm:h-80 relative">
          <Image
            src={job.company.coverImage || job.images?.[0] || job.company.logo}
            alt={job.company.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1419] via-[#0f1419]/60 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <Link href="/jobs" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Jobs
            </Link>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-24 h-24 bg-white rounded-2xl overflow-hidden flex-shrink-0 shadow-lg">
                <Image src={job.company.logo} alt={job.company.name} width={96} height={96} className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h1 className="text-3xl sm:text-4xl font-bold text-white">{job.title}</h1>
                  {job.featured && (
                    <span className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">Featured</span>
                  )}
                  {job.urgent && (
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">Urgent</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Link href={`/companies/${job.company.id}`} className="text-emerald-400 hover:text-emerald-300 font-medium text-lg">
                    {job.company.name}
                  </Link>
                  {job.company.verified && (
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                  <span className={`${packageColors[job.company.package]} text-white text-xs font-bold px-3 py-1 rounded-full ml-2`}>
                    {job.company.package}
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-3 text-white/80">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {job.location}
                  </span>
                  <span>{job.type}</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white">{job.salary}</div>
                <div className="text-white/60 text-sm">{job.salaryPeriod}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Video */}
              {features.hasVideo && job.video && (
                <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <div className="relative pt-[56.25%]">
                    <iframe
                      src={job.video}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {/* Gallery */}
              {features.hasImages && job.images && job.images.length > 1 && (
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-lg font-bold text-gray-900 mb-4">Workplace Gallery</h2>
                  <div className="grid grid-cols-3 gap-3">
                    {job.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative h-24 rounded-lg overflow-hidden ${selectedImage === index ? 'ring-2 ring-emerald-500' : ''}`}
                      >
                        <Image src={img} alt={`${job.company.name} ${index + 1}`} fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-bold text-gray-900 mb-4">About This Opportunity</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{job.description}</p>

                {/* Responsibilities */}
                <h3 className="font-bold text-gray-900 mb-3">Key Responsibilities</h3>
                <ul className="space-y-3 mb-6">
                  {job.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <span className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                        {index + 1}
                      </span>
                      {resp}
                    </li>
                  ))}
                </ul>

                {/* Requirements */}
                <h3 className="font-bold text-gray-900 mb-3">What We're Looking For</h3>
                <ul className="space-y-2">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              {features.hasBenefits && job.benefits && job.benefits.length > 0 && (
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
                  <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" clipRule="evenodd" />
                    </svg>
                    Benefits & Perks
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {job.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3">
                        <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Company Info */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-bold text-gray-900 mb-4">About {job.company.name}</h2>
                <p className="text-gray-600 mb-4">{job.company.description}</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                  {job.company.employees && (
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="font-bold text-gray-900">{job.company.employees}</div>
                      <div className="text-xs text-gray-500">Employees</div>
                    </div>
                  )}
                  {job.company.founded && (
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="font-bold text-gray-900">{job.company.founded}</div>
                      <div className="text-xs text-gray-500">Founded</div>
                    </div>
                  )}
                </div>
                <Link
                  href={`/companies/${job.company.id}`}
                  className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  View Full Company Profile
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Apply Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm sticky top-6">
                <button
                  onClick={() => setShowApplicationForm(true)}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-4 rounded-lg font-bold text-lg transition-colors mb-4"
                >
                  Apply for This Position
                </button>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-4">
                  <span>{job.applicants} applicants</span>
                  <span>•</span>
                  <span>Posted {job.postedAt}</span>
                </div>
                <div className="pt-4 border-t border-gray-100 text-center">
                  <span className="text-sm text-gray-500">Application deadline:</span>
                  <span className="block font-medium text-gray-900">{job.deadline}</span>
                </div>
              </div>

              {/* Contact Person */}
              {features.hasContactPerson && job.contactPerson && (
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4">Questions? Contact:</h3>
                  <div className="flex items-center gap-4 mb-4">
                    {job.contactPerson.image && (
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <Image src={job.contactPerson.image} alt={job.contactPerson.name} width={64} height={64} className="object-cover" />
                      </div>
                    )}
                    <div>
                      <div className="font-medium text-gray-900">{job.contactPerson.name}</div>
                      <div className="text-sm text-gray-500">{job.contactPerson.role}</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {job.contactPerson.email && (
                      <a href={`mailto:${job.contactPerson.email}`} className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {job.contactPerson.email}
                      </a>
                    )}
                    {job.contactPerson.phone && (
                      <a href={`tel:${job.contactPerson.phone}`} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {job.contactPerson.phone}
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Share */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">Share This Job</h3>
                <div className="flex gap-3">
                  <button className="flex-1 bg-[#0077B5] text-white py-2 rounded-lg text-sm font-medium hover:opacity-90">
                    LinkedIn
                  </button>
                  <button className="flex-1 bg-[#1DA1F2] text-white py-2 rounded-lg text-sm font-medium hover:opacity-90">
                    Twitter
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

      {/* Application Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Apply for {job.title}</h3>
              <button onClick={() => setShowApplicationForm(false)} className="text-gray-400 hover:text-gray-600">
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn Profile (optional)</label>
                <input type="url" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500" placeholder="https://linkedin.com/in/..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
                <textarea rows={4} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500" placeholder="Tell us why you're perfect for this role..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Upload CV/Resume</label>
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
                  <input type="file" className="hidden" id="cv-upload" accept=".pdf,.doc,.docx" />
                  <label htmlFor="cv-upload" className="cursor-pointer">
                    <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span className="text-sm text-gray-500">Click to upload or drag and drop</span>
                    <span className="block text-xs text-gray-400 mt-1">PDF, DOC, DOCX (max 5MB)</span>
                  </label>
                </div>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-3 rounded-lg font-medium transition-colors">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );

  // Platinum uses Premium layout with all features
  const renderPlatinumJob = () => renderPremiumJob();

  return (
    <>
      <Navbar />
      {job.company.package === "Basic" && renderBasicJob()}
      {job.company.package === "Business+" && renderBusinessPlusJob()}
      {job.company.package === "Premium" && renderPremiumJob()}
      {job.company.package === "Platinum" && renderPlatinumJob()}
      <Footer />
    </>
  );
}
