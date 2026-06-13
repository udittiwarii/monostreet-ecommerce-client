import {
  ArrowLeft,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

const BackButton = ({
  text = "Back",
}) => {

  const navigate =
    useNavigate();

  return (
    <button
      onClick={() =>
        navigate(-1)
      }
      className="
        flex
        items-center
        gap-3

        text-black

        hover:gap-4

        transition-all
        duration-300
      "
      style={{
        fontFamily:
          "Montserrat",
      }}
    >

      <div
        className="
          w-10
          h-10

          border
          border-gray-300

          flex
          items-center
          justify-center

          rounded-full

          hover:bg-black
          hover:text-white

          transition-all
          duration-300
        "
      >

        <ArrowLeft size={18} />
      </div>

      <span
        className="
          text-sm
          uppercase
          tracking-[2px]
        "
      >
        {text}
      </span>
    </button>
  );
};

export default BackButton;