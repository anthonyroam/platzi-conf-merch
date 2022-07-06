import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';
import { CartPopUp } from './CartPopUp';

const Header = () => {
  const { state } = React.useContext(AppContext);
  const { cart } = state;

  return (
    <header className="fixed flex items-center justify-between w-full h-20 px-4 py-4 bg-platzi-blue text-text-white font-sans lg:px-10">
      <Link className="flex items-center justify-center" to="/">
        <div className="h-14 w-14">
          <img
            alt="platzi-icon"
            src="https://res.cloudinary.com/ds8efp758/image/upload/v1656480962/platzi-icon2_lwzym1.jpg"
          />
        </div>
        <h1 className="text-2xl font-semibold">PlatziConf Merch</h1>
      </Link>
      <div className="relative">
        <Link to="/checkout">
          <FaShoppingCart className="text-2xl" />
        </Link>
        {!!cart.length && <CartPopUp number={cart.length} />}
      </div>
    </header>
  );
};

export { Header };
