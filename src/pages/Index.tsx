
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar transparent={true} />
      <Hero />
    </div>
  );
};

export default Index;
