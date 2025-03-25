
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQSection: React.FC = () => {
  const faqItems: FAQItem[] = [
    {
      question: "Will ColorGraph.AI take over my design process?",
      answer: "No. You stay in control. Our AI provides feedback insights, but all creative decisions are yours.",
    },
    {
      question: "Does it work with my design tool?",
      answer: "Yes! ColorGraph.AI works with any tool in your browser through a simple extension—just upload your design image, and you're set.",
    },
    {
      question: "How many revisions can I handle per project?",
      answer: "As many as you need! Set the number of revisions with your client, and ColorGraph.AI supports each round seamlessly.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-alexandria font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-['Open_Sans']">
            Get answers to common questions about ColorGraph.AI
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={cn(
                  "mb-4 overflow-hidden rounded-xl border border-purple-100",
                  "bg-white/50 backdrop-blur-sm transition-all",
                  "hover:border-purple-200 hover:shadow-md"
                )}
              >
                <AccordionTrigger className="px-6 py-4 text-left font-alexandria text-lg font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 font-['Open_Sans']">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
