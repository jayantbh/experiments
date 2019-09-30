import ArrowBackRounded from '@material-ui/icons/ArrowBackRounded';
import cls from 'classnames';
import { useSharedElementAnimation } from 'components/SharedElementTransitions/hooks/use-animation';
import { ironmanAvatar, spidermanAvatar, thorAvatar } from 'components/SharedElementTransitions/image-data';
import React, { cloneElement, ReactElement, useEffect, useState } from 'react';
import { HashRouter, NavLink, Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import css from './styles.module.scss';

const data = [
  {
    name: 'Tony Stark',
    status: 'Dead',
    bio: 'Billionaire, Genius, Playboy, Philanthropist',
    image: ironmanAvatar,
  },
  {
    name: 'Thor Odinson',
    status: 'Alive',
    bio: 'Son of Odin, Ex-King of Asgard',
    image: thorAvatar,
  },
  {
    name: 'Peter Parker',
    status: 'Alive',
    bio: 'School-kid from Queens',
    image: spidermanAvatar,
  },
];

const SharedElement = ({ id, children }: { id: string; children: ReactElement }) => {
  useSharedElementAnimation(id);
  return cloneElement(children, { id });
};

const AvatarListItem = ({ av, i }: { av: typeof data[0]; i: number }) => (
  <li>
    <NavLink to={`/avenger/${i}`} className={cls(css['avenger-item'], css[`avenger-item--${av.status.toLowerCase()}`])}>
      <SharedElement id={`entity--${i}`}>
        <img src={av.image} alt={av.name} className={css['avenger-avatar']} />
      </SharedElement>
      <div className={css['avenger-title']}>
        <div className={css['avenger-name']}>{av.name}</div>
        <div className={cls(css['avenger-status'], css[`avenger-status--${av.status.toLowerCase()}`])}>{av.status}</div>
      </div>
      <div className={css['avenger-bio']}>{av.bio}</div>
    </NavLink>
  </li>
);

const AvatarList = () => (
  <>
    <div className={css['help-text']}>Click any item</div>
    <ul className={css['avatar-list']}>
      {data.map((av, i) => (
        <AvatarListItem key={i} av={av} i={i} />
      ))}
    </ul>
  </>
);

const AvengerAvatar = ({ match }: RouteComponentProps<{ id?: string }>) => {
  if (!match.params.id) return <span>Error!</span>;

  const id = parseInt(match.params.id, 10);
  const av = data[id];
  return (
    <div className={css['avatar-wrapper']}>
      <SharedElement id={`entity--${id}`}>
        <img src={av.image} alt={av.name} className={css['avatar-preview-image']} />
      </SharedElement>
      <NavLink to={`/avenger/${id}`} className={css['back-button']}>
        <ArrowBackRounded />
        <div>Details</div>
      </NavLink>
    </div>
  );
};

const AvengerDetail = ({ match }: RouteComponentProps<{ id?: string }>) => {
  if (!match.params.id) return <span>Error!</span>;

  const id = parseInt(match.params.id, 10);
  const av = data[id];
  return (
    <>
      <div className={css['help-text']}>Click avatar</div>
      <div className={cls(css['avenger-card'], css[`avenger-card--${av.status.toLowerCase()}`])}>
        <NavLink to={`/avenger/${id}/avatar`}>
          <SharedElement id={`entity--${id}`}>
            <img id={`entity--${id}`} src={av.image} alt={av.name} className={css['detail-avatar']} />
          </SharedElement>
        </NavLink>
        <div className={css['detail-name']}>{av.name}</div>
        <div className={css['detail-status']}>{av.status}</div>
        <div className={css['detail-bio']}>{av.bio}</div>
      </div>
      <NavLink to={'/'} className={css['back-button']}>
        <ArrowBackRounded />
        <div>List</div>
      </NavLink>
    </>
  );
};

const SharedElementTransitions = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <></>;
  return (
    <div className={css.container}>
      <HashRouter>
        <div className={css['fixed-container']}>
          <Switch>
            <Route exact={true} path={'/'} component={AvatarList} />
            <Route exact={true} path={'/avenger/:id'} component={AvengerDetail} />
            <Route path={'/avenger/:id/avatar'} component={AvengerAvatar} />
            <Redirect to={'/'} />
          </Switch>
          <div className={cls(css['help-text'], css['help-text--bottom'])}>
            <div>This uses some trickery to work as flawlessly as it does.</div>
            <div>Code not recommended for production use without testing.</div>
            <div>This is an "experiment" after all.</div>
          </div>
        </div>
      </HashRouter>
    </div>
  );
};

export default SharedElementTransitions;
