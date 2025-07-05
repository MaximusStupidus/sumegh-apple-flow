import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const blogData = {
  1: {
    title: "Essential Tax Planning Strategies for Startups in 2024",
    author: "CA Priya Sharma",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Tax Planning",
    content: `
      <p>Starting a business comes with numerous challenges, and tax planning often takes a backseat to more immediate concerns. However, implementing the right tax strategies from the beginning can save your startup thousands of rupees and prevent compliance issues down the road.</p>

      <h2>Key Tax Planning Strategies for Startups</h2>

      <h3>1. Choose the Right Business Structure</h3>
      <p>The structure you choose for your startup has significant tax implications. Whether you opt for a private limited company, LLP, or partnership firm, each has distinct advantages:</p>
      <ul>
        <li><strong>Private Limited Company:</strong> Offers tax benefits like lower corporate tax rates and better access to funding</li>
        <li><strong>LLP:</strong> Provides flexibility in profit distribution and tax pass-through benefits</li>
        <li><strong>Partnership:</strong> Simple structure with direct tax implications for partners</li>
      </ul>

      <h3>2. Leverage Startup Tax Exemptions</h3>
      <p>The Indian government offers several tax benefits for eligible startups:</p>
      <ul>
        <li>Three-year tax holiday under Section 80-IAC</li>
        <li>Exemption from capital gains tax on sale of residential property</li>
        <li>Investment above fair market value not treated as income</li>
      </ul>

      <h3>3. Optimize Employee Stock Options (ESOPs)</h3>
      <p>ESOPs are a common way to attract and retain talent. Understanding the tax implications helps in structuring these benefits effectively.</p>

      <h2>Common Mistakes to Avoid</h2>
      <p>Many startups make these costly mistakes:</p>
      <ul>
        <li>Neglecting proper documentation for expenses</li>
        <li>Missing filing deadlines</li>
        <li>Not maintaining proper books of accounts</li>
        <li>Overlooking TDS compliance</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Effective tax planning is crucial for startup success. By implementing these strategies early and staying compliant with regulations, startups can focus on growth while minimizing tax liabilities.</p>

      <p><em>For personalized tax planning advice, consult with our experienced team of chartered accountants who specialize in startup taxation.</em></p>
    `
  },
  2: {
    title: "Navigating GST Compliance: A Complete Guide for Tech Companies",
    author: "CS Rajesh Kumar",
    date: "March 10, 2024",
    readTime: "8 min read",
    category: "GST & Compliance",
    content: `
      <p>The Goods and Services Tax (GST) system in India has revolutionized indirect taxation. For technology companies, understanding GST compliance is crucial for smooth operations and avoiding penalties.</p>

      <h2>GST Registration for Tech Companies</h2>

      <h3>When is Registration Mandatory?</h3>
      <p>Tech companies must register for GST if:</p>
      <ul>
        <li>Annual turnover exceeds ₹20 lakhs (₹10 lakhs for special category states)</li>
        <li>They provide services across state boundaries</li>
        <li>They're engaged in e-commerce activities</li>
        <li>They receive supplies from unregistered dealers</li>
      </ul>

      <h3>Documents Required</h3>
      <p>Essential documents for GST registration include:</p>
      <ul>
        <li>PAN card of the business</li>
        <li>Address proof of business premises</li>
        <li>Bank account details</li>
        <li>Digital signature certificate</li>
        <li>Incorporation certificate (for companies)</li>
      </ul>

      <h2>GST Rates for Tech Services</h2>
      <p>Most technology services attract 18% GST, including:</p>
      <ul>
        <li>Software development services</li>
        <li>IT consulting</li>
        <li>Data processing services</li>
        <li>Web design and development</li>
        <li>Digital marketing services</li>
      </ul>

      <h2>Filing GST Returns</h2>

      <h3>Monthly Returns (GSTR-1 and GSTR-3B)</h3>
      <p>Regular taxpayers must file monthly returns by specific due dates. Understanding the difference between GSTR-1 (outward supplies) and GSTR-3B (summary return) is crucial for compliance.</p>

      <h3>Annual Return (GSTR-9)</h3>
      <p>An annual return consolidating all transactions for the financial year must be filed by December 31st of the following year.</p>

      <h2>Input Tax Credit (ITC) Optimization</h2>
      <p>Tech companies can claim ITC on:</p>
      <ul>
        <li>Software licenses</li>
        <li>Hardware purchases</li>
        <li>Office rent (if charged separately)</li>
        <li>Professional services</li>
        <li>Telecommunication services</li>
      </ul>

      <h2>Common Compliance Challenges</h2>

      <h3>1. Place of Supply Rules</h3>
      <p>Determining the correct place of supply for services can be complex, especially for B2B services provided remotely.</p>

      <h3>2. Reverse Charge Mechanism</h3>
      <p>Tech companies often need to pay GST under reverse charge when receiving services from overseas vendors or unregistered suppliers.</p>

      <h3>3. E-commerce Operations</h3>
      <p>Companies operating e-commerce platforms or selling through them face additional compliance requirements under GST.</p>

      <h2>Best Practices for GST Compliance</h2>
      <ul>
        <li>Maintain proper documentation for all transactions</li>
        <li>File returns on time to avoid penalties</li>
        <li>Reconcile books of accounts with GST returns regularly</li>
        <li>Keep track of ITC eligibility and restrictions</li>
        <li>Stay updated with GST law changes and notifications</li>
      </ul>

      <h2>Conclusion</h2>
      <p>GST compliance for tech companies requires careful attention to detail and regular monitoring. By understanding the requirements and implementing robust compliance processes, technology businesses can avoid penalties and focus on growth.</p>

      <p><em>Need help with GST compliance? Our team of experts can guide you through the complexities and ensure your business stays compliant.</em></p>
    `
  }
};

const BlogPost = () => {
  const { id } = useParams();
  const postId = id ? parseInt(id) : null;
  const post = postId && postId in blogData ? blogData[postId as keyof typeof blogData] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Blog post not found</h1>
          <Link to="/blog" className="text-primary hover:text-primary-hover">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border/20 py-6">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <Link 
              to="/" 
              className="flex items-center space-x-3"
            >
              <img 
                src="/lovable-uploads/573b3fb0-b3f3-4c16-92f7-d49dc424a501.png" 
                alt="Sumegh Consultancy Logo" 
                className="w-8 h-8"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="font-apple font-bold text-3xl md:text-5xl text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="font-apple text-muted-foreground leading-relaxed [&>h2]:font-apple [&>h2]:font-bold [&>h2]:text-2xl [&>h2]:text-foreground [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:font-apple [&>h3]:font-semibold [&>h3]:text-xl [&>h3]:text-foreground [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:mb-4 [&>ul]:mb-4 [&>ul]:pl-6 [&>li]:mb-2 [&>strong]:text-foreground [&>em]:text-muted-foreground/80"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-6 bg-muted/30 rounded-xl border border-border/20">
            <h3 className="font-apple font-bold text-xl text-foreground mb-3">
              Need Expert Advice?
            </h3>
            <p className="font-apple text-muted-foreground mb-4">
              Our experienced team is here to help you navigate complex financial and legal challenges.
            </p>
            <Link 
              to="/#contact" 
              className="btn-primary text-sm px-6 py-2 inline-block"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;