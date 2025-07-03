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
              <p className="font-apple text-lg text-muted-foreground leading-relaxed mb-6">
                Founded with a vision to simplify financial complexities for businesses, Sumegh Consultancy has been a trusted partner for over 25 years. We are a full-service financial advisory firm dedicated to helping businesses navigate the intricate world of compliance, taxation, and financial management.
              </p>
              <p className="font-apple text-lg text-muted-foreground leading-relaxed mb-6">
                Our comprehensive suite of services includes bookkeeping, tax advisory, audit support, financial planning, project financing, and corporate law. We serve a diverse clientele ranging from emerging startups to established corporations, providing tailored solutions that align with each client's unique needs and goals.
              </p>
              <p className="font-apple text-lg text-muted-foreground leading-relaxed">
                With our motto "You focus on the hardwork, we will ensure compliance," we take the burden of regulatory requirements off your shoulders, allowing you to concentrate on growing your business. Our team of qualified Chartered Accountants, Company Secretaries, and legal experts brings deep industry knowledge and modern solutions to traditional financial challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-hover p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-apple font-semibold text-xl text-foreground mb-2">Expert Team</h3>
                <p className="font-apple text-muted-foreground">Qualified CAs, CS, and legal experts</p>
              </div>

              <div className="card-hover p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-apple font-semibold text-xl text-foreground mb-2">Modern Solutions</h3>
                <p className="font-apple text-muted-foreground">Combining traditional expertise with modern tools</p>
              </div>

              <div className="card-hover p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-apple font-semibold text-xl text-foreground mb-2">New Delhi Based</h3>
                <p className="font-apple text-muted-foreground">Serving clients across India</p>
              </div>

              <div className="card-hover p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-apple font-semibold text-xl text-foreground mb-2">Comprehensive Services</h3>
                <p className="font-apple text-muted-foreground">From startups to established corporations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;