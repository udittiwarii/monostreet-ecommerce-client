const AUTH_BASE_URL =
  import.meta.env.VITE_AUTH_SERVICE;

export const AUTH_ENDPOINTS = {

  // AUTH
  LOGIN:
    `${AUTH_BASE_URL}/api/auth/login`,

  REGISTER:
    `${AUTH_BASE_URL}/api/auth/register`,

  REFRESH_TOKEN:
    `${AUTH_BASE_URL}/api/auth/refresh`,

  LOGOUT:
    `${AUTH_BASE_URL}/api/auth/logout`,

  // USER
  GET_ME:
    `${AUTH_BASE_URL}/api/auth/me`,

  // ADDRESSES
  GET_ADDRESSES:
    `${AUTH_BASE_URL}/api/auth/users/me/addresses`,

  ADD_ADDRESS:
    `${AUTH_BASE_URL}/api/auth/users/me/addresses`,

  DELETE_ADDRESS:
    `${AUTH_BASE_URL}/api/auth/users/me/addresses`,
};