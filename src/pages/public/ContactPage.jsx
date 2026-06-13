import Container from "../../components/ui/Container";

const ContactPage = () => {
  return (
    <section className="bg-white min-h-screen py-20 pt-20">

      <Container>

        {/* TOP */}
        <div
          className="
            text-center
            mb-20
          "
        >

          <p
            className="
              uppercase
              tracking-[5px]
              text-xs
              text-gray-400
              mb-5
            "
            style={{ fontFamily: "Montserrat" }}
          >
            Contact Us
          </p>

          <h1
            className="
              text-5xl
              lg:text-7xl
              text-black
              leading-tight
              mb-6
            "
            style={{ fontFamily: "Satoshi-Bold" }}
          >
            Let’s Start A <br />
            Conversation
          </h1>

          <p
            className="
              text-gray-500
              max-w-2xl
              mx-auto
              leading-8
            "
            style={{ fontFamily: "Satoshi" }}
          >
            Have questions about products,
            collaborations, or support?
            We’d love to hear from you.
          </p>
        </div>

        {/* CONTENT */}
        <div
          className="
            grid
            lg:grid-cols-2
            gap-16
            items-start
          "
        >

          {/* LEFT */}
          <div className="space-y-10">

            <div>

              <p
                className="
                  uppercase
                  tracking-[4px]
                  text-xs
                  text-gray-400
                  mb-3
                "
                style={{ fontFamily: "Montserrat" }}
              >
                Email
              </p>

              <h2
                className="
                  text-2xl
                  text-black
                "
                style={{ fontFamily: "Satoshi-Bold" }}
              >
                hello@monostreet.com
              </h2>
            </div>

            <div>

              <p
                className="
                  uppercase
                  tracking-[4px]
                  text-xs
                  text-gray-400
                  mb-3
                "
                style={{ fontFamily: "Montserrat" }}
              >
                Phone
              </p>

              <h2
                className="
                  text-2xl
                  text-black
                "
                style={{ fontFamily: "Satoshi-Bold" }}
              >
                +91 0000000000
              </h2>
            </div>

            <div>

              <p
                className="
                  uppercase
                  tracking-[4px]
                  text-xs
                  text-gray-400
                  mb-3
                "
                style={{ fontFamily: "Montserrat" }}
              >
                Address
              </p>

              <h2
                className="
                  text-2xl
                  text-black
                  leading-relaxed
                "
                style={{ fontFamily: "Satoshi-Bold" }}
              >
                Indian Fashion Street <br />
                India
              </h2>
            </div>
          </div>

          {/* RIGHT */}
          <form className="flex flex-col gap-6">

            <input
              type="text"
              placeholder="Your Name"
              className="
                border
                border-gray-200
                px-5
                py-4
                outline-none
                focus:border-black
                transition-all
                duration-300
              "
              style={{ fontFamily: "Montserrat" }}
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
                border
                border-gray-200
                px-5
                py-4
                outline-none
                focus:border-black
                transition-all
                duration-300
              "
              style={{ fontFamily: "Montserrat" }}
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="
                border
                border-gray-200
                px-5
                py-4
                outline-none
                focus:border-black
                transition-all
                duration-300
                resize-none
              "
              style={{ fontFamily: "Montserrat" }}
            />

            <button
              className="
                bg-black
                text-white
                border
                border-black
                py-4
                hover:bg-white
                hover:text-black
                transition-all
                duration-300
              "
              style={{ fontFamily: "Montserrat" }}
            >
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default ContactPage;