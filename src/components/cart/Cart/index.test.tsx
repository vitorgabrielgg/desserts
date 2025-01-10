import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import cartReducer, {
  addProduct,
  incrementQuantity,
} from "../../../store/Cart/cart.store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { CartItemProps } from "@/types";
import { Cart } from ".";

describe("Cart", () => {
  let store: EnhancedStore<{ cart: ReturnType<typeof cartReducer> }>;

  const product: Omit<CartItemProps, "quantity"> = {
    name: "Waffle with Berries",
    price: 6.5,
  };

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

  test("should show the quantity of the cart item list", () => {
    store.dispatch(addProduct({ ...productWaffleWithBerries }));
    store.dispatch(incrementQuantity({ name: productWaffleWithBerries.name }));
    store.dispatch(addProduct({ ...productVanillaBeanCremeBrulee }));
    store.dispatch(
      incrementQuantity({ name: productVanillaBeanCremeBrulee.name })
    );

    renderCart(store);

    const cartItemListTotalQuantity = screen.getByLabelText(
      "Cart item list total quantity"
    );

    const totalQuantity = store
      .getState()
      .cart.products.reduce((acc, cur) => acc + cur.quantity, 0);

    expect(cartItemListTotalQuantity.textContent).toContain(
      totalQuantity.toString()
    );
  });

  test("should show the empty cart component", () => {
    renderCart(store);

    const emptyCart = screen.getByLabelText("Empty cart");
    const cartItemList = screen.queryByLabelText("Cart item list");

    expect(emptyCart).toBeInTheDocument();
    expect(cartItemList).not.toBeInTheDocument();
  });

  test("should show the cart item list component", () => {
    store.dispatch(addProduct({ ...product }));

    renderCart(store);

    const emptyCart = screen.queryByLabelText("Empty cart");
    const cartItemList = screen.getByLabelText("Cart item list");

    expect(cartItemList).toBeInTheDocument();
    expect(emptyCart).not.toBeInTheDocument();
  });

  const renderCart = (
    storeParam: EnhancedStore<{ cart: ReturnType<typeof cartReducer> }>
  ) => {
    render(
      <Provider store={storeParam}>
        <Cart />
      </Provider>
    );
  };
});
