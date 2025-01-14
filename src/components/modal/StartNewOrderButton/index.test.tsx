import modalReducer, { openModal } from "../../../store/Modal/modal.store";
import cartReducer, { addProduct } from "../../../store/Cart/cart.store";
import { CartItemProps } from "@/types";
import { EnhancedStore, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { StartNewOrderButton } from ".";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Start new order button", () => {
  let store: EnhancedStore<{
    modal: ReturnType<typeof modalReducer>;
    cart: ReturnType<typeof cartReducer>;
  }>;

  const product: Omit<CartItemProps, "quantity"> = {
    name: "Waffle with Berries",
    price: 6.5,
  };

  beforeEach(() => {
    store = configureStore({
      reducer: { modal: modalReducer, cart: cartReducer },
    });
  });

  test("should reset the global state of the cart", () => {
    store.dispatch(addProduct(product));
    store.dispatch(openModal());

    renderStartNewOrderButton(store);

    const startNewOrderButton = screen.getByLabelText("Start new order button");

    fireEvent.click(startNewOrderButton);

    expect(store.getState().cart.products.length).toEqual(0);
    expect(store.getState().modal.isOpen).toEqual(false);
  });

  const renderStartNewOrderButton = (
    storeParam: EnhancedStore<{
      modal: ReturnType<typeof modalReducer>;
      cart: ReturnType<typeof cartReducer>;
    }>
  ) => {
    render(
      <Provider store={storeParam}>
        <StartNewOrderButton />
      </Provider>
    );
  };
});
