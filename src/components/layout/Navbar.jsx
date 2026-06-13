import {
  Menu,
  Search,
  ShoppingBag,
  Heart,
  User,
} from "lucide-react";

import { Link } from "react-router-dom";


import logoMain from "../../assets/MONOSTREET_LOGO_2BGREMOVE.png";

import { useSelector } from "react-redux"

import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import SearchOverlay from "../common/SearchOverlay";
import ProfileDropdown from "../profile/ProfileDropdown";
import useInitializeCart from "../../hooks/useInitializeCart";

const Navbar = () => {
  const { cartItems } = useSelector(
    (state) =>
      state.cart || []
  );

  const { wishlistItems } = useSelector(
    (state) => state.wishlist
  )

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOpenSearch, setIsOpenSearch] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);

  useInitializeCart();

  const {
    isAuthenticated,
    user,
  } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 40) {

        setIsScrolled(true);

      } else {

        setIsScrolled(false);
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);
  return (

    <header
      className={`
    fixed
    top-0
    left-0
    w-full
    z-50
    

    transition-all
    duration-500

    ${isScrolled
          ? `
          bg-white/80
          backdrop-blur-xl
          border-b
          border-gray-200
          shadow-sm
        `
          : `
          bg-transparent
        `
        }
  `}
    >

      <nav className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-4">

          {/* MOBILE MENU */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden">
            <Menu
              size={24}
              className="text-black"
            />
          </button>

          {/* LOGO */}
          <Link to="/">
            <img
              src={logoMain}
              alt="MONOSTREET"
              className="h-14 object-contain"
            />
          </Link>
        </div>

        {/* CENTER NAV LINKS */}
        <div
          className="
            hidden
            lg:flex
            items-center
            gap-12
            text-[15px]
            tracking-wide
            font-medium
          "
          style={{ fontFamily: "Montserrat" }}
        >
          <Link
            to="/"
            className="hover:text-gray-500 transition-all duration-300"
          >
            Home
          </Link>

          <Link
            to="/collection"
            className="hover:text-gray-500 transition-all duration-300"
          >
            Collections
          </Link>

          <Link
            to="/about"
            className="hover:text-gray-500 transition-all duration-300"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="hover:text-gray-500 transition-all duration-300"
          >
            Contact
          </Link>
        </div>

        {/* RIGHT ICONS */}
        {/* RIGHT ICONS */}
        <div className="flex items-center gap-5">

          {/* SEARCH */}
          <button
            onClick={() =>
              setIsOpenSearch(true)
            }
            className="
      hover:scale-110
      transition-all
      duration-300
    "
          >
            <Search size={20} />
          </button>

          {/* WISHLIST */}
          <Link
            to="/wishlist"
            className="relative"
          >

            <Heart size={20} />

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
          flex
          items-center
          justify-center
          rounded-full
        "
                style={{
                  fontFamily:
                    "Montserrat",
                }}
              >
                {wishlistItems.length}
              </span>
            )}
          </Link>

          {/* CART */}
          <Link
            to="/cart"
            className="relative"
          >

            <ShoppingBag size={20} />

            {cartItems?.length > 0 && (

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
          flex
          items-center
          justify-center
          rounded-full
        "
                style={{
                  fontFamily:
                    "Montserrat",
                }}
              >
                {cartItems?.length}
              </span>
            )}
          </Link>

          {/* AUTH */}
          {
            !isAuthenticated ? (

              <Link to="/login">

                <button
                  className="
            px-5
            py-2

            border
            border-black

            text-sm

            hover:bg-black
            hover:text-white

            transition-all
            duration-300
          "
                  style={{
                    fontFamily:
                      "Montserrat",
                  }}
                >
                  Login
                </button>

              </Link>

            ) : (

              <ProfileDropdown />
            )
          }
        </div>
      </nav>
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
      {/* SEARCH OVERLAY */}
      <SearchOverlay
        isOpen={isOpenSearch}
        onClose={() => setIsOpenSearch(false)}
      />
    </header>
  );
};

export default Navbar;