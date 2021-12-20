import axios from 'axios';

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  const baseUrl = 'https://my-json-server.typicode.com/Ky3bK4/json-server';
  const filterCategory = category === null ? '' : `category=${category}`;

  dispatch(setLoaded(false));

  axios
    .get(`${baseUrl}/pizzas?${filterCategory}&_sort=${sortBy}`)
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
