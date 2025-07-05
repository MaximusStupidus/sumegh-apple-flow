const StorySection = () => {
  return (
    <section id="story" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Our Story */}
        <div className="text-center mb-20">
          <h2 className="font-apple font-bold text-4xl md:text-5xl text-foreground mb-8">
            Our Story
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="font-apple text-lg text-muted-foreground leading-relaxed">
              Founded over 25 years ago, Sumegh Consultancy has established itself as a trusted name in financial consulting services in India. We began with a simple mission: to help businesses navigate complex financial landscapes with clarity and confidence.
            </p>
            <p className="font-apple text-lg text-muted-foreground leading-relaxed">
              Over the years, we've expanded our services while maintaining our commitment to personalized attention and excellence. Today, we serve clients ranging from startups to established corporations, providing tailored solutions to meet their unique needs.
            </p>
            <p className="font-apple text-lg text-muted-foreground leading-relaxed">
              Our diverse team of experts brings together knowledge from various financial disciplines, allowing us to offer comprehensive solutions under one roof.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h3 className="font-apple font-bold text-3xl text-center text-foreground mb-12">
            Guiding Principles That Shape Our Approach
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-apple font-semibold text-xl text-foreground mb-2">Integrity</h4>
              <p className="font-apple text-muted-foreground">Building trust through transparency </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="font-apple font-semibold text-xl text-foreground mb-2">Expertise</h4>
              <p className="font-apple text-muted-foreground">Deep knowledge across financial disciplines</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-apple font-semibold text-xl text-foreground mb-2">Excellence</h4>
              <p className="font-apple text-muted-foreground">Committed to delivering exceptional results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;