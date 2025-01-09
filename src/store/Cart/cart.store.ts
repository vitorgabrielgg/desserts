import { CartItemProps } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  products: CartItemProps[];
}

const initialState: CartState = {
  products: [],
};

export const cartStore = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const {} = cartStore.actions;

export default cartStore.reducer;
