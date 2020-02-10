import React from 'react';
import renderer from 'react-test-renderer';

import TopFacingCube from './';

it('TopFacingCube tree looks like how it should', () => {
  let props = { id: '1' };

  const component = renderer.create(<TopFacingCube {...props} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
