import { useState } from "react";

const ProductGallery = ({ product }) => {

  const images = product.images || [product.image];

  const [mainImage, setMainImage] = useState(images[0]?.url);

  return (
    <div
      className="
        flex
        flex-col-reverse
        lg:flex-row
        gap-5
      "
    >

      {/* THUMBNAILS */}
      <div
        className="
          flex
          lg:flex-col
          gap-4
          overflow-x-auto
        "
      >

        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setMainImage(img)}
            className={`
              min-w-[90px]
              h-[110px]
              overflow-hidden
              border
              transition-all
              duration-300

              ${
                mainImage === img
                  ? "border-black"
                  : "border-gray-200"
              }
            `}
          >

            <img
              src={img.url}
              alt="Product Thumbnail"
              className="
                w-full
                h-full
                object-cover
              "
            />
          </button>
        ))}
      </div>

      {/* MAIN IMAGE */}
      <div
        className="
          flex-1
          overflow-hidden
          bg-[#f5f5f5]
        "
      >

        <img
          src={mainImage}
          alt={product.title}
          className="
            w-full
            h-[500px]
            md:h-[700px]
            object-cover
            hover:scale-105
            transition-all
            duration-700
          "
        />
      </div>
    </div>
  );
};

export default ProductGallery;