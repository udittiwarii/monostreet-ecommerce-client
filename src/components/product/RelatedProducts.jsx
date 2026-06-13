import {
  useMemo,
} from "react";

import SectionTitle
  from "../ui/SectionTitle";

import ProductGrid
  from "./ProductGrid";

import useProducts
  from "../../hooks/useProducts";

const RelatedProducts = ({
  currentProductId,
  category,
}) => {

  // PRODUCTS
  const {
    products,
    loading,
  } = useProducts();

  // FILTER RELATED PRODUCTS
  const relatedProducts =
    useMemo(() => {

      return products
        .filter(

          (product) =>

            // SAME CATEGORY
            product.category ===
            category

            // REMOVE CURRENT PRODUCT
            &&

            product._id !==
            currentProductId
        )

        // LIMIT
        .slice(0, 4);

    }, [
      products,
      currentProductId,
      category,
    ]);

  // NO PRODUCTS
  if (
    !loading
    &&
    relatedProducts.length === 0
  ) {
    return null;
  }

  return (
    <section
      className="
        py-24
        bg-white
      "
    >

      {/* TITLE */}
      <SectionTitle
        subtitle="You May Also Like"
        title="Related Products"
      />

      {/* LOADING */}
      {loading ? (

        <div
          className="
            flex
            items-center
            justify-center

            py-20
          "
        >

          <div
            className="
              w-12
              h-12

              border-2
              border-black
              border-t-transparent

              rounded-full

              animate-spin
            "
          />
        </div>

      ) : (

        <ProductGrid
          products={
            relatedProducts
          }
        />
      )}
    </section>
  );
};

export default RelatedProducts;