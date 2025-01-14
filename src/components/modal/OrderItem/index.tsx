import { priceFormatter } from "@/utils";

interface OrderItemProps {
  image: string;
  quantity: number;
  name: string;
  price: number;
}

export const OrderItem = ({ image, name, price, quantity }: OrderItemProps) => {
  return (
    <div
      className="w-full flex justify-between items-center border-b border-rose-100 py-4"
      aria-label={`Order item: ${name}`}
    >
      <div className="flex items-center gap-4 w-[80%]">
        <picture className="w-12 h-12">
          <img src={image} alt={name} className="w-full h-full rounded" />
        </picture>

        <div className="w-[70%]">
          <h3 className="text-rose-900 text-sm font-semibold shrink truncate">
            {name}
          </h3>
          <div className="flex gap-4">
            <span className="font-semibold text-red_color">{quantity}x</span>
            <p className="text-rose-400">@ {priceFormatter(price)}</p>
          </div>
        </div>
      </div>

      <span className="font-semibold text-rose-900">
        {priceFormatter(quantity * price)}
      </span>
    </div>
  );
};
