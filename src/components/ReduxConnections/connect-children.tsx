import pluralize from 'pluralize';
import React, { useCallback, useMemo, useRef } from 'react';
import { connect, Provider } from 'react-redux';

import {
  mapDispatchToProps,
  mapItemCountToProps,
  mapSingleItemToProps,
  store,
} from 'components/ReduxConnections/redux-stuff';
import { rangeMap } from 'utils/array';

import css from './styles.module.scss';

const logStyles = 'color: coral; font-weight: bold;';

type InternalItemProps = ReturnType<typeof mapSingleItemToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    index: number;
  };

const InternalItem = ({ index, item, updateItem }: InternalItemProps) => {
  const itemRef = useRef(item);
  const renders = useRef(0);

  // tslint:disable-next-line
  console.log('%cRenders:', logStyles, ++renders.current, item, 'Same ref:', item === itemRef.current);
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

const InternalApp = ({ itemCount }: ReturnType<typeof mapItemCountToProps>) => {
  const renders = useRef(0);

  // tslint:disable-next-line
  console.log('%cRenders for Parent:', logStyles, ++renders.current);

  const ItemCreator = useCallback((_, i) => <Item key={i} index={i} />, []);
  const items = useMemo(() => rangeMap(itemCount, ItemCreator), [itemCount, ItemCreator]);

  return (
    <div className={css['children-demo']}>
      <ul>{items}</ul>
    </div>
  );
};

const App = connect(mapItemCountToProps)(InternalApp);

const ConnectChildren = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ConnectChildren;
