import { priceFormatter } from "@/utils";
import { RemoveItemIcon } from "@/components/icons";
import { useAppDispatch } from "@/store";
import { removeProduct } from "@/store/Cart/cart.store";
import { CartItemProps } from "@/types";

export const CartItem = ({ name, price, quantity }: CartItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <li className="flex items-center justify-between border-b border-rose-100 py-4">
      <div className="flex flex-col gap-1">
        <h3
          className="font-semibold text-rose-900"
          aria-label={`Cart item: ${name}`}
        >
          {name}
        </h3>
        <div className="flex gap-2.5">
          <p
            className="font-semibold text-red_color"
            aria-label={`Quantity of ${name}`}
          >
            {quantity}x
          </p>
          <p className="ml-2.5 text-rose-400" aria-label={`Price of ${name}`}>
            @ {priceFormatter(price)}
          </p>
          <p
            className="font-semibold text-rose-500"
            aria-label={`Total price of ${name}`}
          >
            {priceFormatter(quantity * price)}
          </p>
        </div>
      </div>

      <RemoveItemIcon
        aria-label={`Remove item ${name}`}
        onClick={() => dispatch(removeProduct({ name }))}
      />
    </li>
  );
};
