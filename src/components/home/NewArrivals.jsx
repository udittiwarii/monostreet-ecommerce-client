import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import ProductCard from "../product/ProductCard";

import useProducts
  from "../../hooks/useProducts";

const NewArrivals = () => {
  const {
    products,
    loading,
  } = useProducts({
    limit: 4,

    sort: "newest",
  });
  return (
    <section className="py-24 bg-white">

      <Container>

        {/* SECTION TITLE */}
        <SectionTitle
          subtitle="Latest Collection"
          title="New Arrivals"
        />

        {/* PRODUCTS GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
        >

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default NewArrivals;