import { IconProps } from "@/types";

export const QuantityDecrementIcon = (props: IconProps) => {
  return (
    <button
      className="group h-5 w-5 hover:bg-white border border-white rounded-full transition-colors flex justify-center items-end"
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="11"
        fill="none"
        viewBox="0 0 10 10"
      >
        <path
          className="fill-white group-hover:fill-red_color transition-colors"
          d="M0 .375h10v1.25H0V.375Z"
        />
      </svg>
    </button>
  );
};
