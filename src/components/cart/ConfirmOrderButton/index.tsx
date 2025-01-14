import { Button } from "@/components/ui";
import { useAppDispatch } from "@/store";
import { openModal } from "@/store/Modal/modal.store";

export const ConfirmOrderButton = () => {
  const dispatch = useAppDispatch();

  return (
    <Button
      text="Confirm Order"
      aria-label="Confirm order button"
      onClick={() => {
        dispatch(openModal());
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    />
  );
};
