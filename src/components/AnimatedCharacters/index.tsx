import Layout from 'components/Layout';
import React from 'react';
import { Line } from './lib';
import './styles.module.scss';

const AnimatedCharacters = () => (
	<Layout>
		<div styleName='container'>
			<Line text='ANIMATED' font='Ink Free' staggerDuration={300}/>
			<br/>
			<Line text='LETTERS' font='Ink Free' staggerDuration={300} delay={300 * 5}/>
		</div>
	</Layout>
);

export default AnimatedCharacters;
