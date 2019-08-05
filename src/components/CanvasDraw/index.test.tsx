import React from 'react';
import renderer from 'react-test-renderer';

import CanvasDraw from './';

it('CanvasDraw tree looks like how it should', () => {
  let props = { id: '1' };

  const component = renderer.create(<CanvasDraw {...props} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
