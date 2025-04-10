
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Resources",
      links: [
        { name: "Support & FAQ", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Blog", href: "#" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
        { name: "Cookie Policy", href: "#" },
      ]
    }
  ];

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="bg-brand-purple text-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and tagline */}
          <div className="col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/lovable-uploads/0c7e8b65-6ec0-4186-a7dd-31d63520f707.png"
                alt="ColorGraph.AI Logo"
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/80 text-sm mt-4 max-w-xs">
              Enhancing design feedback with AI-powered color analysis and insights.
            </p>
          </div>

          {/* Footer links */}
          {footerLinks.map((section, i) => (
            <div key={i} className="col-span-1">
              <h3 className="font-alexandria font-semibold mb-4 text-lg">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a 
                      href={link.href} 
                      className="text-white/80 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section with copyright and social */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-sm mb-4 md:mb-0"
          >
            © {currentYear} ColorGraph.AI. All rights reserved
          </motion.p>
          
          <div className="flex space-x-6">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                aria-label={social.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="text-white/80 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
