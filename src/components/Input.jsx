import React from 'react';

const Input = ({ type, name, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="p-2 outline-platzi-blue"
    />
  );
};

export { Input };
