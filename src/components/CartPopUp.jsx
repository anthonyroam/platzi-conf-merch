import React from 'react';

const CartPopUp = ({ number }) => {
  return (
    <div className="absolute -top-3 -right-3 w-5 h-5 grid place-items-center rounded-full bg-red-600 text-text-white text-sm">
      <div>{number}</div>
    </div>
  );
};

export { CartPopUp };
