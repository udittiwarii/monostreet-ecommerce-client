import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import Container
  from "../../components/ui/Container";

import ProductGallery
  from "../../components/product/ProductGallery";

import ProductInfo
  from "../../components/product/ProductInfo";

import ProductTabs
  from "../../components/product/ProductTabs";

import RelatedProducts
  from "../../components/product/RelatedProducts";

import {
  getSingleProduct,
} from "../../services/products/productApi";

import BackButton
  from "../../components/ui/BackButton";

const ProductDetailsPage = () => {

  const { id } =
    useParams();

  // STATES
  const [product, setProduct] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  // FETCH PRODUCT
  useEffect(() => {

    const fetchProduct =
      async () => {

        try {

          setLoading(true);

          const data =
            await getSingleProduct(id);

          setProduct(
            data.product
            || data
          );

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);
        }
      };

    fetchProduct();

  }, [id]);

  // LOADING
  if (loading) {

    return (
      <section
        className="
          min-h-screen

          flex
          items-center
          justify-center

          bg-white
        "
      >

        <div
          className="
            w-14
            h-14

            border-2
            border-black
            border-t-transparent

            rounded-full

            animate-spin
          "
        />
      </section>
    );
  }

  // NOT FOUND
  if (!product) {

    return (
      <section
        className="
          min-h-screen

          flex
          flex-col
          items-center
          justify-center

          gap-6

          bg-white
        "
      >

        <h1
          className="
            text-4xl
          "
          style={{
            fontFamily:
              "Satoshi-Bold",
          }}
        >
          Product Not Found
        </h1>

        <BackButton />
      </section>
    );
  }

  return (
    <section
      className="
        py-16
        bg-white
        min-h-screen
        pt-20
      "
    >

      <Container>

        {/* BACK BUTTON */}
        <div className="mb-10">

          <BackButton />

        </div>

        {/* PRODUCT SECTION */}
        <div
          className="
            grid
            lg:grid-cols-2

            gap-14

            items-start
          "
        >

          {/* LEFT */}
          <ProductGallery
            product={product}
          />

          {/* RIGHT */}
          <ProductInfo
            product={product}
          />
        </div>

        {/* PRODUCT TABS */}
        <ProductTabs
          product={product}
        />

        {/* RELATED PRODUCTS */}
        <RelatedProducts
          currentProductId={
            product.id
          }

          category={
            product.category
          }
        />
      </Container>
    </section>
  );
};

export default ProductDetailsPage;