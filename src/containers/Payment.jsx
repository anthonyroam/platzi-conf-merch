import React from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import sumTotal from '../utils/sumTotal';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { SecondaryButton } from "../components/SecondaryButton";
import { Link } from 'react-router-dom';

const Payment = () => {
  const { state, addNewOrder } = React.useContext(AppContext);
  const { cart, buyer } = state;
  const history = useNavigate();

  const handleApprove = (details) => {
    if (details.status === 'COMPLETED') {
      const newOrder = {
        buyer: buyer[buyer.length - 1],
        product: cart,
        payment: details,
      };
      addNewOrder(newOrder);
      history('/checkout/success');
    }
  };

  return (
    <main className="w-full mx-auto flex flex-col gap-4 items-center lg:w-3/5">
      <h3 className="font-bold text-lg">Resumen del pedido:</h3>
      {cart.map((item, index) => (
        <div
          className="w-full mx-auto lg:w-3/5"
          key={`item:${item.id}${index}`}
        >
          <div className="flex items-center justify-between border-b-2 border-gray-400">
            <h3 className="text-lg">{item.title}</h3>
            <span className="font-semibold">$ {item.price}</span>
          </div>
        </div>
      ))}
      {!!cart.length && (
        <h3 className="font-semibold text-lg text-right self-start w-full mx-auto lg:w-3/5">
          Total : $ {sumTotal(cart)}
        </h3>
      )}
      <PayPalButtons
        style={{
          layout: 'vertical',
          color: 'blue',
          tagline: false,
        }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: sumTotal(cart),
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            handleApprove(details);
          });
        }}
      />
      <Link to="/checkout">
        <SecondaryButton
          type="button"
          content="Cancelar"
          handleClick={null}
        />
      </Link>
    </main>
  );
};

export { Payment };
