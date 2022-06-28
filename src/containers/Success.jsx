import React from 'react';
import { Map } from '../components/Map';
import { AppContext } from '../context/AppContext';
import usePositionStack from '../hooks/usePositionStack';

const Success = () => {
  const { state, emptyCart } = React.useContext(AppContext);

  const [name, setName] = React.useState('');
  const map = usePositionStack(state.buyer[state.buyer.length - 1]);

  React.useEffect(() => {
    if (!!state.orders.length) {
      emptyCart();
      const name = state.orders[state.orders.length - 1].buyer.name;
      setName(name);
    }
  }, [state.orders]);

  return (
    <div className="w-full mx-auto lg:w-3/5">
      <div className="space-y-4">
        <h2 className="font-bold text-xl">{name}, Gracias por tu compra!</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion</span>
        {!!map ? (
          <Map data={map} />
        ) : (
          <div className="font-semibold ">wait a few second...</div>
        )}
      </div>
    </div>
  );
};

export { Success };
