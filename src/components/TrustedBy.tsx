
import React from "react";

const TrustedBy: React.FC = () => {
  const logos = [
    {
      src: "/lovable-uploads/3c2e8ef3-919b-42eb-b500-8cf4196a48e6.png",
      alt: "UPenn Logo",
      className: "h-10 md:h-12 lg:h-14"
    }, 
    {
      src: "/lovable-uploads/87fc2d33-5ffe-458e-8e77-01f574956623.png",
      alt: "Tongji University Logo",
      className: "h-10 md:h-12 lg:h-14"
    }, 
    {
      src: "/lovable-uploads/cb89bafc-c177-43e9-968d-608a071269b6.png",
      alt: "DXI Logo",
      className: "h-8 md:h-10 lg:h-12"
    }, 
    {
      src: "/lovable-uploads/9433e797-9462-4d67-b104-45fb93b7fb78.png",
      alt: "Behance Logo",
      className: "h-10 md:h-12 lg:h-14"
    }, 
    {
      src: "/lovable-uploads/13296c8c-67c5-4ea9-9eab-0f7da8f7a51a.png",
      alt: "Upwork Logo",
      className: "h-8 md:h-10 lg:h-12"
    }, 
    {
      src: "/lovable-uploads/b2694846-9249-4db8-92cf-6fcc00c739c3.png",
      alt: "Dribbble Logo",
      className: "h-8 md:h-10 lg:h-12"
    }, 
    {
      src: "/lovable-uploads/69d30257-f0db-4d91-8161-9e6cbbf56132.png",
      alt: "Fiverr Logo",
      className: "h-8 md:h-9 lg:h-10"
    }
  ];

  return (
    <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.9s' }}>
      <h3 className="text-center text-xl md:text-2xl font-medium text-gray-800 mb-8">
        Trusted by creatives from
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
        {logos.map((logo, index) => (
          <div key={index} className="opacity-80 hover:opacity-100 transition-opacity duration-300">
            <img src={logo.src} alt={logo.alt} className={logo.className} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;
