import React from 'react';

const Button = ({ children, handleClick }) => {

    return (   
        <button className='gradient-btn' onClick={handleClick}>
            {children}
        </button>
    );
}

export default Button;