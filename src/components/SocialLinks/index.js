import React from 'react';
import propTypes from 'prop-types';

import SVGIcon from '../../ui/SVGIcon';

import css from './SocialLinks.css';

const SocialLinks = ({ socials }) => {
  return (
    <div className={css.social}>
      {
        socials.map((social, idx) => {
          return (
            <a key={idx} href={social.link}>
              <SVGIcon icon={social.name} />
            </a>
          );
        })
      }
    </div>
  );
};

SocialLinks.propTypes = {
  socials: propTypes.array,
};

export default SocialLinks;
