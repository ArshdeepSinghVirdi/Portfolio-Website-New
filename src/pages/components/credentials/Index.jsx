import { education, skills, experience } from '@src/constants/credentials';

import AppearByWords from '@src/components/animationComponents/appearByWords/Index';
import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import clsx from 'clsx';
import styles from '@src/pages/components/credentials/styles/credentials.module.scss';

function Credentials() {
  return (
    <section className={clsx(styles.root, 'layout-grid-inner')}>
      <h1 className={clsx(styles.sectionTitle, 'h1')}>
        <AppearByWords>Credentials</AppearByWords>
      </h1>

      {/* Column 1: Experience */}
      <div className={styles.column}>
        <AppearTitle>
          <h6 className={clsx('h6', 'bold', styles.columnTitle)}>Experience</h6>
        </AppearTitle>
        {experience.map((job) => (
          <div key={job.company} className={styles.item} style={{ marginBottom: '24px' }}>
            <AppearTitle>
              <div className={clsx('p-l', 'bold')}>{job.company}</div>
              <div className={clsx('p-x', 'medium')} style={{ opacity: 0.8 }}>
                {job.role}
              </div>
              <div className={clsx('p-x', styles.meta)}>
                {job.period} · {job.location}
              </div>
              <div className={clsx('p-x')} style={{ opacity: 0.85, marginTop: '6px', fontSize: '14px', lineHeight: '1.4' }}>
                {job.desc}
              </div>
            </AppearTitle>
          </div>
        ))}
      </div>

      {/* Column 2: Education */}
      <div className={styles.column}>
        <AppearTitle>
          <h6 className={clsx('h6', 'bold', styles.columnTitle)}>Education</h6>
        </AppearTitle>
        {education.map((item) => (
          <div key={item.school} className={styles.item}>
            <AppearTitle>
              <div className={clsx('p-l', 'medium')}>{item.school}</div>
              <div className={clsx('p-x', styles.meta)}>{item.award}</div>
              <div className={clsx('p-x', styles.meta)}>{item.period}</div>
            </AppearTitle>
          </div>
        ))}
      </div>

      {/* Column 3: Skills */}
      <div className={styles.column}>
        <AppearTitle>
          <h6 className={clsx('h6', 'bold', styles.columnTitle)}>Skills</h6>
        </AppearTitle>
        <div className={styles.tags}>
          {skills.map((skill) => (
            <div key={skill} className={styles.tag}>
              <AppearTitle>
                <div className="p-x" style={{ fontSize: '13px' }}>
                  {skill}
                </div>
              </AppearTitle>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Credentials;
