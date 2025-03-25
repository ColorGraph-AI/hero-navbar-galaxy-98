
import React from "react";

const TrustedBy: React.FC = () => {
  return (
    <div className="mt-16 w-full">
      <p className="text-sm font-alexandria font-medium text-gray-600 mb-6">
        Trusted by creatives from
      </p>
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-12">
        <img
          src="/lovable-uploads/34a2a16f-918f-47b8-8ffb-beaea3da5bbd.png"
          alt="Rice University"
          className="h-10 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />
        <img
          src="/lovable-uploads/04796541-c124-4f97-8a43-b4ba3b0f07f8.png"
          alt="Tongji University"
          className="h-10 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />
        <img
          src="/lovable-uploads/6ee0a8b6-bfb4-4212-ab8c-e96419beaa75.png"
          alt="D&I"
          className="h-10 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />
        <img
          src="/lovable-uploads/2fb3c38b-0d23-449b-b2dd-1bac6e2aa52d.png"
          alt="Behance"
          className="h-10 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />
        <img
          src="/lovable-uploads/c9664f27-a53d-477a-b2d7-f054ca4882da.png"
          alt="Upwork"
          className="h-8 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />
        <img
          src="/lovable-uploads/7a25451e-1a61-4d1e-b251-3d4915a0db22.png"
          alt="Dribbble"
          className="h-8 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />
        <img
          src="/lovable-uploads/10c10a93-b132-497e-a992-95993b824f82.png"
          alt="Fiverr"
          className="h-8 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default TrustedBy;
