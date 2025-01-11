import { EnhancedStore, configureStore } from "@reduxjs/toolkit";
import cartReducer, { addProduct } from "../../../store/Cart/cart.store";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { CartItemProps } from "@/types";
import { Cart } from "../Cart";

describe("Cart item", () => {
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

  test("should remove a cart item from the cart", () => {
    store.dispatch(addProduct(product));

    renderCart(store);

    const cartItem = screen.getByLabelText(`Cart item: ${product.name}`);

    expect(cartItem).toBeInTheDocument();

    const removeItemButton = screen.getByLabelText(
      `Remove item ${product.name}`
    );
    fireEvent.click(removeItemButton);

    expect(
      screen.queryByLabelText(`Cart item: ${product.name}`)
    ).not.toBeInTheDocument();
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
