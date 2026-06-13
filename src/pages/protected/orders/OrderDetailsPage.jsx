import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

import Container from "../../../components/ui/Container";

import {
  getOrderById,
  cancelOrder,
} from "../../../services/orders/orderApi";

const STATUS_STEPS = [
  "PENDING",
  "CONFIRMED",
  "SHIPPED",
  "OUTOFDELEVERY",
  "DELIVERED",
];

const statusColors = {
  PENDING:
    "bg-yellow-100 text-yellow-700",

  CONFIRMED:
    "bg-green-100 text-green-700",

  SHIPPED:
    "bg-blue-100 text-blue-700",

  OUTOFDELEVERY:
    "bg-purple-100 text-purple-700",

  DELIVERED:
    "bg-black text-white",

  CANCELLED:
    "bg-red-100 text-red-700",
};

const OrderDetailsPage = () => {

  const { orderId } =
    useParams();

  const navigate =
    useNavigate();

  const [order, setOrder] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [cancelLoading,
    setCancelLoading] =
    useState(false);

  useEffect(() => {

    const fetchOrder =
      async () => {

        try {

          const data =
            await getOrderById(
              orderId
            );

          setOrder(data);

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);
        }
      };

    fetchOrder();

  }, [orderId]);

  const handleCancelOrder =
    async () => {

      try {

        setCancelLoading(true);

        await cancelOrder(
          orderId
        );

        setOrder(
          prev => ({
            ...prev,
            status:
              "CANCELLED",
          })
        );

      } catch (error) {

        console.log(error);

      } finally {

        setCancelLoading(false);
      }
    };

  if (loading) {

    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
        "
      >
        Loading Order...
      </div>
    );
  }

  if (!order) {

    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
        "
      >
        Order Not Found
      </div>
    );
  }

  return (
    <section
      className="
    min-h-screen
    bg-[#fafafa]
    pt-10
    pb-20
  "
    >

      <Container>

        {/* HEADER */}
        <div className="mb-12">

          <button
            onClick={() => navigate("/orders")}
            className="
          mb-6
          text-gray-500
          hover:text-black
        "
          >
            ← Back
          </button>

          <div
            className="
          flex
          flex-col
          lg:flex-row
          justify-between
          gap-6
        "
          >

            <div>

              <p
                className="
              text-xs
              uppercase
              tracking-[4px]
              text-gray-500
              mb-3
            "
                style={{
                  fontFamily:
                    "Montserrat",
                }}
              >
                Order
              </p>

              <h1
                className="
              text-4xl
              lg:text-5xl
            "
                style={{
                  fontFamily:
                    "Satoshi-Bold",
                }}
              >
                {order.orderName}
              </h1>

              <p className="mt-4 text-gray-500">
                #{order.orderId}
              </p>

            </div>

            <div>

              <span
                className={`
              px-5
              py-3
              rounded-full
              text-sm
              font-medium

              ${statusColors[
                  order.status
                  ]}
            `}
              >
                {order.status}
              </span>

            </div>
          </div>
        </div>

        {/* SUCCESS MESSAGE */}
        {order.paymentStatus ===
          "SUCCESS" && (

            <div
              className="
            bg-green-50
            border
            border-green-200
            p-6
            mb-10
          "
            >

              <h3
                className="
              text-green-700
              text-xl
              mb-2
            "
              >
                ✓ Payment Successful
              </h3>

              <p className="text-green-600">
                Your order has been confirmed.
              </p>

            </div>
          )}

        {/* TIMELINE */}
        <div
          className="
        bg-white
        border
        border-gray-200
        p-8
        mb-10
      "
        >

          <h2
            className="
          text-2xl
          mb-8
        "
            style={{
              fontFamily:
                "Satoshi-Bold",
            }}
          >
            Order Tracking
          </h2>

          <div className="space-y-8">

            {STATUS_STEPS.map(
              (
                step,
                index
              ) => {

                const current =
                  STATUS_STEPS.indexOf(
                    order.status
                  );

                const completed =
                  index <= current;

                return (

                  <div
                    key={step}
                    className="
                  flex
                  gap-5
                "
                  >

                    <div
                      className="
                    flex
                    flex-col
                    items-center
                  "
                    >

                      <div
                        className={`
                      w-5
                      h-5
                      rounded-full

                      ${completed

                            ? "bg-black"

                            : "bg-gray-300"
                          }
                    `}
                      />

                      {index !==
                        STATUS_STEPS.length -
                        1 && (

                          <div
                            className={`
                          w-[2px]
                          h-12

                          ${completed

                                ? "bg-black"

                                : "bg-gray-300"
                              }
                        `}
                          />
                        )}
                    </div>

                    <div>

                      <h3
                        className="
                      font-medium
                    "
                      >
                        {step}
                      </h3>

                    </div>

                  </div>
                );
              })}
          </div>
        </div>

        {/* INVOICE */}
        <div
          className="
    relative

    w-full
    max-w-5xl
    mx-auto

    bg-[#fffef8]

    border
    border-gray-300

    shadow-[0_20px_60px_rgba(0,0,0,0.08)]

    overflow-hidden
  "
        >

          {/* WATERMARK */}
          <div
            className="
      absolute
      inset-0

      flex
      items-center
      justify-center

      pointer-events-none

      opacity-[0.03]
    "
          >
            <h1
              className="
        text-[80px]
        sm:text-[140px]
        lg:text-[220px]

        font-black
        tracking-[10px]
      "
            >
              MONO
            </h1>
          </div>

          {/* TOP PAPER EDGE */}
          <div
            className="
      absolute
      top-0
      left-0
      w-full
      h-4

      bg-[radial-gradient(circle_at_10px_-2px,#fffef8_12px,transparent_13px)]
      bg-[length:20px_20px]
    "
          />

          <div
            className="
      relative
      z-10

      p-5
      sm:p-8
      lg:p-14
    "
          >

            {/* HEADER */}
            <div
              className="
        flex
        flex-col
        sm:flex-row

        gap-6

        justify-between
        items-start

        pb-8
        sm:pb-10

        border-b
        border-dashed
        border-gray-300
      "
            >

              <div>

                <h1
                  className="
            text-2xl
            sm:text-4xl
            lg:text-5xl

            tracking-[4px]
            sm:tracking-[8px]

            mb-2
          "
                  style={{
                    fontFamily: "Montserrat"
                  }}
                >
                  MONOSTREET
                </h1>

                <p
                  className="
            text-xs
            sm:text-sm

            tracking-[3px]
            sm:tracking-[4px]

            text-gray-500
            uppercase
          "
                >
                  Luxury Fashion Invoice
                </p>

              </div>

              <div
                className="
          text-left
          sm:text-right

          break-all
        "
              >

                <p
                  className="
            text-xs

            uppercase
            tracking-[3px]

            text-gray-400

            mb-2
          "
                >
                  Invoice
                </p>

                <h3
                  className="
            text-sm
            sm:text-lg

            font-medium
          "
                >
                  #{order.orderId}
                </h3>

              </div>

            </div>

            {/* CUSTOMER */}
            <div
              className="
        grid
        grid-cols-1
        md:grid-cols-2

        gap-8

        py-8
        sm:py-10
      "
            >

              <div>

                <p
                  className="
            text-xs

            uppercase
            tracking-[3px]

            text-gray-400

            mb-3
          "
                >
                  Customer
                </p>

                <h3
                  className="
            text-lg
            sm:text-xl
          "
                >
                  {order.customerName || "Customer"}
                </h3>

              </div>

              <div
                className="
          text-left
          md:text-right
        "
              >

                <p
                  className="
            text-xs

            uppercase
            tracking-[3px]

            text-gray-400

            mb-3
          "
                >
                  Payment Status
                </p>

                <span
                  className={`
            inline-block

            px-4
            py-2

            rounded-full

            text-sm

            ${order.paymentStatus === "SUCCESS"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                    }
          `}
                >
                  {order.paymentStatus}
                </span>

              </div>

            </div>

            {/* TOTALS */}
            <div
              className="
        border-t
        border-dashed
        border-gray-300

        pt-8
        sm:pt-10
      "
            >

              <div
                className="
          flex
          items-center
          justify-between

          gap-4

          py-3

          text-sm
          sm:text-base
        "
              >
                <span>Subtotal</span>

                <span>
                  ₹{order.totalPrice.subtotal}
                </span>
              </div>

              <div
                className="
          flex
          items-center
          justify-between

          gap-4

          py-3

          text-sm
          sm:text-base
        "
              >
                <span>Tax</span>

                <span>
                  ₹{order.totalPrice.tax}
                </span>
              </div>

              <div
                className="
          flex
          items-center
          justify-between

          gap-4

          py-3

          text-sm
          sm:text-base
        "
              >
                <span>Shipping</span>

                <span>
                  ₹{order.totalPrice.shipping}
                </span>
              </div>

              {/* GRAND TOTAL */}
              <div
                className="
          flex
          flex-col
          sm:flex-row

          gap-3

          sm:items-center
          sm:justify-between

          mt-6
          pt-6

          border-t
          border-black
        "
              >

                <h2
                  className="
            text-xl
            sm:text-2xl
          "
                  style={{
                    fontFamily:
                      "Satoshi-Bold"
                  }}
                >
                  Total
                </h2>

                <h2
                  className="
            text-2xl
            sm:text-3xl
            lg:text-4xl
          "
                  style={{
                    fontFamily:
                      "Satoshi-Bold"
                  }}
                >
                  ₹{order.totalPrice.total}
                </h2>

              </div>

            </div>

            {/* FOOTER */}
            <div
              className="
        mt-10
        sm:mt-12

        pt-8

        border-t
        border-dashed
        border-gray-300

        flex
        flex-col
        md:flex-row

        gap-8

        justify-between
        items-start
        md:items-end
      "
            >

              <div>

                <p
                  className="
            text-xs

            tracking-[3px]

            uppercase

            text-gray-400
          "
                >
                  Thank You
                </p>

                <p
                  className="
            mt-2

            text-sm
            sm:text-base

            text-gray-600
          "
                >
                  Thank you for shopping with
                  MONOSTREET.
                </p>

              </div>

              <div
                className="
          text-left
          md:text-right

          w-full
          md:w-auto
        "
              >

                <div
                  className="
            border-b
            border-black

            w-40

            mb-2
          "
                />

                <h4
                  className="
            text-sm
            font-medium
          "
                >
                  MONOSTREET CEO
                </h4>

                <p
                  className="
            text-xs
            sm:text-sm

            tracking-[2px]

            text-gray-500
          "
                >
                  AUTHORIZED SIGNATURE
                </p>

              </div>

            </div>

          </div>

          {/* BOTTOM PAPER EDGE */}
          <div
            className="
      absolute
      bottom-0
      left-0

      w-full
      h-4

      bg-[radial-gradient(circle_at_10px_22px,#fffef8_12px,transparent_13px)]
      bg-[length:20px_20px]
    "
          />

        </div>

        {/* PAYMENT */}
        <div
          className="
        bg-white
        border
        border-gray-200
        p-8
        mb-10
      "
        >

          <h2
            className="
          text-2xl
          mb-6
        "
            style={{
              fontFamily:
                "Satoshi-Bold",
            }}
          >
            Payment
          </h2>

          <div
            className="
          flex
          justify-between
          items-center
        "
          >

            <p>
              Payment Status
            </p>

            <span
              className={`
            px-4
            py-2
            rounded-full

            ${order.paymentStatus ===
                  "SUCCESS"

                  ? "bg-green-100 text-green-700"

                  : "bg-yellow-100 text-yellow-700"
                }
          `}
            >
              {
                order.paymentStatus
              }
            </span>

          </div>
        </div>

        {/* ADDRESS */}
        {order.shippingAddress && (

          <div
            className="
          bg-white
          border
          border-gray-200
          p-8
          mb-10
        "
          >

            <h2
              className="
            text-2xl
            mb-6
          "
              style={{
                fontFamily:
                  "Satoshi-Bold",
              }}
            >
              Shipping Address
            </h2>

            <p>
              {
                order.shippingAddress
                  .street
              }
            </p>

            <p>
              {
                order.shippingAddress
                  .city
              }
              ,
              {" "}
              {
                order.shippingAddress
                  .state
              }
            </p>

            <p>
              {
                order.shippingAddress
                  .country
              }
              {" "}
              -
              {" "}
              {
                order.shippingAddress
                  .zipCode
              }
            </p>

            <p>
              {
                order.shippingAddress
                  .phone
              }
            </p>

          </div>
        )}

        {/* ACTIONS */}
        <div
          className="
        flex
        flex-wrap
        gap-4
      "
        >

          {order.paymentStatus !==
            "SUCCESS" && (

              <button
                onClick={() =>
                  navigate(
                    `/payment/${order.orderId}`
                  )
                }
                className="
              px-8
              py-4
              bg-black
              text-white
            "
              >
                Continue Payment
              </button>
            )}

          {order.status ===
            "PENDING" && (

              <button
                onClick={
                  handleCancelOrder
                }
                className="
              px-8
              py-4
              bg-red-500
              text-white
            "
              >
                Cancel Order
              </button>
            )}

        </div>

      </Container>

    </section>
  );
};

export default OrderDetailsPage;