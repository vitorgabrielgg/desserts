import { useAppSelector } from "@/store";
import { CarbonNeutral } from "../CarbonNeutral";
import { CartItemList } from "../CartItemList";
import { ConfirmOrderButton } from "../ConfirmOrderButton";
import { EmptyCart } from "../EmptyCart";
import { OrderTotal } from "../OrderTotal";

export const Cart = () => {
  const { products } = useAppSelector((state) => state.cart);

  return (
    <section className="bg-white px-6 py-6 shadow rounded-lg lg:max-w-[22rem] xl:max-w-96 flex-1">
      <h2 className="text-red_color font-bold text-2xl">Your Cart (0)</h2>

      {!products.length ? (
        <EmptyCart />
      ) : (
        <>
          <CartItemList products={products} />
          <OrderTotal totalPrice={46.5} />
          <CarbonNeutral />
          <ConfirmOrderButton />
        </>
      )}
    </section>
  );
};
