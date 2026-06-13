import { ArrowRight } from "lucide-react";

import Container from "../ui/Container";

const Newsletter = () => {
  return (
    <section className="py-24 bg-[#f5f5f3] overflow-hidden">

      <Container>

        <div
          className="
            bg-white
            border
            border-gray-200
            p-8
            sm:p-12
            lg:p-16
          "
        >

          <div
            className="
              flex
              flex-col
              lg:flex-row
              items-center
              justify-between
              gap-14
            "
          >

            {/* LEFT CONTENT */}
            <div className="max-w-2xl">

              {/* SUBTITLE */}
              <p
                className="
                  uppercase
                  tracking-[4px]
                  text-xs
                  sm:text-sm
                  text-gray-500
                  mb-5
                "
                style={{ fontFamily: "Montserrat" }}
              >
                Stay Updated
              </p>

              {/* TITLE */}
              <h2
                className="
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  leading-tight
                  text-black
                  mb-6
                "
                style={{ fontFamily: "Satoshi-Bold" }}
              >
                Join The <br />
                MonoStreet Community
              </h2>

              {/* DESCRIPTION */}
              <p
                className="
                  text-gray-600
                  text-sm
                  sm:text-base
                  leading-8
                  max-w-xl
                "
                style={{ fontFamily: "Satoshi" }}
              >
                Subscribe for exclusive drops, premium
                collections, and early access to new arrivals.
              </p>
            </div>

            {/* RIGHT FORM */}
            <div className="w-full max-w-xl">

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  gap-4
                "
              >

                {/* INPUT */}
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    flex-1
                    bg-[#f7f7f7]
                    border
                    border-gray-200
                    px-6
                    py-4
                    text-black
                    outline-none
                    placeholder:text-gray-400
                  "
                  style={{ fontFamily: "Montserrat" }}
                />

                {/* BUTTON */}
                <button
                  className="
                    px-8
                    py-4
                    bg-black
                    text-white
                    hover:bg-white
                    hover:text-black
                    border
                    border-black
                    transition-all
                    duration-300
                    flex
                    items-center
                    justify-center
                    gap-3
                  "
                  style={{ fontFamily: "Montserrat" }}
                >
                  Subscribe

                  <ArrowRight size={18} />
                </button>
              </div>

              {/* SMALL TEXT */}
              <p
                className="
                  text-gray-400
                  text-xs
                  mt-5
                "
                style={{ fontFamily: "Montserrat" }}
              >
                By subscribing, you agree to receive
                marketing updates from MonoStreet.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;