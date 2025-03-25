
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import { ScrollArea } from "./ui/scroll-area";

type TestimonialCardProps = {
  stars: number;
  quote: string;
  name: string;
  position: string;
  highlighted?: string[];
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  stars,
  quote,
  name,
  position,
  highlighted = [],
}) => {
  // Function to highlight specified words in the quote
  const renderQuoteWithHighlights = () => {
    let parts = [quote];
    highlighted.forEach((word) => {
      parts = parts.flatMap((part) => {
        if (typeof part === 'string') {
          const splitText = part.split(new RegExp(`(${word})`, 'gi'));
          return splitText.map((text, i) => {
            if (text.toLowerCase() === word.toLowerCase()) {
              return <span key={i} className="font-bold text-brand-purple">{text}</span>;
            }
            return text;
          });
        }
        return part;
      });
    });
    return parts;
  };

  return (
    <Card className="bg-[#FDF6FF] border-none shadow-sm h-full">
      <CardContent className="p-6 flex flex-col h-full">
        {/* Stars */}
        <div className="flex mb-4">
          {Array.from({ length: stars }).map((_, i) => (
            <img
              key={i}
              src="/lovable-uploads/9d8f7fef-6618-4d3f-a7fa-cdcee0906d8b.png"
              alt="Star"
              className="w-6 h-6 mr-1"
            />
          ))}
        </div>

        {/* Quote */}
        <div className="text-gray-700 text-lg mb-6 flex-grow">
          {renderQuoteWithHighlights()}
        </div>

        {/* Author info */}
        <div className="mt-auto">
          <p className="font-alexandria font-bold text-lg">{name}</p>
          <p className="text-gray-500">{position}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: false,
    containScroll: "trimSnaps",
    slidesToScroll: 1,
  });

  const testimonials = [
    {
      stars: 5,
      quote: '"I\'ve saved hours every week thanks to ColorGraph.AI. No more endless email threads with unclear feedback!"',
      name: "David L.",
      position: "UX/UI Designer",
      highlighted: ["saved hours", "ColorGraph.AI", "email threads", "unclear feedback"],
    },
    {
      stars: 5,
      quote: '"ColorGraph.AI cut my revision time in half! Now I can focus on creativity while ensuring my clients are always happy."',
      name: "Alex M.",
      position: "Freelance Designer",
      highlighted: ["ColorGraph.AI", "revision time in half", "creativity", "clients are always happy"],
    },
    {
      stars: 5,
      quote: '"Finally, a tool that understands the struggle of client feedback. ColorGraph.AI makes revisions painless."',
      name: "Jasmine R.",
      position: "Creative Director at Studio XYZ",
      highlighted: ["tool", "understands", "struggle of client feedback", "ColorGraph.AI", "revisions painless"],
    },
    {
      stars: 5,
      quote: '"The AI actually understands design language! It translates vague feedback into actionable tasks."',
      name: "Thomas W.",
      position: "Brand Designer",
      highlighted: ["AI", "understands design language", "translates", "vague feedback", "actionable tasks"],
    },
    {
      stars: 5,
      quote: '"Since using ColorGraph.AI, my client satisfaction has increased by 40%. The clarity it brings is invaluable."',
      name: "Sarah K.",
      position: "Art Director",
      highlighted: ["ColorGraph.AI", "client satisfaction", "increased by 40%", "clarity"],
    },
  ];

  // Add mask effect to create the fading effect on the sides
  useEffect(() => {
    if (emblaRef && emblaRef.current) {
      emblaRef.current.style.mask = "linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)";
      emblaRef.current.style.webkitMask = "linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)";
    }
  }, [emblaRef]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-alexandria font-bold mb-8">
            Why Designers Love Us?
          </h2>
        </motion.div>

        <div className="relative mx-auto">
          <Carousel className="w-full">
            <div className="relative overflow-hidden" ref={emblaRef}>
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3 pl-4">
                    <TestimonialCard
                      stars={testimonial.stars}
                      quote={testimonial.quote}
                      name={testimonial.name}
                      position={testimonial.position}
                      highlighted={testimonial.highlighted}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
            
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative -left-0 mx-2" />
              <CarouselNext className="relative -right-0 mx-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
