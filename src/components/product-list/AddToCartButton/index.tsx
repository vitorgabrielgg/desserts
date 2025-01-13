"use client";

import Image from "next/image";
import AddToCartIcon from "../../../../public/images/icon-add-to-cart.svg";
import {
  QuantityDecrementIcon,
  QuantityIncrementIcon,
} from "@/components/icons";
import { CartItemProps } from "@/types";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  addProduct,
  decrementQuantity,
  incrementQuantity,
  removeProduct,
} from "@/store/Cart/cart.store";

export const AddToCartButton = ({
  name,
  price,
}: Omit<CartItemProps, "quantity">) => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.cart);

  const isOnTheCart = products.find((product) => product.name === name);

  const productQuantity = isOnTheCart?.quantity;

  return (
    <div
      className={`${
        isOnTheCart ? "bg-red_color" : "group bg-white border"
      } h-12 w-44 absolute bottom-2 left-2/4 -translate-x-2/4 border-rose-500 hover:border-red_color rounded-3xl transition-colors`}
    >
      {isOnTheCart ? (
        <div
          className="flex items-center justify-between w-full h-full px-4"
          aria-label={`Change the quantity of ${name}`}
        >
          <QuantityDecrementIcon
            aria-label={`Decrement the quantity of ${name}`}
            onClick={() => {
              if (productQuantity && productQuantity >= 2) {
                dispatch(decrementQuantity({ name }));
              } else {
                dispatch(removeProduct({ name }));
              }
            }}
          />
          <span className="text-white font-semibold">{productQuantity}</span>
          <QuantityIncrementIcon
            aria-label={`Increment the quantity of ${name}`}
            onClick={() => dispatch(incrementQuantity({ name }))}
          />
        </div>
      ) : (
        <button
          className="flex items-center justify-center gap-2 px-10 h-full"
          aria-label={`Add to cart ${name}`}
          onClick={() => dispatch(addProduct({ name, price }))}
        >
          <Image src={AddToCartIcon} alt="Cart icon" />
          <p className="text-rose-900 group-hover:text-red_color font-semibold whitespace-nowrap transition-colors">
            Add to Cart
          </p>
        </button>
      )}
    </div>
  );
};
