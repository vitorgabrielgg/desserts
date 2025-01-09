import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cart/cart.store";
import { useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
