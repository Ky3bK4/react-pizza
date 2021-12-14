import React from 'react';
import classNames from 'classnames';

const Categories = React.memo(function Categories({
  activeCategory,
  categoryNames,
  onSelectCategory,
}) {



  return (
    <div className='categories'>
      <ul>
        <li
          onClick={() => onSelectCategory(null)}
          className={classNames({ active: null === activeCategory })}
        >
          Все
        </li>
        {categoryNames &&
          categoryNames.map((category, idx) => (
            <li
              key={`${category}_${idx}`}
              onClick={() => onSelectCategory(idx)}
              className={classNames({ active: idx === activeCategory })}
            >
              {category}
            </li>
          ))}
      </ul>
    </div>
  );
});


export default Categories;
