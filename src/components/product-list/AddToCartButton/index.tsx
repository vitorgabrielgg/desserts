import Image from "next/image";
import AddToCartIcon from "../../../../public/images/icon-add-to-cart.svg";

export const AddToCartButton = () => {
  return (
    <button className="bg-white h-12 w-44 px-10 absolute bottom-2 left-2/4 -translate-x-2/4 border border-rose-500 rounded-3xl">
      <div className="flex items-center justify-center gap-2">
        <Image src={AddToCartIcon} alt="Cart icon" />
        <p className="text-rose-900 font-semibold whitespace-nowrap">
          Add to Cart
        </p>
      </div>
    </button>
  );
};
