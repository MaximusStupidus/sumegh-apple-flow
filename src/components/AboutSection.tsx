const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-apple font-bold text-4xl md:text-5xl text-foreground mb-6">
                About Us
              </h2>
              <p className="font-apple text-xl text-muted-foreground leading-relaxed">
                25+ years of trusted financial expertise serving businesses across India
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-hover p-8 bg-card border border-border/20 rounded-xl">
                <div className="w-16 h-16 bg-foreground text-background rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-apple font-bold text-2xl text-foreground mb-4">Expert Team</h3>
                <ul className="font-apple text-muted-foreground space-y-2">
                  <li>• Qualified Chartered Accountants</li>
                  <li>• Certified Company Secretaries</li>
                  <li>• Experienced Legal Experts</li>
                  <li>• 25+ years combined experience</li>
                </ul>
              </div>

              <div className="card-hover p-8 bg-card border border-border/20 rounded-xl">
                <div className="w-16 h-16 bg-foreground text-background rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-apple font-bold text-2xl text-foreground mb-4">Comprehensive Services</h3>
                <ul className="font-apple text-muted-foreground space-y-2">
                  <li>• Bookkeeping & Financial Planning</li>
                  <li>• Tax Advisory & Compliance</li>
                  <li>• Audit Support & Corporate Law</li>
                  <li>• Project Financing Solutions</li>
                </ul>
              </div>

              <div className="card-hover p-8 bg-card border border-border/20 rounded-xl">
                <div className="w-16 h-16 bg-foreground text-background rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-apple font-bold text-2xl text-foreground mb-4">Delhi Based</h3>
                <ul className="font-apple text-muted-foreground space-y-2">
                  <li>• Located in New Delhi</li>
                  <li>• Serving clients across India</li>
                  <li>• Modern office facilities</li>
                  <li>• Easy accessibility</li>
                </ul>
              </div>

              <div className="card-hover p-8 bg-card border border-border/20 rounded-xl">
                <div className="w-16 h-16 bg-foreground text-background rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-apple font-bold text-2xl text-foreground mb-4">Our Promise</h3>
                <ul className="font-apple text-muted-foreground space-y-2">
                  <li>• "You focus on the hardwork,</li>
                  <li>&nbsp;&nbsp;we ensure compliance"</li>
                  <li>• Trusted by 100+ businesses</li>
                  <li>• Tailored solutions for every client</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;