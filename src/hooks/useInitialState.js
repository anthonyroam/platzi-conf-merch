import React from 'react';
import initialState from '../InitialState';

const useInitialState = () => {
  const [state, setState] = React.useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payloadIndex) => {
    setState({
      ...state,
      cart: state.cart.filter((_, index) => index !== payloadIndex),
    });
  };

  const addBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  const emptyCart = () => {
    setState({
      ...state,
      cart: [],
    });
  };

  return {
    addToCart,
    removeFromCart,
    addBuyer,
    addNewOrder,
    emptyCart,
    state,
  };
};

export default useInitialState;
