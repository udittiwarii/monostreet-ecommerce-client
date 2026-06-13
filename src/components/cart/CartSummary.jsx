import {
  ArrowRight,
} from "lucide-react";

import {
  useSelector,
} from "react-redux";

import {
  useNavigate,
} from "react-router-dom";

const CartSummary = () => {

  const navigate =
    useNavigate();

  const {
    cartItems,
  } = useSelector(
    (state) => state.cart
  );

  const subtotal =
    cartItems?.reduce(

      (acc, item) =>

        acc +
        item.amount *
        item.quantity,

      0
    );

  const shipping =
    subtotal > 0
      ? 99
      : 0;

  const total =
    subtotal +
    shipping;

  return (
    <div
      className="
        border
        border-gray-200
        p-8
        sticky
        top-28
      "
    >

      <h2
        className="
          text-3xl
          mb-8
        "
        style={{
          fontFamily:
            "Satoshi-Bold",
        }}
      >
        Order Summary
      </h2>

      <div
        className="
          flex
          flex-col
          gap-5
          mb-8
        "
      >

        {cartItems?.map(
          (item) => (

            <div
              key={
                item.productId
              }
              className="
                flex
                justify-between
              "
            >

              <div>

                <h3
                  className="
                    text-sm
                  "
                >
                  {
                    item.product?.title
                  }
                </h3>

                <p
                  className="
                    text-xs
                    text-gray-500
                  "
                >
                  Qty:
                  {" "}
                  {
                    item.quantity
                  }
                </p>

              </div>

              <p>
                ₹
                {
                  item.amount *
                  item.quantity
                }
              </p>

            </div>
          ))}
      </div>

      <div className="border-t border-gray-200 mb-6" />

      <div className="flex justify-between mb-4">

        <p>Subtotal</p>

        <p>
          ₹{subtotal}
        </p>

      </div>

      <div className="flex justify-between mb-8">

        <p>Shipping</p>

        <p>
          ₹{shipping}
        </p>

      </div>

      <div
        className="
          flex
          justify-between
          border-t
          border-gray-200
          pt-6
          mb-10
        "
      >

        <h3>Total</h3>

        <h3>
          ₹{total}
        </h3>

      </div>

      <button
        onClick={() =>
          navigate("/checkout")
        }
        className="
          w-full
          bg-black
          text-white
          py-4
          flex
          items-center
          justify-center
          gap-3
        "
      >
        Proceed To Checkout

        <ArrowRight
          size={18}
        />
      </button>

    </div>
  );
};

export default CartSummary;