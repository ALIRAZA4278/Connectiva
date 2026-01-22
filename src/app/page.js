import Hero from "@/components/Hero";
import SearchSection from "@/components/SearchSection";
import QuickLinks from "@/components/QuickLinks";
import CategoriesHeader from "@/components/CategoriesHeader";
import FeaturedBusinesses from "@/components/FeaturedBusinesses";
import TopJobOffers from "@/components/TopJobOffers";
import RealEstateListings from "@/components/RealEstateListings";
import CarListings from "@/components/CarListings";
import WhyChooseUs from "@/components/WhyChooseUs";
import PricingBanner from "@/components/PricingBanner";
import HowItWorks from "@/components/HowItWorks";
import CommunityRequests from "@/components/CommunityRequests";
import NewsBlog from "@/components/NewsBlog";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CompanyOfTheWeek from "@/components/CompanyOfTheWeek";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SearchSection />
      <QuickLinks />
      <CategoriesHeader />
      <FeaturedBusinesses />
      <TopJobOffers />
      <RealEstateListings />
      <CarListings />
      <PricingBanner />
      <CommunityRequests />
      <NewsBlog />
      <CompanyOfTheWeek />
      <WhyChooseUs />
      <HowItWorks />
      <PricingBanner />
      <Contact />
      <Footer />
    </main>
  );
}
