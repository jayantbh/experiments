import cls from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { HashRouter, NavLink, Redirect, Route, RouteProps, Switch } from 'react-router-dom';

import { ColorShuffle } from 'components/ClipPathRoute/colors-component';
import { useInterval } from 'hooks/use-interval';
import css from './styles.module.scss';

const ClipPathRoute = ({ location }: RouteProps) => {
  return (
    <AnimatePresence initial={false} exitBeforeEnter={false}>
      <motion.div
        key={location ? location.pathname : 'no-location'}
        className={css['routes-wrapper']}
        initial={{ clipPath: 'circle(calc(0% - 80px) at top center)', zIndex: 0 }}
        animate={{ clipPath: 'circle(calc(100% - 80px) at top center)', zIndex: 1 }}
        exit={{ clipPath: 'circle(calc(100.1% - 80px) at top center)', zIndex: 0 }}
        transition={{
          duration: 1,
          ease: 'easeOut',
        }}
      >
        <Switch location={location}>
          <Route path={'/route-1'} component={RouteContent1} />
          <Route path={'/route-2'} component={RouteContent2} />
          <Route path={'/route-3'} component={RouteContent3} />

          <Redirect to={'/route-1'} />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
};

const RouteContent1 = () => (
  <div className={cls(css['route-container'], css['route-1'])}>
    <h1>Route 1</h1>
    <h2>This is an experiment in clip-path based route animations.</h2>
    <div className={css.shapes}>
      <div className={cls(css.shape, css.triangle)} />
      <div className={cls(css.shape, css.square)} />
      <div className={cls(css.shape, css.pentagon)} />
    </div>
    <h2>You'll see that there's a small amount of content here.</h2>
  </div>
);
const RouteContent2 = () => (
  <div className={cls(css['route-container'], css['route-2'])}>
    <h1>Route 2</h1>
    <h2>This screen has some animated stuff to simulate a lot of different things going on.</h2>
    <div>
      <ColorShuffle />
    </div>
    <h2>This is a basic color tiles shuffle example taken from Framer Motion's examples.</h2>
    <p>
      This is a good example about why you should not use this approach when transitioning in/out of sites that already
      have a lot of stuff going on.
    </p>
    <p>This is best suited for static content views.</p>
  </div>
);
const RouteContent3 = () => {
  const [memory, setMemory] = useState(window.performance.memory);

  useInterval(() => memory && setMemory(window.performance.memory), 1000, []);

  return (
    <div className={cls(css['route-container'], css['route-3'])}>
      <h1>Route 3</h1>
      <h2>This is just another page to showcase some content.</h2>
      {memory ? (
        <div>
          <div className={css['memory-bar']}>
            <div style={{ width: `${(memory.usedJSHeapSize / memory.totalJSHeapSize) * 100}%` }} />
          </div>
          <div>
            {(memory.usedJSHeapSize / 10e6).toFixed(2)} MBs / {(memory.totalJSHeapSize / 10e6).toFixed(2)} MBs
          </div>
          <div>This is the amount of heap memory used, out of the available heap memory.</div>
        </div>
      ) : (
        <div>
          Your browser doesn't support <code>window.performance.memory</code>. If it did, you'd see current memory usage
          here right now.
        </div>
      )}
    </div>
  );
};

const ClipPathRouteParent = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <></>;
  return (
    <HashRouter>
      <div className={css.container}>
        <div className={css.navigation}>
          <NavLink to={'/route-1'} activeClassName={css.active}>
            Go to 1
          </NavLink>
          <NavLink to={'/route-2'} activeClassName={css.active}>
            Go to 2
          </NavLink>
          <NavLink to={'/route-3'} activeClassName={css.active}>
            Go to 3
          </NavLink>
        </div>
        <Route path={'/'} component={ClipPathRoute} />
      </div>
    </HashRouter>
  );
};

export default ClipPathRouteParent;
