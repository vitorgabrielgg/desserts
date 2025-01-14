import { CartItemProps } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  products: CartItemProps[];
}

const initialState: CartState = {
  products: [],
};

export const cartStore = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (
      state,
      action: PayloadAction<Omit<CartItemProps, "quantity">>
    ) => {
      state.products.push({ ...action.payload, quantity: 1 });
    },

    removeProduct: (state, action: PayloadAction<{ name: string }>) => {
      state.products = state.products.filter(
        (product) => product.name !== action.payload.name
      );
    },

    incrementQuantity: (state, action: PayloadAction<{ name: string }>) => {
      state.products.find(
        (product) => product.name === action.payload.name && product.quantity++
      );
    },

    decrementQuantity: (state, action: PayloadAction<{ name: string }>) => {
      state.products.find(
        (product) => product.name === action.payload.name && product.quantity--
      );
    },

    resetCart: () => initialState,
  },
});

export const {
  addProduct,
  incrementQuantity,
  decrementQuantity,
  removeProduct,
  resetCart,
} = cartStore.actions;

export default cartStore.reducer;
