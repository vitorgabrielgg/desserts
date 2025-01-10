import { EnhancedStore, configureStore } from "@reduxjs/toolkit";
import cartReducer, { addProduct } from "../../../store/Cart/cart.store";
import { Provider } from "react-redux";
import { CartItemList } from ".";
import { render, screen } from "@testing-library/react";
import { CartItemProps } from "@/types";

describe("Cart item list", () => {
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
  test("should show the product in the cart item list", () => {
    store.dispatch(addProduct({ ...product }));

    renderCartItemList(store);

    const state = store.getState();
    expect(state.cart.products[0]).toEqual({ ...product, quantity: 1 });

    const cartItemName = screen.getByLabelText(`Cart item: ${product.name}`);
    const cartItemQuantity = screen.getByLabelText(
      `Quantity of ${product.name}`
    );
    const cartItemPrice = screen.getByLabelText(`Price of ${product.name}`);
    const cartItemTotalPrice = screen.getByLabelText(
      `Total price of ${product.name}`
    );

    const productQuantity = state.cart.products.find(
      (p) => p.name === product.name
    )!.quantity;

    expect(cartItemName.textContent).toContain(product.name);
    expect(cartItemQuantity.textContent).toContain(productQuantity.toString());
    expect(cartItemPrice.textContent).toContain(product.price.toString());
    expect(cartItemTotalPrice.textContent).toContain(
      (product.price * productQuantity).toString()
    );
  });

  const renderCartItemList = (
    storeParam: EnhancedStore<{ cart: ReturnType<typeof cartReducer> }>
  ) => {
    const products = storeParam.getState().cart.products;
    render(
      <Provider store={storeParam}>
        <CartItemList products={products} />
      </Provider>
    );
  };
});
