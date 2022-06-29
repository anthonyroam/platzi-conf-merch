import React from 'react';

const PrimaryButton = ({ type, handleClick, content }) => {
  return (
    <button
      type={type}
      className="grid place-items-center min-w-[112px] max-w-full h-10 px-4  border-2 rounded-md border-platzi-blue bg-platzi-blue text-text-white font-semibold"
      onClick={handleClick}
    >
      {content}
    </button>
  );
};

export { PrimaryButton };
