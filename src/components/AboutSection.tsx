import { Users, Briefcase, MapPin, Shield, Eye, Target } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {/* About Us Header */}
            <div className="text-center">
              <h2 className="font-apple font-bold text-4xl md:text-5xl text-foreground mb-6">
                About Us
              </h2>
              <p className="font-apple text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                <strong>Empowering Business Success with 25+ Years of Financial Expertise</strong>
              </p>
              <p className="font-apple text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto mt-4">
                At Sumegh, we bring over two decades of trusted experience in accounting, taxation, and corporate advisory. 
              </p>
            </div>

            {/* Vision and Mission */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Vision */}
              <div className="card-hover p-8 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8" />
                </div>
                <h3 className="font-apple font-bold text-2xl text-foreground mb-4">Our Vision</h3>
                <p className="font-apple text-muted-foreground leading-relaxed">
                  To redefine how startups access legal and financial expertise — by offering thoughtful, end-to-end solutions that drive compliance, growth, and long-term value.
                </p>
              </div>

              {/* Mission */}
              <div className="card-hover p-8 bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20 rounded-xl">
                <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="font-apple font-bold text-2xl text-foreground mb-4">Our Mission</h3>
                <p className="font-apple text-muted-foreground leading-relaxed">
                  To empower businesses with clear, expert-driven legal and financial guidance—so they can focus on building, while we take care of the backend.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Expert Team */}
              <div className="card-hover p-8 bg-card border border-border/20 rounded-xl">
                <div className="w-16 h-16 bg-foreground text-background rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="font-apple font-bold text-2xl text-foreground mb-4">Expert Team – A Cross-Functional Financial Advisory Panel</h3>
                <ul className="font-apple text-muted-foreground space-y-2">
                  <li>• Chartered Accountants with deep regulatory insight</li>
                  <li>• Certified Company Secretaries ensuring legal integrity</li>
                  <li>• Corporate Legal Experts with cross-border exposure</li>
                  <li>• 25+ years of combined domain excellence</li>
                </ul>
                <p className="font-apple text-muted-foreground mt-4 text-sm italic">
                  Our professionals work at the intersection of finance, law, and strategy, ensuring compliance while enabling growth.
                </p>
              </div>

              {/* Comprehensive Services */}
              <div className="card-hover p-8 bg-card border border-border/20 rounded-xl">
                <div className="w-16 h-16 bg-foreground text-background rounded-xl flex items-center justify-center mb-6">
                  <Briefcase className="w-8 h-8" />
                </div>
                <h3 className="font-apple font-bold text-2xl text-foreground mb-4">Comprehensive Services – 360° Financial Solutions</h3>
                <ul className="font-apple text-muted-foreground space-y-2">
                  <li>• End-to-End Bookkeeping & Strategic Financial Planning</li>
                  <li>• Direct & Indirect Tax Advisory (GST, ITR, TDS)</li>
                  <li>• Internal Audit, Risk Management & Corporate Law Compliance</li>
                  <li>• Business Structuring, Loan Syndication & Project Financing</li>
                </ul>
                <p className="font-apple text-muted-foreground mt-4 text-sm italic">
                  We adapt global best practices to local business needs—seamlessly.
                </p>
              </div>

              {/* Based in Delhi */}
              <div className="card-hover p-8 bg-card border border-border/20 rounded-xl">
                <div className="w-16 h-16 bg-foreground text-background rounded-xl flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="font-apple font-bold text-2xl text-foreground mb-4">Based in Delhi, Serving the World</h3>
                <ul className="font-apple text-muted-foreground space-y-2">
                  <li>• Strategically located in New Delhi's business hub</li>
                  <li>• Serving 100+ clients across India and international markets</li>
                  <li>• Digitally enabled service delivery with secure document sharing</li>
                  <li>• Real-time reporting tools accessible anywhere, anytime</li>
                </ul>
              </div>

              {/* Our Promise */}
              <div className="card-hover p-8 bg-card border border-border/20 rounded-xl">
                <div className="w-16 h-16 bg-foreground text-background rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="font-apple font-bold text-2xl text-foreground mb-4">Our Promise – Compliance. Clarity. Confidence.</h3>
                <div className="bg-muted/50 border-l-4 border-foreground pl-6 py-4 mb-4 rounded-r-lg">
                  <blockquote className="font-apple text-lg text-foreground font-medium italic">
                    "You focus on building, let us ensure compliance"
                  </blockquote>
                </div>
                <p className="font-apple text-muted-foreground text-sm">
                  Trusted by a diverse portfolio of clients, we craft bespoke financial strategies aligned with your goals through a transparent, tech-enabled, client-first approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;