const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-light/20 to-background">

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-20">
        <h1 className="font-apple font-bold text-5xl md:text-7xl text-foreground mb-6 leading-tight">
          Your Trusted
          <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent"> Financial</span>
          <br />
          And Legal Advisory Partners
        </h1>
        
        
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

    </section>
  );
};

export default HeroSection;