import cn from "@utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";

const ButtonVariants = cva(
  "text-md font-button1 text-regular flex justify-center items-center disabled:bg-foundation-5 disabled:text-foundation-30 rounded-xl",
  {
    variants: {
      style: {
        filled: "bg-orange-400 text-white",
        white: "",
      },
    },
  }
);

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "style">,
    VariantProps<typeof ButtonVariants> {
  children?: ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  style,
  children,
  className,
  ...props
}) => {
  return (
    <button
      type="button"
      className={cn(ButtonVariants({ style }), className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
