import React, { useEffect, useRef } from 'react';
import imagesloaded from 'imagesloaded';
import Isotope from 'isotope-layout';
import 'isotope-packery';

import Page from '../';
import FilterButtons from './FilterButtons';
import Image from './Image';
import { data, categories } from '../../../../data/assets.json';

import css from './gallery.css';

const Gallery = () => {
  const el = useRef(null);
  const iso = useRef(null);

  useEffect(() => {
    imagesloaded(el.current, () => {
      iso.current = new Isotope(el.current, {
        layoutMode: 'packery',
        itemSelector: '.grid-item',
        percentPosition: true,
        packery: {
          columnWidth: '.grid-sizer',
        }
      });
    });
  });

  const onFilter = evt => {
    const filterValue = evt.target.dataset.filter;
    iso.current.arrange({ filter: filterValue });
  };

  return (
    <Page>
      <FilterButtons {...{ categories, onFilter }} />
      <div className={`${css.gallery}`} ref={el}>
        <div className='grid-sizer'></div>
        {
          data.map((imageMap, idx) => {
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
