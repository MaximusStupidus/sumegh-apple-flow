const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="font-apple font-bold text-xl mb-4 bg-gradient-to-r from-background to-background/80 bg-clip-text text-transparent">
              Sumegh Consultancy
            </div>
            <p className="font-apple text-background/70 text-sm leading-relaxed">
              "You focus on building, let us ensure compliance"
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-apple font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-background/60 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="font-apple text-background/80 text-sm">
                  201-202, Magnum House-II<br />
                  Commercial Complex<br />
                  Karampura, Delhi 110015
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-background/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-apple text-background/80 text-sm">011-43081640</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-background/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-apple text-background/80 text-sm">client@sumeghconsultancy.com</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-apple font-semibold text-lg mb-4">Business Hours</h3>
            <div className="space-y-1">
              <div className="flex justify-between font-apple text-background/80 text-sm">
                <span>Monday - Saturday</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between font-apple text-background/80 text-sm">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 text-center">
          <div className="font-apple text-background/60 text-sm">
            © {currentYear} Sumegh Consultancy. All rights reserved. | 25+ years of trusted expertise
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;