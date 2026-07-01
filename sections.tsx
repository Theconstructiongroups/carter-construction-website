import React, { useEffect, useRef, useState } from 'react';
import styles from './carter-site.module.css';
import { Icon, IconName } from './icons.js';
import { business, services, values, process, reviews, faqs } from './data.js';
import heroKitchen from './assets/hero-kitchen.png';
import projBathroom from './assets/project-bathroom.png';
import projBasement from './assets/project-basement.png';
import projDeck from './assets/project-deck.png';
import projAddition from './assets/project-addition.png';
import projFoyer from './assets/project-foyer.png';
import projFlooring from './assets/project-flooring.png';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

/** Cinematic hero with parallax background, trust badges and dual CTAs. */
export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.4}px) scale(1.1)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className={styles.hero} id="top">
      <div ref={bgRef} className={styles.heroBg} style={{ backgroundImage: `url(${heroKitchen})` }} />
      <div className={styles.heroOverlay} />
      <div className={`${styles.container} ${styles.heroInner}`}>
        <div className={styles.heroBadge}>
          <span className={styles.heroStars}>★★★★★</span>
          5.0 Google Rating · Deptford, NJ
        </div>
        <h1 className={styles.heroTitle}>
          Building Homes.<br />
          Creating Trust.<br />
          <span>Delivering Excellence.</span>
        </h1>
        <p className={styles.heroSub}>
          Professional residential construction and remodeling services with quality
          craftsmanship and attention to every detail throughout South Jersey.
        </p>
        <div className={styles.heroButtons}>
          <button className={`${styles.btn} ${styles.btnGold}`} onClick={() => scrollTo('contact')}>
            Get Free Estimate <Icon.arrow size={18} />
          </button>
          <button className={`${styles.btn} ${styles.btnOutline}`} onClick={() => scrollTo('projects')}>
            View Our Projects
          </button>
        </div>
        <div className={styles.heroTrust}>
          <div className={styles.heroTrustItem}>
            <span className={styles.heroStars}>★★★★★</span> <strong>5.0</strong> Google Rating
          </div>
          <div className={styles.heroTrustItem}>
            <Icon.shield size={18} /> Residential General Contractor
          </div>
          <div className={styles.heroTrustItem}>
            <Icon.check size={18} /> Kitchen • Bathroom • Basement Remodeling
          </div>
          <div className={styles.heroTrustItem}>
            <Icon.pin size={18} /> Serving Deptford &amp; South Jersey
          </div>
        </div>
      </div>
      <div className={styles.heroScroll}>
        Scroll
        <span className={styles.heroScrollLine} />
      </div>
    </section>
  );
}

/** About section — craftsmanship focus, image collage, verified rating stat. */
export function About() {
  const points = [
    'Residential remodeling & construction specialists',
    'Focus on craftsmanship, communication & satisfaction',
    'Trusted by homeowners across South Jersey',
  ];
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.aboutGrid}>
          <div className={`${styles.aboutImages} ${styles.reveal}`}>
            <div className={`${styles.aboutImg} ${styles.aboutImgTall}`}>
              <img src={projFoyer} alt="Renovated luxury home foyer" loading="lazy" />
            </div>
            <div className={`${styles.aboutImg} ${styles.aboutImgShort}`}>
              <img src={projBathroom} alt="Modern bathroom remodel" loading="lazy" />
            </div>
            <div className={`${styles.aboutImg} ${styles.aboutImgShort}`}>
              <img src={projFlooring} alt="Precision flooring installation" loading="lazy" />
            </div>
            <div className={styles.aboutStat}>
              <div className={styles.aboutStatNum}>5.0★</div>
              <div className={styles.aboutStatLabel}>Google Rated</div>
            </div>
          </div>
          <div className={styles.reveal}>
            <span className={styles.eyebrow}>About Carter Construction Group</span>
            <h2 className={styles.sectionTitle}>Craftsmanship you can trust, from start to finish.</h2>
            <p className={styles.sectionLead}>
              Carter Construction Group specializes in residential remodeling and construction,
              with a focus on quality craftsmanship, clear communication, and complete customer
              satisfaction. From kitchens and bathrooms to basements, additions, and full home
              projects, we treat every home as if it were our own.
            </p>
            <ul className={styles.aboutPoints}>
              {points.map((p) => (
                <li key={p} className={styles.aboutPoint}>
                  <span className={styles.aboutPointIcon}><Icon.check size={15} /></span>
                  {p}
                </li>
              ))}
            </ul>
            <button className={`${styles.btn} ${styles.btnDark}`} onClick={() => scrollTo('contact')}>
              Start Your Project <Icon.arrow size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Services grid with animated icon cards. */
