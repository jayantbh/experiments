import React from 'react';
import renderer from 'react-test-renderer';

import AnimationComparisons from './';

it('AnimationComparisons tree looks like how it should', () => {
  let props = { id: '1' };

  const component = renderer.create(<AnimationComparisons {...props} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
