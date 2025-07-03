const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Accounting & Bookkeeping",
    "Tax Planning & Filing",
    "Audit Support",
    "Financial Planning",
    "Company Registration",
    "Virtual CFO Services"
  ];

  const quickLinks = [
    { name: "About Us", id: "about" },
    { name: "Our Story", id: "story" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="font-apple font-bold text-2xl mb-4">
              Sumegh Consultancy
            </div>
            <p className="font-apple text-background/80 mb-6 leading-relaxed max-w-md">
              A trusted financial advisory firm with over 25 years of experience, offering end-to-end services in bookkeeping, tax advisory, audit support, financial planning, and corporate law.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-background/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-apple text-background/80">Karampura Office, New Delhi, India</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-background/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-apple text-background/80">info@sumeghconsultancy.com</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-background/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-apple text-background/80">+91 XXXXX XXXXX</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-apple font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="font-apple text-background/80 hover:text-background transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-apple font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="font-apple text-background/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Business Hours & Mission */}
        <div className="py-8 border-t border-background/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-apple font-semibold text-lg mb-4">Business Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-apple text-background/80">Monday - Friday</span>
                  <span className="font-apple text-background/80">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-apple text-background/80">Saturday</span>
                  <span className="font-apple text-background/80">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-apple text-background/80">Sunday</span>
                  <span className="font-apple text-background/80">Closed</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-apple font-semibold text-lg mb-4">Our Mission</h4>
              <p className="font-apple text-background/80 italic">
                "You focus on the hardwork, we will ensure compliance"
              </p>
            </div>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="py-8 border-t border-background/20">
          <h4 className="font-apple font-semibold text-lg mb-4">Areas of Expertise</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h5 className="font-apple font-medium text-background mb-2">Taxation</h5>
              <p className="font-apple text-sm text-background/70">Direct & Indirect Tax, GST, ITR, TDS</p>
            </div>
            <div>
              <h5 className="font-apple font-medium text-background mb-2">Compliance</h5>
              <p className="font-apple text-sm text-background/70">Regulatory Compliance, RBI Liasoning</p>
            </div>
            <div>
              <h5 className="font-apple font-medium text-background mb-2">Corporate Services</h5>
              <p className="font-apple text-sm text-background/70">Company Registration, Corporate Law</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-apple text-background/60 text-sm">
              © {currentYear} Sumegh Consultancy. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <span className="font-apple text-background/60 text-sm">Powered by expertise since 1999</span>
              <div className="flex items-center gap-4">
                <span className="font-apple text-background/60 text-sm">Follow us:</span>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors cursor-pointer">
                    <svg className="w-4 h-4 text-background/80" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors cursor-pointer">
                    <svg className="w-4 h-4 text-background/80" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;