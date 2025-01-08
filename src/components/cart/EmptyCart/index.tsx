import Image from "next/image";
import emptyCartIllustration from "../../../../public/images/illustration-empty-cart.svg";

export const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center pt-8 pb-4">
      <Image src={emptyCartIllustration} alt="Empty cart illustration" />
      <p className="text-rose-400 font-semibold text-sm">
        Your added items will appear here
      </p>
    </div>
  );
};