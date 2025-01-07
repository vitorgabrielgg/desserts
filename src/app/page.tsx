import { ProductList } from "@/components";

export default function Home() {
  return (
    <main className="bg-rose-50 min-h-screen p-5 flex flex-col">
      <section>
        <h1 className="text-rose-900 font-bold text-4xl">Desserts</h1>
        <ProductList />
      </section>
    </main>
  );
}
