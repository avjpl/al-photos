import React, { Children, cloneElement } from 'react';
import propTypes from 'prop-types';

import HambergerItem from './HambergerItem';
import NavLinkItem from './NavLinkItem';
import TextItem from './TextItem';
import LogoItem from './LogoItem';

import css from './Menu.css';

const Menu = ({ children }) => (
  <ul className={css.menu}>
    {
      Children.map(children, child => cloneElement(child))
    }
  </ul>
);

Menu.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node
  ]).isRequired
};

Menu.HambergerItem = HambergerItem;
Menu.NavLinkItem = NavLinkItem;
Menu.TextItem = TextItem;
Menu.LogoItem = LogoItem;

export default Menu;
