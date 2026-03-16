import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const COOKIE_KEY = 'ggapps_cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(COOKIE_KEY)) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const respond = (choice) => {
    localStorage.setItem(COOKIE_KEY, choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <div className="cookie-content container">
        <p>
          We use essential browser storage to remember your preferences and make
          this site work properly. For details, see our{' '}
          <Link to="/privacy#cookies">Cookie Policy</Link>.
        </p>
        <div className="cookie-actions">
          <button className="btn btn-primary btn-sm" onClick={() => respond('all')}>
            Accept All
          </button>
          <button className="btn btn-ghost btn-sm" onClick={() => respond('essential')}>
            Essential Only
          </button>
        </div>
      </div>
    </div>
  );
}
