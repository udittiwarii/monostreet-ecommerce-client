const AddressSelector = ({
  addresses,
  selectedAddress,
  setSelectedAddress,
}) => {

  return (
    <div className="space-y-4">

      <h2
        className="text-3xl mb-8"
        style={{
          fontFamily:
            "Satoshi-Bold",
        }}
      >
        Select Delivery Address
      </h2>

      {addresses.map(
        (address) => (

          <div
            key={address._id}
            onClick={() =>
              setSelectedAddress(
                address
              )
            }
            className={`
              p-5
              border
              cursor-pointer
              transition-all

              ${
                selectedAddress?._id ===
                address._id

                  ? "border-black bg-gray-50"

                  : "border-gray-200"
              }
            `}
          >

            <div className="flex gap-3">

              <input
                type="radio"
                checked={
                  selectedAddress?._id ===
                  address._id
                }
                readOnly
              />

              <div>

                <p>
                  {address.street}
                </p>

                <p>
                  {address.city}
                </p>

                <p>
                  {address.state}
                </p>

                <p>
                  {address.country}
                </p>

                <p>
                  {address.zipCode}
                </p>

                <p>
                  {address.phone}
                </p>

              </div>
            </div>

          </div>
      ))}
    </div>
  );
};

export default AddressSelector;