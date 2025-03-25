
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Solution from "@/components/Solution";
import StatsSection from "@/components/StatsSection";
import WhyColorGraph from "@/components/WhyColorGraph";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar transparent={true} />
      <Hero />
      <Features />
      <StatsSection />
      <WhyColorGraph />
      <Solution />
    </div>
  );
};

export default Index;
