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
  },
});

export const { addProduct } = cartStore.actions;

export default cartStore.reducer;
