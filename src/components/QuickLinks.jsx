import Link from "next/link";

const QuickLinks = () => {
  const links = [
    {
      title: "Companies",
      description: "Find Local Business",
      href: "/companies",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: "Jobs",
      description: "Explore job opening",
      href: "/jobs",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Real Estate",
      description: "Your new home",
      href: "/real-estate",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
          />
        </svg>
      ),
    },
    {
      title: "Cars",
      description: "Browse the car market",
      href: "/cars",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-gray-50 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 lg:p-8 text-center hover:border-emerald-300 hover:shadow-lg transition-all group"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-50 text-emerald-500 mb-3 sm:mb-4 group-hover:bg-emerald-100 transition-colors">
                {link.icon}
              </div>
              {/* Title */}
              <h3 className="text-gray-900 font-semibold text-base sm:text-lg mb-1">
                {link.title}
              </h3>
              {/* Description */}
              <p className="text-gray-500 text-xs sm:text-sm">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
