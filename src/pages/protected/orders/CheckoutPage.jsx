import {
    useEffect,
    useState,
} from "react";

import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import Container from "../../../components/ui/Container";

import {
    createOrderFromCart,
    updateOrderAddress,
} from "../../../services/orders/orderApi";

import {
    getAddresses,
} from "../../../services/auth/authApi";

const CheckoutPage = () => {

    const navigate =
        useNavigate();

    const [addresses, setAddresses] =
        useState([]);

    const [selectedAddress,
        setSelectedAddress] =
        useState(null);

    const [loading,
        setLoading] =
        useState(false);

    const {
        cartItems,
    } = useSelector(
        state => state.cart
    );

    useEffect(() => {

        const fetchAddresses =
            async () => {

                try {

                    const data =
                        await getAddresses();

                    const addressList =
                        data.addresses || [];

                    setAddresses(
                        addressList
                    );

                    if (
                        addressList.length
                    ) {

                        setSelectedAddress(
                            addressList[0]
                        );
                    }

                } catch (error) {

                    console.log(error);
                }
            };

        fetchAddresses();

    }, []);

    const subtotal =
        cartItems.reduce(

            (acc, item) =>

                acc +
                item.amount *
                item.quantity,

            0
        );

    const shipping =
        subtotal > 0
            ? 99
            : 0;

    const total =
        subtotal +
        shipping;

    const handlePlaceOrder =
        async () => {

            try {

                if (
                    !selectedAddress
                ) {

                    alert(
                        "Please select address"
                    );

                    return;
                }

                setLoading(true);

                const order =
                    await createOrderFromCart();

                await updateOrderAddress(

                    order.orderId,

                    selectedAddress
                );

                navigate(
                    `/payment/${order.orderId}`
                );

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);
            }
        };

    return (
        <section
            className="
        min-h-screen
        bg-white
        py-16
        pt-28
      "
        >

            <Container>

                <div
                    className="
            mb-14
          "
                >

                    <p
                        className="
              uppercase
              tracking-[4px]
              text-xs
              text-gray-500
              mb-4
            "
                    >
                        MonoStreet
                    </p>

                    <h1
                        className="
              text-4xl
              lg:text-5xl
            "
                        style={{
                            fontFamily:
                                "Satoshi-Bold",
                        }}
                    >
                        Checkout
                    </h1>

                </div>

                <div
                    className="
            grid
            lg:grid-cols-[1fr_420px]
            gap-14
          "
                >

                    {/* LEFT */}
                    <div>

                        <h2
                            className="
                text-2xl
                mb-8
              "
                            style={{
                                fontFamily:
                                    "Satoshi-Bold",
                            }}
                        >
                            Delivery Address
                        </h2>

                        <div
                            className="
                flex
                flex-col
                gap-4
              "
                        >

                            {addresses.map(
                                (address) => (

                                    <div
                                        key={
                                            address._id
                                        }

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

                      ${selectedAddress?._id ===
                                                address._id

                                                ? "border-black bg-gray-50"

                                                : "border-gray-200"
                                            }
                    `}
                                    >

                                        <div
                                            className="
                        flex
                        gap-4
                      "
                                        >

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

                        {/* ITEMS */}
                        <div
                            className="
                mt-16
              "
                        >

                            <h2
                                className="
                  text-2xl
                  mb-8
                "
                                style={{
                                    fontFamily:
                                        "Satoshi-Bold",
                                }}
                            >
                                Order Items
                            </h2>

                            <div
                                className="
                  flex
                  flex-col
                  gap-6
                "
                            >

                                {cartItems.map(
                                    (item) => (

                                        <div
                                            key={
                                                item.productId
                                            }

                                            className="
                        flex
                        gap-4
                        border-b
                        pb-6
                      "
                                        >

                                            <img
                                                src={
                                                    item.product
                                                        ?.images?.[0]?.url
                                                }
                                                alt={
                                                    item.product
                                                        ?.title
                                                }
                                                className="
                          w-24
                          h-24
                          object-cover
                        "
                                            />

                                            <div>

                                                <h3
                                                    className="
                            text-lg
                          "
                                                >
                                                    {
                                                        item.product
                                                            ?.title
                                                    }
                                                </h3>

                                                <p>
                                                    Qty:
                                                    {" "}
                                                    {
                                                        item.quantity
                                                    }
                                                </p>

                                                <p>
                                                    ₹
                                                    {
                                                        item.amount
                                                    }
                                                </p>

                                            </div>

                                        </div>
                                    ))}
                            </div>

                        </div>

                    </div>

                    {/* RIGHT */}
                    <div
                        className="
              border
              border-gray-200
              p-8
              sticky
              top-28
              h-fit
            "
                    >

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
                            Order Summary
                        </h2>

                        <div
                            className="
                flex
                justify-between
                mb-4
              "
                        >
                            <span>
                                Subtotal
                            </span>

                            <span>
                                ₹{subtotal}
                            </span>
                        </div>

                        <div
                            className="
                flex
                justify-between
                mb-8
              "
                        >
                            <span>
                                Shipping
                            </span>

                            <span>
                                ₹{shipping}
                            </span>
                        </div>

                        <div
                            className="
                border-t
                pt-6
                mb-10
                flex
                justify-between
              "
                        >
                            <span
                                className="
                  text-xl
                "
                            >
                                Total
                            </span>

                            <span
                                className="
                  text-2xl
                "
                            >
                                ₹{total}
                            </span>
                        </div>

                        <button

                            onClick={
                                handlePlaceOrder
                            }

                            disabled={
                                loading
                            }

                            className="
                w-full
                bg-black
                text-white
                py-4

                hover:bg-white
                hover:text-black

                border
                border-black

                transition-all
              "
                        >

                            {loading

                                ? "Creating Order..."

                                : "Place Order"}
                        </button>

                    </div>

                </div>

            </Container>

        </section>
    );
};

export default CheckoutPage;