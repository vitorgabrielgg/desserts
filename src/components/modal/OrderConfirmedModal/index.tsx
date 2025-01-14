import Image from "next/image";
import orderConfirmedIcon from "../../../../public/images/icon-order-confirmed.svg";
import { useAppSelector } from "@/store";
import { OrderTotal } from "@/components/cart/OrderTotal";

export const OrderConfirmedModal = () => {
  const { products } = useAppSelector((state) => state.cart);

  const totalPrice = products.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );

  return (
    <div
      className="min-h-screen w-full fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-50 flex items-end sm:items-center justify-center"
      aria-label="Order confirmed modal"
    >
      <div className="bg-white w-full max-w-xl h-[87vh] sm:h-auto px-6 pt-8 pb-8 rounded-t-xl sm:rounded-xl overflow-auto">
        <Image src={orderConfirmedIcon} alt="Order confirmed icon" />
        <h2 className="font-bold text-rose-900 text-[2.5rem] sm:text-4xl leading-[1.1] mt-4 mb-2">
          Order Confirmed
        </h2>
        <p className="text-rose-500">We hope you enjoy your food!</p>

        <div className="bg-rose-50 pt-2 mt-8 rounded-lg">
          <div className="px-6">
            <OrderTotal totalPrice={totalPrice} />
          </div>
        </div>
      </div>
    </div>
  );
};
