import { useParams, Link, Navigate } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { posts } from '../data/blog';
import usePageMeta from '../hooks/usePageMeta';

const renderInline = (text) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, j) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={j}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const renderContent = (text) => {
  const blocks = text.trim().split('\n\n');
  return blocks.map((block, i) => {
    const trimmed = block.trim();
    if (trimmed.startsWith('### ')) return <h3 key={i}>{trimmed.slice(4)}</h3>;
    if (trimmed.startsWith('## ')) return <h2 key={i}>{trimmed.slice(3)}</h2>;

    // List block
    const lines = trimmed.split('\n');
    if (lines.every(l => l.trim().startsWith('- '))) {
      return (
        <ul key={i}>
          {lines.map((l, j) => (
            <li key={j}>{renderInline(l.trim().slice(2))}</li>
          ))}
        </ul>
      );
    }

    return <p key={i}>{renderInline(trimmed)}</p>;
  });
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  usePageMeta({
    title: post ? `${post.title} — GG Apps Blog` : 'Blog — GG Apps Ltd',
    description: post?.excerpt || '',
  });

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container content-narrow">
          <FadeIn>
            <Link to="/blog" className="back-link">&larr; All Articles</Link>
            <div className="blog-post-meta">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
              <span>{post.readTime}</span>
            </div>
            <h1 className="page-title">{post.title}</h1>
            <p className="blog-post-author">By Igor Galitskii</p>
            <div className="blog-post-tags">
              {post.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container content-narrow">
          <FadeIn>
            <article className="prose">
              {renderContent(post.content)}
            </article>
          </FadeIn>

          <FadeIn>
            <hr className="post-divider" />
            <div className="post-footer">
              <p>
                Got thoughts on this article? We'd love to hear from you.
                <br />
                <Link to="/contact">Get in touch</Link> or follow us for more insights.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
