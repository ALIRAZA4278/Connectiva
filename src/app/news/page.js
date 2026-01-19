import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const featuredNews = {
  id: 1,
  title: "Rhy-Connect Reaches 500 Business Listings Milestone",
  excerpt: "Our platform has officially reached a significant milestone, with over 500 local businesses now listed on connectiva, strengthening the Rhine Valley's digital ecosystem.",
  image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
  category: "Platform News",
  date: "January 10, 2026",
  readTime: "3 min read",
};

const newsArticles = [
  {
    id: 2,
    title: "New Partnership Program for Web Developers",
    excerpt: "We're launching a new partnership program connecting web developers with local businesses seeking professional online presence.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",
    category: "Partnerships",
    date: "January 8, 2026",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Rhine Valley Business Awards 2026 Announced",
    excerpt: "The annual Rhine Valley Business Awards ceremony will take place in March, celebrating outstanding local businesses.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80",
    category: "Events",
    date: "January 5, 2026",
    readTime: "2 min read",
  },
  {
    id: 4,
    title: "Community Requests Feature Now Live",
    excerpt: "Users can now post service requests and connect with verified local businesses directly through our new Community Requests feature.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
    category: "Platform News",
    date: "January 3, 2026",
    readTime: "3 min read",
  },
  {
    id: 5,
    title: "Tips for Optimizing Your Business Profile",
    excerpt: "Learn how to make your business stand out with these proven strategies for creating an engaging company profile.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
    category: "Tips & Guides",
    date: "December 28, 2025",
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "Winter Tourism Boost for Local Businesses",
    excerpt: "The winter season brings increased opportunities for Rhine Valley businesses as tourism peaks in the alpine regions.",
    image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=400&q=80",
    category: "Industry News",
    date: "December 20, 2025",
    readTime: "4 min read",
  },
  {
    id: 7,
    title: "Real Estate Market Update: Q4 2025",
    excerpt: "A comprehensive overview of the Rhine Valley real estate market performance in the fourth quarter of 2025.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
    category: "Market Reports",
    date: "December 15, 2025",
    readTime: "6 min read",
  },
];

const categories = ["All", "Platform News", "Industry News", "Events", "Tips & Guides", "Market Reports"];

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-[#0f1419] py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-emerald-500 text-sm font-semibold uppercase tracking-wider">
                NEWS & UPDATES
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
                <span className="text-white">Latest </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400">
                  News
                </span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Stay updated with the latest news, tips, and insights from the Rhine Valley business community.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={`/news/${featuredNews.id}`} className="block group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className="lg:w-1/2 relative h-64 lg:h-auto">
                    <Image
                      src={featuredNews.image}
                      alt={featuredNews.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                        FEATURED
                      </span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-emerald-600 text-sm font-medium">{featuredNews.category}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500 text-sm">{featuredNews.date}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                      {featuredNews.title}
                    </h2>
                    <p className="text-gray-500 mb-6">{featuredNews.excerpt}</p>
                    <div className="flex items-center gap-2 text-emerald-600 font-medium">
                      Read Article
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Category Filter */}
        <section className="pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    index === 0
                      ? "bg-emerald-500 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="pb-16 sm:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/news/${article.id}`}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-emerald-600 text-xs font-medium">{article.category}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400 text-xs">{article.readTime}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                      {article.excerpt}
                    </p>
                    <span className="text-gray-400 text-xs">{article.date}</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors">
                Load More Articles
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-gradient-to-r from-lime-500 via-emerald-500 to-cyan-500 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Stay Informed
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Subscribe to our newsletter and never miss important updates from the Rhine Valley business community.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white"
              />
              <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
