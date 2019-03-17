import React from 'react';
import renderer from 'react-test-renderer';
import { StoreContext } from 'redux-react-hook';

import createStore from 'reducer';
import Sidebar from './';

it('Sidebar tree looks like how it should', () => {
	const props = {};

	const component = renderer.create((
		<StoreContext.Provider value={createStore()}>
			<Sidebar {...props}/>
		</StoreContext.Provider>
	));
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
