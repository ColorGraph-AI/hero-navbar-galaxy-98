
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
    },
    {
      number: 2,
      title: "Send Design Versions",
      description: "Share your latest design directly through the platform.",
      image: "/lovable-uploads/16d8cd2c-5b06-457d-bc56-6e140ee2153d.png",
      imageAlt: "Upload design interface",
    },
    {
      number: 3,
      title: "Await Client Response",
      description: "Wait for the AI refined and organized client feedback.",
      image: "/lovable-uploads/4789ddfe-a7b6-4eb4-933f-4730c97fc8ca.png",
      imageAlt: "Refining client feedback interface",
    },
    {
      number: 4,
      title: "Get AI-optimized Feedback",
      description: "Receive feedback as clear, step-by-step revision tasks.",
      image: "/lovable-uploads/c1bd95e8-24bd-4363-82f4-a847ec1c9065.png",
      imageAlt: "Feedback revision interface",
    },
    {
      number: 5,
      title: "Repeat Effortlessly",
      description: "Continue the process smoothly for each revision round.",
      image: "/lovable-uploads/b8b35ae4-8313-4c02-883e-23b12a88d7d5.png",
      imageAlt: "Revision tracking interface",
    }
  ];

  const clientSteps = [
    {
      number: 1,
      title: "Receive an Invitation",
      description: "Get invited to your designer's ColorGraph.AI workspace.",
      image: "/lovable-uploads/21d45aa5-d1d5-4eed-a2f8-43be2142d43e.png",
      imageAlt: "Client invitation interface",
    },
    {
      number: 2,
      title: "View Design Versions",
      description: "See the latest designs shared by your designer.",
      image: "/lovable-uploads/16d8cd2c-5b06-457d-bc56-6e140ee2153d.png",
      imageAlt: "Design viewing interface",
    },
    {
      number: 3,
      title: "Provide Clear Feedback",
      description: "Our AI helps you structure your feedback clearly.",
      image: "/lovable-uploads/4789ddfe-a7b6-4eb4-933f-4730c97fc8ca.png",
      imageAlt: "Providing feedback interface",
    }
  ];

  const [activeTab, setActiveTab] = useState("designers");

  const renderSteps = (steps: typeof designerSteps) => {
    return (
      <div className="w-full">
        {steps.map((step, index) => (
          <div 
            key={step.number} 
            className={`py-16 relative ${index % 2 === 1 ? 'bg-[#FCF5FF]' : 'bg-white'}`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              {/* Desktop layout */}
              <div className="hidden md:flex items-center">
                {/* Content - always goes on the left for odd steps, right for even steps */}
                <div className={`w-1/2 ${index % 2 === 1 ? 'order-2 pl-12' : 'pr-12'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 1 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`${index % 2 === 1 ? 'ml-auto text-right' : ''}`}
                  >
                    <h3 className="text-3xl font-alexandria font-bold mb-3">
                      <span className="mr-2">{step.number}.</span>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 font-opensans text-lg max-w-xl">{step.description}</p>
                  </motion.div>
                </div>

                {/* Image - always goes on the right for odd steps, left for even steps */}
                <div className={`w-1/2 ${index % 2 === 1 ? 'order-1' : 'order-2'}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-lg mx-auto"
                  >
                    <img
                      src={step.image}
                      alt={step.imageAlt}
                      className="w-full h-auto rounded-xl shadow-md border border-gray-100"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Mobile layout */}
              <div className="md:hidden">
                <div className="flex flex-col space-y-8">
                  <div className="text-center">
                    <h3 className="text-3xl font-alexandria font-bold mb-3">
                      <span className="mr-2">{step.number}.</span>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 font-opensans text-lg">{step.description}</p>
                  </div>
                  <div className="mx-auto max-w-sm">
                    <img
                      src={step.image}
                      alt={step.imageAlt}
                      className="w-full h-auto rounded-xl shadow-md border border-gray-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="how-it-works" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-alexandria font-bold mb-10">
            How ColorGraph.AI Works?
          </h2>
          
          <div className="max-w-xs mx-auto">
            <Tabs defaultValue="designers" onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-gray-100 rounded-full p-1">
                <TabsTrigger 
                  value="designers" 
                  className="rounded-full font-opensans data-[state=active]:bg-white data-[state=active]:shadow-sm px-4 py-2"
                >
                  For Designers
                </TabsTrigger>
                <TabsTrigger 
                  value="clients" 
                  className="rounded-full font-opensans data-[state=active]:bg-white data-[state=active]:shadow-sm px-4 py-2"
                >
                  For Clients
                </TabsTrigger>
              </TabsList>
            
              {/* Tabs content */}
              <div className="mt-0">
                <TabsContent value="designers">
                  {/* This empty div is needed to make the TabsContent work correctly */}
                </TabsContent>
                <TabsContent value="clients">
                  {/* This empty div is needed to make the TabsContent work correctly */}
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </motion.div>
      </div>

      {/* Step content outside of Tabs for proper full-width bg colors */}
      <div className="overflow-hidden">
        {activeTab === "designers" && renderSteps(designerSteps)}
        {activeTab === "clients" && renderSteps(clientSteps)}
      </div>
    </section>
  );
};

export default HowItWorks;
