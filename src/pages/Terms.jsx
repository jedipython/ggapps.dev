import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import usePageMeta from '../hooks/usePageMeta';

export default function Terms() {
  usePageMeta({
    title: 'Terms of Service — GG Apps Ltd',
    description: 'Terms of Service for the GG Apps Ltd website. Governed by the laws of England and Wales.',
  });

  return (
    <div className="page legal-page">
      <section className="page-hero">
        <div className="container content-narrow">
          <FadeIn>
            <h1 className="page-title">Terms of Service</h1>
            <p className="legal-updated">Last updated: 16 March 2026</p>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container content-narrow">
          <FadeIn>
            <div className="prose legal-prose">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website (ggapps.dev), you accept and agree to be
                bound by these Terms of Service. If you do not agree to these terms, please do
                not use this website.
              </p>

              <h2>2. About Us</h2>
              <p>This website is operated by GG Apps Ltd, a company registered in England and Wales.</p>
              <ul>
                {/* [COMPANY_NUMBER] */}
                <li><strong>Company Number:</strong> [COMPANY_NUMBER]</li>
                {/* [REGISTERED_ADDRESS] */}
                <li><strong>Registered Office:</strong> [REGISTERED_ADDRESS]</li>
                <li><strong>Email:</strong> <a href="mailto:contact@ggapps.dev">contact@ggapps.dev</a></li>
              </ul>

              <h2>3. Description of Service</h2>
              <p>
                GG Apps Ltd provides mobile application development services including iOS and
                UI/UX design, on-device AI integration, App Store Optimisation,
                and ongoing maintenance and support. This website serves as our online presence,
                providing information about our company and services, and offering a means to
                contact us.
              </p>

              <h2>4. Intellectual Property</h2>
              <p>
                All content on this website — including but not limited to text, graphics, logos,
                icons, images, and code — is the property of GG Apps Ltd or its content suppliers
                and is protected by United Kingdom and international copyright, trademark, and other
                intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, create derivative works from, publicly
                display, or exploit any content from this website without our prior written permission.
              </p>

              <h2>5. Use of the Website</h2>
              <p>
                You agree to use this website only for lawful purposes and in a manner that does not
                infringe the rights of, restrict, or inhibit anyone else's use of the website.
                Prohibited behaviour includes:
              </p>
              <ul>
                <li>Attempting to gain unauthorised access to our systems or networks.</li>
                <li>Using the website to transmit harmful, offensive, or unlawful material.</li>
                <li>Interfering with the proper working of the website.</li>
              </ul>

              <h2>6. Contact Form</h2>
              <p>
                When you submit information through our contact form, you agree that the information
                provided is accurate and that you consent to us contacting you in response to your
                enquiry. We handle your data in accordance with our{' '}
                <Link to="/privacy">Privacy Policy</Link>.
              </p>

              <h2>7. Third-Party Links</h2>
              <p>
                This website may contain links to third-party websites. We have no control over the
                content of those sites and accept no responsibility for them or for any loss or damage
                that may arise from your use of them.
              </p>

              <h2>8. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law:</p>
              <ul>
                <li>
                  This website and its content are provided on an "as is" and "as available" basis
                  without any warranties, express or implied.
                </li>
                <li>
                  GG Apps Ltd shall not be liable for any direct, indirect, incidental, special,
                  consequential, or punitive damages arising from your use of, or inability to use,
                  this website.
                </li>
                <li>
                  We do not warrant that the website will be uninterrupted, error-free, or free of
                  viruses or other harmful components.
                </li>
              </ul>
              <p>
                Nothing in these terms excludes or limits our liability for death or personal injury
                caused by our negligence, fraud or fraudulent misrepresentation, or any other liability
                that cannot be excluded or limited by English law.
              </p>

              <h2>9. Indemnification</h2>
              <p>
                If you use this website in the course of business, you agree to indemnify and
                hold harmless GG Apps Ltd, its directors, officers, and employees from any
                claims, damages, losses, or expenses (including reasonable legal fees) arising
                from your breach of these terms. This clause does not apply to consumers.
              </p>

              <h2>10. Changes to These Terms</h2>
              <p>
                We may update these Terms of Service to reflect changes in law, regulatory
                requirements, or our services. For material changes, we will provide at least
                30 days' notice by posting a prominent notice on this website before the changes
                take effect. Minor clarifications or corrections may take effect immediately.
                Your continued use of the website after the notice period constitutes acceptance
                of the updated terms.
              </p>

              <h2>11. Governing Law and Jurisdiction</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of
                England and Wales. Any disputes arising from or relating to these terms or your use of
                this website shall be subject to the exclusive jurisdiction of the courts of England
                and Wales.
              </p>

              <h2>12. Severability</h2>
              <p>
                If any provision of these terms is found to be invalid or unenforceable, the remaining
                provisions shall continue in full force and effect.
              </p>

              <h2>13. Contact Us</h2>
              <p>If you have any questions about these Terms of Service:</p>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:contact@ggapps.dev">contact@ggapps.dev</a></li>
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
