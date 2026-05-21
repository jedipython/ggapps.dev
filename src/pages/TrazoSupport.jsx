import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import usePageMeta from '../hooks/usePageMeta';

const supportEmail = 'contact@ggapps.dev';
const supportMailto =
  `mailto:${supportEmail}?subject=${encodeURIComponent('Trazo Support Request')}`;

const supportTopics = [
  {
    title: 'Bug reports',
    text: 'Tell us what happened, what you expected, and the steps that reproduce the issue.',
  },
  {
    title: 'General questions',
    text: 'Ask about using Trazo, supported devices, privacy, local storage, or app behaviour.',
  },
  {
    title: 'Feature requests',
    text: 'Send suggestions for new styles, workflows, export options, or accessibility improvements.',
  },
];

const requestChecklist = [
  'Your device model and iOS version',
  'Trazo app version',
  'A short description of the issue or request',
  'Steps to reproduce the issue, if applicable',
  'Screenshots or screen recordings, if helpful',
];

const faqs = [
  {
    question: 'Does Trazo require an account?',
    answer:
      'No. Trazo is designed to work without account sign-in for its core experience.',
  },
  {
    question: 'Where is generated content stored?',
    answer:
      'Generated images and app data are stored locally on your device unless you choose to export or share them.',
  },
  {
    question: 'How do I remove my local Trazo data?',
    answer:
      'You can delete saved images inside the app where available, or remove the app from your device to delete app-local data managed by iOS.',
  },
  {
    question: 'How do I request help with an App Store purchase?',
    answer:
      'Apple handles App Store billing and refunds. For refund requests, use reportaproblem.apple.com. You can still email us if you need product support.',
    billing: true,
  },
];

export default function TrazoSupport() {
  usePageMeta({
    title: 'Trazo Support - GG Apps Ltd',
    description:
      'Official support page for Trazo, the private on-device AI art generator for iOS by GG Apps Ltd.',
  });

  return (
    <div className="page support-page">
      <section className="page-hero support-hero">
        <div className="container">
          <FadeIn>
            <p className="section-label">App Support</p>
            <h1 className="page-title">Trazo Support</h1>
            <p className="page-subtitle">
              Help, contact details, privacy information, and troubleshooting
              guidance for Trazo on iOS.
            </p>
            <p className="support-updated">Last updated: 21 May 2026</p>
            <div className="support-actions">
              <a className="btn btn-primary btn-lg" href={supportMailto}>
                Email Support
              </a>
              <Link className="btn btn-ghost btn-lg" to="/privacy/trazo">
                Privacy Policy
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="support-layout">
            <FadeIn>
              <aside className="support-contact-panel">
                <h2>Contact Information</h2>
                <dl className="support-contact-list">
                  <div>
                    <dt>Developer</dt>
                    <dd>GG Apps Ltd</dd>
                  </div>
                  <div>
                    <dt>Email</dt>
                    <dd>
                      <a href={supportMailto}>{supportEmail}</a>
                    </dd>
                  </div>
                  <div>
                    <dt>Response time</dt>
                    <dd>We aim to respond within 1 business day.</dd>
                  </div>
                  <div>
                    <dt>Phone support</dt>
                    <dd>Not currently offered. Please contact us by email.</dd>
                  </div>
                  <div>
                    <dt>Legal address</dt>
                    <dd>
                      <address>
                        Unit A, 82 James Carter Road,
                        <br />
                        Mildenhall, IP28 7DE,
                        <br />
                        United Kingdom
                      </address>
                    </dd>
                  </div>
                  <div>
                    <dt>Company number</dt>
                    <dd>17105364, registered in England and Wales</dd>
                  </div>
                </dl>
              </aside>
            </FadeIn>

            <div className="support-main">
              <FadeIn delay={80}>
                <div className="support-section">
                  <h2>How We Can Help</h2>
                  <div className="support-topic-grid">
                    {supportTopics.map((topic) => (
                      <article key={topic.title} className="card support-topic-card">
                        <h3>{topic.title}</h3>
                        <p>{topic.text}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={140}>
                <div className="support-section">
                  <h2>What To Include</h2>
                  <p>
                    To help us investigate quickly, include the details below
                    when you contact support.
                  </p>
                  <ul className="support-checklist">
                    {requestChecklist.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="support-section">
                  <h2>Privacy And Data</h2>
                  <p>
                    Trazo is built around on-device processing. Generated content
                    and app data are intended to stay on your device unless you
                    choose to export, share, or send information to us for
                    support.
                  </p>
                  <p>
                    Support emails are handled by GG Apps Ltd so we can respond
                    to your request. For data protection questions or deletion
                    requests related to support correspondence, contact{' '}
                    <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
                  </p>
                  <Link to="/privacy/trazo" className="support-inline-link">
                    Read the Trazo Privacy Policy
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <FadeIn>
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Common Questions</h2>
          </FadeIn>
          <div className="support-faq-grid">
            {faqs.map((item, index) => (
              <FadeIn key={item.question} delay={index * 60}>
                <article className="support-faq-item">
                  <h3>{item.question}</h3>
                  <p>
                    {item.billing ? (
                      <>
                        Apple handles App Store billing and refunds. For refund
                        requests, use{' '}
                        <a
                          href="https://reportaproblem.apple.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          reportaproblem.apple.com
                        </a>
                        . You can still email us if you need product support.
                      </>
                    ) : (
                      item.answer
                    )}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <FadeIn>
            <h2 className="section-title">Need Help With Trazo?</h2>
            <p className="section-subtitle">
              Email us with your question, issue, or idea. We read every message.
            </p>
            <a className="btn btn-primary btn-lg" href={supportMailto}>
              Contact Trazo Support
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
