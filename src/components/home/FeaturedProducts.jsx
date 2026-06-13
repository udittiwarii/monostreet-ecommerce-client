import { ArrowRight } from "lucide-react";

import Container from "../ui/Container";
import Button from "../ui/Button";

import featuredImage1 from "../../assets/images/featured-1.png";
import featuredImage2 from "../../assets/images/featured-2.png";

const FeaturedProducts = () => {
  return (
    <section className="py-24 bg-[#f8f8f8]">

      <Container>

        {/* TOP SECTION */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            gap-10
          "
        >

          {/* LEFT CARD */}
          <div
            className="
              relative
              overflow-hidden
              group
              flex-1
              h-[600px]
            "
          >

            {/* IMAGE */}
            <img
              src={featuredImage1}
              alt="Featured Collection"
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
                bg-black/20
              "
            />

            {/* CONTENT */}
            <div
              className="
                absolute
                bottom-0
                left-0
                p-8
                md:p-12
                text-white
              "
            >

              <p
                className="
                  uppercase
                  tracking-[4px]
                  text-xs
                  mb-4
                "
                style={{ fontFamily: "Montserrat" }}
              >
                Limited Drop
              </p>

              <h2
                className="
                  text-4xl
                  md:text-5xl
                  mb-6
                "
                style={{ fontFamily: "Satoshi-Bold" }}
              >
                Urban <br />
                Essentials
              </h2>

              <Button variant="light">
                Explore Now

                <ArrowRight size={18} />
              </Button>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div
            className="
              relative
              overflow-hidden
              group
              flex-1
              h-[600px]
            "
          >

            {/* IMAGE */}
            <img
              src={featuredImage2}
              alt="Featured Fashion"
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
                bg-black/20
              "
            />

            {/* CONTENT */}
            <div
              className="
                absolute
                bottom-0
                left-0
                p-8
                md:p-12
                text-white
              "
            >

              <p
                className="
                  uppercase
                  tracking-[4px]
                  text-xs
                  mb-4
                "
                style={{ fontFamily: "Montserrat" }}
              >
                New Season
              </p>

              <h2
                className="
                  text-4xl
                  md:text-5xl
                  mb-6
                "
                style={{ fontFamily: "Satoshi-Bold" }}
              >
                Modern <br />
                Streetwear
              </h2>

              <Button variant="light">
                Discover More

                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;