import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { PrimaryButton } from '../components/PrimaryButton';
import { SecondaryButton } from '../components/SecondaryButton';
import { Input } from '../components/Input';

const Information = () => {
  const { state, addBuyer } = React.useContext(AppContext);
  const form = React.useRef(null);
  const navigate = useNavigate();

  const { cart } = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);

    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      city: formData.get('city'),
      state: formData.get('state'),
      country: formData.get('country'),
      state: formData.get('state'),
      zipCode: formData.get('zipCode'),
      phone: formData.get('phone'),
    };
    addBuyer(buyer);
    navigate('/checkout/payment');
  };

  return (
    <main className="flex flex-col gap-4 w-full mx-auto lg:w-3/5 lg:flex-row">
      <section className="flex flex-col gap-4 w-full lg:w-4/5 ">
        <div>
          <h2 className="font-bold text-xl">Informacion de contacto:</h2>
        </div>
        <div>
          <form ref={form} className="flex flex-col gap-2">
            <Input type="text" name="name" id="" placeholder="Nombre" />
            <Input type="text" name="email" id="" placeholder="Correo" />
            <Input type="text" name="address" id="" placeholder="Dirección" />
            <Input type="text" name="city" id="" placeholder="Ciudad" />
            <Input type="text" name="state" id="" placeholder="Estado" />
            <Input type="text" name="country" id="" placeholder="País" />
            <Input type="text" name="zipCode" id="" placeholder="Código Postal" />
            <Input type="text" name="phone" id="" placeholder="Teléfono" />
          </form>
        </div>
        <div className="flex items-center justify-around">
          <Link to="/checkout">
            <SecondaryButton
              type="button"
              content="Regresar"
              handleClick={() => {}}
            />
          </Link>
          <PrimaryButton
            type="button"
            content="Pagar"
            handleClick={handleSubmit}
          />
        </div>
      </section>
      <aside className="w-5/6 mx-auto lg:w-1/5">
        <h3 className="font-bold text-xl">Pedido:</h3>
        {cart.map((item, index) => {
          return (
            <div key={`information:${item.title}${index}`}>
              <div className="flex items-center justify-between space-y-2">
                <h4>{item.title}</h4>
                <span className="font-semibold">$ {item.price}</span>
              </div>
            </div>
          );
        })}
      </aside>
    </main>
  );
};

export { Information };
