import React from 'react';
import { PrimaryButton } from './PrimaryButton';

const Product = ({ product, handleAddToCart }) => {
  const { image, title, price, description } = product;

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-96 w-72 rounded-md shadow-md p-6 bg-bg-card">
      <div className="h-40 w-40 grid place-items-center">
        <img src={image} alt={title} />
      </div>
      <div>
        <div className="flex justify-around font-bold border-b-2 border-gray-200">
          <h2>{title}</h2>
          <span className="font-bold text-xl">$ {price}</span>
        </div>
        <p className="text-center p-2">{description}</p>
      </div>
      <PrimaryButton
        type="button"
        content="Add to cart"
        handleClick={() => handleAddToCart(product)}
      />
    </div>
  );
};

export { Product };
