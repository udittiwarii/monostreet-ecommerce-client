import {
  useEffect,
  useState,
} from "react";

import {
  getProducts,
} from "../services/products/productApi";

const useProducts = (
  params = {}
) => {

  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  useEffect(() => {

    const fetchProducts =
      async () => {

        try {

          setLoading(true);

          const data =
            await getProducts(
              params
            );

          setProducts(
            data.products
            || data
          );

        } catch (err) {

          setError(err);

        } finally {

          setLoading(false);
        }
      };

    fetchProducts();

  }, []);

  return {

    products,

    loading,

    error,
  };
};

export default useProducts;