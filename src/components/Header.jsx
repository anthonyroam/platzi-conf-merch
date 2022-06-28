import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';
import { CartPopUp } from './CartPopUp';

const Header = () => {
  const { state } = React.useContext(AppContext);
  const { cart } = state;

  return (
    <div className="fixed flex items-center justify-between w-full h-20 px-8 py-4 bg-platzi-blue text-text-white font-sans lg:px-10">
      <h1 className="text-2xl font-semibold">
        <Link to="/">PlatziConf Merch</Link>
      </h1>
      <div className="relative">
        <Link to="/checkout">
          <FaShoppingCart className="text-2xl" />
        </Link>
        {!!cart.length && <CartPopUp number={cart.length} />}
      </div>
    </div>
  );
};

export { Header };
