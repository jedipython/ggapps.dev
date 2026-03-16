import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import usePageMeta from '../hooks/usePageMeta';

const services = [
  {
    title: 'iOS App Development',
    desc: 'Native iOS applications built with Swift and SwiftUI, following Apple\'s Human Interface Guidelines and leveraging the latest platform capabilities including Core ML, ARKit, HealthKit, and StoreKit 2.',
    details: [
      'Native Swift & SwiftUI development',
      'Core ML & Neural Engine integration',
      'App Store submission & review management',
      'In-App Purchases & subscription setup',
      'Push notifications & background processing',
      'Apple Watch & iPad companion apps',
    ],
  },
  {
    title: 'UI/UX Design',
    desc: 'Research-driven design that puts users at the centre. We create interfaces that are not just beautiful but intuitive, accessible, and a pleasure to use every day.',
    details: [
      'User research & persona development',
      'Wireframing & interactive prototyping',
      'Design systems & component libraries',
      'Accessibility (WCAG 2.1 AA compliance)',
      'Usability testing & iteration',
      'Motion design & micro-interactions',
    ],
  },
  {
    title: 'On-Device AI & ML',
    desc: 'Bringing the power of artificial intelligence directly to users\' devices. No servers, no latency, no privacy concerns. We specialise in optimising models for mobile hardware.',
    details: [
      'Core ML model optimisation & quantisation',
      'Apple Neural Engine integration',
      'Stable Diffusion on-device deployment',
      'Computer vision & image processing',
      'Natural language processing on-device',
      'Model conversion (PyTorch → Core ML)',
    ],
  },
  {
    title: 'App Store Optimisation',
    desc: 'Strategic ASO to maximise your app\'s visibility and downloads. We optimise every touchpoint — from keywords to screenshots to custom product pages — backed by data and continuous testing.',
    details: [
      'Keyword research & metadata optimisation',
      'Screenshot & preview video design',
      'A/B testing with custom product pages',
      'Localisation for global markets',
      'Review management strategy',
      'Competitor analysis & benchmarking',
    ],
  },
  {
    title: 'Product Strategy & Consulting',
    desc: 'From initial concept validation to growth strategy, we help you make informed decisions about your mobile product at every stage of its lifecycle.',
    details: [
      'Market analysis & validation',
      'Monetisation strategy (subscriptions, IAP, freemium)',
      'Technical architecture planning',
      'Launch strategy & go-to-market',
      'Growth metrics & KPI definition',
      'Competitive positioning',
    ],
  },
];

const process = [
  { step: '01', title: 'Discovery', desc: 'We learn about your business, users, and goals. What problem are we solving? Who are we solving it for?' },
  { step: '02', title: 'Design', desc: 'Wireframes, prototypes, and user flows. We validate the approach with real users before writing a single line of code.' },
  { step: '03', title: 'Develop', desc: 'Clean, tested, maintainable code. Regular builds and check-ins so you always know where things stand.' },
  { step: '04', title: 'Launch', desc: 'App Store submission, ASO optimisation, and launch strategy. We handle the details so you can focus on your business.' },
  { step: '05', title: 'Grow', desc: 'Post-launch analytics, performance monitoring, feature updates, and growth consulting. We\'re in it for the long term.' },
];

export default function Services() {
  usePageMeta({
    title: 'Services — GG Apps Ltd',
    description: 'iOS development, UI/UX design, on-device AI, App Store optimisation, and product consulting.',
  });

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <FadeIn>
            <p className="section-label">Our Services</p>
            <h1 className="page-title">Everything You Need to Ship Great Apps</h1>
            <p className="page-subtitle">
              From initial concept to App Store launch and beyond — we handle every stage
              of the mobile development lifecycle.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="services-detail-grid">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 60}>
                <div className="service-detail-card">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul>
                    {s.details.map(d => <li key={d}>{d}</li>)}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section-alt">
        <div className="container">
          <FadeIn>
            <p className="section-label">How We Work</p>
            <h2 className="section-title">Our Process</h2>
          </FadeIn>
          <div className="process-grid">
            {process.map((p, i) => (
              <FadeIn key={p.step} delay={i * 80}>
                <div className="process-item">
                  <span className="process-step">{p.step}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section">
        <div className="container content-narrow">
          <FadeIn>
            <p className="section-label">Technology</p>
            <h2 className="section-title">Our Tech Stack</h2>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="tech-grid">
              {[
                'Swift', 'SwiftUI', 'Core ML', 'Neural Engine',
                'StoreKit 2', 'ARKit', 'HealthKit', 'Xcode',
                'Figma', 'Git', 'CI/CD', 'TestFlight',
              ].map(t => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt cta-section">
        <div className="container">
          <FadeIn>
            <h2 className="section-title">Let's Discuss Your Project</h2>
            <p className="section-subtitle">
              Every great app starts with a conversation. Tell us about your idea
              and we'll show you what's possible.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">Start a Conversation</Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
