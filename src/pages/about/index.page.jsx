/* eslint-disable react/jsx-props-no-spreading */
import Hero from '@src/pages/about/components/hero/Hero';
import Overview from '@src/pages/about/components/overview/Overview';
import Services from '@src/pages/about/components/services/Services';
import Process from '@src/pages/about/components/process/Process';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'Arshdeep Singh Virdi - About',
  description: 'A summary of my background in Software Engineering, AI/ML development, and my professional journey.',
  keywords: ['Arshdeep Singh Virdi', 'About', 'Software Engineer', 'AI/ML Engineering', 'Boeing Apprentice'],
};
function Page() {
  return (
    <>
      <CustomHead {...seo} />
      <Hero />
      <Overview />
      <Services />
      <Process />
    </>
  );
}

export default Page;
