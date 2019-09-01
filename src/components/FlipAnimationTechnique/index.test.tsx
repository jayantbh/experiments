import React from 'react';
import renderer from 'react-test-renderer';

import FlipAnimationTechnique from './';

it('FlipAnimationTechnique tree looks like how it should', () => {
  let props = { id: '1' };

  const component = renderer.create(<FlipAnimationTechnique {...props} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
