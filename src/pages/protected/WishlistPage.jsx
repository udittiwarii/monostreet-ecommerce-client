import { useSelector } from "react-redux";

import Container from "../../components/ui/Container";
import EmptyState from "../../components/ui/EmptyState";

import ProductGrid from "../../components/product/ProductGrid";
import BackButton from './../../components/ui/BackButton';

const WishlistPage = () => {

  const { wishlistItems } = useSelector(
    (state) => state.wishlist
  );

  return (
    <section className="min-h-screen bg-white py-16 pt-24">
      <BackButton/>

      <Container>

        {wishlistItems.length === 0 ? (

          <EmptyState
            title="Wishlist Is Empty"
            description="Save your favorite products to view them later."
            buttonText="Explore Products"
          />

        ) : (

          <>
            {/* TITLE */}
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
                Your Wishlist
              </h1>
            </div>

            {/* PRODUCTS */}
            <ProductGrid
              products={wishlistItems}
            />
          </>
        )}
      </Container>
    </section>
  );
};

export default WishlistPage;