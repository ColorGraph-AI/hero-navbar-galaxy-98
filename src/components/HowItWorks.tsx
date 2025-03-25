
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HowItWorks: React.FC = () => {
  const designerSteps = [
    {
      number: 1,
      title: "Invite Your Clients",
      description: "Add your client to your ColorGraph.AI project in seconds.",
      image: "/lovable-uploads/21d45aa5-d1d5-4eed-a2f8-43be2142d43e.png",
      imageAlt: "Add your clients interface",
      isLeftAligned: true
    },
    {
      number: 2,
      title: "Send Design Versions",
      description: "Share your latest design directly through the platform.",
      image: "/lovable-uploads/16d8cd2c-5b06-457d-bc56-6e140ee2153d.png",
      imageAlt: "Upload design interface",
      isLeftAligned: false
    },
    {
      number: 3,
      title: "Await Client Response",
      description: "Wait for the AI refined and organized client feedback.",
      image: "/lovable-uploads/4789ddfe-a7b6-4eb4-933f-4730c97fc8ca.png",
      imageAlt: "Refining client feedback interface",
      isLeftAligned: true
    },
    {
      number: 4,
      title: "Get AI-optimized Feedback",
      description: "Receive feedback as clear, step-by-step revision tasks.",
      image: "/lovable-uploads/c1bd95e8-24bd-4363-82f4-a847ec1c9065.png",
      imageAlt: "Feedback revision interface",
      isLeftAligned: false
    },
    {
      number: 5,
      title: "Repeat Effortlessly",
      description: "Continue the process smoothly for each revision round.",
      image: "/lovable-uploads/b8b35ae4-8313-4c02-883e-23b12a88d7d5.png",
      imageAlt: "Revision tracking interface",
      isLeftAligned: true
    }
  ];

  const clientSteps = [
    // Client steps would be defined here with similar structure
    // For now, we'll use placeholder content
    {
      number: 1,
      title: "Receive an Invitation",
      description: "Get invited to your designer's ColorGraph.AI workspace.",
      image: "/lovable-uploads/b8b35ae4-8313-4c02-883e-23b12a88d7d5.png",
      imageAlt: "Client invitation interface",
      isLeftAligned: true
    },
    {
      number: 2,
      title: "View Design Versions",
      description: "See the latest designs shared by your designer.",
      image: "/lovable-uploads/c1bd95e8-24bd-4363-82f4-a847ec1c9065.png",
      imageAlt: "Design viewing interface",
      isLeftAligned: false
    },
    {
      number: 3,
      title: "Provide Clear Feedback",
      description: "Our AI helps you structure your feedback clearly.",
      image: "/lovable-uploads/4789ddfe-a7b6-4eb4-933f-4730c97fc8ca.png",
      imageAlt: "Providing feedback interface",
      isLeftAligned: true
    }
  ];

  const renderSteps = (steps: typeof designerSteps) => {
    return steps.map((step) => (
      <div key={step.number} className={`flex flex-col md:flex-row items-center py-12 relative ${step.number % 2 === 0 ? 'bg-[#FDF8FF]' : 'bg-white'}`}>
        <div className="absolute left-0 right-0 top-0 h-px bg-gray-100" />
        
        {/* For mobile view, always show content first, then image */}
        <div className="w-full md:w-1/2 px-6 md:px-12 flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0 order-1">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center text-2xl font-alexandria font-semibold mb-3"
          >
            <span className="mr-2">{step.number}.</span> {step.title}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 font-opensans"
          >
            {step.description}
          </motion.p>
        </div>
        
        {/* For desktop view, conditionally change order */}
        <div className={`w-full md:w-1/2 px-6 flex justify-center items-center order-2 ${step.isLeftAligned ? 'md:order-2' : 'md:order-1'}`}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full max-w-md"
          >
            <img 
              src={step.image} 
              alt={step.imageAlt} 
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    ));
  };

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-alexandria font-bold mb-12">
            How ColorGraph.AI Works?
          </h2>
          
          <Tabs defaultValue="designers" className="w-full max-w-md mx-auto">
            <TabsList className="grid w-full grid-cols-2 bg-gray-100 rounded-full p-1">
              <TabsTrigger 
                value="designers" 
                className="rounded-full font-opensans font-semibold data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm"
              >
                For Designers
              </TabsTrigger>
              <TabsTrigger 
                value="clients" 
                className="rounded-full font-opensans font-semibold data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm"
              >
                For Clients
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="designers" className="mt-8">
              <div className="overflow-hidden rounded-3xl shadow-sm border border-gray-100">
                {renderSteps(designerSteps)}
              </div>
            </TabsContent>
            
            <TabsContent value="clients" className="mt-8">
              <div className="overflow-hidden rounded-3xl shadow-sm border border-gray-100">
                {renderSteps(clientSteps)}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
