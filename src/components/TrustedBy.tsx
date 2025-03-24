
import React from "react";

const TrustedBy: React.FC = () => {
  const logos = [
    {
      src: "/lovable-uploads/d9d235a3-da2d-410a-8a37-d9332ff7933c.png",
      alt: "Rice University Logo",
      className: "h-10 md:h-11 lg:h-12"
    },
    {
      src: "/lovable-uploads/e3954f8e-db2e-4929-b6ee-ade1c09f5c42.png",
      alt: "Tongji University Logo",
      className: "h-10 md:h-12 lg:h-14"
    },
    {
      src: "/lovable-uploads/d94df254-ef9f-4bd5-ba88-8d6472d21d66.png",
      alt: "DXI Logo",
      className: "h-8 md:h-9 lg:h-10"
    },
    {
      src: "/lovable-uploads/f7eaead9-8be7-44d1-8330-113850ea2d48.png",
      alt: "Behance Logo",
      className: "h-8 md:h-10 lg:h-12"
    },
    {
      src: "/lovable-uploads/6f738574-6aeb-4203-96a4-776a04bc5b0b.png",
      alt: "Upwork Logo",
      className: "h-8 md:h-9 lg:h-10"
    },
    {
      src: "/lovable-uploads/07fb948c-280c-4650-9c42-c5a76df09c8b.png",
      alt: "Dribbble Logo",
      className: "h-6 md:h-7 lg:h-8"
    },
    {
      src: "/lovable-uploads/6de1d5d0-ff14-4544-a487-745c7411511f.png",
      alt: "Fiverr Logo",
      className: "h-6 md:h-7 lg:h-8"
    }
  ];

  return (
    <div className="mt-16 animate-fade-in" style={{
      animationDelay: '0.9s'
    }}>
      <h3 className="text-center text-xl md:text-2xl font-medium text-gray-800 mb-8">
        Trusted by creatives from
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-5 md:gap-8 lg:gap-10 px-4">
        {logos.map((logo, index) => (
          <div key={index} className="opacity-80 hover:opacity-100 transition-opacity duration-300">
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className={logo.className}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;
