import React from 'react';
import renderer from 'react-test-renderer';

import ClipPathRoute from './';

it('ClipPathRoute tree looks like how it should', () => {
  let props = { id: '1' };

  const component = renderer.create(<ClipPathRoute {...props} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
