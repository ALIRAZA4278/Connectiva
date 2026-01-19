"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Cars data with package tiers
const carsData = {
  // PLATINUM Dealer Car
  1: {
    id: 1,
    title: "BMW X5 xDrive40i",
    brand: "BMW",
    type: "SUV",
    condition: "New",
    year: 2024,
    mileage: "0 km",
    price: "CHF 89,900",
    description: "The BMW X5 xDrive40i combines powerful performance with luxurious comfort. Featuring BMW's latest technology, this SUV delivers an exceptional driving experience with its turbocharged engine and intelligent all-wheel drive system.",
    specifications: {
      engine: "3.0L 6-Cylinder Turbo",
      power: "340 HP",
      torque: "450 Nm",
      transmission: "8-Speed Automatic",
      drivetrain: "xDrive AWD",
      fuelType: "Petrol",
      fuelConsumption: "9.5 L/100km",
      acceleration: "5.5s (0-100 km/h)",
      topSpeed: "243 km/h",
      color: "Alpine White",
      interior: "Black Vernasca Leather",
    },
    features: [
      "BMW Live Cockpit Professional",
      "Panoramic Sunroof",
      "Harman Kardon Surround Sound",
      "Adaptive LED Headlights",
      "Parking Assistant Plus",
      "Driving Assistant Professional",
      "Heated Front & Rear Seats",
      "Wireless Charging",
      "Head-Up Display",
      "Air Suspension",
    ],
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=80",
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    featured: true,
    dealer: {
      id: 5,
      name: "Graubünden Auto Center",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
      description: "Authorized BMW dealer serving Graubünden since 1985. Full-service dealership with sales, service, and certified pre-owned vehicles.",
      address: "Industriestrasse 25, 7000 Chur",
      phone: "+41 81 286 00 00",
      email: "info@gb-autocenter.ch",
      website: "www.gb-autocenter.ch",
      package: "Platinum",
      verified: true,
    },
    salesPerson: {
      name: "Thomas Keller",
      role: "Sales Manager",
      phone: "+41 79 123 45 67",
      email: "t.keller@gb-autocenter.ch",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    },
    financing: {
      available: true,
      monthlyFrom: "CHF 1,299",
      downPayment: "CHF 17,980",
      term: "48 months",
      rate: "2.9%",
    },
  },
  // PREMIUM Dealer Car
  2: {
    id: 2,
    title: "Tesla Model 3 Long Range",
    brand: "Tesla",
    type: "Electric",
    condition: "New",
    year: 2024,
    mileage: "0 km",
    price: "CHF 52,900",
    description: "The Tesla Model 3 Long Range offers exceptional electric performance with industry-leading range. Experience the future of driving with instant acceleration, advanced autopilot capabilities, and zero emissions.",
    specifications: {
      engine: "Dual Motor Electric",
      power: "366 HP",
      torque: "660 Nm",
      transmission: "Single-Speed",
      drivetrain: "AWD",
      fuelType: "Electric",
      range: "602 km (WLTP)",
      acceleration: "4.4s (0-100 km/h)",
      topSpeed: "233 km/h",
      color: "Pearl White Multi-Coat",
      interior: "Black Premium",
    },
    features: [
      "15\" Touchscreen Display",
      "Autopilot",
      "Premium Audio System",
      "Glass Roof",
      "Heated All Seats",
      "Wireless Phone Charging",
      "LED Fog Lights",
      "Power Trunk",
    ],
    images: [
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&q=80",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&q=80",
    ],
    video: null,
    featured: true,
    dealer: {
      id: 6,
      name: "Swiss EV Motors",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
      description: "Switzerland's leading electric vehicle specialist. Authorized Tesla service center.",
      address: "Bahnhofstrasse 15, 7302 Landquart",
      phone: "+41 81 300 50 00",
      email: "info@swissevmotors.ch",
      package: "Premium",
      verified: true,
    },
    salesPerson: {
      name: "Anna Schmid",
      role: "EV Specialist",
      phone: "+41 79 234 56 78",
      email: "a.schmid@swissevmotors.ch",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    },
    financing: {
      available: true,
      monthlyFrom: "CHF 799",
      downPayment: "CHF 10,580",
      term: "48 months",
      rate: "3.5%",
    },
  },
  // BUSINESS+ Dealer Car
  3: {
    id: 3,
    title: "Mercedes-Benz C-Class",
    brand: "Mercedes-Benz",
    type: "Sedan",
    condition: "Certified Pre-Owned",
    year: 2022,
    mileage: "25,000 km",
    price: "CHF 45,500",
    description: "Certified Pre-Owned Mercedes-Benz C-Class with full service history. Premium sedan with excellent features and Mercedes-Benz CPO warranty.",
    specifications: {
      engine: "2.0L 4-Cylinder Diesel",
      power: "200 HP",
      transmission: "9G-TRONIC",
      drivetrain: "RWD",
      fuelType: "Diesel",
      fuelConsumption: "5.1 L/100km",
      color: "Obsidian Black",
      interior: "Leather",
    },
    features: [
      "MBUX Infotainment",
      "LED Headlights",
      "Navigation",
      "Parking Sensors",
      "Heated Seats",
    ],
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80",
    ],
    video: null,
    featured: false,
    dealer: {
      id: 7,
      name: "Premium Auto AG",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
      description: "Quality pre-owned vehicles with comprehensive warranty.",
      address: "Ringstrasse 8, 7000 Chur",
      phone: "+41 81 252 00 00",
      email: "info@premiumauto.ch",
      package: "Business+",
      verified: true,
    },
    salesPerson: {
      name: "Marco Bianchi",
      role: "Sales Consultant",
      phone: "+41 79 345 67 89",
      email: "m.bianchi@premiumauto.ch",
      image: null,
    },
    financing: {
      available: true,
      monthlyFrom: "CHF 649",
      downPayment: "CHF 9,100",
      term: "48 months",
      rate: "4.5%",
    },
  },
  // BUSINESS+ Dealer Car
  4: {
    id: 4,
    title: "Audi Q7 55 TFSI",
    brand: "Audi",
    type: "SUV",
    condition: "Used",
    year: 2021,
    mileage: "42,000 km",
    price: "CHF 62,000",
    description: "Well-maintained Audi Q7 with full service history. Perfect family SUV with quattro all-wheel drive.",
    specifications: {
      engine: "3.0L V6 TFSI",
      power: "340 HP",
      transmission: "8-Speed Tiptronic",
      drivetrain: "quattro AWD",
      fuelType: "Petrol",
      fuelConsumption: "9.8 L/100km",
      color: "Glacier White",
      interior: "Black Leather",
    },
    features: [
      "Virtual Cockpit",
      "MMI Navigation Plus",
      "Panoramic Roof",
      "Adaptive Air Suspension",
    ],
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=80",
    ],
    video: null,
    featured: false,
    dealer: {
      id: 8,
      name: "Auto Rheintal",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
      description: "Family-owned dealership with 30+ years experience.",
      address: "Hauptstrasse 45, 7310 Bad Ragaz",
      phone: "+41 81 302 00 00",
      email: "info@auto-rheintal.ch",
      package: "Business+",
      verified: true,
    },
    salesPerson: null,
    financing: {
      available: false,
    },
  },
  // BUSINESS+ Dealer Car
  5: {
    id: 5,
    title: "Porsche 911 Carrera",
    brand: "Porsche",
    type: "Sports",
    condition: "New",
    year: 2024,
    mileage: "0 km",
    price: "CHF 148,000",
    description: "The iconic Porsche 911 Carrera - pure driving excitement with timeless design and exhilarating performance.",
    specifications: {
      engine: "3.0L Flat-6 Twin-Turbo",
      power: "385 HP",
      torque: "450 Nm",
      transmission: "8-Speed PDK",
      drivetrain: "RWD",
      fuelType: "Petrol",
      acceleration: "4.2s (0-100 km/h)",
      topSpeed: "293 km/h",
      color: "Guards Red",
      interior: "Black Leather",
    },
    features: [
      "Sport Chrono Package",
      "PASM Sport Suspension",
      "Bose Surround Sound",
      "Sport Exhaust",
      "20-inch Wheels",
    ],
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80",
    ],
    video: null,
    featured: true,
    dealer: {
      id: 9,
      name: "Porsche Center Graubünden",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
      description: "Official Porsche dealer.",
      address: "Sportweg 10, 7000 Chur",
      phone: "+41 81 286 50 00",
      email: "info@porsche-gr.ch",
      package: "Business+",
      verified: true,
    },
    salesPerson: {
      name: "Stefan Meier",
      role: "Sports Car Specialist",
      phone: "+41 79 456 78 90",
      email: "s.meier@porsche-gr.ch",
      image: null,
    },
    financing: {
      available: true,
      monthlyFrom: "CHF 2,199",
      downPayment: "CHF 29,600",
      term: "48 months",
      rate: "2.9%",
    },
  },
  // BASIC Dealer Car
  6: {
    id: 6,
    title: "Volkswagen ID.4",
    brand: "Volkswagen",
    type: "Electric",
    condition: "New",
    year: 2024,
    mileage: "0 km",
    price: "CHF 49,900",
    description: "The all-electric Volkswagen ID.4 - spacious, practical, and emission-free.",
    specifications: {
      engine: "Electric Motor",
      power: "204 HP",
      range: "520 km",
      fuelType: "Electric",
      color: "Moonstone Grey",
    },
    features: [
      "ID. Cockpit",
      "Navigation",
    ],
    images: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&q=80",
    ],
    video: null,
    featured: false,
    dealer: {
      id: 10,
      name: "VW Autohaus Chur",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
      description: "Volkswagen dealer.",
      phone: "+41 81 252 30 00",
      package: "Basic",
      verified: false,
    },
    salesPerson: null,
    financing: null,
  },
  // BASIC Dealer Car
  7: {
    id: 7,
    title: "Toyota Land Cruiser",
    brand: "Toyota",
    type: "SUV",
    condition: "Used",
    year: 2020,
    mileage: "65,000 km",
    price: "CHF 58,500",
    description: "Reliable Toyota Land Cruiser with excellent off-road capability.",
    specifications: {
      engine: "2.8L Diesel",
      power: "204 HP",
      transmission: "Automatic",
      fuelType: "Diesel",
      color: "White",
    },
    features: [
      "4WD",
      "Navigation",
    ],
    images: [
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&q=80",
    ],
    video: null,
    featured: false,
    dealer: {
      id: 11,
      name: "Alpine Motors",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
      description: "Used cars specialist.",
      phone: "+41 81 410 00 00",
      package: "Basic",
      verified: false,
    },
    salesPerson: null,
    financing: null,
  },
  // BASIC Dealer Car
  8: {
    id: 8,
    title: "Mercedes-Benz Sprinter Van",
    brand: "Mercedes-Benz",
    type: "Van",
    condition: "New",
    year: 2024,
    mileage: "0 km",
    price: "CHF 68,000",
    description: "Mercedes-Benz Sprinter - the professional's choice for commercial transport.",
    specifications: {
      engine: "2.0L Diesel",
      power: "170 HP",
      transmission: "Manual",
      fuelType: "Diesel",
      capacity: "14 m³",
    },
    features: [
      "Cargo Partition",
      "Bluetooth",
    ],
    images: [
      "https://images.unsplash.com/photo-1570733577524-3a047079e80d?w=1200&q=80",
    ],
    video: null,
    featured: false,
    dealer: {
      id: 12,
      name: "Commercial Vehicles AG",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
      description: "Commercial vehicle specialists.",
      phone: "+41 81 303 00 00",
      package: "Basic",
      verified: false,
    },
    salesPerson: null,
    financing: null,
  },
};

