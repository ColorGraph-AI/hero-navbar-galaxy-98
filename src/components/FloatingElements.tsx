import React from "react";

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

const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Pink Donut Top Middle */}
      <FloatingElement
        src="/lovable-uploads/6d0959d7-3bfa-4014-8a54-af9ee95f1b7c.png" 
        alt="Pink Sphere"
        className="top-[10%] right-[40%] w-16 md:w-20 lg:w-24"
        animationClass="animate-float-slow"
        zIndex={5}
      />
      
      {/* Pink Donut Top Right */}
      <FloatingElement
        src="/lovable-uploads/00310d1f-5e85-405a-9e0d-cdaccd3706e5.png"
        alt="Pink Donut"
        className="top-[15%] right-[8%] w-20 md:w-24 lg:w-28"
        animationClass="animate-float-slow"
      />
      
      {/* Pink Donut Bottom Left */}
      <FloatingElement
        src="/lovable-uploads/d80387b7-a1dd-4ced-8cdf-b500ccec64a0.png"
        alt="Pink Donut"
        className="bottom-[25%] left-[8%] w-24 md:w-28 lg:w-32"
        animationClass="animate-float"
      />
      
      {/* Purple Star */}
      <FloatingElement
        src="/lovable-uploads/44064c5f-0a3e-4d66-b4cc-46967f7c606e.png"
        alt="Purple Star"
        className="bottom-[30%] right-[20%] w-14 md:w-16 lg:w-20"
        animationClass="animate-float-fast"
      />
      
      {/* Purple Tube */}
      <FloatingElement
        src="/lovable-uploads/570f62fb-b986-46fc-a060-0601c464a73a.png"
        alt="Purple Tube"
        className="bottom-[20%] right-[12%] w-24 md:w-28 lg:w-32 -rotate-15"
        animationClass="animate-float-slow"
      />
      
      {/* Pink Spiral/Tube */}
      <FloatingElement
        src="/lovable-uploads/b1e00d8c-7fb7-4369-8fae-6623f63134b2.png"
        alt="Pink Spiral"
        className="top-[25%] left-[15%] w-20 md:w-24 lg:w-28 rotate-30"
        animationClass="animate-float"
      />
      
      {/* Blue/Purple Tube */}
      <FloatingElement
        src="/lovable-uploads/da960c08-aad2-472a-9c50-e271dd652860.png"
        alt="Purple Spiral"
        className="top-[35%] left-[25%] w-12 md:w-14 lg:w-16"
        animationClass="animate-float-slow"
      />
    </div>
  );
};

export default FloatingElements;