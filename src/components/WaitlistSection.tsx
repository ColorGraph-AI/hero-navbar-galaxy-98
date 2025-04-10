
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WaitlistSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden relative"
          style={{
            backgroundImage: `url('/lovable-uploads/04a55d10-ac7e-419b-9f56-de27dbbad974.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="px-8 py-16 md:px-16 md:py-20 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-alexandria font-bold mb-6 text-black">
              Ready to Design with<br />Clarity and Confidence?
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-gray-800 font-['Open_Sans']">
              <span className="font-semibold block mb-1">Stop juggling endless feedback loops.</span>
              ColorGraph.AI helps you save hours, reduce revisions, and keep your creative vision intact.
            </p>
            <Button 
              className="bg-brand-purple hover:bg-brand-purple/90 text-white font-semibold px-8 py-6 h-auto text-lg rounded-full cta-button"
              onClick={() => window.open('#', '_blank')}
            >
              Join our waitlist !
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistSection;
