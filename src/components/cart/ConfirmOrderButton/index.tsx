import { useAppDispatch } from "@/store";
import { openModal } from "@/store/Modal/modal.store";

export const ConfirmOrderButton = () => {
  const dispatch = useAppDispatch();

  return (
    <button
      className="bg-red_color hover:bg-dark_red_color w-full py-4 text-white font-semibold mt-6 rounded-full transition-colors"
      aria-label="Confirm order button"
      onClick={() => dispatch(openModal())}
    >
      Confirm Order
    </button>
  );
};
