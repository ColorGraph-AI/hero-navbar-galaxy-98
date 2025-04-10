
import React, { useState, useRef, useEffect } from "react";
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
      image: "/lovable-uploads/a9c16fd0-8fb2-4b50-a317-efd0e95b2dc9.png", 
      imageAlt: "Upload design interface",
    },
    {
      number: 3,
      title: "Await Client Response",
      description: "Wait for the AI refined and organized client feedback.",
      image: "/lovable-uploads/ae012bef-3fcf-4b59-bc58-98af805286a1.png", 
      imageAlt: "Refining client feedback interface",
    },
    {
      number: 4,
      title: "Get AI-optimized Feedback",
      description: "Receive feedback as clear, step-by-step revision tasks.",
      image: "/lovable-uploads/c0cef244-125d-41f9-a1df-3959fddded86.png", 
      imageAlt: "Feedback revision interface",
    },
    {
      number: 5,
      title: "Repeat Effortlessly",
      description: "Continue the process smoothly for each revision round.",
      image: "/lovable-uploads/497a0dd7-cf5c-44c2-84ab-f404a9265651.png", 
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
      image: "/lovable-uploads/a9c16fd0-8fb2-4b50-a317-efd0e95b2dc9.png", 
      imageAlt: "Design viewing interface",
    },
    {
      number: 3,
      title: "Provide Clear Feedback",
      description: "Our AI helps you structure your feedback clearly.",
      image: "/lovable-uploads/ae012bef-3fcf-4b59-bc58-98af805286a1.png", 
      imageAlt: "Providing feedback interface",
    }
  ];

  const [activeTab, setActiveTab] = useState("designers");
  const [contentHeight, setContentHeight] = useState<number>(0);
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  
  // Effect to update content height when active tab changes
  useEffect(() => {
    const activeContent = contentRefs.current[activeTab];
    if (activeContent) {
      setContentHeight(activeContent.offsetHeight + 10);
    }
  }, [activeTab]);

  const renderSteps = (steps: typeof designerSteps) => {
    return (
      <div 
        ref={el => contentRefs.current[activeTab] = el}
        className="w-full"
      >
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
          
          <div className="max-w-xl mx-auto">
            {/* Updated Tabs to match Features section style */}
            <Tabs 
              defaultValue="designers" 
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full mx-auto"
            >
              <TabsList className="w-full h-auto p-1 bg-[#FCF1FF] rounded-full mb-10 flex justify-between">
                <TabsTrigger
                  value="designers"
                  className="relative flex-1 py-3 px-2 rounded-full transition-all duration-300 text-center font-opensans font-semibold"
                >
                  <span className="relative z-10 text-black">For Designers</span>
                  {activeTab === "designers" && (
                    <motion.div
                      layoutId="activeTabHowItWorks"
                      className="absolute inset-0 bg-white rounded-full z-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </TabsTrigger>
                <TabsTrigger
                  value="clients"
                  className="relative flex-1 py-3 px-2 rounded-full transition-all duration-300 text-center font-opensans font-semibold"
                >
                  <span className="relative z-10 text-black">For Clients</span>
                  {activeTab === "clients" && (
                    <motion.div
                      layoutId="activeTabHowItWorks"
                      className="absolute inset-0 bg-white rounded-full z-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </TabsTrigger>
              </TabsList>
              
              {/* Empty TabsContent to maintain structure */}
              <TabsContent value="designers" className="mt-0" />
              <TabsContent value="clients" className="mt-0" />
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
