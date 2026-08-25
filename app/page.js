import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import IntroSection from "@/components/IntroSection";
import ServicesSection from "@/components/Services";
import FeaturedPortfolio from "@/components/PortfolioSection";
import HavilahDifference from "@/components/HavilahDifference";
import Testimonials from "@/components/TestimonialSection";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <IntroSection />
        <ServicesSection />
        {/* <FeaturedPortfolio /> */}
        <HavilahDifference />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}