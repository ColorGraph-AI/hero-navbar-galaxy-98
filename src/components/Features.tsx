
import React, { useState } from "react";
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
  
  const featureTabs: FeatureTab[] = [
    {
      id: "ai-analysis",
      label: "AI-Powered Feedback Analysis",
      imageUrl: "/lovable-uploads/98a4b49a-c323-49c8-a163-745c68eb66ca.png",
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

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        
        <Tabs 
          defaultValue="ai-analysis" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full max-w-4xl mx-auto"
        >
          <TabsList className="w-full h-auto p-1 bg-purple-50 rounded-full mb-10">
            {featureTabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="relative py-3 px-6 text-gray-700 rounded-full data-[state=active]:text-brand-purple data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-300"
              >
                {tab.label}
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
          
          <div className="bg-purple-50 rounded-xl p-6 overflow-hidden">
            {featureTabs.map((tab) => (
              <TabsContent 
                key={tab.id} 
                value={tab.id}
                className="mt-0 data-[state=active]:animate-fade-in"
                style={{ 
                  animationDelay: '0.1s'
                }}
              >
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={tab.imageUrl} 
                    alt={tab.label} 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                  <p className="mt-6 text-center text-gray-700 max-w-2xl mx-auto">
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
