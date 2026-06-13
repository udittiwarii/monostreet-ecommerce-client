import { Link } from "react-router-dom";

import logoMain from "../../assets/MONOSTREET_LOGO_2BGREMOVE.png";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white pt-20 pb-10">

      <div
        className="
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          lg:px-16
        "
      >

        {/* TOP */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-12
            border-b
            border-white/10
            pb-14
          "
        >

          {/* BRAND */}
          <div>

            <img
              src={logoMain}
              alt="MONOSTREET"
              className="h-14 mb-6 brightness-0 invert"
            />

            <p
              className="
                text-white/60
                leading-7
                text-sm
                max-w-sm
              "
              style={{ fontFamily: "Satoshi" }}
            >
              Modern streetwear crafted for timeless
              fashion and premium minimal aesthetics.
            </p>
          </div>

          {/* SHOP */}
          <div>

            <h3
              className="
                text-lg
                mb-6
              "
              style={{ fontFamily: "Satoshi-Bold" }}
            >
              Shop
            </h3>

            <div
              className="
                flex
                flex-col
                gap-4
                text-white/60
                text-sm
              "
              style={{ fontFamily: "Montserrat" }}
            >
              <Link to="/">New Arrivals</Link>
              <Link to="/">Men</Link>
              <Link to="/">Women</Link>
              <Link to="/">Accessories</Link>
            </div>
          </div>

          {/* COMPANY */}
          <div>

            <h3
              className="
                text-lg
                mb-6
              "
              style={{ fontFamily: "Satoshi-Bold" }}
            >
              Company
            </h3>

            <div
              className="
                flex
                flex-col
                gap-4
                text-white/60
                text-sm
              "
              style={{ fontFamily: "Montserrat" }}
            >
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/">Careers</Link>
              <Link to="/">Privacy Policy</Link>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div>

            <h3
              className="
                text-lg
                mb-6
              "
              style={{ fontFamily: "Satoshi-Bold" }}
            >
              Stay Updated
            </h3>

            <p
              className="
                text-white/60
                text-sm
                leading-7
                mb-6
              "
              style={{ fontFamily: "Satoshi" }}
            >
              Subscribe for exclusive drops and
              latest collections.
            </p>

            <div className="flex flex-col gap-4">

              <input
                type="email"
                placeholder="Enter your email"
                className="
                  bg-transparent
                  border
                  border-white/20
                  px-4
                  py-3
                  outline-none
                  text-sm
                  placeholder:text-white/40
                "
                style={{ fontFamily: "Montserrat" }}
              />

              <button
                className="
                  bg-white
                  text-black
                  py-3
                  hover:bg-black
                  hover:text-white
                  border
                  border-white
                  transition-all
                  duration-300
                  text-sm
                "
                style={{ fontFamily: "Montserrat" }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            pt-8
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
          "
        >

          <p
            className="
              text-white/40
              text-sm
            "
            style={{ fontFamily: "Montserrat" }}
          >
            © 2026 MONOSTREET. All Rights Reserved.
          </p>

          <div
            className="
              flex
              items-center
              gap-6
              text-sm
              text-white/40
            "
            style={{ fontFamily: "Montserrat" }}
          >
            <Link to="/">Instagram</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">Pinterest</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;