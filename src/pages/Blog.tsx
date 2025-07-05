import { ArrowRight, Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "Essential Tax Planning Strategies for Startups in 2024",
    excerpt: "Discover the latest tax optimization techniques that can save your startup thousands while ensuring full compliance with current regulations.",
    author: "CA Priya Sharma",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Tax Planning",
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "Navigating GST Compliance: A Complete Guide for Tech Companies",
    excerpt: "From registration to returns filing, learn everything you need to know about GST compliance for technology businesses operating in India.",
    author: "CS Rajesh Kumar",
    date: "March 10, 2024",
    readTime: "8 min read",
    category: "GST & Compliance",
    image: "/api/placeholder/400/250"
  }
];

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
            <div className="flex items-center space-x-3">
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

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="card-hover bg-card border border-border/20 rounded-xl overflow-hidden group">
                <div className="aspect-video bg-muted/50 flex items-center justify-center">
                  <div className="text-muted-foreground text-sm">Blog Image Placeholder</div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                  </div>
                  
                  <h3 className="font-apple font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="font-apple text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-medium text-sm transition-colors group mt-4"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;