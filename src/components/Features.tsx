
import React, { useState, useRef, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";

interface FeatureTab {
  id: string;
  label: string;
  imageUrl: string;
  description: string;
}

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("ai-analysis");
  const [contentHeight, setContentHeight] = useState<number>(0);
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  
  const featureTabs: FeatureTab[] = [
    {
      id: "ai-analysis",
      label: "AI-Powered Feedback Analysis",
      imageUrl: "/lovable-uploads/7437029e-b5f5-4088-939c-1ddc748fd1dc.png",
      description: "Our AI analyzes feedback from multiple sources, identifying patterns and extracting actionable insights that might otherwise be missed."
    },
    {
      id: "centralized-hub",
      label: "Centralized Feedback Hub",
      imageUrl: "/lovable-uploads/983c12bd-6011-4fcb-bfeb-fb4c873a9787.png",
      description: "Collect and organize all client feedback in one place, making it easy to track, prioritize, and implement changes."
    },
    {
      id: "seamless-integration",
      label: "Seamless Integration",
      imageUrl: "/lovable-uploads/f34fc2a5-27b1-4f00-baa5-bb180f130b08.png",
      description: "Connects with your existing design and project management tools for a smooth, uninterrupted workflow."
    }
  ];

  // Update content height when active tab changes
  useEffect(() => {
    const activeContent = contentRefs.current[activeTab];
    if (activeContent) {
      setContentHeight(activeContent.offsetHeight + 10);
    }
  }, [activeTab]);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">Features</h2>
        <h3 className="text-lg sm:text-xl font-alexandria font-semibold text-center text-gray-700 mb-8 sm:mb-12 px-4">
          Transform your creative workflow with AI-powered feedback tools
        </h3>
        
        <Tabs 
          defaultValue="ai-analysis" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full max-w-6xl mx-auto"
        >
          <TabsList className="w-full h-auto p-1 bg-[#FCF1FF] rounded-2xl sm:rounded-full mb-6 sm:mb-10 flex flex-col sm:flex-row justify-between gap-1 sm:gap-0">
            {featureTabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="relative flex-1 py-2 sm:py-3 px-1 sm:px-3 rounded-xl sm:rounded-full transition-all duration-300 text-center font-opensans font-semibold w-full sm:w-auto"
              >
                <span className="relative z-10 text-black text-xs sm:text-sm lg:text-base leading-tight">{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-xl sm:rounded-full z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <div 
            className="bg-[#FCF1FF] rounded-2xl sm:rounded-2xl lg:rounded-3xl p-2 sm:p-4 lg:p-6 overflow-hidden transition-all duration-300"
            style={{ minHeight: `${contentHeight}px` }}
          >
            {featureTabs.map((tab) => (
              <TabsContent 
                key={tab.id} 
                value={tab.id}
                className={`mt-0 data-[state=active]:animate-fade-in transition-opacity duration-300 ${
                  activeTab === tab.id ? "block" : "hidden"
                }`}
                style={{ animationDelay: '0.1s' }}
              >
                <div 
                  ref={el => contentRefs.current[tab.id] = el}
                  className="overflow-hidden bg-white/70 backdrop-blur-sm border border-white/30 rounded-xl sm:rounded-xl lg:rounded-2xl mx-1 sm:mx-2 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <img 
                    src={tab.imageUrl} 
                    alt={tab.label} 
                    className="w-full h-auto block"
                  />
                  <div className="p-4 sm:p-6 lg:p-8">
                    <h4 className="font-alexandria font-bold text-lg sm:text-xl text-gray-900 mb-3 text-center">
                      {tab.label}
                    </h4>
                    <p className="text-center text-gray-700 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                      {tab.description}
                    </p>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Features;
