import {
  useEffect,
  useState,
} from "react";

import {
  useSelector,
} from "react-redux";

import {
  Plus,
} from "lucide-react";

import {
  getAddresses,
  deleteAddress,
} from "../../services/auth/authApi";

import AddressCard
  from "../../components/profile/AddressCard";

import AddAddressModal
  from "../../components/profile/AddAddressModal";
import BackButton from "../../components/ui/Backbutton";

const ProfilePage = () => {

  const [addresses, setAddresses] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [showModal, setShowModal] =
    useState(false);

  const { user } =
    useSelector(
      (state) => state.auth
    );

  // FETCH ADDRESSES
  useEffect(() => {

    const fetchAddresses =
      async () => {

        try {

          const data =
            await getAddresses();

          setAddresses(
            data.addresses
          );

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);
        }
      };

    fetchAddresses();

  }, []);

  // DELETE ADDRESS
  const handleDelete =
    async (id) => {

      try {

        const data =
          await deleteAddress(id);

        setAddresses(
          data.addresses
        );

      } catch (error) {

        console.log(error);
      }
    };

  return (
    <>
      <section

        className="
        min-h-screen
        bg-[#f8f8f8]
        pt-10
        px-5
        lg:px-10
        pb-20
      "
      >

        <BackButton className="pb-10" />


        <div
          className="
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-[350px_1fr]
          gap-10
        "
        >

          {/* LEFT PROFILE */}
          <div
            className="
            bg-white
            border
            border-gray-200
            p-8
            h-fit
          "
          >

            {/* AVATAR */}
            <div
              className="
              w-24
              h-24

              rounded-full

              bg-black
              text-white

              flex
              items-center
              justify-center

              text-4xl
              uppercase

              mb-8
            "
              style={{
                fontFamily:
                  "Satoshi-Bold",
              }}
            >
              {
                user?.username?.charAt(0)
              }
            </div>

            {/* USER INFO */}
            <div className="space-y-6">

              <div>

                <p className="text-gray-500 text-sm">
                  Username
                </p>

                <h2
                  className="text-2xl"
                  style={{
                    fontFamily:
                      "Satoshi-Bold",
                  }}
                >
                  {user?.username}
                </h2>
              </div>

              <div>

                <p className="text-gray-500 text-sm">
                  Email
                </p>

                <h2 className="text-lg">
                  {user?.email}
                </h2>
              </div>

              <div>

                <p className="text-gray-500 text-sm">
                  Full Name
                </p>

                <h2 className="text-lg">

                  {user?.fullName?.firstName}

                  {" "}

                  {user?.fullName?.lastName}
                </h2>
              </div>
            </div>
          </div>

          {/* RIGHT ADDRESSES */}
          <div>

            {/* TOP */}
            <div
              className="
              flex
              items-center
              justify-between
              mb-8
            "
            >

              <div>

                <h1
                  className="
                  text-4xl
                  mb-2
                "
                  style={{
                    fontFamily:
                      "Satoshi-Bold",
                  }}
                >
                  Saved Addresses
                </h1>

                <p className="text-gray-500">
                  Manage your shipping addresses
                </p>
              </div>

              {/* ADD BUTTON */}
              <button
                onClick={() =>
                  setShowModal(true)
                }
                className="
                flex
                items-center
                gap-3

                bg-black
                text-white

                px-6
                py-3

                hover:bg-gray-800

                transition-all
                duration-300
              "
                style={{
                  fontFamily:
                    "Montserrat",
                }}
              >
                <Plus size={18} />

                Add Address
              </button>
            </div>

            {/* LOADING */}
            {loading ? (

              <div>
                Loading...
              </div>

            ) : addresses.length === 0 ? (

              <div
                className="
                bg-white
                border
                border-dashed
                border-gray-300

                p-14

                text-center
              "
              >

                <h2
                  className="
                  text-2xl
                  mb-3
                "
                >
                  No Addresses Yet
                </h2>

                <p className="text-gray-500">
                  Add your first shipping address
                </p>
              </div>

            ) : (

              <div
                className="
                grid
                md:grid-cols-2
                gap-6
              "
              >

                {addresses.map(
                  (address) => (

                    <AddressCard
                      key={address._id}
                      address={address}
                      onDelete={
                        handleDelete
                      }
                    />
                  )
                )}
              </div>
            )}
          </div>
        </div>

        {/* MODAL */}
        <AddAddressModal
          isOpen={showModal}
          onClose={() =>
            setShowModal(false)
          }
          setAddresses={setAddresses}
        />
      </section>
    </>
  );
};

export default ProfilePage;