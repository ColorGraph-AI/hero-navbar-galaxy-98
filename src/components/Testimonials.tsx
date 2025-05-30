
import React from "react";
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

type TestimonialCardProps = {
  stars: number;
  quote: string;
  name: string;
  position: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  stars,
  quote,
  name,
  position,
}) => {
  return (
    <Card className="rounded-3xl border-none shadow-sm h-full relative overflow-hidden" style={{ 
      background: "linear-gradient(90deg, rgba(255,231,252,1) 0%, rgba(248,228,255,1) 100%)" 
    }}>
      {/* Background gradient image with 40% opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 z-0" 
        style={{ 
          backgroundImage: `url(/lovable-uploads/39ef4e61-617b-4ff5-9524-823178b598a9.png)` 
        }}
      ></div>
      
      <CardContent className="p-6 flex flex-col h-full relative z-10">
        {/* Stars - using the single image */}
        <div className="flex justify-center mb-4">
          <img
            src="/lovable-uploads/db58c15a-b08e-4a8c-b575-45e3db2f17e1.png"
            alt="Five Stars Rating"
            className="h-8"
          />
        </div>

        {/* Quote */}
        <div className="text-gray-800 text-lg mb-6 flex-grow text-center font-['Open_Sans'] font-semibold">
          {quote}
        </div>

        {/* Author info */}
        <div className="mt-auto text-center font-['Open_Sans']">
          <p className="font-alexandria font-bold text-lg">{name}</p>
          <p className="text-gray-600">{position}</p>
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
      quote: '"ColorGraph.AI cut my revision time in half! Now I can focus on creativity while ensuring my clients are always happy."',
      name: "Alex M.",
      position: "Freelance Designer",
    },
    {
      stars: 5,
      quote: '"I\'ve saved hours every week thanks to ColorGraph.AI. No more endless email threads with unclear feedback!"',
      name: "David L.",
      position: "UX/UI Designer",
    },
    {
      stars: 5,
      quote: '"Finally, a tool that understands the struggle of client feedback. ColorGraph.AI makes revisions painless."',
      name: "Jasmine R.",
      position: "Creative Director at Studio XYZ",
    },
    {
      stars: 5,
      quote: '"The AI actually understands design language! It translates vague feedback into actionable tasks."',
      name: "Thomas W.",
      position: "Brand Designer",
    },
    {
      stars: 5,
      quote: '"Since using ColorGraph.AI, my client satisfaction has increased by 40%. The clarity it brings is invaluable."',
      name: "Sarah K.",
      position: "Art Director",
    },
  ];

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

        <div className="relative mx-auto overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-[15%] z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-[15%] z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          
          <Carousel className="w-full">
            <div ref={emblaRef} className="overflow-hidden">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3 pl-4">
                    <TestimonialCard
                      stars={testimonial.stars}
                      quote={testimonial.quote}
                      name={testimonial.name}
                      position={testimonial.position}
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
