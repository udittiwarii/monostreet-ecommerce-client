import Container from "../../components/ui/Container";

import aboutImage from "../../assets/images/aboutImage.png";

const AboutPage = () => {
  return (
    <section className="bg-white min-h-screen pt-20">

      {/* HERO */}
      <div
        className="
          relative
          w-full
          h-[60vh]
          overflow-hidden
        "
      >

        <img
          src={aboutImage}
          alt="About MonoStreet"
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
            justify-center
            text-center
            px-6
          "
        >

          <div>

            <p
              className="
                uppercase
                tracking-[5px]
                text-xs
                text-white/70
                mb-5
              "
              style={{ fontFamily: "Montserrat" }}
            >
              About MonoStreet
            </p>

            <h1
              className="
                text-5xl
                md:text-7xl
                text-white
                leading-tight
              "
              style={{ fontFamily: "Satoshi-Bold" }}
            >
              Minimal Fashion <br />
              Modern Culture
            </h1>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <Container>

        <div
          className="
            py-24
            grid
            lg:grid-cols-2
            gap-16
            items-center
          "
        >

          {/* LEFT */}
          <div>

            <p
              className="
                uppercase
                tracking-[4px]
                text-xs
                text-gray-400
                mb-5
              "
              style={{ fontFamily: "Montserrat" }}
            >
              Our Story
            </p>

            <h2
              className="
                text-4xl
                lg:text-5xl
                text-black
                leading-tight
                mb-8
              "
              style={{ fontFamily: "Satoshi-Bold" }}
            >
              Designed For <br />
              Modern Streetwear
            </h2>

            <p
              className="
                text-gray-600
                leading-8
                mb-6
              "
              style={{ fontFamily: "Satoshi" }}
            >
              MonoStreet was created for people who
              believe fashion should feel minimal,
              timeless, and expressive.
            </p>

            <p
              className="
                text-gray-600
                leading-8
              "
              style={{ fontFamily: "Satoshi" }}
            >
              Inspired by modern urban culture,
              we combine premium silhouettes with
              clean aesthetics to create elevated
              everyday fashion.
            </p>
          </div>

          {/* RIGHT */}
          <div
            className="
              bg-[#f5f5f5]
              overflow-hidden
            "
          >

            <img
              src={aboutImage}
              alt="MonoStreet"
              className="
                w-full
                h-[650px]
                object-cover
              "
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutPage;