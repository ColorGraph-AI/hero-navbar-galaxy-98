
import React from "react";
import { motion } from "framer-motion";

interface BubbleProps {
  src: string;
  alt: string;
  className: string;
  duration?: number;
  delay?: number;
}

const Bubble: React.FC<BubbleProps> = ({ 
  src, 
  alt, 
  className, 
  duration = 8,
  delay = 0
}) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={`absolute ${className}`}
      style={{ opacity: 0.4 }}
      animate={{ 
        y: [0, -15, 0],
        rotate: [0, 3, 0]
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

const Solution: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden" id="solution">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(90deg, rgba(246,219,245,0.4) 0%, rgba(234,172,232,0.4) 50%, rgba(147,39,143,0.4) 100%)",
        }}
      />

      {/* Floating Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left Bubble has been removed */}
        
        {/* Top Right Bubble has been removed */}
        
        {/* Bottom Left Large Bubble */}
        <Bubble 
          src="/lovable-uploads/5bff9d8a-131c-4a04-bc3e-818cbb9ff6be.png"
          alt="Add some wow factor"
          className="w-40 h-40 left-[5%] bottom-[20%]"
          duration={8}
          delay={1.5}
        />
        
        {/* Center Small Bubble */}
        <Bubble 
          src="/lovable-uploads/99abade0-299d-4a5e-9273-2c8c58c24569.png"
          alt="Do your magic"
          className="w-24 h-24 left-[45%] bottom-[15%]"
          duration={6}
          delay={0.8}
        />
        
        {/* Middle Right Bubble - Moved further right */}
        <Bubble 
          src="/lovable-uploads/35246a1c-36ce-4122-8518-0020306121e8.png"
          alt="Make it POP more"
          className="w-32 h-32 right-[5%] bottom-[30%]"
          duration={7.5}
          delay={1.2}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-alexandria font-bold mb-6 text-black">The Solution</h2>
          <h3 className="text-2xl font-alexandria font-semibold mb-8 text-[#A644B3]">Turn Feedback into Action, Instantly</h3>
          <p className="text-lg font-opensans font-normal text-gray-800 mb-12">
            ColorGraph.AI bridges the gap between creative vision and client expectations,
            eliminating the endless back-and-forth revisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solution;
