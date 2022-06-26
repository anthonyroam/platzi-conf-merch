import React from 'react';
import { AppContext } from "../context/AppContext";

const Payment = () => {
  const { state } = React.useContext(AppContext);
  const { cart } = state;
  
  return (
    <div className="w-3/5 mx-auto">
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Resumen del pedido:</h3>
        {cart.map(item => (
          <div className='w-4/5 mx-auto'>
            <div className='flex items-center justify-between border-b-2 border-gray-400'>
              <h3>{item.title}</h3>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div>Pago con PayPal</div>
      </div>
      <div />
    </div>
  );
};

export { Payment };
