import { Cart } from "@/components/cart/Cart";
import { OrderConfirmedModal } from "@/components/modal/OrderConfirmedModal";
import { ProductList } from "@/components/product-list/ProductList";
import { useAppSelector } from "@/store";
import { useEffect } from "react";

export const Desserts = () => {
  const { isOpen } = useAppSelector((state) => state.modal);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <main className="bg-rose-50 min-h-screen p-5 lg:py-8 xl:py-14">
        <div className="flex flex-col gap-7 xl:gap-10 lg:flex-row lg:items-start max-w-7xl mx-auto">
          <section className="pt-2 flex-1">
            <h1 className="text-rose-900 font-bold text-4xl">Desserts</h1>
            <ProductList />
          </section>
          <Cart />
        </div>
      </main>
      {isOpen && <OrderConfirmedModal />}
    </>
  );
};
