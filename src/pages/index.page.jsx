/* eslint-disable react/jsx-props-no-spreading */
import Home from '@src/pages/components/home/Index';
import About from '@src/pages/components/about/Index';
import Quote from '@src/pages/components/quote/Index';
import Experience from '@src/pages/components/experience/Index';
import Credentials from '@src/pages/components/credentials/Index';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'Arshdeep Singh Virdi - Portfolio',
  description: 'AI Engineer & Software Developer Portfolio. Graduated from SRM University (CGPA 9.74) and built enterprise software at Boeing.',
  keywords: ['Arshdeep Singh Virdi', 'Portfolio', 'Software Development Apprentice', 'AI Engineer', 'SRM University', 'Boeing'],
};

function Page() {
  return (
    <>
      <CustomHead {...seo} />
      <Home />
      <About />
      <Quote />
      <Experience />
      <Credentials />
    </>
  );
}

export default Page;
