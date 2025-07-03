import heroBg from '../assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/80 to-background/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="font-apple font-bold text-5xl md:text-7xl text-foreground mb-6 leading-tight">
          Your Trusted
          <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent"> Financial</span>
          <br />
          Advisory Partner
        </h1>
        
        <p className="font-apple text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          "You focus on the hardwork, we will ensure compliance"
        </p>
        
        <p className="font-apple text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Backed by over 25 years of experience in tax planning and auditing, we've evolved into a new age legal, compliance and auditing consultancy catering specifically to start-ups and tech companies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg px-8 py-4"
          >
            Explore Our Services
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary text-lg px-8 py-4"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;