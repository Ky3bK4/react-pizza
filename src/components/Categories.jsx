import React, { useState } from 'react';
import classNames from 'classnames';

const Categories = ({ items, onClick }) => {
  const [activeItem, setActiveItem] = useState(null);

  const changeCategory = (category, idx) => {
    if (category === 'Все') {
      setActiveItem(null);
    } else {
      setActiveItem(idx);
    }
    onClick(category);
  };

  return (
    <div className='categories'>
      <ul>
        <li
          onClick={() => changeCategory('Все', null)}
          className={classNames({ active: null === activeItem })}
        >
          Все
        </li>
        { items &&
          items.map((item, idx) => (
          <li
            key={`${item}_${idx}`}
            onClick={() => changeCategory(item, idx)}
            className={classNames({ active: idx === activeItem })}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
