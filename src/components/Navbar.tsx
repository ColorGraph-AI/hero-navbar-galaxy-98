
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavbarProps {
  transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  transparent = false
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Features", url: "#features" },
    { title: "Solution", url: "#solution" },
    { title: "Benefits", url: "#benefits" },
    { title: "Workflow", url: "#workflow" },
    { title: "Success Stories", url: "#success-stories" },
    { title: "FAQs", url: "#faqs" }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || !transparent ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 min-w-[100px] mr-4 md:mr-8">
            <a href="/" className="flex items-center">
              <img
                alt="ColorGraph.AI Logo"
                src="/lovable-uploads/0c7e8b65-6ec0-4186-a7dd-31d63520f707.png"
                className="h-8 sm:h-10 animate-fade-in object-contain w-auto"
              />
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center flex-grow justify-center">
            <div className="flex items-center space-x-8 xl:space-x-14">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className={`nav-link text-black font-medium hover:text-brand-purple transition-colors duration-200 whitespace-nowrap ${
                    index % 2 === 0 ? 'animate-fade-in' : 'animate-fade-in'
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </nav>

          {/* CTA Button */}
          <div 
            className="hidden sm:block animate-fade-in ml-auto mr-4" 
            style={{
              animationDelay: '0.6s'
            }}
          >
            <Button className="cta-button bg-brand-purple hover:bg-brand-purple/90 text-white font-medium px-6 py-2 rounded-full">
              Join our waitlist !
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-brand-purple hover:bg-gray-100 transition duration-150"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-white shadow-lg">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-brand-purple hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.title}
            </a>
          ))}
          <div className="pt-2 sm:hidden">
            <Button className="w-full cta-button bg-brand-purple hover:bg-brand-purple/90 text-white font-medium px-6 py-2 rounded-full">
              Join our waitlist !
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
