import axios from 'axios';

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  const filterCategory = category === null ? '' : `category=${category}`;

  dispatch(setLoaded(false));
  axios
    .get(`http://localhost:3001/pizzas?${filterCategory}&_sort=${sortBy}`)
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const setPizzas = (payload) => ({
  type: 'SET_PIZZAS',
  payload,
});
