import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border/20 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/573b3fb0-b3f3-4c16-92f7-d49dc424a501.png" 
                alt="Sumegh Consultancy Logo" 
                className="w-8 h-8"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-light/20 to-background py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="font-apple font-bold text-4xl md:text-6xl text-foreground mb-6">
            Financial Insights &amp; 
            <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent"> Expert Advice</span>
          </h1>
          <p className="font-apple text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay ahead with our latest insights on tax planning, compliance, and financial strategies for modern businesses.
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-6xl mb-6">🚧</div>
          <h2 className="font-apple font-bold text-3xl text-foreground mb-4">
            Blog Coming Soon
          </h2>
          <p className="font-apple text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're working hard to bring you valuable insights, expert advice, and the latest updates in financial consulting and business compliance. Check back soon for our first articles!
          </p>
          <Link 
            to="/"
            className="btn-primary text-lg px-8 py-3 inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;