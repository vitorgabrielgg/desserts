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

    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalStore.actions;

export default modalStore.reducer;
