import { EnhancedStore, configureStore } from "@reduxjs/toolkit";
import modalReducer, { openModal } from "../../../store/Modal/modal.store";
import cartReducer from "../../../store/Cart/cart.store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { addProduct } from "@/store/Cart/cart.store";
import { CartItemProps } from "@/types";
import { Desserts } from "@/components/desserts/Desserts";

describe("Order confirmed modal", () => {
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

  test("should show the order confirmed modal when the isOpen state is true", () => {
    store.dispatch(openModal());
    store.dispatch(addProduct(product));

    renderMainPage(store);

    const orderConfirmedModal = screen.getByLabelText("Order confirmed modal");

    const orderItem = screen.getByLabelText(`Order item: ${product.name}`);

    expect(orderConfirmedModal).toBeInTheDocument();
    expect(orderItem).toBeInTheDocument();
  });

  const renderMainPage = (
    storeParam: EnhancedStore<{
      modal: ReturnType<typeof modalReducer>;
      cart: ReturnType<typeof cartReducer>;
    }>
  ) => {
    render(
      <Provider store={storeParam}>
        <Desserts />
      </Provider>
    );
  };
});
