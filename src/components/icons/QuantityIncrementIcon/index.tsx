import { IconProps } from "@/types";

export const QuantityIncrementIcon = (props: IconProps) => {
  return (
    <button
      className="group hover:bg-white border border-white p-[3px] rounded-full transition-colors"
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
          d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
        />
      </svg>
    </button>
  );
};
