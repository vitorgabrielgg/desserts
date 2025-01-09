"use client";

import { Cart, ProductList } from "@/components";
import { Provider } from "react-redux";
import store from "../store";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="bg-rose-50 min-h-screen p-5 lg:py-8 xl:py-14">
        <div className="flex flex-col gap-7 xl:gap-10 lg:flex-row lg:items-start max-w-7xl mx-auto">
          <section className="pt-2 flex-1">
            <h1 className="text-rose-900 font-bold text-4xl">Desserts</h1>
            <ProductList />
          </section>
          <Cart />
        </div>
      </main>
    </Provider>
  );
}
