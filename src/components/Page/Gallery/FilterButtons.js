import React from 'react';
import propTypes from 'prop-types';

import css from './gallery.css';

const FilterButtons = ({ categories, onFilter }) => {
  let categoriesList = ['*', ...categories];
  return (
    <div className={css.filterGroup}>
      {
        categoriesList.map(category => {
          const filterProps = (category) => ({
            'data-filter': (category =>  category.includes('*') ? '*' : `.${category?.toLowerCase()}`)(category)
          });
          const label = category.replace('*', 'All');

          return (
            <button key={label} className={`${css.filterButton}`} onClick={onFilter} {...filterProps(category)}>
              {label}
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
