import Image from "next/image";

const AboutUs = () => {
  const features = [
    {
      title: "Community First",
      description:
        "We believe in strengthening local connections and supporting regional economic growth.",
      iconBg: "bg-emerald-100",
      icon: (
        <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Targeted Solutions",
      description:
        "Focused exclusively on the Rhine Valley, we understand the unique needs of our region.",
      iconBg: "bg-emerald-100",
      icon: (
        <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Innovation",
      description:
        "Combining modern technology with local expertise to create the perfect business platform.",
      iconBg: "bg-emerald-100",
      icon: (
        <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1">
            {/* Label */}
            <span className="text-emerald-500 text-sm font-semibold uppercase tracking-wider">
              ABOUT US
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              <span className="text-gray-900">Building the Digital Heart of</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-600">
                Rhine Valley
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
              Rhy-Connect.ch was born from a simple observation: local businesses in the Rhine Valley needed a better way to connect with their community. We're building more than a directory—we're creating a digital ecosystem where companies, individuals, and customers come together.
            </p>

            {/* Feature Items */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    {feature.icon}
                  </div>
                  {/* Text */}
                  <div>
                    <h3 className="text-gray-900 font-bold text-lg mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                alt="Team celebrating success"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
              {/* Badge Overlay */}
              <div className="absolute top-4 right-4 bg-white rounded-lg px-4 py-2 shadow-lg">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-500">500+</div>
                <div className="text-gray-600 text-sm">Businesses</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
