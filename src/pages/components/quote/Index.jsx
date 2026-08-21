import TextOpacity from '@src/components/animationComponents/textOpacity/Index';
import clsx from 'clsx';
import styles from '@src/pages/components/quote/styles/quote.module.scss';
import { useRef } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useStore } from '@src/store';

function Quote() {
  const [isLoading] = useStore(useShallow((state) => [state.isLoading]));

  const rootRef = useRef();
  const textRef = useRef();

  return (
    <section ref={rootRef} className={clsx(styles.root, 'layout-block-inner')}>
      <h3 ref={textRef} className={clsx(styles.text, 'h3')}>
        {!isLoading && (
          <TextOpacity textRef={textRef.current} trigger={rootRef.current}>
            &ldquo;AI does not replace developers, but developers who use AI will replace those who don&apos;t. The future belongs to those who build it.&rdquo;
          </TextOpacity>
        )}
        <div className={clsx(styles.attribution, 'p-l')}>Modern Software Wisdom &middot; 2026</div>
      </h3>
    </section>
  );
}

export default Quote;
