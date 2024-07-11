import React from 'react';

function Button({ label, size, color, display = 'inline-block' }) {
  const style = {
    backgroundColor: color,
    padding: size === 'small' ? '5px 10px' : size === 'medium' ? '10px 20px' : '15px 30px',
    margin: '5px',
    border: 'none',
    borderRadius: '4px',
    color: 'white',
    fontSize: size === 'small' ? '12px' : size === 'medium' ? '14px' : '16px',
    cursor: 'pointer',
    display: display,
    boxSizing: 'border-box'
  };
  return <button style={style}>{label}</button>;
}

export default Button;
