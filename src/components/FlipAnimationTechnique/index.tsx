import cls from 'classnames';
import React, { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
import { HashRouter, NavLink, Redirect, Route, RouteProps, Switch } from 'react-router-dom';

import { useAnimation } from 'components/FlipAnimationTechnique/hooks/use-animation';
import { useChildAwareAnimation } from 'components/FlipAnimationTechnique/hooks/use-child-aware-animation';
import css from './styles.module.scss';

const before: CSSProperties = {
  height: '100px',
  width: '100px',
  left: '200px',
};

const after: CSSProperties = {
  height: '200px',
  width: '200px',
  left: '-200px',
};

const FlipAnimationTechnique1 = () => {
  const elementRef = useRef(null as null | HTMLDivElement);
  const [animated, setAnimated] = useState(false);
  const toggleAnimation = useCallback(() => setAnimated(!animated), [animated]);
  useAnimation(elementRef);

  return (
    <div className={css.container} onClick={toggleAnimation}>
      <h2>Without nested content</h2>
      <div className={css['element-wrapper']}>
        <div ref={elementRef} className={css['element-common-styles']} style={animated ? before : after} />
      </div>
      <div className={css['element-wrapper']}>
        <div className={cls(css['element-common-styles'], css['non-flip'])} style={animated ? before : after} />
      </div>
    </div>
  );
};

const FlipAnimationTechnique2 = () => {
  const elementRef = useRef(null as null | HTMLDivElement);
  const [animated, setAnimated] = useState(false);
  const toggleAnimation = useCallback(() => setAnimated(!animated), [animated]);
  useAnimation(elementRef);

  return (
    <div className={css.container} onClick={toggleAnimation}>
      <h2>Without child transitions handling</h2>
      <div className={css['element-wrapper']}>
        <div ref={elementRef} className={css['element-common-styles']} style={animated ? before : after}>
          FLIP
        </div>
      </div>
      <div className={css['element-wrapper']}>
        <div className={cls(css['element-common-styles'], css['non-flip'])} style={animated ? before : after}>
          Non-FLIP
        </div>
      </div>
    </div>
  );
};

const FlipAnimationTechnique3 = () => {
  const elementRef = useRef(null as null | HTMLDivElement);
  const [animated, setAnimated] = useState(false);
  const toggleAnimation = useCallback(() => setAnimated(!animated), [animated]);
  useChildAwareAnimation(elementRef, animated);

  return (
    <div className={css.container} onClick={toggleAnimation}>
      <h2>With child transitions handling</h2>
      <div className={css['element-wrapper']}>
        <div ref={elementRef} className={css['element-common-styles']} style={animated ? before : after}>
          <div>FLIP</div>
        </div>
      </div>
      <div className={css['element-wrapper']}>
        <div className={cls(css['element-common-styles'], css['non-flip'])} style={animated ? before : after}>
          <div>Non-FLIP</div>
        </div>
      </div>
    </div>
  );
};

const FlipAnimationTechniqueRouter = ({ location }: RouteProps) => {
  return (
    <Switch location={location}>
      <Route path={'/route-1'} component={FlipAnimationTechnique1} />
      <Route path={'/route-2'} component={FlipAnimationTechnique2} />
      <Route path={'/route-3'} component={FlipAnimationTechnique3} />

      <Redirect to={'/route-1'} />
    </Switch>
  );
};

const FlipAnimationTechniqueParent = () => {
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
            FLIP w/o Children
          </NavLink>
          <NavLink to={'/route-2'} activeClassName={css.active}>
            FLIP w/o Children Handled
          </NavLink>
          <NavLink to={'/route-3'} activeClassName={css.active}>
            FLIP w/ Children Handled
          </NavLink>
        </div>
        <h2>Click to toggle animation state</h2>
        <Route path={'/'} component={FlipAnimationTechniqueRouter} />
      </div>
    </HashRouter>
  );
};

export default FlipAnimationTechniqueParent;
