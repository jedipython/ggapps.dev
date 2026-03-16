import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';

export default function NotFound() {
  usePageMeta({ title: '404 — Page Not Found | GG Apps Ltd' });

  return (
    <div className="page">
      <section className="page-hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="section-label">404</p>
          <h1 className="page-title">Page Not Found</h1>
          <p className="page-subtitle">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/" className="btn btn-primary">Back to Home</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
