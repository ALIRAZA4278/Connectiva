import Link from "next/link";
import Image from "next/image";

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: "Summer Special: Restaurant Terrace",
      category: "Dining",
      location: "St. Gallen",
      rating: 4.8,
      daysLeft: 3,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
      href: "/offers/summer-special",
    },
    {
      id: 2,
      title: "Car Service Package Deal",
      category: "Automotive",
      location: "Buch",
      rating: 4.6,
      daysLeft: 5,
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80",
      href: "/offers/car-service",
    },
    {
      id: 3,
      title: "Home Renovation Consultation",
      category: "Dining",
      location: "Alstatten",
      rating: 4.1,
      daysLeft: 7,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
      href: "/offers/home-renovation",
    },
    {
      id: 4,
      title: "Professional Photography Session",
      category: "Creative",
      location: "St. Gallen",
      rating: 4.9,
      daysLeft: 2,
      image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&q=80",
      href: "/offers/photography",
    },
  ];

  return (
    <section className="bg-[#0f1419] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-12">
          <div>
            <span className="text-emerald-500 text-sm font-semibold uppercase tracking-wider">
              SPECIAL OFFER
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
              <span className="text-white">Top Car</span>
              <br />
              <span className="text-emerald-500">OFFERS</span>
            </h2>
            <p className="text-gray-400 mt-3 text-base sm:text-lg">
              Don't miss out on exclusive deals from local businesses
            </p>
          </div>
          <Link
            href="/offers"
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

        {/* Offer Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {offers.map((offer) => (
            <Link
              key={offer.id}
              href={offer.href}
              className="group relative bg-[#1a2332] rounded-xl overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-52">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>

                {/* Days Left Badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-gray-900/80 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {offer.daysLeft} days left
                </div>

                {/* Rating Badge */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-white text-gray-900 text-xs font-medium px-2 py-1 rounded-md">
                  <svg
                    className="w-3.5 h-3.5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {offer.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Category */}
                <div className="flex items-center gap-1.5 text-emerald-500 text-sm mb-2">
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
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                  {offer.category}
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold text-base sm:text-lg mb-3 line-clamp-2 group-hover:text-emerald-400 transition-colors">
                  {offer.title}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-gray-400 text-sm">
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
                  {offer.location}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
