import React, { useEffect, useState } from 'react';
import styles from './carter-site.module.css';
import { Icon } from './icons.js';
import { business } from './data.js';

const links = [
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Projects', id: 'projects' },
  { label: 'Reviews', id: 'reviews' },
  { label: 'Process', id: 'process' },
  { label: 'Contact', id: 'contact' },
];

/** Sticky top navigation with a glass effect on scroll and a mobile drawer. */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
        <div className={`${styles.container} ${styles.navInner}`}>
          <a className={styles.logo} href="#top" onClick={(e) => { e.preventDefault(); go('top'); }}>
            <span className={styles.logoMark}>C</span>
            <span className={styles.logoText}>
              <span className={styles.logoName}>Carter Construction</span>
              <span className={styles.logoSub}>Group</span>
            </span>
          </a>

          <div className={styles.navLinks}>
            {links.map((l) => (
              <button key={l.id} className={styles.navLink} onClick={() => go(l.id)}>
                {l.label}
              </button>
            ))}
          </div>

          <div className={styles.navCta}>
            <a className={styles.navPhone} href={business.phoneHref}>
              <Icon.phone size={18} />
              {business.phone}
            </a>
            <button className={`${styles.btn} ${styles.btnGold} ${styles.navBtn}`} onClick={() => go('contact')}>
              Get Free Estimate
            </button>
            <button className={styles.menuToggle} onClick={() => setOpen(true)} aria-label="Open menu">
              <Icon.menu size={26} />
            </button>
          </div>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ''}`}>
        <button className={styles.menuToggle} onClick={() => setOpen(false)} aria-label="Close menu" style={{ position: 'absolute', top: 24, right: 24, color: '#fff' }}>
          <Icon.close size={28} />
        </button>
        {links.map((l) => (
          <button key={l.id} className={styles.mobileLink} onClick={() => go(l.id)}>
            {l.label}
          </button>
        ))}
        <a className={`${styles.btn} ${styles.btnGold}`} href={business.phoneHref} style={{ marginTop: 20 }}>
          <Icon.phone size={18} /> Call Now
        </a>
      </div>
    </>
  );
}
