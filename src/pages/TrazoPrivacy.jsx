import FadeIn from '../components/FadeIn';
import usePageMeta from '../hooks/usePageMeta';

export default function TrazoPrivacy() {
  usePageMeta({
    title: 'Trazo Privacy Policy - GG Apps Ltd',
    description:
      'Privacy Policy for Trazo, the private on-device AI art generator for iOS by GG Apps Ltd.',
  });

  return (
    <div className="page legal-page">
      <section className="page-hero">
        <div className="container content-narrow">
          <FadeIn>
            <h1 className="page-title">Trazo Privacy Policy</h1>
            <p className="legal-updated">Last updated: 21 May 2026</p>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container content-narrow">
          <FadeIn>
            <div className="prose legal-prose">
              <h2>1. Who We Are</h2>
              <p>
                Trazo is developed and published by GG Apps Ltd ("we", "us",
                "our"), a company registered in England and Wales.
              </p>
              <ul>
                <li><strong>Company Number:</strong> 17105364</li>
                <li><strong>Registered Office:</strong> Unit A, 82 James Carter Road, Mildenhall, IP28 7DE</li>
                <li><strong>Email:</strong> <a href="mailto:contact@ggapps.dev">contact@ggapps.dev</a></li>
              </ul>

              <h2>2. Privacy By Design</h2>
              <p>
                Trazo is designed with privacy as a core principle. AI image
                generation runs on your device using Apple technologies such as
                Core ML and the Neural Engine. Your prompts, selected photos,
                and generated images are not uploaded to GG Apps servers for AI
                processing.
              </p>

              <h2>3. What We Do Not Collect</h2>
              <ul>
                <li>We do not collect your images, prompts, or generated artwork.</li>
                <li>We do not collect personal information such as your name, email address, phone number, or location through the app.</li>
                <li>We do not use advertising frameworks.</li>
                <li>We do not track you across apps or websites.</li>
                <li>We do not sell or share your personal data with third parties.</li>
              </ul>

              <h2>4. What Trazo Processes Locally</h2>
              <p>The following data is processed and stored locally on your device:</p>
              <ul>
                <li><strong>Text prompts:</strong> used by the on-device AI model to generate images.</li>
                <li><strong>Photos you select:</strong> used only when you choose an image-to-image or transform feature.</li>
                <li><strong>Generated images:</strong> stored in the app's local storage and optionally saved to your Photos library when you choose to save or share.</li>
                <li><strong>App preferences:</strong> settings such as theme, haptics, generation options, and local usage counters.</li>
                <li><strong>AI models:</strong> model files stored on your device so Trazo can work offline after setup.</li>
              </ul>

              <h2>5. Apple Services</h2>
              <p>
                Trazo uses Apple services for App Store distribution and purchases.
              </p>
              <ul>
                <li><strong>In-App Purchases and subscriptions:</strong> payments are processed by Apple. We do not receive your payment card details.</li>
                <li><strong>StoreKit:</strong> used to manage purchases, subscription status, and restore purchases.</li>
                <li><strong>Photos:</strong> permission is requested only when you choose to save or work with images from your Photos library.</li>
              </ul>
              <p>
                Apple's own privacy policy applies to Apple's processing of App
                Store and payment information.
              </p>

              <h2>6. Support Requests</h2>
              <p>
                If you email us for support, we will process the information you
                choose to send, such as your email address, message, device
                details, screenshots, and app version. We use this information
                only to respond to your request and improve support.
              </p>

              <h2>7. Data Retention</h2>
              <ul>
                <li><strong>App-local data:</strong> remains on your device until you delete it or uninstall the app.</li>
                <li><strong>Support emails:</strong> retained for up to 12 months unless ongoing communication or legal obligations require longer retention.</li>
              </ul>

              <h2>8. Children's Privacy</h2>
              <p>
                Trazo does not knowingly collect personal data from children. The
                app includes safety features intended to reduce inappropriate
                prompts and outputs, but parents and guardians remain responsible
                for supervising app use by children.
              </p>

              <h2>9. Your Rights Under UK GDPR</h2>
              <p>
                Because Trazo is designed not to collect app usage data or
                user-generated content, many data subject rights will not apply
                to app-local data that never leaves your device. If you contact
                us by email, you may request access, correction, deletion, or
                restriction of personal data contained in that support
                correspondence.
              </p>
              <p>
                To exercise your rights, email{' '}
                <a href="mailto:contact@ggapps.dev">contact@ggapps.dev</a>.
                You also have the right to lodge a complaint with the UK
                Information Commissioner's Office at{' '}
                <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
              </p>

              <h2>10. Changes To This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated revision date.
              </p>

              <h2>11. Contact Us</h2>
              <p>If you have questions about this Privacy Policy:</p>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:contact@ggapps.dev">contact@ggapps.dev</a></li>
                <li><strong>Address:</strong> Unit A, 82 James Carter Road, Mildenhall, IP28 7DE, United Kingdom</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
