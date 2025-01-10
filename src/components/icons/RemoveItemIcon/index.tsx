import { IconProps } from "@/types";
import React from "react";

export const RemoveItemIcon = (props: IconProps) => {
  return (
    <button
      className="group border border-rose-400 hover:border-rose-900 p-0.5 rounded-full transition-colors"
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        fill="none"
        viewBox="0 0 10 10"
      >
        <path
          className="fill-rose-400 group-hover:fill-rose-900 transition-colors"
          d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
        />
      </svg>
    </button>
  );
};
