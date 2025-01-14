import { Button } from "@/components/ui";
import { useAppDispatch } from "@/store";
import { resetCart } from "@/store/Cart/cart.store";
import { closeModal } from "@/store/Modal/modal.store";
import React from "react";

export const StartNewOrderButton = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(resetCart());
    dispatch(closeModal());
  };

  return (
    <Button
      text="Start New Order"
      aria-label="Start new order button"
      onClick={handleClick}
    />
  );
};
