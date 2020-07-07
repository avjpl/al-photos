import React from 'react';
import propTypes from 'prop-types';

import Menu from '../Menu';
import SocialLinks from '../SocialLinks';

import css from './Page.css';

const socials = [
  { name: 'instagram', link: 'https://www.instagram.com/avjpl'},
  { name: 'flickr', link: 'https://www.flickr.com/photos/avjpl'},
];

const Page = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <Menu>
            <Menu.LogoItem />
            <Menu.NavLinkItem to={'gallery'} />
            <Menu.NavLinkItem to={'about'} />
            <Menu.NavLinkItem to={'contact'} />
            <Menu.HambergerItem />
          </Menu>
        </nav>
      </header>

      <div className={css.page}>
        { children }
      </div>

      <footer>
        <SocialLinks socials={socials} />
      </footer>
    </>
  );
};

Page.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired
};

export default Page;
