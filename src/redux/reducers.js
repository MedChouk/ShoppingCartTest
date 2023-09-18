// src/redux/reducers.js

const initialState = {
    cart: [],
    coupon: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        // Add a product to the cart
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      case 'UPDATE_CART_ITEM_QUANTITY':
        // Update the quantity of a cart item
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.productId
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };
      case 'REMOVE_FROM_CART':
        // Remove a product from the cart
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
        };
      case 'APPLY_COUPON':
        // Apply a coupon
        return {
          ...state,
          coupon: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  