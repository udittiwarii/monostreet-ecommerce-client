import { ArrowRight } from "lucide-react";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const CartSummary = () => {

  const { cartItems } = useSelector(
    (state) => state.cart
  );

  // SUBTOTAL
  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  // SHIPPING
  const shipping =
    subtotal > 0 ? 20 : 0;

  // TOTAL
  const total = subtotal + shipping;

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

      {/* TITLE */}
      <h2
        className="
          text-3xl
          text-black
          mb-8
        "
        style={{ fontFamily: "Satoshi-Bold" }}
      >
        Order Summary
      </h2>

      {/* ITEMS */}
      <div className="flex flex-col gap-5 mb-8">

        {cartItems.map((item) => (

          <div
            key={item.id}
            className="
              flex
              items-center
              justify-between
              gap-4
            "
          >

            <div>

              <h3
                className="
                  text-sm
                  text-black
                  mb-1
                "
                style={{ fontFamily: "Satoshi-Medium" }}
              >
                {item.title}
              </h3>

              <p
                className="
                  text-xs
                  text-gray-500
                "
                style={{ fontFamily: "Montserrat" }}
              >
                Qty: {item.quantity}
              </p>
            </div>

            <p
              className="
                text-sm
                text-black
              "
              style={{ fontFamily: "Satoshi-Bold" }}
            >
              $
              {item.price * item.quantity}
            </p>
          </div>
        ))}
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-200 mb-6" />

      {/* SUBTOTAL */}
      <div
        className="
          flex
          items-center
          justify-between
          mb-4
        "
      >

        <p
          className="
            text-gray-500
          "
          style={{ fontFamily: "Montserrat" }}
        >
          Subtotal
        </p>

        <p
          className="
            text-black
          "
          style={{ fontFamily: "Satoshi-Bold" }}
        >
          ${subtotal}
        </p>
      </div>

      {/* SHIPPING */}
      <div
        className="
          flex
          items-center
          justify-between
          mb-8
        "
      >

        <p
          className="
            text-gray-500
          "
          style={{ fontFamily: "Montserrat" }}
        >
          Shipping
        </p>

        <p
          className="
            text-black
          "
          style={{ fontFamily: "Satoshi-Bold" }}
        >
          ${shipping}
        </p>
      </div>

      {/* TOTAL */}
      <div
        className="
          flex
          items-center
          justify-between
          border-t
          border-gray-200
          pt-6
          mb-10
        "
      >

        <h3
          className="
            text-xl
            text-black
          "
          style={{ fontFamily: "Satoshi-Bold" }}
        >
          Total
        </h3>

        <h3
          className="
            text-2xl
            text-black
          "
          style={{ fontFamily: "Satoshi-Bold" }}
        >
          ${total}
        </h3>
      </div>

      {/* BUTTON */}
      <Link
        to="/checkout"
        className="
          w-full
          bg-black
          text-white
          py-4
          border
          border-black
          hover:bg-white
          hover:text-black
          transition-all
          duration-300
          flex
          items-center
          justify-center
          gap-3
        "
        style={{ fontFamily: "Montserrat" }}
      >
        Proceed To Checkout

        <ArrowRight size={18} />
      </Link>
    </div>
  );
};

export default CartSummary;