import React, { useState } from "react";

interface FieldButtonProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}

const FieldButton: React.FC<FieldButtonProps> = ({ icon: Icon, label }) => {
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
      <Icon className="w-5 h-5" />
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
