import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';
import sumTotal from '../utils/sumTotal';
import { PrimaryButton } from '../components/PrimaryButton';
import { SecondaryButton } from '../components/SecondaryButton';

const Checkout = () => {
  const { state, removeFromCart } = React.useContext(AppContext);
  const { cart } = state;

  const handleRemoveFromCart = (index) => {
    removeFromCart(index);
  };

  return (
    <main className="flex flex-col gap-6 w-full mx-auto px-6 py-10 lg:w-3/5 lg:flex-row">
      <section className="w-full space-y-4 lg:w-3/5 ">
        {!!cart.length ? (
          <h3 className="font-bold text-2xl">Lista de pedidos:</h3>
        ) : (
          <h3 className="font-bold text-2xl">Sin pedidos...</h3>
        )}
        {cart.map((item, index) => (
          <div
            className="flex items-center justify-between gap-8 w-full"
            key={`checkout:${item.id}${index}`}
          >
            <div className="flex items-center justify-between w-full  border-b-2 border-gray-400">
              <h4 className="text-lg">{item.title}</h4>
              <span className="font-semibold">$ {item.price}</span>
            </div>
            <button type="button" onClick={() => handleRemoveFromCart(index)}>
              <FaTrashAlt title="remove" className="text-large" />
            </button>
          </div>
        ))}
      </section>
      {!!cart.length && (
        <aside className="flex flex-col gap-4 font-semibold">
          <h3 className="text-lg">Precio total: $ {sumTotal(cart)}</h3>
          <Link to="/checkout/information">
            <PrimaryButton 
              type="button"
              content="Continuar pedido"
              handleClick={null}
            />
          </Link>
          <Link to="/">
            <SecondaryButton 
              type="button"
              content="Regresar"
              handleClick={null}
            />
          </Link>
        </aside>
      )}
    </main>
  );
};

export { Checkout };
