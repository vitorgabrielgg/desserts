import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  text: string;
}

export const Button = ({ text, ...props }: ButtonProps) => {
  return (
    <button
      className="bg-red_color hover:bg-dark_red_color w-full py-4 text-white font-semibold mt-6 rounded-full transition-colors"
      {...props}
    >
      {text}
    </button>
  );
};
