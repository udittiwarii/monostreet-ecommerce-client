import API from "../axios";

import {
  CART_ENDPOINTS,
} from "./cartEndpoints";


// GET CART
export const getCart =
  async () => {

    const response =
      await API.get(
        CART_ENDPOINTS.GET_CART
      );

    return response.data;
  };


// ADD ITEM
export const addItemToCart =
  async (
    productId,
    quantity = 1
  ) => {

    const response =
      await API.post(

        CART_ENDPOINTS.ADD_ITEM,

        {
          productId,
          quantity,
        }
      );

    return response.data;
  };


// UPDATE ITEM
export const updateCartItem =
  async (
    productId,
    quantity
  ) => {

    const response =
      await API.patch(

        `${CART_ENDPOINTS.UPDATE_ITEM}/${productId}`,

        {
          quantity,
        }
      );

    return response.data;
  };


// REMOVE ITEM
export const removeCartItem =
  async (
    productId
  ) => {

    const response =
      await API.delete(

        `${CART_ENDPOINTS.DELETE_ITEM}/${productId}`
      );

    return response.data;
  };


// CLEAR CART
export const clearCart =
  async () => {

    const response =
      await API.delete(

        CART_ENDPOINTS.CLEAR_CART
      );

    return response.data;
  };