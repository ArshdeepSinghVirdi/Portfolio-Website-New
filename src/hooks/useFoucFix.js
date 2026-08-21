/* eslint-disable no-shadow */
import { useEffect } from 'react';

function useFoucFix() {
  useEffect(() => {
    let stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"][data-n-p]')).map((element) => ({
      element,
      href: element.getAttribute('href'),
    }));

    stylesheets.forEach(({ element }) => element.removeAttribute('data-n-p'));

    const hrefs = [];

    const mutationHandler = (mutations) => {
      const entries = mutations
        .filter(({ target }) => target.nodeName === 'STYLE' && target.hasAttribute('data-n-href'))
        .map(({ target }) => ({
          element: target,
          href: target.getAttribute('data-n-href'),
        }));

      entries.forEach(({ element, href }) => {
        const exists = hrefs.includes(href);

        if (exists) {
          element.remove();
        } else {
          element.setAttribute('data-fouc-fix-n-href', href);
          element.removeAttribute('data-n-href');
          hrefs.push(href);
        }
      });

      stylesheets = stylesheets.reduce((entries, entry) => {
        const { element, href } = entry;
        const exists = hrefs.includes(href);

        if (exists) {
          element.remove();
        } else {
          entries.push(entry);
        }

        return entries;
      }, []);
    };

    const observer = new MutationObserver(mutationHandler);

    observer.observe(document.head, {
      subtree: true,
      attributeFilter: ['media'],
    });

    return () => observer.disconnect();
  }, []);
}
export default useFoucFix;
