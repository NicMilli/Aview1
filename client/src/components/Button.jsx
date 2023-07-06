import React from 'react';

const Button = ({ children, handleClick, selected }) => {

    return (   
        <button className={selected ? 'gradient-btn current-btn' : 'gradient-btn'} onClick={handleClick}>
            {children}
        </button>
    );
}

export default Button;