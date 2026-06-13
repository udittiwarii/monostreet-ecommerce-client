import { ArrowRight } from "lucide-react";

import Container from "../ui/Container";
import Button from "../ui/Button";

import promoImage from "../../assets/images/promo-banner.png";

const PromoBanner = () => {
  return (
    <section className="py-24 bg-white">

      <Container>

        <div
          className="
            relative
            overflow-hidden
            h-[500px]
            md:h-[650px]
            group
          "
        >

          {/* IMAGE */}
          <img
            src={promoImage}
            alt="Promo Banner"
            className="
              w-full
              h-full
              object-cover
              group-hover:scale-105
              transition-all
              duration-700
            "
          />

          {/* OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-black/30
            "
          />

          {/* CONTENT */}
          <div
            className="
              absolute
              inset-0
              flex
              items-center
              px-6
              md:px-16
            "
          >

            <div className="max-w-2xl text-white">

              {/* SUBTITLE */}
              <p
                className="
                  uppercase
                  tracking-[4px]
                  text-xs
                  md:text-sm
                  mb-5
                  text-white/80
                "
                style={{ fontFamily: "Montserrat" }}
              >
                Limited Collection
              </p>

              {/* TITLE */}
              <h2
                className="
                  text-4xl
                  sm:text-5xl
                  md:text-7xl
                  leading-tight
                  mb-6
                "
                style={{ fontFamily: "Satoshi-Bold" }}
              >
                Timeless <br />
                Minimalism
              </h2>

              {/* DESCRIPTION */}
              <p
                className="
                  text-white/70
                  text-sm
                  sm:text-base
                  md:text-lg
                  leading-7
                  max-w-xl
                  mb-10
                "
                style={{ fontFamily: "Satoshi" }}
              >
                Explore elevated essentials designed for
                modern streetwear culture and premium
                everyday fashion.
              </p>

              {/* BUTTON */}
              <Button variant="light">
                Explore Collection

                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PromoBanner;