import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import Link from 'next/link';
import LinkText from '@src/components/animationComponents/linkText/Index';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import footerLinks from '@src/components/dom/navbar/constants/footerLinks';
import gsap from 'gsap';
import menuLinks from '@src/components/dom/navbar/constants/menuLinks';
import styles from '@src/components/dom/styles/footer.module.scss';
import { useIsomorphicLayoutEffect } from '@src/hooks/useIsomorphicLayoutEffect';
import { useRef } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useStore } from '@src/store';
import { useWindowSize } from '@darkroom.engineering/hamo';

const Time = dynamic(() => import('@src/components/dom/Time'), { ssr: false });
const GoTop = dynamic(() => import('@src/components/dom/GoTop'), { ssr: false });

const EMAIL = 'arshdeepsingh92283@gmail.com';

function Footer() {
  const footerRef = useRef();
  const [isLoading] = useStore(useShallow((state) => [state.isLoading]));
  const windowSize = useWindowSize();

  useIsomorphicLayoutEffect(() => {
    if (!isLoading) {
      const setupFooterAnimation = () => {
        gsap.set(footerRef.current, { height: 'auto' });
        const allSections = document.querySelectorAll('#mainContainer section');
        if (allSections.length > 1) {
          const lastSection = allSections[allSections.length - 2];
          if (footerRef.current.offsetHeight <= windowSize.height) {
            gsap.set(footerRef.current, { yPercent: -50 });
            const uncover = gsap.timeline({ paused: true });
            gsap.set(footerRef.current, { height: '100.5svh' });
            uncover.to(footerRef.current, { yPercent: 0, ease: 'none' });
            ScrollTrigger.create({
              id: 'footerTrigger',
              trigger: lastSection,
              start: 'bottom bottom',
              end: '+=100%',
              animation: uncover,
              scrub: true,
              scroller: document?.querySelector('main'),
            });
          } else {
            gsap.set(footerRef.current, { transform: 'translate(0%, 0%)', height: 'auto' });
          }
        }
      };

      setupFooterAnimation(footerRef, windowSize);
    }

    return () => {
      const footerTrigger = ScrollTrigger.getById('footerTrigger');
      if (footerTrigger) {
        footerTrigger.kill();
      }
    };
  }, [isLoading, windowSize.height]);

  const sitemapLinks = menuLinks.filter((l) => l.href);

  return (
    <section ref={footerRef} className={clsx(styles.root, 'layout-block-inner')} role="contentinfo">
      <div className={styles.inner}>
        <div className={styles.topColumns}>
          {/* Sitemap */}
          <div className={styles.column}>
            <AppearTitle isFooter>
              <h6 className={clsx(styles.columnTitle, 'p-x')}>Sitemap</h6>
              {sitemapLinks.map((link) => (
                <div key={link.title} className={styles.linkTextContainer}>
                  <LinkText className={styles.linkText} title={link.title} href={link.href}>
                    <span className="footer">{link.title}</span>
                  </LinkText>
                </div>
              ))}
            </AppearTitle>
          </div>

          {/* Follow me */}
          <div className={styles.column}>
            <AppearTitle isFooter>
              <h6 className={clsx(styles.columnTitle, 'p-x')}>Follow me</h6>
              {footerLinks.map((link) => (
                <div key={link.title} className={styles.linkTextContainer}>
                  <LinkText target className={styles.linkText} title={link.title} href={link.href}>
                    <span className="footer">{link.title}</span>
                  </LinkText>
                </div>
              ))}
            </AppearTitle>
          </div>

          {/* Work With Me */}
          <div className={clsx(styles.column, styles.workColumn)}>
            <AppearTitle isFooter>
              <h6 className={clsx(styles.ctaLabel, 'p-x')}>Work With Me:</h6>
              <Link aria-label="Send email" scroll={false} href={`mailto:${EMAIL}`} className={styles.ctaEmail}>
                <span>{EMAIL}</span>
              </Link>
            </AppearTitle>
          </div>
        </div>

        {/* ─── meta row ─── */}
        <div className={styles.metaRow}>
          <div className={styles.metaLeft}>
            <AppearTitle isFooter>
              <div className={clsx(styles.metaText, 'p-xs')}>Based in Bengaluru, India</div>
              <div className={clsx(styles.metaText, 'p-xs')}>
                Current Time: <Time />
              </div>
            </AppearTitle>
          </div>
          <div className={styles.metaCenter}>
            <AppearTitle isFooter>
              <div className={clsx(styles.metaLabel, 'p-xs')}>Availability</div>
              <div className={clsx(styles.metaText, 'p-xs')}>Currently available for projects</div>
            </AppearTitle>
          </div>
          <div className={styles.metaRight}>
            <AppearTitle isFooter>
              <div className={clsx(styles.metaText, 'p-xs')}>© 2026 · Arshdeep Singh Virdi</div>
              <div className={clsx(styles.metaText, 'p-xs')}>All Rights Reserved</div>
            </AppearTitle>
          </div>
        </div>

        {/* ─── giant name ─── */}
        <div className={styles.giantNameWrapper}>
          <span className={styles.giantName}>ARSHDEEP</span>
          <div className={styles.goTopOverlay}>
            <GoTop />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
