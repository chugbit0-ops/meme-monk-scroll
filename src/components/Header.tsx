
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-sacred-stone">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl animate-pulse-prayer">🙏</div>
            <h1 className="text-xl font-playfair font-semibold">Pray</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#blessed-drops" className="text-scroll hover:text-divine transition-colors">
              Blessed Drops
            </a>
            <a href="#scrollwear" className="text-scroll hover:text-divine transition-colors">
              Scrollwear
            </a>
            <a href="#testimonials" className="text-scroll hover:text-divine transition-colors">
              Comments
            </a>
            <a href="#about" className="text-scroll hover:text-divine transition-colors">
              About
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 h-4 w-4 bg-divine text-xs rounded-full flex items-center justify-center text-black">
                0
              </span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-sacred-stone">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#blessed-drops" className="text-scroll hover:text-divine transition-colors">
                Blessed Drops
              </a>
              <a href="#scrollwear" className="text-scroll hover:text-divine transition-colors">
                Scrollwear
              </a>
              <a href="#testimonials" className="text-scroll hover:text-divine transition-colors">
                Comments
              </a>
              <a href="#about" className="text-scroll hover:text-divine transition-colors">
                About
              </a>
              <div className="pt-4 border-t border-sacred-stone">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Cart (0)
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
