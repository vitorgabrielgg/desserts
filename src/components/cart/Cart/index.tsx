import { CarbonNeutral } from "../CarbonNeutral";
import { CartItem } from "../CartItem";
import { OrderTotal } from "../OrderTotal";

export const Cart = () => {
  return (
    <section className="bg-white mt-7 px-6 py-6 shadow rounded-lg">
      <h2 className="text-red_color font-bold text-2xl">Your Cart (0)</h2>

      <ul className="mt-2">
        <CartItem name="Classic Tiramisu" price={5.5} quantity={1} />
        <CartItem name="Vanilla Bean Crème Brûlée" price={7.0} quantity={4} />
        <CartItem name="Vanilla Panna Cotta" price={6.5} quantity={2} />
      </ul>

      <OrderTotal totalPrice={46.5} />
      <CarbonNeutral />
    </section>
  );
};
