import React from "react";

interface ChipProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Chip: React.FC<ChipProps> = ({
  children,
  className = "",
  style = {},
}) => {
  const baseStyle = `
    inline-flex items-center justify-center
    h-8
    px-3 py-[6px]
    text-button3
    rounded-lg 
    bg-orange-100 
    text-orange-400 
    cursor-pointer
    gap-[4px]
  `;

  return (
    <div
      className={`${baseStyle} ${className}`}
      style={{ width: "fit-content", ...style }}
    >
      {children}
    </div>
  );
};

export default Chip;
