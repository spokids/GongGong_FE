import React, { useState } from "react";

interface FieldButtonProps {
  icon: string;
  label: string;
}

const FieldButton: React.FC<FieldButtonProps> = ({ icon, label }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <button
      type="button"
      className={`flex p-3 items-center gap-1 rounded-xl border-[1.5px] border-orange-100 ${
        isClicked ? "bg-orange-200" : "bg-white"
      }`}
      onClick={handleClick}
    >
      <img src={icon} alt={label} />
      <p
        className={`font-regular text-body7 ${
          isClicked ? "text-orange-400" : "text-primary-70"
        }`}
      >
        {label}
      </p>
    </button>
  );
};

export default FieldButton;
