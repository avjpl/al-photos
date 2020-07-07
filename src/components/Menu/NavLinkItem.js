import React from 'react';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import css from './Menu.css';

const NavLinkItem = ({ to }) => {
  return (
    <li className={css.menu__item}>  
      <NavLink to={`/${to}`}>{to}</NavLink>
    </li>
  );
};

NavLinkItem.propTypes = {
  text: propTypes.string,
  to: propTypes.string,
};

export default NavLinkItem;
