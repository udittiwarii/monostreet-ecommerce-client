import { Link } from "react-router-dom";
import Button from "./Button";

const EmptyState = ({
  title,
  description,
  buttonText,
  buttonLink = "/collection",
}) => {
  return (
    <section
      className="
        flex
        flex-col
        items-center
        justify-center
        text-center
        py-24
      "
    >

      {/* TITLE */}
      <h2
        className="
          text-3xl
          sm:text-4xl
          text-black
          mb-5
        "
        style={{ fontFamily: "Satoshi-Bold" }}
      >
        {title}
      </h2>

      {/* DESCRIPTION */}
      <p
        className="
          text-gray-500
          leading-8
          max-w-md
          mb-10
        "
        style={{ fontFamily: "Satoshi" }}
      >
        {description}
      </p>

      {/* BUTTON */}
      <Link to={buttonLink}>
        <Button

          text={buttonText}
          variant="primary"
        >
          {buttonText}
        </Button>
      </Link>
    </section>
  );
};

export default EmptyState;