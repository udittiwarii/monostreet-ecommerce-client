const CART_BASE_URL =
  import.meta.env.VITE_CART_SERVICE;

export const CART_ENDPOINTS = {

  GET_CART:
    `${CART_BASE_URL}/api/cart`,

  ADD_ITEM:
    `${CART_BASE_URL}/api/cart/items`,

  UPDATE_ITEM:
    `${CART_BASE_URL}/api/cart/items`,

  DELETE_ITEM:
    `${CART_BASE_URL}/api/cart/items`,

  CLEAR_CART:
    `${CART_BASE_URL}/api/cart`,
};