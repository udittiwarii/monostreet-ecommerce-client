import API from "../axios";

import {
  PRODUCT_ENDPOINTS,
} from "./productEndpoints";

// GET ALL PRODUCTS
export const getProducts =
  async (params = {}) => {

    const response =
      await API.get(

        PRODUCT_ENDPOINTS.GET_PRODUCTS,

        {
          params,
        }
      );

    return response.data;
  };

// GET SINGLE PRODUCT
export const getSingleProduct =
  async (id) => {

    const response =
      await API.get(

        `${PRODUCT_ENDPOINTS.GET_SINGLE_PRODUCT}/${id}`
      );

    return response.data;
  };

export const getProductsBulk =
  async (ids) => {

    const response =
      await API.post(
        PRODUCT_ENDPOINTS.POST_PRODUCTS_BULK,
        { ids }
      );

    return response.data;
  };
