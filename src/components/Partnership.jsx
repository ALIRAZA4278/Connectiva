import Link from "next/link";

const Partnership = () => {
  const benefits = [
    {
      title: "Build Mini-Websites",
      description: "Create professional websites for Platinum members and earn steady income",
      iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-700",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "Creative Freedom",
      description: "Showcase your design skills with full creative control within brand guidelines",
      iconBg: "bg-gradient-to-br from-teal-500 to-teal-700",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
    },
    {
      title: "Steady Projects",
      description: "Regular flow of projects from businesses upgrading to Platinum packages",
      iconBg: "bg-gradient-to-br from-cyan-500 to-cyan-700",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Fair Compensation",
      description: "Competitive rates for quality work with transparent payment terms",
      iconBg: "bg-gradient-to-br from-lime-500 to-lime-700",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const processSteps = [
    { number: 1, title: "Apply", description: "Submit your portfolio" },
    { number: 2, title: "Review", description: "We verify your skills" },
    { number: 3, title: "Onboard", description: "Get set up in our system" },
    { number: 4, title: "Build", description: "Start creating websites" },
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-emerald-500 text-sm font-semibold uppercase tracking-wider">
            PARTNERSHIP
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            <span className="text-gray-900">Partner With </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-cyan-500">
              Us
            </span>
          </h2>
          <p className="text-gray-500 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            Are you a web developer or designer? Join our network and build custom mini-websites for Platinum members
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div className={`w-12 h-12 ${benefit.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                {benefit.icon}
              </div>
              {/* Title */}
              <h3 className="text-gray-900 font-bold text-lg mb-2">
                {benefit.title}
              </h3>
              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="hidden sm:block absolute top-6 left-0 right-0 h-0.5 bg-emerald-200"></div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
            {processSteps.map((step) => (
              <div key={step.number} className="text-center relative">
                {/* Number Circle */}
                <div className="w-12 h-12 mx-auto border-2 border-emerald-500 rounded-full flex items-center justify-center bg-white text-emerald-500 font-bold text-lg mb-3 relative z-10">
                  {step.number}
                </div>
                {/* Title */}
                <h4 className="text-gray-900 font-semibold mb-1">{step.title}</h4>
                {/* Description */}
                <p className="text-gray-500 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-lime-500 via-emerald-500 to-cyan-500 rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            How Partnership Works
          </h3>
          <p className="text-white/90 text-base sm:text-lg max-w-3xl mx-auto mb-8">
            When a business chooses our Platinum package, we connect them with our verified development partners. You build their custom mini-website, they get a professional online presence, and we all grow together.
          </p>
          <Link
            href="/become-partner"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border-2 border-white text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Become a Partner
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
