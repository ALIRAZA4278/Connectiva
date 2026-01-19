"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock company data - will come from backend later
const companiesData = {
  // ============ PLATINUM PACKAGE ============
  1: {
    id: 1,
    name: "Alpine Tech Solutions",
    category: "Technology",
    location: "Chur",
    address: "Bahnhofstrasse 25, 7000 Chur",
    phone: "+41 81 234 56 78",
    email: "info@alpinetech.ch",
    website: "https://alpinetech.ch",
    description: "Leading IT services and software development company in the Rhine Valley. We provide innovative solutions for businesses of all sizes, from startups to enterprises. Our team of experts specializes in web development, mobile apps, cloud services, and IT consulting.",
    longDescription: "Founded in 2015, Alpine Tech Solutions has grown to become one of the most trusted technology partners in the region. We believe in building long-term relationships with our clients, understanding their unique challenges, and delivering solutions that drive real business value.\n\nOur services include custom software development, cloud migration, cybersecurity consulting, and digital transformation strategies. We work with the latest technologies including React, Node.js, Python, AWS, and Azure.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
      "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&q=80",
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    rating: 4.8,
    reviews: 124,
    reviewsList: [
      { id: 1, author: "Hans Mueller", rating: 5, text: "Excellent service! They delivered our project on time and exceeded expectations.", date: "2 weeks ago" },
      { id: 2, author: "Anna Schmidt", rating: 5, text: "Very professional team. Great communication throughout the project.", date: "1 month ago" },
      { id: 3, author: "Peter Weber", rating: 4, text: "Good work overall. Would recommend for complex IT projects.", date: "2 months ago" },
    ],
    package: "Platinum",
    verified: true,
    openingHours: {
      monday: "08:00 - 18:00",
      tuesday: "08:00 - 18:00",
      wednesday: "08:00 - 18:00",
      thursday: "08:00 - 18:00",
      friday: "08:00 - 17:00",
      saturday: "Closed",
      sunday: "Closed",
    },
    socialMedia: {
      facebook: "https://facebook.com/alpinetech",
      instagram: "https://instagram.com/alpinetech",
      linkedin: "https://linkedin.com/company/alpinetech",
      twitter: "https://twitter.com/alpinetech",
    },
    team: [
      { name: "Thomas Brunner", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80" },
      { name: "Sarah Keller", role: "CTO", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" },
      { name: "Marco Frei", role: "Lead Developer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
    ],
    promotions: [
      { title: "Free IT Consultation", description: "Book a free 1-hour consultation for your business", validUntil: "March 2026" },
    ],
  },

  // ============ PREMIUM PACKAGE ============
  3: {
    id: 3,
    name: "Swiss Wellness Center",
    category: "Health & Wellness",
    location: "Davos",
    address: "Promenade 45, 7270 Davos",
    phone: "+41 81 415 67 89",
    email: "info@swisswellness.ch",
    website: "https://swisswellness.ch",
    description: "Premium spa and wellness services in the heart of the Alps. Experience rejuvenation with our world-class treatments, thermal baths, and holistic wellness programs designed for your complete relaxation.",
    longDescription: "Swiss Wellness Center has been providing exceptional spa experiences since 2010. Our facility combines traditional Swiss wellness practices with modern therapeutic techniques.\n\nWe offer a wide range of services including massage therapy, facial treatments, hydrotherapy, yoga classes, and personalized wellness retreats. Our expert therapists are trained in various international techniques to provide you with the best possible experience.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80",
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80",
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80",
      "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=800&q=80",
      "https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?w=800&q=80",
      "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=800&q=80",
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    rating: 4.7,
    reviews: 156,
    reviewsList: [
      { id: 1, author: "Elena Meier", rating: 5, text: "Absolutely amazing experience! The massage was heavenly.", date: "1 week ago" },
      { id: 2, author: "Robert Schmid", rating: 5, text: "Best wellness center in the region. Highly recommend!", date: "2 weeks ago" },
      { id: 3, author: "Lisa Keller", rating: 4, text: "Great facilities and friendly staff. Will come back.", date: "1 month ago" },
    ],
    package: "Premium",
    verified: true,
    openingHours: {
      monday: "09:00 - 21:00",
      tuesday: "09:00 - 21:00",
      wednesday: "09:00 - 21:00",
      thursday: "09:00 - 21:00",
      friday: "09:00 - 22:00",
      saturday: "08:00 - 22:00",
      sunday: "08:00 - 20:00",
    },
    socialMedia: {
      facebook: "https://facebook.com/swisswellness",
      instagram: "https://instagram.com/swisswellness",
      linkedin: "https://linkedin.com/company/swisswellness",
      twitter: "https://twitter.com/swisswellness",
    },
    team: [
      { name: "Dr. Andrea Müller", role: "Wellness Director", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80" },
      { name: "Nina Brunner", role: "Head Therapist", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80" },
    ],
    promotions: [
      { title: "Winter Wellness Special", description: "20% off all spa packages this winter season", validUntil: "February 2026" },
      { title: "Couples Retreat", description: "Book a couples massage and get a free sauna session", validUntil: "March 2026" },
    ],
  },

  // ============ BUSINESS+ PACKAGE ============
  2: {
    id: 2,
    name: "Rheintal Bäckerei",
    category: "Restaurants & Cafes",
    location: "Bad Ragaz",
    address: "Hauptstrasse 12, 7310 Bad Ragaz",
    phone: "+41 81 302 45 67",
    email: "info@rheintal-baeckerei.ch",
    website: "https://rheintal-baeckerei.ch",
    description: "Traditional Swiss bakery with fresh bread and pastries daily. Family-owned since 1952. We use only the finest local ingredients and traditional recipes passed down through generations.",
    image: "https://images.unsplash.com/photo-1517433670267-30f41c09c7d7?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1517433670267-30f41c09c7d7?w=800&q=80",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80",
    ],
    rating: 4.9,
    reviews: 89,
    reviewsList: [
      { id: 1, author: "Maria Huber", rating: 5, text: "Best bread in the region! Fresh every morning.", date: "1 week ago" },
      { id: 2, author: "Felix Roth", rating: 5, text: "Amazing pastries. A must-visit!", date: "3 weeks ago" },
    ],
    package: "Business+",
    verified: true,
    openingHours: {
      monday: "06:00 - 18:30",
      tuesday: "06:00 - 18:30",
      wednesday: "06:00 - 18:30",
      thursday: "06:00 - 18:30",
      friday: "06:00 - 18:30",
      saturday: "06:00 - 16:00",
      sunday: "07:00 - 12:00",
    },
    socialMedia: {
      facebook: "https://facebook.com/rheintalbaeckerei",
      instagram: "https://instagram.com/rheintalbaeckerei",
    },
  },
  4: {
    id: 4,
    name: "Berg Construction AG",
    category: "Construction",
    location: "Landquart",
    address: "Industriestrasse 8, 7302 Landquart",
    phone: "+41 81 322 11 22",
    email: "info@bergconstruction.ch",
    website: "https://bergconstruction.ch",
    description: "Quality construction and renovation services for residential and commercial projects. Over 30 years of experience in the Rhine Valley building homes and businesses.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
      "https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=800&q=80",
    ],
    rating: 4.6,
    reviews: 67,
    reviewsList: [
      { id: 1, author: "Karl Fischer", rating: 5, text: "Excellent work on our home renovation. Very professional team.", date: "2 weeks ago" },
      { id: 2, author: "Ursula Berger", rating: 4, text: "Good quality work, completed on schedule.", date: "1 month ago" },
    ],
    package: "Business+",
    verified: true,
    openingHours: {
      monday: "07:00 - 17:00",
      tuesday: "07:00 - 17:00",
      wednesday: "07:00 - 17:00",
      thursday: "07:00 - 17:00",
      friday: "07:00 - 16:00",
      saturday: "Closed",
      sunday: "Closed",
    },
    socialMedia: {
      facebook: "https://facebook.com/bergconstruction",
      linkedin: "https://linkedin.com/company/bergconstruction",
    },
  },
  5: {
    id: 5,
    name: "Graubünden Auto Center",
    category: "Automotive",
    location: "Chur",
    address: "Ringstrasse 55, 7000 Chur",
    phone: "+41 81 286 33 44",
    email: "info@graubuenden-auto.ch",
    website: "https://graubuenden-auto.ch",
    description: "Full-service auto dealership with new and certified pre-owned vehicles. Authorized dealer for multiple brands with complete service center and genuine parts.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
    ],
    rating: 4.5,
    reviews: 201,
    reviewsList: [
      { id: 1, author: "Michael Bauer", rating: 5, text: "Great selection of cars and excellent customer service.", date: "1 week ago" },
      { id: 2, author: "Sandra Wenger", rating: 4, text: "Good experience buying my new car here.", date: "3 weeks ago" },
    ],
    package: "Business+",
    verified: true,
    openingHours: {
      monday: "08:00 - 18:30",
      tuesday: "08:00 - 18:30",
      wednesday: "08:00 - 18:30",
      thursday: "08:00 - 18:30",
      friday: "08:00 - 18:30",
      saturday: "09:00 - 16:00",
      sunday: "Closed",
    },
    socialMedia: {
      facebook: "https://facebook.com/graubuendenauto",
      instagram: "https://instagram.com/graubuendenauto",
    },
  },

  // ============ BASIC PACKAGE ============
  6: {
    id: 6,
    name: "Alpen Fitness Studio",
    category: "Health & Wellness",
    location: "St. Moritz",
    address: "Via Maistra 23, 7500 St. Moritz",
    phone: "+41 81 833 44 55",
    email: "info@alpenfitness.ch",
    website: "https://alpenfitness.ch",
    description: "Modern fitness center with personal training and group classes. State-of-the-art equipment in a stunning alpine setting.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    ],
    rating: 4.8,
    reviews: 112,
    reviewsList: [
      { id: 1, author: "Stefan Gruber", rating: 5, text: "Best gym in the area! Great equipment and trainers.", date: "1 week ago" },
    ],
    package: "Basic",
    verified: true,
    openingHours: {
      monday: "06:00 - 22:00",
      tuesday: "06:00 - 22:00",
      wednesday: "06:00 - 22:00",
      thursday: "06:00 - 22:00",
      friday: "06:00 - 21:00",
      saturday: "08:00 - 18:00",
      sunday: "08:00 - 16:00",
    },
  },
  7: {
    id: 7,
    name: "Swiss Legal Partners",
    category: "Professional Services",
    location: "Chur",
    address: "Poststrasse 14, 7000 Chur",
    phone: "+41 81 252 66 77",
    email: "info@swisslegal.ch",
    website: "https://swisslegal.ch",
    description: "Expert legal advice for businesses and individuals in the Rhine Valley. Specializing in corporate law, real estate, and family law matters.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    ],
    rating: 4.9,
    reviews: 78,
    reviewsList: [
      { id: 1, author: "Andreas Kuster", rating: 5, text: "Very knowledgeable lawyers. Helped me with my business setup.", date: "2 weeks ago" },
    ],
    package: "Basic",
    verified: true,
    openingHours: {
      monday: "08:30 - 17:30",
      tuesday: "08:30 - 17:30",
      wednesday: "08:30 - 17:30",
      thursday: "08:30 - 17:30",
      friday: "08:30 - 16:00",
      saturday: "Closed",
      sunday: "Closed",
    },
  },
  8: {
    id: 8,
    name: "Mountain View School",
    category: "Education",
    location: "Arosa",
    address: "Schulweg 5, 7050 Arosa",
    phone: "+41 81 377 88 99",
    email: "info@mountainviewschool.ch",
    website: "https://mountainviewschool.ch",
    description: "International education with Swiss excellence and alpine experiences. Nurturing young minds in a beautiful mountain setting.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    ],
    rating: 4.7,
    reviews: 45,
    reviewsList: [
      { id: 1, author: "Christine Lang", rating: 5, text: "Excellent school with caring teachers.", date: "2 months ago" },
    ],
    package: "Basic",
    verified: false,
    openingHours: {
      monday: "08:00 - 16:00",
      tuesday: "08:00 - 16:00",
      wednesday: "08:00 - 12:00",
      thursday: "08:00 - 16:00",
      friday: "08:00 - 16:00",
      saturday: "Closed",
      sunday: "Closed",
    },
  },
};

// Package feature configuration
const packageFeatures = {
  Basic: {
    maxImages: 1,
    hasInquiryButton: false,
    hasSocialMedia: false,
    hasVideo: false,
    hasBlog: false,
    hasPromotions: false,
    hasPartnerBadge: false,
    hasContactForm: false,
  },
  "Business+": {
    maxImages: 3,
    hasInquiryButton: true,
    hasSocialMedia: true,
    hasVideo: false,
    hasBlog: true,
    hasPromotions: false,
    hasPartnerBadge: false,
    hasContactForm: false,
  },
  Premium: {
    maxImages: 10,
    hasInquiryButton: true,
    hasSocialMedia: true,
    hasVideo: true,
    hasBlog: true,
    hasPromotions: true,
    hasPartnerBadge: true,
    hasContactForm: false,
  },
  Platinum: {
    maxImages: 999,
    hasInquiryButton: true,
    hasSocialMedia: true,
    hasVideo: true,
    hasBlog: true,
    hasPromotions: true,
    hasPartnerBadge: true,
    hasContactForm: true,
    hasMiniWebsite: true,
  },
};

const packageColors = {
  Basic: "bg-gray-500",
  "Business+": "bg-emerald-500",
  Premium: "bg-gradient-to-r from-emerald-500 to-teal-500",
  Platinum: "bg-gradient-to-r from-lime-500 via-emerald-500 to-cyan-500",
};

const badgeColors = {
  Premium: "from-emerald-500 to-teal-500",
  Platinum: "from-lime-500 via-emerald-500 to-cyan-500",
};

export default function CompanyProfilePage() {
  const params = useParams();
  const companyId = parseInt(params.id);
  const company = companiesData[companyId];

  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [inquiryData, setInquiryData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  if (!company) {
    return (
      <>
        <Navbar />
        <main className="bg-gray-50 min-h-screen py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Company Not Found</h1>
            <p className="text-gray-500 mb-8">The company you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/companies" className="text-emerald-600 hover:underline">
              Browse all companies
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const features = packageFeatures[company.package] || packageFeatures.Basic;
  const displayImages = company.images?.slice(0, features.maxImages) || [company.image];

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    console.log("Inquiry submitted:", inquiryData);
    setShowInquiryForm(false);
    alert("Your inquiry has been sent!");
  };

  // Render different layouts based on package
  const renderBasicProfile = () => (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Map placeholder */}
      <div className="h-48 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <iframe
          src={`https://maps.google.com/maps?q=${encodeURIComponent(company.address)}&output=embed`}
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>

      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0">
            <Image src={company.image} alt={company.name} width={64} height={64} className="object-cover" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl font-bold text-gray-900">{company.name}</h1>
              {company.verified && (
                <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <p className="text-gray-500">{company.category} • {company.location}</p>
          </div>
          <span className={`${packageColors[company.package]} text-white text-xs font-medium px-3 py-1 rounded-full`}>
            {company.package}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6">{company.description}</p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-600">
              <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <span>{company.address}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href={`tel:${company.phone}`} className="hover:text-emerald-600">{company.phone}</a>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href={`mailto:${company.email}`} className="hover:text-emerald-600">{company.email}</a>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <a href={company.website} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600">{company.website}</a>
            </div>
          </div>

          {/* Opening Hours */}
          {company.openingHours && (
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Opening Hours</h3>
              <div className="space-y-1 text-sm">
                {Object.entries(company.openingHours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between text-gray-600">
                    <span className="capitalize">{day}</span>
                    <span className={hours === "Closed" ? "text-red-500" : ""}>{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Single Image */}
        {displayImages.length > 0 && (
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Gallery</h3>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src={displayImages[0]} alt={company.name} fill className="object-cover" />
            </div>
          </div>
        )}

        {/* Reviews */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Reviews</h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < Math.floor(company.rating) ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-semibold">{company.rating}</span>
              <span className="text-gray-500">({company.reviews} reviews)</span>
            </div>
          </div>
          {company.reviewsList?.slice(0, 3).map((review) => (
            <div key={review.id} className="border-t border-gray-100 py-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">{review.author}</span>
                <span className="text-gray-400 text-sm">{review.date}</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-4 h-4 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-sm">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderBusinessPlusProfile = () => (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Map */}
      <div className="h-48 bg-gray-200 relative">
        <iframe
          src={`https://maps.google.com/maps?q=${encodeURIComponent(company.address)}&output=embed`}
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>

      <div className="p-6 sm:p-8">
        {/* Header with Request Quote Button */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
          <div className="flex items-start gap-4 flex-1">
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0">
              <Image src={company.image} alt={company.name} width={64} height={64} className="object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl font-bold text-gray-900">{company.name}</h1>
                {company.verified && (
                  <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <p className="text-gray-500">{company.category} • {company.location}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className={`${packageColors[company.package]} text-white text-xs font-medium px-3 py-1 rounded-full`}>
              {company.package}
            </span>
            <button
              onClick={() => setShowInquiryForm(true)}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              Request a Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6">{company.description}</p>

        {/* Contact Info with Social Media */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-600">
              <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <span>{company.address}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href={`tel:${company.phone}`} className="hover:text-emerald-600">{company.phone}</a>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href={`mailto:${company.email}`} className="hover:text-emerald-600">{company.email}</a>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <a href={company.website} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600">{company.website}</a>
            </div>

            {/* Social Media Links */}
            {company.socialMedia && (
              <div className="flex items-center gap-3 pt-2">
                {company.socialMedia.facebook && (
                  <a href={company.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:bg-emerald-500 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                )}
                {company.socialMedia.instagram && (
                  <a href={company.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:bg-emerald-500 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                )}
                {company.socialMedia.linkedin && (
                  <a href={company.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:bg-emerald-500 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Opening Hours */}
          {company.openingHours && (
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Opening Hours</h3>
              <div className="space-y-1 text-sm">
                {Object.entries(company.openingHours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between text-gray-600">
                    <span className="capitalize">{day}</span>
                    <span className={hours === "Closed" ? "text-red-500" : ""}>{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Image Gallery - 3 images */}
        {displayImages.length > 0 && (
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Gallery</h3>
            <div className="grid grid-cols-3 gap-3">
              {displayImages.map((img, index) => (
                <div
                  key={index}
                  className="relative h-32 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImage(img)}
                >
                  <Image src={img} alt={`${company.name} ${index + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reviews */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Reviews</h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < Math.floor(company.rating) ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-semibold">{company.rating}</span>
              <span className="text-gray-500">({company.reviews} reviews)</span>
            </div>
          </div>
          {company.reviewsList?.slice(0, 3).map((review) => (
            <div key={review.id} className="border-t border-gray-100 py-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">{review.author}</span>
                <span className="text-gray-400 text-sm">{review.date}</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-4 h-4 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-sm">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPremiumProfile = () => (
    <div className="space-y-6">
      {/* Main Card */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Map */}
        <div className="h-48 bg-gray-200 relative">
          <iframe
            src={`https://maps.google.com/maps?q=${encodeURIComponent(company.address)}&output=embed`}
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>

        <div className="p-6 sm:p-8">
          {/* Header with Badge */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0">
                <Image src={company.image} alt={company.name} width={64} height={64} className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-2xl font-bold text-gray-900">{company.name}</h1>
                  {company.verified && (
                    <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <p className="text-gray-500">{company.category} • {company.location}</p>
              </div>
            </div>
            <div className="flex flex-col sm:items-end gap-3">
              <div className="flex items-center gap-3">
                {/* Partner Badge */}
                <div className={`bg-gradient-to-r ${badgeColors[company.package]} text-white text-xs font-medium px-4 py-1.5 rounded-full flex items-center gap-1`}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Connectiva Partner
                </div>
              </div>
              <button
                onClick={() => setShowInquiryForm(true)}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                Request a Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6">{company.description}</p>
          {company.longDescription && (
            <p className="text-gray-600 mb-6 whitespace-pre-line">{company.longDescription}</p>
          )}

          {/* Contact Info with Social Media */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600">
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>{company.address}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${company.phone}`} className="hover:text-emerald-600">{company.phone}</a>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${company.email}`} className="hover:text-emerald-600">{company.email}</a>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <a href={company.website} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600">{company.website}</a>
              </div>

              {/* Social Media Links */}
              {company.socialMedia && (
                <div className="flex items-center gap-3 pt-2">
                  {company.socialMedia.facebook && (
                    <a href={company.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:bg-emerald-500 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                  )}
                  {company.socialMedia.instagram && (
                    <a href={company.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:bg-emerald-500 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </a>
                  )}
                  {company.socialMedia.linkedin && (
                    <a href={company.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:bg-emerald-500 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                  )}
                  {company.socialMedia.twitter && (
                    <a href={company.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:bg-emerald-500 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Opening Hours */}
            {company.openingHours && (
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Opening Hours</h3>
                <div className="space-y-1 text-sm">
                  {Object.entries(company.openingHours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between text-gray-600">
                      <span className="capitalize">{day}</span>
                      <span className={hours === "Closed" ? "text-red-500" : ""}>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Video Section */}
          {company.video && features.hasVideo && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Company Video</h3>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
                <iframe
                  src={company.video}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* Image Gallery - 10 images */}
          {displayImages.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Gallery</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {displayImages.map((img, index) => (
                  <div
                    key={index}
                    className="relative h-24 sm:h-32 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedImage(img)}
                  >
                    <Image src={img} alt={`${company.name} ${index + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Team Section */}
          {company.team && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Our Team</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {company.team.map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden mb-2">
                      <Image src={member.image} alt={member.name} fill className="object-cover" />
                    </div>
                    <p className="font-medium text-gray-900 text-sm">{member.name}</p>
                    <p className="text-gray-500 text-xs">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Promotions */}
          {company.promotions && features.hasPromotions && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Current Promotions</h3>
              <div className="space-y-3">
                {company.promotions.map((promo, index) => (
                  <div key={index} className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold text-gray-900">{promo.title}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{promo.description}</p>
                    <p className="text-emerald-600 text-xs mt-2">Valid until {promo.validUntil}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reviews */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Reviews</h3>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < Math.floor(company.rating) ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-semibold">{company.rating}</span>
                <span className="text-gray-500">({company.reviews} reviews)</span>
              </div>
            </div>
            {company.reviewsList?.map((review) => (
              <div key={review.id} className="border-t border-gray-100 py-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{review.author}</span>
                  <span className="text-gray-400 text-sm">{review.date}</span>
                </div>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partner Badge Footer */}
      <div className={`bg-gradient-to-r ${badgeColors[company.package]} p-6 rounded-xl text-center text-white`}>
        <div className="flex items-center justify-center gap-2 mb-2">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="font-bold text-lg">{company.name}</span>
        </div>
        <p className="text-white/90 text-sm">Official Connectiva {company.package} Partner</p>
      </div>
    </div>
  );

  const renderPlatinumProfile = () => (
    <div className="space-y-0">
      {/* Hero Section with Full Width Slider */}
      <div className="relative h-[400px] sm:h-[500px] bg-gray-900">
        {displayImages.length > 0 && (
          <Image
            src={displayImages[0]}
            alt={company.name}
            fill
            className="object-cover opacity-80"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0 shadow-lg">
                  <Image src={company.image} alt={company.name} width={80} height={80} className="object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-3xl sm:text-4xl font-bold text-white">{company.name}</h1>
                    {company.verified && (
                      <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <p className="text-white/80">{company.category} • {company.location}</p>
                </div>
              </div>
              <button
                onClick={() => setShowInquiryForm(true)}
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 shadow-lg"
              >
                Request a Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Welcome to {company.name}</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">{company.description}</p>
          </div>

          {/* Image Gallery Grid */}
          {displayImages.length > 1 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {displayImages.slice(1, 5).map((img, index) => (
                <div
                  key={index}
                  className="relative h-48 rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(img)}
                >
                  <Image src={img} alt={`${company.name} ${index + 2}`} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute top-3 left-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center font-bold text-gray-900">
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* About & Contact Section */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* About */}
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">About Us</h3>
              <p className="text-gray-600 whitespace-pre-line">{company.longDescription || company.description}</p>

              {/* Team */}
              {company.team && (
                <div className="mt-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Our Team</h4>
                  <div className="flex flex-wrap gap-4">
                    {company.team.map((member, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                          <Image src={member.image} alt={member.name} fill className="object-cover" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">{member.name}</p>
                          <p className="text-gray-500 text-xs">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                    </div>
                    <span>{company.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <a href={`tel:${company.phone}`} className="hover:text-emerald-600">{company.phone}</a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <a href={`mailto:${company.email}`} className="hover:text-emerald-600">{company.email}</a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <a href={company.website} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600">{company.website}</a>
                  </div>
                </div>

                {/* Social Media */}
                {company.socialMedia && (
                  <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
                    {company.socialMedia.facebook && (
                      <a href={company.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:bg-emerald-500 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                      </a>
                    )}
                    {company.socialMedia.instagram && (
                      <a href={company.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:bg-emerald-500 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                      </a>
                    )}
                    {company.socialMedia.linkedin && (
                      <a href={company.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:bg-emerald-500 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      </a>
                    )}
                    {company.socialMedia.twitter && (
                      <a href={company.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:bg-emerald-500 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Opening Hours */}
              {company.openingHours && (
                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Opening Hours</h3>
                  <div className="space-y-2">
                    {Object.entries(company.openingHours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between text-gray-600">
                        <span className="capitalize font-medium">{day}</span>
                        <span className={hours === "Closed" ? "text-red-500" : "text-emerald-600"}>{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      {company.video && (
        <div className="bg-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Company Video</h3>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 max-w-4xl mx-auto shadow-lg">
              <iframe
                src={company.video}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Full Gallery */}
      {displayImages.length > 5 && (
        <div className="bg-gray-50 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {displayImages.slice(5).map((img, index) => (
                <div
                  key={index}
                  className="relative h-40 rounded-lg overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(img)}
                >
                  <Image src={img} alt={`${company.name} ${index + 6}`} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Contact Form */}
      <div className="bg-white py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Send Us a Message</h3>
          <form onSubmit={handleInquirySubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={inquiryData.name}
                onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={inquiryData.email}
                onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone (optional)"
              value={inquiryData.phone}
              onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              value={inquiryData.message}
              onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
              required
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-lime-500 via-emerald-500 to-cyan-500 hover:from-lime-600 hover:via-emerald-600 hover:to-cyan-600 text-white py-3 rounded-lg font-medium transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Customer Reviews</h3>
            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-6 h-6 ${i < Math.floor(company.rating) ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xl font-bold">{company.rating}</span>
              <span className="text-gray-500">({company.reviews} reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {company.reviewsList?.map((review) => (
              <div key={review.id} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-gray-900">{review.author}</span>
                  <span className="text-gray-400 text-sm">{review.date}</span>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Platinum Partner Badge Footer */}
      <div className="bg-gradient-to-r from-lime-500 via-emerald-500 to-cyan-500 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-2xl font-bold text-white">{company.name}</span>
          </div>
          <p className="text-white/90">Official Connectiva PLATINUM Partner</p>
        </div>
      </div>
    </div>
  );

  // Determine which layout to render
  const renderProfile = () => {
    switch (company.package) {
      case "Platinum":
        return renderPlatinumProfile();
      case "Premium":
        return renderPremiumProfile();
      case "Business+":
        return renderBusinessPlusProfile();
      default:
        return renderBasicProfile();
    }
  };

  return (
    <>
      <Navbar />
      <main className={`min-h-screen ${company.package === "Platinum" ? "" : "bg-gray-50 py-8 sm:py-12"}`}>
        <div className={company.package === "Platinum" ? "" : "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"}>
          {/* Breadcrumb */}
          {company.package !== "Platinum" && (
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-sm">
                <li><Link href="/" className="text-gray-500 hover:text-emerald-600">Home</Link></li>
                <li className="text-gray-400">/</li>
                <li><Link href="/companies" className="text-gray-500 hover:text-emerald-600">Companies</Link></li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900 font-medium">{company.name}</li>
              </ol>
            </nav>
          )}

          {renderProfile()}
        </div>
      </main>

      {/* Inquiry Modal */}
      {showInquiryForm && company.package !== "Platinum" && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 sm:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Request a Quote</h3>
              <button onClick={() => setShowInquiryForm(false)} className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={inquiryData.name}
                onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={inquiryData.email}
                onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500"
              />
              <input
                type="tel"
                placeholder="Phone (optional)"
                value={inquiryData.phone}
                onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                value={inquiryData.message}
                onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 resize-none"
              />
              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-medium transition-colors"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Image Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-4 right-4 text-white hover:text-gray-300" onClick={() => setSelectedImage(null)}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-5xl max-h-[80vh] w-full h-full">
            <Image src={selectedImage} alt="Gallery" fill className="object-contain" />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
