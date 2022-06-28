import React from 'react';

const PrimaryButton = ({ type, handleClick, content }) => {
  return (
    <button
      type={type}
      className="grid place-items-center min-w-[112px] max-w-fit h-12 px-4 py-2 border-2 rounded-md border-platzi-blue bg-platzi-blue text-text-white font-semibold"
      onClick={handleClick}
    >
      {content}
    </button>
  );
};

export { PrimaryButton };
