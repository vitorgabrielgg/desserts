import { createSlice } from "@reduxjs/toolkit";

export const modalStore = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
  },
});

export const { openModal } = modalStore.actions;

export default modalStore.reducer;
