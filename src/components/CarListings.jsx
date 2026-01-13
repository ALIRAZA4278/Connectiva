import Link from "next/link";
import Image from "next/image";

const CarListings = () => {
  const cars = [
    {
      id: 1,
      name: "BMW 3 Series",
      dealer: "AutoHaus Schmidt",
      year: 2024,
      mileage: "5,000 km",
      fuelType: "Hybrid",
      price: 45900,
      originalPrice: 52000,
      discount: 12,
      rating: 4.9,
      reviews: 156,
      location: "Buchs",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80",
      href: "/cars/bmw-3-series",
      hotDeal: true,
    },
    {
      id: 2,
      name: "Audi A4 Avant",
      dealer: "Avant Motors",
      year: 2023,
      mileage: "8,000 km",
      fuelType: "Petrol",
      price: 39900,
      originalPrice: 44000,
      discount: 9,
      rating: 4.6,
      reviews: 89,
      location: "Zurich",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80",
      href: "/cars/audi-a4",
      hotDeal: true,
    },
    {
      id: 3,
      name: "Mercedes-Benz C-Class",
      dealer: "Rhine Valley Motors",
      year: 2022,
      mileage: "12,000 km",
      fuelType: "Hybrid",
      price: 52900,
      originalPrice: 58000,
      discount: 9,
      rating: 4.9,
      reviews: 203,
      location: "Basel",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80",
      href: "/cars/mercedes-c-class",
      hotDeal: true,
    },
    {
      id: 4,
      name: "VW Golf GTI",
      dealer: "Swiss Auto Group",
      year: 2023,
      mileage: "7,500 km",
      fuelType: "Petrol",
      price: 32900,
      originalPrice: 36000,
      discount: 9,
      rating: 4.4,
      reviews: 112,
      location: "Geneva",
      image: "https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?w=600&q=80",
      href: "/cars/vw-golf-gti",
      hotDeal: true,
    },
  ];

  return (
    <section className="bg-[#0f1419] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-12">
          <div>
            <span className="text-emerald-500 text-sm font-semibold uppercase tracking-wider">
              AUTOMOTIVE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
              <span className="text-white">LATEST CAR</span>
              <br />
              <span className="text-emerald-500">OFFERS</span>
            </h2>
            <p className="text-gray-400 mt-3 text-base sm:text-lg">
              Premium vehicles from trusted dealerships in the Rhine Valley
            </p>
          </div>
          <Link
            href="/cars"
            className="inline-flex items-center gap-2 mt-6 sm:mt-0 px-5 py-2.5 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors"
          >
            View All Car
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

        {/* Car Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cars.map((car) => (
            <Link
              key={car.id}
              href={car.href}
              className="bg-[#1a2332] rounded-xl overflow-hidden hover:bg-[#1f2937] transition-colors group"
            >
              {/* Image Container */}
              <div className="relative h-44 sm:h-48">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Hot Deal Badge */}
                {car.hotDeal && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2.5 py-1 rounded">
                    HOT DEAL
                  </div>
                )}

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-white text-gray-900 text-xs font-medium px-2 py-1 rounded">
                  <svg
                    className="w-3.5 h-3.5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {car.rating}
                </div>

                {/* Discount Badge */}
                <div className="absolute bottom-3 right-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  {car.discount}% OFF
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Car Name */}
                <h3 className="text-white font-bold text-lg mb-1 group-hover:text-emerald-400 transition-colors">
                  {car.name}
                </h3>
                {/* Dealer */}
                <p className="text-gray-400 text-sm mb-3">{car.dealer}</p>

                {/* Specs Row */}
                <div className="flex items-center gap-3 text-gray-400 text-xs mb-4 flex-wrap">
                  {/* Year */}
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {car.year}
                  </div>
                  {/* Mileage */}
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {car.mileage}
                  </div>
                  {/* Fuel Type */}
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {car.fuelType}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-emerald-500 font-bold text-xl">
                    CHF {car.price.toLocaleString()}
                  </span>
                  <span className="text-gray-500 text-sm line-through ml-2">
                    CHF {car.originalPrice.toLocaleString()}
                  </span>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm text-gray-400">
                  {/* Location */}
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {car.location}
                  </div>
                  {/* Reviews */}
                  <span>{car.reviews} reviews</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarListings;
