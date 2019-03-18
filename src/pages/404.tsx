import Layout from 'components/Layout';
import React from 'react';
import './index.module.scss';

const NotFoundPage = () => {
	return (
		<Layout>
			<div styleName='container padded'>
				<div styleName='brand'>404</div>
				<div styleName='brand-l2'>maybe the sidebar can help?</div>
			</div>
		</Layout>
	);
};

export default NotFoundPage;
