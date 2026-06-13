import { Link } from "react-router-dom";

import RegisterForm from "../../components/auth/RegisterForm";

import authImage from "../../assets/images/auth-image.png";

const RegisterPage = () => {
  return (
    <section className="min-h-screen bg-white ">

      <div className="grid lg:grid-cols-2 min-h-screen">

        {/* LEFT IMAGE SECTION */}
        <div
          className="
            hidden
            lg:block
            relative
            overflow-hidden
          "
        >

          <img
            src={authImage}
            alt="Fashion"
            className="
              w-full
              h-full
              object-cover
            "
          />

          {/* OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-black/20
            "
          />

          {/* TEXT */}
          <div
            className="
              absolute
              bottom-16
              left-16
              text-white
              max-w-lg
            "
          >

            <p
              className="
                uppercase
                tracking-[4px]
                text-sm
                mb-4
              "
              style={{ fontFamily: "Montserrat" }}
            >
              MonoStreet
            </p>

            <h1
              className="
                text-5xl
                leading-tight
                mb-6
              "
              style={{ fontFamily: "Satoshi-Bold" }}
            >
              Join The Future <br />
              Of Street Fashion
            </h1>

            <p
              className="
                text-white/70
                leading-8
              "
              style={{ fontFamily: "Satoshi" }}
            >
              Create your account and explore curated
              collections inspired by modern culture.
            </p>
          </div>
        </div>

        {/* RIGHT FORM SECTION */}
        <div
          className="
            flex
            items-center
            justify-center
            px-6
            sm:px-10
            lg:px-20
            py-20
          "
        >

          <div className="w-full max-w-md">

            {/* LOGO */}
            <Link
              to="/"
              className="
                inline-block
                mb-10
              "
            >

              <h2
                className="
                  text-3xl
                  tracking-[6px]
                  text-black
                "
                style={{ fontFamily: "Montserrat" }}
              >
                MONOSTREET
              </h2>
            </Link>

            {/* HEADING */}
            <div className="mb-10">

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
                Create Account
              </p>

              <h1
                className="
                  text-4xl
                  text-black
                  mb-4
                "
                style={{ fontFamily: "Satoshi-Bold" }}
              >
                Sign Up
              </h1>

              <p
                className="
                  text-gray-500
                  leading-7
                "
                style={{ fontFamily: "Satoshi" }}
              >
                Register to access exclusive collections
                and premium fashion drops.
              </p>
            </div>

            {/* REGISTER FORM */}
            <RegisterForm />

            {/* LOGIN LINK */}
            <p
              className="
                mt-8
                text-sm
                text-gray-500
                text-center
              "
              style={{ fontFamily: "Montserrat" }}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;