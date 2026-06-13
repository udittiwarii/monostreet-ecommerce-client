import Container
    from "../../../components/ui/Container";

import useOrders
    from "../../../hooks/useOrders";

import OrderCard
    from "../../../components/order/OrderCard";
import { useNavigate } from "react-router-dom";



const OrdersPage = () => {

    const {
        orders,
        loading,
    } = useOrders();

    const navigate =
        useNavigate();

    if (loading) {

        return (

            <section
                className="
          min-h-screen

          flex
          items-center
          justify-center
        "
            >
                Loading...
            </section>
        );
    }

    return (

        <section
            className="
        min-h-screen

        pt-10
        pb-20

        bg-white
      "
        >


            <Container>
                <button
                    onClick={() => navigate("/")}
                    className="
          mb-6
          text-gray-500
          hover:text-black
        "
                >
                    ← Back
                </button>

                <div className="mb-12">

                    <p
                        className="
              uppercase
              tracking-[4px]

              text-xs

              text-gray-500
              mb-3
            "
                    >
                        MONOSTREET
                    </p>

                    <h1
                        className="
              text-5xl
            "
                        style={{
                            fontFamily:
                                "Satoshi-Bold",
                        }}
                    >
                        My Orders
                    </h1>

                </div>

                {
                    orders.length === 0 ? (

                        <div
                            className="
                border
                border-gray-200

                p-16

                text-center
              "
                        >

                            <h2
                                className="
                  text-3xl
                  mb-3
                "
                            >
                                No Orders Yet
                            </h2>

                            <p
                                className="
                  text-gray-500
                "
                            >
                                Start shopping to
                                see your orders.
                            </p>

                        </div>

                    ) : (

                        <div
                            className="
                flex
                flex-col
                gap-5
              "
                        >

                            {orders.map(
                                (order) => (

                                    <OrderCard
                                        key={order._id}
                                        order={order}
                                    />
                                ))}
                        </div>
                    )
                }

            </Container>

        </section>
    );
};

export default OrdersPage;