import Sidebar from 'components/Sidebar';
import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import css from './styles.module.scss';

interface Props {
	children: ReactNode;
}

const Layout = ({ children }: Props) => (
	<>
		<Helmet title={process.env.GATSBY_PROJECT_NAME}/>
		<Sidebar/>
		<div className={css.container}>
			{children}
		</div>
	</>
);

export default Layout;
