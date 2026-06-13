import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  SlidersHorizontal,
} from "lucide-react";

import Container
  from "../../components/ui/Container";

import ProductGrid
  from "../../components/product/ProductGrid";

import useProducts from "../../hooks/useProducts";

import { useSearchParams } from "react-router-dom"

const CollectionPage = () => {

  // FILTER STATES
  const [
    searchParams,
    setSearchParams,
  ] = useSearchParams();

  const selectedCategory =
    searchParams.get("category")
    || "All";

  const sortOption =
    searchParams.get("sort")
    || "Newest";

  // INFINITE SCROLL
  const [visibleProducts, setVisibleProducts] =
    useState(8);

  const loadMoreRef =
    useRef(null);

  // PRODUCTS
  const {
    products,
    loading,
  } = useProducts();

  // DYNAMIC CATEGORIES
  const categories =
    useMemo(() => {

      const uniqueCategories =
        new Set(

          products.map(
            (product) =>
              product.category
          )
        );

      return [
        "All",
        ...uniqueCategories,
      ];

    }, [products]);

  // FILTER PRODUCTS
  const filteredProducts =
    useMemo(() => {

      let filtered =
        [...products];

      // CATEGORY FILTER
      if (
        selectedCategory !== "All"
      ) {

        filtered =
          filtered.filter(
            (product) =>
              product.category ===
              selectedCategory
          );
      }

      // SORTING
      if (
        sortOption === "Low"
      ) {

        filtered.sort(
          (a, b) =>
            a.amount - b.amount
        );

      } else if (
        sortOption === "High"
      ) {

        filtered.sort(
          (a, b) =>
            b.amount - a.amount
        );
      }

      return filtered;

    }, [
      products,
      selectedCategory,
      sortOption,
    ]);

  // PRODUCTS TO DISPLAY
  const displayedProducts =
    filteredProducts.slice(
      0,
      visibleProducts
    );

  // RESET ON FILTER CHANGE
  useEffect(() => {

    setVisibleProducts(8);

  }, [
    selectedCategory,
    sortOption,
  ]);


  // INFINITE SCROLL OBSERVER
  useEffect(() => {

    // STOP IF ALL PRODUCTS LOADED
    if (
      displayedProducts.length >=
      filteredProducts.length
    ) return;

    const observer =
      new IntersectionObserver(

        (entries) => {

          if (
            entries[0].isIntersecting
          ) {

            setVisibleProducts(
              (prev) => prev + 8
            );
          }
        },

        {
          rootMargin: "300px",
        }
      );

    const currentRef =
      loadMoreRef.current;

    if (currentRef) {

      observer.observe(
        currentRef
      );
    }

    return () => {

      if (currentRef) {

        observer.unobserve(
          currentRef
        );
      }
    };

  }, [
    displayedProducts.length,
    filteredProducts.length,
  ]);

  return (
    <section
      className="
        min-h-screen
        bg-white
        py-16
        pt-20
      "
    >

      <Container>

        {/* TOP */}
        <div
          className="
            flex
            flex-col
            gap-8
            mb-16
          "
        >

          {/* TOP BAR */}
          <div
            className="
              flex
              flex-col
              lg:flex-row
              items-start
              lg:items-center
              justify-between
              gap-5
            "
          >

            {/* LEFT */}
            <div
              className="
                flex
                items-center
                gap-4
                flex-wrap
              "
            >

              {/* FILTER ICON */}
              <button
                className="
                  w-12
                  h-12

                  border
                  border-gray-200

                  flex
                  items-center
                  justify-center

                  hover:border-black

                  transition-all
                  duration-300
                "
              >
                <SlidersHorizontal
                  size={18}
                />
              </button>

              {/* SORT */}
              <select
                value={sortOption}

                onChange={(e) =>
                  setSearchParams({

                    category: selectedCategory,

                    sort: e.target.value,
                  })
                }

                className="
              border
              border-gray-200

              px-5
              py-4

              outline-none

              hover:border-black

              transition-all
              duration-300

              text-sm
              bg-white
              "
                style={{
                  fontFamily:
                    "Montserrat",
                }}
              >

                <option value="Newest">
                  Newest
                </option>

                <option value="Low">
                  Price: Low to High
                </option>

                <option value="High">
                  Price: High to Low
                </option>
              </select>
            </div>

            {/* BRAND */}
            <div
              className="
                hidden
                sm:flex
                items-center
                gap-4
              "
            >

              <h1
                className="
                  text-3xl
                  md:text-4xl
                  lg:text-5xl

                  tracking-[6px]
                  uppercase

                  leading-none
                "
                style={{
                  fontFamily:
                    "Montserrat",
                }}
              >

                <span className="font-bold">
                  MONO
                </span>

                <span className="font-light ml-1">
                  STREET
                </span>
              </h1>

              <p
                className="
                  text-gray-500
                  italic
                "
                style={{
                  fontFamily:
                    "Satoshi",
                }}
              >
                Discover our latest collection
              </p>
            </div>
          </div>

          {/* CATEGORY FILTERS */}
          <div
            className="
              flex
              items-center
              gap-3

              overflow-x-auto

              pb-2

              scrollbar-hide
            "
          >

            {categories.map(
              (category) => (

                <button
                  key={category}

                  onClick={() => {

                    const params = {};

                    if (category !== "All") {

                      params.category =
                        category;
                    }

                    if (
                      sortOption !== "Newest"
                    ) {

                      params.sort =
                        sortOption;
                    }

                    setSearchParams(params);
                  }}

                  className={`
                    whitespace-nowrap

                    px-5
                    py-3

                    text-sm

                    border

                    transition-all
                    duration-300

                    ${selectedCategory === category

                      ? "bg-black text-white border-black"

                      : "border-gray-200 hover:border-black"
                    }
                  `}
                  style={{
                    fontFamily:
                      "Montserrat",
                  }}
                >
                  {category}
                </button>
              ))}
          </div>
        </div>

        {/* LOADING */}
        {loading ? (

          <div
            className="
              h-[50vh]
              flex
              items-center
              justify-center
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
          </div>

        ) : filteredProducts.length > 0 ? (

          <>
            {/* PRODUCTS */}
            <ProductGrid
              products={
                displayedProducts
              }
            />

            {/* LOAD MORE */}
            {
              displayedProducts.length <
              filteredProducts.length
              && (

                <div
                  ref={loadMoreRef}

                  className="
                    h-32

                    flex
                    items-center
                    justify-center
                  "
                >

                  <div
                    className="
                      w-10
                      h-10

                      border-2
                      border-black
                      border-t-transparent

                      rounded-full

                      animate-spin
                    "
                  />
                </div>
              )}
          </>

        ) : (

          <div
            className="
              py-24
              text-center
            "
          >

            <h2
              className="
                text-3xl
                mb-4
              "
              style={{
                fontFamily:
                  "Satoshi-Bold",
              }}
            >
              No Products Found
            </h2>

            <p
              className="
                text-gray-500
              "
              style={{
                fontFamily:
                  "Satoshi",
              }}
            >
              Try another category.
            </p>
          </div>
        )}
      </Container>
    </section >
  );
};

export default CollectionPage;