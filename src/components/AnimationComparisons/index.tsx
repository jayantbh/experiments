import cls from 'classnames';
import { motion } from 'framer-motion';
import React, { useCallback, useState } from 'react';
import css from './styles.module.scss';

const ELEMENTS_PER_TEST = 200;

const AnimationComparisons = () => {
  const [animated1, setAnimated1] = useState(false);
  const [animated2, setAnimated2] = useState(false);
  const [animated3, setAnimated3] = useState(false);
  const toggleAnimated1 = useCallback(() => setAnimated1(!animated1), [animated1]);
  const toggleAnimated2 = useCallback(() => setAnimated2(!animated2), [animated2]);
  const toggleAnimated3 = useCallback(() => setAnimated3(!animated3), [animated3]);

  return (
    <div className={css.container}>
      <div className={css.title}>A basic, and possibly unrealistic experiment based on three approaches.</div>
      <div className={css.actions}>
        <div className={cls(css.trigger, animated1 && css.triggered)} onClick={toggleAnimated1}>
          CSS Property: <pre>right</pre>
        </div>
        <div className={cls(css.trigger, animated2 && css.triggered)} onClick={toggleAnimated2}>
          CSS Transforms
        </div>
        <div className={cls(css.trigger, animated3 && css.triggered)} onClick={toggleAnimated3}>
          Framer Motion
        </div>
      </div>
      <div className={css['animatables-wrapper']}>
        <div className={css['element-wrappers']}>
          {animated1 &&
            Array(ELEMENTS_PER_TEST)
              .fill(0)
              .map((_, i) => <div key={i} className={cls(css.animatable, css['item-1'], css.animated)} />)}
        </div>
        <div className={css['element-wrappers']}>
          {animated2 &&
            Array(ELEMENTS_PER_TEST)
              .fill(0)
              .map((_, i) => <div key={i} className={cls(css.animatable, css['item-2'], css.animated)} />)}
        </div>
        <div className={css['element-wrappers']}>
          {animated3 &&
            Array(ELEMENTS_PER_TEST)
              .fill(0)
              .map((_, i) => (
                <motion.div
                  key={i}
                  className={cls(css.animatable, css['item-3'])}
                  initial={{ x: 0 }}
                  animate={{
                    // Read this from CSS in browser
                    x: 'calc(100vw - 398px)',
                  }}
                  transition={{
                    ease: 'easeOut',
                    duration: 0.25,
                    loop: Infinity,
                  }}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default AnimationComparisons;
