import { Users, Briefcase, MapPin, Shield, Eye, Target } from 'lucide-react';
import { useState } from 'react';

const AboutSection = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };
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
              <div className="flip-card" onClick={() => toggleCard(0)}>
                <div className={`flip-card-inner ${flippedCards.includes(0) ? 'flipped' : ''}`}>
                  {/* Front Side */}
                  <div className="flip-card-front">
                    <div className="w-16 h-16 bg-foreground text-background rounded-xl flex items-center justify-center mb-4">
                      <Users className="w-8 h-8" />
                    </div>
                    <h3 className="font-apple font-bold text-lg text-foreground text-center px-4 leading-tight">
                      Expert Team – A Cross-Functional Financial Advisory Panel
                    </h3>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="text-xs text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                        Click to learn more
                      </div>
                    </div>
                  </div>
                  
                  {/* Back Side */}
                  <div className="flip-card-back">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-apple font-bold text-sm text-foreground">
                        Expert Team
                      </h3>
                      <button className="text-muted-foreground hover:text-foreground">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto scrollbar-visible">
                      <div className="font-apple text-xs text-muted-foreground leading-relaxed space-y-2 pr-2">
                        <ul className="space-y-1 text-left">
                          <li className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>Chartered Accountants with deep regulatory insight</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>Certified Company Secretaries ensuring legal integrity</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>Corporate Legal Experts with cross-border exposure</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>25+ years of combined domain excellence</span>
                          </li>
                        </ul>
                        <p className="text-left mt-3 italic">
                          Our professionals work at the intersection of finance, law, and strategy, ensuring compliance while enabling growth.
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-center mt-4">
                      <div className="text-xs text-primary font-medium">
                        Click anywhere to close
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comprehensive Services */}
              <div className="flip-card" onClick={() => toggleCard(1)}>
                <div className={`flip-card-inner ${flippedCards.includes(1) ? 'flipped' : ''}`}>
                  {/* Front Side */}
                  <div className="flip-card-front">
                    <div className="w-16 h-16 bg-foreground text-background rounded-xl flex items-center justify-center mb-4">
                      <Briefcase className="w-8 h-8" />
                    </div>
                    <h3 className="font-apple font-bold text-lg text-foreground text-center px-4 leading-tight">
                      Comprehensive Services – 360° Financial Solutions
                    </h3>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="text-xs text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                        Click to learn more
                      </div>
                    </div>
                  </div>
                  
                  {/* Back Side */}
                  <div className="flip-card-back">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-apple font-bold text-sm text-foreground">
                        Comprehensive Services
                      </h3>
                      <button className="text-muted-foreground hover:text-foreground">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto scrollbar-visible">
                      <div className="font-apple text-xs text-muted-foreground leading-relaxed space-y-2 pr-2">
                        <ul className="space-y-1 text-left">
                          <li className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>End-to-End Bookkeeping & Strategic Financial Planning</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>Direct & Indirect Tax Advisory (GST, ITR, TDS)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>Internal Audit, Risk Management & Corporate Law Compliance</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>Business Structuring, Loan Syndication & Project Financing</span>
                          </li>
                        </ul>
                        <p className="text-left mt-3 italic">
                          We adapt global best practices to local business needs—seamlessly.
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-center mt-4">
                      <div className="text-xs text-primary font-medium">
                        Click anywhere to close
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Based in Delhi */}
              <div className="flip-card" onClick={() => toggleCard(2)}>
                <div className={`flip-card-inner ${flippedCards.includes(2) ? 'flipped' : ''}`}>
                  {/* Front Side */}
                  <div className="flip-card-front">
                    <div className="w-16 h-16 bg-foreground text-background rounded-xl flex items-center justify-center mb-4">
                      <MapPin className="w-8 h-8" />
                    </div>
                    <h3 className="font-apple font-bold text-lg text-foreground text-center px-4 leading-tight">
                      Based in Delhi, Serving the World
                    </h3>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="text-xs text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                        Click to learn more
                      </div>
                    </div>
                  </div>
                  
                  {/* Back Side */}
                  <div className="flip-card-back">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-apple font-bold text-sm text-foreground">
                        Based in Delhi
                      </h3>
                      <button className="text-muted-foreground hover:text-foreground">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto scrollbar-visible">
                      <div className="font-apple text-xs text-muted-foreground leading-relaxed space-y-2 pr-2">
                        <ul className="space-y-1 text-left">
                          <li className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>Strategically located in New Delhi's business hub</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>Serving 100+ clients across India and international markets</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>Digitally enabled service delivery with secure document sharing</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>Real-time reporting tools accessible anywhere, anytime</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="text-center mt-4">
                      <div className="text-xs text-primary font-medium">
                        Click anywhere to close
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Promise */}
              <div className="flip-card" onClick={() => toggleCard(3)}>
                <div className={`flip-card-inner ${flippedCards.includes(3) ? 'flipped' : ''}`}>
                  {/* Front Side */}
                  <div className="flip-card-front">
                    <div className="w-16 h-16 bg-foreground text-background rounded-xl flex items-center justify-center mb-4">
                      <Shield className="w-8 h-8" />
                    </div>
                    <h3 className="font-apple font-bold text-lg text-foreground text-center px-4 leading-tight">
                      Our Promise – Compliance. Clarity. Confidence.
                    </h3>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="text-xs text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                        Click to learn more
                      </div>
                    </div>
                  </div>
                  
                  {/* Back Side */}
                  <div className="flip-card-back">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-apple font-bold text-sm text-foreground">
                        Our Promise
                      </h3>
                      <button className="text-muted-foreground hover:text-foreground">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto scrollbar-visible">
                      <div className="font-apple text-xs text-muted-foreground leading-relaxed space-y-2 pr-2">
                        <div className="bg-muted/50 border-l-4 border-foreground pl-4 py-3 mb-3 rounded-r-lg">
                          <blockquote className="font-apple text-xs text-foreground font-medium italic">
                            "You focus on building, let us ensure compliance"
                          </blockquote>
                        </div>
                        <p className="text-left">
                          Trusted by a diverse portfolio of clients, we craft bespoke financial strategies aligned with your goals through a transparent, tech-enabled, client-first approach.
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-center mt-4">
                      <div className="text-xs text-primary font-medium">
                        Click anywhere to close
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;