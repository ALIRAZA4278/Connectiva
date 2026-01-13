import Link from "next/link";
import Image from "next/image";

const FeaturedBusinesses = () => {
  const businesses = [
    {
      id: 1,
      name: "Weber Real Estate",
      category: "Real Estate",
      description: "Premium real estate services in the Rhine Valley region",
      location: "St.Gallen",
      rating: 4.8,
      reviews: 85,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
      href: "/companies/weber-real-estate",
    },
    {
      id: 2,
      name: "Alpine Auto Service",
      category: "Automotive",
      description: "Quality car maintenance and repair services for all brands",
      location: "Chur",
      rating: 4.7,
      reviews: 62,
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80",
      href: "/companies/alpine-auto",
    },
    {
      id: 3,
      name: "Gasthaus Adler",
      category: "Restaurant",
      description: "Traditional Swiss cuisine with a modern twist",
      location: "Davos",
      rating: 4.9,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
      href: "/companies/gasthaus-adler",
    },
    {
      id: 4,
      name: "TechHub Solutions",
      category: "IT Services",
      description: "Professional IT consulting and software development",
      location: "St.Gallen",
      rating: 4.8,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
      href: "/companies/techhub-solutions",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-12">
          <div>
            <span className="text-emerald-500 text-sm font-semibold uppercase tracking-wider">
              FEATURED
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
              <span className="text-gray-900">Top-Rated</span>
              <br />
              <span className="text-emerald-500">Businesses</span>
            </h2>
            <p className="text-gray-500 mt-3 text-base sm:text-lg">
              Discover trusted local companies in the Rhine Valley
            </p>
          </div>
          <Link
            href="/companies"
            className="inline-flex items-center gap-2 mt-6 sm:mt-0 px-5 py-2.5 border-2 border-emerald-500 text-emerald-500 rounded-lg font-medium hover:bg-emerald-500 hover:text-white transition-colors"
          >
            View All
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* Business Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {businesses.map((business) => (
            <Link
              key={business.id}
              href={business.href}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-52 overflow-hidden">
                {/* Gradient Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-500 z-10"></div>
                {/* Business Image */}
                <Image
                  src={business.image}
                  alt={business.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                {/* Business Name */}
                <h3 className="text-gray-900 font-bold text-lg mb-1 group-hover:text-emerald-500 transition-colors">
                  {business.name}
                </h3>
                {/* Category */}
                <p className="text-gray-500 text-sm mb-2">{business.category}</p>
                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {business.description}
                </p>
                {/* Footer */}
                <div className="flex items-center justify-between text-sm">
                  {/* Location */}
                  <div className="flex items-center gap-1 text-gray-500">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{business.location}</span>
                  </div>
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-gray-700 font-medium">
                      {business.rating}
                    </span>
                    <span className="text-gray-400">({business.reviews})</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBusinesses;
