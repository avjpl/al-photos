import React from 'react';
import propTypes from 'prop-types';

import css from './gallery.css';

const FilterButtons = ({ categories, onFilter }) => {
  let categoriesList = ['*', ...categories];
  return (
    <div className={css.filterGroup}>
      {
        categoriesList.map((category) => {
          const filterName = category === '*' ? '*' : category;
          return (
            <button key={filterName} className={`${css.filterButton}`} onClick={onFilter} data-filter={`.${filterName.toLowerCase()}`}>
              {filterName.replace('*', 'All')}
            </button>
          );
        })
      }
    </div>
  );
};

FilterButtons.propTypes = {
  categories: propTypes.array.isRequired,
  onFilter: propTypes.func.isRequired,
};

export default FilterButtons;
