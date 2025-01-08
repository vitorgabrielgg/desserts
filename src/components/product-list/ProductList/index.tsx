import productData from "../../../../data.json";
import { ProductCard } from "../ProductCard";

export const ProductList = () => {
  return (
    <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-6">
      {productData.map((product, i) => (
        <ProductCard key={i} {...product} />
      ))}
    </ul>
  );
};
