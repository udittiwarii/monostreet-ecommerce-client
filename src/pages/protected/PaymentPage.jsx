import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  useSelector,
} from "react-redux";

import Container from "../../components/ui/Container";

import {
  createPayment,
  verifyPayment,
} from "../../services/payment/paymentApi";

import {
  getOrderById,
} from "../../services/orders/orderApi";

const PaymentPage = () => {

  const { orderId } =
    useParams();

  const navigate =
    useNavigate();

  const {
    user,
  } = useSelector(
    (state) => state.auth
  );

  const [loading,
    setLoading] =
    useState(false);

  const [order,
    setOrder] =
    useState(null);

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
    }
  };

fetchOrder();


  }, [orderId]);

  const handlePayment =
    async () => {


      try {

        setLoading(true);

        const paymentData =
          await createPayment(
            orderId
          );

        if (
          !window.Razorpay
        ) {

          alert(
            "Razorpay SDK not loaded"
          );

          return;
        }

        const options = {

          key:
            import.meta.env
              .VITE_RAZORPAY_KEY,

          amount:
            paymentData.amount,

          currency:
            paymentData.currency,

          name:
            "MONOSTREET",

          description:
            "Order Payment",

          order_id:
            paymentData
              .razorpayOrderId,

          prefill: {

            name:
              user?.username ||

              `${user?.fullName?.firstName || ""} ${user?.fullName?.lastName || ""}`,

            email:
              user?.email ||

              "",

            contact:
              order
                ?.shippingAddress
                ?.phone ||

              ""
          },

          theme: {

            color:
              "#000000"
          },

          handler:
            async (
              response
            ) => {

              try {

                await verifyPayment({

                  razorpayOrderId:
                    response
                      .razorpay_order_id,

                  paymentId:
                    response
                      .razorpay_payment_id,

                  signature:
                    response
                      .razorpay_signature
                });

                navigate(
                  `/orders/${orderId}`
                );

              } catch (error) {

                console.log(
                  error
                );

                navigate(
                  "/payment/failed"
                );
              }
            },

          modal: {

            ondismiss:
              () => {

                navigate(
                  "/payment/failed"
                );
              }
          }
        };

        const razorpay =
          new window.Razorpay(
            options
          );

        razorpay.open();

      } catch (error) {

        console.log(error);

        navigate(
          "/payment/failed"
        );

      } finally {

        setLoading(false);
      }
    };


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
        Loading Payment...
      </div>
    );


  }

  return (


    <section
      className="
    min-h-screen
    bg-white
    pt-28
    pb-20
  "
    >

      <Container>

        <div
          className="
        max-w-3xl
        mx-auto
      "
        >

          <h1
            className="
          text-5xl
          mb-12
        "
            style={{
              fontFamily:
                "Satoshi-Bold"
            }}
          >
            Secure Payment
          </h1>

          <div
            className="
          border
          border-gray-200
          p-8
          mb-8
        "
          >

            <h2
              className="
            text-2xl
            mb-8
          "
              style={{
                fontFamily:
                  "Satoshi-Bold"
              }}
            >
              Order Summary
            </h2>

            <div
              className="
            flex
            justify-between
            mb-4
          "
            >
              <span>
                Order ID
              </span>

              <span>
                {
                  order.orderId
                }
              </span>
            </div>

            <div
              className="
            flex
            justify-between
            mb-4
          "
            >
              <span>
                Status
              </span>

              <span>
                {
                  order.status
                }
              </span>
            </div>

            <div
              className="
            flex
            justify-between
            mb-4
          "
            >
              <span>
                Subtotal
              </span>

              <span>
                ₹
                {
                  order
                    ?.totalPrice
                    ?.subtotal
                }
              </span>
            </div>

            <div
              className="
            flex
            justify-between
            mb-4
          "
            >
              <span>
                Shipping
              </span>

              <span>
                ₹
                {
                  order
                    ?.totalPrice
                    ?.shipping || 0
                }
              </span>
            </div>

            <div
              className="
            flex
            justify-between
            mb-4
          "
            >
              <span>
                Tax
              </span>

              <span>
                ₹
                {
                  order
                    ?.totalPrice
                    ?.tax || 0
                }
              </span>
            </div>

            <div
              className="
            border-t
            pt-5
            mt-5
            flex
            justify-between
          "
            >

              <h3
                className="
              text-xl
            "
                style={{
                  fontFamily:
                    "Satoshi-Bold"
                }}
              >
                Total
              </h3>

              <h3
                className="
              text-2xl
            "
                style={{
                  fontFamily:
                    "Satoshi-Bold"
                }}
              >
                ₹
                {
                  order
                    ?.totalPrice
                    ?.total
                }
              </h3>

            </div>

          </div>

          <button

            onClick={
              handlePayment
            }

            disabled={
              loading
            }

            className="
          w-full
          bg-black
          text-white
          py-5
          border
          border-black

          hover:bg-white
          hover:text-black

          transition-all
          duration-300
        "

            style={{
              fontFamily:
                "Montserrat"
            }}
          >

            {
              loading

                ? "Opening Razorpay..."

                : `Pay ₹${order?.totalPrice?.total}`
            }

          </button>

        </div>

      </Container>

    </section>


  );
};

export default PaymentPage;