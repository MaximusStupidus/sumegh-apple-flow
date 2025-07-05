import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

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
          {[1, 2].map((index) => (
            <article key={index} className="card-hover bg-card border border-border/20 rounded-xl overflow-hidden group">
              <div className="aspect-video bg-muted/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📝</div>
                  <div className="text-muted-foreground text-sm">Blog Image Coming Soon</div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                    Coming Soon
                  </span>
                </div>
                
                <h3 className="font-apple font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  Exciting Content Coming Soon
                </h3>
                
                <p className="font-apple text-muted-foreground mb-4 leading-relaxed">
                  We're working on creating valuable insights and expert advice to help you navigate the complex world of financial consulting and business compliance.
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Stay tuned</span>
                  <div className="inline-flex items-center gap-2 text-muted-foreground font-medium text-sm">
                    Coming Soon
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="btn-secondary text-lg px-8 py-3 inline-flex items-center gap-2 opacity-50 cursor-not-allowed">
            View All Articles (Coming Soon)
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;