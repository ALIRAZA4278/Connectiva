"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const NewsBlog = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const newsItems = [
    {
      id: 1,
      title: "Grand Opening: New Swiss Bistro in St. Gallen",
      category: "Grand Opening",
      company: "Swiss Bistro",
      date: "2 days ago",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
      excerpt: "Join us for the grand opening celebration this weekend with special offers and live music.",
      href: "/news/grand-opening-swiss-bistro",
    },
    {
      id: 2,
      title: "Open Day at Alpine Tech Solutions",
      category: "Open Day",
      company: "Alpine Tech Solutions",
      date: "3 days ago",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
      excerpt: "Visit our office and learn about the latest technology solutions for your business.",
      href: "/news/open-day-alpine-tech",
    },
    {
      id: 3,
      title: "Major Promotion at Weber Real Estate This Month",
      category: "Promotion",
      company: "Weber Real Estate",
      date: "5 days ago",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
      excerpt: "Special discounts on property listings and free consultation for first-time buyers.",
      href: "/news/weber-promotion",
    },
    {
      id: 4,
      title: "Anniversary: 10 Years of Rheintal Motors",
      category: "Anniversary",
      company: "Rheintal Motors",
      date: "1 week ago",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80",
      excerpt: "Celebrating a decade of excellence in automotive services with exclusive deals.",
      href: "/news/rheintal-motors-anniversary",
    },
    {
      id: 5,
      title: "New Partnership Announcement",
      category: "News",
      company: "TechHub Solutions",
      date: "1 week ago",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
      excerpt: "We're excited to announce our new partnership with leading cloud providers.",
      href: "/news/techhub-partnership",
    },
    {
      id: 6,
      title: "Summer Sale Event at Fashion Valley",
      category: "Promotion",
      company: "Fashion Valley",
      date: "2 weeks ago",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
      excerpt: "Up to 50% off on selected items during our summer clearance sale.",
      href: "/news/fashion-valley-sale",
    },
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [newsItems.length]);

  const scrollToIndex = (index) => {
    setActiveIndex(index);
    if (sliderRef.current) {
      const scrollAmount = index * 320;
      sliderRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Grand Opening":
        return "bg-emerald-500";
      case "Open Day":
        return "bg-blue-500";
      case "Promotion":
        return "bg-orange-500";
      case "Anniversary":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section className="bg-[#0f1419] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">NEWS / </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400">
              BLOG
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            In this section, companies can post news, for example: Open day, Grand opening,
            Major promotion, Anniversary celebrations and more.
          </p>
        </div>

        {/* Featured News (Active/Large) */}
        <div className="mb-8">
          <Link
            href={newsItems[activeIndex].href}
            className="block bg-[#1a2332] rounded-2xl overflow-hidden group"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Image */}
              <div className="lg:w-1/2 relative h-64 lg:h-80">
                <Image
                  src={newsItems[activeIndex].image}
                  alt={newsItems[activeIndex].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a2332]/50" />
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 ${getCategoryColor(newsItems[activeIndex].category)} text-white text-xs font-bold px-3 py-1.5 rounded-full`}>
                  {newsItems[activeIndex].category}
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
                <div className="text-emerald-400 text-sm font-medium mb-2">
                  {newsItems[activeIndex].company} • {newsItems[activeIndex].date}
                </div>
                <h3 className="text-white text-2xl sm:text-3xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">
                  {newsItems[activeIndex].title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {newsItems[activeIndex].excerpt}
                </p>
                <div className="inline-flex items-center gap-2 text-emerald-400 font-medium group-hover:gap-3 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* News Slider */}
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {newsItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToIndex(index)}
                className={`flex-shrink-0 w-72 bg-[#1a2332] rounded-xl overflow-hidden text-left transition-all ${
                  index === activeIndex
                    ? "ring-2 ring-emerald-500"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                {/* Image */}
                <div className="relative h-40">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute top-2 left-2 ${getCategoryColor(item.category)} text-white text-xs font-medium px-2 py-1 rounded-full`}>
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="text-emerald-400 text-xs mb-1">{item.company}</p>
                  <h4 className="text-white font-semibold text-sm line-clamp-2 mb-2">
                    {item.title}
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs">{item.date}</span>
                    <span className="text-emerald-400 text-xs font-medium">
                      Link to NEWS PAGE →
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Slider Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {newsItems.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-emerald-500"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All News Link */}
        <div className="text-center mt-10">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors"
          >
            View All News
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsBlog;
