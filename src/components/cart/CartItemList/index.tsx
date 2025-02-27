import { CartItemProps } from "@/types";
import { CartItem } from "../CartItem";

interface CartListProps {
  products: CartItemProps[];
}

export const CartItemList = ({ products }: CartListProps) => {
  return (
    <ul className="mt-2" aria-label="Cart item list">
      {products.map((product) => (
        <CartItem
          key={product.name}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
        />
      ))}
    </ul>
  );
};
