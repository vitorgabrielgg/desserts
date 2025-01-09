import { Provider } from "react-redux";
import cartReducer from "../../../store/Cart/cart.store";
import { render, screen, fireEvent } from "@testing-library/react";
import { AddToCartButton } from ".";
import { CartItemProps } from "@/types";
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";

describe("Add to cart button", () => {
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

  test("should add a product to the global state when clicking the button", () => {
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

  test("should increment the product quantity", () => {
    renderAddToCartButton();

    const addToCartButton = screen.getByLabelText(
      `Add to cart ${product.name}`
    );

    fireEvent.click(addToCartButton);

    const incrementQuantityButton = screen.getByLabelText(
      `Increment the quantity of ${product.name}`
    );

    fireEvent.click(incrementQuantityButton);
    const state = store.getState();

    expect(state.cart.products[0]).toEqual({ ...product, quantity: 2 });
  });

  test("should decrement the product quantity", () => {
    renderAddToCartButton();

    const addToCartButton = screen.getByLabelText(
      `Add to cart ${product.name}`
    );
    fireEvent.click(addToCartButton);

    const incrementQuantityButton = screen.getByLabelText(
      `Increment the quantity of ${product.name}`
    );
    fireEvent.click(incrementQuantityButton);

    let state = store.getState();

    expect(state.cart.products[0]).toEqual({ ...product, quantity: 2 });

    const decrementQuantityButton = screen.getByLabelText(
      `Decrement the quantity of ${product.name}`
    );
    fireEvent.click(decrementQuantityButton);

    state = store.getState();

    expect(state.cart.products[0]).toEqual({
      ...product,
      quantity: 1,
    });
  });

  const renderAddToCartButton = () => {
    render(
      <Provider store={store}>
        <AddToCartButton {...product} />
      </Provider>
    );
  };
});
