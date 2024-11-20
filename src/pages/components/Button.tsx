import React from 'react';

const Button = ({
    className = "",
    text = "",
    style = {},
    ...props
}) => {
    const baseSize = `flex justify-center items-center w-[350px] h-[56px] padding-[1px 20px] rounded-lg `; 
    return (
        <button
            className={`${baseSize} ${className}`}
            style={style}
            {...props}
        >
            {text}
        </button>
    );
};

export default Button;
