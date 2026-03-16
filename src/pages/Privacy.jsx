import FadeIn from '../components/FadeIn';
import usePageMeta from '../hooks/usePageMeta';

export default function Privacy() {
  usePageMeta({
    title: 'Privacy Policy — GG Apps Ltd',
    description: 'Privacy Policy for GG Apps Ltd. Learn how we collect, use, and protect your personal data under UK GDPR.',
  });

  return (
    <div className="page legal-page">
      <section className="page-hero">
        <div className="container content-narrow">
          <FadeIn>
            <h1 className="page-title">Privacy Policy</h1>
            <p className="legal-updated">Last updated: 16 March 2026</p>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container content-narrow">
          <FadeIn>
            <div className="prose legal-prose">
              <h2>1. Who We Are</h2>
              <p>
                GG Apps Ltd ("we", "us", "our") is a company registered in England and Wales.
              </p>
              <ul>
                {/* [COMPANY_NUMBER] */}
                <li><strong>Company Number:</strong> [COMPANY_NUMBER]</li>
                {/* [REGISTERED_ADDRESS] */}
                <li><strong>Registered Office:</strong> [REGISTERED_ADDRESS]</li>
                <li><strong>Email:</strong> <a href="mailto:hello@ggapps.dev">hello@ggapps.dev</a></li>
              </ul>
              <p>
                We are the data controller responsible for your personal data processed
                through this website (ggapps.dev).
              </p>
              <p>
                Given the nature and scale of our processing activities, we are not
                required to appoint a Data Protection Officer. For any data protection
                queries, please contact us at{' '}
                <a href="mailto:hello@ggapps.dev">hello@ggapps.dev</a>.
              </p>

              <h2>2. What Data We Collect</h2>
              <p>We may collect the following personal data:</p>
              <ul>
                <li><strong>Contact form submissions:</strong> your name, email address, and the message you send us.</li>
                <li><strong>Technical data:</strong> IP address, browser type, operating system, and pages visited — collected automatically through cookies and server logs.</li>
                <li><strong>Cookie data:</strong> preferences and analytics data as described in our Cookie Policy below.</li>
              </ul>

              <h2>3. How We Use Your Data</h2>
              <p>We use your personal data for the following purposes:</p>
              <ul>
                <li>To respond to enquiries submitted through our contact form.</li>
                <li>To improve our website and user experience.</li>
                <li>To analyse website traffic and usage patterns.</li>
                <li>To comply with legal obligations.</li>
              </ul>

              <h2>4. Legal Basis for Processing</h2>
              <p>Under UK GDPR, we process your data on the following legal bases:</p>
              <ul>
                <li><strong>Consent:</strong> when you submit a contact form or accept cookies.</li>
                <li><strong>Legitimate interests:</strong> specifically, our interest in understanding how visitors use our website to improve our services, and in ensuring the security and proper functioning of our website. We have assessed that these interests do not override your fundamental rights and freedoms.</li>
                <li><strong>Legal obligation:</strong> where processing is necessary to comply with applicable law.</li>
              </ul>

              <h2>5. Data Sharing and Third Parties</h2>
              <p>
                We do not sell your personal data. We may share data with the following
                categories of third parties:
              </p>
              <ul>
                <li><strong>Hosting:</strong> our website hosting provider may process technical data as part of serving the website.</li>
                <li><strong>Analytics:</strong> we may use privacy-respecting analytics tools. Any such tools will be listed here when implemented.</li>
              </ul>
              <p>
                Our website hosting infrastructure may process technical data in
                countries outside the UK. Where this occurs, we ensure appropriate
                safeguards are in place, such as the UK International Data Transfer
                Agreement (IDTA) or hosting in countries covered by a UK adequacy
                decision. You may request further details by contacting us.
              </p>

              <h2>6. Data Retention</h2>
              <ul>
                <li><strong>Contact form data:</strong> retained for up to 12 months, then deleted unless ongoing communication requires retention.</li>
                <li><strong>Analytics data:</strong> aggregated and anonymised after 26 months.</li>
              </ul>

              <h2>7. Provision of Personal Data</h2>
              <p>
                The provision of your personal data via our contact form is voluntary and
                not a statutory or contractual requirement. However, if you do not provide
                your name and email address, we will be unable to respond to your enquiry.
              </p>

              <h2>8. Automated Decision-Making</h2>
              <p>
                We do not use your personal data for automated decision-making or
                profiling as defined under Article 22 of the UK GDPR.
              </p>

              <h2>9. Your Rights Under UK GDPR</h2>
              <p>You have the following rights regarding your personal data:</p>
              <ul>
                <li><strong>Right of access</strong> — request a copy of the data we hold about you.</li>
                <li><strong>Right to rectification</strong> — request correction of inaccurate data.</li>
                <li><strong>Right to erasure</strong> — request deletion of your data ("right to be forgotten").</li>
                <li><strong>Right to restrict processing</strong> — request limitation of how we use your data.</li>
                <li><strong>Right to data portability</strong> — request your data in a machine-readable format.</li>
                <li><strong>Right to object</strong> — object to processing based on legitimate interests.</li>
                <li><strong>Right to withdraw consent</strong> — withdraw consent at any time where processing is based on consent.</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:hello@ggapps.dev">hello@ggapps.dev</a>. We will respond within one month.
              </p>

              <h2>10. Complaints</h2>
              <p>
                If you believe we have not handled your data correctly, you have the right
                to lodge a complaint with the Information Commissioner's Office (ICO):
              </p>
              <ul>
                <li><strong>Website:</strong> <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a></li>
                <li><strong>Phone:</strong> 0303 123 1113</li>
              </ul>

              <h2 id="cookies">11. Cookie Policy</h2>
              <p>Cookies are small text files stored on your device when you visit our website.</p>

              <h3>Essential Cookies</h3>
              <p>
                These are necessary for the website to function correctly. They include
                cookies that remember your cookie consent preference.
              </p>
              <table className="cookie-table">
                <thead>
                  <tr><th>Cookie</th><th>Purpose</th><th>Duration</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ggapps_cookie_consent</td>
                    <td>Stores your cookie consent preference</td>
                    <td>Browser storage (localStorage) — until manually cleared</td>
                  </tr>
                </tbody>
              </table>

              <h3>Analytics Cookies</h3>
              <p>
                We may use analytics cookies to understand how visitors interact with our
                website. These cookies collect information anonymously. When implemented,
                specific cookies will be listed here.
              </p>

              <h3>Managing Cookies</h3>
              <p>
                You can control and delete cookies through your browser settings. Most
                browsers allow you to view, block, and delete cookies individually or by
                category. Please note that disabling cookies may affect website functionality.
              </p>

              <h2>12. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be
                posted on this page with an updated revision date. We encourage you to
                review this page periodically.
              </p>

              <h2>13. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or how we handle your data:</p>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:hello@ggapps.dev">hello@ggapps.dev</a></li>
                {/* [REGISTERED_ADDRESS] */}
                <li><strong>Address:</strong> [REGISTERED_ADDRESS]</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
