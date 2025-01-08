import Image from "next/image";
import removeItemIcon from "../../../../public/images/icon-remove-item.svg";
import { priceFormatter } from "@/utils";

interface CartItemProps {
  quantity: number;
  price: number;
  name: string;
}

export const CartItem = ({ name, price, quantity }: CartItemProps) => {
  return (
    <li className="flex items-center justify-between border-b border-rose-100 py-4">
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-rose-900">{name}</h3>
        <div className="flex gap-2.5">
          <p className="font-semibold text-red_color">{quantity}x</p>
          <p className="ml-2.5 text-rose-400">@ {priceFormatter(price)}</p>
          <p className="font-semibold text-rose-500">
            {priceFormatter(quantity * price)}
          </p>
        </div>
      </div>

      <button className="border border-rose-400 p-0.5 rounded-full">
        <Image src={removeItemIcon} alt="Remove item from cart" />
      </button>
    </li>
  );
};
