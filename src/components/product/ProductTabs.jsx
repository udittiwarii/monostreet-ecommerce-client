import { useState } from "react";
import ProductReview from "./ProductReview";

const tabs = [
  "Description",
  "Shipping",
  "Reviews",
];

const ProductTabs = () => {

  const [activeTab, setActiveTab] =
    useState("Description");

  return (
    <section className="mt-24">

      {/* TAB BUTTONS */}
      <div
        className="
          flex
          items-center
          gap-8
          border-b
          border-gray-200
          overflow-x-auto
        "
      >

        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              relative
              pb-5
              text-sm
              whitespace-nowrap
              transition-all
              duration-300

              ${activeTab === tab
                ? "text-black"
                : "text-gray-400"
              }
            `}
            style={{ fontFamily: "Montserrat" }}
          >

            {tab}

            {/* ACTIVE LINE */}
            {activeTab === tab && (
              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  w-full
                  h-[2px]
                  bg-black
                "
              />
            )}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="pt-10">

        {/* DESCRIPTION */}
        {activeTab === "Description" && (
          <div className="max-w-4xl">

            <p
              className="
                text-gray-600
                leading-8
                mb-6
              "
              style={{ fontFamily: "Satoshi" }}
            >
              Crafted with premium-quality fabrics,
              this piece is designed for everyday
              comfort and timeless streetwear
              aesthetics. The minimal silhouette
              and modern fit make it versatile for
              every wardrobe.
            </p>

            <p
              className="
                text-gray-600
                leading-8
              "
              style={{ fontFamily: "Satoshi" }}
            >
              Inspired by contemporary urban culture,
              MonoStreet blends minimalism with
              elevated fashion essentials.
            </p>
          </div>
        )}

        {/* SHIPPING */}
        {activeTab === "Shipping" && (
          <div className="max-w-4xl">

            <p
              className="
                text-gray-600
                leading-8
                mb-5
              "
              style={{ fontFamily: "Satoshi" }}
            >
              Orders are processed within 1–2
              business days.
            </p>

            <ul
              className="
                flex
                flex-col
                gap-4
                text-gray-600
              "
              style={{ fontFamily: "Satoshi" }}
            >
              <li>• Free shipping on orders above $100</li>

              <li>• Worldwide delivery available</li>

              <li>• Easy 7-day returns policy</li>

              <li>• Premium packaging included</li>
            </ul>
          </div>
        )}

        {/* REVIEWS */}
        {activeTab === "Reviews" && (
          <div className="max-w-4xl flex flex-col gap-8">

            {/* REVIEW */}


            < ProductReview
              name="Alex Morgan"
              review="Premium quality and amazing fit. The fabric feels luxurious and the design is very minimal."
            />

            <ProductReview
              name="Ethan Walker"
              review="Definitely one of the cleanest streetwear pieces I’ve purchased. Highly recommended."
            />
          </div>
        )}
          </div>
    </section>
  );
};

export default ProductTabs;