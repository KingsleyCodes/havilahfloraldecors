import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import ServicesSection from "@/components/Services";
import Testimonials from "@/components/TestimonialSection";
import FinalCTA from "@/components/FinalCTA";
import FeaturedPortfolio from "@/components/FeaturedPortfolio";
import HomeFounderSection from "@/components/HomeFounderSection";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="flex-grow">
        <Hero />
        <IntroSection />
        <FeaturedPortfolio />
        <ServicesSection />
        <Gallery/>
        <Testimonials />
        <HomeFounderSection />
        <FinalCTA />
      </main>
    </div>
  );
}