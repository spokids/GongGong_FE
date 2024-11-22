import React from 'react';

interface ButtonProps {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode; // children의 타입을 ReactNode로 명시
    [key: string]: any; // 기타 props를 받기 위한 설정
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
