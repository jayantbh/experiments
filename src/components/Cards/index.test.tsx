import React from 'react';
import renderer from 'react-test-renderer';

import Cards from './';

it('Cards tree looks like how it should', () => {
  const props = { id: '1' };

  const component = renderer.create(<Cards {...props} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