const packageFeatures = {
  Basic: {
    hasContactForm: false,
    hasGallery: false,
    hasVideo: false,
    hasFinancing: false,
    hasSalesPerson: false,
    hasFullSpecs: false,
    maxFeatures: 2,
  },
  "Business+": {
    hasContactForm: true,
    hasGallery: true,
    hasVideo: false,
    hasFinancing: true,
    hasSalesPerson: true,
    hasFullSpecs: true,
    maxFeatures: 5,
  },
  Premium: {
    hasContactForm: true,
    hasGallery: true,
    hasVideo: true,
    hasFinancing: true,
    hasSalesPerson: true,
    hasFullSpecs: true,
    maxFeatures: 10,
  },
  Platinum: {
    hasContactForm: true,
    hasGallery: true,
    hasVideo: true,
    hasFinancing: true,
    hasSalesPerson: true,
    hasFullSpecs: true,
    maxFeatures: 999,
  },
};

const packageColors = {
  Basic: "bg-gray-500",
  "Business+": "bg-emerald-500",
  Premium: "bg-gradient-to-r from-emerald-500 to-teal-500",
  Platinum: "bg-gradient-to-r from-lime-500 via-emerald-500 to-cyan-500",
};

const conditionColors = {
  New: "bg-emerald-500",
  "Certified Pre-Owned": "bg-teal-500",
  Used: "bg-gray-500",
};

