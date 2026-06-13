import { Star } from "lucide-react";

const ProductReview = ({
  name,
  review,
}) => {
  return (
    <div
      className="
        border-b
        border-gray-100
        pb-8
      "
    >

      {/* HEADER */}
      <div
        className="
          flex
          items-center
          justify-between
          mb-4
        "
      >

        <h3
          className="text-lg"
          style={{ fontFamily: "Satoshi-Bold" }}
        >
          {name}
        </h3>

        {/* STARS */}
        <div className="flex items-center gap-1">

          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={15}
              className="
                fill-black
                text-black
              "
            />
          ))}
        </div>
      </div>

      {/* REVIEW */}
      <p
        className="
          text-gray-600
          leading-8
        "
        style={{ fontFamily: "Satoshi" }}
      >
        {review}
      </p>
    </div>
  );
};

export default ProductReview;