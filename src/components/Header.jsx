import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <nav className="nav-container container">
        <Link to="/" className="logo" aria-label="GG Apps Home" onClick={() => setMenuOpen(false)}>
          <span className="logo-gg">GG</span><span className="logo-apps">Apps</span>
        </Link>
        <button
          className={`nav-toggle${menuOpen ? ' active' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="hamburger" aria-hidden="true" />
        </button>
        <ul className={`nav-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen ? 'true' : undefined}>
          <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
          <li><NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink></li>
          <li><NavLink to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</NavLink></li>
          <li><NavLink to="/blog" onClick={() => setMenuOpen(false)}>Blog</NavLink></li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `nav-cta${isActive ? ' nav-cta-active' : ''}`}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