export default function CarDetailPage() {
  const params = useParams();
  const car = carsData[params.id];
  const [selectedImage, setSelectedImage] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  if (!car) {
    return (
      <>
        <Navbar />
        <main className="bg-gray-50 min-h-screen py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Vehicle Not Found</h1>
            <p className="text-gray-500 mb-8">This vehicle listing may have been sold or is no longer available.</p>
            <Link href="/cars" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Browse All Vehicles
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const features = packageFeatures[car.dealer.package] || packageFeatures.Basic;

  // Basic car listing
  const renderBasicCar = () => (
    <main className="bg-gray-50 min-h-screen">
      <section className="bg-[#0f1419] py-8">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/cars" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Vehicles
          </Link>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Image */}
          <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden mb-6">
            <Image src={car.images[0]} alt={car.title} fill className="object-cover" />
            <div className="absolute top-4 left-4">
              <span className={`${conditionColors[car.condition]} text-white text-sm font-medium px-3 py-1 rounded-full`}>
                {car.condition}
              </span>
            </div>
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-xl font-bold text-gray-900">{car.price}</span>
            </div>
          </div>

          {/* Basic Info */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{car.title}</h1>
            <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-4">
              <span>{car.brand}</span>
              <span>•</span>
              <span>{car.year}</span>
              <span>•</span>
              <span>{car.mileage}</span>
              <span>•</span>
              <span>{car.type}</span>
            </div>

            <p className="text-gray-600 mb-4">{car.description}</p>

            {/* Basic Specs */}
            <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-100">
              {car.specifications.fuelType && (
                <div>
                  <span className="text-gray-500 text-sm">Fuel Type</span>
                  <div className="font-medium text-gray-900">{car.specifications.fuelType}</div>
                </div>
              )}
              {car.specifications.transmission && (
                <div>
                  <span className="text-gray-500 text-sm">Transmission</span>
                  <div className="font-medium text-gray-900">{car.specifications.transmission}</div>
                </div>
              )}
            </div>

            {/* Dealer */}
            <div className="pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-500">Sold by: <span className="font-medium text-gray-700">{car.dealer.name}</span></p>
              {car.dealer.phone && (
                <p className="text-sm text-gray-500 mt-1">{car.dealer.phone}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );

  // Business+ car listing
  const renderBusinessPlusCar = () => (
    <main className="bg-gray-50 min-h-screen">
      <section className="bg-[#0f1419] py-8">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/cars" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Vehicles
          </Link>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Main Image */}
              <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden">
                <Image src={car.images[selectedImage] || car.images[0]} alt={car.title} fill className="object-cover" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`${conditionColors[car.condition]} text-white text-sm font-medium px-3 py-1.5 rounded-full`}>
                    {car.condition}
                  </span>
                  {car.featured && (
                    <span className="bg-yellow-500 text-white text-sm font-medium px-3 py-1.5 rounded-full">Featured</span>
                  )}
                  <span className={`${packageColors[car.dealer.package]} text-white text-xs font-medium px-3 py-1.5 rounded-full`}>
                    {car.dealer.package}
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              {features.hasGallery && car.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {car.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 ${selectedImage === index ? 'ring-2 ring-emerald-500' : ''}`}
                    >
                      <Image src={img} alt={`View ${index + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Vehicle Details */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{car.title}</h1>
                <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-4">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">{car.brand}</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">{car.year}</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">{car.mileage}</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">{car.type}</span>
                </div>

                <p className="text-gray-600 mb-6">{car.description}</p>

                {/* Features */}
                <h2 className="text-lg font-bold text-gray-900 mb-3">Features</h2>
                <div className="grid sm:grid-cols-2 gap-2 mb-6">
                  {car.features.slice(0, features.maxFeatures).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              {features.hasFullSpecs && (
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-lg font-bold text-gray-900 mb-4">Specifications</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {Object.entries(car.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <span className="text-gray-900 font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Price Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-gray-900 mb-2">{car.price}</div>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-medium transition-colors mb-3"
                >
                  Contact Dealer
                </button>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-medium transition-colors">
                  Schedule Test Drive
                </button>
              </div>

              {/* Financing */}
              {features.hasFinancing && car.financing && car.financing.available && (
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Financing Available
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly from</span>
                      <span className="font-bold text-emerald-600">{car.financing.monthlyFrom}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Down payment</span>
                      <span className="text-gray-900">{car.financing.downPayment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Term</span>
                      <span className="text-gray-900">{car.financing.term}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Interest rate</span>
                      <span className="text-gray-900">{car.financing.rate}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Sales Person */}
              {features.hasSalesPerson && car.salesPerson && (
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4">Your Contact</h3>
                  <div className="flex items-center gap-3 mb-4">
                    {car.salesPerson.image && (
                      <div className="w-14 h-14 rounded-full overflow-hidden">
                        <Image src={car.salesPerson.image} alt={car.salesPerson.name} width={56} height={56} className="object-cover" />
                      </div>
                    )}
                    <div>
                      <div className="font-medium text-gray-900">{car.salesPerson.name}</div>
                      <div className="text-sm text-gray-500">{car.salesPerson.role}</div>
                    </div>
                  </div>
                  {car.salesPerson.phone && (
                    <a href={`tel:${car.salesPerson.phone}`} className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {car.salesPerson.phone}
                    </a>
                  )}
                  {car.salesPerson.email && (
                    <a href={`mailto:${car.salesPerson.email}`} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {car.salesPerson.email}
                    </a>
                  )}
                </div>
              )}

              {/* Dealer Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden">
                    <Image src={car.dealer.logo} alt={car.dealer.name} width={48} height={48} className="object-cover" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{car.dealer.name}</div>
                    {car.dealer.verified && (
                      <span className="text-xs text-emerald-600 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified Dealer
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-3">{car.dealer.description}</p>
                {car.dealer.address && (
                  <p className="text-sm text-gray-600">{car.dealer.address}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Contact About Vehicle</h3>
              <button onClick={() => setShowContactForm(false)} className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500" defaultValue={`I'm interested in the ${car.title}.`} />
              </div>
              <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-medium transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );

  // Premium/Platinum car listing
  const renderPremiumCar = () => (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Gallery */}
      <section className="relative">
        <div className="h-[50vh] min-h-[400px] relative">
          <Image
            src={car.images[selectedImage] || car.images[0]}
            alt={car.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Navigation */}
          <div className="absolute top-4 left-4">
            <Link href="/cars" className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-black/50 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </Link>
          </div>

          {/* Badges */}
          <div className="absolute top-4 right-4 flex gap-2">
            <span className={`${conditionColors[car.condition]} text-white text-sm font-medium px-4 py-2 rounded-full`}>
              {car.condition}
            </span>
            {car.featured && (
              <span className="bg-yellow-500 text-white text-sm font-medium px-4 py-2 rounded-full">Featured</span>
            )}
            <span className={`${packageColors[car.dealer.package]} text-white text-sm font-medium px-4 py-2 rounded-full`}>
              {car.dealer.package}
            </span>
          </div>

          {/* Gallery Button */}
          {car.images.length > 1 && (
            <button
              onClick={() => setShowGallery(true)}
              className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-white transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {car.images.length} Photos
            </button>
          )}

          {/* Price Badge */}
          <div className="absolute bottom-4 left-4 bg-white rounded-xl px-6 py-4 shadow-lg">
            <div className="text-3xl font-bold text-gray-900">{car.price}</div>
            <div className="text-gray-500">{car.condition} • {car.year}</div>
          </div>
        </div>

        {/* Thumbnails */}
        {features.hasGallery && car.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden lg:flex gap-2 bg-black/30 backdrop-blur-sm p-2 rounded-lg">
            {car.images.slice(0, 5).map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-16 h-16 rounded-lg overflow-hidden ${selectedImage === index ? 'ring-2 ring-white' : 'opacity-70 hover:opacity-100'}`}
              >
                <Image src={img} alt={`View ${index + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Content */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Title */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{car.title}</h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm">{car.brand}</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm">{car.type}</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm">{car.year}</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm">{car.mileage}</span>
                </div>

                <p className="text-gray-600 leading-relaxed">{car.description}</p>
              </div>

              {/* Video */}
              {features.hasVideo && car.video && (
                <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <div className="relative pt-[56.25%]">
                    <iframe
                      src={car.video}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {/* Key Specs */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-white">
                <h2 className="text-xl font-bold mb-6">Performance</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {car.specifications.power && (
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-400">{car.specifications.power}</div>
                      <div className="text-sm text-gray-400">Power</div>
                    </div>
                  )}
                  {car.specifications.torque && (
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-400">{car.specifications.torque}</div>
                      <div className="text-sm text-gray-400">Torque</div>
                    </div>
                  )}
                  {car.specifications.acceleration && (
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-400">{car.specifications.acceleration}</div>
                      <div className="text-sm text-gray-400">0-100 km/h</div>
                    </div>
                  )}
                  {car.specifications.topSpeed && (
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-400">{car.specifications.topSpeed}</div>
                      <div className="text-sm text-gray-400">Top Speed</div>
                    </div>
                  )}
                  {car.specifications.range && (
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-400">{car.specifications.range}</div>
                      <div className="text-sm text-gray-400">Range</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Full Specifications */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Full Specifications</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {Object.entries(car.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="text-gray-900 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Features & Equipment</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
                      <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm sticky top-6">
                <button
                  onClick={() => setShowContactForm(true)}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-4 rounded-lg font-bold text-lg transition-colors mb-3"
                >
                  Request Information
                </button>
                <button className="w-full bg-white border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 py-3 rounded-lg font-medium transition-colors mb-4">
                  Schedule Test Drive
                </button>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <button className="flex items-center gap-1 hover:text-gray-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Save
                  </button>
                  <button className="flex items-center gap-1 hover:text-gray-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Share
                  </button>
                  <button className="flex items-center gap-1 hover:text-gray-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    Print
                  </button>
                </div>
              </div>

              {/* Financing */}
              {features.hasFinancing && car.financing && car.financing.available && (
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Financing
                  </h3>
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold">{car.financing.monthlyFrom}</div>
                    <div className="text-white/80">per month</div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/80">Down payment</span>
                      <span>{car.financing.downPayment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Term</span>
                      <span>{car.financing.term}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Interest rate</span>
                      <span>{car.financing.rate}</span>
                    </div>
                  </div>
                  <button className="w-full bg-white text-emerald-600 py-2 rounded-lg font-medium mt-4 hover:bg-gray-100 transition-colors">
                    Calculate Payment
                  </button>
                </div>
              )}

              {/* Sales Person */}
              {features.hasSalesPerson && car.salesPerson && (
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4">Your Sales Expert</h3>
                  <div className="flex items-center gap-4 mb-4">
                    {car.salesPerson.image && (
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <Image src={car.salesPerson.image} alt={car.salesPerson.name} width={64} height={64} className="object-cover" />
                      </div>
                    )}
                    <div>
                      <div className="font-bold text-gray-900">{car.salesPerson.name}</div>
                      <div className="text-sm text-gray-500">{car.salesPerson.role}</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {car.salesPerson.phone && (
                      <a href={`tel:${car.salesPerson.phone}`} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors">
                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {car.salesPerson.phone}
                      </a>
                    )}
                    {car.salesPerson.email && (
                      <a href={`mailto:${car.salesPerson.email}`} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors">
                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email Me
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Dealer Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl overflow-hidden">
                    <Image src={car.dealer.logo} alt={car.dealer.name} width={56} height={56} className="object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{car.dealer.name}</div>
                    {car.dealer.verified && (
                      <span className="text-xs text-emerald-600 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified Dealer
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">{car.dealer.description}</p>
                {car.dealer.address && (
                  <div className="flex items-start gap-2 text-sm text-gray-600 mb-4">
                    <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {car.dealer.address}
                  </div>
                )}
                <Link
                  href={`/companies/${car.dealer.id}`}
                  className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
                >
                  View Dealer Profile →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col">
          <div className="flex justify-between items-center p-4">
            <span className="text-white">{selectedImage + 1} / {car.images.length}</span>
            <button onClick={() => setShowGallery(false)} className="text-white hover:text-gray-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl h-[70vh]">
              <Image src={car.images[selectedImage]} alt={car.title} fill className="object-contain" />
            </div>
          </div>
          <div className="flex justify-center gap-2 p-4 overflow-x-auto">
            {car.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 ${selectedImage === index ? 'ring-2 ring-white' : 'opacity-50 hover:opacity-100'}`}
              >
                <Image src={img} alt={`View ${index + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Request Information</h3>
              <button onClick={() => setShowContactForm(false)} className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500" defaultValue={`I'm interested in the ${car.title}. Please contact me with more information.`} />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="testdrive" className="rounded border-gray-300 text-emerald-500 focus:ring-emerald-500" />
                <label htmlFor="testdrive" className="text-sm text-gray-600">I would like to schedule a test drive</label>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-3 rounded-lg font-medium transition-colors">
                Send Request
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );

  return (
    <>
      <Navbar />
      {car.dealer.package === "Basic" && renderBasicCar()}
      {car.dealer.package === "Business+" && renderBusinessPlusCar()}
      {car.dealer.package === "Premium" && renderPremiumCar()}
      {car.dealer.package === "Platinum" && renderPremiumCar()}
      <Footer />
    </>
  );
}
