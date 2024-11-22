import React from "react";

interface ChipProps {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

const Chip: React.FC<ChipProps> = ({ children, className = "", style = {} }) => {
  const baseStyle = `
    flex items-center justify-center 
    w-[61px] h-8
    px-2 py-[6px]
    text-button3
    rounded-lg 
    bg-orange-100 
    text-orange-400 
    cursor-pointer
  `;

  return (
    <div
      className={`${baseStyle} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Chip;
