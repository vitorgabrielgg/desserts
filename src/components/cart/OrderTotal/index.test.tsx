import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import cartReducer, { addProduct } from "../../../store/Cart/cart.store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { OrderTotal } from ".";
import { CartItemProps } from "@/types";

describe("Order total", () => {
  let store: EnhancedStore<{ cart: ReturnType<typeof cartReducer> }>;
  beforeEach(() => {
    store = configureStore({
      reducer: { cart: cartReducer },
    });
  });

  const productWaffleWithBerries: Omit<CartItemProps, "quantity"> = {
    name: "Waffle with Berries",
    price: 6.5,
  };

  const productVanillaBeanCremeBrulee: Omit<CartItemProps, "quantity"> = {
    name: "Vanilla Bean Crème Brûlée",
    price: 7.0,
  };

  test("should show the total pride of order", () => {
    store.dispatch(addProduct({ ...productWaffleWithBerries }));
    store.dispatch(addProduct({ ...productVanillaBeanCremeBrulee }));

    const totalPrice = store
      .getState()
      .cart.products.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);

    renderOrderTotal(store, totalPrice);

    const orderTotalPrice = screen.getByLabelText("Order total price");

    expect(orderTotalPrice.textContent).toContain(totalPrice.toString());
  });

  const renderOrderTotal = (
    storeParam: EnhancedStore<{ cart: ReturnType<typeof cartReducer> }>,
    totalPrice: number
  ) => {
    render(
      <Provider store={storeParam}>
        <OrderTotal totalPrice={totalPrice} />
      </Provider>
    );
  };
});
