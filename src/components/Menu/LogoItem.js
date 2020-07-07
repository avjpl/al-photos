import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import css from './Menu.css';

const LogoItem = ({ to }) => {
  return (
    <li className={`${css.menu__item} ${css.menu__item__logo}`}>
      <Link to={to}>AL</Link>
    </li>
  );
};

LogoItem.defaultProps = {
  to: '/',
};

LogoItem.propTypes = {
  to: propTypes.string,
};

export default LogoItem;
