import { EnhancedStore, configureStore } from "@reduxjs/toolkit";
import modalReducer, { openModal } from "../../../store/Modal/modal.store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { OrderConfirmedModal } from ".";

describe("Order confirmed modal", () => {
  let store: EnhancedStore<{ modal: ReturnType<typeof modalReducer> }>;
  beforeEach(() => {
    store = configureStore({
      reducer: { modal: modalReducer },
    });
  });

  test("should show the order confirmed modal when the isOpen state is true", () => {
    store.dispatch(openModal());

    renderMainPage(store);

    const orderConfirmedModal = screen.getByLabelText("Order confirmed modal");

    expect(orderConfirmedModal).toBeInTheDocument();
  });

  const renderMainPage = (
    storeParam: EnhancedStore<{ modal: ReturnType<typeof modalReducer> }>
  ) => {
    const isOpen = storeParam.getState().modal.isOpen;

    render(
      <Provider store={storeParam}>
        {isOpen && <OrderConfirmedModal />}
      </Provider>
    );
  };
});
