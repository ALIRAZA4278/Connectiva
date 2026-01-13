import Hero from "@/components/Hero";
import SearchSection from "@/components/SearchSection";
import QuickLinks from "@/components/QuickLinks";
import CategoriesHeader from "@/components/CategoriesHeader";
import BrowseByIndustry from "@/components/BrowseByIndustry";
import FeaturedBusinesses from "@/components/FeaturedBusinesses";
import SpecialOffers from "@/components/SpecialOffers";
import RealEstateListings from "@/components/RealEstateListings";
import CarListings from "@/components/CarListings";
import WhyChooseUs from "@/components/WhyChooseUs";
import PricingBanner from "@/components/PricingBanner";
import HowItWorks from "@/components/HowItWorks";
import Partnership from "@/components/Partnership";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <SearchSection />
      <QuickLinks />
      <CategoriesHeader />
      <BrowseByIndustry />
      <FeaturedBusinesses />
      <SpecialOffers />
      <RealEstateListings />
      <CarListings />
      <WhyChooseUs />
      <PricingBanner />
      <HowItWorks />
      <PricingBanner />
      <Partnership />
      <PricingBanner />
      <AboutUs />
      <Contact />
    </main>
  );
}
