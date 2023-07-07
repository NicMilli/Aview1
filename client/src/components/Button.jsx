import React from 'react';

function Button({ children, handleClick, selected }) {
  return (
    <button type="button" className={selected ? 'gradient-btn current-btn' : 'gradient-btn'} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
