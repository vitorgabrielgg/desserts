import { createSlice } from "@reduxjs/toolkit";

export const modalStore = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
  },
  reducers: {},
});

export default modalStore.reducer;
