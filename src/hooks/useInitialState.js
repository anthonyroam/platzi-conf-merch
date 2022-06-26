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

  const addBuyer = payload => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    })
  }

  return {
    addToCart,
    removeFromCart,
    addBuyer,
    state,
  };
};

export default useInitialState;