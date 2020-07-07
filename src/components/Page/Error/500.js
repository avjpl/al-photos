import React from 'react';

import css from './500.css';

const Error500 = () => {

  return (
    <div className={css.error500}>
      <h1 className={css.error500__heading}>Oops!</h1>
      <h2 className={css.error500__subheading}>500 - Our server is on a break</h2>
    </div>
  );
};

export default Error500;
