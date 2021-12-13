import React from 'react';
import { Categories, PizzaBlock, Sort } from '../components';

const Home = ({ items }) => {
  const chooseCategory = (cat) => {
    console.log(cat);
  };

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
          onClick={chooseCategory}
        />
        <Sort
          items={[
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'alphabet' },
          ]}
        />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {items && items.map((item) => <PizzaBlock key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default Home;
