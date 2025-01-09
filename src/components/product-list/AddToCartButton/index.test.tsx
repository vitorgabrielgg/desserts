import { Provider } from "react-redux";
import store from "../../../store";
import { render, screen, fireEvent } from "@testing-library/react";
import { AddToCartButton } from ".";
import { CartItemProps } from "@/types";

describe("Add to cart button", () => {
  const product: Omit<CartItemProps, "quantity"> = {
    name: "Waffle with Berries",
    price: 6.5,
  };

  test("should add a product to the global state when clicking the button", async () => {
    renderAddToCartButton();

    const addToCartButton = screen.getByLabelText(
      `Add to cart ${product.name}`
    );

    fireEvent.click(addToCartButton);
    const state = store.getState();

    expect(state.cart.products).toHaveLength(1);
    expect(state.cart.products[0]).toEqual({ ...product, quantity: 1 });

    const changeQuantityField = screen.getByLabelText(
      `Change the quantity of ${product.name}`
    );

    expect(changeQuantityField).toBeInTheDocument();
    expect(
      screen.queryByLabelText(`Add to cart ${product.name}`)
    ).not.toBeInTheDocument();
  });

  const renderAddToCartButton = () => {
    render(
      <Provider store={store}>
        <AddToCartButton {...product} />
      </Provider>
    );
  };
});
