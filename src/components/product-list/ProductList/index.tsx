import React from "react";
import productData from "../../../../data.json";
import { ProductCard } from "../ProductCard";

export const ProductList = () => {
  return (
    <ul className="mt-7 grid grid-cols-1 gap-5">
      {productData.map((product, i) => (
        <ProductCard key={i} {...product} />
      ))}
    </ul>
  );
};
