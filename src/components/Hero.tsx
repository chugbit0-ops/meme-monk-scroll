
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-divine relative overflow-hidden">
      {/* Floating prayer hands */}
      <div className="absolute top-20 left-10 text-4xl opacity-20 float-divine">🙏</div>
      <div className="absolute top-40 right-20 text-3xl opacity-15 float-divine" style={{ animationDelay: '2s' }}>🙏</div>
      <div className="absolute bottom-20 left-20 text-2xl opacity-10 float-divine" style={{ animationDelay: '4s' }}>🙏</div>
      
      <div className="text-center z-10 animate-divine-entrance">
        <div className="mb-8">
          <div className="text-8xl mb-4 pulse-prayer">🙏</div>
          <h1 className="text-divine prayer-glow mb-6">
            One Scroll.<br />One Pray.
          </h1>
          <p className="text-prayer text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Welcome to the digital monastery for the enlightened scroller. 
            Where memes meet mindfulness and chaos finds its calm.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-foreground text-background font-inter font-medium rounded-lg hover:shadow-prayer transition-all duration-300 hover:scale-105">
            Enter the Monastery
          </button>
          <button className="px-8 py-4 border-2 border-foreground text-foreground font-inter font-medium rounded-lg hover:bg-foreground hover:text-background transition-all duration-300">
            Forgive My Cart
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <div className="text-2xl opacity-50">⬇</div>
          <p className="text-sm text-muted-foreground mt-2">Scroll for enlightenment</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
