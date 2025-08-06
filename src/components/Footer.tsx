
const Footer = () => {
  return (
    <footer className="section-monastery bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl">🙏</div>
              <h3 className="text-xl font-playfair font-semibold">Pray</h3>
            </div>
            <p className="text-background/70 mb-4 max-w-md">
              The digital monastery for enlightened scrollers. Where viral chaos meets inner peace.
            </p>
            <div className="text-sm text-background/50">
              One Scroll. One Pray. ™
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-inter font-semibold mb-4">Sacred Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Blessed Drops</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Scrollwear</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Shipping</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-inter font-semibold mb-4">Divine Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Returns</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">FAQ</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-background/50 mb-4 md:mb-0">
              © 2024 Pray. All rights reserved. Blessed by the algorithm.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                YouTube
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                Instagram
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                TikTok
              </a>
              <div className="text-background/50">|</div>
              <div className="text-background/50">Meme Monk Mode: ON</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
