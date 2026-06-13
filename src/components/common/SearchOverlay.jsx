import {
  Search,
  X,
} from "lucide-react";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import useProducts
  from "../../hooks/useProducts";

const SearchOverlay = ({
  isOpen,
  onClose,
}) => {

  // SEARCH STATE
  const [searchTerm, setSearchTerm] =
    useState("");

  // LAZY LOADING
  const [visibleProducts, setVisibleProducts] =
    useState(8);

  // PRODUCTS
  const {
    products,
    loading,
  } = useProducts();

  // RESET PRODUCTS
  useEffect(() => {

    setVisibleProducts(8);

  }, [searchTerm]);

  // FILTER PRODUCTS
  const filteredProducts =
    useMemo(() => {

      if (
        !searchTerm.trim()
      ) return [];

      return products.filter(
        (product) =>

          product.title
            ?.toLowerCase()
            .includes(
              searchTerm.toLowerCase()
            )
      );

    }, [
      products,
      searchTerm,
    ]);

  // DISPLAY PRODUCTS
  const displayedProducts =
    filteredProducts.slice(
      0,
      visibleProducts
    );

  // LOAD MORE
  const handleLoadMore = () => {

    setVisibleProducts(
      (prev) => prev + 8
    );
  };

  // CLOSE
  const onclickhandleClose =
    () => {

      setSearchTerm("");

      onClose();
    };

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[200]

        bg-white

        overflow-y-auto
      "
    >

      {/* TOP */}
      <div
        className="
          border-b
          border-gray-100

          px-6
          lg:px-16

          py-6

          sticky
          top-0

          bg-white
          z-20
        "
      >

        <div
          className="
            flex
            items-center
            justify-between

            gap-6
          "
        >

          {/* INPUT */}
          <div
            className="
              flex
              items-center
              gap-4

              flex-1
            "
          >

            <Search
              size={22}
              className="
                text-gray-400
              "
            />

            <input
              autoFocus

              type="text"

              placeholder="Search products..."

              value={searchTerm}

              onChange={(e) =>
                setSearchTerm(
                  e.target.value
                )
              }

              className="
                w-full

                text-xl

                outline-none

                placeholder:text-gray-300
              "
              style={{
                fontFamily:
                  "Satoshi",
              }}
            />
          </div>

          {/* CLOSE */}
          <button
            onClick={
              onclickhandleClose
            }
          >
            <X size={28} />
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div
        className="
          px-6
          lg:px-16

          py-12
        "
      >

        {/* EMPTY */}
        {!searchTerm && (

          <div>

            <p
              className="
                uppercase
                tracking-[4px]

                text-xs
                text-gray-400

                mb-8
              "
              style={{
                fontFamily:
                  "Montserrat",
              }}
            >
              Trending Searches
            </p>

            <div
              className="
                flex
                flex-wrap
                gap-4
              "
            >

              {[
                "Oversized Hoodie",
                "Streetwear",
                "Sneakers",
                "Minimal Jacket",
              ].map((item) => (

                <button
                  key={item}

                  onClick={() =>
                    setSearchTerm(
                      item
                    )
                  }

                  className="
                    px-5
                    py-3

                    border
                    border-gray-200

                    hover:border-black

                    transition-all
                    duration-300
                  "
                  style={{
                    fontFamily:
                      "Montserrat",
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* SEARCH RESULTS */}
        {
          searchTerm && (

            <div>

              <p
                className="
                  uppercase
                  tracking-[4px]

                  text-xs
                  text-gray-400

                  mb-10
                "
                style={{
                  fontFamily:
                    "Montserrat",
                }}
              >
                Search Results
              </p>

              {/* LOADING */}
              {loading ? (

                <div
                  className="
                    py-24

                    flex
                    items-center
                    justify-center
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

              ) : filteredProducts.length > 0 ? (

                <>
                  {/* GRID */}
                  <div
                    className="
                      grid
                      grid-cols-1
                      sm:grid-cols-2
                      lg:grid-cols-4

                      gap-8
                    "
                  >

                    {displayedProducts.map(
                      (product) => (

                        <Link
                          key={product._id}

                          to={`/product/${product._id}`}

                          onClick={
                            onclickhandleClose
                          }

                          className="group"
                        >

                          {/* IMAGE */}
                          <div
                            className="
                              overflow-hidden
                              bg-[#f5f5f5]

                              mb-4
                            "
                          >

                            <img
                              src={
                                product.images?.[0]?.url
                              }

                              alt={product.title}

                              className="
                                w-full
                                h-[350px]

                                object-cover

                                group-hover:scale-105

                                transition-all
                                duration-700
                              "
                            />
                          </div>

                          {/* TITLE */}
                          <h3
                            className="
                              text-lg
                              text-black

                              mb-2
                            "
                            style={{
                              fontFamily:
                                "Satoshi-Medium",
                            }}
                          >
                            {product.title}
                          </h3>

                          {/* PRICE */}
                          <p
                            className="
                              text-gray-500
                            "
                            style={{
                              fontFamily:
                                "Montserrat",
                            }}
                          >
                            ₹{product.amount}
                          </p>
                        </Link>
                    ))}
                  </div>

                  {/* LOAD MORE */}
                  {
                    displayedProducts.length
                    < filteredProducts.length
                    && (

                      <div
                        className="
                          flex
                          justify-center

                          mt-16
                        "
                      >

                        <button
                          onClick={
                            handleLoadMore
                          }

                          className="
                            px-8
                            py-4

                            bg-black
                            text-white

                            hover:bg-gray-800

                            transition-all
                            duration-300
                          "
                          style={{
                            fontFamily:
                              "Montserrat",
                          }}
                        >
                          Load More
                        </button>
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
                    Try searching something else.
                  </p>
                </div>
              )}
            </div>
        )}
      </div>
    </div>
  );
};

export default SearchOverlay;