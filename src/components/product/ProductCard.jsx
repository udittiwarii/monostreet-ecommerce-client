import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import { addToWishlist, removeFromWishlist } from "../../redux/slices/wishlistSlice";
import fallbackImage from "./../../../public/fallbackImage.png"

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const { wishlistItems } = useSelector(
    (state) => state.wishlist
  );

  const isInWishlist =
    wishlistItems.some(
      (item) => item._id === product._id
    );
  return (

    <motion.div
      whileHover={{ y: -8 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
    >
      <Link
        to={`/product/${product.id}`}
        onClick={() => {
          console.log(product.id)
        }}
        className="group block"
      >

        {/* IMAGE CONTAINER */}
        <div
          className="
          relative
          overflow-hidden
          bg-[#f5f5f5]
        "
        >

          {/* PRODUCT IMAGE */}
          <img
            src={product.images?.[0]?.url || fallbackImage}
            alt={product.title}
            className="
            w-full
            h-[350px]
          sm:h-[420px]
          object-cover
          group-hover:scale-110
          transition-all
          duration-700
          ease-out
          "
          />

          {/* WISHLIST BUTTON */}
          <button
            onClick={(e) => {

              e.preventDefault();

              if (isInWishlist) {

                dispatch(
                  removeFromWishlist(product._id)
                );

              } else {

                dispatch(
                  addToWishlist(product)
                );
              }
            }}
            className="
    absolute
    top-4
    right-4
    w-10
    h-10
    bg-white/90
    backdrop-blur-md
    flex
    items-center
    justify-center
    opacity-100
lg:opacity-0
lg:group-hover:opacity-100

lg:translate-y-4
lg:group-hover:translate-y-0
    transition-all
    duration-300
  "
          >

            <Heart
              size={18}
              className={`
      transition-all
      duration-300

      ${isInWishlist
                  ? "fill-red-500 text-red-500"
                  : "text-black"
                }
    `}
            />
          </button>

          {/* add quick */}
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="
    absolute
    bottom-4
    left-1/2
    -translate-x-1/2

    bg-black
    text-white

    px-6
    py-3

    text-sm
    tracking-[2px]

    opacity-0
    translate-y-6

    lg:group-hover:opacity-100
    lg:group-hover:translate-y-0

    transition-all
    duration-500

    whitespace-nowrap
  "
            style={{ fontFamily: "Montserrat" }}
          >
            QUICK ADD
          </button>

          {/* CATEGORY */}
          <div
            className="
            absolute
            top-4
            left-4
            bg-black
            text-white
            px-3
            py-1
            text-[10px]
            uppercase
            tracking-[2px]
          "
            style={{ fontFamily: "Montserrat" }}
          >
            {product.category}
          </div>
        </div>

        {/* PRODUCT INFO */}
        <div className="pt-5">

          {/* TITLE */}
          <h3
            className="
            text-lg
            text-black
            mb-2
            group-hover:text-gray-600
            transition-all
            duration-300
          "
            style={{ fontFamily: "Satoshi-Medium" }}
          >
            {product.title}
          </h3>

          {/* PRICE */}
          <p
            className="
            text-gray-500
            text-sm
          "
            style={{ fontFamily: "Montserrat" }}
          >
            ₹{product.amount}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;