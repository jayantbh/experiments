import React from 'react';

import ConnectChildren from 'components/ReduxConnections/connect-children';
import ConnectParent from 'components/ReduxConnections/connect-parent';
import css from './styles.module.scss';

const ReduxConnections = () => {
  return (
    <div className={css.container}>
      <h1>React-Redux experiment to show two connect approaches</h1>
      <h2>Check console logs to see updates triggered for each approach</h2>
      <div className={css['two-items']}>
        <div className={css['example-container']}>
          <h3>Only the parent is connected, no children are</h3>
          <ConnectParent />
        </div>
        <div className={css['example-container']}>
          <h3>The parent and each children are connected</h3>
          <ConnectChildren />
        </div>
      </div>
    </div>
  );
};

export default ReduxConnections;
