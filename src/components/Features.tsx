
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
      imageUrl: "/lovable-uploads/98a4b49a-c323-49c8-a163-745c68eb66ca.png",
      description: "Collect and organize all client feedback in one place, making it easy to track, prioritize, and implement changes."
    },
    {
      id: "seamless-integration",
      label: "Seamless Integration",
      imageUrl: "/lovable-uploads/98a4b49a-c323-49c8-a163-745c68eb66ca.png",
      description: "Connects with your existing design and project management tools for a smooth, uninterrupted workflow."
    }
  ];

  // Update content height when active tab changes
  useEffect(() => {
    const activeContent = contentRefs.current[activeTab];
    if (activeContent) {
      // Add a small buffer to prevent any potential scrollbar flicker
      setContentHeight(activeContent.offsetHeight + 10);
    }
  }, [activeTab]);

  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Features</h2>
        <h3 className="text-xl font-alexandria font-semibold text-center text-gray-700 mb-12">
          Transform your creative workflow with AI-powered feedback tools
        </h3>
        
        <Tabs 
          defaultValue="ai-analysis" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full max-w-4xl mx-auto"
        >
          <TabsList className="w-full h-auto p-1 bg-[#FCF1FF] rounded-full mb-10 flex justify-between">
            {featureTabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="relative flex-1 py-3 px-2 rounded-full transition-all duration-300 text-center font-opensans font-semibold"
              >
                <span className="relative z-10 text-black">{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-full z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <div 
            className="bg-[#FCF1FF] rounded-3xl p-8 overflow-hidden transition-all duration-300"
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
                  className="overflow-hidden border-4 border-[#FCF1FF] rounded-2xl bg-white"
                >
                  <img 
                    src={tab.imageUrl} 
                    alt={tab.label} 
                    className="w-full h-auto"
                  />
                  <p className="mt-6 text-center text-gray-700 max-w-2xl mx-auto p-4">
                    {tab.description}
                  </p>
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
