/* eslint-disable no-return-assign */
/* eslint-disable no-nested-ternary */
import AppearByWords from '@src/components/animationComponents/appearByWords/Index';
import Image from 'next/image';
import clsx from 'clsx';
import projects from '@src/constants/projects';
import { gsap } from 'gsap';
import styles from '@src/pages/components/experience/styles/experience.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';
import { useIsomorphicLayoutEffect } from '@src/hooks/useIsomorphicLayoutEffect';
import { useRef } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useStore } from '@src/store';
import { useWindowSize } from '@darkroom.engineering/hamo';

function Experience() {
  const isMobile = useIsMobile();
  const windowSize = useWindowSize();
  const [isLoading] = useStore(useShallow((state) => [state.isLoading]));

  const rootRef = useRef();
  const cardRefs = useRef([]);

  const setupCardAnimations = () => {
    const ctx = gsap.context(() => {
      if (!isLoading) {
        cardRefs.current.slice(0, -1).forEach((cardRef, index) => {
          gsap.set(cardRef, { yPercent: 0 });
          gsap
            .timeline({
              scrollTrigger: {
                id: `experienceRef-${index}`,
                trigger: rootRef.current,
                start: `top+=${windowSize.height * index}`,
                end: () => `+=${windowSize.height}`,
                scrub: true,
                scroller: document?.querySelector('main'),
                invalidateOnRefresh: true,
              },
            })
            .to(cardRef, {
              yPercent: 100,
              stagger: 1,
            });
        });
      }
    });

    return ctx;
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = setupCardAnimations();
    return () => ctx.kill();
  }, [isLoading, windowSize.height]);

  return (
    <>
      <section className={clsx(styles.titleContainer, 'layout-block-inner')}>
        <h1 className={clsx(styles.title, 'h1')}>
          <AppearByWords>Projects</AppearByWords>
        </h1>
      </section>
      <section ref={rootRef} className={clsx(styles.root, 'layout-block-inner')}>
        <div className={styles.innerContainer}>
          {projects.map((project, index) => (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" key={project.id} className={styles.card} style={{ textDecoration: 'none', display: 'block', pointerEvents: 'all' }}>
              <div
                style={
                  !isMobile
                    ? {
                        height: index === projects.length - 1 ? '200svh' : `${200 + 100 * index}svh`,
                        top: index === 0 ? '0px' : '-100svh',
                      }
                    : {
                        height: index === projects.length - 1 ? '124svh' : `${200 + 100 * index}svh`,
                        top: index === 0 ? '0px' : '-62svh',
                      }
                }
                className={styles.projectsWrap}
              >
                <div className={clsx(styles.container, 'layout-grid-inner')}>
                  <div className={styles.projectsDetails}>
                    <h3 className={clsx(styles.text, styles.company, 'h3')}>{project.title}</h3>
                    <div className={clsx(styles.text, styles.location, 'p-x')} style={{ textDecoration: 'underline' }}>
                      {project.liveLink.includes('github.com') ? 'Github Link →' : 'Project Link →'}
                    </div>
                    <div className={clsx(styles.text, styles.desc, 'p-l')}>{project.desc[0]}</div>
                  </div>
                  <div className={styles.imageContainer}>
                    <Image sizes="50vw" src={project.img} fill alt={`${project.title} artwork`} style={{ objectFit: 'cover' }} />
                  </div>
                </div>
              </div>
              <div ref={(el) => (cardRefs.current[index] = el)} className={styles.canvas}>
                <Image
                  priority={index === 0}
                  loading={index === 0 ? undefined : 'lazy'}
                  sizes="100vw"
                  className={index === 0 ? styles.firstCard : index === projects.length - 1 ? styles.lastCard : undefined}
                  src={project.img}
                  fill
                  alt=""
                  aria-hidden
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export default Experience;
