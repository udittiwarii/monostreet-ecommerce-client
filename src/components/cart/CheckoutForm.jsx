const CheckoutForm = () => {
  return (
    <form className="flex flex-col gap-6">

      {/* NAME */}
      <div>

        <label
          className="
            block
            text-sm
            text-gray-700
            mb-3
          "
          style={{ fontFamily: "Montserrat" }}
        >
          Full Name
        </label>

        <input
          type="text"
          placeholder="Enter your full name"
          className="
            w-full
            bg-white
            border
            border-gray-200
            px-5
            py-4
            outline-none
            focus:border-black
            transition-all
            duration-300
          "
        />
      </div>

      {/* EMAIL */}
      <div>

        <label
          className="
            block
            text-sm
            text-gray-700
            mb-3
          "
          style={{ fontFamily: "Montserrat" }}
        >
          Email Address
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          className="
            w-full
            bg-white
            border
            border-gray-200
            px-5
            py-4
            outline-none
            focus:border-black
            transition-all
            duration-300
          "
        />
      </div>

      {/* ADDRESS */}
      <div>

        <label
          className="
            block
            text-sm
            text-gray-700
            mb-3
          "
          style={{ fontFamily: "Montserrat" }}
        >
          Address
        </label>

        <input
          type="text"
          placeholder="Street address"
          className="
            w-full
            bg-white
            border
            border-gray-200
            px-5
            py-4
            outline-none
            focus:border-black
            transition-all
            duration-300
          "
        />
      </div>

      {/* CITY + ZIP */}
      <div
        className="
          grid
          sm:grid-cols-2
          gap-6
        "
      >

        {/* CITY */}
        <div>

          <label
            className="
              block
              text-sm
              text-gray-700
              mb-3
            "
            style={{ fontFamily: "Montserrat" }}
          >
            City
          </label>

          <input
            type="text"
            placeholder="City"
            className="
              w-full
              bg-white
              border
              border-gray-200
              px-5
              py-4
              outline-none
              focus:border-black
              transition-all
              duration-300
            "
          />
        </div>

        {/* ZIP */}
        <div>

          <label
            className="
              block
              text-sm
              text-gray-700
              mb-3
            "
            style={{ fontFamily: "Montserrat" }}
          >
            ZIP Code
          </label>

          <input
            type="text"
            placeholder="ZIP Code"
            className="
              w-full
              bg-white
              border
              border-gray-200
              px-5
              py-4
              outline-none
              focus:border-black
              transition-all
              duration-300
            "
          />
        </div>
      </div>

      {/* COUNTRY */}
      <div>

        <label
          className="
            block
            text-sm
            text-gray-700
            mb-3
          "
          style={{ fontFamily: "Montserrat" }}
        >
          Country
        </label>

        <select
          className="
            w-full
            bg-white
            border
            border-gray-200
            px-5
            py-4
            outline-none
            focus:border-black
            transition-all
            duration-300
          "
        >
          <option>India</option>
          <option>United States</option>
          <option>United Kingdom</option>
        </select>
      </div>

      {/* BUTTON */}
      <button
        className="
          w-full
          mt-4
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
        Place Order
      </button>
    </form>
  );
};

export default CheckoutForm;