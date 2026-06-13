import {
  Heart,
  ShoppingBag,
  User,
  X,
} from "lucide-react";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const MobileMenu = ({
  isOpen,
  onClose,
}) => {

  const { cartItems } = useSelector(
    (state) => state.cart
  );

  const { wishlistItems } = useSelector(
    (state) => state.wishlist
  );

   const {
    isAuthenticated,
    user,
  } = useSelector(
    (state) => state.auth
  );


  if (!isOpen) return null;

 
  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        bg-black/40
        backdrop-blur-sm
      "
    >

      {/* SIDEBAR */}
      <div
        className="
          w-[320px]
          h-full
          bg-white
          p-8
          flex
          flex-col
        "
      >

        {/* TOP */}
        <div
          className="
            flex
            items-center
            justify-between
            mb-14
          "
        >

          <h2
            className="
              text-2xl
              tracking-[5px]
            "
            style={{ fontFamily: "Montserrat" }}
          >
            MONOSTREET
          </h2>

          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* LINKS */}
        <div
          className="
            flex
            flex-col
            gap-8
          "
        >

          <Link
            to="/"
            onClick={onClose}
            className="text-lg"
            style={{ fontFamily: "Satoshi-Medium" }}
          >
            Home
          </Link>

          <Link
            to="/collection"
            onClick={onClose}
            className="text-lg"
            style={{ fontFamily: "Satoshi-Medium" }}
          >
            Collections
          </Link>

          <Link
            to="/about"
            onClick={onClose}
            className="text-lg"
            style={{ fontFamily: "Satoshi-Medium" }}
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={onClose}
            className="text-lg"
            style={{ fontFamily: "Satoshi-Medium" }}
          >
            Contact
          </Link>
        </div>

        {/* BOTTOM */}
        <div
          className="
            mt-auto
            flex
            items-center
            gap-6
            pt-10
            border-t
            border-gray-200
          "
        >

          {/* WISHLIST */}
          <Link
            to="/wishlist"
            onClick={onClose}
            className="relative"
          >

            <Heart size={22} />

            {wishlistItems.length > 0 && (
              <span
                className="
                  absolute
                  -top-2
                  -right-2
                  w-5
                  h-5
                  bg-black
                  text-white
                  text-[10px]
                  rounded-full
                  flex
                  items-center
                  justify-center
                "
              >
                {wishlistItems.length}
              </span>
            )}
          </Link>

          {/* CART */}
          <Link
            to="/cart"
            onClick={onClose}
            className="relative"
          >

            <ShoppingBag size={22} />

            {cartItems.length > 0 && (
              <span
                className="
                  absolute
                  -top-2
                  -right-2
                  w-5
                  h-5
                  bg-black
                  text-white
                  text-[10px]
                  rounded-full
                  flex
                  items-center
                  justify-center
                "
              >
                {cartItems.length}
              </span>
            )}
          </Link>

          {/* PROFILE */}
          {/* PROFILE */}
          {
            !isAuthenticated ? (

              <Link
                to="/login"
                onClick={onClose}
                className="
        px-5
        py-2

        border
        border-black

        text-sm
      "
                style={{
                  fontFamily:
                    "Montserrat",
                }}
              >
                Login
              </Link>

            ) : (

              <Link
                to="/profile"
                onClick={onClose}
                className="
        flex
        items-center
        gap-3
      "
              >

                {/* LETTER AVATAR */}
                <div
                  className="
          w-10
          h-10

          rounded-full

          bg-black
          text-white

          flex
          items-center
          justify-center

          uppercase
        "
                  style={{
                    fontFamily:
                      "Satoshi-Bold",
                  }}
                >
                  {
                    user?.username?.charAt(0)
                  }
                </div>

                <div>

                  <p
                    className="
            text-sm
            text-black
          "
                  >
                    {user?.username}
                  </p>

                  <p
                    className="
            text-xs
            text-gray-500
          "
                  >
                    My Profile
                  </p>
                </div>
              </Link>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;