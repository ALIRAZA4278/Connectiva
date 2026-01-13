import Link from "next/link";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Your Plan",
      description:
        "Select from Basic (free), Premium, or Platinum packages based on your business needs.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Create Your Profile",
      description:
        "Add your business details, photos, and services. Platinum members get a custom mini-website.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Start Growing",
      description:
        "Get discovered by local customers and watch your business reach new heights.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#0f1419] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-emerald-500 text-sm font-semibold uppercase tracking-wider">
            PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            <span className="text-white">Get Started in </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400">
              Minutes
            </span>
          </h2>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            Three simple steps to expand your business reach
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-[#1a2332] rounded-xl p-6 sm:p-8 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors"
            >
              {/* Step Number */}
              <div className="text-5xl sm:text-6xl font-bold text-gray-700/50 mb-4">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-xl mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3.5 rounded-lg font-medium transition-all shadow-lg shadow-emerald-500/25"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
