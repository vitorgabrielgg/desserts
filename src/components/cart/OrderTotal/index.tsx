import { priceFormatter } from "@/utils";

interface OrderTotalProps {
  totalPrice: number;
}

export const OrderTotal = ({ totalPrice }: OrderTotalProps) => {
  return (
    <div className="flex items-center justify-between py-6 text-rose-900">
      <p>Order Total</p>
      <span className="font-bold text-[1.55rem]">
        {priceFormatter(totalPrice)}
      </span>
    </div>
  );
};
