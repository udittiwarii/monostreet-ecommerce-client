import {
  Minus,
  Plus,
  Trash2,
} from "lucide-react";

import { useDispatch } from "react-redux";

import {
  updateCartItem,
  removeCartItem,
  getCart,
} from "../../services/cart/cartApi";

import {
  setCart,
} from "../../redux/slices/cartSlice";
import refreshCart from "../../utils/refreshCart";

const CartItem = ({ item }) => {

  const dispatch =
    useDispatch();

  const handleIncrease =
    async () => {

      await updateCartItem(
        item.productId,
        item.quantity + 1
      );

      await refreshCart(
        dispatch
      );
    };

  const handleDecrease =
    async () => {

      if (
        item.quantity <= 1
      ) return;

      await updateCartItem(
        item.productId,
        item.quantity - 1
      );

      await refreshCart(
        dispatch
      );
    };

  const handleRemove =
    async () => {

      await removeCartItem(
        item.productId
      );

      await refreshCart(
        dispatch
      );
    };

  return (
    <div
      className="
        flex
        flex-col
        sm:flex-row
        gap-6
        border-b
        border-gray-100
        pb-8
      "
    >

      <div
        className="
          w-full
          sm:w-[160px]
          h-[220px]
          bg-[#f5f5f5]
          overflow-hidden
        "
      >

        <img
          src={
            item.product?.images?.[0]?.url
          }
          alt={
            item.product?.title
          }
          className="
            w-full
            h-full
            object-cover
          "
        />

      </div>

      <div className="flex-1">

        <div
          className="
            flex
            justify-between
            gap-4
          "
        >

          <div>

            <p
              className="
                uppercase
                tracking-[3px]
                text-xs
                text-gray-500
                mb-3
              "
            >
              {
                item.product?.category
              }
            </p>

            <h2
              className="
                text-2xl
                mb-3
              "
              style={{
                fontFamily:
                  "Satoshi-Bold",
              }}
            >
              {
                item.product?.title
              }
            </h2>

          </div>

          <button
            onClick={
              handleRemove
            }
          >
            <Trash2 size={20} />
          </button>
        </div>

        <div
          className="
            flex
            justify-between
            mt-10
          "
        >

          <div
            className="
              flex
              items-center
              border
              border-gray-200
            "
          >

            <button
              onClick={
                handleDecrease
              }
              className="
                w-12
                h-12
              "
            >
              <Minus size={16} />
            </button>

            <span
              className="
                w-12
                text-center
              "
            >
              {item.quantity}
            </span>

            <button
              onClick={
                handleIncrease
              }
              className="
                w-12
                h-12
              "
            >
              <Plus size={16} />
            </button>

          </div>

          <h3
            className="
              text-2xl
            "
            style={{
              fontFamily:
                "Satoshi-Bold",
            }}
          >
            ₹
            {
              item.amount *
              item.quantity
            }
          </h3>

        </div>
      </div>
    </div>
  );
};

export default CartItem;