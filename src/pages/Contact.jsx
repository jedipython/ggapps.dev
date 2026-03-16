import { useState } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import usePageMeta from '../hooks/usePageMeta';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  usePageMeta({
    title: 'Contact — GG Apps Ltd',
    description: 'Get in touch with GG Apps Ltd. We\'d love to hear about your project.',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const subject = form.elements.subject.value;
    const message = form.elements.message.value;

    const mailto = `mailto:hello@ggapps.dev?subject=${encodeURIComponent(subject || 'Website Enquiry')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailto;

    // Show honest message — mailto just opens email client
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <FadeIn>
            <p className="section-label">Contact</p>
            <h1 className="page-title">Let's Build Something Together</h1>
            <p className="page-subtitle">
              Have a project in mind, a question, or just want to say hello?
              We'd love to hear from you. We typically respond within one business day.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Info */}
            <FadeIn>
              <div className="contact-info-panel">
                <div className="contact-block">
                  <h3>Email</h3>
                  {/* [CONTACT_EMAIL] */}
                  <a href="mailto:hello@ggapps.dev">hello@ggapps.dev</a>
                </div>

                <div className="contact-block">
                  <h3>Registered Office</h3>
                  {/* [REGISTERED_ADDRESS] Replace with your registered address */}
                  <address>[REGISTERED_ADDRESS]</address>
                </div>

                <div className="contact-block">
                  <h3>Company Details</h3>
                  <p>
                    GG Apps Ltd<br />
                    {/* [COMPANY_NUMBER] */}
                    Company No. [COMPANY_NUMBER]<br />
                    Registered in England and Wales
                  </p>
                </div>

                <div className="contact-block">
                  <h3>Response Time</h3>
                  <p>We aim to respond to all enquiries within 1 business day.</p>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn delay={100}>
              <div className="contact-form-panel">
                {submitted ? (
                  <div className="form-success">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2"/>
                      <path d="M14 24l7 7L34 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h3>Email Client Opened</h3>
                    <p>
                      Your email client should have opened with a pre-filled message.
                      If it didn't, please email us directly at{' '}
                      <a href="mailto:hello@ggapps.dev">hello@ggapps.dev</a>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Name *</label>
                        <input type="text" id="name" name="name" required autoComplete="name" placeholder="Your name" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input type="email" id="email" name="email" required autoComplete="email" placeholder="you@company.com" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input type="text" id="subject" name="subject" placeholder="What's this about?" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message *</label>
                      <textarea id="message" name="message" rows="6" required placeholder="Tell us about your project, timeline, and budget..." />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg" disabled={sending}>
                      {sending ? 'Opening...' : 'Send Message'}
                    </button>
                    <p className="form-note">
                      By submitting this form, you agree to our{' '}
                      <Link to="/privacy">Privacy Policy</Link>.
                    </p>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
