import React from "react";
import Banner from "../components/home/Banner";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Testimonial from "../components/home/Testimonial";
import CallToAction from "../components/home/CallToAction";
import Footer from "../components/home/Footer";
import BannerSection from "@/components/home/BannerSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import StatsSection from "@/components/home/StatsSection";
import CTASection from "@/components/home/CTASection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Hero></Hero>
      <BannerSection />
      <HowItWorksSection />
      <StatsSection />
      <FeaturesSection />

      <Features></Features>
      <Testimonial></Testimonial>
      <CTASection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
