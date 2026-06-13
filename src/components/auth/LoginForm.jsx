import { Link } from "react-router-dom";

import { useState } from "react";

import { useDispatch }
  from "react-redux";

import { useNavigate }
  from "react-router-dom";

import {
  loginUser,
} from "../../services/auth/authApi";

import {
  setUser,
} from "../../redux/slices/authSlice";

const LoginForm = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  // HANDLE LOGIN
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        setError("");

        const data =
          await loginUser(formData);

        // SAVE USER
        dispatch(
          setUser(data.user)
        );

        // REDIRECT
        navigate("/");

      } catch (err) {

        setError(
          err.response?.data?.message
          || "Login failed"
        );

      } finally {

        setLoading(false);
      }
    };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        flex
        flex-col
        gap-6
      "
    >

      {/* ERROR */}
      {error && (

        <div
          className="
            bg-red-100
            border
            border-red-200
            text-red-500
            px-4
            py-3
            text-sm
          "
          style={{
            fontFamily: "Montserrat",
          }}
        >
          {error}
        </div>
      )}

      {/* EMAIL */}
      <div>

        <label
          className="
            block
            text-sm
            text-gray-700
            mb-3
          "
          style={{
            fontFamily: "Montserrat",
          }}
        >
          Email Address
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          className="
            w-full
            bg-white
            border
            border-gray-200
            px-5
            py-4
            outline-none
            text-black
            placeholder:text-gray-400
            focus:border-black
            transition-all
            duration-300
          "
          style={{
            fontFamily: "Satoshi",
          }}
        />
      </div>

      {/* PASSWORD */}
      <div>

        <label
          className="
            block
            text-sm
            text-gray-700
            mb-3
          "
          style={{
            fontFamily: "Montserrat",
          }}
        >
          Password
        </label>

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
          className="
            w-full
            bg-white
            border
            border-gray-200
            px-5
            py-4
            outline-none
            text-black
            placeholder:text-gray-400
            focus:border-black
            transition-all
            duration-300
          "
          style={{
            fontFamily: "Satoshi",
          }}
        />
      </div>

      {/* OPTIONS */}
      <div
        className="
          flex
          items-center
          justify-between
          gap-4
        "
      >

        {/* REMEMBER */}
        <label
          className="
            flex
            items-center
            gap-3
            text-sm
            text-gray-600
          "
          style={{
            fontFamily: "Montserrat",
          }}
        >

          <input type="checkbox" />

          Remember me
        </label>

        {/* FORGOT PASSWORD */}
        <Link
          to="/forgot-password"
          className="
            text-sm
            text-black
            hover:underline
          "
          style={{
            fontFamily: "Montserrat",
          }}
        >
          Forgot Password?
        </Link>
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        disabled={loading}
        className="
          w-full
          bg-black
          text-white
          py-4
          border
          border-black

          hover:bg-white
          hover:text-black

          transition-all
          duration-300

          mt-2

          disabled:opacity-70
          disabled:cursor-not-allowed
        "
        style={{
          fontFamily: "Montserrat",
        }}
      >
        {loading
          ? "Signing In..."
          : "Sign In"}
      </button>

      {/* REGISTER */}
      <p
        className="
          text-center
          text-sm
          text-gray-500
        "
        style={{
          fontFamily: "Montserrat",
        }}
      >
        Don’t have an account?{" "}

        <Link
          to="/register"
          className="
            text-black
            hover:underline
          "
        >
          Create Account
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;