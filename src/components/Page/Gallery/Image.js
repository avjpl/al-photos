import React from 'react';
import propTypes from 'prop-types';

import css from './gallery.css';

const Image = imageMap => {
  return (
    <div className={`grid-item ${css.picture__container} ${imageMap.small.category.toLowerCase()}`}>
      <picture className={css.picture}>
        <source srcSet={`${imageMap.large.src}`} media={'(min-width: 52em)'} />
        <img
          className={css.img}
          src={`${imageMap.medium.src}`}
        />
      </picture>
    </div>
  );
};

Image.propTypes = {
  imageMap: propTypes.array.isRequired,
};

export default Image;
