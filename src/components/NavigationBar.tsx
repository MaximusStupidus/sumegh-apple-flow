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
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <div className={`transition-all duration-300 ${
        isScrolled ? 'bg-card/60 backdrop-blur-sm shadow-card' : 'bg-card/90 backdrop-blur-md shadow-apple'
      } px-6 lg:px-8 py-4 rounded-2xl border border-border/20 flex items-center justify-between w-full`}>
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/573b3fb0-b3f3-4c16-92f7-d49dc424a501.png" 
            alt="Sumegh Consultancy Logo" 
            className="w-8 h-8"
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-1">
          <button 
            onClick={() => scrollToSection('about')}
            className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-all duration-200"
          >
            About Us
          </button>
          <button 
            onClick={() => scrollToSection('story')}
            className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-all duration-200"
          >
            Our Story
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-all duration-200"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('blog')}
            className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-all duration-200"
          >
            Blog
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="ml-4 btn-primary text-sm px-6 py-2"
          >
            Contact
          </button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 text-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-all duration-200">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;