// reducers.js
const initialState = {
    cart: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_CART_ITEM_PRICE':
        return {
          ...state,
          cart: state.cart.map(item => {
            if (item.id === action.payload.itemId) {
              return {
                ...item,
                price: action.payload.newPrice,
              };
            }
            return item;
          }),
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  