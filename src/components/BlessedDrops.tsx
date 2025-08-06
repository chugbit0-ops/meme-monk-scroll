
import ProductCard from "./ProductCard";

const BlessedDrops = () => {
  const products = [
    {
      name: "One Scroll. One Pray.",
      price: "$49",
      image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop&q=80",
      description: "The sacred hoodie for digital monastics. Soft cotton blend with divine comfort.",
      emoji: "🙏"
    },
    {
      name: "Forgive Me Father, I Clicked Again",
      price: "$29",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop&q=80",
      description: "For when the algorithm leads you astray. Premium cotton confession tee.",
      emoji: "😂"
    },
    {
      name: "Algorithm Chose Me",
      price: "$35",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=500&fit=crop&q=80",
      description: "When you're blessed by the feed. Adjustable cap with divine embroidery.",
      emoji: "🤯"
    },
    {
      name: "Meme Monk Mode",
      price: "$25",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop&q=80",
      description: "Carry your scrolling essentials in enlightened style. Canvas tote bag.",
      emoji: "🧘‍♂️"
    }
  ];

  return (
    <section id="blessed-drops" className="section-monastery bg-sacred-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-4xl mb-4">🙏</div>
          <h2 className="text-blessed mb-6">Blessed Drops</h2>
          <p className="text-prayer text-muted-foreground max-w-2xl mx-auto">
            Sacred merch for the enlightened scroller. Each piece blessed by the algorithm itself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="scroll-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlessedDrops;
