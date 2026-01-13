const WhyChooseUs = () => {
  const features = [
    {
      number: 1,
      title: "Targeted Local Reach",
      description:
        "Connect directly with customers in the Rhine Valley who are actively searching for your services.",
      iconBg: "bg-gradient-to-br from-emerald-400 to-emerald-600",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: 2,
      title: "Growing Community",
      description:
        "Join 500+ local businesses and 10,000+ monthly visitors in our thriving regional marketplace.",
      iconBg: "bg-gradient-to-br from-teal-400 to-teal-600",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      number: 3,
      title: "Boost Your Visibility",
      description:
        "Premium listings get priority placement and dedicated support to maximize your online presence.",
      iconBg: "bg-gradient-to-br from-cyan-500 to-cyan-700",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      number: 4,
      title: "Verified & Trusted",
      description:
        "All businesses are verified, building trust and credibility with potential customers.",
      iconBg: "bg-gradient-to-br from-lime-400 to-lime-600",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-emerald-500 text-sm font-semibold uppercase tracking-wider">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            <span className="text-gray-900">Built for the </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-cyan-500">
              Rhine Valley
            </span>
          </h2>
          <p className="text-gray-500 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            The leading digital platform connecting businesses and customers in your region
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="relative bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Number Badge */}
              <div className="absolute -top-3 -right-3 sm:top-4 sm:right-4 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {feature.number}
              </div>

              {/* Icon */}
              <div
                className={`w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center mb-4`}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-gray-900 font-bold text-lg mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
