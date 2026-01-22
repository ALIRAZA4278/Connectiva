import Link from "next/link";
import Image from "next/image";

const TopJobOffers = () => {
  const jobs = [
    {
      id: 1,
      title: "Full-Stack Developer",
      category: "IT & Technology",
      company: "Alpine Tech Solutions",
      location: "St. Gallen",
      rating: 4.8,
      daysLeft: 3,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
      href: "/jobs/1",
    },
    {
      id: 2,
      title: "Marketing Manager",
      category: "Marketing",
      company: "Weber Real Estate",
      location: "Chur",
      rating: 4.6,
      daysLeft: 5,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
      href: "/jobs/2",
    },
    {
      id: 3,
      title: "Restaurant Chef",
      category: "Hospitality",
      company: "Gasthaus Adler",
      location: "Davos",
      rating: 4.1,
      daysLeft: 7,
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80",
      href: "/jobs/3",
    },
    {
      id: 4,
      title: "Graphic Designer",
      category: "Creative",
      company: "Swiss Design Studio",
      location: "St. Gallen",
      rating: 4.9,
      daysLeft: 2,
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80",
      href: "/jobs/4",
    },
  ];

  return (
    <section className="bg-[#0f1419] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-12">
          <div>
            <span className="text-emerald-500 text-sm font-semibold uppercase tracking-wider">
              TOP JOBS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
              <span className="text-white">Top Job </span>
              <span className="text-emerald-500">offers</span>
            </h2>
            <p className="text-gray-400 mt-3 text-base sm:text-lg">
              Don't miss out on exclusive job opportunities from local businesses
            </p>
          </div>
          <Link
            href="/jobs"
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

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {jobs.map((job) => (
            <Link
              key={job.id}
              href={job.href}
              className="group relative bg-[#1a2332] rounded-xl overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-52">
                <Image
                  src={job.image}
                  alt={job.title}
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
                  {job.daysLeft} days left
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
                  {job.rating}
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
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {job.category}
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold text-base sm:text-lg mb-1 line-clamp-2 group-hover:text-emerald-400 transition-colors">
                  {job.title}
                </h3>

                {/* Company */}
                <p className="text-gray-400 text-sm mb-3">{job.company}</p>

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
                  {job.location}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopJobOffers;
