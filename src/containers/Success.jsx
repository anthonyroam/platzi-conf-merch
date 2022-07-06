import React from 'react';
import { Map } from '../components/Map';
import { AppContext } from '../context/AppContext';
import usePositionStack from '../hooks/usePositionStack';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Success = () => {
  const { state, emptyCart } = React.useContext(AppContext);
  const [name, setName] = React.useState('');

  const lastBuyer = state.buyer.length - 1;
  const map = usePositionStack(state.buyer[lastBuyer]);

  React.useEffect(() => {
    if (!!state.orders.length) {
      emptyCart();

      const LastOrder = state.orders.length - 1;
      const name = state.orders[LastOrder].buyer.name;

      setName(name);
    }
  }, [state.orders]);

  return (
    <>
      <Helmet>
        <title>Platzi conf merch - Success</title>
      </Helmet>
      <main className="w-full mx-auto lg:w-3/5">
        {!!state.orders.length ? (
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="font-bold text-xl">
                {name}, Gracias por tu compra!
              </h2>
              <span onClick={() => console.log(state)}>
                Tu pedido llegara en 3 dias a tu direccion
              </span>
            </div>
            {!!map ? (
              <Map data={map} />
            ) : (
              <div className="font-semibold ">Cargando...</div>
            )}
            <Link to="/" className="text-platzi-blue font-semibold">
              Volver atras
            </Link>
          </div>
        ) : (
          <div>
            <p className="text-xl font-semibold">
              No tienes ninguna orden pendiente
            </p>
            <Link to="/" className="text-platzi-blue font-semibold">
              Volver atras
            </Link>
          </div>
        )}
      </main>
    </>
  );
};

export { Success };
