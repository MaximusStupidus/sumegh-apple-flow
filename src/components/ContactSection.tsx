import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add form submission logic here
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-apple font-bold text-4xl md:text-5xl text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="font-apple text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to answer your questions and discuss how we can help your business. Reach out to us using the contact information below or fill out the form.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-apple font-bold text-2xl text-foreground mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {/* Office Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-apple font-semibold text-lg text-foreground mb-1">Office Address</h4>
                    <p className="font-apple text-muted-foreground">201-202, Magnum House-II<br />Commercial Complex<br />Karampura, Delhi 110015</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-apple font-semibold text-lg text-foreground mb-1">Phone Number</h4>
                    <p className="font-apple text-muted-foreground">011-25920165-166</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-apple font-semibold text-lg text-foreground mb-1">Email Address</h4>
                    <p className="font-apple text-muted-foreground">sumeghconsultancy@gmail.com</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-apple font-semibold text-lg text-foreground mb-1">Business Hours</h4>
                    <p className="font-apple text-muted-foreground">Monday to Saturday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="card-apple p-8">
              <h4 className="font-apple font-bold text-xl text-foreground mb-4">Why Choose Sumegh Consultancy?</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 font-apple text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  25+ years of proven expertise
                </li>
                <li className="flex items-center gap-3 font-apple text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Qualified team of CAs, CS, and legal experts
                </li>
                <li className="flex items-center gap-3 font-apple text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Personalized solutions for your business
                </li>
                <li className="flex items-center gap-3 font-apple text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Modern tools and traditional expertise
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-apple p-8">
            <h3 className="font-apple font-bold text-2xl text-foreground mb-6">
              Send us a Message
            </h3>
            
            <form
              action="https://getform.io/f/bxoyzpqa"
              method="POST"
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block font-apple font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-apple focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-apple font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-apple focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block font-apple font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-apple focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block font-apple font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-apple focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block font-apple font-medium text-foreground mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-apple focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="accounting">Accounting & Bookkeeping</option>
                  <option value="tax">Tax Planning & Filing</option>
                  <option value="audit">Audit Support</option>
                  <option value="financial">Financial Planning</option>
                  <option value="company">Company Registration</option>
                  <option value="payroll">Payroll Processing</option>
                  <option value="rbi">RBI Liasoning</option>
                  <option value="startup">Startup Consulting</option>
                  <option value="cfo">Virtual CFO Services</option>
                  <option value="arbitration">Arbitration & Mediation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-apple font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-apple focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-vertical"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full text-lg py-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;