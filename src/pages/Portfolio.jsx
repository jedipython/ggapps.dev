import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import usePageMeta from '../hooks/usePageMeta';
import { projects } from '../data/projects';

const expertise = [
  { area: 'iOS Development', detail: 'Swift, SwiftUI, Core ML, Neural Engine, StoreKit 2' },
  { area: 'App Store & Growth', detail: 'ASO, custom product pages, A/B testing, launch strategy' },
  { area: 'On-Device AI', detail: 'Stable Diffusion, SDXL Turbo, model quantisation, Core ML conversion' },
  { area: 'Product Design', detail: 'User research, prototyping, accessibility, App Store optimisation' },
];

export default function Portfolio() {
  usePageMeta({
    title: 'Portfolio — GG Apps Ltd',
    description: 'Current projects and technical expertise of GG Apps Ltd.',
  });

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <FadeIn>
            <p className="section-label">Our Work</p>
            <h1 className="page-title">What We're Building</h1>
            <p className="page-subtitle">
              GG Apps is a newly founded studio. Here's what we're currently
              working on and the expertise we bring to the table.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Current Projects */}
      <section className="section">
        <div className="container">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 100}>
              <div className="project-showcase">
                <div className="project-preview" style={{ background: project.gradient }}>
                  {project.status === 'In Development' && (
                    <div className="project-badge">In Development</div>
                  )}
                  <div className="project-visual" aria-hidden="true">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                      <rect x="18" y="8" width="64" height="84" rx="14" stroke="white" strokeWidth="1.5" opacity="0.4"/>
                      <rect x="26" y="20" width="48" height="48" rx="8" stroke="white" strokeWidth="1" opacity="0.25"/>
                      <text x="50" y="56" textAnchor="middle" fill="white" fontSize="11" fontWeight="600" opacity="0.5">
                        {project.title.slice(0, 6)}
                      </text>
                    </svg>
                  </div>
                </div>
                <div className="project-info">
                  <div className="project-meta">
                    <span className="project-year">{project.year}</span>
                    <div className="project-platforms">
                      {project.platforms.map(p => (
                        <span key={p} className="tag tag-sm">{p}</span>
                      ))}
                    </div>
                  </div>
                  <h2>{project.title}</h2>
                  <p className="project-tagline">{project.tagline}</p>
                  <div className="project-long-desc">
                    {project.longDescription.map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                  <p className="project-planned-label">Planned Features</p>
                  <div className="project-features-grid">
                    {project.features.map(f => (
                      <div key={f} className="project-feature">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                  <div className="project-tags">
                    {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section className="section section-alt">
        <div className="container">
          <FadeIn>
            <p className="section-label">Our Expertise</p>
            <h2 className="section-title">What We Bring</h2>
            <p className="section-subtitle">
              Our founder brings years of hands-on experience in mobile development
              and on-device AI — the technical foundation behind everything we build.
            </p>
          </FadeIn>
          <div className="expertise-grid">
            {expertise.map((e, i) => (
              <FadeIn key={e.area} delay={i * 80}>
                <div className="card">
                  <h3>{e.area}</h3>
                  <p>{e.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <FadeIn>
            <h2 className="section-title">Have a Project in Mind?</h2>
            <p className="section-subtitle">
              We're taking on select client projects alongside our own product work.
              Let's talk about what we can build together.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">Start a Conversation</Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
