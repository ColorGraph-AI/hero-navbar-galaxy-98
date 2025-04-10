
import React from "react";
import { motion } from "framer-motion";

type FeatureCardProps = {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
  delay?: number;
  index: number;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  iconSrc,
  iconAlt,
  delay = 0,
  index,
}) => {
  // Determine if icon should be on left side based on index
  const isIconOnLeft = index >= 3;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.2 }
      }}
      className="relative bg-white rounded-3xl p-8 shadow-sm border border-gray-50 overflow-hidden transition-all duration-300 hover:border-purple-200 group"
    >
      {/* Gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Background blur effect for icon */}
      <div className="absolute inset-0 overflow-hidden">
        {isIconOnLeft ? (
          // Left-positioned background for cards 3 and 4
          <div className="absolute right-0 top-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
            <img
              src={iconSrc}
              alt=""
              className="w-96 h-96 blur-3xl transform translate-x-1/4 -translate-y-1/4"
            />
          </div>
        ) : (
          // Right-positioned background for cards 0, 1, and 2
          <div className="absolute right-0 top-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
            <img
              src={iconSrc}
              alt=""
              className="w-96 h-96 blur-3xl transform translate-x-1/4 -translate-y-1/4"
            />
          </div>
        )}
      </div>

      {/* Card content */}
      <div className="relative z-10 flex flex-col h-full">
        {isIconOnLeft ? (
          // Left-aligned layout (text on right) for cards 3 and 4
          <>
            <h3 className="text-2xl font-alexandria font-bold mb-3 relative">
              {title}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-1/3 transition-all duration-300"></span>
            </h3>
            <p className="text-gray-600 font-opensans mb-4 group-hover:text-gray-800 transition-colors duration-300">{description}</p>
            <div className="mt-auto group-hover:scale-110 transition-transform duration-300 transform origin-bottom-left">
              <img src={iconSrc} alt={iconAlt} className="w-24 h-24 object-contain" />
            </div>
          </>
        ) : (
          // Right-aligned layout (text on left) for cards 0, 1, and 2
          <>
            <div className="mb-8 group-hover:scale-110 transition-transform duration-300 transform origin-top-left">
              <img src={iconSrc} alt={iconAlt} className="w-24 h-24 object-contain" />
            </div>
            <h3 className="text-2xl font-alexandria font-bold mb-3 relative">
              {title}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-1/3 transition-all duration-300"></span>
            </h3>
            <p className="text-gray-600 font-opensans group-hover:text-gray-800 transition-colors duration-300">{description}</p>
          </>
        )}
      </div>
    </motion.div>
  );
};

const WhyColorGraph: React.FC = () => {
  const features = [
    {
      title: "Save time for design",
      description:
        "Spend more time on creative work, not on managing feedback or endless revisions.",
      iconSrc: "/lovable-uploads/ccb37354-2189-458c-ae90-a21fc35f3b9c.png", // Clock icon
      iconAlt: "Clock icon",
    },
    {
      title: "Deliver projects faster",
      description:
        "Cut revision cycles in half, meet deadlines effortlessly, and impress your clients.",
      iconSrc: "/lovable-uploads/e7e0438a-8b02-4daa-bd72-a3f5ad7a8c7e.png", // Rocket icon
      iconAlt: "Rocket icon",
    },
    {
      title: "Keep creative control",
      description:
        "AI enhances your workflow but never overrides your design choices.",
      iconSrc: "/lovable-uploads/9dcea2c4-bead-42c2-a9e7-634cbf46a4d6.png", // Palette icon
      iconAlt: "Palette icon",
    },
    {
      title: "Clarity in every feedback round",
      description:
        "No more guesswork—understand exactly what clients want with AI-structured feedback.",
      iconSrc: "/lovable-uploads/a5bddd49-90a5-42cb-b0c5-56f97a216d9a.png", // Target icon
      iconAlt: "Target icon",
    },
    {
      title: "Build stronger client relationships",
      description:
        "Clear communication leads to happy clients — and more repeat business.",
      iconSrc: "/lovable-uploads/8da69680-d578-44b6-a18b-6e5a1ca290ae.png", // Emoji/smiley faces icon
      iconAlt: "Emoji icons",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#FBFAFF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-alexandria font-bold mb-8">
            Why ColorGraph.AI?
          </h2>
          
          {/* Decorative elements */}
          <div className="fancy-separator mx-auto mb-10"></div>
        </motion.div>

        {/* First row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.slice(0, 3).map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              iconSrc={feature.iconSrc}
              iconAlt={feature.iconAlt}
              delay={index * 0.1}
              index={index}
            />
          ))}
        </div>

        {/* Second row: 2 cards, centered on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 lg:w-2/3 mx-auto">
          {features.slice(3).map((feature, index) => (
            <FeatureCard
              key={index + 3}
              title={feature.title}
              description={feature.description}
              iconSrc={feature.iconSrc}
              iconAlt={feature.iconAlt}
              delay={(index + 3) * 0.1}
              index={index + 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyColorGraph;
