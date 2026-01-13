import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const stats = [
    { value: "500+", label: "Active Businesses" },
    { value: "10K+", label: "Monthly Visitors" },
    { value: "4.9", label: "Average Rating", hasIcon: true },
    { value: "15+", label: "Categories" },
  ];

  return (
    <section className="bg-[#0f1419] min-h-[calc(100vh-64px)] relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-20 left-[20%] w-1.5 h-1.5 bg-emerald-500 rounded-full opacity-60"></div>
      <div className="absolute top-40 left-[35%] w-1 h-1 bg-teal-500 rounded-full opacity-40"></div>
      <div className="absolute bottom-32 left-[15%] w-1.5 h-1.5 bg-emerald-500 rounded-full opacity-50"></div>
      <div className="absolute top-[60%] right-[30%] w-1 h-1 bg-emerald-500 rounded-full opacity-40"></div>
      <div className="absolute bottom-20 right-[25%] w-1.5 h-1.5 bg-teal-500 rounded-full opacity-50"></div>
      <div className="absolute top-32 right-[15%] w-1 h-1 bg-emerald-400 rounded-full opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-[#1a2332]/50 mb-6 sm:mb-8">
              <svg
                className="w-4 h-4 text-emerald-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
              </svg>
              <span className="text-emerald-500 text-sm font-medium">
                Rhine Valley's Digital Hub
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-white block">Connect .</span>
              <span className="text-white block">Discover.</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400 block">
                Grow Together.
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8">
              The ultimate platform connecting local businesses with their community
              in the Rhine Valley region.
              <br />
              Find and support businesses near you.
            </p>

            {/* CTA Button */}
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg text-base font-medium transition-all hover:gap-3"
            >
              Get Started
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

          {/* Right Content - Stats Grid */}
          <div className="flex-shrink-0 w-full sm:w-auto">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-xs sm:max-w-sm mx-auto lg:mx-0">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-[#1a2332] border border-gray-700/50 rounded-xl p-4 sm:p-6 text-center hover:border-teal-500/50 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-400 mb-1">
                    {stat.value}
                    {stat.hasIcon && (
                      <span className="text-yellow-400 ml-1">★</span>
                    )}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Partners Logo Strip */}
      <div className="border-t  ">
        <div className="max-w-7xl mx-auto py-8 sm:py-10">
          <div className="relative w-full overflow-hidden">
            <Image
              src="/main/HeroImage.png"
              alt="Our Trusted Partners"
              width={1200}
              height={80}
              className="w-full h-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
