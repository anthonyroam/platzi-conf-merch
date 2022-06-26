import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from "../context/AppContext";

const Information = () => {
  const { state, addBuyer } = React.useContext(AppContext);
  const form = React.useRef(null);
  const navigate = useNavigate();

  const { cart } = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);

    const buyer = {
      "name": formData.get("name"),
      "email": formData.get("email"),
      "address": formData.get("address"),
      "apto": formData.get("apto"),
      "city": formData.get("city"),
      "country": formData.get("country"),
      "state": formData.get("state"),
      "zipCode": formData.get("zipCode"),
      "phone": formData.get("phone"), 
    };
    addBuyer(buyer);
    navigate("/checkout/payment");
  };
  
  return (
    <div className="flex w-3/5 mx-auto py-8">
      <div className="flex flex-col gap-4 w-4/5 ">
        <div>
          <h2 className="font-bold text-xl">Informacion de contacto</h2>
        </div>
        <div>
          <form ref={form} className="flex flex-col gap-2">
            <input type="text" name="name" id="" placeholder="Full name" />
            <input type="text" name="email" id="" placeholder="Email" />
            <input type="text" name="address" id="" placeholder="Address" />
            <input type="text" name="apto" id="" placeholder="Apto" />
            <input type="text" name="city" id="" placeholder="city" />
            <input type="text" name="country" id="" placeholder="Country" />
            <input type="text" name="state" id="" placeholder="State" />
            <input type="text" name="zipCode" id="" placeholder="Zip code" />
            <input type="text" name="phone" id="" placeholder="Phone" />
          </form>
        </div>
        <div className="flex items-center justify-around">
          <div>
            <Link to="/checkout">
              Regresar
            </Link>
          </div>
          <button onClick={handleSubmit}>
              Pagar
          </button>
        </div>
      </div>
      <div className="w-1/5">
        <h3 className="font-bold text-xl">Pedido:</h3>
        {cart.map(item => {
           return <div key={item.title}>
            <div className="flex items-center justify-between">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        })}
      </div>
    </div>
  );
};

export { Information };
