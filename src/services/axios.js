import axios from "axios";

const API = axios.create({

  withCredentials: true,
});

// AUTO REFRESH TOKEN
API.interceptors.response.use(

  (response) => response,

  async (error) => {

    const originalRequest =
      error.config;

    // TOKEN EXPIRED
    if (

      error.response?.status === 401

      && !originalRequest._retry
    ) {

      originalRequest._retry = true;

      try {

        // REFRESH TOKEN
        await axios.post(

          `${import.meta.env.VITE_AUTH_SERVICE}/api/auth/refresh`,

          {},

          {
            withCredentials: true,
          }
        );

        // RETRY ORIGINAL REQUEST
        return API(originalRequest);

      } catch (refreshError) {

        return Promise.reject(
          refreshError
        );
      }
    }

    return Promise.reject(error);
  }
);

export default API;