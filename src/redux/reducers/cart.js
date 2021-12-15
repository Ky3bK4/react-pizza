const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const newItems = {
        ...state.items,
        [action.payload.id]:
          state.items[action.payload.id]
          ? [
              ...state.items[action.payload.id],
              action.payload
            ]
          : [
              action.payload
            ]
      }

      return {
        ...state, items: newItems
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
