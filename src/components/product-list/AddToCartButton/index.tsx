"use client";

import Image from "next/image";
import AddToCartIcon from "../../../../public/images/icon-add-to-cart.svg";
import {
  QuantityDecrementIcon,
  QuantityIncrementIcon,
} from "@/components/icons";
import { CartItemProps } from "@/types";
import { useAppDispatch, useAppSelector } from "@/store";
import { addProduct } from "@/store/Cart/cart.store";

export const AddToCartButton = ({
  name,
  price,
}: Omit<CartItemProps, "quantity">) => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.cart);

  console.log(products);

  const isOnTheCart = products.find((product) => product.name === name);

  return (
    <button
      className={`${
        isOnTheCart ? "bg-red_color" : "group bg-white border"
      } h-12 w-44 absolute bottom-2 left-2/4 -translate-x-2/4 border-rose-500 hover:border-red_color rounded-3xl transition-colors`}
    >
      {isOnTheCart ? (
        <div
          className="flex items-center justify-between w-full h-full px-4"
          aria-label={`Change the quantity of ${name}`}
        >
          <QuantityDecrementIcon />
          <span className="text-white font-semibold">1</span>
          <QuantityIncrementIcon />
        </div>
      ) : (
        <div
          className="flex items-center justify-center gap-2 px-10 h-full"
          aria-label={`Add to cart ${name}`}
          onClick={() => dispatch(addProduct({ name, price }))}
        >
          <Image src={AddToCartIcon} alt="Cart icon" />
          <p className="text-rose-900 group-hover:text-red_color font-semibold whitespace-nowrap transition-colors">
            Add to Cart
          </p>
        </div>
      )}
    </button>
  );
};
