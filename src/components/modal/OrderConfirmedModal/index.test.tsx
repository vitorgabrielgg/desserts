import { EnhancedStore, configureStore } from "@reduxjs/toolkit";
import modalReducer, { openModal } from "../../../store/Modal/modal.store";
import cartReducer from "../../../store/Cart/cart.store";
import { fireEvent, render, screen } from "@testing-library/react";
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

  test("should hide the order confirmed modal when clicking outside the modal", () => {
    store.dispatch(openModal());
    store.dispatch(addProduct(product));

    renderMainPage(store);

    const outsideModal = screen.getByLabelText("Background modal");

    fireEvent.click(outsideModal);

    const orderConfirmedModal = screen.queryByLabelText(
      "Order confirmed modal"
    );

    expect(orderConfirmedModal).not.toBeInTheDocument();
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
