import { useSelector } from "react-redux";

import Container from "../../components/ui/Container";

import CheckoutForm from "../../components/cart/CheckoutForm";
import CartSummary from "../../components/cart/CartSummary";

import EmptyState from "../../components/ui/EmptyState";

const CheckoutPage = () => {

  const { cartItems } = useSelector(
    (state) => state.cart
  );

  return (
    <section className="min-h-screen bg-white py-16 pt-24">

      <Container>

        {cartItems.length === 0 ? (

          <EmptyState
            title="Your Cart Is Empty"
            description="Add some products before proceeding to checkout."
            buttonText="Continue Shopping"
          />

        ) : (

          <>
            {/* PAGE TITLE */}
            <div className="mb-14">

              <p
                className="
                  uppercase
                  tracking-[4px]
                  text-xs
                  text-gray-500
                  mb-4
                "
                style={{ fontFamily: "Montserrat" }}
              >
                MonoStreet
              </p>

              <h1
                className="
                  text-4xl
                  lg:text-5xl
                  text-black
                "
                style={{ fontFamily: "Satoshi-Bold" }}
              >
                Checkout
              </h1>
            </div>

            {/* CONTENT */}
            <div
              className="
                grid
                lg:grid-cols-[1fr_420px]
                gap-14
                items-start
              "
            >

              {/* LEFT */}
              <div>

                <h2
                  className="
                    text-2xl
                    text-black
                    mb-8
                  "
                  style={{ fontFamily: "Satoshi-Bold" }}
                >
                  Shipping Information
                </h2>

                <CheckoutForm />
              </div>

              {/* RIGHT */}
              <CartSummary />
            </div>
          </>
        )}
      </Container>
    </section>
  );
};

export default CheckoutPage;