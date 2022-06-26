import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import { AppContext } from "../context/AppContext";
import { sumTotal } from '../utils/sumTotal';

const Checkout = () => {
  const { state, removeFromCart } = React.useContext(AppContext);
  const { cart } = state;

  const handleRemoveFromCart = (index) => {
    removeFromCart(index)
  };

  // const handleSumTotal = () => {
  //   const reducer = (acumulator, currentValue) => acumulator + currentValue.price;
  //   const sum = cart.reduce(reducer, 0);
  //   return sum
  // };

  return (
    <div className="flex justify-between w-3/5 mx-auto px-6 py-10">
      <div className="w-4/5">
        {!!cart.length ? <h3 className="font-bold">Lista de pedidos</h3> : <h3 className="font-bold">Sin pedidos...</h3>}
        {cart.map((item, index) => (
          <div className="flex items-center justify-between gap-8 w-full " key={item.id}>
            <div className="flex items-center justify-between w-full border-b-2 border-gray-400">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
            <button type="button" onClick={() => handleRemoveFromCart(index)}>
              <FaTrashAlt title='remove' className="text-large" />
            </button>
          </div>
        ))}
      </div>
      {!!cart.length && 
        <div className="font-semibold space-y-4">
          <h3>Precio total: $ {sumTotal(cart)}</h3>
          <button
            type="button"
            className="px-4 py-2 border-2 rounded-md border-white bg-platzi-blue text-text-white"
          >
            <Link to="/checkout/information">Continuar pedido</Link>
          </button>
        </div>
      }
    </div>
  );
};

export { Checkout };
