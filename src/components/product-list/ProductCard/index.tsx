import React from "react";
import { AddToCartButton } from "../AddToCartButton";
import { priceFormatter } from "@/utils";

interface ProductCardProps {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
}

export const ProductCard = ({
  category,
  image,
  name,
  price,
}: ProductCardProps) => {
  return (
    <li>
      <div className="pb-8 relative">
        <picture>
          <img
            src={image.mobile}
            alt=""
            className="max-h-[257px] w-full rounded-lg shadow"
          />
        </picture>

        <AddToCartButton />
      </div>
      <div className="">
        <span className="text-rose-500 text-sm">{category}</span>
        <h3 className="text-rose-900 font-semibold">{name}</h3>
        <p className="text-red_color font-semibold">{priceFormatter(price)}</p>
      </div>
    </li>
  );
};
