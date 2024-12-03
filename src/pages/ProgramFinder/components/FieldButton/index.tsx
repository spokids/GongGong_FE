import { useState } from "react";

interface FieldButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const FieldButton: React.FC<FieldButtonProps> = ({ children, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsClicked((prev) => !prev);
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type="button"
      className={`flex items-center gap-1 rounded-xl border-[1.5px] p-3 ${
        isClicked
          ? "border-orange-200 bg-orange-100"
          : "border-orange-100 bg-white"
      }`}
      onClick={handleClick}
    >
      <span
        className={`flex items-center gap-1 ${isClicked ? "text-orange-400" : "text-primary-70"}`}
      >
        {children}
      </span>
    </button>
  );
};

export default FieldButton;
