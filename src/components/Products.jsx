import React from 'react';
import { Product } from './Product';
import { AppContext } from "../context/AppContext";

const Products = () => {
  const { state, addToCart} = React.useContext(AppContext);
  const { products } = state;

  const handleAddToCart = product => {
    addToCart(product);
  };

  return (
    <div className="w-4/5 mx-auto">
      <div className="flex items-center justify-center gap-8 flex-wrap">
        {products.map((product) => {
          return <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />;
        })}
      </div>
    </div>
  );
};

export { Products };
