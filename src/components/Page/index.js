import React from 'react';
import propTypes from 'prop-types';

import styles from './Page.css';

const Page = ({ children }) => {
  return (
    <div className={styles.page}>
      { children }
    </div>
  );
};

Page.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node
  ]).isRequired
};

export default Page;
