
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HowItWorks: React.FC = () => {
  const designerSteps = [
    {
      number: 1,
      title: "Invite Your Clients",
      description: "Add your client to your ColorGraph.AI project in seconds.",
      image: "/lovable-uploads/3bbf0a76-71b2-46b3-813e-6fede52c695d.png",
      imageAlt: "Add your clients interface",
    },
    {
      number: 2,
      title: "Send Design Versions",
      description: "Share your latest design directly through the platform.",
      image: "/lovable-uploads/a9c16fd0-8fb2-4b50-a317-efd0e95b2dc9.png", // Updated to the new image
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
      image: "/lovable-uploads/3bbf0a76-71b2-46b3-813e-6fede52c695d.png",
      imageAlt: "Client invitation interface",
    },
    {
      number: 2,
      title: "View Design Versions",
      description: "See the latest designs shared by your designer.",
      image: "/lovable-uploads/a9c16fd0-8fb2-4b50-a317-efd0e95b2dc9.png", // Updated to the new image
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
              <div className="hidden md:flex items-center justify-between">
                {/* Content section - alternating left/right */}
                <div className={`w-[45%] ${index % 2 === 1 ? 'order-2' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 1 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-baseline mb-3">
                      <span className="text-2xl font-bold mr-3">{step.number}.</span>
                      <h3 className="text-3xl font-alexandria font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 font-opensans text-lg">{step.description}</p>
                  </motion.div>
                </div>

                {/* Image section - alternating right/left */}
                <div className={`w-[50%] ${index % 2 === 1 ? 'order-1' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <img
                      src={step.image}
                      alt={step.imageAlt}
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Mobile layout */}
              <div className="md:hidden space-y-6">
                <div className="text-center mb-2">
                  <div className="flex items-baseline justify-center mb-3">
                    <span className="text-2xl font-bold mr-3">{step.number}.</span>
                    <h3 className="text-3xl font-alexandria font-bold">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 font-opensans text-lg px-4">{step.description}</p>
                </div>
                <div>
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
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
            
              {/* TabsContent needs to be inside the Tabs component */}
              <TabsContent value="designers" className="mt-0">
                {/* This empty div is needed for TabsContent to work correctly */}
              </TabsContent>
              <TabsContent value="clients" className="mt-0">
                {/* This empty div is needed for TabsContent to work correctly */}
              </TabsContent>
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
