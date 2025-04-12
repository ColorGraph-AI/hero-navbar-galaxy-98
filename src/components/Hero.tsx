import React from "react";
import { Button } from "@/components/ui/button";
import TrustedBy from "./TrustedBy";
import { useWaitlist } from "@/contexts/WaitlistContext";

interface FloatingElementProps {
  src: string;
  alt: string;
  className?: string;
  animationClass?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  zIndex?: number;
  rotation?: number; // New prop specifically for rotation
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

const FloatingElement: React.FC<FloatingElementProps> = ({
  src,
  alt,
  className = "",
  animationClass = "animate-float",
  width = 80,
  height = 80,
  style = {},
  zIndex = 10,
  rotation = 0, // Default to no rotation
  top,
  left,
  right,
  bottom,
}) => {
  return (
    <div 
      className="absolute" 
      style={{ 
        top, 
        left, 
        right, 
        bottom, 
        transform: rotation ? `rotate(${rotation}deg)` : undefined,
        zIndex
      }}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`floating-element ${animationClass} ${className}`}
        style={style}
      />
    </div>
  );
};

const Hero: React.FC = () => {
  const { openWaitlistModal } = useWaitlist();
  
  return (
    <div className="relative pt-20 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, #fff8ff 0%, #ffebff 50%, #fff5ff 100%)"
        }}
      />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Convert all elements to use the new positioning props */}
        <FloatingElement
          src="/lovable-uploads/pink_donut1.png"
          alt="Pink Donut"
          width={80}
          top="35%"
          right="80%"
          animationClass="animate-float-slow"
        />
        
        <FloatingElement
          src="/lovable-uploads/d80387b7-a1dd-4ced-8cdf-b500ccec64a0.png"
          alt="Purple tube"
          width={80}
          top="30%"
          right="0%"
          animationClass="animate-float"
        />

        <FloatingElement
          src="/lovable-uploads/d80387b7-a1dd-4ced-8cdf-b500ccec64a0.png"
          alt="Purple tube"
          width={80}
          top="50%"
          left="0%"
          rotation={50}
          animationClass="animate-float"
        />
        
        <FloatingElement
          src="/lovable-uploads/pink_donut2.png"
          alt="Pink Donut Big"
          width={96}
          top="10%"
          right="15%"
          rotation={15}
          animationClass="animate-float"
        />

        <FloatingElement
          src="/lovable-uploads/pink_spiral.png"
          alt="Pink Spiral"
          width={128}
          bottom="35%"
          right="15%"
          rotation={85}
          animationClass="animate-float"
        />
        
        <FloatingElement
          src="/lovable-uploads/570f62fb-b986-46fc-a060-0601c464a73a.png"
          alt="Blue Tube"
          width={40}
          bottom="30%"
          right="70%"
          animationClass="animate-float-slow"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[85vh] text-center py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-alexandria font-bold tracking-tight text-black max-w-4xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <span className="block">Faster Feedback,</span>
            <span className="block">Fewer Revisions.</span>
          </h1>
          
          <h2 className="mt-6 text-xl md:text-2xl lg:text-3xl font-alexandria font-semibold text-brand-purple max-w-2xl animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Keep Your Creativity Flowing
          </h2>
          
          <p className="mt-6 text-lg font-opensans font-normal text-gray-700 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Tired of vague feedback and endless revision cycles? ColorGraph.AI transforms client input into
            structured, actionable insights so you can design with clarity and confidence.
          </p>
          
          <div className="mt-10 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <Button 
              className="cta-button font-alexandria font-semibold bg-brand-purple hover:bg-brand-purple/90 text-white px-8 py-6 text-lg rounded-full shadow-lg"
              onClick={openWaitlistModal}
            >
              Join our waitlist !
            </Button>
          </div>
          
          <p className="mt-6 text-sm font-opensans font-normal text-gray-600 flex items-center gap-2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-brand-purple"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Join 1000+ designers ready to revolutionize client collaboration with AI
          </p>
          
          <TrustedBy />
        </div>
      </div>
    </div>
  );
};

export default Hero;