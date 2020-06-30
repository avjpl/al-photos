import React, { useState } from 'react';

import SVGIcon from '../../ui/SVGIcon';

import SideMenu from './SideMenu';

import css from './Menu.css';

const HambergerItem = () => {
  const [toggleMenu, setToggleMenu ] = useState(false);

  const handleClick = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <li
        onClick={handleClick}
        className={`${css.menu__item} ${css.menu__item_right}`}
      >
        <SVGIcon icon={'menuLines'} />
      </li>
      <SideMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    </>
  );
};

export default HambergerItem;
