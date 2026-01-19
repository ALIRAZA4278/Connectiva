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
import CommunityRequests from "@/components/CommunityRequests";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnerSlider from "@/components/PartnerSlider";
import CompanyOfTheWeek from "@/components/CompanyOfTheWeek";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SearchSection />
      <QuickLinks />
      <PartnerSlider />
      <CategoriesHeader />
      <BrowseByIndustry />
      <CompanyOfTheWeek />
      <FeaturedBusinesses />
      <SpecialOffers />
      <RealEstateListings />
      <CarListings />
      <WhyChooseUs />
      <PricingBanner />
      <HowItWorks />
      <CommunityRequests />
      <PricingBanner />
      <AboutUs />
      <Contact />
      <Footer />
    </main>
  );
}
