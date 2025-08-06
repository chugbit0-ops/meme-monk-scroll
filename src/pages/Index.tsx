
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BlessedDrops from "@/components/BlessedDrops";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all scroll-fade-up elements
    const scrollElements = document.querySelectorAll('.scroll-fade-up');
    scrollElements.forEach((el) => observer.observe(el));

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BlessedDrops />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
