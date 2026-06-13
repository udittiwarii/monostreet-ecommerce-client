import {
  Heart,
  Minus,
  Plus,
  Star,
} from "lucide-react";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { setCart }
  from "../../redux/slices/cartSlice";
import Button from "../ui/Button";
import { addItemToCart } from "../../services/cart/cartApi";
import refreshCart from "../../utils/refreshCart";
import { createBuyNowOrder } from "../../services/orders/orderApi";
import { useNavigate } from "react-router-dom";

const sizes = ["S", "M", "L", "XL"];

const ProductInfo = ({ product }) => {

  const [selectedSize, setSelectedSize] = useState("M");

  const [quantity, setQuantity] = useState(1);

  const [loading, setLoading] = useState(false);


  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleAddToCart =
    async () => {

      try {

        await addItemToCart(
          product.id,
          quantity
        );

        await refreshCart(
          dispatch
        );

      } catch (error) {

        console.log(error);
      }
    };


  const handleBuyNow =
    async () => {

      setLoading(true);

      try {

        const response =
          await createBuyNowOrder(
            {
              productId: product.id,
              quantity
            }
          );

        console.log(response);

        navigate(
          `/payment/${response.orderId}`
        )

      } catch (error) {

        console.log(error);
      } finally {

        setLoading(false);
      }
    };

  return (
    <div className="w-full">

      {/* CATEGORY */}
      <p
        className="
          uppercase
          tracking-[4px]
          text-xs
          text-gray-500
          mb-4
        "
        style={{ fontFamily: "Montserrat" }}
      >
        {product.category}
      </p>

      {/* TITLE */}
      <h1
        className="
          text-4xl
          lg:text-5xl
          text-black
          mb-5
        "
        style={{ fontFamily: "Satoshi-Bold" }}
      >
        {product.title}
      </h1>

      {/* RATING */}
      <div
        className="
          flex
          items-center
          gap-3
          mb-6
        "
      >

        <div className="flex items-center gap-1">

          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={16}
              className="
                fill-black
                text-black
              "
            />
          ))}
        </div>

        <p
          className="
            text-sm
            text-gray-500
          "
          style={{ fontFamily: "Montserrat" }}
        >
          (124 Reviews)
        </p>
      </div>

      {/* PRICE */}
      <h2
        className="
          text-3xl
          text-black
          mb-8
        "
        style={{ fontFamily: "Satoshi-Bold" }}
      >
        ₹{product.amount}
      </h2>

      {/* DESCRIPTION */}
      <p
        className="
          text-gray-600
          leading-8
          mb-10
        "
        style={{ fontFamily: "Satoshi" }}
      >
        {product.description}
      </p>

      {/* SIZE */}
      <div className="mb-10">

        <h3
          className="
            text-sm
            text-black
            mb-4
          "
          style={{ fontFamily: "Montserrat" }}
        >
          Select Size
        </h3>

        <div className="flex items-center gap-4">

          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`
                w-12
                h-12
                border
                text-sm
                transition-all
                duration-300

                ${selectedSize === size
                  ? "bg-black text-gray-500 border-black"
                  : "border-gray-200 hover:border-black"
                }
              `}
              style={{ fontFamily: "Montserrat" }}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* QUANTITY */}
      <div className="mb-10">

        <h3
          className="
            text-sm
            text-black
            mb-4
          "
          style={{ fontFamily: "Montserrat" }}
        >
          Quantity
        </h3>

        <div
          className="
            flex
            items-center
            border
            border-gray-200
            w-fit
          "
        >

          <button
            onClick={() =>
              quantity > 1 &&
              setQuantity(quantity - 1)
            }
            className="
              w-12
              h-12
              flex
              items-center
              justify-center
            "
          >
            <Minus size={16} />
          </button>

          <span
            className="
              w-12
              text-center
            "
            style={{ fontFamily: "Montserrat" }}
          >
            {quantity}
          </span>

          <button
            onClick={() =>
              setQuantity(quantity + 1)
            }
            className="
              w-12
              h-12
              flex
              items-center
              justify-center
            "
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* BUTTONS */}
      <div
        className="
          flex
          flex-col
          sm:flex-row
          gap-4
        "
      >

        {/* ADD TO CART */}
        <button
          onClick={() =>
            handleAddToCart()
          }
          className="
            flex-1
            bg-black
            text-white
            py-4
            border
            border-black
            hover:bg-white
            hover:text-black
            transition-all
            duration-300
          "
          style={{ fontFamily: "Montserrat" }}
        >
          Add To Cart
        </button>

        <button

          onClick={
            () => handleBuyNow()
          }
          className="flex-1
            bg-white
            text-black

            py-4
            border
            border-black
            hover:bg-black
            hover:text-white
            transition-all
            duration-300"

          style={{ fontFamily: "Montserrat" }}
        >
          {loading ? "Processing..." : "Buy Now"}
        </button>

        {/* WISHLIST */}
        <Button
          variant="outline"


        >
          <Heart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;