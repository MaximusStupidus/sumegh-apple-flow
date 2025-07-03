const ServicesSection = () => {
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
      title: "Company Registration & Compliance",
      description: "Complete assistance with company formation, registration, and ongoing compliance requirements.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Payroll Processing",
      description: "End-to-end payroll management including PF and ESI compliances.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "RBI Liasoning",
      description: "Specialized services for NBFCs regarding RBI compliance and requirements.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Startup Consulting",
      description: "Tailored guidance for new businesses, from formation to financial strategy.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Virtual CFO Services",
      description: "Professional financial oversight without the cost of a full-time executive.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Arbitration & Mediation",
      description: "Company arbitration and mediation services to resolve business disputes.",
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
              <div key={index} className="card-hover p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                  {service.icon}
                </div>
                <h4 className="font-apple font-semibold text-lg text-foreground mb-2">
                  {service.title}
                </h4>
                <p className="font-apple text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
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