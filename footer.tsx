import React from 'react';
import styles from './carter-site.module.css';
import { Icon } from './icons.js';
import { business } from './data.js';

const quickLinks = [
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Reviews', id: 'reviews' },
  { label: 'Process', id: 'process' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Contact', id: 'contact' },
];

const serviceLinks = [
  'Kitchen Remodeling',
  'Bathroom Remodeling',
  'Basement Remodeling',
  'Deck Construction',
  'Home Additions',
  'General Construction',
];

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

/** Site footer — quick links, services, contact details and copyright. */
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div>
            <div className={styles.footerLogo}>
              <span className={styles.logoMark}>C</span>
              <span className={styles.logoText}>
                <span className={styles.logoName}>Carter Construction</span>
                <span className={styles.logoSub}>Group</span>
              </span>
            </div>
            <p className={styles.footerAbout}>
              Residential construction and remodeling built on quality craftsmanship,
              honest communication, and customer satisfaction across South Jersey.
            </p>
            <div className={styles.heroStars} style={{ color: 'var(--gold-light)', letterSpacing: 2 }}>
              ★★★★★ <span style={{ fontSize: '0.85rem' }}>5.0 Google Rating</span>
            </div>
          </div>

          <div className={styles.footerCol}>
            <h4>Quick Links</h4>
            <ul className={styles.footerLinks}>
              {quickLinks.map((l) => (
                <li key={l.id}>
                  <button className={styles.footerLink} onClick={() => scrollTo(l.id)}>{l.label}</button>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h4>Services</h4>
            <ul className={styles.footerLinks}>
              {serviceLinks.map((s) => (
                <li key={s}>
                  <button className={styles.footerLink} onClick={() => scrollTo('services')}>{s}</button>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h4>Contact</h4>
            <div className={styles.footerContact}>
              <div className={styles.footerContactItem}>
                <Icon.phone size={18} />
                <a href={business.phoneHref}>{business.phone}</a>
              </div>
              <div className={styles.footerContactItem}>
                <Icon.pin size={18} />
                <a href={business.mapsUrl} target="_blank" rel="noreferrer">{business.address}</a>
              </div>
              <div className={styles.footerContactItem}>
                <Icon.clock size={18} />
                <span>{business.hours}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} Carter Construction Group. All rights reserved.</span>
          <span>Residential General Contractor · Deptford, NJ</span>
        </div>
      </div>
    </footer>
  );
}
