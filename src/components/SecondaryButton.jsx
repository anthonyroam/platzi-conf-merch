import React from 'react';

const SecondaryButton = ({ type, handleClick, content }) => {
  return (
    <button
      type={type}
      className="grid place-items-center min-w-[112px] max-w-fit h-10 px-4 border-2 rounded-md border-platzi-blue bg-text-white text-platzi-blue font-semibold"
      onClick={handleClick}
    >
      {content}
    </button>
  );
};

export { SecondaryButton };
