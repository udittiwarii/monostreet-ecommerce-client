import {
  useState,
  useRef,
  useEffect,
} from "react";

import {
  useSelector,
  useDispatch,
} from "react-redux";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  logoutUser,
} from "../../services/auth/authApi";

import {
  logoutUserState,
} from "../../redux/slices/authSlice";

const ProfileDropdown = () => {

  const [open, setOpen] =
    useState(false);

  const dropdownRef =
    useRef();

  const dispatch =
    useDispatch();

  const navigate =
    useNavigate();

  const { user } =
    useSelector(
      (state) => state.auth
    );

  // CLOSE ON OUTSIDE CLICK
  useEffect(() => {

    const handleClickOutside =
      (e) => {

        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(
            e.target
          )
        ) {

          setOpen(false);
        }
      };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);

  // LOGOUT
  const handleLogout =
    async () => {

      try {

        await logoutUser();

        dispatch(
          logoutUserState()
        );

        navigate("/login");

      } catch (error) {

        console.log(error);
      }
    };

  return (
    <div
      ref={dropdownRef}
      className="relative"
    >

      {/* AVATAR */}
      <button
        onClick={() =>
          setOpen(!open)
        }
        className="
          w-11
          h-11

          rounded-full

          bg-black
          text-white

          flex
          items-center
          justify-center

          text-lg
          uppercase

          hover:scale-105

          transition-all
          duration-300
        "
        style={{
          fontFamily:
            "Satoshi-Bold",
        }}
      >
        {
          user?.username?.charAt(0)
        }
      </button>

      {/* DROPDOWN */}
      {open && (

        <div
          className="
            absolute
            right-0
            top-14

            w-64

            bg-white

            border
            border-gray-200

            shadow-2xl

            p-4

            z-50
          "
        >

          {/* USER INFO */}
          <div
            className="
              border-b
              border-gray-100
              pb-4
              mb-4
            "
          >

            <h3
              className="
                text-lg
                text-black
              "
            >
              {user?.username}
            </h3>

            <p
              className="
                text-sm
                text-gray-500
              "
            >
              {user?.email}
            </p>
          </div>

          {/* LINKS */}
          <div
            className="
              flex
              flex-col
            "
          >

            <Link
              to="/profile"
              className="
                py-3
                hover:text-gray-500
                transition-all
              "
            >
              Profile
            </Link>

            <Link
              to="/profile"
              className="
                py-3
                hover:text-gray-500
                transition-all
              "
            >
              Addresses
            </Link>

            <Link
              to="/orders"
              className="
    w-full

    border
    border-gray-200

    p-4

    hover:border-black

    transition-all
  "
            >
              My Orders
            </Link>

            <button
              onClick={
                handleLogout
              }
              className="
                py-3
                text-left
                text-red-500
              "
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;