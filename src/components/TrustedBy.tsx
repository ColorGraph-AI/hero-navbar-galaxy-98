
import React from "react";

const TrustedBy: React.FC = () => {
  return (
    <div className="mt-16 w-full">
      <p className="text-sm font-alexandria font-medium text-gray-600 mb-6">
        Trusted by creatives from
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        <img
          src="/lovable-uploads/69d30257-f0db-4d91-8161-9e6cbbf56132.png"
          alt="Adobe"
          className="h-10 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />
        <img
          src="/lovable-uploads/13296c8c-67c5-4ea9-9eab-0f7da8f7a51a.png"
          alt="Figma"
          className="h-8 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />
        <img
          src="/lovable-uploads/04a38fa4-69bc-4c29-a3b0-a2f8c9bf5ecf.png"
          alt="Google"
          className="h-8 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />
        <img
          src="/lovable-uploads/d80387b7-a1dd-4ced-8cdf-b500ccec64a0.png"
          alt="Dribbble"
          className="h-7 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />
        <img
          src="/lovable-uploads/6d0959d7-3bfa-4014-8a54-af9ee95f1b7c.png"
          alt="Notion"
          className="h-7 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default TrustedBy;
