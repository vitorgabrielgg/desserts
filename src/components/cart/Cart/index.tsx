import { useAppSelector } from "@/store";
import { CarbonNeutral } from "../CarbonNeutral";
import { CartItemList } from "../CartItemList";
import { ConfirmOrderButton } from "../ConfirmOrderButton";
import { EmptyCart } from "../EmptyCart";
import { OrderTotal } from "../OrderTotal";

export const Cart = () => {
  const { products } = useAppSelector((state) => state.cart);

  const totalPrice = products.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );

  const cartItemListTotalQuantity = products.reduce(
    (acc, cur) => acc + cur.quantity,
    0
  );

  return (
    <section className="bg-white px-6 py-6 shadow rounded-lg lg:max-w-[22rem] xl:max-w-96 flex-1">
      <h2 className="text-red_color font-bold text-2xl">
        Your Cart
        <span aria-label="Cart item list total quantity">
          {" "}
          ({cartItemListTotalQuantity})
        </span>
      </h2>

      {!products.length ? (
        <EmptyCart />
      ) : (
        <>
          <CartItemList products={products} />
          <OrderTotal totalPrice={totalPrice} />
          <CarbonNeutral />
          <ConfirmOrderButton />
        </>
      )}
    </section>
  );
};
