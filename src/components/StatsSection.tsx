
import React from "react";
import { Card } from "@/components/ui/card";

const StatCard: React.FC<{
  image: string;
  alt: string;
  description: string;
  className?: string;
}> = ({ image, alt, description, className }) => {
  return (
    <Card className={`rounded-3xl p-6 bg-[#FDF5FF] border-none shadow-sm overflow-hidden ${className}`}>
      <div className="flex flex-col h-full">
        <p className="text-sm font-normal text-gray-700 font-opensans">
          {description}
        </p>
        <div className="mt-auto flex justify-center items-center">
          <img 
            src={image} 
            alt={alt} 
            className="max-w-full h-auto rounded-xl" 
          />
        </div>
      </div>
    </Card>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="py-24 border-t border-b border-gray-100">
      <div className="container mx-auto px-4">
        {/* First Stat Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <StatCard 
            image="/lovable-uploads/2791e8f5-72fc-4028-9abb-e37104f529fb.png"
            alt="Design optimization interface"
            description="Key Optimization Inbox vs. Organized AI Dashboard Concept: Show how ColorGraph.AI reduces excessive revisions. Image tiles: Before: A cluttered Inbox filled with scattered feedback emails. After: A clean, AI-powered interface that neatly organizes feedback into actionable tasks. Visual Cues: Contrast between chaos and structure, using UI-inspired elements."
          />
          <div className="flex flex-col justify-center">
            <h3 className="text-6xl text-brand-purple font-bold font-alexandria mb-4">50%</h3>
            <h4 className="text-3xl font-semibold font-alexandria text-black mb-3">Faster Design Revisions</h4>
            <p className="text-gray-600 font-opensans font-normal">
              Cut your revision time in half with AI-powered feedback processing.
            </p>
          </div>
        </div>

        {/* Second Stat Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="flex flex-col justify-center lg:order-1 order-2">
            <h3 className="text-6xl text-brand-purple font-bold font-alexandria mb-4">3x</h3>
            <h4 className="text-3xl font-semibold font-alexandria text-black mb-3">Clearer Client Feedback</h4>
            <p className="text-gray-600 font-opensans font-normal">
              Eliminate misunderstandings with structured, actionable client input.
            </p>
          </div>
          <div className="lg:order-2 order-1">
            <StatCard 
              image="/placeholder.svg"
              alt="Speech bubble converting vague comments into precise instructions"
              description="A speech bubble converting vague comments into precise instructions"
            />
          </div>
        </div>

        {/* Third Stat Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <StatCard 
            image="/placeholder.svg"
            alt="Feedback loops visualization"
            description="Revised Concept for 80% Fewer Feedback Loops
'Complex Version History vs. Streamlined Approval Flow'
• Before: A chaotic branching history timeline — a visualization of the same design with scattered feedback comments across different versions.
• After: A clean, AI-powered approval flow—a single, structured version history where feedback is merged effectively, leading to fewer total revisions.
• Visual Cues:
    • Before: Scattered version branches, repeated revision markers, chaotic comment bubbles
    • After: A linear, simplified approval path, showing that fewer iterations were needed to reach the final version.
This makes the 80% Fewer Feedback Loops distinct by focusing on reducing the number of revision cycles, while the 50% Faster Design Revisions emphasizes speeding up each individual revision cycle through organization."
          />
          <div className="flex flex-col justify-center">
            <h3 className="text-6xl text-brand-purple font-bold font-alexandria mb-4">80%</h3>
            <h4 className="text-3xl font-semibold font-alexandria text-black mb-3">Fewer Feedback Loops</h4>
            <p className="text-gray-600 font-opensans font-normal">
              Reduce the endless back-and-forth and finalize designs faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
