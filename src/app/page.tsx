"use client";

import { Desserts } from "@/components";
import { Provider } from "react-redux";
import store from "../store";

export default function Home() {
  return (
    <Provider store={store}>
      <Desserts />
    </Provider>
  );
}
