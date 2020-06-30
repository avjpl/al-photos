import React from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import styles from './SideMenu.css';

const sideMenuEl = document.getElementById('side-menu');

const classes = {
  enter: styles['sideMenu-enter'],
  enterActive: styles['sideMenu-enter-active'],
  enterDone: styles['sideMenu-enter-active'],
  // exit: styles['sideMenu-exit'],
  // exitActive: styles['sideMenu-exit-active'],
  // exitDone: styles['sideMenu-exit-active'],
}

const SideMenu = ({ setToggleMenu, toggleMenu }) => {
  return createPortal(
    <CSSTransition
      in={toggleMenu}
      timeout={300}
      classNames={{ ...classes }}
    >
      <div className={styles.sideMenu}>
        <h1>Side Menu</h1>
        <button onClick={() => setToggleMenu(!toggleMenu)}>Close</button>
      </div>
    </CSSTransition>,
    sideMenuEl
  );
};

export default SideMenu;
