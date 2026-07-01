import React, { useEffect, useState } from 'react';
import styles from './carter-site.module.css';
import { Icon } from './icons.js';
import { business } from './data.js';
import { useReveal } from './use-reveal.js';
import { Navbar } from './navbar.js';
import {
  Hero,
  About,
  Services,
  Projects,
  WhyChoose,
  Process,
  Reviews,
  ServiceArea,
  Faq,
} from './sections.js';
import { Contact } from './contact.js';
import { Footer } from './footer.js';

/** Premium loading animation shown briefly on first paint. */
function Loader({ done }: { done: boolean }) {
  return (
    <div className={`${styles.loader} ${done ? styles.loaderHidden : ''}`}>
      <div className={styles.loaderMark}>C</div>
      <div className={styles.loaderBar}>
        <div className={styles.loaderBarFill} />
      </div>
    </div>
  );
}

/** Sticky mobile call-to-action bar (call + estimate). */
function StickyCta() {
  return (
    <div className={styles.stickyCta}>
      <a className={`${styles.btn} ${styles.btnDark}`} href={business.phoneHref}>
        <Icon.phone size={18} /> Call
      </a>
      <button
        className={`${styles.btn} ${styles.btnGold}`}
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Get Free Estimate
      </button>
    </div>
  );
}

/**
 * The Carter Construction Group home page — a premium, single-page marketing
 * site composed of all content sections, with scroll reveals, a loader and
 * sticky mobile CTAs.
 */
export function HomePage() {
  const [loaded, setLoaded] = useState(false);
  useReveal(styles.reveal, styles.visible);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 900);
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={styles.site}>
      <Loader done={loaded} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyChoose />
        <Process />
        <Reviews />
        <ServiceArea />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
