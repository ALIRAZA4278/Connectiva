"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const carTypes = ["All Types", "Sedan", "SUV", "Sports", "Electric", "Van", "Truck"];
const conditions = ["All Conditions", "New", "Used", "Certified Pre-Owned"];
const brands = ["All Brands", "BMW", "Mercedes-Benz", "Audi", "Volkswagen", "Tesla", "Porsche", "Toyota"];

const cars = [
  {
    id: 1,
    title: "BMW X5 xDrive40i",
    brand: "BMW",
    type: "SUV",
    condition: "New",
    year: 2024,
    mileage: "0 km",
    price: "CHF 89,900",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80",
    featured: true,
    fuel: "Petrol",
    transmission: "Automatic",
    dealer: "Graubünden Auto Center",
    location: "Chur",
  },
  {
    id: 2,
    title: "Tesla Model 3 Long Range",
    brand: "Tesla",
    type: "Electric",
    condition: "New",
    year: 2024,
    mileage: "0 km",
    price: "CHF 52,900",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&q=80",
    featured: true,
    fuel: "Electric",
    transmission: "Automatic",
    dealer: "Swiss EV Motors",
    location: "Landquart",
  },
  {
    id: 3,
    title: "Mercedes-Benz C-Class",
    brand: "Mercedes-Benz",
    type: "Sedan",
    condition: "Certified Pre-Owned",
    year: 2022,
    mileage: "25,000 km",
    price: "CHF 45,500",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80",
    featured: false,
    fuel: "Diesel",
    transmission: "Automatic",
    dealer: "Premium Auto AG",
    location: "Chur",
  },
  {
    id: 4,
    title: "Audi Q7 55 TFSI",
    brand: "Audi",
    type: "SUV",
    condition: "Used",
    year: 2021,
    mileage: "42,000 km",
    price: "CHF 62,000",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80",
    featured: false,
    fuel: "Petrol",
    transmission: "Automatic",
    dealer: "Auto Rheintal",
    location: "Bad Ragaz",
  },
  {
    id: 5,
    title: "Porsche 911 Carrera",
    brand: "Porsche",
    type: "Sports",
    condition: "New",
    year: 2024,
    mileage: "0 km",
    price: "CHF 148,000",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
    featured: true,
    fuel: "Petrol",
    transmission: "Automatic",
    dealer: "Porsche Center Graubünden",
    location: "Chur",
  },
  {
    id: 6,
    title: "Volkswagen ID.4",
    brand: "Volkswagen",
    type: "Electric",
    condition: "New",
    year: 2024,
    mileage: "0 km",
    price: "CHF 49,900",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&q=80",
    featured: false,
    fuel: "Electric",
    transmission: "Automatic",
    dealer: "VW Autohaus Chur",
    location: "Chur",
  },
  {
    id: 7,
    title: "Toyota Land Cruiser",
    brand: "Toyota",
    type: "SUV",
    condition: "Used",
    year: 2020,
    mileage: "65,000 km",
    price: "CHF 58,500",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80",
    featured: false,
    fuel: "Diesel",
    transmission: "Automatic",
    dealer: "Alpine Motors",
    location: "Davos",
  },
  {
    id: 8,
    title: "Mercedes-Benz Sprinter Van",
    brand: "Mercedes-Benz",
    type: "Van",
    condition: "New",
    year: 2024,
    mileage: "0 km",
    price: "CHF 68,000",
    image: "https://images.unsplash.com/photo-1570733577524-3a047079e80d?w=600&q=80",
    featured: false,
    fuel: "Diesel",
    transmission: "Manual",
    dealer: "Commercial Vehicles AG",
    location: "Landquart",
  },
];

export default function CarsPage() {
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedCondition, setSelectedCondition] = useState("All Conditions");
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCars = cars.filter((car) => {
    const matchesType = selectedType === "All Types" || car.type === selectedType;
    const matchesCondition = selectedCondition === "All Conditions" || car.condition === selectedCondition;
    const matchesBrand = selectedBrand === "All Brands" || car.brand === selectedBrand;
    const matchesSearch = car.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         car.dealer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesCondition && matchesBrand && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <main className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-[#0f1419] py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-emerald-500 text-sm font-semibold uppercase tracking-wider">
                AUTOMOTIVE
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
                <span className="text-white">Find Your Next </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400">
                  Car
                </span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Browse new and pre-owned vehicles from trusted dealers in the Rhine Valley.
              </p>
            </div>

            {/* Search & Filters */}
            <div className="mt-10 bg-[#1a2332] rounded-xl p-4 sm:p-6 border border-gray-700/50">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search Input */}
                <div className="flex-1 relative">
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search by model or dealer..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#0f1419] border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                {/* Brand Dropdown */}
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="bg-[#0f1419] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                >
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>

                {/* Type Dropdown */}
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="bg-[#0f1419] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                >
                  {carTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>

                {/* Condition Dropdown */}
                <select
                  value={selectedCondition}
                  onChange={(e) => setSelectedCondition(e.target.value)}
                  className="bg-[#0f1419] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                >
                  {conditions.map((cond) => (
                    <option key={cond} value={cond}>{cond}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Cars Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Results Count */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">{filteredCars.length}</span> vehicles found
              </p>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 text-sm">Sort by:</span>
                <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500">
                  <option>Newest First</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Mileage: Low to High</option>
                </select>
              </div>
            </div>

            {/* Cars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCars.map((car) => (
                <Link
                  key={car.id}
                  href={`/cars/${car.id}`}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={car.image}
                      alt={car.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className={`text-white text-xs font-medium px-2.5 py-1 rounded-full ${
                        car.condition === "New" ? "bg-emerald-500" :
                        car.condition === "Certified Pre-Owned" ? "bg-teal-500" : "bg-gray-500"
                      }`}>
                        {car.condition}
                      </span>
                      {car.featured && (
                        <span className="bg-yellow-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    {/* Price */}
                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                      <span className="font-bold text-gray-900">{car.price}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <span>{car.brand}</span>
                      <span>•</span>
                      <span>{car.year}</span>
                      <span>•</span>
                      <span>{car.type}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-emerald-600 transition-colors">
                      {car.title}
                    </h3>

                    {/* Specs */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                        {car.mileage}
                      </span>
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                        {car.fuel}
                      </span>
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                        {car.transmission}
                      </span>
                    </div>

                    {/* Dealer Info */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-sm">
                      <span className="text-gray-600">{car.dealer}</span>
                      <span className="text-gray-400 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {car.location}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* No Results */}
            {filteredCars.length === 0 && (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No vehicles found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}

            {/* Load More */}
            {filteredCars.length > 0 && (
              <div className="text-center mt-12">
                <button className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Load More Vehicles
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0f1419] py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Sell Your Car
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              List your vehicle and reach thousands of potential buyers in the Rhine Valley.
            </p>
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3 rounded-lg font-medium transition-all"
            >
              List Your Vehicle
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
