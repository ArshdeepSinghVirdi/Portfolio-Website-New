import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import clsx from 'clsx';
import styles from '@src/pages/about/components/overview/styles/overview.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';

function Overview() {
  const isMobile = useIsMobile();

  return (
    <section className={clsx(styles.root, 'layout-grid-inner')}>
      <div className={styles.title}>
        {isMobile ? (
          <AppearTitle key="mobile-queto">
            <h3 className="h3">
              I believe <span className="medium">code is an art form</span>. By combining <span className="medium">systems design</span> with AI/ML, we build{' '}
              <span className="medium">extraordinary</span> solutions.
            </h3>
          </AppearTitle>
        ) : (
          <AppearTitle key="desktop-queto">
            <h3 className="h3">
              I believe <span className="medium">code is an art form</span>. By combining precision <span className="medium">systems design</span> with AI/ML, we can solve the world&apos;s most{' '}
              <span className="medium">complex challenges</span>.
            </h3>
          </AppearTitle>
        )}
      </div>
      <div className={clsx(styles.text, 'p-l', styles.myStory)}>
        <AppearTitle>
          <span>My story</span>
        </AppearTitle>
      </div>
      <div className={styles.desc}>
        {!isMobile ? (
          <AppearTitle key="desktop-overview">
            <h6 className="h6">
              Hello! I am Arshdeep Singh, a passionate Software Development Engineer with a strong foundation in computer science, artificial intelligence, and full-stack development. I completed my
              Bachelor of Technology (B.Tech.) in Computer Science and Engineering from SRM Institute of Science and Technology, graduating with an outstanding CGPA of 9.74.
            </h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>
              Recently, I completed my Software Development Apprenticeship at Boeing and transitioned into a full-time Software Engineer role. During my time there, I have contributed to building scalable, high-quality software solutions while expanding my enterprise engineering expertise. Prior to this, I gained valuable industry experience through web development internships at Eshway and Whizz Communications, designing innovative and user-centric applications.
            </h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>
              Driven by commitment, passion, and innovation, I enjoy solving complex problems. I have successfully designed and built projects like FinEdge, VigilVault, AI Gallery App, GPT-Teacher,
              and DocFlow. As a lifelong learner, my goal is to leverage software engineering and AI to build impactful products while contributing to meaningful innovation.
            </h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Arshdeep Singh Virdi</h6>
          </AppearTitle>
        ) : (
          <AppearTitle key="mobile-overview">
            <h6 className="h6">
              Hello! I am Arshdeep Singh, a passionate Software Development Engineer specializing in AI/ML and full-stack development. I graduated with a B.Tech in CSE Core from SRM Institute of
              Science and Technology with a CGPA of 9.74.
            </h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>
              Recently, I transitioned to a full-time Software Engineer at Boeing after completing my SDE Apprenticeship, where I built scalable enterprise solutions. Previously, I completed internships at Eshway and Whizz
              Communications, designing innovative applications.
            </h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>
              I have successfully designed and built projects like FinEdge, VigilVault, AI Gallery App, GPT-Teacher, and DocFlow, and my goal is to leverage software engineering and AI to build
              impactful products.
            </h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Arshdeep Singh Virdi</h6>
          </AppearTitle>
        )}
      </div>
    </section>
  );
}
export default Overview;
