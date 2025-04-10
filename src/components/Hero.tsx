
import React from "react";
import { Button } from "@/components/ui/button";
import TrustedBy from "./TrustedBy";
import { useWaitlist } from "@/contexts/WaitlistContext";
import ParticleEffect from "./ParticleEffect";

const Hero: React.FC = () => {
  const { openWaitlistModal } = useWaitlist();
  
  return (
    <div className="relative pt-20 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/79329c76-5f48-408d-ac73-874ac7214c60.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.8
        }}
      />
      
      {/* Particle effect - Moved above the gradient overlay for better visibility */}
      <ParticleEffect />
      
      {/* Gradient overlay with reduced opacity to let particles show through */}
      <div 
        className="absolute inset-0 z-1"
        style={{
          background: "linear-gradient(135deg, rgba(166, 68, 179, 0.15) 0%, rgba(155, 135, 245, 0.15) 50%, rgba(255, 139, 213, 0.15) 100%), linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.6) 70%, rgba(255,255,255,0.9) 100%)",
        }}
      />
      
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
            Join 5000+ designers ready to revolutionize client collaboration with AI
          </p>
          
          {/* Trusted By Section */}
          <TrustedBy />
        </div>
      </div>
    </div>
  );
};

export default Hero;
