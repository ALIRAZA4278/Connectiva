import Link from "next/link";
import Image from "next/image";

const RealEstateListings = () => {
  const listings = [
    {
      id: 1,
      name: "Modern Villa with Pool",
      category: "Real Estate",
      description: "Stunning 4-bedroom villa with infinity pool and mountain views",
      location: "St.Gallen",
      rating: 4.8,
      reviews: 85,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
      href: "/real-estate/modern-villa",
    },
    {
      id: 2,
      name: "Luxury Penthouse",
      category: "Real Estate",
      description: "Exclusive penthouse apartment with panoramic city views",
      location: "Chur",
      rating: 4.9,
      reviews: 62,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
      href: "/real-estate/luxury-penthouse",
    },
    {
      id: 3,
      name: "Alpine Chalet",
      category: "Real Estate",
      description: "Traditional Swiss chalet with modern amenities in the mountains",
      location: "Davos",
      rating: 4.7,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&q=80",
      href: "/real-estate/alpine-chalet",
    },
    {
      id: 4,
      name: "Contemporary Townhouse",
      category: "Real Estate",
      description: "Sleek townhouse with garden in prime residential area",
      location: "Bad Ragaz",
      rating: 4.8,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      href: "/real-estate/contemporary-townhouse",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-emerald-50/30 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="text-gray-900">New </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-cyan-500">Real Estate</span>
              <br />
              <span className="text-gray-900">Listings</span>
            </h2>
            <p className="text-gray-500 mt-3 text-base sm:text-lg">
              Discover trusted local companies in the Rhine Valley
            </p>
          </div>
          <Link
            href="/real-estate"
            className="inline-flex items-center gap-2 mt-6 sm:mt-0 px-5 py-2.5 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors"
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

        {/* Listing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {listings.map((listing) => (
            <Link
              key={listing.id}
              href={listing.href}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-52 overflow-hidden">
                {/* Gradient Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-500 z-10"></div>
                {/* Listing Image */}
                <Image
                  src={listing.image}
                  alt={listing.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                {/* Listing Name */}
                <h3 className="text-gray-900 font-bold text-lg mb-1 group-hover:text-emerald-500 transition-colors">
                  {listing.name}
                </h3>
                {/* Category */}
                <p className="text-gray-500 text-sm mb-2">{listing.category}</p>
                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {listing.description}
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
                    <span>{listing.location}</span>
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
                      {listing.rating}
                    </span>
                    <span className="text-gray-400">({listing.reviews})</span>
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

export default RealEstateListings;
