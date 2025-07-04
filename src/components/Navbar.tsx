
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useWaitlist } from "@/contexts/WaitlistContext";

interface NavbarProps {
  transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  transparent = false
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { openWaitlistModal } = useWaitlist();

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
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img
                alt="ColorGraph.AI Logo"
                src="/lovable-uploads/0c7e8b65-6ec0-4186-a7dd-31d63520f707.png"
                className="h-6 sm:h-7 md:h-8 lg:h-10 animate-fade-in object-contain w-auto"
              />
            </a>
          </div>

          {/* Desktop Nav Links - Only shown when not in mobile view */}
          {!isMobile && (
            <nav className="flex items-center flex-1 justify-center px-4">
              <div className="flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className={`nav-link font-opensans font-semibold text-black hover:text-brand-purple transition-colors duration-200 whitespace-nowrap text-sm lg:text-base ${
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
          )}

          {/* Right side container for CTA and mobile menu */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* CTA Button - Always visible */}
            <div 
              className="animate-fade-in flex-shrink-0" 
              style={{
                animationDelay: '0.6s'
              }}
            >
              <Button 
                className="cta-button font-alexandria font-semibold bg-brand-purple hover:bg-brand-purple/90 text-white px-2 sm:px-4 lg:px-6 py-2 rounded-full text-xs sm:text-sm lg:text-base"
                onClick={openWaitlistModal}
              >
                Join waitlist!
              </Button>
            </div>

            {/* Mobile Menu Button - Only visible in mobile view */}
            {isMobile && (
              <div className="flex-shrink-0 ml-1">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-brand-purple hover:bg-gray-100 transition duration-150"
                  aria-label="Toggle mobile menu"
                >
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu - Only visible when menu is open AND in mobile view */}
      {isMobile && mobileMenuOpen && (
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-white shadow-lg border-t">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="block px-3 py-3 rounded-md text-base font-opensans font-semibold text-black hover:text-brand-purple hover:bg-gray-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.title}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
