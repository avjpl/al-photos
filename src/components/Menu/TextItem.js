import React from 'react';
import propTypes from 'prop-types';

import css from './Menu.css';

const TextItem = ({ text }) => {
  return (
    <li className={css.menu__item}>{text}</li>
  );
};

TextItem.propTypes = {
  text: propTypes.string
};

export default TextItem;
