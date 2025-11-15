import Modal from "@/components/partials/Modal";
import ProductList from "@/components/partials/ProductList";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-10">
      <Modal title="TAMBAH PRODUK"/>
      <ProductList/>
    </div>
  );
}
