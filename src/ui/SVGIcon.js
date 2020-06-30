import React from 'react';
import PropTypes from 'prop-types';
import SVGInline from 'react-svg-inline';

import heart from '../../web/images/icons/heart.svg';
import menuLines from '../../web/images/icons/menu-lines.svg';
import search from '../../web/images/icons/search.svg';

import styles from './SVGIcon.css';

const iconMap = {
  heart,
  menuLines,
  search
};

const SVGIcon = ({ icon }) => (
  <SVGInline
    svg={ iconMap[icon] }
    component='div'
    className={styles.icon}
  />
);

SVGIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
};

SVGIcon.defaultProps = {
  className: '',
};

export default SVGIcon;
