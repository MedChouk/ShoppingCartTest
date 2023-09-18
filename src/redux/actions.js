// src/redux/actions.js

export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
  });

  export const updateCartItemQuantity = (productId, quantity) => ({
    type: 'UPDATE_CART_ITEM_QUANTITY',
    payload: { productId, quantity },
  });
  
  export const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    payload: productId,
  });
  
  export const applyCoupon = (couponCode) => ({
    type: 'APPLY_COUPON',
    payload: couponCode,
  });
  
  // Add other actions if needed
  