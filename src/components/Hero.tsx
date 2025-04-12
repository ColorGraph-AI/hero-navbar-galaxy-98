import React from "react";
import { Button } from "@/components/ui/button";
import TrustedBy from "./TrustedBy";
import { useWaitlist } from "@/contexts/WaitlistContext";

// Define the FloatingElement component within the file
interface FloatingElementProps {
  src: string;
  alt: string;
  className?: string;
  animationClass?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  zIndex?: number;
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
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`floating-element absolute ${animationClass} ${className}`}
      style={{ ...style, zIndex }}
    />
  );
};

const Hero: React.FC = () => {
  const { openWaitlistModal } = useWaitlist();
  
  return (
    <div className="relative pt-20 overflow-hidden">
      {/* Gradient background */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-pink-50 to-pink-100"
        style={{
          background: "linear-gradient(135deg, #fff8ff 0%, #ffebff 50%, #fff5ff 100%)"
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Pink Donut Middle Left */}
        <FloatingElement
          src="/lovable-uploads/00310d1f-5e85-405a-9e0d-cdaccd3706e5.png"
          alt="Pink Donut"
          className="top-[50%] right-[80%] w-20 md:w-24 lg:w-28"
          animationClass="animate-float-slow"
        />
        
        {/* Pink Donut Top Right */}
        <FloatingElement
          src="/lovable-uploads/d80387b7-a1dd-4ced-8cdf-b500ccec64a0.png"
          alt="Pink Donut"
          className="top-[5%] left-[10%] w-24 md:w-28 lg:w-32"
          animationClass="animate-float"
        />
        
        {/* Purple Star */}
        <FloatingElement
          src="/lovable-uploads/44064c5f-0a3e-4d66-b4cc-46967f7c606e.png"
          alt="Purple Star"
          className="bottom-[25%] right-[25%] w-16 md:w-20 lg:w-24"
          animationClass="animate-float-fast"
        />
        
        {/* Purple Tube */}
        <FloatingElement
          src="/lovable-uploads/570f62fb-b986-46fc-a060-0601c464a73a.png"
          alt="Purple Tube"
          className="bottom-[20%] left-[0%] w-20 md:w-24 lg:w-28 -rotate-15"
          animationClass="animate-float-slow"
        />
        
        {/* Pink Spiral/Tube */}
        <FloatingElement
          src="/lovable-uploads/b1e00d8c-7fb7-4369-8fae-6623f63134b2.png"
          alt="Pink Spiral"
          className="top-[70%] right-[30%] w-16 md:w-20 lg:w-24 rotate-15"
          animationClass="animate-float"
        />
        
        {/* Pink Sphere */}
        <FloatingElement
          src="/lovable-uploads/570f62fb-b986-46fc-a060-0601c464a73a.png"
          alt="Blue Tube"
          className="bottom-[30%] right-[80%] w-10 md:w-10 lg:w-10 rotate-45"
          animationClass="animate-float-slow"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[85vh] text-center py-16 md:py-24">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-alexandria font-bold tracking-tight text-black max-w-4xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <span className="block">Faster Feedback,</span>
            <span className="block">Fewer Revisions.</span>
          </h1>
          
          {/* Subheadline */}
          <h2 className="mt-6 text-xl md:text-2xl lg:text-3xl font-alexandria font-semibold text-brand-purple max-w-2xl animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Keep Your Creativity Flowing
          </h2>
          
          {/* Description */}
          <p className="mt-6 text-lg font-opensans font-normal text-gray-700 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Tired of vague feedback and endless revision cycles? ColorGraph.AI transforms client input into
            structured, actionable insights so you can design with clarity and confidence.
          </p>
          
          {/* CTA Button */}
          <div className="mt-10 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <Button 
              className="cta-button font-alexandria font-semibold bg-brand-purple hover:bg-brand-purple/90 text-white px-8 py-6 text-lg rounded-full shadow-lg"
              onClick={openWaitlistModal}
            >
              Join our waitlist !
            </Button>
          </div>
          
          {/* Join Count */}
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
          
          {/* Trusted By Section */}
          <TrustedBy />
        </div>
      </div>
    </div>
  );
};

export default Hero;