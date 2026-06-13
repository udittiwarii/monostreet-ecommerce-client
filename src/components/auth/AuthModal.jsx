import { X } from "lucide-react";
import { Link } from "react-router-dom";

const AuthModal = ({ isOpen, onClose }) => {

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-black/50
        backdrop-blur-sm
        px-5
      "
    >

      {/* MODAL */}
      <div
        className="
          relative
          w-full
          max-w-md
          bg-white
          p-8
          sm:p-10
          overflow-hidden
        "
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="
            absolute
            top-5
            right-5
            text-gray-500
            hover:text-black
            transition-all
            duration-300
          "
        >
          <X size={22} />
        </button>

        {/* LOGO */}
        <div className="mb-8">

          <h2
            className="
              text-2xl
              tracking-[5px]
              text-black
            "
            style={{ fontFamily: "Montserrat" }}
          >
            MONOSTREET
          </h2>
        </div>

        {/* CONTENT */}
        <div className="mb-8">

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
            Authentication Required
          </p>

          <h1
            className="
              text-3xl
              text-black
              mb-4
            "
            style={{ fontFamily: "Satoshi-Bold" }}
          >
            Join MonoStreet
          </h1>

          <p
            className="
              text-gray-500
              leading-7
              text-sm
            "
            style={{ fontFamily: "Satoshi" }}
          >
            Sign in or create an account to continue
            shopping premium fashion collections.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col gap-4">

          {/* LOGIN */}
          <Link
            to="/login"
            className="
              w-full
              bg-black
              text-white
              py-4
              text-center
              border
              border-black
              hover:bg-white
              hover:text-black
              transition-all
              duration-300
            "
            style={{ fontFamily: "Montserrat" }}
          >
            Sign In
          </Link>

          {/* REGISTER */}
          <Link
            to="/register"
            className="
              w-full
              bg-white
              text-black
              py-4
              text-center
              border
              border-black
              hover:bg-black
              hover:text-white
              transition-all
              duration-300
            "
            style={{ fontFamily: "Montserrat" }}
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;