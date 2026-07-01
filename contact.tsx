import React, { useState } from 'react';
import styles from './carter-site.module.css';
import { Icon } from './icons.js';
import { business, services } from './data.js';

/** Contact section with lead-gen form, quick-call/estimate buttons and details. */
export function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className={`${styles.section} ${styles.sectionDark}`} id="contact">
      <div className={styles.container}>
        <div className={styles.contactGrid}>
          <div className={`${styles.contactInfo} ${styles.reveal}`}>
            <span className={styles.eyebrow}>Get In Touch</span>
            <h2 className={styles.sectionTitle}>Request Your Free Estimate</h2>
            <p className={styles.sectionLead} style={{ color: 'var(--text-light)' }}>
              Ready to start your project? Reach out today for a free, no-obligation estimate.
              We'll get back to you promptly.
            </p>
            <div className={styles.contactItems}>
              <a className={styles.contactItem} href={business.phoneHref}>
                <span className={styles.contactItemIcon}><Icon.phone size={22} /></span>
                <span>
                  <span className={styles.contactItemLabel}>Call Us</span>
                  <span className={styles.contactItemValue}>{business.phone}</span>
                </span>
              </a>
              <a className={styles.contactItem} href={business.mapsUrl} target="_blank" rel="noreferrer">
                <span className={styles.contactItemIcon}><Icon.pin size={22} /></span>
                <span>
                  <span className={styles.contactItemLabel}>Visit Us</span>
                  <span className={styles.contactItemValue}>{business.address}</span>
                </span>
              </a>
              <div className={styles.contactItem}>
                <span className={styles.contactItemIcon}><Icon.clock size={22} /></span>
                <span>
                  <span className={styles.contactItemLabel}>Hours</span>
                  <span className={styles.contactItemValue}>{business.hours}</span>
                </span>
              </div>
            </div>
            <div className={styles.contactButtons}>
              <a className={`${styles.btn} ${styles.btnGold}`} href={business.phoneHref}>
                <Icon.phone size={18} /> Call Now
              </a>
            </div>
          </div>

          <div className={`${styles.contactForm} ${styles.reveal}`}>
            {sent ? (
              <div className={styles.formSuccess}>
                <div className={styles.formSuccessIcon}><Icon.check size={30} /></div>
                <h3 className={styles.formTitle}>Thank You!</h3>
                <p className={styles.formSub}>
                  Your request has been received. We'll be in touch shortly to discuss your project.
                </p>
                <a className={`${styles.btn} ${styles.btnDark} ${styles.formBtn}`} href={business.phoneHref}>
                  <Icon.phone size={18} /> Or Call {business.phone}
                </a>
              </div>
            ) : (
              <form onSubmit={submit}>
                <h3 className={styles.formTitle}>Get a Free Estimate</h3>
                <p className={styles.formSub}>Tell us about your project and we'll reach out.</p>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="name">Full Name</label>
                    <input className={styles.formInput} id="name" name="name" required placeholder="John Smith" />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="phone">Phone</label>
                    <input className={styles.formInput} id="phone" name="phone" type="tel" required placeholder="(856) 000-0000" />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="email">Email</label>
                  <input className={styles.formInput} id="email" name="email" type="email" required placeholder="you@email.com" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="service">Project Type</label>
                  <select className={styles.formSelect} id="service" name="service" defaultValue="">
                    <option value="" disabled>Select a service…</option>
                    {services.map((s) => (
                      <option key={s.title} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="message">Project Details</label>
                  <textarea className={styles.formTextarea} id="message" name="message" placeholder="Tell us a little about what you have in mind…" />
                </div>
                <button type="submit" className={`${styles.btn} ${styles.btnGold} ${styles.formBtn}`}>
                  Request Free Estimate <Icon.arrow size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
