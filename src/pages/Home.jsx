import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories, PizzaBlock, Sort, PizzaLoader } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addToCart } from '../redux/actions/cart';

const categoryNames = [
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
];

const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'name' },
];

const Home = () => {
  const { items, isLoaded, sortBy, category, cartItems } = useSelector(
    ({ pizzas, filters, cart }) => ({
      items: pizzas.items,
      isLoaded: pizzas.isLoaded,
      sortBy: filters.sortBy,
      category: filters.category,
      cartItems: cart.items,
    })
  );

  const dispatch = useDispatch();

  const onSelectCategory = useCallback(
    (idx) => {
      dispatch(setCategory(idx));
    },
    [dispatch]
  );

  const onSelectSortType = useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [dispatch]
  );

  const onAddToCart = (obj) => {
    dispatch(addToCart(obj));
  };

  //Fetch pizzas
  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [dispatch, sortBy, category]);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          activeCategory={category}
          categoryNames={categoryNames}
          onSelectCategory={onSelectCategory}
        />
        <Sort
          sortItems={sortItems}
          activeSortType={sortBy}
          onSelectSortType={onSelectSortType}
        />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoaded
          ? items.map((item) => (
              <PizzaBlock
                key={item.id}
                onAddToCart={onAddToCart}
                countAddedPizzas={
                  cartItems[item.id] ? cartItems[item.id].items.length : null
                }
                {...item}
              />
            ))
          : Array(12)
              .fill('')
              .map((item, idx) => (
                <PizzaLoader key={idx} className={'pizza-block'} />
              ))}
      </div>
    </div>
  );
};

export default Home;
