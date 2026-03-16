import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import usePageMeta from '../hooks/usePageMeta';
import { projects } from '../data/projects';
import { posts } from '../data/blog';

const services = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="10" y="3" width="20" height="34" rx="4" stroke="currentColor" strokeWidth="1.5"/><circle cx="20" cy="32" r="1.5" fill="currentColor"/><line x1="15" y1="7" x2="25" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
    ),
    title: 'Mobile Development',
    desc: 'Native iOS applications built with Swift and SwiftUI, following Apple platform best practices.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="3" y="6" width="34" height="24" rx="3" stroke="currentColor" strokeWidth="1.5"/><circle cx="20" cy="18" r="5" stroke="currentColor" strokeWidth="1.5"/><path d="M12 26L20 14L28 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: 'UI/UX Design',
    desc: 'User-centric interfaces that combine beautiful aesthetics with intuitive functionality.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="M20 4v4M20 32v4M4 20h4M32 20h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.3"/></svg>
    ),
    title: 'On-Device AI',
    desc: 'Core ML and Neural Engine integration for powerful AI features that respect user privacy.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M8 14L20 8L32 14V26L20 32L8 26Z" stroke="currentColor" strokeWidth="1.5"/><path d="M20 8v24" stroke="currentColor" strokeWidth="1.5"/><path d="M8 14l12 6 12-6" stroke="currentColor" strokeWidth="1.5"/></svg>
    ),
    title: 'Strategy & Growth',
    desc: 'App Store optimisation, launch strategy, and growth consulting for mobile products.',
  },
];

const stats = [
  { value: 'iOS', label: 'Focused' },
  { value: 'UK', label: 'Registered' },
  { value: 'AI', label: 'On-Device' },
  { value: '2026', label: 'Founded' },
];

export default function Home() {
  usePageMeta({
    title: 'GG Apps Ltd — Mobile App Development Studio | UK',
    description: 'GG Apps builds useful, high-quality iOS applications — intuitive tools designed with scale in mind.',
  });

  const featured = projects[0]; // Trazo
  const latestPost = posts[0];

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-content">
          <FadeIn>
            <p className="hero-label">Mobile App Development Studio</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="hero-title">
              Useful Apps,<br /><span className="text-accent">Built to Last</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="hero-subtitle">
              We design and develop high-quality iOS applications that
              solve real problems — intuitive tools people genuinely enjoy using,
              every day.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="hero-actions">
              <Link to="/portfolio" className="btn btn-primary">View Our Work</Link>
              <Link to="/contact" className="btn btn-ghost">Get in Touch</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 80}>
                <div className="stat-item">
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <p className="section-label">What We Do</p>
            <h2 className="section-title">Our Core Services</h2>
          </FadeIn>
          <div className="services-grid">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 80}>
                <div className="card">
                  <div className="card-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="section-cta">
              <Link to="/services" className="btn btn-ghost">
                All Services &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Project — Trazo */}
      <section className="section section-alt">
        <div className="container">
          <FadeIn>
            <p className="section-label">Featured Project</p>
            <h2 className="section-title">Trazo — AI Art, Entirely Offline</h2>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="featured-project">
              <div className="featured-preview" style={{ background: featured.gradient }}>
                <div className="featured-badge">{featured.status}</div>
                <div className="featured-visual">
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                    <rect x="20" y="10" width="80" height="100" rx="16" stroke="white" strokeWidth="2" opacity="0.5"/>
                    <circle cx="60" cy="50" r="20" stroke="white" strokeWidth="2" opacity="0.4"/>
                    <path d="M45 70 L60 45 L75 70" stroke="white" strokeWidth="2" opacity="0.6" strokeLinecap="round" strokeLinejoin="round"/>
                    <text x="60" y="95" textAnchor="middle" fill="white" fontSize="14" fontWeight="700" opacity="0.7">TRAZO</text>
                  </svg>
                </div>
              </div>
              <div className="featured-info">
                <div className="featured-tags">
                  {featured.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <p className="featured-desc">{featured.description}</p>
                <ul className="featured-features">
                  {featured.features.slice(0, 4).map(f => (
                    <li key={f}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/portfolio" className="btn btn-primary">
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Latest from Blog */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <p className="section-label">From Our Blog</p>
            <h2 className="section-title">Latest Insights</h2>
          </FadeIn>
          <div className="blog-grid home-blog">
            {posts.slice(0, 3).map((post, i) => (
              <FadeIn key={post.slug} delay={i * 80}>
                <Link to={`/blog/${post.slug}`} className="blog-card">
                  <div className="blog-card-meta">
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</time>
                    <span>{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-card-tags">
                    {post.tags.map(t => <span key={t} className="tag tag-sm">{t}</span>)}
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="section-cta">
              <Link to="/blog" className="btn btn-ghost">
                All Articles &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt cta-section">
        <div className="container">
          <FadeIn>
            <h2 className="section-title">Let's Build Something People Love</h2>
            <p className="section-subtitle">
              Whether you have a fully scoped project or just an idea, we'd love
              to hear from you and help bring it to life.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Start a Conversation
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
