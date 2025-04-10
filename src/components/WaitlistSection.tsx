
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WaitlistSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden"
        >
          <Card className="border-0 shadow-xl w-full" style={{
            background: "linear-gradient(to right, #fff1ff 0%, #ffcef5 100%)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
            <div className="px-8 py-16 md:px-16 md:py-20 flex flex-col items-center text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-alexandria font-bold mb-6 text-black">
                Ready to Design with<br />Clarity and Confidence?
              </h2>
              <p className="max-w-2xl mx-auto mb-10 text-gray-800 font-['Open_Sans']">
                Stop juggling endless feedback loops.<br />
                ColorGraph.AI helps you save hours, reduce revisions, and keep your creative vision intact.
              </p>
              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 h-auto text-base rounded-full cta-button"
                onClick={() => window.open('#', '_blank')}
              >
                Join our waitlist !
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistSection;
