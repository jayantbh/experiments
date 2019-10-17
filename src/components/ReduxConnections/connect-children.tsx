import pluralize from 'pluralize';
import React, { useCallback, useRef } from 'react';
import { connect, Provider } from 'react-redux';

import {
  mapAllItemsToProps,
  mapDispatchToProps,
  mapSingleItemToProps,
  store,
} from 'components/ReduxConnections/redux-stuff';

import css from './styles.module.scss';

let renders = 0;

type InternalItemProps = ReturnType<typeof mapSingleItemToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    index: number;
  };

const InternalItem = ({ index, item, updateItem }: InternalItemProps) => {
  const itemRef = useRef(item);
  // tslint:disable-next-line
  console.log('%cRenders:', 'color: coral; font-weight: bold;', ++renders, item, 'Same ref:', item === itemRef.current);
  itemRef.current = item;

  const updateHandler = useCallback(() => updateItem(index), [index, updateItem]);

  return (
    <li onClick={updateHandler}>
      <span>{item.id}</span>
      <span>{!!item.updates && `${item.updates} ${pluralize('update', item.updates)}`}</span>
    </li>
  );
};

const Item = connect(
  mapSingleItemToProps,
  mapDispatchToProps
)(InternalItem);

const InternalApp = ({ items }: ReturnType<typeof mapAllItemsToProps>) => {
  const ItemCreator = useCallback((item, i) => <Item key={i} index={i} />, []);
  return (
    <div className={css['children-demo']}>
      <ul>{items.map(ItemCreator)}</ul>
    </div>
  );
};

const App = connect(mapAllItemsToProps)(InternalApp);

const ConnectChildren = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ConnectChildren;
