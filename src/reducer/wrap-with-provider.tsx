import React, { ReactNode } from 'react';
import { StoreContext } from 'redux-react-hook';

import createStore from './index';

export default ({ element }: { element: ReactNode }) => {
  const store = createStore();
  return (<StoreContext.Provider value={store}>{element}</StoreContext.Provider>);
};
