import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import usePageMeta from '../hooks/usePageMeta';

const values = [
  {
    title: 'Privacy First',
    desc: 'We believe user data belongs to users. Our architecture reflects this — on-device processing wherever possible, minimal data collection, and transparent practices.',
  },
  {
    title: 'Craft Over Speed',
    desc: 'We don\'t ship half-baked products. Every interaction is considered, every animation is intentional, every feature is tested on real devices.',
  },
  {
    title: 'Simplicity as a Feature',
    desc: 'Powerful technology should feel effortless. We obsess over reducing complexity for the end user, even when it means more work for us.',
  },
  {
    title: 'Sustainable Business',
    desc: 'We build products with healthy unit economics and respect for users. No dark patterns, no predatory monetisation, no selling user data.',
  },
];

const timeline = [
  { year: '2026', title: 'Founded', desc: 'GG Apps Ltd registered in England and Wales. Launched with a focus on building useful, high-quality mobile applications.' },
  { year: '2026', title: 'Trazo', desc: 'Began development of Trazo — our flagship on-device AI art generator for iOS. Our first own product.' },
];

export default function About() {
  usePageMeta({
    title: 'About Us — GG Apps Ltd',
    description: 'Learn about GG Apps Ltd, a UK-based studio specialising in iOS and on-device AI applications.',
  });

  return (
    <div className="page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <FadeIn>
            <p className="section-label">About Us</p>
            <h1 className="page-title">Apps Built to Be Used</h1>
            <p className="page-subtitle">
              GG Apps Ltd is a UK-registered development studio focused on building
              useful, high-quality mobile applications designed with scale in mind.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container content-narrow">
          <FadeIn>
            <h2 className="section-title-left">Our Story</h2>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="prose">
              <p>
                GG Apps Ltd was founded in 2026 with a clear goal: build mobile applications
                that are genuinely useful, well-crafted, and respectful of the people who
                use them. We believe the best apps are the ones you reach for every day
                without thinking — intuitive, reliable, and quietly excellent.
              </p>
              <p>
                Based in the UK, we bring hands-on experience in native iOS development,
                on-device AI/ML, and product design. We aim to build
                products that scale gracefully while maintaining the quality of a
                hand-crafted tool.
              </p>
              <p>
                Our first product is Trazo — an AI art generator that runs entirely
                on-device. It represents everything we stand for: powerful technology
                made simple, private by design, and built to be used by everyone — not
                just power users.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="section section-alt">
        <div className="container">
          <FadeIn>
            <p className="section-label">What Drives Us</p>
            <h2 className="section-title">Our Values</h2>
          </FadeIn>
          <div className="values-grid">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 80}>
                <div className="value-card">
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container content-narrow">
          <FadeIn>
            <p className="section-label">Our Journey</p>
            <h2 className="section-title">Timeline</h2>
          </FadeIn>
          <div className="timeline">
            {timeline.map((t, i) => (
              <FadeIn key={t.year} delay={i * 100}>
                <div className="timeline-item">
                  <div className="timeline-year">{t.year}</div>
                  <div className="timeline-content">
                    <h3>{t.title}</h3>
                    <p>{t.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section section-alt">
        <div className="container">
          <FadeIn>
            <p className="section-label">The Team</p>
            <h2 className="section-title">Who We Are</h2>
          </FadeIn>
          <div className="team-grid">
            <FadeIn>
              <div className="team-card">
                <div className="team-avatar" aria-hidden="true">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="40" cy="32" r="12" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M18 68c0-12 10-20 22-20s22 8 22 20" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <h3>Igor Galitskii</h3>
                <p className="team-role">CEO & Lead Developer</p>
                <p className="team-bio">
                  Mobile developer with experience in iOS, Swift, and on-device AI.
                  Founded GG Apps to build products that respect user privacy while
                  delivering great experiences.
                </p>
              </div>
            </FadeIn>
          </div>
          <FadeIn>
            <p className="team-note">
              GG Apps is a lean studio. For larger projects, we collaborate with a trusted
              network of specialist designers, developers, and QA engineers — scaling the
              team to fit the project, not the other way around.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <FadeIn>
            <h2 className="section-title">Want to Work With Us?</h2>
            <p className="section-subtitle">
              We're always interested in hearing about new projects and ideas.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">Get in Touch</Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
