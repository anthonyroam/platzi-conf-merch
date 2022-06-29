import React from 'react';
import axios from 'axios';

const usePositionStack = (buyer) => {
  const [map, setMap] = React.useState();

  const API_KEY = `pk.7be24c0c25071dd1cef443938dee607a`
  const getData = async () => {
    const { address, city, country } = buyer;
    const response = await axios(
      `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${address},${city},${country}&format=json`
    );
    try {
      setMap(response.data[0]);
    } catch (error) {
      throw new Error(error);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return map;
};

export default usePositionStack;
