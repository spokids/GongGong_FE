import React from 'react';

const ButtonComponent = ({
    className = "",
    text = "",
    style = {},
    ...props
}) => {
    const baseSize = `flex justify-center items-center w-full h-[56px] padding-[1px 20px] rounded-lg `; 
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

export default ButtonComponent;
