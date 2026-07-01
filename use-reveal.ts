import { useEffect } from 'react';

/**
 * Attaches an IntersectionObserver that adds a `visible` class to every
 * element carrying the given `revealClass` when it scrolls into view.
 * Enables the site-wide fade-in-on-scroll animation.
 *
 * @param revealClass the CSS module class applied to reveal targets
 * @param visibleClass the CSS module class toggled on when visible
 */
export function useReveal(revealClass: string, visibleClass: string): void {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(`.${revealClass}`));
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(visibleClass);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [revealClass, visibleClass]);
}
