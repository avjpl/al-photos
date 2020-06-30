import React from 'react';

import Page from '../';
import data from '../../../../data/assets.json';

import css from './gallery.css';

const Image = (imageMap) => {
  return (
    <picture className={css.picture}>
      <source srcSet={`${imageMap.large.src}`} media={'(min-width: 52em)'} />
      <img
        className={css.img}
        src={`${imageMap.medium.src}`}
      />
    </picture>
  );
};

const Gallery = () => {
  return (
    <Page>
      <div className={css.gallery}>
        {
          data.data.map((imageMap, idx) => {
            return (
              <Image key={idx} {...imageMap} />
            );
          })
        }
      </div>
    </Page>
  );
};

export default Gallery;
