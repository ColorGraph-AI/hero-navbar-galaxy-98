
import React from "react";
import { motion } from "framer-motion";

type FeatureCardProps = {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
  delay?: number;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  iconSrc,
  iconAlt,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative bg-white rounded-3xl p-8 shadow-sm border border-gray-50 overflow-hidden hover:shadow-md transition-shadow duration-300"
    >
      {/* Upscaled, blurred background icon */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <img
          src={iconSrc}
          alt=""
          className="w-64 h-64 opacity-20 blur-2xl"
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10">
        <motion.div
          className="mb-8 flex items-center justify-center"
          whileHover={{ scale: 1.05, rotate: 3 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={iconSrc}
            alt={iconAlt}
            className="w-20 h-20 object-contain"
          />
        </motion.div>
        <h3 className="text-xl font-alexandria font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 font-opensans text-sm">{description}</p>
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
      iconSrc: "/lovable-uploads/ccb37354-2189-458c-ae90-a21fc35f3b9c.png", // Updated clock icon
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
      iconSrc: "/lovable-uploads/9dcea2c4-bead-42c2-a9e7-634cbf46a4d6.png", // Updated palette icon
      iconAlt: "Palette icon",
    },
    {
      title: "Clarity in every feedback round",
      description:
        "No more guesswork—understand exactly what clients want with AI-structured feedback.",
      iconSrc: "/lovable-uploads/1bd3355a-d257-43c6-91d5-7384773630eb.png", // Target icon
      iconAlt: "Target icon",
    },
    {
      title: "Build stronger client relationships",
      description:
        "Clear communication leads to happy clients — and more repeat business.",
      iconSrc: "/lovable-uploads/cf19cdaf-2669-43f8-afd3-596f7cf6e058.png", // Emoji/smiley faces icon
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
            />
          ))}
        </div>

        {/* Second row: 2 cards, centered on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 lg:w-2/3 xl:w-1/2 mx-auto">
          {features.slice(3).map((feature, index) => (
            <FeatureCard
              key={index + 3}
              title={feature.title}
              description={feature.description}
              iconSrc={feature.iconSrc}
              iconAlt={feature.iconAlt}
              delay={(index + 3) * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyColorGraph;
