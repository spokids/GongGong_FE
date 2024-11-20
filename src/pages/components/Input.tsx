import React, { useState } from "react";

const Input = ({ 
    type = "text", 
    placeholder = "", 
    className = "", 
    ...props 
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState("");

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    const handleChange = (e) => setValue(e.target.value);

    const baseStyles = `w-[350px] h-[52px] px-3 py-[11px] rounded-lg text-sm font-normal font-['Pretendard'] leading-snug ${className}`;
    const focusedStyles = isFocused
        ? "bg-[#fff9f3] text-[#31313b] border-[#FED7AA] border-solid border-[2px] outline-none font-normal text-sm leading-snug"
        : "bg-white text-[#8d8d92] border-[#FFEDD5] border-solid border-[2px] outline-none font-normal text-sm leading-snug";
    const filledStyles = value
        ? "border-[#FED7AA] text-[#31313b] bg-[#FFFAF3] border-solid border-[2px] outline-none"
        : "";

    return (
        <input
            type={type}
            placeholder={isFocused ? "" : placeholder}
            className={`${baseStyles} ${focusedStyles} ${filledStyles}`}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            value={value}
            {...props}
        />
    );
};

export default Input;
