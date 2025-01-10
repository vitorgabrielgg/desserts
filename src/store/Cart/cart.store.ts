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
    incrementQuantity: (state, action: PayloadAction<{ name: string }>) => {
      state.products.find(
        (product) => product.name === action.payload.name && product.quantity++
      );
    },
    decrementQuantity: (state, action: PayloadAction<{ name: string }>) => {
      state.products.find((product) => {
        if (product.name === action.payload.name) {
          if (product.quantity >= 2) {
            product.quantity--;
          } else {
            const indexProduct = state.products.findIndex(
              (p) => p.name === product.name
            );
            state.products.splice(indexProduct, 1);
          }
        }
      });
    },
  },
});

export const { addProduct, incrementQuantity, decrementQuantity } =
  cartStore.actions;

export default cartStore.reducer;
