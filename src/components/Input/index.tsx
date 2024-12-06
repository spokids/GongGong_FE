import { EyeIcon, HideIcon } from "@assets/svg";
import { forwardRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const style =
  "h-13 rounded-lg w-full px-3 py-[11px] font-regular focus:outline-none focus:outline-[1.5px] focus:bg-orange-50 focus:border-orange-200 border-[1.5px] border-orange-100";

const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const hideEdgePasswordIcon = `
        input::-ms-reveal {
          display: none;
        }
      `;

  return (
    <div className={twMerge("relative", className)}>
      <style>{hideEdgePasswordIcon}</style>
      <input
        ref={ref}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        className={twMerge(style, className)}
        {...props}
      />
      {type === "password" &&
        (showPassword ? (
          <EyeIcon
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-6 top-1/2 -translate-y-1/2 transform cursor-pointer"
          />
        ) : (
          <HideIcon
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-6 top-1/2 -translate-y-1/2 transform cursor-pointer"
          />
        ))}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
