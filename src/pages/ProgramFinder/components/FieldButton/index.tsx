import { useState } from "react";

interface FieldButtonProps {
  children: React.ReactNode;
}

const FieldButton: React.FC<FieldButtonProps> = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
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
