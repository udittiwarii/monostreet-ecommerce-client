const ORDER_BASE_URL =
  import.meta.env.VITE_ORDER_SERVICE;

export const ORDER_ENDPOINTS = {

  CREATE_FROM_CART:
    `${ORDER_BASE_URL}/api/order/from-cart`,

  BUY_NOW:
    `${ORDER_BASE_URL}/api/order/buy-now`,

  MY_ORDER:
    `${ORDER_BASE_URL}/api/order/me`,

  ORDER_DETAILS:
    `${ORDER_BASE_URL}/api/order`,

  UPDATE_ADDRESS:
    `${ORDER_BASE_URL}/api/order`,

  CANCEL_ORDER:
    `${ORDER_BASE_URL}/api/order`,
};