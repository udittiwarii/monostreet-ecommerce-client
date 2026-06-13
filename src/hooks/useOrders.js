import { useEffect, useState } from "react";

import { getMyOrders }
  from "./../services/orders/orderApi";

const useOrders = () => {

  const [orders, setOrders] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const fetchOrders =
    async () => {

        console.log("Fetching orders...");
      try {

        const data =
          await getMyOrders();

        console.log("Orders fetched:", data);

        setOrders(
          data.orders || []
        );

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);
      }
    };

  useEffect(() => {

    fetchOrders();

  }, []);

  return {
    orders,
    loading,
    refetch: fetchOrders,
  };
};

export default useOrders;