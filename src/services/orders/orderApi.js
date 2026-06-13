import API from "./../axios";
import {
  ORDER_ENDPOINTS,
} from "./orderEndpoints";


// CREATE ORDER FROM CART
export const createOrderFromCart =
  async () => {

    const response =
      await API.post(
        ORDER_ENDPOINTS.CREATE_FROM_CART
      );

    return response.data;
  };


// BUY NOW
export const createBuyNowOrder =
  async ({
    productId,
    quantity,
  }) => {

    const response =
      await API.post(

        ORDER_ENDPOINTS.BUY_NOW,

        {
          productId,
          quantity,
        }
      );

    return response.data;
  };


// GET MY ORDERS
export const getMyOrders =
  async (
    page = 1,
    limit = 10
  ) => {

    const response =
      await API.get(

        `${ORDER_ENDPOINTS.MY_ORDER}`
      );

      console.log("API Response for getMyOrders:", response);

    return response.data;
  };


// GET ORDER DETAILS
export const getOrderById =
  async (orderId) => {

    const response =
      await API.get(

        `${ORDER_ENDPOINTS.ORDER_DETAILS}/${orderId}`
      );

    return response.data;
  };


// UPDATE ADDRESS
export const updateOrderAddress =
  async (
    orderId,
    shippingAddress
  ) => {

    const response =
      await API.patch(

        `${ORDER_ENDPOINTS.UPDATE_ADDRESS}/${orderId}/address`,

        {
          shippingAddress,
        }
      );

    return response.data;
  };


// CANCEL ORDER
export const cancelOrder =
  async (orderId) => {

    const response =
      await API.post(

        `${ORDER_ENDPOINTS.CANCEL_ORDER}/${orderId}/cancel`
      );

    return response.data;
  };