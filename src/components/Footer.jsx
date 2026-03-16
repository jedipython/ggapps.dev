import { Link } from 'react-router-dom';

const COOKIE_KEY = 'ggapps_cookie_consent';

function resetCookieConsent(e) {
  e.preventDefault();
  localStorage.removeItem(COOKIE_KEY);
  window.location.reload();
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <span className="logo-gg">GG</span><span className="logo-apps">Apps</span>
            </Link>
            <p>
              UK-based studio building useful, high-quality iOS applications.
            </p>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">iOS Development</Link></li>
              <li><Link to="/services">On-Device AI</Link></li>
              <li><Link to="/services">UI/UX Design</Link></li>
              <li><Link to="/services">App Consulting</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/privacy#cookies">Cookie Policy</Link></li>
              <li><a href="#" onClick={resetCookieConsent}>Cookie Preferences</a></li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* UK Companies Act 2006 / Electronic Commerce Regulations 2002 — REQUIRED */}
        <div className="footer-compliance">
          {/* [COMPANY_NUMBER] Replace with Companies House registration number */}
          <p>
            <strong>GG Apps Ltd</strong> &mdash; Company No.&nbsp;
            <span className="placeholder">[COMPANY_NUMBER]</span>
          </p>
          <p>Registered in England and Wales</p>
          {/* [REGISTERED_ADDRESS] Replace with registered office address */}
          <p>
            Registered Office:&nbsp;
            <span className="placeholder">[REGISTERED_ADDRESS]</span>
          </p>
          {/* [CONTACT_EMAIL] */}
          <p>
            Email: <a href="mailto:hello@ggapps.dev">hello@ggapps.dev</a>
          </p>
        </div>

        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} GG Apps Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
