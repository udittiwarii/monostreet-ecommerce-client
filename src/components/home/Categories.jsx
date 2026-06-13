import { Link } from "react-router-dom";

import SectionTitle from "../ui/SectionTitle";
import Container from "../ui/Container";

import menImage from "../../assets/images/category-men.png";
import womenImage from "../../assets/images/category-women.png";
import streetwearImage from "../../assets/images/category-streetwear.png";
import accessoriesImage from "../../assets/images/category-accessories.png";

const categoriesData = [
  {
    id: 1,
    title: "Men",
    image: menImage,
  },
  {
    id: 2,
    title: "Women",
    image: womenImage,
  },
  {
    id: 3,
    title: "Streetwear",
    image: streetwearImage,
  },
  {
    id: 4,
    title: "Accessories",
    image: accessoriesImage,
  },
];

const Categories = () => {
  return (
    <section className="py-24 bg-white">

      <Container>

        {/* SECTION TITLE */}
        <SectionTitle
          subtitle="Collections"
          title="Shop By Category"
        />

        {/* CATEGORY GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >

          {categoriesData.map((category) => (
            <Link
              key={category.id}
              to="/collections"
              className="
                group
                relative
                overflow-hidden
                h-[450px]
              "
            >

              {/* IMAGE */}
              <img
                src={category.image}
                alt={category.title}
                className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-110
                  transition-all
                  duration-700
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-black/20
                  group-hover:bg-black/30
                  transition-all
                  duration-500
                "
              />

              {/* CONTENT */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  w-full
                  p-6
                "
              >

                <h3
                  className="
                    text-3xl
                    text-white
                    mb-2
                  "
                  style={{ fontFamily: "Satoshi-Bold" }}
                >
                  {category.title}
                </h3>

                <p
                  className="
                    text-white/80
                    text-sm
                    tracking-wide
                  "
                  style={{ fontFamily: "Montserrat" }}
                >
                  Explore Collection
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;