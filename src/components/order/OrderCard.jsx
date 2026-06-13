import { Link }
  from "react-router-dom";

const OrderCard = ({ order }) => {

  const getStatusColor =
    (status) => {

      switch (status) {

        case "CONFIRMED":
          return "text-green-600";

        case "PENDING":
          return "text-yellow-600";

        case "CANCELLED":
          return "text-red-600";

        default:
          return "text-gray-600";
      }
    };

  return (

    <Link
      to={`/orders/${order._id}`}
      className="
        block

        border
        border-gray-200

        p-6

        hover:border-black

        transition-all
        duration-300
      "
    >

      <div
        className="
          flex
          justify-between
          items-start

          gap-4
        "
      >

        <div>

          <p
            className="
              text-xs

              uppercase
              tracking-[3px]

              text-gray-500
            "
          >
            Order
          </p>

          <h3
            className="
              text-xl
              mt-2
            "
            style={{
              fontFamily:
                "Satoshi-Bold",
            }}
          >
            {order.name}
          </h3>

          <p
            className="
              text-sm
              text-gray-500
              mt-2
            "
          >
            #{order._id}
          </p>

        </div>

        <div className="text-right">

          <p
            className={`
              text-sm
              font-medium

              ${getStatusColor(
                order.status
              )}
            `}
          >
            {order.status}
          </p>

          <h4
            className="
              text-xl
              mt-2
            "
            style={{
              fontFamily:
                "Satoshi-Bold",
            }}
          >
            ₹
            {
              order.totalPrice
                ?.total
            }
          </h4>

        </div>

      </div>

      <div
        className="
          mt-5

          flex
          justify-between

          text-sm
          text-gray-500
        "
      >

        <span>
          Payment:
          {" "}
          {
            order.paymentStatus
          }
        </span>

        <span>
          {
            new Date(
              order.createdAt
            ).toLocaleDateString()
          }
        </span>

      </div>

    </Link>
  );
};

export default OrderCard;