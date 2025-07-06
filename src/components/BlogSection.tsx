import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import GST from '@/assets/GST.png';
import TAX from '@/assets/TAX.png';

const blogPosts = [
  {
    id: 1,
    title: "Essential Tax Planning Strategies for Startups in 2024",
    excerpt: "Discover the latest tax optimization techniques that can save your startup thousands while ensuring full compliance with current regulations.",
    author: "CA Vimal Parakh",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Tax Planning",
    image: TAX
  },
  {
    id: 2,
    title: "Navigating GST Compliance: A Complete Guide for Tech Companies",
    excerpt: "From registration to returns filing, learn everything you need to know about GST compliance for technology businesses operating in India.",
    author: "CA Vimal Parakh",
    date: "March 10, 2024",
    readTime: "8 min read",
    category: "GST & Compliance",
    image: GST
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-apple font-bold text-4xl md:text-5xl text-foreground mb-6">
            Latest Insights
          </h2>
          <p className="font-apple text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends, regulations, and best practices in financial consulting and business compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="card-hover bg-card border border-border/20 rounded-xl overflow-hidden group">
              <div className="aspect-video bg-muted/50 flex items-center justify-center p-4">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="max-h-full max-w-full object-contain"
                />
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
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                </div>
                
                <h3 className="font-apple font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="font-apple text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-medium text-sm transition-colors group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/blog" 
            className="btn-secondary text-lg px-8 py-3 inline-flex items-center gap-2"
          >
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;