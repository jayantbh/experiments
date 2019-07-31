import React from 'react';
import renderer from 'react-test-renderer';
import { StoreContext } from 'redux-react-hook';

import createStore from 'reducer';
import Layout from './';

it('Layout tree looks like how it should', () => {
  const props = {};

  const component = renderer.create((
    <StoreContext.Provider value={createStore()}>
      <Layout {...props}>Hello World</Layout>
    </StoreContext.Provider>
  ));
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
