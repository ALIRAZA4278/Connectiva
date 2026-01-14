import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const packages = [
  {
    name: "Basic",
    price: "Free",
    period: "",
    description: "Perfect for small businesses wanting online visibility",
    popular: false,
    color: "bg-gray-100",
    buttonColor: "bg-gray-900 hover:bg-gray-800",
    features: [
      "Company profile with logo",
      "Address & contact details",
      "Link to your website",
      "Searchable in directory",
      "Category listing",
    ],
    notIncluded: [
      "Featured placement",
      "Job postings",
      "Banner ads",
      "Mini website",
    ],
  },
  {
    name: "Pro",
    price: "CHF 49",
    period: "/month",
    description: "For growing, regionally focused companies",
    popular: false,
    color: "bg-teal-50",
    buttonColor: "bg-teal-600 hover:bg-teal-700",
    features: [
      "Everything in Basic",
      "Logo in category slider",
      "Article in Expert Blog",
      "Priority in search results",
      "Social media links",
      "Customer reviews enabled",
    ],
    notIncluded: [
      "Job postings",
      "Banner placement",
      "Mini website",
    ],
  },
  {
    name: "Business+",
    price: "CHF 99",
    period: "/month",
    description: "Active companies with hiring needs",
    popular: true,
    color: "bg-emerald-50",
    buttonColor: "bg-emerald-600 hover:bg-emerald-700",
    features: [
      "Everything in Pro",
      "Up to 3 job postings/year",
      "3 months banner placement",
      "Highlighted in Industry Guide",
      "Reply to Community Requests",
      "Analytics dashboard",
      "Priority support",
    ],
    notIncluded: [
      "Custom mini website",
    ],
  },
  {
    name: "Platinum",
    price: "CHF 199",
    period: "/month",
    description: "Maximum online presence",
    popular: false,
    color: "bg-gradient-to-br from-lime-50 to-cyan-50",
    buttonColor: "bg-gradient-to-r from-lime-500 to-cyan-500 hover:from-lime-600 hover:to-cyan-600",
    features: [
      "Everything in Business+",
      "Custom mini website",
      "Photo gallery",
      "Contact form integration",
      "Google Maps integration",
      "Unlimited job postings",
      "Premium banner placement",
      "Dedicated account manager",
    ],
    notIncluded: [],
  },
];

const sponsorships = [
  {
    name: "Homepage Banner (Slider)",
    description: "Rotating banner on homepage with companies from various sectors",
    price: "CHF 299/month",
  },
  {
    name: "Category Page Banner",
    description: "Rotating banner on category pages with same-industry companies",
    price: "CHF 199/month",
  },
  {
    name: "Premium Sponsor",
    description: "Fixed medium-size banner on homepage visible all year",
    price: "CHF 499/month",
  },
  {
    name: "Gold Sponsor",
    description: "Large full-width banner on homepage fixed all year",
    price: "CHF 999/month",
  },
  {
    name: "Elite Sponsor",
    description: "Large homepage banner + footer banner on ALL pages",
    price: "CHF 1,499/month",
  },
];

const faqs = [
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades will apply at the start of your next billing cycle.",
  },
  {
    question: "Is there a contract or commitment?",
    answer: "No long-term contracts required. All plans are billed monthly and you can cancel anytime.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, bank transfers, and TWINT for Swiss customers.",
  },
  {
    question: "Can I get a refund?",
    answer: "We offer a 14-day money-back guarantee for all paid plans if you're not satisfied.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-[#0f1419] py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-emerald-500 text-sm font-semibold uppercase tracking-wider">
                PRICING
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
                <span className="text-white">Simple, Transparent </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400">
                  Pricing
                </span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Choose the perfect package for your business. No hidden fees, no surprises.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 sm:py-20 -mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`${pkg.color} rounded-2xl p-6 relative ${
                    pkg.popular ? "ring-2 ring-emerald-500 shadow-lg" : "shadow-sm"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-gray-900 font-bold text-xl mb-2">{pkg.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                      <span className="text-gray-500">{pkg.period}</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-2">{pkg.description}</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {pkg.notIncluded.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <svg className="w-5 h-5 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/get-started"
                    className={`block w-full text-center ${pkg.buttonColor} text-white py-3 rounded-lg font-medium transition-colors`}
                  >
                    {pkg.price === "Free" ? "Get Started" : "Choose Plan"}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsorship Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-emerald-500 text-sm font-semibold uppercase tracking-wider">
                SPONSORSHIPS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-gray-900">
                Additional Visibility Options
              </h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                Boost your presence with premium banner placements across the platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sponsorships.map((sponsor, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{sponsor.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{sponsor.description}</p>
                  <div className="text-emerald-600 font-bold text-lg">{sponsor.price}</div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Contact for Sponsorships
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-emerald-500 text-sm font-semibold uppercase tracking-wider">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-gray-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-500">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-gray-500 mb-4">Still have questions?</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
              >
                Contact our team
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-lime-500 via-emerald-500 to-cyan-500 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Join hundreds of businesses already thriving on Rhy-Connect.
            </p>
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Get Started Free
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
