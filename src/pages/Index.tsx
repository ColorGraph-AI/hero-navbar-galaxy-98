
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Solution from "@/components/Solution";
import StatsSection from "@/components/StatsSection";
import WhyColorGraph from "@/components/WhyColorGraph";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQ";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";
import { WaitlistProvider, useWaitlist } from "@/contexts/WaitlistContext";
import { Toaster } from "sonner";

// Wrapped component that has access to the waitlist context
const IndexContent: React.FC = () => {
  const { isWaitlistModalOpen, setWaitlistModalOpen } = useWaitlist();
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar transparent={true} />
      <Hero />
      <Features />
      <Solution />
      <StatsSection />
      <WhyColorGraph />
      <HowItWorks />
      <Testimonials />
      <FAQSection />
      <WaitlistSection />
      <Footer />
      <WaitlistModal 
        open={isWaitlistModalOpen} 
        onOpenChange={setWaitlistModalOpen} 
      />
      <Toaster position="top-right" />
    </div>
  );
};

// Main Index component with the provider
const Index: React.FC = () => {
  return (
    <WaitlistProvider>
      <IndexContent />
    </WaitlistProvider>
  );
};

export default Index;
