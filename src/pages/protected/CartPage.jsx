import Container from "../../components/ui/Container";
import CartItem from "../../components/cart/CartItem";
import CartSummary from "../../components/cart/CartSummary";
import EmptyState from "../../components/ui/EmptyState";

import { useSelector } from "react-redux";

const CartPage = () => {

  const {
    cartItems,
    loading,
  } = useSelector(
    (state) => state.cart
  );

  if (loading) {

    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="w-14 h-14 border-2 border-black border-t-transparent rounded-full animate-spin" />
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-white py-16 pt-24">

      <Container>

        {cartItems?.length === 0 ? (

          <EmptyState
            title="Your Cart Is Empty"
            description="Looks like you haven’t added anything to your cart yet."
            buttonText="Continue Shopping"
          />

        ) : (

          <>
            <div className="mb-14">

              <p
                className="uppercase tracking-[4px] text-xs text-gray-500 mb-4"
                style={{ fontFamily: "Montserrat" }}
              >
                MonoStreet
              </p>

              <h1
                className="text-4xl lg:text-5xl text-black"
                style={{ fontFamily: "Satoshi-Bold" }}
              >
                Shopping Cart
              </h1>

            </div>

            <div
              className="
                grid
                lg:grid-cols-[1fr_400px]
                gap-14
                items-start
              "
            >

              <div className="flex flex-col gap-10">

                {cartItems?.map((item) => (

                  <CartItem
                    key={item.productId}
                    item={item}
                  />
                ))}

              </div>

              <CartSummary />

            </div>
          </>
        )}
      </Container>
    </section>
  );
};

export default CartPage;