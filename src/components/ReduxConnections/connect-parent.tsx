import pluralize from 'pluralize';
import React, { useCallback, useRef } from 'react';
import { connect, Provider } from 'react-redux';

import { defaultState, mapAllItemsToProps, mapDispatchToProps, store } from './redux-stuff';

import css from './styles.module.scss';

let renders = 0;

type InternalItemProps = ReturnType<typeof mapDispatchToProps> & {
  index: number;
  item: typeof defaultState.items[0];
};

const Item = ({ index, item, updateItem }: InternalItemProps) => {
  const itemRef = useRef(item);
  // tslint:disable-next-line
  console.log('%cRenders:', 'color: teal; font-weight: bold;', ++renders, item, 'Same ref:', item === itemRef.current);
  itemRef.current = item;

  const updateHandler = useCallback(() => updateItem(index), [index, updateItem]);
  return (
    <li onClick={updateHandler}>
      <span>{item.id}</span>
      <span>{!!item.updates && `${item.updates} ${pluralize('update', item.updates)}`}</span>
    </li>
  );
};

type InternalAppProps = ReturnType<typeof mapAllItemsToProps> & ReturnType<typeof mapDispatchToProps>;

const InternalApp = ({ items, updateItem }: InternalAppProps) => {
  const ItemCreator = useCallback((item, i) => <Item key={i} index={i} item={item} updateItem={updateItem} />, [
    updateItem,
  ]);

  return (
    <div className={css['parent-demo']}>
      <ul>{items.map(ItemCreator)}</ul>
    </div>
  );
};

const App = connect(
  mapAllItemsToProps,
  mapDispatchToProps
)(InternalApp);

const ConnectParent = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ConnectParent;
