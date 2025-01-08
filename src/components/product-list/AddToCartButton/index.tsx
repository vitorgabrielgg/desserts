import Image from "next/image";
import AddToCartIcon from "../../../../public/images/icon-add-to-cart.svg";

export const AddToCartButton = () => {
  return (
    <button className="group bg-white h-12 w-44 px-10 absolute bottom-2 left-2/4 -translate-x-2/4 border border-rose-500 hover:border-red_color rounded-3xl transition-colors">
      <div className="flex items-center justify-center gap-2">
        <Image src={AddToCartIcon} alt="Cart icon" />
        <p className="text-rose-900 group-hover:text-red_color font-semibold whitespace-nowrap transition-colors">
          Add to Cart
        </p>
      </div>
    </button>
  );
};
