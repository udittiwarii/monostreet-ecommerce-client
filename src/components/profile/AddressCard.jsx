import {
  Trash2,
  MapPin,
  Phone,
} from "lucide-react";

const AddressCard = ({
  address,
  onDelete,
}) => {

  return (
    <div
      className="
        bg-white
        border
        border-gray-200

        p-6

        hover:shadow-xl

        transition-all
        duration-300
      "
    >

      {/* TOP */}
      <div
        className="
          flex
          items-start
          justify-between
          mb-6
        "
      >

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          <MapPin size={18} />

          <h3
            className="
              text-xl
            "
            style={{
              fontFamily:
                "Satoshi-Bold",
            }}
          >
            {address.city}
          </h3>
        </div>

        {/* DELETE */}
        <button
          onClick={() =>
            onDelete(address._id)
          }
          className="
            text-red-500
            hover:scale-110
            transition-all
          "
        >
          <Trash2 size={18} />
        </button>
      </div>

      {/* DETAILS */}
      <div
        className="
          space-y-3
          text-gray-600
        "
      >

        <p>
          {address.street}
        </p>

        <p>
          {address.city},
          {" "}
          {address.state}
        </p>

        <p>
          {address.zipCode}
        </p>

        <p>
          {address.country}
        </p>

        <div
          className="
            flex
            items-center
            gap-2
            pt-3
          "
        >

          <Phone size={15} />

          <span>
            {address.phone}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;