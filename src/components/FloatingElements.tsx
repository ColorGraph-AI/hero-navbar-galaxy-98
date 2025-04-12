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
      {/* Pink Donut Top Right */}
      <FloatingElement
        src="/lovable-uploads/00310d1f-5e85-405a-9e0d-cdaccd3706e5.png"
        alt="Pink Donut"
        className="top-[8%] right-[15%] w-28 md:w-32 lg:w-36"
        animationClass="animate-float-slow"
      />
      
      {/* Pink Donut Middle-Left */}
      <FloatingElement
        src="/lovable-uploads/d80387b7-a1dd-4ced-8cdf-b500ccec64a0.png"
        alt="Pink Donut"
        className="top-[35%] left-[10%] w-24 md:w-28 lg:w-32"
        animationClass="animate-float"
      />
      
      {/* Blue Tube at Left */}
      <FloatingElement
        src="/lovable-uploads/570f62fb-b986-46fc-a060-0601c464a73a.png"
        alt="Blue Tube"
        className="top-[15%] left-[5%] w-28 md:w-36 lg:w-44 -rotate-[15deg]"
        animationClass="animate-float-slow"
        style={{ filter: "hue-rotate(240deg)" }} // Blue tint
      />
      
      {/* Purple Sphere at Bottom Right */}
      <FloatingElement
        src="/lovable-uploads/6d0959d7-3bfa-4014-8a54-af9ee95f1b7c.png"
        alt="Purple Sphere"
        className="bottom-[15%] right-[10%] w-32 md:w-36 lg:w-40"
        animationClass="animate-float-slow"
        style={{ filter: "hue-rotate(70deg)" }} // More purple tint
      />
      
      {/* Purple Star Bottom Right */}
      <FloatingElement
        src="/lovable-uploads/44064c5f-0a3e-4d66-b4cc-46967f7c606e.png"
        alt="Purple Star"
        className="bottom-[15%] right-[30%] w-16 md:w-20 lg:w-24"
        animationClass="animate-float-fast"
      />
      
      {/* Pink Sphere at Bottom Left */}
      <FloatingElement
        src="/lovable-uploads/6d0959d7-3bfa-4014-8a54-af9ee95f1b7c.png"
        alt="Pink Sphere"
        className="bottom-[12%] left-[17%] w-28 md:w-32 lg:w-36"
        animationClass="animate-float"
      />
      
      {/* Pink Tube Bottom Right Edge */}
      <FloatingElement
        src="/lovable-uploads/da960c08-aad2-472a-9c50-e271dd652860.png"
        alt="Pink Tube"
        className="bottom-[30%] right-[5%] w-20 md:w-24 lg:w-32 rotate-45"
        animationClass="animate-float-slow"
      />
    </div>
  );
};

export default FloatingElements;