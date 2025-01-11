import { EnhancedStore, configureStore } from "@reduxjs/toolkit";
import modalReducer from "../../../store/Modal/modal.store";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { ConfirmOrderButton } from ".";

describe("Confirm order button", () => {
  let store: EnhancedStore<{ modal: ReturnType<typeof modalReducer> }>;
  beforeEach(() => {
    store = configureStore({
      reducer: { modal: modalReducer },
    });
  });

  test("should update the isOpen state in modalStore to true", () => {
    renderConfirmOrderButton();

    const confirmOrderButton = screen.getByLabelText("Confirm order button");

    fireEvent.click(confirmOrderButton);

    expect(store.getState().modal.isOpen).toBeTruthy();
  });

  const renderConfirmOrderButton = () => {
    render(
      <Provider store={store}>
        <ConfirmOrderButton />
      </Provider>
    );
  };
});
