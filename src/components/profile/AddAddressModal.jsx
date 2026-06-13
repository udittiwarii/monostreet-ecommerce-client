import {
    useState,
} from "react";

import {
    X,
} from "lucide-react";

import {
    addAddress,
} from "../../services/auth/authApi";

const AddAddressModal = ({
    isOpen,
    onClose,
    setAddresses,
}) => {

    const [formData, setFormData] =
        useState({

            street: "",

            city: "",

            state: "",

            zipCode: "",

            phone: "",

            country: "",
        });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]:
                e.target.value,
        });
    };

    const handleSubmit =
        async (e) => {

            e.preventDefault();

            try {

                const data =
                    await addAddress(
                        formData
                    );

                setAddresses(
                    data.addresses
                );

                onClose();

            } catch (error) {

                console.log(error);
            }
        };

    if (!isOpen) return null;

    return (
        <div
            className="
        fixed
        inset-0
        z-[100]

        bg-black/40
        backdrop-blur-sm

        flex
        items-center
        justify-center

        p-5
      "
        >

            <div
                className="
          bg-white

          w-full
          max-w-2xl

          p-8

          relative
        "
            >

                {/* CLOSE */}
                <button
                    onClick={onClose}
                    className="
            absolute
            top-5
            right-5
          "
                >
                    <X size={22} />
                </button>

                <h2
                    className="
            text-3xl
            mb-8
          "
                    style={{
                        fontFamily:
                            "Satoshi-Bold",
                    }}
                >
                    Add Address
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="
            grid
            md:grid-cols-2
            gap-5
          "
                >

                    <input
                        type="text"
                        name="street"
                        placeholder="Street"
                        onChange={handleChange}
                        className="
              border
              border-gray-200
              p-4
              outline-none
            "
                    />

                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        onChange={handleChange}
                        className="
              border
              border-gray-200
              p-4
              outline-none
            "
                    />

                    <input
                        type="text"
                        name="state"
                        placeholder="State"
                        onChange={handleChange}
                        className="
              border
              border-gray-200
              p-4
              outline-none
            "
                    />

                    <input
                        type="text"
                        name="zipCode"
                        placeholder={
                            formData.country === "IN"
                                ? "PIN Code"

                                : "ZIP Code"
                        }
                        onChange={handleChange}
                        className="
              border
              border-gray-200
              p-4
              outline-none
            "
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        onChange={handleChange}
                        className="
              border
              border-gray-200
              p-4
              outline-none
            "
                    />

                    <select
                        name="country"
                        onChange={handleChange}
                        className="
    border
    border-gray-200
    p-4
    outline-none
    bg-white
  "
                        required
                    >

                        <option value="">
                            Select Country
                        </option>

                        <option value="IN">
                            India
                        </option>

                        <option value="US">
                            United States
                        </option>

                        <option value="GB">
                            United Kingdom
                        </option>

                        <option value="CA">
                            Canada
                        </option>
                    </select>

                    <label
                        className="
    md:col-span-2

    flex
    items-center
    gap-3

    text-sm
  "
                    >

                        <input
                            type="checkbox"
                            name="isDefault"
                            onChange={(e) => {

                                setFormData({

                                    ...formData,

                                    isDefault:
                                        e.target.checked,
                                });
                            }}
                        />

                        Set as default address
                    </label>

                    <button
                        type="submit"
                        className="
              md:col-span-2

              bg-black
              text-white

              py-4

              hover:bg-gray-800

              transition-all
            "
                    >
                        Save Address
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddAddressModal;