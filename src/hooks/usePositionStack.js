import React from 'react';
import axios from 'axios';

const usePositionStack = (buyer) => {
  const [map, setMap] = React.useState();

  const API_KEY = '12f2ae1c7c518721bd1163f8d0438b10';

  const getData = async () => {
    const { address, city, country } = buyer;
    const response = await axios(
      `http://api.positionstack.com/v1/forward?access_key=${API_KEY}&query=${address},${city},${country}`
    );

    setMap(response.data.data[0]);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return map;
};

export default usePositionStack;
