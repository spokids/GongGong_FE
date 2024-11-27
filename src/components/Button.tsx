import React from 'react';

interface ButtonProps {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
    [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({
    className = "",
    style = {},
    children , 
    ...props
}) => {
    const baseSize = `flex justify-center items-center w-[350px] h-[56px] p-[1px 20px] rounded-lg`; // padding 수정
    return (
        <button
            className={`${baseSize} ${className}`}
            style={style}
            {...props}
        >
            {children} 
        </button>
    );
};

export default Button;
