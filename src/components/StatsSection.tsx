
import React, { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useIsMobile } from "@/hooks/use-mobile";
import { Separator } from "@/components/ui/separator";

const StatCard: React.FC<{
  description: string;
  className?: string;
}> = ({ description, className }) => {
  return (
    <Card className={`rounded-3xl p-6 bg-[#FDF5FF] border-none shadow-sm overflow-hidden ${className} animate-fade-in hover:shadow-md transition-shadow duration-300`}>
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
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    animatedElements?.forEach((el) => observer.observe(el));

    return () => {
      animatedElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 lg:py-24 border-t border-b border-gray-100 overflow-hidden"
      id="stats"
    >
      {/* Increased horizontal padding */}
      <div className="container mx-auto px-12 sm:px-16 md:px-24 lg:px-36 xl:px-48">
        
        {/* First Stat Row: Text on right (large), image on left (large) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-16 md:mb-24 items-center">
          {/* Text first in DOM (so it appears above on small screens), but order swapped for large screens */}
          <div
            className="flex flex-col justify-center text-left animate-on-scroll animate-slide-in-left opacity-0 order-1 lg:order-2"
            style={{ animationDelay: "0.3s", transitionDuration: "0.8s" }}
          >
            <h3 className="text-4xl sm:text-5xl lg:text-6xl text-brand-purple font-bold font-alexandria mb-3 md:mb-4 transform transition-transform duration-500 hover:translate-x-2">
              50%
            </h3>
            <h4 className="text-2xl sm:text-2xl lg:text-3xl font-semibold font-alexandria text-black mb-2 md:mb-3">
              Faster Design Revisions
            </h4>
            <p className="text-gray-600 font-opensans font-normal max-w-md">
              Cut your revision time in half with AI-powered feedback processing.
            </p>
          </div>

          {/* Image/Card second in DOM (so it appears below on small screens), but order swapped for large screens */}
          <div
            className="animate-on-scroll animate-slide-in-right opacity-0 order-2 lg:order-1"
            style={{ animationDelay: "0.1s", transitionDuration: "0.8s" }}
          >
            <StatCard
              description="Key Optimization Inbox vs. Organized AI Dashboard Concept: Show how ColorGraph.AI reduces excessive revisions. Image tiles: Before: A cluttered Inbox filled with scattered feedback emails. After: A clean, AI-powered interface that neatly organizes feedback into actionable tasks. Visual Cues: Contrast between chaos and structure, using UI-inspired elements."
            />
          </div>
        </div>

        {/* Thin line separator */}
        <Separator className="my-8 w-full mx-auto bg-gray-200 h-px" />

        {/* Second Stat Row: Text on left (text aligned right on large screens), image on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-16 md:mb-24 items-center">
          {/* Text block on left for large screens, but appears first on mobile */}
          <div
            className="flex flex-col justify-center text-left lg:text-right animate-on-scroll animate-slide-in-left opacity-0 order-1 lg:order-1"
            style={{ animationDelay: "0.5s", transitionDuration: "0.8s" }}
          >
            <h3 className="text-4xl sm:text-5xl lg:text-6xl text-brand-purple font-bold font-alexandria mb-3 md:mb-4 transform transition-transform duration-500 hover:translate-x-2">
              3x
            </h3>
            <h4 className="text-2xl sm:text-2xl lg:text-3xl font-semibold font-alexandria text-black mb-2 md:mb-3">
              Clearer Client Feedback
            </h4>
            <p className="text-gray-600 font-opensans font-normal max-w-md lg:ml-auto">
              Eliminate misunderstandings with structured, actionable client input.
            </p>
          </div>

          {/* Image/Card on right for large screens, but appears below on mobile */}
          <div
            className="animate-on-scroll animate-slide-in-right opacity-0 order-2 lg:order-2"
            style={{ animationDelay: "0.7s", transitionDuration: "0.8s" }}
          >
            <StatCard
              description="A speech bubble converting vague comments into precise instructions"
            />
          </div>
        </div>

        {/* Thin line separator */}
        <Separator className="my-8 w-full mx-auto bg-gray-200 h-px" />

        {/* Third Stat Row: Text on right (large), image on left (large) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Text first in DOM (appears first on mobile), right on large screens */}
          <div
            className="flex flex-col justify-center text-left animate-on-scroll animate-slide-in-left opacity-0 order-1 lg:order-2"
            style={{ animationDelay: "1.1s", transitionDuration: "0.8s" }}
          >
            <h3 className="text-4xl sm:text-5xl lg:text-6xl text-brand-purple font-bold font-alexandria mb-3 md:mb-4 transform transition-transform duration-500 hover:translate-x-2">
              80%
            </h3>
            <h4 className="text-2xl sm:text-2xl lg:text-3xl font-semibold font-alexandria text-black mb-2 md:mb-3">
              Fewer Feedback Loops
            </h4>
            <p className="text-gray-600 font-opensans font-normal max-w-md">
              Reduce the endless back-and-forth and finalize designs faster.
            </p>
          </div>

          {/* Image/Card second in DOM (appears below on mobile), left on large screens */}
          <div
            className="animate-on-scroll animate-slide-in-right opacity-0 order-2 lg:order-1"
            style={{ animationDelay: "0.9s", transitionDuration: "0.8s" }}
          >
            <StatCard
              description="Revised Concept for 80% Fewer Feedback Loops
'Complex Version History vs. Streamlined Approval Flow'
• Before: A chaotic branching history timeline — a visualization of the same design with scattered feedback comments across different versions.
• After: A clean, AI-powered approval flow—a single, structured version history where feedback is merged effectively, leading to fewer total revisions."
            />
          </div>
        </div>
      </div>

      <style>
        {`
          .animate-on-scroll {
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          }
          .animate-on-scroll.visible {
            opacity: 1 !important;
            transform: translateX(0) !important;
          }
          .animate-slide-in-left {
            transform: translateX(-80px);
          }
          .animate-slide-in-right {
            transform: translateX(80px);
          }
        `}
      </style>
    </section>
  );
};

export default StatsSection;
