import React from 'react';
import { Product } from './Product';
import { AppContext } from '../context/AppContext';

const Products = () => {
  const { state, addToCart } = React.useContext(AppContext);
  const { products } = state;

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="flex items-center justify-center gap-8 flex-wrap">
      {products.map((product, index) => {
        return (
          <Product
            key={`product:${product.id}${index}`}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        );
      })}
    </div>
  );
};

export { Products };
