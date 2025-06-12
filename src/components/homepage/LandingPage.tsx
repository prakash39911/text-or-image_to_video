import React from "react";
import ExamplesSection from "./ExamplesSection";
import FeaturesSection from "./FeaturesSection";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import HowItWorksSection from "./HowItWorksSection";
import BuyNowSection from "./BuyNowSection";
import { getUserCredits } from "@/app/actions/authActions";

const LandingPage = async ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const credit = await getUserCredits();

  return (
    <div className="min-h-screen overflow-hidden text-white">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg')] bg-cover bg-center opacity-5 z-0"></div>
      <div className="relative z-10">
        <Header isLoggedIn={isLoggedIn} credit={credit ? credit : 0} />
        <main>
          <HeroSection />
          <FeaturesSection />
          <HowItWorksSection />
          <ExamplesSection />
          <BuyNowSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
