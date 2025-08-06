
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  description: string;
  emoji: string;
}

const ProductCard = ({ name, price, image, description, emoji }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);

  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:shadow-prayer hover:-translate-y-2"
      onMouseEnter={() => {
        setIsHovered(true);
        setTimeout(() => setShowEmoji(true), 100);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowEmoji(false);
      }}
    >
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={name}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Emoji overlay on hover */}
          <div className={`absolute inset-0 bg-background/90 flex items-center justify-center transition-opacity duration-300 ${showEmoji ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-6xl animate-pulse-prayer">{emoji}</span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-blessed mb-2">{name}</h3>
          <p className="text-scroll text-muted-foreground mb-4 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-prayer font-semibold">{price}</span>
            <button 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isHovered 
                  ? 'bg-divine text-black shadow-blessed' 
                  : 'bg-sacred-cream text-foreground hover:bg-holy-hover'
              }`}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
