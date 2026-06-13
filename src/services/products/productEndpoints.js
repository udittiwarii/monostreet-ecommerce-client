const PRODUCT_BASE_URL =
  import.meta.env
    .VITE_PRODUCT_SERVICE;

export const PRODUCT_ENDPOINTS = {

  // PRODUCTS
  GET_PRODUCTS:
    `${PRODUCT_BASE_URL}/api/products`,

  GET_SINGLE_PRODUCT:
    `${PRODUCT_BASE_URL}/api/products`,

  POST_PRODUCTS_BULK:
    `${PRODUCT_BASE_URL}/api/products/bulk`
};