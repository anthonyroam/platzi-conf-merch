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
    <div className="flex gap-4 w-3/5 mx-auto py-8">
      <div className="flex flex-col gap-4 w-4/5 ">
        <div>
          <h2 className="font-bold text-xl">Informacion de contacto:</h2>
        </div>
        <div>
          <form ref={form} className="flex flex-col gap-2">
            <Input type="text" name="name" id="" placeholder="Full name" />
            <Input type="text" name="email" id="" placeholder="Email" />
            <Input type="text" name="address" id="" placeholder="Address" />
            <Input type="text" name="city" id="" placeholder="City" />
            <Input type="text" name="state" id="" placeholder="State" />
            <Input type="text" name="country" id="" placeholder="Country" />
            <Input type="text" name="zipCode" id="" placeholder="Zip code" />
            <Input type="text" name="phone" id="" placeholder="Phone" />
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
      </div>
      <div className="w-1/5">
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
      </div>
    </div>
  );
};

export { Information };
