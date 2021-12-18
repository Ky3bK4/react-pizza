const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((acc, obj) => acc + obj.price, 0);
const flatObj = (obj) => {
  return Object.values(obj)
    .map((o) => o.items)
    .flat();
};

const getObjectOfPriceAndCount = (arr) => ({
  totalPrice: getTotalPrice(arr),
  totalCount: arr.length,
});

const deleteItemFromCart = (state, id) => {
  const newItems = { ...state.items };

  const newTotalPrice = state.totalPrice - newItems[id].totalPrice;
  const newTotalCount = state.totalCount - newItems[id].items.length;

  delete newItems[id];

  return {
    ...state,
    items: newItems,
    totalCount: newTotalCount,
    totalPrice: newTotalPrice,
  };
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const currentPizzas = state.items[action.payload.id]
        ? [...state.items[action.payload.id].items, action.payload]
        : [action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzas,
          totalPrice: getTotalPrice(currentPizzas),
        },
      };

      const arrPizzas = flatObj(newItems);

      return {
        ...state,
        items: newItems,
        ...getObjectOfPriceAndCount(arrPizzas),
      };
    }

    case 'REMOVE_CART_ITEM': {
      // const newItems = { ...state.items };
      //
      // const newTotalPrice =
      //   state.totalPrice - newItems[action.payload].totalPrice;
      // const newTotalCount =
      //   state.totalCount - newItems[action.payload].items.length;
      //
      // delete newItems[action.payload];
      //
      // return {
      //   ...state,
      //   items: newItems,
      //   totalCount: newTotalCount,
      //   totalPrice: newTotalPrice,
      // };

      return deleteItemFromCart(state, action.payload);
    }

    case 'PLUS_CART_ITEM': {
      const arrPizzasById = state.items[action.payload].items;

      const newArrPizzasById = [
        ...arrPizzasById,
        arrPizzasById[arrPizzasById.length - 1],
      ];

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newArrPizzasById,
          totalPrice: getTotalPrice(newArrPizzasById),
        },
      };

      const arrPizzas = flatObj(newItems);

      return {
        ...state,
        items: newItems,
        ...getObjectOfPriceAndCount(arrPizzas),
      };
    }

    case 'MINUS_CART_ITEM': {
      const copyArrPizzasById = [...state.items[action.payload].items];

      if (copyArrPizzasById.length === 1) {
        return deleteItemFromCart(state, action.payload);
      }

      copyArrPizzasById.pop();
      const newArrPizzasById = [...copyArrPizzasById];

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newArrPizzasById,
          totalPrice: getTotalPrice(newArrPizzasById),
        },
      };

      const arrPizzas = flatObj(newItems);

      return {
        ...state,
        items: newItems,
        ...getObjectOfPriceAndCount(arrPizzas),
      };
    }

    case 'CLEAR_CART':
      return {
        ...state,
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };

    default:
      return state;
  }
};

export default cartReducer;