export function Services() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="services">
      <div className={styles.container}>
        <div className={`${styles.center} ${styles.reveal}`}>
          <span className={`${styles.eyebrow} ${styles.eyebrowCenter}`}>What We Do</span>
          <h2 className={styles.sectionTitle}>Complete Residential Construction &amp; Remodeling</h2>
          <p className={styles.sectionLead}>
            From single-room remodels to full home construction, we bring expert craftsmanship
            to every project across South Jersey.
          </p>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((s) => {
            const IconComp = Icon[s.icon as IconName];
            return (
              <div key={s.title} className={`${styles.serviceCard} ${styles.reveal}`}>
                <div className={styles.serviceIcon}>{IconComp ? <IconComp size={28} /> : null}</div>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceDesc}>{s.description}</p>
                <button className={styles.serviceLink} onClick={() => scrollTo('contact')}>
                  Learn More <Icon.arrow size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Featured projects — masonry-style gallery with hover reveals. */
export function Projects() {
  const items = [
    { title: 'Modern Kitchen Remodel', category: 'Kitchen Remodels', image: heroKitchen, cls: `${styles.projectSpanCol} ${styles.projectSpanRow}` },
    { title: 'Spa Bathroom Renovation', category: 'Bathrooms', image: projBathroom, cls: '' },
    { title: 'Finished Basement', category: 'Basements', image: projBasement, cls: '' },
    { title: 'Backyard Deck Build', category: 'Decks', image: projDeck, cls: styles.projectSpanCol },
    { title: 'Two-Story Home Addition', category: 'Home Additions', image: projAddition, cls: '' },
    { title: 'Custom Flooring & Tile', category: 'Flooring', image: projFlooring, cls: '' },
    { title: 'Full Home Renovation', category: 'Home Additions', image: projFoyer, cls: styles.projectSpanCol },
  ];
  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <div className={`${styles.center} ${styles.reveal}`}>
          <span className={`${styles.eyebrow} ${styles.eyebrowCenter}`}>Featured Work</span>
          <h2 className={styles.sectionTitle}>Projects Built with Precision</h2>
          <p className={styles.sectionLead}>
            A look at the kind of transformations we deliver — kitchens, bathrooms, basements,
            decks and full home additions across South Jersey.
          </p>
        </div>
        <div className={styles.projectsGrid}>
          {items.map((p) => (
            <div key={p.title} className={`${styles.projectCard} ${p.cls}`}>
              <img src={p.image} alt={p.title} loading="lazy" />
              <div className={styles.projectOverlay}>
                <span className={styles.projectCat}>{p.category}</span>
                <span className={styles.projectName}>{p.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Why choose us — value cards on a dark navy backdrop. */
export function WhyChoose() {
  return (
    <section className={`${styles.section} ${styles.sectionDark}`}>
      <div className={styles.container}>
        <div className={`${styles.center} ${styles.reveal}`}>
          <span className={`${styles.eyebrow} ${styles.eyebrowCenter}`}>Why Carter Construction Group</span>
          <h2 className={styles.sectionTitle}>Built on Trust &amp; Quality</h2>
          <p className={styles.sectionLead} style={{ color: 'var(--text-light)' }}>
            Homeowners choose us for the details that matter — and come back because we deliver
            on every promise.
          </p>
        </div>
        <div className={styles.valuesGrid}>
          {values.map((v) => {
            const IconComp = Icon[v.icon as IconName];
            return (
              <div key={v.title} className={`${styles.valueCard} ${styles.reveal}`}>
                <div className={styles.valueIcon}>{IconComp ? <IconComp size={26} /> : null}</div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Elegant 4-step process timeline. */
export function Process() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="process">
      <div className={styles.container}>
        <div className={`${styles.center} ${styles.reveal}`}>
          <span className={`${styles.eyebrow} ${styles.eyebrowCenter}`}>How We Work</span>
          <h2 className={styles.sectionTitle}>A Simple, Transparent Process</h2>
          <p className={styles.sectionLead}>
            From first conversation to final walkthrough, we keep every step clear and on track.
          </p>
        </div>
        <div className={styles.processGrid}>
          <div className={styles.processLine} />
          {process.map((s) => (
            <div key={s.number} className={`${styles.processStep} ${styles.reveal}`}>
              <div className={styles.processNum}>{s.number}</div>
              <h3 className={styles.processTitle}>{s.title}</h3>
              <p className={styles.processDesc}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Real Google reviews on a dark backdrop with the verified rating badge. */
export function Reviews() {
  return (
    <section className={`${styles.section} ${styles.sectionDark}`} id="reviews">
      <div className={styles.container}>
        <div className={`${styles.reviewsHead} ${styles.reveal}`}>
          <div>
            <span className={styles.eyebrow}>Client Testimonials</span>
            <h2 className={styles.sectionTitle}>What Homeowners Say</h2>
          </div>
          <div className={styles.ratingBadge}>
            <div className={styles.ratingNum}>5.0</div>
            <div>
              <div className={styles.ratingStars}>★★★★★</div>
              <div className={styles.ratingLabel}>Verified Google Rating</div>
            </div>
          </div>
        </div>
        <div className={styles.reviewsGrid}>
          {reviews.map((r) => (
            <div key={r.name} className={`${styles.reviewCard} ${styles.reveal}`}>
              <div className={styles.reviewStars}>★★★★★</div>
              <p className={styles.reviewText}>{r.text}</p>
              <div className={styles.reviewFoot}>
                <div className={styles.reviewAvatar}>{r.name.charAt(0)}</div>
                <div>
                  <div className={styles.reviewName}>{r.name}</div>
                  {r.badge ? <div className={styles.reviewBadge}>{r.badge}</div> : null}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.reviewsFoot}>
          <a className={`${styles.btn} ${styles.btnGold}`} href={business.reviewsUrl} target="_blank" rel="noreferrer">
            Read More Google Reviews <Icon.arrow size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

/** Service area with an embedded Google map and area chips. */
export function ServiceArea() {
  const areas = ['Deptford', 'South Jersey', 'Woodbury', 'Sewell', 'Turnersville', 'West Deptford'];
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.areaGrid}>
          <div className={styles.reveal}>
            <span className={styles.eyebrow}>Service Area</span>
            <h2 className={styles.sectionTitle}>Proudly Serving South Jersey</h2>
            <p className={styles.sectionLead}>
              Based in Deptford, New Jersey, we serve homeowners throughout Deptford and the
              surrounding South Jersey communities.
            </p>
            <ul className={styles.areaList}>
              {areas.map((a) => (
                <li key={a} className={styles.areaChip}>
                  <Icon.pin size={16} /> {a}
                </li>
              ))}
            </ul>
          </div>
          <div className={`${styles.areaMap} ${styles.reveal}`}>
            <iframe title="Carter Construction Group service area map" src={business.embedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Accordion FAQ section. */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="faq">
      <div className={styles.container}>
        <div className={`${styles.center} ${styles.reveal}`}>
          <span className={`${styles.eyebrow} ${styles.eyebrowCenter}`}>Questions &amp; Answers</span>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        </div>
        <div className={styles.faqWrap}>
          {faqs.map((f, i) => (
            <div key={f.question} className={`${styles.faqItem} ${open === i ? styles.faqItemOpen : ''} ${styles.reveal}`}>
              <button className={styles.faqQ} onClick={() => setOpen(open === i ? null : i)}>
                {f.question}
                <span className={styles.faqIcon}>{open === i ? <Icon.minus size={16} /> : <Icon.plus size={16} />}</span>
              </button>
              <div className={styles.faqA}>
                <p className={styles.faqAText}>{f.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
