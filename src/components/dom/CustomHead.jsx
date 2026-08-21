import NextHead from 'next/head';
import { NextSeo } from 'next-seo';
import PropTypes from 'prop-types';

const getSchema = () => ({
  '@context': 'http://schema.org',
  '@type': 'Person',
  name: 'Arshdeep Singh Virdi',
  jobTitle: 'AI Engineer & Software Developer',
  description: 'AI Engineer & Software Developer Portfolio. Graduated from SRM University (CGPA 9.74) and built enterprise software at Boeing.',
  email: 'mailto:arshdeepsingh92283@gmail.com',
  homeLocation: { '@type': 'Place', name: 'Bengaluru, India' },
  sameAs: ['https://www.linkedin.com/in/arshdeep-singh-virdi-a72a3a259/', 'https://github.com/ArshdeepSinghVirdi'],
});

function CustomHead({ title = '', description, keywords }) {
  return (
    <>
      <NextHead>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta httpEquiv="x-dns-prefetch-control" content="off" />
        <meta name="robots" content={process.env.NODE_ENV !== 'development' ? 'index,follow' : 'noindex,nofollow'} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="keywords" content={keywords && keywords.length ? keywords.join(',') : keywords} />
        <meta name="author" content="Arshdeep Singh Virdi" />
        <meta name="referrer" content="no-referrer" />
        <meta name="format-detection" content="telephone=no" />

        <title>{title}</title>

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={description} />

        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#f0f4f1" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getSchema()) }} />
      </NextHead>
      <NextSeo title={title} description={description} />
    </>
  );
}

CustomHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
};

CustomHead.defaultProps = { keywords: [] };

export default CustomHead;
