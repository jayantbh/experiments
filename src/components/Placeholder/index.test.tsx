import React from 'react';
import renderer from 'react-test-renderer';

import Placeholder from './';

it('Placeholder tree looks like how it should', () => {
  let props = { id: '1' };

  const component = renderer.create(<Placeholder {...props} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
