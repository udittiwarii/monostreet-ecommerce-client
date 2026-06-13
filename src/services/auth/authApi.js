import API from "../axios";

import {
  AUTH_ENDPOINTS,
} from "./authEndpoints";

// LOGIN
export const loginUser =
  async (formData) => {

    const response =
      await API.post(
        AUTH_ENDPOINTS.LOGIN,
        formData
      );

    return response.data;
};

// REGISTER
export const registerUser =
  async (formData) => {

    const response =
      await API.post(
        AUTH_ENDPOINTS.REGISTER,
        formData
      );

    return response.data;
};

// GET CURRENT USER
export const getCurrentUser =
  async () => {

    const response =
      await API.get(
        AUTH_ENDPOINTS.GET_ME
      );

    return response.data;
};

// LOGOUT
export const logoutUser =
  async () => {

    const response =
      await API.get(
        AUTH_ENDPOINTS.LOGOUT
      );

    return response.data;
};

// GET ADDRESSES
export const getAddresses =
  async () => {

    const response =
      await API.get(
        AUTH_ENDPOINTS.GET_ADDRESSES
      );

    return response.data;
};

// ADD ADDRESS
export const addAddress =
  async (formData) => {

    const response =
      await API.post(
        AUTH_ENDPOINTS.ADD_ADDRESS,
        formData
      );

    return response.data;
};

// DELETE ADDRESS
export const deleteAddress =
  async (addressId) => {

    const response =
      await API.delete(
        `${AUTH_ENDPOINTS.DELETE_ADDRESS}/${addressId}`
      );

    return response.data;
};