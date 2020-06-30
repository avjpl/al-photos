import React, { Children, cloneElement } from 'react';
import propTypes from 'prop-types';

import HambergerItem from './HambergerItem';
import TextItem from './TextItem';
import LogoItem from './LogoItem';

import css from './Menu.css';

const Menu = ({ children }) => {
  return (
    <ul className={css.menu}>
      {
        Children.map(children, child => cloneElement(child))
      }
    </ul>
  );
};

Menu.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node
  ]).isRequired
};

Menu.HambergerItem = HambergerItem;
Menu.TextItem = TextItem;
Menu.LogoItem = LogoItem;

export default Menu;
