import { Link } from "react-router-dom";

import { useState } from "react";

import { useDispatch }
  from "react-redux";

import { useNavigate }
  from "react-router-dom";

import {
  registerUser,
} from "../../services/auth/authApi";

import {
  setUser,
} from "../../redux/slices/authSlice";

const RegisterForm = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({

      username: "",

      email: "",

      password: "",

      confirmPassword: "",

      firstName: "",

      lastName: "",
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

  // HANDLE REGISTER
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      // PASSWORD CHECK
      if (
        formData.password !==
        formData.confirmPassword
      ) {

        return setError(
          "Passwords do not match"
        );
      }

      try {

        setLoading(true);

        setError("");

        // BACKEND PAYLOAD
        const payload = {

          username:
            formData.username,

          email:
            formData.email,

          password:
            formData.password,

          fullName: {

            firstName:
              formData.firstName,

            lastName:
              formData.lastName,
          },
        };

        const data =
          await registerUser(payload);

        // SAVE USER
        dispatch(
          setUser(data.user)
        );

        // REDIRECT
        navigate("/");

      } catch (err) {

        setError(
          err.response?.data?.message
          || "Registration failed"
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

      {/* USERNAME */}
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
          Username
        </label>

        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter username"
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

      {/* FIRST NAME */}
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
          First Name
        </label>

        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter first name"
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

      {/* LAST NAME */}
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
          Last Name
        </label>

        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter last name"
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
          placeholder="Create password"
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

      {/* CONFIRM PASSWORD */}
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
          Confirm Password
        </label>

        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm password"
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
          ? "Creating Account..."
          : "Create Account"}
      </button>

      {/* LOGIN */}
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
        Already have an account?{" "}

        <Link
          to="/login"
          className="
            text-black
            hover:underline
          "
        >
          Sign In
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;