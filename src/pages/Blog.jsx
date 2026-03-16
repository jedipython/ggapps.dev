import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import usePageMeta from '../hooks/usePageMeta';
import { posts } from '../data/blog';

export default function Blog() {
  usePageMeta({
    title: 'Blog — GG Apps Ltd',
    description: 'Insights on mobile development, on-device AI, privacy, and building products people love.',
  });

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <FadeIn>
            <p className="section-label">Blog</p>
            <h1 className="page-title">Insights & Perspectives</h1>
            <p className="page-subtitle">
              Thoughts on mobile development, on-device AI, privacy, and building
              products people love.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {posts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 80}>
                <Link to={`/blog/${post.slug}`} className="blog-card">
                  <div className="blog-card-meta">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </time>
                    <span>{post.readTime}</span>
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <div className="blog-card-tags">
                    {post.tags.map(t => (
                      <span key={t} className="tag tag-sm">{t}</span>
                    ))}
                  </div>
                  <span className="blog-read-more">Read article &rarr;</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
