
import React from "react";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const StatCard: React.FC<{
  description: string;
  className?: string;
}> = ({ description, className }) => {
  return (
    <Card className={`rounded-3xl p-6 bg-[#FDF5FF] border-none shadow-sm overflow-hidden ${className}`}>
      <div className="flex flex-col h-full">
        <p className="text-sm font-normal text-gray-700 font-opensans mb-4">
          {description}
        </p>
        <div className="mt-auto">
          <Skeleton className="w-full h-40 rounded-xl" />
        </div>
      </div>
    </Card>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="py-24 border-t border-b border-gray-100">
      <div className="container mx-auto px-4">
        {/* First Stat Row - Image left, 50% right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">
          <div>
            <StatCard 
              description="Key Optimization Inbox vs. Organized AI Dashboard Concept: Show how ColorGraph.AI reduces excessive revisions. Image tiles: Before: A cluttered Inbox filled with scattered feedback emails. After: A clean, AI-powered interface that neatly organizes feedback into actionable tasks. Visual Cues: Contrast between chaos and structure, using UI-inspired elements."
            />
          </div>
          <div className="flex flex-col justify-center text-left lg:text-left">
            <h3 className="text-6xl text-brand-purple font-bold font-alexandria mb-4">50%</h3>
            <h4 className="text-3xl font-semibold font-alexandria text-black mb-3">Faster Design Revisions</h4>
            <p className="text-gray-600 font-opensans font-normal">
              Cut your revision time in half with AI-powered feedback processing.
            </p>
          </div>
        </div>

        {/* Second Stat Row - 3x left, Image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">
          <div className="flex flex-col justify-center text-left">
            <h3 className="text-6xl text-brand-purple font-bold font-alexandria mb-4">3x</h3>
            <h4 className="text-3xl font-semibold font-alexandria text-black mb-3">Clearer Client Feedback</h4>
            <p className="text-gray-600 font-opensans font-normal">
              Eliminate misunderstandings with structured, actionable client input.
            </p>
          </div>
          <div>
            <StatCard 
              description="A speech bubble converting vague comments into precise instructions"
            />
          </div>
        </div>

        {/* Third Stat Row - Image left, 80% right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <StatCard 
              description="Revised Concept for 80% Fewer Feedback Loops
'Complex Version History vs. Streamlined Approval Flow'
• Before: A chaotic branching history timeline — a visualization of the same design with scattered feedback comments across different versions.
• After: A clean, AI-powered approval flow—a single, structured version history where feedback is merged effectively, leading to fewer total revisions."
            />
          </div>
          <div className="flex flex-col justify-center text-left lg:text-left">
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
