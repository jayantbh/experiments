import Layout from 'components/Layout';
import React from 'react';
import './index.module.scss';

const IndexPage = () => {
  return (
    <Layout>
      <div styleName='container'>
        <div styleName='brand'>Jayant's</div>
        <div styleName='brand-l2'>experiments</div>
      </div>
    </Layout>
  );
};

export default IndexPage;
