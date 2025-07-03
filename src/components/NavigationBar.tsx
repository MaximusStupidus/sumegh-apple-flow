import { useState, useEffect } from 'react';

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-card/90 backdrop-blur-md shadow-floating' : 'bg-card/70 backdrop-blur-sm'
    } rounded-2xl border border-border/20 px-8 py-4`}>
      <div className="flex items-center justify-between">
        <div className="font-apple font-bold text-xl text-primary">
          Sumegh
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="btn-ghost text-sm font-medium hover:text-primary transition-colors"
          >
            About Us
          </button>
          <button 
            onClick={() => scrollToSection('story')}
            className="btn-ghost text-sm font-medium hover:text-primary transition-colors"
          >
            Our Story
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="btn-ghost text-sm font-medium hover:text-primary transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-primary text-sm"
          >
            Contact
          </button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden btn-ghost">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;