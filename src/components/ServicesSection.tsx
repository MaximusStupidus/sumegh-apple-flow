import { useState } from 'react';

const ServicesSection = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };
  const coreServices = [
    {
      title: "Accounting & Bookkeeping",
      description: "Comprehensive bookkeeping services to maintain accurate financial records for your business. We provide both direct and indirect assistance based on your needs.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      benefits: [
        "Accurate financial records",
        "Timely reporting",
        "Reduced administrative burden",
        "Better financial visibility",
        "Compliance with accounting standards"
      ]
    },
    {
      title: "Tax Planning & Filing",
      description: "Expert tax planning and compliance services for individuals and businesses, including GST, ITR, and TDS. We provide both direct and indirect tax compliance services.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      benefits: [
        "Tax optimization",
        "Compliance with tax laws",
        "Reduced tax audit risks",
        "Expert handling of tax notices",
        "Peace of mind during filing season"
      ]
    },
    {
      title: "Audit Support",
      description: "Professional assistance for Bank of India, Punjab National Bank, Punjab and Sindh Bank audits. We also offer internal audit and risk advisory services.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      benefits: [
        "Reduced audit stress",
        "Enhanced internal controls",
        "Better risk management",
        "Improved financial processes",
        "Regulatory compliance"
      ]
    },
    {
      title: "Financial Planning",
      description: "Strategic financial planning services including indirect and direct taxation, project financing, corporate law consultancy, and NBFC services.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      benefits: [
        "Strategic financial direction",
        "Access to expert advisors",
        "Cost-effective financial leadership",
        "Business growth support",
        "Regulatory compliance"
      ]
    }
  ];

  const additionalServices = [
    {
      title: "General Corporate - M&A/PE and VC",
      description: "End-to-end legal advisory across the corporate lifecycle — from formation to funding, structuring to scaling, and exit to acquisition. Our Corporate & M&A practice advises startups, founders, investors, and growth-stage companies on a wide spectrum of strategic transactions, ensuring legal precision, commercial foresight, and regulatory compliance at every step. Whether you're closing a venture capital round, negotiating a joint venture, or structuring a complex M&A deal, we provide tailored counsel that aligns with your business goals, investor expectations, and risk appetite.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V9a2 2 0 11-4 0V6m0 0V4.5a2 2 0 10-4 0V6m4 0H8m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9" />
        </svg>
      )
    },
    {
      title: "Company Registration & Compliance",
      description: "Complete assistance with company formation, registration, and ongoing compliance requirements. We handle everything from selecting the right business structure to ensuring continuous regulatory compliance. Our services include incorporation procedures, director appointments, share capital management, annual filing requirements, board resolutions, and maintaining statutory registers. We also provide guidance on corporate governance best practices and help you navigate complex regulatory frameworks across different jurisdictions.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Payroll Processing",
      description: "End-to-end payroll management including PF and ESI compliances. Our comprehensive payroll services cover salary processing, tax deductions, statutory compliance, employee benefits administration, and regulatory reporting. We ensure accurate calculations, timely payments, and full compliance with labor laws, PF regulations, ESI requirements, and professional tax obligations. Our automated systems provide detailed payroll reports, employee self-service portals, and seamless integration with your HR and accounting systems.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "RBI Liasoning",
      description: "Specialized services for NBFCs regarding RBI compliance and requirements. We provide comprehensive support for regulatory submissions, license applications, compliance monitoring, and ongoing liaison with RBI authorities. Our services include CRAR reporting, ALM guidelines compliance, prudential norms adherence, fair practices code implementation, and regulatory audit support. We help NBFCs navigate complex regulatory landscapes, ensure timely compliance reporting, and maintain strong relationships with regulatory authorities.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Startup Consulting",
      description: "Tailored guidance for new businesses, from formation to financial strategy. Our startup consulting services encompass business plan development, funding strategy, regulatory compliance, tax optimization, corporate structuring, and growth planning. We help entrepreneurs navigate the complex startup ecosystem, connect with investors, understand regulatory requirements, and build scalable business models. Our team provides mentorship on financial management, operational efficiency, risk management, and strategic decision-making to ensure sustainable growth.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Virtual CFO Services",
      description: "Professional financial oversight without the cost of a full-time executive. Our Virtual CFO services provide strategic financial leadership, including financial planning and analysis, cash flow management, budget preparation, financial reporting, risk assessment, and investor relations support. We offer part-time or project-based CFO expertise to help businesses make informed financial decisions, improve operational efficiency, secure funding, and achieve sustainable growth while maintaining cost-effectiveness.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Arbitration & Mediation",
      description: "Company arbitration and mediation services to resolve business disputes. We provide comprehensive dispute resolution services including contract disputes, partnership disagreements, commercial conflicts, and regulatory matters. Our experienced team offers mediation, arbitration, and negotiation services to help businesses resolve conflicts efficiently and cost-effectively. We also provide legal advisory on dispute prevention, contract drafting, risk mitigation strategies, and alternative dispute resolution mechanisms to minimize future conflicts.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l3-1m-3 1l-3-1" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-apple font-bold text-4xl md:text-5xl text-foreground mb-6">
            Comprehensive Financial Expertise
          </h2>
          <p className="font-apple text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Sumegh Consultancy, we offer a wide range of financial services designed to support businesses at every stage of growth. Our experienced team provides personalized solutions tailored to your specific needs.
          </p>
        </div>

        {/* Core Services */}
        <div className="mb-20">
          <h3 className="font-apple font-bold text-3xl text-center text-foreground mb-12">
            Our Core Services
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
              <div key={index} className="card-hover p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-apple font-bold text-xl text-foreground mb-3">
                      {service.title}
                    </h4>
                    <p className="font-apple text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div>
                      <h5 className="font-apple font-semibold text-foreground mb-2">Benefits:</h5>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center gap-2 font-apple text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div>
          <h3 className="font-apple font-bold text-3xl text-center text-foreground mb-12">
            Additional Services
          </h3>
          <p className="font-apple text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Beyond our core offerings, we provide specialized services to meet your specific needs
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="flip-card" onClick={() => toggleCard(index)}>
                <div className={`flip-card-inner ${flippedCards.includes(index) ? 'flipped' : ''}`}>
                  {/* Front Side */}
                  <div className="flip-card-front">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4">
                      {service.icon}
                    </div>
                    <h4 className="font-apple font-bold text-lg text-foreground text-center px-4 leading-tight">
                      {service.title}
                    </h4>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="text-xs text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                        Click to learn more
                      </div>
                    </div>
                  </div>
                  
                  {/* Back Side */}
                  <div className="flip-card-back">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-apple font-bold text-sm text-foreground">
                        {service.title}
                      </h4>
                      <button className="text-muted-foreground hover:text-foreground">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto">
                      <div className="font-apple text-xs text-muted-foreground leading-relaxed space-y-2">
                        {service.description.split('. ').map((sentence, idx) => (
                          <p key={idx} className="text-left">
                            {sentence}{idx < service.description.split('. ').length - 1 ? '.' : ''}
                          </p>
                        ))}
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
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg px-8 py-4"
          >
            Discuss Your Requirements
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;