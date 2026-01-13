import Link from "next/link";

const PricingBanner = () => {
  const features = [
    "Flexible monthly plans",
    "No long-term contracts",
    "14-day money-back guarantee",
  ];

  return (
    <section className="bg-[#0f1419] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Card */}
        <div className="relative bg-[#1a2332] rounded-2xl p-8 sm:p-10 lg:p-12 border border-emerald-500/30 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500 rounded-full mb-6">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
                </svg>
                <span className="text-white text-sm font-semibold uppercase tracking-wider">
                  Pricing
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                Sponsored Space Banner
              </h2>

              {/* Subheading */}
              <p className="text-emerald-400 text-lg sm:text-xl font-medium mb-4">
                Choose the perfect plan for your business
              </p>

              {/* Description */}
              <p className="text-gray-400 text-base mb-6 max-w-xl">
                From basic listings to premium packages with custom websites, we have options for every business size and budget.
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 justify-center lg:justify-start">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                View Pricing Plans
                <svg
                  className="w-5 h-5"
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

            {/* Right Side - Decorative Graphic */}
            <div className="flex-shrink-0 relative">
              {/* Outer Circle */}
              <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full bg-gradient-to-br from-lime-400 via-emerald-500 to-cyan-500 flex items-center justify-center relative">
                {/* Inner White Circle */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-white rounded-full shadow-lg"></div>

                {/* Sparkles */}
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
                  </svg>
                </div>
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
                  <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
                  </svg>
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingBanner;
