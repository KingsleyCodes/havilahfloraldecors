import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import IntroSection from "@/components/IntroSection";

import ServicesSection from "@/components/Services";
import Testimonials from "@/components/TestimonialSection";
import FinalCTA from "@/components/FinalCTA";
import FeaturedPortfolio from "@/components/FeaturedPortfolio";
import HomeFounderSection from "@/components/HomeFounderSection";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <IntroSection />
        <FeaturedPortfolio/>
   
        <ServicesSection />
        <Testimonials />
        <HomeFounderSection/>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}